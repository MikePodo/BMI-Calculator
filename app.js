function clear (){
    document.getElementById("form1_input").value = '';
    document.getElementById("form2_input").value = '';
    document.getElementById("form3_input").value = '';
    document.getElementById("form4_input").value = '';
    document.getElementById("form5_input").value = '';

}

const calculateButton = document.querySelector(".calc");
const calculateButton2 = document.querySelector(".calc2")
let resetButton1 = document.querySelector(".reset");
let resetButton2 = document.querySelector(".reset2");
let main1 = document.querySelector(".main");
let main2 = document.querySelector(".main2");
let tab1 = document.querySelector(".tab1");
let tab2 = document.querySelector(".tab2");


let result1 = document.getElementById("result");
result1.style.visibility = "hidden";
resetButton1.style.visibility = "hidden";
main1.style.zIndex = "1";
let result2 = document.getElementById("result2");
result2.style.visiblity = "hidden";
resetButton2.style.visibility ="hidden";

tab1.addEventListener ('click', function clickTab1 () { main1.style.zIndex ="1"; 
main2.style.zIndex="0"
});
tab2.addEventListener ('click', function clickTab2 () { main2.style.zIndex ="1";
 main1.style.zIndex = "0"
});

function calculate () {
    let inputWeight = document.getElementById("form1_input").value;
    let inputFeet = document.getElementById("form2_input").value;
    let inputInches = document.getElementById("form3_input").value;
    let totalInches = (((inputFeet *=12) + (+inputInches)) * 0.0254);
    let metersSquared = (+totalInches) * (+totalInches);
    let conversionWeight = inputWeight *= 0.453592;
    let finalEquation = (+conversionWeight) / (+metersSquared);
    let evaluation 

   if (finalEquation < 18.5) {
       evaluation = "underweight";
   }
   if (finalEquation >= 18.5 && finalEquation <= 24.9) {
       evaluation = "normal weight";
   }
   if (finalEquation >= 25 && finalEquation <= 29.9) {
       evaluation = "overweight";
   }
   if (finalEquation >= 30) {
       evaluation = "obese";
   }
  

   
   
    result.style.visibility = "visible";
    resetButton1.style.visibility = "visible";
   result1.innerHTML =  "Your BMI is " + finalEquation.toFixed(1) +".<br>" + "You are considered " + evaluation + "." ;

}

function calculate2 () {
    let inputWeight = document.getElementById("form4_input").value;
    let inputHeight = document.getElementById("form5_input").value;
    let heightSquared = (+inputHeight) * (+inputHeight);
    let finalEquation = (+inputWeight) / (+heightSquared);
    let evaluation 

   if (finalEquation < 18.5) {
       evaluation = "underweight";
   }
   if (finalEquation >= 18.5 && finalEquation <= 24.9) {
       evaluation = "normal weight";
   }
   if (finalEquation >= 25 && finalEquation <= 29.9) {
       evaluation = "overweight";
   }
   if (finalEquation >= 30) {
       evaluation = "obese";
   }
  

   
   
    result2.style.visibility = "visible";
    resetButton2.style.visibility = "visible";
   result2.innerHTML =  "Your BMI is " + finalEquation.toFixed(1) +".<br>" + "You are considered " + evaluation + "." ;

}

function doReset () {
    clear();
    result1.innerHTML = "";
    resetButton1.style.visibility = "hidden";
    result2.innerHTML = "";
    resetButton2.style.visiblity = "hidden";
}



calculateButton.addEventListener ('click', () => calculate());

calculateButton2.addEventListener ('click', () => calculate2());

resetButton1.addEventListener ('click', () => doReset());

resetButton2.addEventListener ('click', () => doReset());


clear ();