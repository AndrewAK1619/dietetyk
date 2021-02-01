package com.example.dietetyk.meal;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MealMapper {

	private final ModelMapper mapper;

	@Autowired
	public MealMapper(ModelMapper mapper) {
		this.mapper = mapper;
	}

	Meal mealDtoToMeal(MealDto mealDto) {
		return mapper.map(mealDto, Meal.class);
	};

	MealDto mealToMealDto(Meal meal) {
		return mapper.map(meal, MealDto.class);
	};
}
