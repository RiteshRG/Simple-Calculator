let calculation = JSON.parse(localStorage.getItem('calculation')) ||
'';
function updatecalculater(cal){
  calculation += cal;
  displayCalculation();
  localStorage.setItem('eqvation',JSON.stringify(calculation));
}

function displayCalculation(){
  document.querySelector('.js-cal-p').innerHTML = calculation;
}

function displayResult(){
  calculation = eval(calculation);
  document.querySelector('.js-cal-p').innerHTML = calculation
}