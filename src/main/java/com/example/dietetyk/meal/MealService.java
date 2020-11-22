package com.example.dietetyk.meal;

import com.example.dietetyk.user.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealService {

    private final MealRepository mealRepository;
    private final MealMapper mealMapper;

    @Autowired
    public MealService(MealRepository mealRepository, MealMapper mealMapper)
    {
        this.mealRepository = mealRepository;
        this.mealMapper = mealMapper;

    }

    Optional<MealDto> findById( Long id) {
        return mealRepository
                .findById(id)
                .map(mealMapper::mealToMealDto);
    }
    public List<Meal> findAll() {
        return mealRepository.findAllByOrderByIdAsc();
    }
}
