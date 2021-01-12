package com.example.dietetyk.diet;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DietDto {

	private long id;
	private int calories;
	private String proteins;
	private String fats;
	private String carbohydrates;
}
