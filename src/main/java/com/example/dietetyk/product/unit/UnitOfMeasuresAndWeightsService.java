package com.example.dietetyk.product.unit;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnitOfMeasuresAndWeightsService {

	private UnitOfMeasuresAndWeightsRepository measuresAndWeightsRepository;

	@Autowired
	public UnitOfMeasuresAndWeightsService(
			UnitOfMeasuresAndWeightsRepository measuresAndWeightsRepository) {
		this.measuresAndWeightsRepository = measuresAndWeightsRepository;
	}

	List<String> findAllNames() {
		return measuresAndWeightsRepository.findAll()
				.stream()
				.map(UnitOfMeasuresAndWeights::getUnit)
				.collect(Collectors.toList());
	}
}
