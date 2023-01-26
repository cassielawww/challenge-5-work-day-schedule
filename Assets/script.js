$(document).ready(function () {
//Criteria: WHEN I open the planner, THEN the current day is displayed at the top of the calendar
//For Day JS
var today = dayjs();
$('#currentDay').text(today.format('dddd MMM D, YYYY'));



//Criteria: WHEN I click into a time block, THEN I can enter an event
//Criteria: WHEN I click the save button for that time block, THEN the text for that event is saved in local storage
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var description = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, description);

});


//Criteria: WHEN I view the time blocks for that day, THEN each time block is color-coded to indicate whether it is in the past, present, or future

function timeIndicator() {
    //get present hour value in the 24-hour format
    var currTime = dayjs().hour().valueOf(); 

    // Loop through business-hour time blocks 
    $(".time-block").each(function () {
        // Parsing strings as integers
        var timeBlocks = parseInt($(this).attr("id").slice(5));

        // Matching time blocks with the colours: past>grey , present>red, future>green
        if (timeBlocks === currTime) {
            $(this).addClass("present");
            $(this).removeClass("past"); // Remove previous storage
            $(this).removeClass("future");
        }
        else if (timeBlocks < currTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (timeBlocks > currTime) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
}

//Criteria: WHEN I refresh the page, THEN the saved events persist
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



// Call function timeIndicator
timeIndicator();
})
