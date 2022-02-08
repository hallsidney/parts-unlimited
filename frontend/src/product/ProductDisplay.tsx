import {ProductCard} from "./ProductCard";
import {Product} from "./product";
import {Grid} from "@mui/material";

type ProductDisplayProps = {
    products: Product[]
    refreshPage: () => void
}


export const ProductDisplay = ({products, refreshPage}: ProductDisplayProps) => {
    return (
        <Grid container>
            <Grid item xs={4}>Product Name</Grid>
            <Grid item xs={4}>Quantity</Grid>
            <Grid item xs={4}>Adjust Quantity</Grid>
            {products.map(product => {
                return (
                    <ProductCard key={product.id} product={product} refresh={refreshPage}/>
                );
            })}
        </Grid>

    )
}