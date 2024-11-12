package com.example.demo.controller;

import cn.hutool.db.sql.Order;
import com.example.demo.entity.Userorder;
import com.example.demo.service.IUserorderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private IUserorderService OrderService;

    // Create a new Order
    @PostMapping
    public Userorder createOrder(@RequestBody Userorder Userorder) {

        System.out.printf("Order");
        System.out.println(Userorder.getTotalPrice());
        boolean save = OrderService.save(Userorder);
        if (save){
            return Userorder;
        }else{
            return null;
        }
    }

    // Get a Order by ID
    @GetMapping("/{id}")
    public Userorder getOrderById(@PathVariable Integer id) {
        return OrderService.getById(id);
    }

    // Get all Orders
    @GetMapping
    public List<Userorder> getAllOrders() {
        return OrderService.list();
    }

    @GetMapping("/user/{id}")
    public List<Userorder> getUserAllOrders(@PathVariable Integer id) {
        List<Userorder> userorders = getAllOrders();
        userorders.removeIf(Userorder -> !Userorder.getUserId().equals(id));
        return userorders;
    }

    // Update an existing Order
    @PutMapping("/{id}")
    public boolean updateOrder(@PathVariable Integer id, @RequestBody Userorder Userorder) {
        Userorder.setOrderId(id);
        return OrderService.updateById(Userorder);
    }

    // Delete a Order by ID
    @DeleteMapping("/{id}")
    public boolean deleteOrder(@PathVariable Integer id) {
        return OrderService.removeById(id);
    }
}
