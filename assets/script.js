var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function setupCurrentDateEl() {
  $("#currentDay").text(moment().format("MMM Do YYYY, h:mm:ss a"));
}


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







setInterval(function() {
  alert("This alert shows up every five seconds!");
}, 5000);