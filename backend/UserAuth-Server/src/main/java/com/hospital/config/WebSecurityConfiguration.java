package com.hospital.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.hospital.enums.UserRole;
import com.hospital.services.jwt.UserService;

import lombok.RequiredArgsConstructor;

/*
 * 
 * @PreAuthorize("hasRole('ADMIN')")

@Secured("ROLE_USER")

@RolesAllowed("ADMIN")
 */
	
	@Configuration  
	@EnableWebSecurity
	@EnableMethodSecurity
	@RequiredArgsConstructor
	public class WebSecurityConfiguration 
	{
		
		private final JwtAuthenticationFilter jwtAuthenticationFilter;
		private final UserService userService;
		
		@Bean
	    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception 
	    {
			return http.csrf(AbstractHttpConfigurer::disable)
	                .authorizeHttpRequests(request ->
	                        request.requestMatchers("/api/auth/**","/actuator/**").permitAll()
	                        .requestMatchers("/api/admin/**").hasAnyAuthority(UserRole.ADMIN.name())
	                        .requestMatchers("/api/user/**").hasAnyAuthority(UserRole.USER.name())
	                        .requestMatchers("/api/user/**").hasAnyAuthority(UserRole.DOCTOR.name())
	                        .anyRequest().authenticated())
				                .sessionManagement(session -> session.
				                        sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				                .authenticationProvider(authenticationProvider())
	                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
	               . httpBasic(Customizer.withDefaults()).build();             
	    }
		
		
	    @Bean
	    PasswordEncoder passwordEncoder() 
	    {
	        return new BCryptPasswordEncoder();
	    }

		@Bean
		public AuthenticationProvider authenticationProvider() {
			DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider(userService.userDetailsService());

			authenticationProvider.setPasswordEncoder(passwordEncoder()); // set the PasswordEncoder
			return authenticationProvider;
		}
	    
	    @Bean
	    AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
	        return config.getAuthenticationManager();
	    }
	  
	}
		
	
