/**
 * Created by andy on 11.07.17.
 */


function confirmAction($item, $actionUrl) {
    if (confirm('Are you sure you want to delete ' + $item + '?')) {
        window.location.href = $actionUrl;
    }
}

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(function() {
  $("#mySort").tablesorter();
});

$(function() {
  $("#mySort").tablesorter({ sortList: [[0,0], [1,0]] });
});
