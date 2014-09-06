$(document).ready(function() {
    var search_box = document.getElementById('search_box')
    var autocomplete = new google.maps.places.Autocomplete(search_box);

    $('#search_btn').on('click', function() {
        console.log(autocomplete.getPlace())
    });
});