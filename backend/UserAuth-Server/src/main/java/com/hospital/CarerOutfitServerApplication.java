package com.hospital;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement///option 
@SpringBootApplication
public class CarerOutfitServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarerOutfitServerApplication.class, args);
	}

}
