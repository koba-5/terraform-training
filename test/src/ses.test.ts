import { SES } from "@aws-sdk/client-ses";
import clientConfig from "./lib/clientConfig";

const sesClient = new SES(clientConfig);

describe("Amazon SES", () => {
  test("listIdentities", async () => {
    /* when */
    const { Identities } = await sesClient.listIdentities();

    /* then */
    expect(Identities).toMatchObject(["sender@example.com"]);
  });

  test("sendEmail", async () => {
    /* when */
    const { MessageId } = await sesClient.sendEmail({
      Source: "sender@example.com",
      Destination: {
        ToAddresses: ["recipient@example.com"],
      },
      Message: {
        Subject: { Data: "TEST" },
        Body: {
          Html: {
            Data: "This is a message for the test.",
          },
        },
      },
    });

    /* then */
    expect(MessageId).not.toBeUndefined();
  });
});
