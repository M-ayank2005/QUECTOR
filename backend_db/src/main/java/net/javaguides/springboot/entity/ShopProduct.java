package net.javaguides.springboot.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "shop_products")
public class ShopProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @ManyToOne
    @JoinColumn(name = "shop_id", referencedColumnName = "id")
    private Shop shop;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    @Column(name = "price")
    private double price;

    // Getters
    public long getId() {
        return id;
    }

    public Shop getShop() {
        return shop;
    }

    public Product getProduct() {
        return product;
    }

    public double getPrice() {
        return price;
    }

    // Setters
    public void setId(long id) {
        this.id = id;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    // toString()
    @Override
    public String toString() {
        return "ShopProduct{" +
                "id=" + id +
                ", shop=" + shop +
                ", product=" + product +
                ", price=" + price +
                '}';
    }
}
