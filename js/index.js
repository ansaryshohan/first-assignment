let playerArray = [];

function playersSelected(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  playerArray.push(playerName);
  //  setSelectedPlayers(playerArray);

  const playerList = document.getElementById('player-list');
  playerList.innerHTML = "";

  for (let i = 0; i < playerArray.length; i++) {
    const selectedPlayerName = playerArray[i];

    if (playerArray.length > 5) {
      alert('Five players are selected')
    }

    else {
      const li = document.createElement('li')
      li.innerHTML = `
 <li class= "mb-5 text-3xl font-semibold">${i + 1}. ${selectedPlayerName}</li>
 `
      playerList.appendChild(li);
    }

  }
  return playerArray.length;

}


document.getElementById('player-calculate-btn').addEventListener('click', function(){
  const playerSallery= getInputValue('player-input-value')
  const playerAmount= document.getElementById('player-list').children.length;
  const playerTotalCost = playerSallery*playerAmount;

  setElementValue('player-cost-total', playerTotalCost)
})

document.getElementById('total-calculation-btn').addEventListener('click', function(){
  const coachSallery= getInputValue('coach-input-value');
  const managerSallery= getInputValue('manager-input-value');
  const totalPlayerCost= getElementInnerText('player-cost-total'); 

  const totalcost= coachSallery+managerSallery+totalPlayerCost;


})