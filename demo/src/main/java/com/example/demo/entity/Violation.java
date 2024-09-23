package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
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
public class Violation implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "violation_id", type = IdType.AUTO)
    private Integer violationId;

    private Integer userId;

    private String username;

    private String content;

    private LocalDateTime detectedAt;
}
