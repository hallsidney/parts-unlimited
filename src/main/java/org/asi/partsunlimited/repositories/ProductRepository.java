package org.asi.partsunlimited.repositories;

import org.asi.partsunlimited.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
