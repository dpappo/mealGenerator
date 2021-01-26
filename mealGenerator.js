// Code to convert text input to randomized meal

// Gather input from html
function getInputs(){
  var proteinInput = document.getElementById("proteinInput").value;
  var veggiesInput = document.getElementById("veggiesInput").value;
  var sidesInput = document.getElementById("sidesInput").value;
  var spicesInput = document.getElementById("spicesInput").value;
  var fatInput = document.getElementById("fatInput").value;
}

// Convert string input to array
function stringToArray(str){
  return str.split(", ")
}

// Randomize function
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateTheMeal() {
  getInputs();
  let vegArray = stringToArray(veggiesInput.value);
  let protArray = stringToArray(proteinInput.value);
  let sidesArray = stringToArray(sidesInput.value);
  let spiceArray = stringToArray(spicesInput.value);
  let fatArray = stringToArray(fatInput.value);
  generatedMeal = (`Tonight you should make ${pickRandom(protArray)} with ${pickRandom(vegArray)} and ${pickRandom(vegArray)}, seasoned with ${pickRandom(spiceArray)} and ${pickRandom(spiceArray)} cooked in ${pickRandom(fatArray)}. It would go well with a side of ${pickRandom(sidesArray)}.`);
  document.getElementById('output').innerHTML = generatedMeal;
}