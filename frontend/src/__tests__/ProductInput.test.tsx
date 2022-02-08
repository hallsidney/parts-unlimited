import {ProductInput} from "../ProductInput";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {createProduct} from "../productsApiClient";
jest.mock("../productsApiClient")

const mockCreateProduct = createProduct as jest.MockedFunction<typeof createProduct>

describe("Product Input", () => {
    const mockRefresh = jest.fn()
    it("Adds a Product to Product Inventory", () => {
        mockCreateProduct.mockResolvedValueOnce({id: 1, name: "Coil Pack", quantity: 0})
        render(<ProductInput refreshPage={mockRefresh}/>)
        userEvent.type(screen.getByLabelText("Product to add"), "Coil Pack")
        userEvent.click(screen.getByRole("button", {name: "Submit"}))

        expect(mockCreateProduct).toHaveBeenCalledWith("Coil Pack")
    })
})