package com.example.appointment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.appointment.entity.Appointment;
import com.example.appointment.feign.PatientClient;
import com.example.appointment.feign.PatientDto;

import com.example.appointment.repository.appointRepository;
@Service
public class appointService implements service {

	@Autowired
    private appointRepository repo;
	@Autowired
	private PatientClient client;
	


    @Override
    public Appointment saveAppointment(Appointment appointment,Long id) {
    	 PatientDto dto = client.getPatientById(id);

    	    // Save patient details into appointment
    	    appointment.setPatientid(dto.getId());      // <-- use patientId, not appointmentId
    	    appointment.setPatientName(dto.getName());
    	    appointment.setEmail(dto.getEmail());

    	    // Let appointment.id be auto-generated
    	    return repo.save(appointment);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return repo.findAll();
    }
    
   

    @Override
    public Appointment getAppointmentById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + id));
    }

    @Override
    public Appointment updateAppointment(Long id, Appointment updated) {
        Appointment existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + id));

        existing.setPatientid(updated.getPatientid());
        
        existing.setAppointmentDateTime(updated.getAppointmentDateTime());
        existing.setAcceptStatus(updated.getAcceptStatus());
        existing.setDescription(updated.getDescription());

        return repo.save(existing);
    }

    @Override
    public void deleteAppointment(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Appointment not found with id " + id);
        }
        repo.deleteById(id);
    }

	

}
