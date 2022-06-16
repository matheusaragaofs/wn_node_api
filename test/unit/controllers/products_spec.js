import ProductsController from "../../../src/controllers/products";
import sinon from "sinon";
import { expect } from "chai";
describe("Controllers: Products", () => {
  const defaultProduct = [
    {
      name: "Default product",
      description: "product description",
      price: 100,
    },
  ];

  describe("get() products", () => {
    it("should return a list of products", () => {
      const request = {};
      const response = {
        send: sinon.spy(),
        // Os spies permitem gravar informações como quantas vezes uma função foi chamada
      };
      const productsController = new ProductsController();
      productsController.get(request, response);

      expect(response.send.called).to.be.true; // Verifica se a função send foi chamada
      expect(response.send.calledWith(defaultProduct)).to.be.true; // Verifica se foi chamada com o defaultProduct como parâmetro
    });
  });
});
