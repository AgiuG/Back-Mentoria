const { createMocks } = require("node-mocks-http");
const { getMultiplier } = require("../server/Function/FunctionController");

describe("getMultiplier", () => {
  let req;
  let res;

  beforeEach(async () => {
    ({ req, res } = createMocks({}));
  });

  test("Multiplicar 2 valores, ok", async () => {
    req.query.ValorA = 10;
    req.query.ValorB = 5;
    await getMultiplier(req, res);

    const response = JSON.parse(res._getData());

    expect(response.message).toEqual(50);
  });
});
