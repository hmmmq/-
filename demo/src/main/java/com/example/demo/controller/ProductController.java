package com.example.demo.controller;

import com.example.demo.entity.Product;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
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
@RequestMapping("/product")
public class ProductController {
    @Value("${upload.path}")
    private String uploadPath;
    @Autowired
    private IProductService productService;

    @PostMapping("/upload/file")
    @ResponseBody
    public Boolean uploadFile(@RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return false;
        }

        String fileName = file.getOriginalFilename();
        Path filePath = Paths.get( uploadPath, fileName).toAbsolutePath();



        try {
            //写入文件
            file.transferTo(filePath);

            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
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
