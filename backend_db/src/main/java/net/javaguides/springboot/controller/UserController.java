package net.javaguides.springboot.controller;

// import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.entity.User;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	// get shops by id
	@GetMapping("/{username}")
	public User getShopById(@PathVariable (value = "username") String username) {
		Optional<User> userOptional =  userRepository.findByUsername(username);
         if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            // Handle the case where the user is not found (e.g., throw an exception or return null)
            throw new ResourceNotFoundException("User not found with username: " + username);
        }
	}


}
