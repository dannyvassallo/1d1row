function validateCode() {
    var code = document.forms["code-gate"]["code"].value;
    code = code.toLowerCase();
    var curDate = new Date();
    curDate = curDate.setHours(0,0,0,0)
    var code1Date = new Date("4/26/2015");
    var code2Date = new Date("4/27/2015");
    var code3Date = new Date("4/28/2015");
    var code4Date = new Date("4/29/2015");
    var code5Date = new Date("4/30/2015");
    var code6Date = new Date("5/1/2015");
    var code7Date = new Date("5/2/2015");
    var code8Date = new Date("5/3/2015");
    var code9Date = new Date("5/4/2015");
    var code10Date = new Date("5/5/2015");
    var code11Date = new Date("5/6/2015");
    var code12Date = new Date("5/7/2015");
    var code13Date = new Date("5/8/2015");
    var code14Date = new Date("5/9/2015");
    var code15Date = new Date("5/10/2015");
    var code16Date = new Date("5/11/2015");
    var code17Date = new Date("5/12/2015");
    var code18Date = new Date("5/13/2015");
    var code19Date = new Date("5/14/2015");

    if (code == "award" && code1Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "directioner" && code2Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "row" && code3Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "show" && code4Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "friends" && code5Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "hero" && code6Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "concert" && code7Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "road" && code8Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "one" && code9Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "direction" && code10Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "album" && code11Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "music" && code12Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "band" && code13Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "four" && code14Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "mom" && code15Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "girl" && code16Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "rockstar" && code17Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "world" && code18Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "tour" && code19Date.setHours(0,0,0,0) == curDate){
        $('.gate').fadeOut('slow');
        return false
    }
    else if (code == "cheatersneverwin8756"){
        alertify.success("Cheaters never win.");
        $('.gate').fadeOut('slow');
        return false
    }
    else{
        alertify.error("Sorry, the codeword you entered is not valid today.");
        return false
    }
}
