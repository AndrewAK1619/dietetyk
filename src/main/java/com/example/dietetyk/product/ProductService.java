package com.example.dietetyk.product;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ProductService {

	private final ProductRepository productRepository;
	private final ProductMapper productMapper;

	@Autowired
	public ProductService(
			ProductRepository productRepository,
			ProductMapper productMapper) {
		this.productRepository = productRepository;
		this.productMapper = productMapper;
	}

	List<ProductDto> findAll() {
		return productRepository.findAllByOrderByIdAsc()
				.stream()
				.map(productMapper::productToProductDto)
				.collect(Collectors.toList());
	}

	Optional<ProductDto> findById(Long id) {
		return productRepository
				.findById(id)
				.map(productMapper::productToProductDto);
	}

	ProductDto save(ProductDto product) {
		Optional<Product> productByName = productRepository.findByProductName(product.getProductName());
		productByName.ifPresent(u -> {
			throw new ResponseStatusException(HttpStatus.CONFLICT,
					"Saving object can't have setted id");
		});
		return mapAndSaveProduct(product);
	}

	private ProductDto mapAndSaveProduct(ProductDto product) {
		Product productEntity = productMapper.productDtoToProduct(product);
		Product savedProduct = productRepository.save(productEntity);
		return productMapper.productToProductDto(savedProduct);
	}
}
