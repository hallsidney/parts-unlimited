package org.asi.partsunlimited.controllers;

import org.asi.partsunlimited.models.Order;
import org.asi.partsunlimited.services.OrderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import java.net.URI;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;
    OrderController(OrderService orderService){this.orderService = orderService;}

    @PostMapping
    ResponseEntity<Order> addOrder(@RequestBody Order order){
        var savedOrder = orderService.addOrder(order);
        URI location = createResourceLocation("/orders", savedOrder.getId());
        return ResponseEntity.created(location).body(savedOrder);
    }

    private URI createResourceLocation(String path, Long resourceId) {
        return ServletUriComponentsBuilder.fromCurrentRequestUri().port("8080").path(path)
                .buildAndExpand(resourceId).toUri();
    }
}
