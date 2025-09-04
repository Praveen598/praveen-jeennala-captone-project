package com.example.billing.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.billing.entity.Billing;
import com.example.billing.service.BillingService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/billing")
public class BillingController {

    @Autowired
    private BillingService billingService;

    // ✅ Create Billing
    @PostMapping
    public Billing createBilling(@RequestBody Billing billing) {
        return billingService.createBilling(billing);
    }

    // ✅ Get All Billings
    @GetMapping
    public List<Billing> getAllBillings() {
        return billingService.getAllBillings();
    }

    // ✅ Get Billing by ID
    @GetMapping("/{id}")
    public Billing getBillingById(@PathVariable Long id) {
        return billingService.getBillingById(id);
    }

    // ✅ Update Billing
    @PutMapping("/{id}")
    public Billing updateBilling(@PathVariable Long id, @RequestBody Billing billing) {
        return billingService.updateBilling(id, billing);
    }

    // ✅ Delete Billing
    @DeleteMapping("/{id}")
    public String deleteBilling(@PathVariable Long id) {
        billingService.deleteBilling(id);
        return "Billing deleted successfully with id " + id;
    }
}



