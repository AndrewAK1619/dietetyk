package com.example.dietetyk.product;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/admin/products")
public class ProductController {

	private ProductService productService;

	@Autowired
	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	@GetMapping("")
	public List<ProductDto> findAll() {
		return productService.findAll();
	}

	@PostMapping("")
	public ResponseEntity<?> save(@RequestBody ProductDto product) {
		if (product.getId() != null)
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Saving object can't have setted id");
					
		ProductDto savedProduct = productService.save(product);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(savedProduct.getId()).toUri();
		return ResponseEntity.created(location).body(savedProduct);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ProductDto> findById(@PathVariable Long id) {
		return productService.findById(id)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
}
