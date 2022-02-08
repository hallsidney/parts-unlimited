import React, {FormEvent, useEffect, useState} from "react";
import {createProduct, getProducts} from "./clients/productsApiClient";
import {Box, Container} from "@mui/material";
import {Product} from "./product/product";
import {ProductDisplay} from "./product/ProductDisplay";
import {ProductInput} from "./product/ProductInput";
import {OrderView} from "./order/OrderView";

const App = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [refresh, setRefresh] = useState<number>(0);

    useEffect(() => {
        getProducts().then(setProducts);
    }, [refresh]);

    const refreshPage = () => {
        setRefresh(prevState => prevState + 1)
    }


    return (
        <Container sx={{mx: 1, my: 1}}>
            <h1>Parts Unlimited Inventory</h1>
            <ProductDisplay products={products} refreshPage={refreshPage}/>
            <ProductInput refreshPage={refreshPage}/>
            {products.length > 0 &&
            <Container>
                <h2>Place Your Order Here: </h2>
                {/*<OrderView products={products} refreshPage={refreshPage}/>*/}
            </Container>}
        </Container>
    );
}

export default App;
