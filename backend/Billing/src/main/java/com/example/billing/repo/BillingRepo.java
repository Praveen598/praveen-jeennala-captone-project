package com.example.billing.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.billing.entity.Billing;
@Repository
public interface BillingRepo extends JpaRepository<Billing,Long> {

}
