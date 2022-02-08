import React, {FormEvent, useEffect, useState} from "react";
import {createProduct, getProducts} from "./productsApiClient";
import {Box, Container} from "@mui/material";
import {Product} from "./product/product";
import {ProductDisplay} from "./product/ProductDisplay";
import {ProductInput} from "./product/ProductInput";

const App = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [refresh, setRefresh] = useState<number>(0);

    useEffect(() => {
        getProducts().then(setProducts);
    }, [refresh]);

    const refreshPage = () => {setRefresh(prevState => prevState + 1)}



    return (
        <Container sx={{mx: 1, my: 1}}>
            <h1>Parts Unlimited Inventory</h1>
            <ProductDisplay products={products} refreshPage={refreshPage}/>
            <ProductInput refreshPage={refreshPage}/>
        </Container>
    );
}

export default App;
