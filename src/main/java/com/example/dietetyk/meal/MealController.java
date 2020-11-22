package com.example.dietetyk.meal;


import com.example.dietetyk.user.UserDto;
import com.example.dietetyk.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/meals")
public class MealController {

    private MealService mealService;

    @Autowired
    MealController( MealService mealService) {
        this.mealService = mealService;
    }

    @GetMapping("")
    public List<Meal> findAll() {
        return mealService.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<MealDto> findById( @PathVariable Long id) {
        return mealService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }





}
