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
    });
});
