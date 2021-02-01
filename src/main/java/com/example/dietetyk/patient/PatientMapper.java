package com.example.dietetyk.patient;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PatientMapper {

	private final ModelMapper mapper;

	@Autowired
	public PatientMapper(ModelMapper mapper) {
		this.mapper = mapper;
	}

	public Patient patientDtoToPatient(PatientDto patientDto) {
		return mapper.map(patientDto, Patient.class);
	}

	public PatientDto patientToPatientDto(Patient patient) {
		return mapper.map(patient, PatientDto.class);
	}
}
