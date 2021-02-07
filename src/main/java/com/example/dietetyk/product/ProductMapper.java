package com.example.dietetyk.product;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.dietetyk.product.unit.UnitOfMeasuresAndWeights;
import com.example.dietetyk.product.unit.UnitOfMeasuresAndWeightsRepository;

@Component
public class ProductMapper {

	private final ModelMapper modelMapper;
	private final UnitOfMeasuresAndWeightsRepository unitRepository;

	@Autowired
	public ProductMapper(
			ModelMapper modelMapper,
			UnitOfMeasuresAndWeightsRepository unitRepository) {
		this.modelMapper = modelMapper;
		this.unitRepository = unitRepository;
	}

	Product productDtoToProduct(ProductDto productDto) {
		Product entity = modelMapper.map(productDto, Product.class);
		Optional<UnitOfMeasuresAndWeights> symbol = unitRepository
				.findBySymbol(productDto.getSymbol());
		symbol.ifPresent(entity::setUnitOfMeasuresAndWeights);
		return entity;
	};

	ProductDto productToProductDto(Product product) {
		ProductDto productDto = modelMapper.map(product, ProductDto.class);
		productDto.setSymbol(product.getUnitOfMeasuresAndWeights().getSymbol());
		productDto.setUnit(product.getUnitOfMeasuresAndWeights().getUnit());
		return productDto;
	};
}
