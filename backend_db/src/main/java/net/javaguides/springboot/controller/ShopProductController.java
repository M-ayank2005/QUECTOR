package net.javaguides.springboot.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.javaguides.springboot.entity.ShopProduct;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.repository.ShopProductRepository;

@RestController
@RequestMapping("/api/shop-products")
public class ShopProductController {



    @Autowired
    private ShopProductRepository shopProductRepository;

    // get all shop products
    @GetMapping
    public List<ShopProduct> getAllShopProducts() {
        return this.shopProductRepository.findAll();
    }

    @GetMapping("/shop/{shopId}")
    public List<ShopProduct> getAllProductsByShopId(@PathVariable(value = "shopId") long shopId) {
        return this.shopProductRepository.findByShopId(shopId);

    }


    // get shop product by id
    @GetMapping("/{id}")
    public ShopProduct getShopProductById(@PathVariable(value = "id") long shopProductId) {
        return this.shopProductRepository.findById(shopProductId)
                .orElseThrow(() -> new ResourceNotFoundException("ShopProduct not found with id :" + shopProductId));
    }

    // create shop product
    @PostMapping
    public ShopProduct createShopProduct(@RequestBody ShopProduct shopProduct) {
        return this.shopProductRepository.save(shopProduct);
    }

    // update shop product
    @PutMapping("/{id}")
    public ShopProduct updateShopProduct(@RequestBody ShopProduct shopProduct, @PathVariable("id") long shopProductId) {
        ShopProduct existingShopProduct = this.shopProductRepository.findById(shopProductId)
                .orElseThrow(() -> new ResourceNotFoundException("ShopProduct not found with id :" + shopProductId));
        existingShopProduct.setShop(shopProduct.getShop());
        existingShopProduct.setProduct(shopProduct.getProduct());
        existingShopProduct.setPrice(shopProduct.getPrice());
        return this.shopProductRepository.save(existingShopProduct);
    }

    // delete shop product
    @DeleteMapping("/{id}")
    public ResponseEntity<ShopProduct> deleteShopProduct(@PathVariable("id") long shopProductId) {
        ShopProduct existingShopProduct = this.shopProductRepository.findById(shopProductId)
                .orElseThrow(() -> new ResourceNotFoundException("ShopProduct not found with id :" + shopProductId));
        this.shopProductRepository.delete(existingShopProduct);
        return ResponseEntity.ok().build();
    }
}
