function validate(e) {
    e.preventDefault();
    /*variables for each form elements */
     //document.formName.fieldName.value

     var name = document.cForm.name.value;
     var email = document.cForm.email.value;
     var mobile = document.cForm.mobile.value;
     var city = document.cForm.city.value;
     var gender = document.cForm.gender.value;
     var lang = [];
     var checkOpt = document.getElementsByName("lang[]");
     for(var i=0; i<checkOpt.length;i++) {
        if(checkOpt[i].checked) {
             // popular lang array with selected input value
             lang.push(checkOpt[i].value);
        }
     }

     console.log('lang=',lang)

     /* define as error variable */
     var nameErr = emailErr = mobileErr = cityErr = genderErr = langErr = true;
     //var nameErr = true;
     //var emailErr = true;
     //var mobileErr = true;
     //var cityErr = true;
     //var genderErr = true;
     //var langErr = true;



 /*name validation */
 if(name === "") {
    printError("nameErr","Name= fieldcant be empty");
 } else {
    let regex = /^[a-zA-Z\s]+$/;
    if(regex.test(name)===false){
        printError("nameErr","place enter a valid name");
    }else{
        printError("nameErr","")
        nameErr = false
    }
 }

 /*email validation*/

   if(email === "") {
    printError("emailErr","Email= fieldcant be empty");
 } else {
    let regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email)===false){
        printError("emailErr","invalid email id");
    }else{
        printError("emailErr","");
        emailErr = false;
    }
 }
/*mobile validation*/

if(mobile === "") {
    printError("mobileErr","Mobile= fieldcant be empty");
 } else {
    let regex = /^[6-9]\d{9}$/;
    if(regex.test(mobile)===false){
        printError("mobileErr","invalid mobile number");
    }else{
        printError("mobileErr","");
        mobile = false;
    }
 }
/*city validation*/

if(city === "null") {
    printError("cityErr","Please select a city name");
   
    }else{
        printError("cityErr","");
        cityErr = false;
    }
 

 /*gender validation*/

if(gender === "") {
    printError("genderErr","Please select a gender");
 
    }else{
        printError("genderErr","");
        genderErr = false;
    }

// lang validation
if(lang.length === 0) {
    printError("langErr","Please select a language");
 
    }else{
        printError("langErr","");
        langErr = false;
    }
  



}






/* defining a function to display the error message*/
function printError(eleId,msg) {
    document.getElementById(eleId).innerText = msg;
}