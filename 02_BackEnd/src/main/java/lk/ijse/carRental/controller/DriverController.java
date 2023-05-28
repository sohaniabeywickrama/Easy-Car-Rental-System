package lk.ijse.carRental.controller;

import lk.ijse.carRental.dto.DriverDTO;
import lk.ijse.carRental.service.DriverService;
import lk.ijse.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {
    @Autowired
    private DriverService service;




    @PostMapping
    public ResponseUtil saveDriver(@RequestBody DriverDTO dto){
        service.saveDriver(dto);
        return new ResponseUtil("200",dto.getDriverId()+ " Added.!",null);
    }

    @PutMapping()
    public ResponseUtil updateDriver(@RequestBody DriverDTO dto){
        service.updateDriver(dto);
        return new ResponseUtil("200",dto.getDriverId()+": Updated.!",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@RequestParam String id){
        service.deleteDriver(id);
        return new ResponseUtil("200","Driver Deleted",null);
    }

    @GetMapping
    public ResponseUtil getAllCustomer(){
        List<DriverDTO> allDrivers = service.getAllDriverDetail();
        return new ResponseUtil("200"," Success.!",allDrivers);
    }

}
