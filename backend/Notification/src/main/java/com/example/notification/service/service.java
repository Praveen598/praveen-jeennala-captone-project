

	package com.example.notification.service;

	import com.example.notification.entity.Notification;
import com.example.notification.repo.Repo;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.mail.SimpleMailMessage;
	import org.springframework.mail.javamail.JavaMailSender;
	import org.springframework.stereotype.Service;

	import java.util.List;

	@Service
	public class service{

	    @Autowired
	    private Repo notificationRepository;

	    @Autowired
	    private JavaMailSender mailSender;

	    // Save notification and send email
	    public Notification sendNotification(Notification notification) {
	        // Save notification to DB
	        Notification savedNotification = notificationRepository.save(notification);

	        // Send email
	        SimpleMailMessage message = new SimpleMailMessage();
	        message.setTo(notification.getEmail());
	        message.setSubject("Notification for " + notification.getPatientName());
	        message.setText("Hello " + notification.getPatientName() + ",\n\n"
	                + "You have a new notification: " + notification.getDescription() + "\n"
	                + "Date & Time: " + notification.getDateTime() + "\n"
	                + "Status: " + notification.getStatus() + "\n\n"
	                + "Regards,\nYour Clinic");
	        mailSender.send(message);

	        return savedNotification;
	    }

	    // Get all notifications
	    public List<Notification> getAllNotifications() {
	        return notificationRepository.findAll();
	    }

	    // Get notification by ID
	    public Notification getNotificationById(Long id) {
	        return notificationRepository.findById(id)
	                .orElseThrow(() -> new RuntimeException("Notification not found with id: " + id));
	    }

	    // Update notification
	    public Notification updateNotification(Long id, Notification notification) {
	        Notification existing = getNotificationById(id);
	        existing.setPatientName(notification.getPatientName());
	        existing.setEmail(notification.getEmail());
	        existing.setDateTime(notification.getDateTime());
	        existing.setDescription(notification.getDescription());
	        existing.setStatus(notification.getStatus());
	        return notificationRepository.save(existing);
	    }

	    // Delete notification
	    public void deleteNotification(Long id) {
	        notificationRepository.deleteById(id);
	    }

	}



