package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.entity.Shop;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.repository.ShopRepository;

@RestController
@RequestMapping("/api/shops")
public class ShopController {

	@Autowired
	private ShopRepository shopRepository;

	// get all shops
	@GetMapping
	public List<Shop> getAllShops() {
		return this.shopRepository.findAll();
	}

	// get shops by id
	@GetMapping("/{id}")
	public Shop getShopById(@PathVariable (value = "id") long shopId) {
		return this.shopRepository.findById(shopId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + shopId));
	}

	// create shop
	@PostMapping
	public Shop createShop(@RequestBody Shop shop) {
		return this.shopRepository.save(shop);
	}
	
	// update shop
	@PutMapping("/{id}")
	public Shop updateShop(@RequestBody Shop shop, @PathVariable ("id") long shopId) {
		 Shop existingShop = this.shopRepository.findById(shopId)
			.orElseThrow(() -> new ResourceNotFoundException("Shop not found with id :" + shopId));
		 existingShop.setShopName(shop.getShopName());
		 existingShop.setShopDesc(shop.getShopDesc());
		 existingShop.setRatings(shop.getRatings());
		 return this.shopRepository.save(existingShop);
	}
	
	// delete shop by id
	@DeleteMapping("/{id}")
	public ResponseEntity<Shop> deleteShop(@PathVariable ("id") long shopId){
		 Shop existingShop = this.shopRepository.findById(shopId)
					.orElseThrow(() -> new ResourceNotFoundException("Shop not found with id :" + shopId));
		 this.shopRepository.delete(existingShop);
		 return ResponseEntity.ok().build();
	}
}
