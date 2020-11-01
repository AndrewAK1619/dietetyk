package com.example.dietetyk.diet;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Diet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String calories;
    private String type;

    public Diet( String calories, String type ) {
        this.calories = calories;
        this.type = type;
    }

    public Diet() {
    }

    public String getCalories() {
        return calories;
    }

    public void setCalories( String calories ) {
        this.calories = calories;
    }

    public String getType() {
        return type;
    }

    public void setType( String type ) {
        this.type = type;
    }
}
