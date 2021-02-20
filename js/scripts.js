var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate(){
  var genders = document.getElementsByName("gender")
  if(document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value > 2100
   || document.myForm.year.value <= 1900){
    alert("Please provide a valid year of birth! eg. 2020");
    document.myForm.year.focus();
    return false;
  }
  else if (document.myForm.month.value == "" || isNaN( document.myForm.month.value) || document.myForm.month.value.length != 2 || document.myForm.month.value > 12 || document.myForm.value <= 0){
    alert("Please enter a valid month ! any number between 1 and 12");
    document.myForm.month.focus();
    return false;
  } 
  else if( document.myForm.date.value == "" || isNaN( document.myForm.date.value ) || 
  document.myForm.date.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
     alert( "Please provide a valid date of birth! any value between 01 - 31." );
     document.myForm.day.focus() ;
     return false;
  }
  else if (genders[0].checked == false && genders[1].checked == false){
    alert("You must select option male or female");
    return false;
  }
  else {
    return true;
  }
}

function dayValueCalculator(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);

  d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

  console.log(d);
  return (Math.floor(d));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if (genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
}