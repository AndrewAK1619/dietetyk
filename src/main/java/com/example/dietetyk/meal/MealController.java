package com.example.dietetyk.meal;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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
    public List<MealDto> findAll() {
        return mealService.findAll();
    }


    @PostMapping("")
    public ResponseEntity<?> save ( @RequestBody MealDto meal) {
        if (meal.getId() != null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Saving object can't have setted id");

        MealDto savedMeal  = mealService.save(meal);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(savedMeal.getId()).toUri();
        return ResponseEntity.created(location).body(savedMeal);

    }

    @GetMapping("/{id}")
    public ResponseEntity<MealDto> findById( @PathVariable Long id) {
        return mealService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }





}
