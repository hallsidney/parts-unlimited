import nock from 'nock';
import {getOrders, createOrder} from "../clients/ordersApiClient";
import {createProduct} from "../clients/productsApiClient";

describe('ordersApiClient', () => {
    describe('getOrders', () =>{
        it("Should make a GET request to retrieve all orders", async () => {
            const expectedOrders = [{}]
            nock('http://localhost').get('/orders').reply(200, expectedOrders);

            const actualOrders = await getOrders();
            expect(actualOrders).toEqual(expectedOrders)
        })
    });

    describe('createOrder', () => {
        it('should make a POST request to create an order', async () => {
            const expectedOrder = {id:1, quantity:3, product:{id:1, name:"Dohickey", quantity:1}}
            const scope = nock('http://localhost', {
                reqheaders: {
                    'Content-Type': 'application/json'
                }
            }).post('/orders', expectedOrder)
                .reply(200, {id:1, quantity:3, product:{id:1, name:"Dohickey", quantity:1}});

            const response = await createOrder({id:1, quantity:3, product:{id:1, name:"Dohickey", quantity:1}});

            expect(scope.isDone()).toEqual(true);
            expect(response.id).toEqual(1);
            expect(response.product.name).toEqual("Dohickey");
            expect(response.quantity).toEqual(3);
        });
    });

});