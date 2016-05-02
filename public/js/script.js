/**
 * Created by aviad on 5/2/2016.
 */

$(document).ready(function () {
    var ref = new Firebase("https://skillsetraffle.firebaseio.com/").child('raffleData');

    // ref.push(null);
    $('#form').submit(function(e){
        e.preventDefault();
        var name = $('#name').val();
        var mail = $('#mail').val();
        // console.log(name,mail)
        ref.push({name:name,mail:mail},function(data){
            $('.content').css('display','none');
            var res;
            if(data == null){   
                // Success
                res = $('.success');
            }else{
                // Error
                res = $('error');
            }
            res.css('display','block');
        });
    })
});
