package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import net.javaguides.springboot.entity.ShopProduct;

@Repository
public interface ShopProductRepository extends JpaRepository<ShopProduct, Long> {
      List<ShopProduct> findByShopId(long shopId);
}
