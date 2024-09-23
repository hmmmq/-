package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
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
@TableName("order_item")
public class OrderItem implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "order_item_id", type = IdType.AUTO)
    private Integer orderItemId;

    private Integer orderId;

    private Integer productId;

    private String productName;

    private BigDecimal productPrice;

    private BigDecimal productDiscountPrice;

    private BigDecimal productPriceDifference;

    private String productCategory;

    private String productImagePath;

    private Integer quantity;

    private BigDecimal amount;
}
