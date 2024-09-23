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
 * @author demo
 * @since 2024-09-12
 */
@Getter
@Setter
public class Favorite implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "favorite_id", type = IdType.AUTO)
    private Integer favoriteId;

    private Integer userId;

    private String username;

    private Integer productId;

    private String productName;

    private BigDecimal productPrice;

    private BigDecimal productDiscountPrice;

    private BigDecimal productPriceDifference;

    private String productCategory;

    private String productImagePath;

    private LocalDateTime createdAt;
}
