package org.asi.partsunlimited.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.asi.partsunlimited.models.Order;
import org.asi.partsunlimited.models.Product;
import org.asi.partsunlimited.services.OrderService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(OrderController.class)
public class OrderControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private OrderService orderService;

    @Test
    void shouldSaveOrderWhenAOrderProductIsSubmitted() throws Exception {
        Order sampleOrder = Order.builder().id(1L).product(new Product("some-product", 5)).quantity(3).build();
        when(orderService.addOrder(sampleOrder)).thenReturn(Order.builder().id(1L).quantity(3).product(new Product("some-product", 5)).build());

        ObjectMapper mapper = new ObjectMapper();

        this.mockMvc.perform(post("/orders")
                .contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsString(sampleOrder)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.quantity").value("3"));
    }

    @Test
    void shouldRetrieveAllOrdersWhenGettingOrders() throws Exception{
        Order sampleOrder = Order.builder().id(1L).product(new Product("some-product", 5)).quantity(3).build();

        when(orderService.getOrders())
                .thenReturn(List.of(
                    Order
                    .builder()
                    .id(1L)
                    .product(new Product("some-product", 5))
                    .quantity(3).build(),
                    Order
                    .builder()
                    .id(2L)
                    .product(new Product("some-product", 5))
                    .quantity(4).build()));

        this.mockMvc.perform(get("/orders"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].quantity").value(3))
                .andExpect(jsonPath("$[0].id").value(1L))
                .andExpect(jsonPath("$[1].quantity").value(4))
                .andExpect(jsonPath("$[1].id").value(2L));

            verify(orderService).getOrders();

    }


}
