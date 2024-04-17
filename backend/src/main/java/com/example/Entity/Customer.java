package com.example.Entity;
import jakarta.persistence.*;

@Entity
@Table(name="customer")
public class Customer {
    @Id
    @Column(name="customer_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customerid;
    @Column(name="customer_name", length = 255)
    private String customername;
    @Column(name="email", length = 255)
    private String email;
    @Column(name="password", length = 255)
    private String password;
    public Customer() {
    }
    public Customer(int customerid, String customername, String email, String password) {
        this.customerid = customerid;
        this.customername = customername;
        this.email = email;
        this.password = password;
    }

    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public String getCustomername() {
        return customername;
    }

    public void setCustomername(String customername) {
        this.customername = customername;
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
}