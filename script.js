console.log("connecté!");
//affichage API open weather
const APIKEY = "6584c8ee2aec947ec0f14494a3ffdf1f";
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      console.log(data);
      document.getElementById("city").innerHTML =
        "<i class='fa-solid fa-city'></i>" + " " + data.name;
      document.getElementById("temp").innerHTML =
        '<i class="fa-solid fa-temperature-half"></i>' +
        " " +
        data.main.temp +
        "°";
      document.getElementById("humidity").innerHTML =
        "<i class='fa-solid fa-droplet'></i>" + " " + data.main.humidity + "%";
      document.getElementById("wind").innerHTML =
        "<i class='fa-solid fa-wind'></i>" + " " + data.wind.speed + "km/h";
    })
  );
};
//écouteur d'évènement clique sur le bouton
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;
  apiCall(ville);
  form.reset();
});
apiCall("Lyon"); //appel au chargement de la page;

//affiche la date
const timer = document.querySelector(".timer");
console.log(timer);
const date = new Date();
console.log(date);

function printDate() {
  var day = date.getDay();
  console.log(day);
  var month = date.getMonth();
  console.log(month);
  var nbrDay = date.getDate();
  console.log(nbrDay);
  var week = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  var Dday = week[day];
  console.log(Dday);
  var Year = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembe",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  var Mmonth = Year[month];
  console.log(Mmonth);
  timer.innerHTML = `
   <p>${Dday} ${nbrDay} ${Mmonth} </p>
  `;
}
printDate();
