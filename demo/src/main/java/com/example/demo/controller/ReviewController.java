package com.example.demo.controller;

import com.example.demo.entity.Review;
import com.example.demo.service.IReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author demo
 * @since 2024-09-12
 */
@RestController
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    private IReviewService reviewService;

    // Create a new review
    @PostMapping
    public boolean createReview(@RequestBody Review review) {
        Review temp  = getReviewById(review.getReviewId());
        if (temp != null) {
            return false;
        }

        return reviewService.save(review);
    }

    // Get a review by ID
    @GetMapping("/{id}")
    public Review getReviewById(@PathVariable Integer id) {
        return reviewService.getById(id);
    }

    // Get all reviews
    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.list();
    }

    @GetMapping("/user/{id}")
    public List<Review> getUserAllReviews(@PathVariable Integer id) {
        List<Review> reviews = getAllReviews();
        reviews.removeIf(review -> !review.getUserId().equals(id));
        return reviews;
    }

    // Update an existing review
    @PutMapping("/{id}")
    public boolean updateReview(@PathVariable Integer id, @RequestBody Review review) {
        review.setReviewId(id);
        return reviewService.updateById(review);
    }

    // Delete a review by ID
    @DeleteMapping("/{id}")
    public boolean deleteReview(@PathVariable Integer id) {
        return reviewService.removeById(id);
    }
}
