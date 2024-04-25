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
// the base URL path for all endpoints in this controller.
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @PostMapping(path = "/save")
    public String saveCustomer(@RequestBody CustomerDTO customerDTO) {
        String id = customerService.addCustomer(customerDTO);
        return id;
    }

    // This method handles POST requests to /api/v1/customer/save.
    // It takes a CustomerDTO object as input in the request body.
    // Calls the addCustomer method of customerService to save the customer and
    // returns the ID of the saved customer


    //When a controller method is annotated with @RequestBody, Spring automatically converts the body of the HTTP request into a Java object of the specified type.
    
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@RequestBody LoginDTO loginDTO) {
        LoginMesage loginResponse = customerService.loginCustomer(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}