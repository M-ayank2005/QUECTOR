package com.example.Service;


import com.example.DTO.CustomerDTO;
import com.example.DTO.LoginDTO;
import com.example.LoginResponse.LoginMesage;

public interface CustomerService {
    String addCustomer(CustomerDTO customerDTO);
    LoginMesage loginCustomer(LoginDTO loginDTO);
}