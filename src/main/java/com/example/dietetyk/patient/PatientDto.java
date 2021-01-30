package com.example.dietetyk.patient;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto {

	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String sex;
	private int age;
	private float bodyWeight;
	private float height;
	private String degreeOfPhysicalActivity;
	private String chronicDiseasesAilmentsAndMedicinesUsed;
	private String allergiesAndFoodIntolerances;
	private String supplementsUsed;
}
