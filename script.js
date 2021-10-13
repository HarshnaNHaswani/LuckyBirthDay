const dateOfBirth = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const btnFind = document.querySelector("#find");
const outputDiv = document.querySelector("#div-output");

function buttonClickListener(){
  const dob = dateOfBirth.value;
  const lucky = luckyNumber.value;
  
  if(lucky && dob){
    if(lucky === 0){
      outputDiv.innerText="Oops! Your birthday is not compatible with your lucky number!";
    }else{
      const sum = calculateSum(dob);
      let res = checkLucky(sum, lucky);
      outputDiv.innerText=`${res[0]}Your birthday ${res[1]} compatible with your lucky number!`
    }
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
      return ["Yayy!!", "is"];
    }else {
       return ["Oops!", "is not"];
    }
  } 
btnFind.addEventListener('click', buttonClickListener)
