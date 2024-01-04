const convert = document.querySelector("#convert");

convert.addEventListener("click", convertTemp);

function convertTemp() {
  const tempF = Number(document.querySelector("#tempF").value);

  let resultC = (tempF - 32) * (5 / 9);

  document.querySelector("#showC").textContent = `Temp is ${Math.round(
    resultC
  )}°C`;
}
