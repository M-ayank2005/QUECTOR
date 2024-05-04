package net.javaguides.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.javaguides.springboot.entity.Product;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return this.productRepository.findAll();
    }

    // get product by id
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable(value = "id") long productId) {
        return this.productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id :" + productId));
    }

    // create product
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return this.productRepository.save(product);
    }

    // update product
    @PutMapping("/{id}")
    public Product updateProduct(@RequestBody Product product, @PathVariable("id") long productId) {
        Product existingProduct = this.productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id :" + productId));
        existingProduct.setProductName(product.getProductName());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setPrice(product.getPrice());
        return this.productRepository.save(existingProduct);
    }

    // delete product
    @DeleteMapping("/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable("id") long productId) {
        Product existingProduct = this.productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id :" + productId));
        this.productRepository.delete(existingProduct);
        return ResponseEntity.ok().build();
    }
}
