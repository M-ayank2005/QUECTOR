package com.example.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {
    //this class will provide configuration instructions.
    @Bean
    //whenever someone needs an object of this type, use this method to create it.
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}