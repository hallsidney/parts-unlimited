import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import {createProduct, getProducts} from "../productsApiClient";

jest.mock("../productsApiClient");

const mockGetProducts = getProducts as jest.MockedFunction<typeof getProducts>;
const mockCreateProduct = createProduct as jest.MockedFunction<typeof createProduct>;

const addProduct = (product: string) => {
  userEvent.type(screen.getByLabelText("Product to add"), product);
  userEvent.click(screen.getByRole("button", {name: /submit/i}));
}

describe("inventory", () => {
  describe("when I render the inventory", () => {
    it("the getProducts api should be called", async () => {
      mockGetProducts.mockResolvedValue([{id:1, name: "Lemonade", quantity:0 }])

      render(<App/>);

      await waitFor(() => expect(mockGetProducts).toHaveBeenCalledTimes(1))

    });
  });
});
