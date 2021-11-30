$(document).ready(function(){
    $('#currentDay').text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});

$(".saveBtn").on("click", function () {
        var text = $(this)
        .siblings('.description')
        .val();


        var time = $(this)
        .parent()
        .attr('id');

        localStorage.setItem(time, text);

        $(".notification").removeClass("display");

        setTimeout(function() {
            $(".notification").removeClass("show");
        }, 10000);
    });


function hourlySchedule() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("")[0]);

        if(blockHour < currentHour)  {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        }
    });

}

hourlySchedule();

var interval = setInterval(hourlySchedule, 10000);


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



