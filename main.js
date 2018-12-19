

$(document).ready(function() {
  
    $.getJSON("data.json", function(data) {
        console.log(data);

    var mapLink = 'http://www.google.com/maps?q=';

    data.forEach(function(output) {
    $('#tables').append('<tr><td>' + output.name + '</td><td>' + output.description + '</td><td><a href="' + mapLink + output.location + '"><button type="button" class="btn btn-info"> open </button></a></td></tr>');
    
})
    });
});