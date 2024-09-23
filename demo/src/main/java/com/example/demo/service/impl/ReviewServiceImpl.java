package com.example.demo.service.impl;

import com.example.demo.entity.Review;
import com.example.demo.mapper.ReviewMapper;
import com.example.demo.service.IReviewService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author demo
 * @since 2024-09-12
 */
@Service
public class ReviewServiceImpl extends ServiceImpl<ReviewMapper, Review> implements IReviewService {

}
