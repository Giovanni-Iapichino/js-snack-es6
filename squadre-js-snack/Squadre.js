//todo Creare un array di oggetti di squadre di calcio.
//todo Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//todo Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//todo Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
//todo Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creiamo un array di oggetti di squadre di calcio.
const soccerTeams = [
  {
    name: "Juventus",
    points: 0,
    fouls: 0,
  },
  {
    name: "Inter",
    points: 0,
    fouls: 0,
  },
  {
    name: "Milan",
    points: 0,
    fouls: 0,
  },
  {
    name: "Napoli",
    points: 0,
    fouls: 0,
  },
  {
    name: "Roma",
    points: 0,
    fouls: 0,
  },
  {
    name: "Lazio",
    points: 0,
    fouls: 0,
  },
  {
    name: "Torino",
    points: 0,
    fouls: 0,
  },
  {
    name: "Fiorentina",
    points: 0,
    fouls: 0,
  },
];

// Generiamo numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
for (let currentTeam of soccerTeams) {
  currentTeam.points = Math.floor(Math.random() * 100) + 1;
  currentTeam.fouls = Math.floor(Math.random() * 50) + 1;
}
console.table(soccerTeams);

// Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const newSoccerTeams = [];
for (let currentTeam of soccerTeams) {
  name = currentTeam.name;
  fouls = currentTeam.fouls;
  newSoccerTeams.push({ name, fouls });
}
console.table(newSoccerTeams);
