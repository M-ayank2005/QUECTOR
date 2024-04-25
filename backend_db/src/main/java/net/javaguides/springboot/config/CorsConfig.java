package net.javaguides.springboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*") // Add the origin(s) from which requests are allowed
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Add the HTTP methods allowed in the requests
                        .allowedHeaders("*"); // Allow all headers in the requests
            }
        };
    }
}
