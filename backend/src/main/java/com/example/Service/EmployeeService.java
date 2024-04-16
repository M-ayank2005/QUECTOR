package com.example.Service;


import com.example.DTO.EmployeeDTO;
import com.example.DTO.LoginDTO;
import com.example.LoginResponse.LoginMesage;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);
    LoginMesage loginEmployee(LoginDTO loginDTO);
}