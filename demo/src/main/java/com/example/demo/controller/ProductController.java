package com.example.demo.controller;

import com.example.demo.entity.Product;
import com.example.demo.service.IProductService;
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
@Controller
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private IProductService productService;

    // Create a new product
    @PostMapping
    public boolean createProduct(@RequestBody Product product) {
        Product temp  = getProductById(product.getProductId());
        if (temp != null) {
            return false;
        }

        return productService.save(product);
    }

    // Get a product by ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productService.getById(id);
    }

    // Get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.list();
    }


    // Update an existing product
    @PutMapping("/{id}")
    public boolean updateProduct(@PathVariable Integer id, @RequestBody Product product) {
        product.setProductId(id);
        return productService.updateById(product);
    }

    // Delete a product by ID
    @DeleteMapping("/{id}")
    public boolean deleteProduct(@PathVariable Integer id) {
        return productService.removeById(id);
    }
}
