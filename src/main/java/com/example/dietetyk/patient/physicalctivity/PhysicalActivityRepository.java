package com.example.dietetyk.patient.physicalctivity;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PhysicalActivityRepository extends JpaRepository<PhysicalActivity, Long> {

	Optional<PhysicalActivity> findByDegreeOfPhysicalActivity(String degreeOfPhysicalActivity);
}
