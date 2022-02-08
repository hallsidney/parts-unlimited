import axios from "axios";
import {Product} from "../product/product";

export async function createProduct(product: string): Promise<Product> {
  return (await axios.post<Product>("/products", product, {headers: {'Content-Type': 'text/plain'}})).data
}

export async function getProducts(): Promise<Product[]> {
  return (await axios.get<Product[]>("/products")).data
}

export async function updateProduct(productId: number, quantity:number): Promise<Product>{
  return (await axios.patch<Product>(`/products/${productId}`, quantity, {headers: {'Content-Type': 'application/json'}})).data
}