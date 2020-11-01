package com.example.dietetyk.meal;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Meal  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


}
