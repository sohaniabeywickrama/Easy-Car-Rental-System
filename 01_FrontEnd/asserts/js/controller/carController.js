var vNameAr = [];
var baseurl = "http://localhost:8080/02_BackEnd_war_exploded/";

$("#btnAdminAddCar").click(function () {
    let registrationNum = $("#save-car-registration").val();
    addCar();
})


function addCar() {
    var vData = new FormData();

    let frontViewFile = $(".frontView")[0].files[0];
    let backViewFile = $(".backView")[0].files[0];
    let sideViewFile = $(".sideView")[0].files[0];
    let interiorViewFile = $(".interior")[0].files[0];

    console.log(frontViewFile)
    console.log(backViewFile)
    console.log(sideViewFile)
    console.log(interiorViewFile)

    let frontFileName = $(".frontView")[0].files[0].name;
    let backFileName = $(".backView")[0].files[0].name;
    let sideFileName = $(".sideView")[0].files[0].name;
    let interiorFileName = $(".interior")[0].files[0].name;
    // console.log(frontFileName)
    // console.log(backFileName)
    // console.log(sideFileName)
    // console.log(interiorFileName)


    let registrationNum = $("#save-car-registration").val();
    console.log("registration----" + "------" + registrationNum);

    let brand = $("#new_car_brand").val();
    let type = $("#save-car-type").val();
    let model = $("#save-car-model").val();
    let fuelType = $("#save-car-fuelType").val();
    let transmission = $("#save-car-transmission").val();
    let colour = $("#save-car-color").val();
    let noOfPassengers = $("#save-car-passengers").val();

    let description = $("#save-car-Description").val();
    let lastServiceMileage = $("#save-car-lastService-mileage").val();

    let freeKmDay = $("#save-car-freeKm-Day").val();
    let freeKmMonth = $("#save-car-freeKm-Month").val();

    let dailyRate = $("#save-car-daily").val();
    let monthlyRate = $("#save-car-monthly").val();
    let prizeForExtraKm = $("#save-car-extraKm-price").val();
    let wavier = $("#save-car-waiver-payment").val();
    let status = $("#save-car-status").val();

    let image1 = frontFileName;
    let image2 = backFileName;
    let image3 = sideFileName;
    let image4 = interiorFileName;

    var carDTO = {
        registrationId: registrationNum,
        brand: brand,
        type: type,
        model: model,
        fuelType: fuelType,
        transmissionType: transmission,
        colour: colour,
        noOfPassenger: noOfPassengers,
        image1: "uploads/" + image1,
        image2: "uploads/" + image2,
        image3: "uploads/" + image3,
        image4: "uploads/" + image4,
        VehicleDescription: description,
        lastServiceMileage: lastServiceMileage,
        freeKmDay: freeKmDay,
        freeKmMonth: freeKmMonth,
        dailyRate: dailyRate,
        monthlyRate: monthlyRate,
        priceForExtraKm: prizeForExtraKm,
        waiver_payment: wavier,
        availability: status,
    }

    vData.append("carFiles", frontViewFile)
    vData.append("carFiles", backViewFile)
    vData.append("carFiles", sideViewFile)
    vData.append("carFiles", interiorViewFile)
    vData.append("vehicle", new Blob([JSON.stringify(carDTO)], {type: "application/json"}))

    $.ajax({
        url: baseurl + "car",
        method: "POST",
        async: true,
        contentType: false,
        processData: false,
        data: vData,
        success: function (resp) {
            alert("Add Susses");
            uploadCarImages(registrationNum);
            loadAllCars();

            /*Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "car Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
            /*if (resp.status === 200) {
                console.log("car saved")
                alert(resp.message);
                // loadAllCars("allCarDetail");

                uploadCarImages(registrationNum);

            }*/

        },
        error: function (error) {
            // alert(error.responseJSON.message)
            console.log(error);
            /*Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "car Not Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
        }
    })
}


function uploadCarImages(registrationNum) {
    alert("save Image ")

    let frontViewFile = $("#save-car-frontView")[0].files[0];
    let backViewFile = $("#save-car-backView")[0].files[0];
    let sideViewFile = $("#save-car-sideView")[0].files[0];
    let interiorViewFile = $("#save-car-interior")[0].files[0];

    let frontFileName = registrationNum + "-image1-" + $("#save-car-frontView")[0].files[0].name;
    let backFileName = registrationNum + "-image2-" + $("#save-car-backView")[0].files[0].name;
    let sideFileName = registrationNum + "-image3-" + $("#save-car-sideView")[0].files[0].name;
    let interiorFileName = registrationNum + "-image4-" + $("#save-car-interior")[0].files[0].name;

    console.log("save car front : " + $("#save-car-frontView")[0].files[0]);

    var data = new FormData();

    data.append("image1", frontViewFile, frontFileName);
    data.append("image2", backViewFile, backFileName);
    data.append("image3", sideViewFile, sideFileName);
    data.append("image4", interiorViewFile, interiorFileName);

    $.ajax({
        url: baseurl + "car/uploadImg/" + registrationNum,
        method: "Post",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
            /*Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Images Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
            // console.log(error);
            /*Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Images Not Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
        }
    });
}


/*====================RENTAL=========================*/

function loadAllCars(path) {
    $("#cusLuxCarContainer").empty();

    $.ajax({
        url: baseurl + "car/" + path,
        method: "GET",
        success: function (resp) {
            for (const car of resp.data) {
                let div = `<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon"><img  class="carCardMainImg" alt ="" src=\"${"http://localhost:8080/02_BackEnd_war_exploded/" + car.image1}\"
                                                           style="width: 250px;height: 175px"></i></div>
                                </div>
                            </div>

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <h4 class="vehicleName"><a href="">${car.model}</a></h4>
                                </div>
                            </div>
                            

                            <!--Type-->
                            <div class="row">
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${car.fuelType}</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    ${car.transmissionType}</h6>
                            </div>

                            <!--Line-->
                            <div id="lineHome"></div>

                            <div class="row">
                                <div class="d-flex ">
                                    <p class="mt-5 mb-3 ps-4 justify-content-center">${car.VehicleDescription}</p>
                                </div>
                            </div>

                            <!--Price-->
                            <div class="row">
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">${car.dailyRate}
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">${car.monthlyRate}
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">${car.waiver_payment}
                                </div>
                            </div>
                            <div class="row">
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">Per Day
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">Per Month
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">On Hold
                                </div>
                            </div>


                            <!--Button-->
                            <div  class="row mt-3 btnClzRent">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button data-dtaImg="${car.image3}"  data-dtaDailyRate="${car.dailyRate}" data-dtaMonthlyRate="${car.monthlyRate}" data-dtaWawier="${car.waiver_payment}" data-btnRentIt="${car.model}" data-registrationId="${car.registrationId}"  class="btn_RentIt">RENT IT</button>
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center">
                                    <img alt="" class="carStoreIndexCarDetailIcon" height="35" src="asserts/image/icons8-popup-50.png" width="35">
                                </div>
                            </div>
                        </div>
                    </div>`;

                if (car.type === "Luxury") {
                    $("#cusLuxCarContainer").append(div);
                } else if (car.type === "Premium") {
                    $("#cusPremiumCarContainer").append(div);
                } else if (car.type === "General") {
                    $("#cusCarGeneralContainer").append(div);
                }

                /*---SET IMG----*/
                // vNameAr.push(resp.name);

            }
            /*Event in this Car Card*/
            carStoreCarDetailsIcon();
            rentItClick();
        }
    });
}


function rentItClick() {
    const buttons = document.querySelectorAll('.btn_RentIt');


    $(".btn_RentIt").click(function () {
        var bgColor = $(this).css("background-color");
        console.log(bgColor)

        // let x=$(this).dataset.btnRentIt;
        console.log($(this).attr("data-btnRentIt"));
        setBrandToArray(this);


        if (colorsAreEqual(bgColor, "rgb(68, 68, 68)")) { //firstTime With hover
            $(this).text("Added");
            $(this).css({
                "background": "#D50137",
                "color": "#ffffff"
            });
        } else if (colorsAreEqual(bgColor, "rgb(213, 1, 55)")) { //red
            $(this).text("Rent It");
            $(this).css({
                "background": "#F7F7F7",
                "color": "#444444",
            });
        } else if (colorsAreEqual(bgColor, "rgb(247, 247, 247)")) { //red turn to past value
            $(this).text("Added");
            $(this).css({
                "background": "#D50137",
                "color": "#ffffff"
            });
        }
    })


}

function colorsAreEqual(color1, color2) {
    var rgb1 = color1.match(/\d+/g);  // Get the RGB values of color1
    var rgb2 = color2.match(/\d+/g);  // Get the RGB values of color2
    if (rgb1.length !== 3 || rgb2.length !== 3) {
        return false;  // Invalid input - not a valid color
    }
    for (var i = 0; i < 3; i++) {
        if (parseInt(rgb1[i]) !== parseInt(rgb2[i])) {
            return false;  // The colors are not equal
        }
    }
    return true;  // The colors are equal
}


function setBrandToArray(param) {
    let bool = true;
    let isDateAdd = false;

    var rDate = "";
    var pDate = "";

    if ($("#lux-car_Store_pickup_date").val() && $("#lux-car_Store_Return_date").val()) {
        // console.log("Value "+"======"+$("#lux-car_Store_pickup_date").val())
        isDateAdd = true;
        pDate = $("#lux-car_Store_pickup_date").val();
        rDate = $("#lux-car_Store_Return_date").val();

    } else if ($("#premiumCar_Store_pickup_date").val() && $("#premiumCar_Store_Return_date").val()) {
        // console.log("Value "+"======"+$("#lux-car_Store_pickup_date").val());
        isDateAdd = true;
        pDate = $("#premiumCar_Store_pickup_date").val()
        rDate = $("#premiumCar_Store_Return_date").val();

    } else if ($("#car_Store_pickup_date").val() && $("#car_Store_Return_date").val()) {
        // console.log("Value "+"======"+$("#car_Store_Return_date").val());
        isDateAdd = true;
        pDate = $("#car_Store_pickup_date").val()
        rDate = $("#car_Store_Return_date").val()
    }


    var cus = {
        model: $(param).attr("data-btnRentIt"),
        imag: $(param).attr("data-dtaImg"),
        dRate: $(param).attr("data-dtaDailyRate"),
        mRate: $(param).attr("data-dtaMonthlyRate"),
        dWaiver: $(param).attr("data-dtaWawier"),
        tnRent: $(param).attr("data-btnRentIt"),
        pickupD: pDate,
        returnD: rDate,
        btnR: param,
        regId: $(param).attr("data-registrationId")
    }

    for (let i = 0; i < vNameAr.length; i++) {
        console.log(vNameAr[i].model + "===" + $(param).attr("data-btnRentIt"));
        if (vNameAr[i].model === $(param).attr("data-btnRentIt")) {
            //console.log(vNameAr[i]+"==="+$(param).attr("data-btnRentIt"));
            bool = false;
        }
    }


    if (bool) {
        // vNameAr.push($(param).attr("data-btnRentIt"));
        vNameAr.push(cus);
    } else {
        /*console.log("index-"+index )
        if (index > -1) {
            vNameAr.splice(index, 1);
        }*/

        for (var i = 0; i < vNameAr.length; i++) {
            if (vNameAr[i].model === $(param).attr("data-btnRentIt")) {
                vNameAr.splice(i, 1);
                break;
            }
        }

    }

    /*======================*/

}


/*-------------------------------
*    send data to the cart
* ------------------------------*/
function sendVehicleNameToCart() {
    return vNameAr;
}

/*==============================================================================*/

function viewCars(path) {
    /*$("#view-car-main-div").empty();*/
    $("#view-car-container").empty();

    $.ajax({
        url: baseUrl + "car/" + path,
        method: "GET",
        success: function (resp) {
            for (const car of resp.data) {

                let div = ` <!-- Sales Card -->
                        <div class="col-xxl-4 col-md-12">
                            <div class="card info-card sales-card mt-5" style="width: 901px">

                                <div class="card-body">
                                    <div class="d-flex align-items-center" style="margin-top: 5px; width: 782px">
                                        <div class="col-sm-3">
                                            <img style="width: 152px;" src=${"http://localhost:8080/02_Back_End_war_exploded/" + car.image3} alt="">
                                        </div>
                                        
                                        <div class="col-sm-3" style="margin-left: 20px">
                                            <h6 style="color: black; font-size: 15px">Vehicle Id</h6>
                                            <p style="font-size: 15px">${car.registrationId}</p>
                                        </div>

                                        <div class="col-sm-3" style="margin-left: -70px">
                                            <h6 style="color: black; font-size: 15px">${car.brand}</h6>
                                            <p style="font-size: 15px">${car.model}</p>
                                        </div>

                                        <div class="col-sm-3" style="margin-left: -96px;">
                                            <h6 style="color: black; font-size: 15px">Daily</h6>
                                            <p style="font-size: 15px">${car.dailyRate}</p>
                                        </div>

                                        <div class="col-sm-3" style="margin-left: -96px;">
                                            <h6 style="color: black; font-size: 15px">Monthly</h6>
                                            <p style="font-size: 15px">${car.monthlyRate}</p>
                                        </div>

                                        <div class="col-sm-3" style="margin-left: -86px;">
                                            <h6 style="color: black; font-size: 15px">Damage Cost</h6>
                                            <p style="font-size: 15px">${car.damageCost}</p>
                                        </div>
                                        
                                        <div class="col-sm-3" style="margin-left: -61px">
                                            <h6 style="color: black; font-size: 15px">Status</h6>
                                            <p style="font-size: 15px">${car.availability}</p>
                                        </div>

                                    </div>

                                    <div class="d-flex align-items-center" style="margin-left: 60px">
                                        <div class="col-sm-3">
                                            <button class="btnAddMaintenance btn btn-primary gap-5" style="background-color: orangered;color: white; border: none; width: 203px; margin-left: 465px">Add To Maintenance</button>
                                        </div>

<div class="col-sm-3">
                                            <button data-dtaRegId="${car.registrationId}" data-dtaBrand="${car.brand}" data-dtaModel="${car.model}" data-dtaDrate="${car.dailyRate}" data-dtaMrate="${car.monthlyRate}" data-dtaDamage="${car.damageCost}" data-dtaStatus="${car.status}" class="btn btn-primary btnViewUpdate" data-bs-toggle="modal" 
                                            data-bs-target=".addItemModal" 
                                            style="background-color: blue;color: white; border: none; width: 100px; margin-left: 500px">
                                            Update</button>
                                        </div>
                                        
                                        <div class="modal fade addItemModal" tabindex="-1" aria-labelledby="addItemModalLabel" aria-hidden="true">
                    <div class="modal-dialog-centered modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header text-light" style="background-color:#1F1D2E ">
                                <h5 class="modal-title " id="addItemModalLabel">Update & Delete Car</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                     
                                    <div>
                                        <label for="vhId" class="col-form-label">Vehicle Id : </label>
                                        <input type="text" class="txtVehicleId-update form-control" id="vhId" disabled>
                                    </div>
                                    <div >
                                        <label for="vhBrand" class="col-form-label">Vehicle Brand : </label>
                                        <input type="text" class="txtVehicleBrand-update form-control vhBrand">
                                    </div>
                                    <div >
                                        <label for="vhModel" class="col-form-label">Vehicle Model : </label>
                                        <input type="text" class="txtVehicleModel-update form-control vhModel">
                                    </div>
                                    <div >
                                        <label for="vhDaily" class="col-form-label">Daily Rate:</label>
                                        <input type="text" class="txtVehicleDaily-update form-control vhDaily">
                                    </div>
                                    <div >
                                        <label for="vhMonthly" class="col-form-label">Monthly Rate:</label>
                                        <input type="text" class="txtVehicleMonthly-update form-control vhMonthly">
                                    </div>
                                    <div >
                                        <label for="vhDamage" class="col-form-label">Damage Cost:</label>
                                        <input type="text" class="txtVehicleDamage-update form-control vhDamage">
                                    </div>
                                    <div >
                                        <label for="vhStatus" class="col-form-label">Status:</label>
                                        <input type="text" class="txtVehicleStatus-update form-control vhStatus">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btnUpdateCar btn btn-primary data-bs-dismiss="modal">Update</button>
                                <button type="button" class="btnDeleteCar btn btn-danger">Delete</button>
                            </div>

</div>
                    </div>
                </div>
             </div>
         </div>
    </div>
 </div><!-- End Sales Card -->`;
                $("#view-car-container").append(div);
            }
        }
    });
}



function loadCars(path) {
    $("#admin-view-car").empty();
    /* $("#view-car-container").empty();*/

    $.ajax({
        url: baseurl + "car/" + path,
        method: "GET",
        success: function (resp) {
            model=resp.model;
            brand=resp.brand;
            type=resp.type;
            noOfPassenger=resp.noOfPassenger;
            transmissonType=resp.transmissionType;
            fuelType=resp.fuelType;
            image1=resp.image1;
            image2=resp.image2;
            image3=resp.image3;
            image4=resp.image4;

            for (const car of resp.data) {
                let row = `<tr><td>${car.registrationId}</td><td>${car.dailyRate}</td><td>${car.monthlyRate}</td><td>${car.waiver_payment}</td><td>${car.lastServiceMileage}</td><td>${car.freeKmDay}</td><td>${car.priceForExtraKm}</td><td>${car.color}</td><td>${car.availability}</td></tr>`;
                $("#admin-view-car").append(row);

                $("#admin-view-car").off("click");
                $("#admin-view-car").click(function () {
                    driver_nic = $(this).children(":eq(0)").text();
                    $("#navViewVehicle").prop('disabled', false);
                });
            }
            bindRowClickEvents();

        }
    });
}

/*Update Car*/
$('#btnUpdateCar').click(function (){
    viewUpdate();
});

/*Delete Car*/
$('#btnDeleteCar').click(function (){
    $.ajax({
        url:baseurl+$("#update-car-Id").val(),
        method:"delete",
        success(resp){
            alert(resp.message);
            // viewCars();
            loadCars("allCarDetail");
        }
    });
    clearCarTextUpdate();
});




function viewUpdate(){

    let registrationId= $('#update-car-Id').val();
    let dailyRate= $('#update-car-dailyRate').val();
    let monthlyRate= $('#update-car-monthlyRate').val();
    let damageCost= $('#update-car-damagecost').val();
    let lastServiceMileage= $('#update-car-lastmileage').val();
    let freeServiceMileage= $('#update-car-freemileage').val();
    let priceForExtraKm= $('#update-car-exkm').val();
    let color= $('#update-car-color').val();
    let availability= $('#update-car-status').val();

    var view= {
        registrationId: registrationId,
        dailyRate:dailyRate,
        monthlyRate: monthlyRate,
        damageCost: damageCost,
        lastServiceMileage: lastServiceMileage,
        freeServiceMileage: freeServiceMileage,
        priceForExtraKm: priceForExtraKm,
        color: color,
        availability:availability,

        model:model,
        brand:brand,
        type:type,
        noOfPassenger: noOfPassenger,
        transmissionType:transmissonType,
        fuelType:fuelType,
        image1:image1,
        image2:image2,
        image3:image3,
        image4:image4,
    }

    $.ajax({
        url: baseurl + "car",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(view),
        success: function (res) {
            // viewCars();
            loadCars("allCarDetail");
            if (res.status === 200) {
                alert(res.message)
            } else {
                alert('Updated!');
                clearCarTextUpdate();
            }
        }
    });
}



function clearCarTextUpdate() {
    $('#update-car-Id,#update-car-dailyRate,#update-car-monthlyRate,#update-car-damagecost,#update-car-lastmileage,#update-car-freemileage,#update-car-exkm,#update-car-color,#update-car-status').val("");
}

function clearCarText() {
    $('#save-car-reg-id,#save-car-brand,#save-car-type,#save-car-model,#save-car-transmission,#save-car-color,#save-car-passenger,#save-car-last-km,#save-car-free-mileage,#save-car-fuel,#save-car-dailyRate,#save-car-monthlyRate,#save-car-pr-ex-km,#save-car-damage,#save-car-availability').val("");
}

function bindRowClickEvents() {
    $("#admin-view-car>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let dRate = $(this).children(":eq(1)").text();
        let mRate = $(this).children(":eq(2)").text();
        let damage = $(this).children(":eq(3)").text();
        let last = $(this).children(":eq(4)").text();
        let free = $(this).children(":eq(5)").text();
        let extra = $(this).children(":eq(6)").text();
        let color = $(this).children(":eq(7)").text();
        let status = $(this).children(":eq(8)").text();


        $('#update-car-Id').val(id);
        $('#update-car-dailyRate').val(dRate);
        $('#update-car-monthlyRate').val(mRate);
        $('#update-car-damagecost').val(damage);
        $('#update-car-lastmileage').val(last);
        $('#update-car-freemileage').val(free);
        $('#update-car-exkm').val(extra);
        $('#update-car-color').val(color);
        $('#update-car-status').val(status);
    });
}
