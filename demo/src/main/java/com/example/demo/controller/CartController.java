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

    @GetMapping
    public List<Cart> getAllCarts() {
        return cartService.list();
    }

    @GetMapping("/{id}")
    public Cart getCartById(@PathVariable Integer id) {
        return cartService.getById(id);
    }

    @PostMapping
    public boolean createCart(@RequestBody Cart cart) {
        return cartService.save(cart);
    }

    @PutMapping("/{id}")
    public Cart updateCart(@PathVariable Integer id, @RequestBody Cart cart) {
        cart.setCartId(id);
        return cartService.update(cart);
    }

    @DeleteMapping("/{id}")
    public void deleteCart(@PathVariable Long id) {
        cartService.deleteById(id);
    }
}