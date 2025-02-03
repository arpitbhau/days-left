// Jai Shree Ram

// Set target date to December 31, 2025 23:59:59
var targetDate = new Date("December 31, 2025 23:59:59");
var now = new Date();

// Calculate the difference in seconds
var diff = (targetDate.getTime() - now.getTime()) / 1000;

var clock = $('#clock1').FlipClock(diff, {
    clockFace: 'DailyCounter', // Changed to DailyCounter to show days
    countdown: true,
    showSeconds: true
});
