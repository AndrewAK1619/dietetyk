package com.example.dietetyk.meal;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MealMapper {

    Meal mealDtoToMeal( MealDto mealDto);
    MealDto mealToMealDto(Meal meal);

}
