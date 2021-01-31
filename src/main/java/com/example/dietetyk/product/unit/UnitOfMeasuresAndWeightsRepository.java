package com.example.dietetyk.product.unit;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UnitOfMeasuresAndWeightsRepository extends JpaRepository<UnitOfMeasuresAndWeights, Long> {

	UnitOfMeasuresAndWeights findByUnit(String unit);
}
