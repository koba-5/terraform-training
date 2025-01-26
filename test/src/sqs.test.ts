import { SSM } from "@aws-sdk/client-ssm";
import { SQS } from "@aws-sdk/client-sqs";
import clientConfig from "./lib/clientConfig";

const sqsClient = new SQS(clientConfig);

let queueUrl = "";
beforeAll(async () => {
  const ssmClient = new SSM(clientConfig);
  const { Parameter } = await ssmClient.getParameter({ Name: "local-queue-url" });
  queueUrl = Parameter!!.Value!!;
});

describe("Amazon SQS", () => {
  test("listQueues", async () => {
    /* when */
    const { QueueUrls } = await sqsClient.listQueues();

    /* then */
    expect(QueueUrls).toMatchObject([queueUrl]);
  });

  test("sendMessage, receiveMessage, deleteMessage", async () => {
    /* given */
    await sqsClient.sendMessage({
      MessageBody: '{"message":"Hello World!!"}',
      QueueUrl: queueUrl,
    });

    /* when */
    const { Messages } = await sqsClient.receiveMessage({
      QueueUrl: queueUrl,
      MaxNumberOfMessages: 10,
    });

    /* then */
    Messages?.forEach((message) => {
      sqsClient.deleteMessage({
        QueueUrl: queueUrl,
        ReceiptHandle: message.ReceiptHandle as string,
      });

      expect(message.Body).toBe('{"message":"Hello World!!"}');
    });
  });
});
