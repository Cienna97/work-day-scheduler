$(document).ready(function(){

  $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

  $(".saveBtn").on("click", function () {

    console.log(this);
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //set items in local storage.
    localStorage.setItem(time, text);
})


})






$("#6am .description").val(localStorage.getItem("hour6"));
$("#7am .description").val(localStorage.getItem("hour7"));
$("#8am .description").val(localStorage.getItem("hour8"));
$("#9am .description").val(localStorage.getItem("hour9"));
$("#10am .description").val(localStorage.getItem("hour10"));
$("#11am .description").val(localStorage.getItem("hour11"));
$("#12pm .description").val(localStorage.getItem("hour12"));
$("#13pm .description").val(localStorage.getItem("hour13"));
$("#14pm .description").val(localStorage.getItem("hour14"));
$("#15pm .description").val(localStorage.getItem("hour15"));
$("#16pm .description").val(localStorage.getItem("hour16"));
$("#17pm.description").val(localStorage.getItem("hour17"));
$("#18pm .description").val(localStorage.getItem("hour18"));
$("#19pm .description").val(localStorage.getItem("hour19"));
$("#20pm .description").val(localStorage.getItem("hour20")); 

function hourTracker() {

  var currentHour = moment().hour();

   // loop over time blocks
   $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockHour, currentHour)

    //check if we've moved past this time, click into css/html given classes of past, present, or future
    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})
}
hourTracker(); //re-run function



