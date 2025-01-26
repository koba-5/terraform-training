import { DynamoDB } from "@aws-sdk/client-dynamodb";
import clientConfig from "./lib/clientConfig";

const dynamoDBClient = new DynamoDB(clientConfig);

describe("Amazon DynamoDB", () => {
  test("putItem, getItem", async () => {
    /* given */
    await dynamoDBClient.putItem({
      TableName: "todo",
      Item: { title: { S: "テスト" } },
    });

    /* when */
    const { Item } = await dynamoDBClient.getItem({
      TableName: "todo",
      Key: { title: { S: "テスト" } },
    });

    /* then */
    expect(Item).toMatchObject({
      title: { S: "テスト" },
    });
  });
});
