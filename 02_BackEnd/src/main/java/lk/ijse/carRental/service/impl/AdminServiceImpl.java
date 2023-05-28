package lk.ijse.carRental.service.impl;

import lk.ijse.carRental.dto.AdminDTO;
import lk.ijse.carRental.dto.CustomerDTO;
import lk.ijse.carRental.repo.AdminRepo;
import lk.ijse.carRental.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public AdminDTO checkAdminLogIn(String userName) {
        return modelMapper.map(adminRepo.searchAdminByUserName(userName), AdminDTO.class);
    }

}
