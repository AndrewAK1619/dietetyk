package com.example.dietetyk.meal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MealService {

    private final MealRepository mealRepository;
    private final MealMapper mealMapper;

    @Autowired
    public MealService( MealRepository mealRepository, MealMapper mealMapper ) {
        this.mealRepository = mealRepository;
        this.mealMapper = mealMapper;
    }

    List<MealDto> findAll() {
        return mealRepository.findAllByOrderByIdAsc()
                .stream()
                .map(mealMapper::mealToMealDto)
                .collect(Collectors.toList());
    }

    Optional<MealDto> findById( Long id ) {
        return mealRepository
                .findById(id)
                .map(mealMapper::mealToMealDto);
    }


    MealDto save( MealDto meal ) {
        Optional<Meal> mealByname = mealRepository.findMealByName(meal.getName());
        mealByname.ifPresent(u -> {
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "Saving object can't have setted id");
        });

        return mapAndSaveMeal (meal, true);
    }

    private MealDto mapAndSaveMeal( MealDto meal, boolean isMealNotExist ) {
        Meal mealEntity = mealMapper.mealDtoToMeal(meal);
        if (isMealNotExist);

        Meal savedMeal = mealRepository.save(mealEntity);
        return mealMapper.mealToMealDto(savedMeal);
    }
}
