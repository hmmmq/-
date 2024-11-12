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
public class Userorder implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "order_id", type = IdType.AUTO)
    private Integer orderId;

    private Integer userId;

    private String username;

    private BigDecimal totalPrice;

    private String statusName;

    private Integer statusCode;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private String receiveProvince;

    private String receivePostcode;

    private String receiveCity;

    private String receiveDetailAddress;

    private String firstname;

    private String lastname;

    private String phone;
}
