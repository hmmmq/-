package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.IUserService;
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
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService userService;

    // Create a new user
    @PostMapping
    public User createUser(@RequestBody User user) {

        userService.save(user);
        return user;
    }

    // Retrieve a user by ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.getById(id);
    }

    // Retrieve all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.list();
    }

    // Update a user by ID
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Integer id, @RequestBody User user) {
        user.setUserId(id);
        userService.updateById(user);
        return user;
    }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.removeById(id);
    }

    @PostMapping("/login")
    public User getUsernameAndPassword(@RequestBody User user) {
        return userService.getUsernameAndPassword(user.getUsername(), user.getUserPassword());
    }
}
