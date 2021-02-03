package com.example.dietetyk.patient.physicalctivity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/patients/activity")
public class PhysicalActivityController {

	private final PhysicalActivityService activityService;

	@Autowired
	public PhysicalActivityController(
			PhysicalActivityService activityService) {
		this.activityService = activityService;
	}

	@GetMapping("/names")
	public List<String> findAllNames() {
		return activityService.findAllNames();
	}
}
