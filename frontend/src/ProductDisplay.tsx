import {ProductCard} from "./ProductCard";
import {Product} from "./product";
import {Grid} from "@mui/material";

type ProductDisplayProps = {
    products: Product[]
    refreshPage: () => void
}


export const ProductDisplay = ({products, refreshPage}: ProductDisplayProps) => {

    return (
        <Grid item container>
            <Grid item xs={4}>Product Name</Grid>
            <Grid item xs={4}>Quantity</Grid>
            <Grid item xs={4}>Adjust Quantity</Grid>
            {products.map(product => {
                console.log(product),
                <ProductCard product={product} refresh={refreshPage}/>
            })}
        </Grid>

    )
}