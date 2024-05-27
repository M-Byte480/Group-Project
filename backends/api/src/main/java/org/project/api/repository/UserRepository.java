package org.project.api.repository;

import java.util.List;
import org.project.api.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, BigInteger> {

  @Query(value = "SELECT * FROM Users u WHERE u.firstName = :firstName", nativeQuery = true)
  List<UserEntity> getUserEntitiesByFirstName(String firstName);
}
