const dateOfBirth = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const btnFind = document.querySelector("#find");
const outputDiv = document.querySelector("#div-output");

function buttonClickListener(){
  const dob = dateOfBirth.value;
  const lucky = luckyNumber.value;
  if(lucky && dob){
    const sum = calculateSum(dob);
    checkLucky(sum, lucky)
  }
  else outputDiv.innerText="Please choose value for both the fields";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-","");
  let sum = 0;
  for(let digit of dob){
    sum = sum + Number(digit);
  }
  return sum;
}

function checkLucky(sum, luckyNumber){
    if(sum % luckyNumber === 0){
      outputDiv.innerText="Your birthday is lucky!!";
    }else {
      outputDiv.innerText="Your birthday is not lucky!";
    }
  } 
btnFind.addEventListener('click', buttonClickListener)
