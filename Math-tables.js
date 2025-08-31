function generateTable() {
  const inputElement = document.querySelector('.js-input');
  // Write the table written in the textbox
  document.querySelector('.js-div1').innerHTML = `
  ${inputElement.value} * 1 = ${inputElement.value * 1}`;
  document.querySelector('.js-div2').innerHTML = `
  ${inputElement.value} * 2 = ${inputElement.value * 2}`;
  document.querySelector('.js-div3').innerHTML = `
  ${inputElement.value} * 3 = ${inputElement.value * 3}`;
  document.querySelector('.js-div4').innerHTML = `
  ${inputElement.value} * 4 = ${inputElement.value * 4}`;
  document.querySelector('.js-div5').innerHTML = `
  ${inputElement.value} * 5 = ${inputElement.value * 5}`;
  document.querySelector('.js-div6').innerHTML = `
  ${inputElement.value} * 6 = ${inputElement.value * 6}`;
  document.querySelector('.js-div7').innerHTML = `
  ${inputElement.value} * 7 = ${inputElement.value * 7}`;
  document.querySelector('.js-div8').innerHTML = `
  ${inputElement.value} * 8 = ${inputElement.value * 8}`;
  document.querySelector('.js-div9').innerHTML = `
  ${inputElement.value} * 9 = ${inputElement.value * 9}`;
  document.querySelector('.js-div10').innerHTML = `
  ${inputElement.value} * 10 = ${inputElement.value * 10}`;
};