package lk.ijse.carRental.service.impl;

import lk.ijse.carRental.dto.CustomerDTO;
import lk.ijse.carRental.dto.DriverDTO;
import lk.ijse.carRental.entity.Customer;
import lk.ijse.carRental.entity.Driver;
import lk.ijse.carRental.repo.CustomerRepo;
import lk.ijse.carRental.repo.DriverRepo;
import lk.ijse.carRental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public DriverDTO checkDriverLogIn(String name, String password) {
        return null;
    }

    @Override
    public void saveDriver(DriverDTO driverDTO) {
        if (repo.existsById(driverDTO.getDriverId())){
            throw new RuntimeException("Driver" +driverDTO.getDriverId()+"Already Exist..!");
        }
        repo.save(mapper.map(driverDTO,Driver.class));
    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {
        if (repo.existsById(driverDTO.getDriverId())){
            repo.save( mapper.map(driverDTO, Driver.class));
        }else {
            throw new RuntimeException("Driver " + driverDTO.getDriverId() + " Not Available to Update..!");
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (!repo.existsById(id)){
            throw new RuntimeException("Customer "+id+" Not Available To Delete.");
        }
        repo.deleteById(id);
    }

    @Override
    public DriverDTO getDriverDetail(String id) {
        return null;
    }

    @Override
    public ArrayList<DriverDTO> getAllDriverDetail() {
        return mapper.map(repo.findAll(),new TypeToken<List<DriverDTO>>(){}.getType());
    }

    @Override
    public List<DriverDTO> getTodayAvailableAndOccupiedDrivers(String status) {
        return null;
    }
}
