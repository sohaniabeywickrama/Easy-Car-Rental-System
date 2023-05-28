package lk.ijse.carRental.service;

import lk.ijse.carRental.dto.CustomerDTO;
import org.springframework.stereotype.Component;


import java.util.ArrayList;
import java.util.List;

public interface CustomerService {

    void saveCustomer(CustomerDTO customerDTO);

    ArrayList<CustomerDTO> getAllCustomerDetail();

    void updateCustomer(CustomerDTO customerDTO);

    void deleteCustomer (String id);

    CustomerDTO getCustomerDetail(String id);

    List<CustomerDTO> getTodayRegisteredCustomers();

    CustomerDTO checkCustomerLogIn(String userName);
}
