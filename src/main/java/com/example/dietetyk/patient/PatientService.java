package com.example.dietetyk.patient;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class PatientService {

	private final PatientRepository patientRepository;
	private final PatientMapper patientMapper;

	@Autowired
	public PatientService(
			PatientRepository patientRepository,
			PatientMapper patientMapper) {
		this.patientRepository = patientRepository;
		this.patientMapper = patientMapper;
	}

	List<PatientDto> findAll() {
		return patientRepository.findAllByOrderByIdAsc()
				.stream()
				.map(patientMapper::patientToPatientDto)
				.collect(Collectors.toList());
	}

	Optional<PatientDto> findById(Long id) {
		return patientRepository
				.findById(id)
				.map(patientMapper::patientToPatientDto);
	}

	PatientDto save(PatientDto patient) {
		Optional<Patient> patientByEmail = patientRepository.findByEmail(patient.getEmail());
		patientByEmail.ifPresent(u -> {
			throw new ResponseStatusException(HttpStatus.CONFLICT,
					"Saving object can't have setted id");
		});
		return mapAndSavePatient(patient);
	}

	PatientDto update(PatientDto patientDto) {
		Optional<Patient> patientById = patientRepository.findById(patientDto.getId());
		patientById.ifPresent(u -> {
			if (!u.getId().equals(patientDto.getId()))
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, 
						"The patient is not found");
		});
		return mapAndSavePatient(patientDto);
	}

	private PatientDto mapAndSavePatient(PatientDto patient) {
		Patient patientEntity = patientMapper.patientDtoToPatient(patient);
		Patient savedPatient = patientRepository.save(patientEntity);
		return patientMapper.patientToPatientDto(savedPatient);
	}
}
