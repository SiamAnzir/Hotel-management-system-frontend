$(document).ready(function() {

    function ajaxWrapper(method, url, successFun, headers, data) {
        $.ajax({
            method: method,
            url: url,
            data: data,
            headers: headers,
            success: successFun,
            error: function(error) {
                console.log(error);
                alert('Sorry, something went wrong. Try Again');
            }
        });
    }

    $('#signInAdmin').on('click', function() {
        let method = 'POST';
        let url = 'http://127.0.0.1:8000/api/sign-in';
        let data = {
            'email': 'anzir@gmail.com',
            'password': '12345678',
            'device_type': 'android',
            'device_token': 'rwetsfsgdd'
        };
        let headers = null;

        function successFun1(result) {
            console.log(result);
            $('#adminConfirm').html(result.message);
            $("#confirmation").hide()

        }
        ajaxWrapper(method, url, successFun1, headers, data);
    });

    $('#signInUser').on('click', function() {
        let method = 'POST';
        let url = 'http://127.0.0.1:8000/api/sign-in';
        let data = {
            'email': 'siam@gmail.com',
            'password': '12345678',
            'device_type': 'android',
            'device_token': 'rwetsfsgdd'
        };
        let headers = null;

        function successFun2(result) {
            console.log(result);
            $('#userConfirm').html(result.message);
            $("#confirmation").hide();

        }
        ajaxWrapper(method, url, successFun2, headers, data);
    });

    $('#createHotel').on('click', function() {
        var $hotel_name = $('#hotel_name');
        var $star_rating = $('#star_rating');

        let method = 'POST';
        let url = 'http://127.0.0.1:8000/api/create-hotel';
        let data = {
            'name': $hotel_name.val(),
            'star_rating': $star_rating.val()
        }
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek',
            'Accept': 'application/json'
        }

        function successFun3(result) {
            console.log(result);
            $('#message1').html(result.message + '<br>' + '<button type="submit" class="btn btn-primary" id="createAgain">Create Again</button>').show();
            $("#hotelInfo").hide();

            $('#createAgain').on('click', function() {
                $("#hotelInfo").show();
                $("#message1").hide();
                $("#hotel_name").val('');
                $("#star_rating").val('');
            });
        }

        ajaxWrapper(method, url, successFun3, headers, data);
    });

    $('#createHotelDetails').on('click', function() {
        var $hotel_id = $('#hotel_id');
        var $country = $('#country');
        var $city = $('#city');
        var $state = $('#state');
        var $location = $('#location');
        var $zip_code = $('#zip_code');

        let method = 'POST';
        let url = 'http://127.0.0.1:8000/api/create-hotel-details';
        let data = {
            'hotel_id': $hotel_id.val(),
            'country': $country.val(),
            'city': $city.val(),
            'state': $state.val(),
            'location': $location.val(),
            'zip_code': $zip_code.val()
        }
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek',
            'Accept': 'application/json'
        }

        function successFun4(result) {
            console.log(result);
            $('#message2').html(result.message + '<br>' + '<button type="submit" class="btn btn-primary" id="createAgain">Create Again</button>').show();
            $("#hotelDetails").hide();

            $('#createAgain').on('click', function() {
                $("#hotelDetails").show();
                $("#message2").hide();
                $("#hotel_id").val('');
                $("#country").val('');
                $("#city").val('');
                $("#state").val('');
                $("#location").val('');
                $("#zip_code").val('');
            });
        }
        ajaxWrapper(method, url, successFun4, headers, data);
    });

    $('#createRoom').on('click', function() {

        let method = 'POST';
        let url = 'http://127.0.0.1:8000/api/create-room';
        let data = {
            'room_number': $('#room_number').val(),
            'hotel_id': $('#hotelId').val(),
            'room_type': $('#room_type').val(),
            'rent': $('#rent').val(),
            'floor_no': $('#floor_no').val(),
            'smoking_zone': $('#smoking_zone').val(),
            'picture': $('#attach_picture').val()
        }
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek'
        }

        function successFun5(result) {
            console.log(result);
            $('#message3').html(result.message);

        }
        ajaxWrapper(method, url, successFun5, headers, data);

        console.log($('#room_number').val());
        console.log($('#hotelId').val());
        console.log($('#room_type').val());
        console.log($('#rent').val());
        console.log($('#floor_no').val());
        console.log($('#smoking_zone').val());
        console.log($('#attach_picture').val());

    });

    $('#getAllHotels').on('click', function() {
        let method = 'GET';
        let url = 'http://127.0.0.1:8000/api/get-all-hotel';
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek',
            'Accept': 'application/json'
        };

        function successFun6(result) {
            console.log(result);
            getAllHotel(result.data);

        }
        ajaxWrapper(method, url, successFun6, headers);
    });

    $('#getAllRooms').on('click', function() {
        let method = 'GET';
        let url = 'http://127.0.0.1:8000/api/get-all-room';
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek',
            'Accept': 'application/json'
        };

        function successFun7(result) {
            console.log(result);
            getAllRoom(result.data);

        }
        ajaxWrapper(method, url, successFun7, headers);
    });

    $('#checkInRoom').on('click', function() {

        let method = 'POST';
        let url = 'http://127.0.0.1:8000/api/check-in-room';
        let data = {
            'room_id': $('#room_id').val(),
            'check_in': $('#check_in').val(),
            'duration_of_stay': $('#duration_of_stay').val(),
            'paid_amount': $('#paid_amount').val()
        }
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek',
            'Accept': 'application/json'
        }

        function successFun8(result) {
            console.log(result);
            $('#message4').html(result.message + '<br>' + '<button type="submit" class="btn btn-primary" id="showAgain">Show Again</button>').show();
            $("#checkInRoomInfo").hide();

            $('#showAgain').on('click', function() {
                $("#checkInRoomInfo").show();
                $("#message4").hide();
                $("#room_id").val('');
                $("#check_in").val('');
                $("#duration_of_stay").val('');
                $("#paid_amount").val('');
            });
        }
        ajaxWrapper(method, url, successFun8, headers, data);
    });

    $('#getUserRevenueInfo').on('click', function() {

        let method = 'GET';
        let url = 'http://127.0.0.1:8000/api/get-user-revenue-info?';
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek',
            'Accept': 'application/json'
        }

        function successFun9(result) {
            console.log(result);
            $('#userRevenueInfo').html(result.message);
            $(".pageloader").fadeOut("slow");
        }
        ajaxWrapper(method, url, successFun9, headers);
    });

    $('#getUserExpenditureInfo').on('click', function() {

        let method = 'GET';
        let url = 'http://127.0.0.1:8000/api/get-expenditure-info';
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTNjYjAzN2IzZGZmMmNmMDliYzhlYWFhYzM2YTgxMjgzZTQxM2YwNTRiOTdjNDU2YjA5MGI5NWI1OWI4MmQ0ZWRlYzRjYzEwNTVlM2RjIn0.eyJhdWQiOiIxIiwianRpIjoiZmZhM2NiMDM3YjNkZmYyY2YwOWJjOGVhYWFjMzZhODEyODNlNDEzZjA1NGI5N2M0NTZiMDkwYjk1YjU5YjgyZDRlZGVjNGNjMTA1NWUzZGMiLCJpYXQiOjE1OTM2MzMwMDksIm5iZiI6MTU5MzYzMzAwOSwiZXhwIjoxNjI1MTY5MDA5LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.sd8smQYIOxzghiqCxmdny0O-j60tnbvFxqYDKEEHnqBuNy_NuCM3g_9zcsyHFuz_A-iCg4sU2J8LrDR-Zik0iXB8RvXAEhPZcqKdi8gjNH_FMrFWByX2RM8R2CoCKKk67bMqGUcNnnbJ1iStHGuYKQjtWibkC6EtEmtX9pHMTsVdH3UoRfI3kJF_Q0jzQPvMrjkk9DvYKqmUM7XWPkzeIxiy8RPgbLrrpEBW7w-DW0y65VjTH5rGCMQ-h2maCoOaiZBIFv9r0NC8Z53aPwVw3D0fjs-axgqcEJhstHVZnykxML-V1JGlmstBTTsJqjJaldg1R3TB9ON2zFTnpLt31MTyJZxxtKNj2_SmC5PHOsxQAH9X5Kf3V_FgFtEwXlqMBS10kHcUNqkCbAZU50DUx5-UmmnJb0DPDzLFFg760kzTigXmufg8P_Ny9ivtyaf-h-ayXrbtZftrqy6gEDoCviBkGRl1O9mQycPJkp2SdiW8BNjsY77NS6iBtbZjWOYXEYpoyYJHiyQoBBVlaa7_9q8p-VPNI7qkzQ11g1XtO5efgrjDXvJ0g_HTosZQt2hsXUswkZEzRgAI8H_HQ4aD32fEiW9WjjpKAmYRElsvzceNpGgkiaIX3LzOrvYJ4NmI6l3vVPtkV_3glDhOUU-8h4xhaMcOhsc90yYXxm-scek',
            'Accept': 'application/json'
        }

        function successFun10(result) {
            console.log(result);
            $('#userExpenditureInfo').html(result.message);
            $(".pageloader").fadeOut("slow");

        }
        ajaxWrapper(method, url, successFun10, headers);
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

})