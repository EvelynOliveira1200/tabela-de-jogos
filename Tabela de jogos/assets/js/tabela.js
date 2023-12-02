function createGame(player1, hour, player2){
    return `
    <li>
    <img src="assets/img/icon-${player1}.png" alt= "Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="assets/img/icon-${player2}.png" alt= "Bandeira do ${player2}"/>
    </li>
    `
}
let delay = -0.4;

function createCard(date, day, games){
    delay = delay + 0.4;
    return`
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    
    `
}
document.querySelector("#cards").innerHTML = createCard("02/12", "Sábado", createGame("corinthians", "16:00", "palmeiras")) + 
createCard("03/12", "Domingo", createGame("atletico", "15:00", "bota")) + 
createCard("04/12", "Segunda", createGame("bahia", "19:00", "inter")) + 
createCard("05/12", "Terça", createGame("sp", "16:00", "flamengo")) + 
createCard("06/12", "Quarta", createGame("vasco", "20:00", "santos")) + 
createCard("08/12", "Sexta", createGame("corinthians", "18:00", "sp"))