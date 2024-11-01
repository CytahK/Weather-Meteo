function refreshWeather(response) {
    let temperatureElement = document.querySelector(#temperature);
    temperatureElement.innerHTML = response.data.temperature.current;
    
}


function searchCity(city) {
    let apiKey = "a4f302ccaf3b204cb26t8f848ba4659o";
    let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);

}




function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}




let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
