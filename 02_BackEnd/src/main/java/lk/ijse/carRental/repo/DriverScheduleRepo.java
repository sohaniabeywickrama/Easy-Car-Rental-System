package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Driver;
import lk.ijse.carRental.entity.DriverSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverScheduleRepo extends JpaRepository<lk.ijse.carRental.entity.DriverSchedule,String> {

    @Query(value = "SELECT driverId FROM driveschedule WHERE scheduleId=?1", nativeQuery = true)
    DriverSchedule getDriverIdByScheduleId(String rId);

}
