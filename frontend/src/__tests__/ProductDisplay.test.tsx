import {render, screen} from "@testing-library/react";
import {ProductDisplay} from "../ProductDisplay";
jest.mock("../productsApiClient")


describe("Product Display", () => {
    it("Should Display the products in the Inventory", () => {
        const mockRefresh = jest.fn()
        const products = [{id: 1, name: "product 1", quantity: 0}, {id: 2, name: "product 2", quantity: 0}]
        render(<ProductDisplay products={products} refreshPage={mockRefresh}/>)
        expect(screen.getByText("product 1")).toBeInTheDocument();
        expect(screen.getByText("product 2")).toBeInTheDocument();



    })
})