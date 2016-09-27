// AJAX call
var settings1 = {
  "async": true,
  "crossDomain": true,
  "url": "http://petstore.swagger.io/v2/pet/findByStatus?status=available",
  "method": "GET",
  "headers": {
    "accept": "application/json"
  }
}
var settings2 = {
  "async": true,
  "crossDomain": true,
  "url": "http://petstore.swagger.io/v2/pet/findByStatus?status=pending",
  "method": "GET",
  "headers": {
    "accept": "application/json"
  }
}
var settings3 = {
  "async": true,
  "crossDomain": true,
  "url": "http://petstore.swagger.io/v2/pet/findByStatus?status=sold",
  "method": "GET",
  "headers": {
    "accept": "application/json"
  }
}

function lire(settings){
$.ajax(settings).done(function (response) {
var txt = "<b><TR> <TH> Nom </TH> <TH> ID </TH> </TR></b>";

$.each( response, function (a){
  txt  =txt + ("<TR>"+ "<TH>"+ response[a].name +"</TH>"+ "<TH>"+ response[a].id +"</TH>"+"</TR>  ");
});
$('.tab').html(txt);
});
}

$('.but1').click(function () {
    lire(settings1);
});

$('.but2').click(function () {
    lire(settings2);
});

$('.but3').click(function () {
    lire(settings3);
});
