package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment,String> {
}
