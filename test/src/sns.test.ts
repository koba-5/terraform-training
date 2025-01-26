import { SNS } from "@aws-sdk/client-sns";
import { SSM } from "@aws-sdk/client-ssm";
import clientConfig from "./lib/clientConfig";

const snsClient = new SNS(clientConfig);

let snsTopic = "";
let snsTopicNextToSqs = "";
beforeAll(async () => {
  const ssmClient = new SSM(clientConfig);
  const { Parameter: _snsTopic } = await ssmClient.getParameter({ Name: "local-sns-topic-arn" });
  const { Parameter: _snsTopicNextToSqs } = await ssmClient.getParameter({ Name: "local-next-to-sqs-sns-topic-arn" });

  snsTopic = _snsTopic!!.Value!!;
  snsTopicNextToSqs = _snsTopicNextToSqs!!.Value!!;
});

describe("Amazon SNS", () => {
  test("listSubscriptions", async () => {
    /* when */
    const { Subscriptions } = await snsClient.listSubscriptions();

    /* then */
    expect(Subscriptions).toMatchObject([
      {
        Endpoint: "arn:aws:sqs:ap-northeast-1:000000000000:local-sqs-queue",
        Owner: "000000000000",
        Protocol: "sqs",
        TopicArn: snsTopicNextToSqs,
      },
    ]);
  });

  test("receiveMessage & deleteMessage", async () => {
    /* when */
    const { MessageId } = await snsClient.publish({
      Message: '{"message":"Hello World!!"}',
      TopicArn: snsTopic,
    });

    /* then */
    expect(MessageId).not.toBeUndefined();
  });
});
