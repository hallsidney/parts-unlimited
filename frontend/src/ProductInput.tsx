import React, {FormEvent, useState} from "react";
import {createProduct, getProducts} from "./productsApiClient";

type Props = {
    refreshPage: () => void;
}

export const ProductInput = ({refreshPage}: Props) => {
    const [productName, setProductName] = useState<string>("");

    const submitForm = (event: FormEvent) => {
        event.preventDefault();
        createProduct(productName).then(() => {
            refreshPage();
        });
    }

    const setProductNameFromInput = (event: FormEvent<HTMLInputElement>) => {
        setProductName(event.currentTarget.value);
    };

    return (
        <form onSubmit={submitForm}>
            <br/>
            <label>
                Product to add
                <input name="product" type="text" onChange={setProductNameFromInput}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}