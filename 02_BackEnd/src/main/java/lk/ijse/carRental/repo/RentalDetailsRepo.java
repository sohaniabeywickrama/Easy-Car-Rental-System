package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.RentalDetail;
import lk.ijse.carRental.entity.RentalDetails_PK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalDetailsRepo extends JpaRepository<RentalDetail, RentalDetails_PK> {



}
