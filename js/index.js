$(document).ready(function() {

    const localApiUrl = 'http://127.0.0.1:8000/api/';

    localStorage.setItem("adminToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek");

    const adminHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + localStorage.getItem("adminToken"),
        'Accept': 'application/json'
    };

    function ajaxWrapper(method, url, successFunction, errorFunction, headers, data) {
        $.ajax({
            method: method,
            url: url,
            data: data,
            headers: headers,
            success: successFunction,
            error: function(error) {
                console.log(error);
                alert(error.responseJSON.message);
            }
        });
    }

    $('#signInAdmin').on('click', function() {
        let method = 'POST';
        let url = localApiUrl + 'sign-in';
        let data = {
            'email': 'anzir@gmail.com',
            'password': '12345678',
            'device_type': 'android',
            'device_token': 'rwetsfsgdd'
        };
        let headers = null;

        function adminSignInSuccess(result) {
            injectSignInResponseInUi(result, 'adminConfirm');
        }


        ajaxWrapper(method, url, adminSignInSuccess, headers, data);
    });

    $('#signInUser').on('click', function() {
        let method = 'POST';
        let url = localApiUrl + 'sign-in';
        let data = {
            'email': 'siam@gmail.com',
            'password': '12345678',
            'device_type': 'android',
            'device_token': 'rwetsfsgdd'
        };
        let headers = null;

        function userSignInSuccess(result) {
            injectSignInResponseInUi(result, 'userConfirm');
        }
        ajaxWrapper(method, url, userSignInSuccess, headers, data);
    });

    $('#createHotel').on('click', function() {
        let $hotel_name = $('#hotel_name');
        let $star_rating = $('#star_rating');

        let method = 'POST';
        let url = localApiUrl + 'create-hotel';
        let data = {
            'name': $hotel_name.val(),
            'star_rating': $star_rating.val()
        }
        let headers = adminHeaders;

        function createHotelSuccess(result) {
            createHotelResponseUi(result);
        }

        ajaxWrapper(method, url, createHotelSuccess, headers, data);
    });

    $('#createHotelDetails').on('click', function() {
        let $hotel_id = $('#hotel_id');
        let $country = $('#country');
        let $city = $('#city');
        let $state = $('#state');
        let $location = $('#location');
        let $zip_code = $('#zip_code');

        let method = 'POST';
        let url = localApiUrl + 'create-hotel-details';
        let data = {
            'hotel_id': $hotel_id.val(),
            'country': $country.val(),
            'city': $city.val(),
            'state': $state.val(),
            'location': $location.val(),
            'zip_code': $zip_code.val()
        }
        let headers = adminHeaders;

        function createHotelDetailsSuccess(result) {
            createHotelDetailsResponseUi(result);
        }
        ajaxWrapper(method, url, createHotelDetailsSuccess, headers, data);
    });

    $('#createRoom').on('click', function() {

        let method = 'POST';
        let url = localApiUrl + 'create-room';
        let data = {
            'room_number': $('#room_number').val(),
            'hotel_id': $('#hotelId').val(),
            'room_type': $('#room_type').val(),
            'rent': $('#rent').val(),
            'floor_no': $('#floor_no').val(),
            'smoking_zone': $('#smoking_zone').val(),
            'picture': $('#attach_picture').val()
        }
        let headers = adminHeaders;

        function createRoomSuccess(result) {
            createRoomResponseUi(result);
        }
        ajaxWrapper(method, url, createRoomSuccess, headers, data);

    });

    $('#getAllHotels').on('click', function() {
        let method = 'GET';
        let url = localApiUrl + 'get-all-hotel';
        let headers = adminHeaders;

        function getAllHotelsSuccess(result) {
            getHotelsResponseUi(result);
        }
        ajaxWrapper(method, url, getAllHotelsSuccess, headers);
    });

    $('#getAllRooms').on('click', function() {
        let method = 'GET';
        let url = localApiUrl + 'get-all-room';
        let headers = adminHeaders;

        function getAllRoomsSuccess(result) {
            getRoomsResponseUi(result);
        }
        ajaxWrapper(method, url, getAllRoomsSuccess, headers);
    });

    $('#checkInRoom').on('click', function() {

        let method = 'POST';
        let url = localApiUrl + 'check-in-room';
        let data = {
            'room_id': $('#room_id').val(),
            'check_in': $('#check_in').val(),
            'duration_of_stay': $('#duration_of_stay').val(),
            'paid_amount': $('#paid_amount').val()
        }
        let headers = adminHeaders;

        function checkInRoomSuccess(result) {
            checkInRoomResponseUi(result);
        }
        ajaxWrapper(method, url, checkInRoomSuccess, headers, data);
    });

    $('#getUserRevenueInfo').on('click', function() {

        let method = 'GET';
        let url = localApiUrl + 'get-user-revenue-info?';
        let headers = adminHeaders;

        function getRevenueInfoSuccess(result) {
            injectGetResponseUi(result, 'userRevenueInfo');
        }
        ajaxWrapper(method, url, getRevenueInfoSuccess, headers);
    });

    $('#getUserExpenditureInfo').on('click', function() {

        let method = 'GET';
        let url = localApiUrl + 'get-expenditure-info';
        let headers = adminHeaders;

        function getExpenditureInfoSuccess(result) {
            injectGetResponseUi(result, 'userExpenditureInfo');
        }
        ajaxWrapper(method, url, getExpenditureInfoSuccess, headers);
    });

    function getAllHotel(hotel) {

        $(".pageloader").fadeOut("slow");

        let allHotels = "";
        for (let i = 0; i < hotel.length; i++) {

            allHotels = allHotels + '<tr>' +
                '<th scope="row">' + hotel[i].id + '</th>' +
                '<td>' + hotel[i].name + '</td>' +
                '<td>' + hotel[i].star_rating + '</td>' +
                '</tr>';

        }
        $('#hotels').html(allHotels);
    }

    function getAllRoom(room) {

        $(".pageloader").fadeOut("slow");

        let allRooms = "";
        for (let i = 0; i < room.length; i++) {

            allRooms = allRooms + '<tr>' +
                '<th scope="row">' + room[i].id + '</th>' +
                '<td>' + room[i].hotel_id + '</td>' +
                '<td>' + room[i].room_number + '</td>' +
                '<td>' + room[i].room_type + '</td>' +
                '<td>' + room[i].floor_no + '</td>' +
                '<td>' + room[i].rent + '</td>' +
                '<td>' +
                (room[i].smoking_zone == true ? '<h4><span class="badge badge-danger"> YES </span></h4>' : '<h3><span class="badge badge-success"> NO </span></h3>') +
                '</td>' +
                '<td>' +
                (room[i].reservation_status == true ? '<h4><span class="badge badge-danger"> Reserved </span></h4>' : '<h3><span class="badge badge-success"> Unreserved </span></h3>') +
                '</td>'
            '</tr>';
        }
        $('#Rooms').html(allRooms);
    }

    function injectSignInResponseInUi(result, elementId) {
        console.log(result);
        $('#' + elementId).html(result.message);
        $("#confirmation").hide()
    }

    function createHotelResponseUi(result) {
        console.log(result);
        $('#createHotelResponse').html(result.message + '<br>' + '<button type="submit" class="btn btn-primary" id="createAgain">Create Again</button>').show();
        $("#hotelInfo").hide();

        $('#createAgain').on('click', function() {
            $("#hotelInfo").show();
            $("#createHotelResponse").hide();
            $("#hotel_name").val('');
            $("#star_rating").val('');
        });
    }

    function createHotelDetailsResponseUi(result) {
        console.log(result);
        $('#createHotelDetailsResponse').html(result.message + '<br>' + '<button type="submit" class="btn btn-primary" id="createAgain">Create Again</button>').show();
        $("#hotelDetails").hide();

        $('#createAgain').on('click', function() {
            $("#hotelDetails").show();
            $("#createHotelDetailsResponse").hide();
            $("#hotel_id").val('');
            $("#country").val('');
            $("#city").val('');
            $("#state").val('');
            $("#location").val('');
            $("#zip_code").val('');
        });
    }

    function createRoomResponseUi(result) {
        console.log(result);
        $('#createRoomResponse').html(result.message);
    }

    function getHotelsResponseUi(result) {
        console.log(result);
        getAllHotel(result.data);
    }

    function getRoomsResponseUi(result) {
        console.log(result);
        getAllRoom(result.data);
    }

    function checkInRoomResponseUi(result) {
        console.log(result);
        $('#checkInRoomResponse').html(result.message + '<br>' + '<button type="submit" class="btn btn-primary" id="showAgain">Show Again</button>').show();
        $("#checkInRoomInfo").hide();

        $('#showAgain').on('click', function() {
            $("#checkInRoomInfo").show();
            $("#checkInRoomResponse").hide();
            $("#room_id").val('');
            $("#check_in").val('');
            $("#duration_of_stay").val('');
            $("#paid_amount").val('');
        });
    }

    function injectGetResponseUi(result, elementId) {
        console.log(result);
        $('#' + elementId).html(result.message);
        $(".pageloader").fadeOut("slow");
    }
})