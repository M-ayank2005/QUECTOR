package com.example.Service.Impl;


import com.example.DTO.CustomerDTO;
import com.example.DTO.LoginDTO;
import com.example.Entity.Customer;
import com.example.LoginResponse.LoginMesage;
import com.example.Repository.CustomerRepo;
import com.example.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
public class CustomerIMPL implements CustomerService {
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addCustomer(CustomerDTO customerDTO) {
        Customer customer = new Customer(
            customerDTO.getCustomerid(),
            customerDTO.getCustomername(),
            customerDTO.getEmail(),
                this.passwordEncoder.encode(customerDTO.getPassword())
        );
        customerRepo.save(customer);
        return customer.getCustomername();
    }
    CustomerDTO customerDTO;
    @Override
    public LoginMesage loginCustomer(LoginDTO loginDTO) {
        String msg = "";
        Customer customer1 = customerRepo.findByEmail(loginDTO.getEmail());
        if (customer1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = customer1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<Customer> customer = customerRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (customer.isPresent()) {
                    return new LoginMesage("Login Success", true);
                } else {
                    return new LoginMesage("Login Failed", false);
                }
            } else {
                return new LoginMesage("password Not Match", false);
            }
        }else {
            return new LoginMesage("Email not exits", false);
        }
    }
}