package org.asi.partsunlimited.repositories;

import org.asi.partsunlimited.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
