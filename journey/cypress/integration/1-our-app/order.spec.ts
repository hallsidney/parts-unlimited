
function clickDropdown(productName:string) {
    cy.findByLabelText("order").findByTestId('KeyboardArrowDownIcon').click();
    cy.findByRole('option', {name:productName})
}

function orderProduct(productName:string, quantity:string){
    clickDropdown(productName)
    cy.findByText(productName).click()
    cy.findByLabelText("Order Quantity").type(quantity)
    cy.findByRole('button', {name:"Submit Order"}).click()
}

describe("order", () => {
    describe("when adding an order request", () => {
        it("should display the order with quantity of product requested", () => {
            cy.visit("http://localhost:8080");
            orderProduct("shiny-new-product", "3");
            cy.findByText("Order Of 3 shiny-new-product").should("exist");
        });
    });
});