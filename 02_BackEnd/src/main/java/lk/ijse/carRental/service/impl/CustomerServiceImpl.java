package lk.ijse.carRental.service.impl;

import lk.ijse.carRental.dto.CustomerDTO;
import lk.ijse.carRental.entity.Customer;
import lk.ijse.carRental.repo.CustomerRepo;
import lk.ijse.carRental.service.CustomerService;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getCustomerId())) {
            throw new RuntimeException("Customer "+dto.getCustomerId()+" Already Exist..!");
        }
        repo.save(mapper.map(dto, Customer.class));
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomerDetail() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<CustomerDTO>>() {

        }.getType());
    }

    @Override
    public void updateCustomer(CustomerDTO customerDTO) {
        if (!repo.existsById(customerDTO.getCustomerId())){
            throw new RuntimeException("Customer "+customerDTO.getCustomerId()+" Not Available to Update..!");
        }
        repo.save( mapper.map(customerDTO, Customer.class));
    }

    @Override
    public void deleteCustomer(String id) {
        if (!repo.existsById(id)){
            throw new RuntimeException("Customer "+id+" Not Available to Delete..!");
        }
        repo.deleteById(id);
    }

    @Override
    public CustomerDTO getCustomerDetail(String id) {
        return null;
    }

    @Override
    public List<CustomerDTO> getTodayRegisteredCustomers() {
        return null;
    }


    @Override
    public CustomerDTO checkCustomerLogIn(String userName) {
        return mapper.map(repo.searchCustomerByUserName(userName), CustomerDTO.class);
    }


}
