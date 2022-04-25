//UC-2 Read a Number and Display the week day
let number = Math.floor(Math.random()*8);
console.log("Number : "+number);
if (number == 1) {
    console.log("Day-Its Monday");
} else if (number == 2) {
    console.log("Day-Its Tuesday");
} else if (number == 3) {
    console.log("Day-Its Wednesday");
} else if (number == 4) {
    console.log("Day-Its Thursday");
} else if (number == 5) {
    console.log("Day-Its Friday");
} else if (number == 6) {
    console.log("Day-Its Saturday");
} else if (number == 7) {
    console.log("Day-Its Sunday");
} else {
    console.log("You can't take a number as zero.");
}