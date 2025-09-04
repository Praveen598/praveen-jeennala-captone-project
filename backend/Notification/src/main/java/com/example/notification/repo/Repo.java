package com.example.notification.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.notification.entity.Notification;


public interface Repo extends JpaRepository<Notification, Long>{

}
