const addProduct = (product: string) => {
  cy.findByLabelText("Product to add").type(product);
  cy.findByRole("button", {name:"Submit"}).click();
}
describe("inventory", () => {
  describe("when adding a product offering", () => {
    it("should display the new product with a default quantity of 0", () => {
      cy.visit("http://localhost:8080");
      addProduct("shiny-new-product");
      cy.findByText("shiny-new-product").should("exist");
      cy.findAllByText("0").should("exist");
    });
  });
  describe("when increasing the inventory of a product offering", () => {
    it("should display new inventory of the product", () => {
      cy.visit("http://localhost:8080");
      cy.findByLabelText("Enter").type("10");
      cy.findByRole('button', {name:"Submit"}).click()
      cy.findByText("10").should("exist")
    })
  })
});
