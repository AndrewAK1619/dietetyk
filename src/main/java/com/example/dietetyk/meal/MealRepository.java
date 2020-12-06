package com.example.dietetyk.meal;

import com.example.dietetyk.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface MealRepository extends JpaRepository<Meal, Long> {

    Optional<Meal> findMealByKind( String type);
    List<Meal> findAllByOrderByIdAsc();

}
