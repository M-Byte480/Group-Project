//package org.project.api.controller;
//
//import java.util.List;
//import org.project.api.entity.UserEntity;
//import org.project.api.repository.UserRepository;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.slf4j.LoggerFactoryFriend;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("user")
//public class UserController {
//
//  private static final Logger LOG = LoggerFactory.getLogger(UserController.class);
//
//  @Autowired
//  private UserRepository userRepository;
//
//  @GetMapping("user")
//  public String createUser(@RequestParam String fullName) {
//    LOG.info("Attempt to create new user: " + fullName);
//
//    UserEntity user = new UserEntity();
//    String[] names = fullName.split(" ");
//    user.setFirstName(names[0]);
//    user.setSecondName(names[1]);
//
//    userRepository.save(user);
//
//    LOG.info("User has been saved");
//    return "Saves Successfully";
//  }
//
//  @GetMapping("users")
//  public List<UserEntity> getAllUsers() {
//    return (List<UserEntity>) userRepository.findAll();
//  }
//}
