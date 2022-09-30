function getInputValue(elementId) {
  const inputElement = document.getElementById(elementId);
  const inputElementString = inputElement.value;
  const inputElementAmount = parseFloat(inputElementString);
  if (isNaN(inputElementAmount)) {
    alert('please provide a cost amount');
  }
  else {
    return inputElementAmount
  }
}

function getElementInnerText(elementId) {
  const getElement = document.getElementById(elementId);
  const elementString = getElement.innerText;
  const elementAmount = parseFloat(elementString);
  return elementAmount;
}

function setElementValue(elementId, value) {
  const theElement = document.getElementById(elementId);
  theElement.innerText = value;
}
