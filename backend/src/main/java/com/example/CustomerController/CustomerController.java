package com.example.CustomerController;

import com.example.DTO.CustomerDTO;
import com.example.DTO.LoginDTO;
import com.example.LoginResponse.LoginMesage;
import com.example.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @PostMapping(path = "/save")
    public String saveCustomer(@RequestBody CustomerDTO customerDTO)
    {
        String id = customerService.addCustomer(customerDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginDTO loginDTO)
    {
        LoginMesage loginResponse = customerService.loginCustomer(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}