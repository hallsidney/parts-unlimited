import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {OrderView} from "../order/OrderView";
import {createOrder} from "../clients/ordersApiClient";


const mockCreateOrder = createOrder as jest.MockedFunction<typeof createOrder>


describe("Order View", () =>{
    it("Should allow the user to place an order ", async () => {
        const expectedOrder = {id:1, quantity:2, product:{id:1, name:"Option A", quantity:5}}
        mockCreateOrder.mockResolvedValueOnce(expectedOrder)

        const sampleProducts = [{id:1, name:"Option A", quantity:5}, {id:2, name:"Option B", quantity:5}, {id:3, name:"Option C", quantity:5}]
        const mockRefresh = jest.fn()

        render(<OrderView products={sampleProducts} refreshPage={mockRefresh}/>)

        userEvent.click(await screen.findByTestId("KeyboardArrowDownIcon"));
        userEvent.click(await screen.findByRole("option", {name:"Option A"}));
        userEvent.type(await screen.findByLabelText("Order Quantity"), "2");
        userEvent.click(await screen.findByRole("button", {name: "Submit Order"}))

        expect(mockCreateOrder).toHaveBeenCalledWith(expectedOrder)
    })
})