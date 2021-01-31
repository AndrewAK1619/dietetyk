package com.example.dietetyk.product;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.dietetyk.product.unit.UnitOfMeasuresAndWeights;
import com.example.dietetyk.product.unit.UnitOfMeasuresAndWeightsRepository;

public abstract class ProductMapperDecorator implements ProductMapper{

	@Autowired
	private UnitOfMeasuresAndWeightsRepository unitRepository;

	@Override
	public Product productDtoToProduct(ProductDto productDto) {
		Product entity = new Product();
		entity.setProductName(productDto.getProductName());
		entity.setKcal(productDto.getKcal());
		entity.setProtein(productDto.getProtein());
		entity.setFats(productDto.getFats());
		entity.setCarbohydrate(productDto.getCarbohydrate());
		Optional<UnitOfMeasuresAndWeights> unit = unitRepository
				.findByUnit(productDto.getUnit());
		unit.ifPresent(entity::setUnitOfMeasuresAndWeights);
		return entity;
	}
}
