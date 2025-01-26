import { SSM } from "@aws-sdk/client-ssm";
import clientConfig from "./lib/clientConfig";

let apiId = "";
beforeAll(async () => {
  const ssmClient = new SSM(clientConfig);
  const { Parameter } = await ssmClient.getParameter({ Name: "local-rest-api-id" });
  apiId = Parameter!!.Value!!;
});

describe("Amazon API Gateway", () => {
  test("curl api", async () => {
    /* when */
    const data = await (async () => {
      const res = await fetch(`http://localhost:4566/_aws/execute-api/${apiId}/local/hello`);
      return await res.json();
    })();

    /* then */
    expect(data).toMatchObject({ message: "Hello World" });
  });
});
