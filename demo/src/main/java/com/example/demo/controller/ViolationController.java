package com.example.demo.controller;

import com.example.demo.entity.Violation;
import com.example.demo.service.IViolationService;
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
@RequestMapping("/violation")
public class ViolationController {
    @Autowired
    private IViolationService violationService;

    // Create a new violation
    @PostMapping
    public boolean createViolation(@RequestBody Violation violation) {
        Violation temp  = getViolationById(violation.getViolationId());
        if (temp != null) {
            return false;
        }

        return violationService.save(violation);
    }

    // Get a violation by ID
    @GetMapping("/{id}")
    public Violation getViolationById(@PathVariable Integer id) {
        return violationService.getById(id);
    }

    // Get all violations
    @GetMapping
    public List<Violation> getAllViolations() {
        return violationService.list();
    }

    @GetMapping("/user/{id}")
    public List<Violation> getUserAllViolations(@PathVariable Integer id) {
        List<Violation> violations = getAllViolations();
        violations.removeIf(violation -> !violation.getUserId().equals(id));
        return violations;
    }

    // Update an existing violation
    @PutMapping("/{id}")
    public boolean updateViolation(@PathVariable Integer id, @RequestBody Violation violation) {
        violation.setViolationId(id);
        return violationService.updateById(violation);
    }

    // Delete a violation by ID
    @DeleteMapping("/{id}")
    public boolean deleteViolation(@PathVariable Integer id) {
        return violationService.removeById(id);
    }
}
