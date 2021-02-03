package com.example.dietetyk.patient;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.dietetyk.patient.physicalctivity.PhysicalActivity;
import com.example.dietetyk.patient.physicalctivity.PhysicalActivityRepository;

@Component
public class PatientMapper {

	private final ModelMapper mapper;
	private final PhysicalActivityRepository activityRepository;

	@Autowired
	public PatientMapper(
			ModelMapper mapper,
			PhysicalActivityRepository activityRepository) {
		this.mapper = mapper;
		this.activityRepository = activityRepository;
	}

	public Patient patientDtoToPatient(PatientDto patientDto) {
		Patient entity = mapper.map(patientDto, Patient.class);
		Optional<PhysicalActivity> physicalActivity = activityRepository
				.findByDegreeOfPhysicalActivity(patientDto.getDegreeOfPhysicalActivity());
		physicalActivity.ifPresent(entity::setPhysicalActivity);
		return entity;
	}

	public PatientDto patientToPatientDto(Patient patient) {
		PatientDto patientDto = mapper.map(patient, PatientDto.class);
		patientDto.setDegreeOfPhysicalActivity(
				patient
				.getPhysicalActivity()
				.getDegreeOfPhysicalActivity());
		return patientDto;
	}
}
