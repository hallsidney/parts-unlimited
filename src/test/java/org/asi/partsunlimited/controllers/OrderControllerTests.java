package org.asi.partsunlimited.controllers;

import org.asi.partsunlimited.models.Order;
import org.asi.partsunlimited.models.Product;
import org.asi.partsunlimited.services.OrderService;
import org.asi.partsunlimited.services.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
        Order sampleOrder = Order.builder().product(new Product("some-product", 5)).quantity(3).build();
        when(orderService.addOrder(sampleOrder)).thenReturn(Order.builder().quantity(3).product(new Product("some-product", 5)).build());


        this.mockMvc.perform(post("/orders").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(sampleOrder)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.productName").value("some-product"))
                .andExpect(jsonPath("$.quantity").value("0"));
    }


}
