package lk.ijse.carRental.service.impl;

import lk.ijse.carRental.dto.PaymentDTO;
import lk.ijse.carRental.service.PaymentService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {


    @Override
    public String generateReservationBillIdId() {
        return null;
    }

    @Override
    public void makePaymentForReservation(PaymentDTO paymentDTO) {

    }

    @Override
    public String getIncomeByDate(String type, String start_date, String end_date) {
        return null;
    }

    @Override
    public List<PaymentDTO> getTodayIncomeList() {
        return null;
    }

}
