package com.example.Springbootproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Springbootproject.model.Employee;
import com.example.Springbootproject.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	//Get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}
	
	//Create employees rest api
	
	@PostMapping("/employees")
	public  Employee createEmployee(@RequestBody Employee e) {
		
		return employeeRepository.save(e);
	}
	
	//Get by id
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
		
		Employee employee = employeeRepository.findById(id).orElse(null);
		
		return employee;
	}
	
	// Update employee
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id).orElse(null);
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailID(employeeDetails.getEmailID());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		
		return updatedEmployee;
	}
	
	// delete employee rest api
	
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElse(null);
		
		employeeRepository.delete(employee);
	}
}
