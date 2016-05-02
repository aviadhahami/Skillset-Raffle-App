/**
 * Created by aviad on 5/2/2016.
 */

$(document).ready(function () {
    var ref = new Firebase("https://skillsetraffle.firebaseio.com/").child('raffleData');
    var disableButton = function () {
        $('#raffle').attr('disabled','disabled');
    };
    var enableButton = function () {
        $('#raffle').removeAttr('disabled');

    };

    disableButton();
    var data = [];
    var populateAmountOfPoeple = function (size) {
        console.log(size)
        $('#numOfPeople').html('choosing between <b>' + size + '</b> participants');
    };
    ref.once('value', function(dataSnapshot) {
        // handle read data.
        var snapshot = dataSnapshot.val();
        for (var snap in snapshot){
            data.push(snapshot[snap]);
        }
        populateAmountOfPoeple(data.length);
        enableButton();

        $('#raffle').on('click',function(){
            var length = data.length;
            var amount =10;
            var personPlaceHolder = $('#person-name');
            var winner;
            for(var i=0;i<amount;i++){
                winner = Math.floor(Math.random() * length);
                if(data[winner]){
                    console.log('in')
                    personPlaceHolder.text(data[winner]['name']);
                }
            }

        });
    });


});
