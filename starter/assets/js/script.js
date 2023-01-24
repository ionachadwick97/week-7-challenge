// 1. Show the current date at the top

const today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, HH:mm"));

// 2. Colour code each block based on the current time

let now = parseInt(moment().format("H"));
let timeblocks = $('.timeblock');
     timeblocks.each(function(index) {
         let hour = parseInt($(this).attr('data-hour'));
         if (hour < now) {
             $(this).removeClass("presentColor futureColor").addClass("pastColor")
         } else if (hour == now) {
             $(this).removeClass("pastColor futureColor").addClass("presentColor")
         } else {
             $(this).removeClass("presentColor pastColor").addClass("futureColor")
         }
     })


// 3. Save input to local storage

$(".saveBtn").on("click", function() {
    let tempInput = $(this).siblings(".input").val();
console.log(tempInput);
let tempTime = $(this).parent().attr("data-hour");
    console.log(tempTime);
    localStorage.setItem(tempTime, tempInput);
})


// 4. Load input from local storage when page load/refresh if there's any data in local storage

console.log("localStorage for 9 = ", localStorage.getItem("9"));

$(".input").each(function(input) {
    $(this).val(localStorage.getItem($(this).parent().attr("data-hour")));
})
