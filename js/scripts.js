<!-- Begin
function calculate() {
month = document.form.month.selectedIndex;
month = document.form.month.options[month].value;
day = document.form.day.selectedIndex;
day = document.form.day.options[day].value;
year = document.form.year.value;
var dob = month + " " + day + ", " + year;
var then = new Date(dob);
var theday = then.getDay()+1;
var date=then.getDate();
var year=then.getYear();