function validateAge() {
    var Bdate = document.forms["age-gate"]["age"].value;
    var Bday = +new Date(Bdate);

    var age = (Date.now() - Bday) / (31557600000);
    if ( age < 13 ) {
        alertify.error('Sorry, but you are not eligible for this sweepstakes.');
        return false
    }
    else if ( $.isNumeric(age) == false ){
        alertify.error('Sorry, your age must be equal to a number.');
        return false
    }
    else{
        $('#age-gate').addClass('hider');
        $('#code-gate').removeClass('hider');
        return false
    }
}
