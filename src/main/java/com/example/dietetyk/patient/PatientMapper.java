package com.example.dietetyk.patient;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PatientMapper {

	Patient patientDtoToPatient(PatientDto patientDto);
	PatientDto patientToPatientDto(Patient patient);
}
