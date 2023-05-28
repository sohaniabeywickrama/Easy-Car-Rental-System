package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,String> {

    Object searchAdminByUserName(String userName);
}
