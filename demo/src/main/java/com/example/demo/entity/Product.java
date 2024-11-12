package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

/**
 * <p>
 * 
 * </p>
 *
 * @author xxx
 * @since 2024-11-13
 */
@Getter
@Setter
public class Product implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "product_id", type = IdType.AUTO)
    private Integer productId;

    private String productName;

    private String description;

    private BigDecimal price;

    private BigDecimal discountPrice;

    private BigDecimal priceDifference;

    private Integer stock;

    private String category;

    private String imagePath;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
