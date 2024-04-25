package com.example.Repository;

import com.example.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@EnableJpaRepositories
@Repository
// Indicates that this interface is a Spring Data repository, allowing it to be
// automatically discovered by Spring and used to perform database operations.
public interface CustomerRepo extends JpaRepository<Customer, Integer> {
    Optional<Customer> findOneByEmailAndPassword(String email, String password);
    Customer findByEmail(String email);
}