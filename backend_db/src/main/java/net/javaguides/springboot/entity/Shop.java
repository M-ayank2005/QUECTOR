package net.javaguides.springboot.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "shops")
public class Shop {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "shop_name")
	private String shopName;
	
	@Column(name = "shop_desc")
	private String shopDesc;
	
	@Column(name = "ratings")
	private int ratings;

	@Column(name = "imageLink", columnDefinition = "TEXT")
	private String imageLink;
	
	public Shop() {
		
	}
	
	public Shop(String shopName, String shopDesc, int ratings, String imageLink) {
		super();
		this.shopName = shopName;
		this.shopDesc = shopDesc;
		this.ratings = ratings;
		this.imageLink = imageLink;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public String getShopDesc() {
		return shopDesc;
	}
	public void setShopDesc(String shopDesc) {
		this.shopDesc = shopDesc;
	}
	public int getRatings() {
		return ratings;
	}
	public void setRatings(int ratings) {
		this.ratings = ratings;
	}
	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}

	public String getImageLink(){
		return this.imageLink;
	}
}
