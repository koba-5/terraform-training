import { S3 } from "@aws-sdk/client-s3";
import clientConfig from "./lib/clientConfig";

const s3Client = new S3(clientConfig);

describe("Amazon S3", () => {
  test("listBuckets", async () => {
    /* when */
    const { Buckets } = await s3Client.listBuckets();

    /* then */
    expect(Buckets).toMatchObject([{ Name: "local-s3-bucket" }]);
  });
});
