package com.example.dietetyk.patient.physicalctivity;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhysicalActivityService {

	private PhysicalActivityRepository activityRepository;

	@Autowired
	public PhysicalActivityService(
			PhysicalActivityRepository activityRepository) {
		this.activityRepository = activityRepository;
	}

	List<String> findAllDegreeOfPhysicalActivities() {
		return activityRepository.findAll()
				.stream()
				.map(PhysicalActivity::getDegreeOfPhysicalActivity)
				.collect(Collectors.toList());
	}
}
