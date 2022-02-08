package org.asi.partsunlimited.services;

import org.asi.partsunlimited.models.Order;
import org.asi.partsunlimited.models.Product;
import org.asi.partsunlimited.repositories.OrderRepository;
import org.asi.partsunlimited.repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getOrders() {
        return orderRepository.findAll();
    }
}
