const yourName = document.getElementById('yourName');
const myCheckbox = document.getElementById('myCheckbox');
const frontEnd = document.getElementById('frontEnd');
const backEnd = document.getElementById('backEnd');
const fullStack = document.getElementById('fullStack');
const welcomeMessage = document.getElementById('welcomeMessage');
const mycheckB = document.getElementById('mycheckB');
const myRadio = document.getElementById('myRadio');
const mySubmit = document.getElementById('mySubmit');

mySubmit.onclick = function(){

    
    let name = yourName.value;
    if(yourName.value){
        welcomeMessage.textContent = `Thank you so much for visiting Zulfah Cohort-4 site ${name}`;
    }
    else{
        welcomeMessage.textContent = `Are you a Robot? if No, then go back and Write Your Full Name!`;
    }
    if(myCheckbox.checked) {
        mycheckB.textContent = `Welcome, You are a member of Cohort-4 "${name}"`;
    }
    else{
        mycheckB.textContent = `Sorry, You are not a member of Cohort-4 ${name} !`;
    }
    if(frontEnd.checked) {
        myRadio.textContent = `${name} You are Frontend Developer in making! Zulfah is proud of You . `;
    }
  
    else if(backEnd.checked) {
        myRadio.textContent = ` ${name} You are Backend Developer in making! Zulfah is proud of You.`;
    }
    
    else if(fullStack.checked) {
        myRadio.textContent = `${name} You are FullStack Developer in making! Zulfah is proud of You. `;
    }
    else{
        myRadio.textContent = `Sorry, You do not belong here ${name} !`;
    }
}