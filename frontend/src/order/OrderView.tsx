import {Product} from "../product/product";
import {Autocomplete, Select, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {createOrder} from "../clients/ordersApiClient";

type OrderViewProps = {
    products: Product[]
    refreshPage: () => void
}
export const OrderView = ({products}: OrderViewProps) => {
    const [orderProduct] = useState<string>(products[0].name);

    // const submitOrder = (event:FormEvent) => {
    //
    // }
    return (
        <form>
            <select value={orderProduct}>
                {products.map(product => {
                    return (
                        <option value={product.id}>
                            {product.name}
                        </option>
                    );
                })}
            </select>
            <button type="submit">SubmitOrder</button>
        </form>
    )
}