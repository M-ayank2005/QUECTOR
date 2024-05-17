package net.javaguides.springboot.payload.request;

import java.util.Set;

import jakarta.validation.constraints.*;

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  private Set<String> role;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;

  private String phoneno;
  private String address;
  private String pincode;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPhoneno() {
    return phoneno;
  }
  public void setPhoneno(String phoneno) {
    this.phoneno = phoneno;
  }

  public String getAddress() {
    return address;
  }
  public String getPincode() {
    return pincode;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  public void setPincode(String pincode) {
    this.pincode = pincode;
  }

  public Set<String> getRole() {
    return this.role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }
}
