package lk.ijse.carRental.service;

import lk.ijse.carRental.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {
    String generateReservationBillIdId();

    void makePaymentForReservation(PaymentDTO paymentDTO);

    String getIncomeByDate(String type, String start_date, String end_date);

    List<PaymentDTO> getTodayIncomeList();
}
