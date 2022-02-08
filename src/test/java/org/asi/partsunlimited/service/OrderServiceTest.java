package org.asi.partsunlimited.service;

import org.asi.partsunlimited.models.Order;
import org.asi.partsunlimited.models.Product;
import org.asi.partsunlimited.repositories.OrderRepository;
import org.asi.partsunlimited.services.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class OrderServiceTest {

    @MockBean
    OrderRepository orderRepository;

    OrderService orderService;

    @BeforeEach
    void setUp(){
        orderService = new OrderService(orderRepository);
    }

    @Test
    void shouldRetrieveAllOrders(){
        Product sampleProduct = Product.builder().build();
        List<Order> expectedOrder = List.of(Order.builder().product(sampleProduct).build());
        when(orderRepository.findAll()).thenReturn(expectedOrder);

        List<Order> actualOrders = orderService.getOrders();

        assertThat(actualOrders).isEqualTo(expectedOrder);
    }

    @Test
    void shouldCreateANewOrderWithAProduct(){
        Product productToOrder = new Product("new-product", 5);
        Order orderToSave = Order.builder().id(1L).product(productToOrder).quantity(3).build();
        orderService.addOrder(new Order(1L, 3, new Product("new-product", 5)));

        verify(orderRepository).save(orderToSave);
    }
}

