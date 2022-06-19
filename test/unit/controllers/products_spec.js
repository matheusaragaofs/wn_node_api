import ProductsController from "../../../src/controllers/products";
import sinon from "sinon";
import Product from "../../../src/models/product";
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
    it("should return a list of products", async () => {
      const request = {};
      const response = {
        send: sinon.spy(),
        // Os spies permitem gravar informações como quantas vezes uma função foi chamada
      };
      Product.find = sinon.stub() //. Desta maneira será possível adicionar qualquer comportamento para essa função simulando uma chamada de banco de dados por exemplo.
      Product.find.withArgs({}).resolves(defaultProduct)
  
      const productsController = new ProductsController(Product);
      await productsController.get(request, response)

      sinon.assert.calledWith(response.send,defaultProduct)
      //Isso valida que a função get foi chamada, chamou a função find do model Product passando um objeto vazio e ele retornou uma Promise contendo o defaultProduct
    });
  });
});
