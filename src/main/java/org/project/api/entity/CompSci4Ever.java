package org.project.api.entity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
//@EntityScan({"org.project.api.entity", "org.project.api", "org.project", "org.project.api.entity.UserEntity", "org.project.*", "org.project.api.entity.*"})
public class CompSci4Ever {

  public static void main(String[] args) {
    SpringApplication.run(CompSci4Ever.class, args);
  }
}