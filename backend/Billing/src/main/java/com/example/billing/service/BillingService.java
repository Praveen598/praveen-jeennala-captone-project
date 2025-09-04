package com.example.billing.service;

import java.util.List;

import com.example.billing.entity.Billing;

public interface BillingService {

	Billing createBilling(Billing billing);

	List<Billing> getAllBillings();

	Billing updateBilling(Long id, Billing billing);

	void deleteBilling(Long id);

	Billing getBillingById(Long id);

}
