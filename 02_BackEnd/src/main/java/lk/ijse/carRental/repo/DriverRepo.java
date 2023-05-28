package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverRepo extends JpaRepository<Driver,String> {

    @Query(value = "SELECT * FROM driver WHERE status='Available' ORDER BY driverId DESC limit 1", nativeQuery = true)
    Driver getDriverByDriverStatus();

}
