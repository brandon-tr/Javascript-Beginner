var hour = 8;
var minute = 50;
var time = 'am';

if(minute >= 30 && time == 'am') {
  hour += 1;
  console.log("Its almost ",hour," in the morning" );
}
else if (minute < 30 && time == 'am') {
  console.log("Its just after " ,hour, "in the morning");
}
else if (minute < 30 && time == 'pm') {
  console.log("Its just after " ,hour, "in the evening");
}

else if (minute >= 30 && time == 'pm') {
  console.log("Its almost " ,hour, "in the evening");
}
