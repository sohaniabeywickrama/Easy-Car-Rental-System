package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RentalRepo extends JpaRepository<Rental,String> {
    @Query(value = "SELECT rentalId FROM Rental ORDER BY rentalId DESC limit 1", nativeQuery = true)
    String generateReservationId();


    @Query(value = "SELECT * FROM rental WHERE reservationStatus='Pending'", nativeQuery = true)
    List<Rental> getRentalByReservationStatus();


}
