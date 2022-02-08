import axios from "axios";
import {Order} from "../order/order"
import {Product} from "../product/product";

export async function getOrders(): Promise<Order[]>{
    return (await axios.get<Order[]>('/orders')).data
}

export async function createOrder(order:Order): Promise<Order>{
    return (await axios.post<Order>("/orders", order, {headers: {'Content-Type': 'application/json'}})).data

}

