package com.example.dietetyk.product.unit;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UnitOfMeasuresAndWeightsRepository extends JpaRepository<UnitOfMeasuresAndWeights, Long> {

	Optional<UnitOfMeasuresAndWeights> findBySymbol(String symbol);
}
