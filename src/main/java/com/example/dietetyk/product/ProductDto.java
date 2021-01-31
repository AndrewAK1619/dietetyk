package com.example.dietetyk.product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

	private Long id;
	private String productName;
	private float kcal;
	private float protein;
	private float fats;
	private float carbohydrate;
	private String unit;
	private String symbol;
}
