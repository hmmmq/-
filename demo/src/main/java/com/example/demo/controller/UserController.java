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

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User userById = getUserById(user.getUserId());
        if (userById != null && userById.getUserPassword().equals(user.getUserPassword())) {
            return userById;
        }else {
            return null;
        }
    }

    // Create a new user
    @PostMapping
    public boolean createUser(@RequestBody User user) {
        return userService.save(user);
    }

    // Get a user by ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.getById(id);
    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.list();
    }

    // Update an existing user
    @PutMapping("/{id}")
    public boolean updateUser(@PathVariable Integer id, @RequestBody User user) {
        return userService.updateById(user);
    }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable Integer id) {
        return userService.removeById(id);
    }
}
