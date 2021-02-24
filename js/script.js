function validateForm(){
  var year = document.forms["myForm"]["year"].value;
  var month = document.forms["myForm"]["month"].value;
  var date = document.forms["myForm"]["date"].value;
  var genders = document.getElementsByName("gender");

  if (year == "" || year < 1200 || year > 2100){
    alert("Please input the year value ie 2020");
    return false;
  }

  if (month == "" || month <=0 || month >12){
    alert("Please input a valid month ie 01 for January");
    return false;
  }

  if (date == "" || date < 1 || date > 31){
    alert("PLease enter your date of birth ie 08");
    return false;
  }

  function findGender(){
    for (let gender of genders){
      if(gender.checked){
        return gender.value;
      }
    }
  }
  let myGenderValue = getGender();
  console.log(myGenderValue);
}