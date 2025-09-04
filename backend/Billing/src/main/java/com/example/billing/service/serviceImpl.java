package com.example.billing.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.billing.entity.Billing;
import com.example.billing.repo.BillingRepo;
@Service
public class serviceImpl implements BillingService {
	
	 @Autowired
	    private BillingRepo repo;

	    @Override
	    public Billing createBilling(Billing billing) {
	        // Default price = 2500 if not set
	        if (billing.getPrice() == null) {
	            billing.setPrice(2500.0);
	        }
	        return repo.save(billing);
	    }

	    @Override
	    public List<Billing> getAllBillings() {
	        return repo.findAll();
	    }

	    @Override
	    public Billing getBillingById(Long id) {
	        return repo.findById(id)
	                .orElseThrow(() -> new RuntimeException("Billing not found with id: " + id));
	    }

	    @Override
	    public Billing updateBilling(Long id, Billing billingDetails) {
	        Billing billing = repo.findById(id)
	                .orElseThrow(() -> new RuntimeException("Billing not found with id: " + id));

	        billing.setPatientId(billingDetails.getPatientId());
	        billing.setPrice(billingDetails.getPrice());

	        return repo.save(billing);
	    }

	    @Override
	    public void deleteBilling(Long id) {
	        if (!repo.existsById(id)) {
	            throw new RuntimeException("Billing not found with id: " + id);
	        }
	        repo.deleteById(id);
	    }

}
