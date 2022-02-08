import {getProducts} from "../productsApiClient";
import {render, screen} from "@testing-library/react";
jest.mock("../productsApiClient")

const mockGetProducts = getProducts as jest.MockedFunction<typeof getProducts>

describe("Product Display", () => {
    it("Should Display the products in the Inventory", () => {

        const products = [{id: 1, name: "product 1", quantity: 0}, {id: 2, name: "product 2", quantity: 0}]
        mockGetProducts.mockResolvedValueOnce(products)
        render(<ProductDisplay />)

    })
})