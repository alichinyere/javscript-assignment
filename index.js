// function checkAge() {
//     let age =
//     parseInt(document.getElementById("ageInput").value)
//     ;
//     let showResult = document.getElementById("result")

//     if(age < 18){
//         showResult.textContent = "sorry you are not up to age.";
//     }
//     else if (age > 70)
//         showResult.textContent = "hey! you are too old.";
//     else{
//         showResult.textContent = "you have full access to entre the club.";
//     }
// }
// let initialcounter = 0;

// function increment() {
//     initialcounter++
//     updatecounter()
// }
// function updatecounter(){
//     document.getElementById("counter").innerHTML = initialcounter
// }
// function checkAge () {
//   let age =
//   parseInt(document.getElementById("ageInput").value);
//   let veiwEligibility = document.getElementById("result");
  
//   if(age <22) {
//     veiwEligibility.textContent = "ooops! you are underage.";
//   }else if (age >75) {
//     veiwEligibility.textContent = ""
//   }
//   else{
//     veiwEligibility.textContent = 
//   }
// }

function displayMessage() {

        let nameInput =
    document.getElementById("fullname").value.trim();
        let trackInput = 
    document.getElementById("track").value.trim();

    let welcomeMessage = document.getElementById("output");

    if(nameInput === "" || trackInput === "") {
        welcomeMessage.textContent = "Please fill in your name and track";
    } else {
        welcomeMessage.textContent = "Welcome! ${nameInput} , to the " + trackInput + "class";
    }

}

function displayMessage() {
    let monthInput = document.getElementById("month").value;
    
    let welcomeMessage = document.getElementById("output");
    if(monthInput == 1) {
        welcomeMessage.textContent = "january";
    } else if (monthInput == 2) {
        welcomeMessage.textContent = "febuary";
    } else if (monthInput == 3) {
        welcomeMessage.textContent = "march";
    
    } else if (monthInput == 4){
        welcomeMessage.textContent = "april";
    } else if (monthInput == 5) {
        welcomeMessage.textContent = "may";
    } else if (monthInput == 6) {
        welcomeMessage.textContent = "june";
    } else if (monthInput == 7) {
        welcomeMessage.textContent = "july";
    } else if (monthInput == 8) {
        welcomeMessage.textContent = "august";
    } else if (monthInput == 9) {
        welcomeMessage.textContent = "september";
    } else if (monthInput == 10) {
        welcomeMessage.textContent = "october";
    }  else if (monthInput == 11) {
        welcomeMessage.textContent = "november"; 
    } else if (monthInput == 12) {
        welcomeMessage.textContent = "december";
    } else  {
        welcomeMessage.textContent = "This month is not valid";
    }
    
}      



















