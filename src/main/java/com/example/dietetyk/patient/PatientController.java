package com.example.dietetyk.patient;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/admin/patients")
public class PatientController {

	private PatientService patientService;

	@Autowired
	public PatientController(PatientService patientService) {
		this.patientService = patientService;
	}

	@GetMapping("")
	public List<PatientDto> findAll() {
		return patientService.findAll();
	}

	@PostMapping("")
	public ResponseEntity<?> save(@RequestBody PatientDto patient) {
		if (patient.getId() != null)
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Saving object can't have setted id");
					
		PatientDto savedPatient = patientService.save(patient);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(savedPatient.getId()).toUri();
		return ResponseEntity.created(location).body(savedPatient);
	}

	@GetMapping("/{id}")
	public ResponseEntity<PatientDto> findById(@PathVariable Long id) {
		return patientService.findById(id)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(
			@PathVariable Long id, 
			@RequestBody PatientDto patientDto) {
		if (!id.equals(patientDto.getId()))
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"The updated object must have an id in accordance with the id "
					+ "in the resource path");
		PatientDto updatedPatient = patientService.update(patientDto);
		return ResponseEntity.ok(updatedPatient);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		patientService.delete(id);
	}
}
