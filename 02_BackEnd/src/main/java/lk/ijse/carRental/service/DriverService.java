package lk.ijse.carRental.service;

import lk.ijse.carRental.dto.DriverDTO;

import java.util.ArrayList;
import java.util.List;

public interface DriverService {

    DriverDTO checkDriverLogIn(String name, String password);

    void saveDriver(DriverDTO driverDTO);

    void updateDriver(DriverDTO driverDTO);

    void deleteDriver(String id);

    DriverDTO getDriverDetail(String id);

    ArrayList<DriverDTO> getAllDriverDetail();

    List<DriverDTO> getTodayAvailableAndOccupiedDrivers(String status);
}
