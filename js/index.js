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
 <li>${i + 1}. ${selectedPlayerName}</li>
 `
      playerList.appendChild(li);
    }

  }

}