package lk.ijse.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Driver {
    @Id
    private String driverId;
    private String name;
    private String nic;
    private LocalDate dob;
    private String address;
    private String drivingLicenseNumber;
    private String status;

    @OneToMany(mappedBy = "driverId")
    private List<RentalDetail> rentalDetailsList;
}
