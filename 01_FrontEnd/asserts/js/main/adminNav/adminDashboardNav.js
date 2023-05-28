
//for the Loading Window
$(window).on('load',function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#adminHeaderMain').css('display','none');

    $('#spaAdminMainLogIn').css('display','block');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');


})

/*dashboard*/
$('#adDash').click(function () {

})

/*Reservation*/
$('#adRes').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','block');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    // $('#adminHeaderMain').css('display','block');
    pickups();
})


/*
/!*Driver schedule*!/
$('#adCarSchedule').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','block');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
})
*/

$('#spaAdminPayments').css('display','none');

/*View Car*/
$('#adViewCar').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','block');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');
})

/*View Car*/
$('#adViewCarView').click(function () {
    loadCars("allCarDetail");

    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','block')
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');


})


/*car Schedule*/
$('#adCarSchedule').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','block');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');
})

/*customer*/
$('#adCustomer').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','block');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');
})

/*Driver*/
$('#adViewDriver').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','block');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    loadAllDrivers();
})

/*Driver shedule*/
$('#adDriverSchedule').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','block');
    $('#spaAdminPayments').css('display','none');
})


/*payment*/
$('#adPayment').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','none');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','block');
})

/*customer all view*/
$('#adViewAllCustomer').click(function () {
    $('#adminDashboard').css('display','none');
    $('#adminAddVehicle').css('display','none');
    $('#adminCustomerVerification').css('display','none');
    $('#adminRentalVerification').css('display','none');
    $('#adminDriver').css('display','none');
    $('#adminViewAllCustomer').css('display','block');
    $('#spaAdminMainLogIn').css('display','none');
    $('#spaAdminVehicleSchedule').css('display','none');
    $('#spaAdminViewVehicle').css('display','none');
    $('#spaAdminDriverSchedule').css('display','none');
    $('#spaAdminPayments').css('display','none');

    loadAllCustomers();
})
