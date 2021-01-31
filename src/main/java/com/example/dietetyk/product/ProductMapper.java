package com.example.dietetyk.product;

import org.mapstruct.DecoratedWith;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
@DecoratedWith(ProductMapperDecorator.class)
public interface ProductMapper {

	@Mapping(target = "unitOfMeasuresAndWeights", ignore = true)
	Product productDtoToProduct(ProductDto productDto);

	@Mapping(target="unit", source="unitOfMeasuresAndWeights.unit")
	@Mapping(target="symbol", source="unitOfMeasuresAndWeights.symbol")
	ProductDto productToProductDto(Product product);
}
