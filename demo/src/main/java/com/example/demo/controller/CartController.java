package com.example.demo.controller;


import com.example.demo.entity.Cart;
import com.example.demo.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private ICartService cartService;

    // Create a new cart
    @PostMapping
    public boolean createCart(@RequestBody Cart cart) {
        Cart temp  = getCartById(cart.getCartId());
        if (temp != null) {
            return false;
        }

        return cartService.save(cart);
    }

    // Get a cart by ID
    @GetMapping("/{id}")
    public Cart getCartById(@PathVariable Integer id) {
        return cartService.getById(id);
    }

    // Get all carts
    @GetMapping
    public List<Cart> getAllCarts() {
        return cartService.list();
    }

    @GetMapping("/user/{id}")
    public List<Cart> getUserAllCarts(@PathVariable Integer id) {
        List<Cart> carts = getAllCarts();
        carts.removeIf(cart -> !cart.getUserId().equals(id));
        return carts;
    }

    // Update an existing cart
    @PutMapping("/{id}")
    public boolean updateCart(@PathVariable Integer id, @RequestBody Cart cart) {
        cart.setCartId(id);
        return cartService.updateById(cart);
    }

    // Delete a cart by ID
    @DeleteMapping("/{id}")
    public boolean deleteCart(@PathVariable Integer id) {
        return cartService.removeById(id);
    }
    @DeleteMapping("/user/{id}")
    public boolean deleteUserCart(@PathVariable Integer id) {
        List<Cart> userAllCarts = getUserAllCarts(id);
        if (userAllCarts.isEmpty()){
            return true;
        }
        for (Cart cart: userAllCarts){
            cartService.removeById(cart.getCartId());
        }
        return  true;
    }


}