package com.example.dietetyk.product.unit;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/products/units")
public class UnitOfMeasuresAndWeightsController {

	private final UnitOfMeasuresAndWeightsService measuresAndWeightsService;

	@Autowired
	public UnitOfMeasuresAndWeightsController(
			UnitOfMeasuresAndWeightsService measuresAndWeightsService) {
		this.measuresAndWeightsService = measuresAndWeightsService;
	}

	@GetMapping("/names")
	public List<String> findAllNames() {
		return measuresAndWeightsService.findAllNames();
	}
}
