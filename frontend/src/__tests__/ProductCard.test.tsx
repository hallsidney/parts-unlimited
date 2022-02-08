import {render, screen} from "@testing-library/react";
import {ProductCard} from "../ProductCard";
import App from "../App";
import React from "react";
import {getProducts, updateProduct} from "../productsApiClient";
jest.mock("../productsApiClient")
import userEvent from "@testing-library/user-event";

const mockUpdateProduct = updateProduct as jest.MockedFunction<typeof updateProduct>

describe("Product Card", () => {
    const mockRefresh = jest.fn();
    it("Should Display A Product's Name and Quantity", () => {
        const product = {id: 1, name: "a product", quantity: 0};
        render(<ProductCard product={product} refresh={mockRefresh}/>)
        expect(screen.getByText("a product")).toBeInTheDocument();
        expect(screen.getByText("0")).toBeInTheDocument();
    })
    it("Should Accept A Product Inventory Increase", () => {
        mockUpdateProduct.mockResolvedValueOnce({id: 1, name: "a product", quantity: 10})
        const product = {id: 1, name: "a product", quantity: 0};
        render(<ProductCard product={product} refresh={mockRefresh}/>)
        userEvent.type(screen.getByLabelText("Quantity to add"), "10");
        userEvent.click(screen.getByRole("button", {name:"Add"}));
        expect(mockUpdateProduct).toHaveBeenCalledWith(1, 10);
    })
})