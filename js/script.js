function dayCalculator(){
  var date = document.forms["myForm"]["date"].value;
  var female = document.forms["myForm"]["female"].checked;
  var male = document.forms["myForm"]["male"].checked;
  var actualDay = new Date(date);
  var day = actualDay.getDay();
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
  var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];


  console.log(date);
  console.log(male);
  console.log(female);
  console.log(actualDay);
  console.log(day);


  if (male) {
    alert(
      `Your AKan name is ${maleNames[day]} You were born on a ${dayNames[day]}`
    );
  }
  else if (female) {
    alert(
      `Your AKan name is ${femaleNames[day]} You were born on a ${dayNames[day]}`
    );
  }
  else{
    alert("Please enter a valid date of birth");
  }
}
