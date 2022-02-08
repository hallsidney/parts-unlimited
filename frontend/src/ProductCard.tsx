import {Product} from "./product";
import {Box, Grid} from "@mui/material";
import React, {FormEvent, useState} from "react";
import {updateProduct} from "./productsApiClient";

type ProductCardProps = {
    product: Product
    refresh: ()=>void
}

export const ProductCard = ({product, refresh}: ProductCardProps) => {
    const [quantity, setQuantity] = useState<string>("");

    const setProductQuantityFromInput = (event:FormEvent<HTMLInputElement>) => {
        event.currentTarget.validity.valid && setQuantity(event.currentTarget.value)
    }

    const submitQuantityForm = (event:FormEvent) => {
        updateProduct(product.id, +quantity).then(() => refresh())
    }

    return (
        <Grid container>
            <Grid item xs={4}>
                {product.name}
            </Grid>
            <Grid item xs={4}>
                {product.quantity}
            </Grid>
            <Grid item xs={4}>
                <form onSubmit={submitQuantityForm}>
                    <label>
                        Quantity to add
                        <input name="quantity" type="text" pattern="[0-9]*" onChange={setProductQuantityFromInput}/>
                    </label>
                    <button>Add</button>
                </form>
            </Grid>
        </Grid>
    )

}