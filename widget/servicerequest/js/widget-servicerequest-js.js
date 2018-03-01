define(
    // Dependencies
    ['jquery', 'knockout'],

    function($, ko) {
        'use strict';
        
        var proxy = "https://cors-anywhere.herokuapp.com/";
        var rightNowUrl = "";

        var clickSendMessageEvent = function() {
            
            $('#resultMessage').hide();
            $('#errorMessage').hide();
            
            $("#sendMessage").click(function(e) {
                e.preventDefault();
                $('#spinner').css('display', 'block');
                
                rightNowUrl = proxy + $('#serviceCloudEnvUrl').val() + '/services/rest/connect/v1.3/incidents';

                //open a new ticket
                openTicket(rightNowUrl, $('#serviceCloudUsername').val(), $('#serviceCloudPassword').val(),  parseInt($('#serviceCloudUserID').val()), $('#customerText').val());

            });
        };

        function openTicket(url, user, pwd, userId, customerText){
            fetch(url, {
                method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Basic ' +btoa(user + ":" + pwd)
            },
                body: JSON.stringify({
                    primaryContact: {id: userId},
                    subject: customerText
                }),
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                if(data.id !== null || data.id !== undefined){
                    $('#spinner').css('display', 'none');
			        $('#form').hide();
			        $('#resultMessage').show();
			        $('.reqId').text(data.id);
			        $('.reqRefNum').text(data.lookupName);
			        console.log(data);
		        }
            }).catch((error)=>{
                $('#spinner').css('display', 'none');
                $('#form').hide();
                $('#errorMessage').show();
                $('.error').text(error);
                console.log(`Error Creating a Ticket: ${error}`);
            });
        }

        return {
            onLoad: function(widget) {},

            clickSendMessageEvent

        } // end of return
    });