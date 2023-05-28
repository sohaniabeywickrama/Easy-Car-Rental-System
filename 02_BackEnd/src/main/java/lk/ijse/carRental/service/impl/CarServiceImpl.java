package lk.ijse.carRental.service.impl;

import antlr.Token;
import lk.ijse.carRental.dto.CarDTO;
import lk.ijse.carRental.dto.CustomerDTO;
import lk.ijse.carRental.entity.Car;
import lk.ijse.carRental.repo.CarRepo;
import lk.ijse.carRental.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CarServiceImpl implements CarService {
    @Autowired
    CarRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCar(CarDTO carDTO) {
        if (repo.existsById(carDTO.getRegistrationId())){
            throw new RuntimeException("Car "+carDTO.getRegistrationId()+" Already Exist..!");
        }
        Car entity = mapper.map(carDTO, Car.class);
        repo.save(entity);
    }

    @Override
    public void updateCar(CarDTO carDTO) {
        if (!repo.existsById(carDTO.getRegistrationId())){
            throw new RuntimeException("Car "+carDTO.getRegistrationId()+" Not Available to Update..!");
        }
        Car entity = mapper.map(carDTO, Car.class);
        repo.save(entity);
    }

    @Override
    public void deleteCar(String id) {
        if (!repo.existsById(id)){
            throw new RuntimeException("Car "+id+" Not Available to Delete..!");
        }
        repo.deleteById(id);
    }

    @Override
    public CarDTO getCarDetail(String id) {
        return null;
    }

    @Override
    public ArrayList<CarDTO> getAllCarDetail() {
        return mapper.map(repo.findAll(), new TypeToken<List<CarDTO>>() {
        }.getType());
    }

    @Override
    public List<CarDTO> getCarsUnderMaintain() {
        return null;
    }

    @Override
    public List<CarDTO> getCarsNeedMaintain() {
        return null;
    }

    @Override
    public List<CarDTO> getUnavailableOrAvailableCarsByStatus(String status) {
        return null;
    }

    @Override
    public List<CarDTO> getAvailableAndRentalCarsForReservation(String pick_up_date, String return_date, String status) {
        return null;
    }

    @Override
    public void setCarStatusUnavailableOrAvailable(String id, String status) {

    }

    @Override
    public List<CarDTO> sortCarsByAttributes(CarDTO carDTO) {
        return null;
    }



    @Override
    public CarDTO searchCarByRegistrationId(String registrationId) {
        return mapper.map( repo.getCarByRegistrationId(registrationId),CarDTO.class);
    }



    @Override
    public void uploadCarImage(String frontPath, String BackPath, String sidePath, String InteriorPath, String registrationNumber) {

        if (repo.existsById(registrationNumber)) {
            System.out.println("Car Impl-if");
            repo.updateCarFilePaths(frontPath, BackPath, sidePath,InteriorPath, registrationNumber);
        } else {
            throw new RuntimeException("User Not Found");
        }
    }

}
