package com.example.demo.controller;

import com.example.demo.entity.OrderItem;
import com.example.demo.service.IOrderItemService;
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
@RequestMapping("/orderItem")
public class OrderItemController {
    @Autowired
    private IOrderItemService orderitemService;

    // Create a new orderitem
    @PostMapping
    public boolean createOrderItem(@RequestBody OrderItem orderitem) {
        OrderItem temp  = getOrderItemById(orderitem.getOrderItemId());
        if (temp != null) {
            return false;
        }

        return orderitemService.save(orderitem);
    }

    // Get a orderitem by ID
    @GetMapping("/{id}")
    public OrderItem getOrderItemById(@PathVariable Integer id) {
        return orderitemService.getById(id);
    }

    // Get all orderitems
    @GetMapping
    public List<OrderItem> getAllOrderItems() {
        return orderitemService.list();
    }

    @GetMapping("/order/{id}")
    public List<OrderItem> getUserAllOrderItems(@PathVariable Integer id) {
        List<OrderItem> orderitems = getAllOrderItems();
        orderitems.removeIf(orderitem -> !orderitem.getOrderId().equals(id));
        return orderitems;
    }

    // Update an existing orderitem
    @PutMapping("/{id}")
    public boolean updateOrderItem(@PathVariable Integer id, @RequestBody OrderItem orderitem) {
        orderitem.setOrderItemId(id);
        return orderitemService.updateById(orderitem);
    }

    // Delete a orderitem by ID
    @DeleteMapping("/{id}")
    public boolean deleteOrderItem(@PathVariable Integer id) {
        return orderitemService.removeById(id);
    }
}
