import {Product} from "../product/product";

export type Order = {
    id: number
    quantity: number;
    product:Product
};