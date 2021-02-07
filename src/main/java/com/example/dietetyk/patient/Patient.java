package com.example.dietetyk.patient;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.dietetyk.patient.physicalctivity.PhysicalActivity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "patients")
public class Patient implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "patient_id")
	private Long id;
	@Column(name = "first_name", length = 45, nullable = false)
	private String firstName;
	@Column(name = "last_name", length = 45, nullable = false)
	private String lastName;
	@Column(length = 45, unique = true, nullable = false)
	private String email;
	@Column(length = 6, nullable = false)
	private String sex;
	@Column(nullable = false)
	private int age;
	@Column(name = "body_weight")
	private float bodyWeight;
	private float height;
	@ManyToOne
	@JoinColumn(name = "physical_activity_id")
	private PhysicalActivity physicalActivity;
	@Column(name = "chronic_diseases_ailments_and_medicines_used")
	private String chronicDiseasesAilmentsAndMedicinesUsed;
	@Column(name = "allergies_and_food_intolerances")
	private String allergiesAndFoodIntolerances;
	@Column(name = "supplements_used")
	private String supplementsUsed;
}
