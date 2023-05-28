$('#loginBtnLogIN1').click(function (){

    let userName = $('#yourUsername1').val();
    let password = $('#yourPassword1').val();

    $.ajax({
        url: baseurl + "admin?userName=" + userName,
        method: "GET",
        success: function (resp) {
            console.log(resp.userName + "=" + resp.data.userName)
            console.log(resp.userName + "=" + userName)
            if (resp.data.userName === userName && resp.data.password === password) {


            } else {
                alert("Welcome!");
                $('#adminDashboard').css('display','block');
                $('#adminAddVehicle').css('display','none');
                $('#adminCustomerVerification').css('display','none');
                $('#adminRentalVerification').css('display','none');
                $('#adminDriver').css('display','none');
                $('#adminViewAllCustomer').css('display','none');
                $('#adminHeaderMain').css('display','block');

                $('#spaAdminMainLogIn').css('display','none');
            }
        }
    });
});