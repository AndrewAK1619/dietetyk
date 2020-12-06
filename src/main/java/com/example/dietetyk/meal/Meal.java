package com.example.dietetyk.meal;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "meals")
public class Meal implements Serializable {
	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_id")
    private long id;
    @Column(name = "type")
    private String kind;
    @Column(name ="calories")
    private int calories;


}
