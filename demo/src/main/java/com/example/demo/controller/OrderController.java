package com.example.demo.controller;

import com.example.demo.entity.Order;
import com.example.demo.service.IOrderService;
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
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private IOrderService OrderService;

    // Create a new Order
    @PostMapping
    public boolean createOrder(@RequestBody Order Order) {
        Order temp  = getOrderById(Order.getOrderId());
        if (temp != null) {
            return false;
        }

        return OrderService.save(Order);
    }

    // Get a Order by ID
    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Integer id) {
        return OrderService.getById(id);
    }

    // Get all Orders
    @GetMapping
    public List<Order> getAllOrders() {
        return OrderService.list();
    }

    @GetMapping("/user/{id}")
    public List<Order> getUserAllOrders(@PathVariable Integer id) {
        List<Order> Orders = getAllOrders();
        Orders.removeIf(Order -> !Order.getUserId().equals(id));
        return Orders;
    }

    // Update an existing Order
    @PutMapping("/{id}")
    public boolean updateOrder(@PathVariable Integer id, @RequestBody Order Order) {
        Order.setOrderId(id);
        return OrderService.updateById(Order);
    }

    // Delete a Order by ID
    @DeleteMapping("/{id}")
    public boolean deleteOrder(@PathVariable Integer id) {
        return OrderService.removeById(id);
    }
}
