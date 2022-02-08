package org.asi.partsunlimited.services;

import org.asi.partsunlimited.models.Order;
import org.asi.partsunlimited.repositories.OrderRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    OrderRepository orderRepository;
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }
}
