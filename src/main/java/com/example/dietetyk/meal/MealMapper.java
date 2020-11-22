package com.example.dietetyk.meal;


import com.example.dietetyk.user.User;
import com.example.dietetyk.user.UserDto;
import org.mapstruct.Mapper;

@Mapper (componentModel = "spring")
public interface MealMapper {

    Meal mealDtoToMeal( MealDto mealDto);
    MealDto mealToMealDto(Meal meal);

}
