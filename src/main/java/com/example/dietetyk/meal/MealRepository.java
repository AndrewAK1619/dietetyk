package com.example.dietetyk.meal;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MealRepository extends JpaRepository<Meal, Long> {

    Optional<Meal> findMealByName( String name);
    List<Meal> findAllByOrderByIdAsc();

}
