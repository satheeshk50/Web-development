let input = document.querySelector("#city");
let search = document.querySelector("#search");
let im = document.querySelector("#weather-icon");
let temp = document.querySelector("#temp-div");
let wSpeed = document.querySelector("#wind-speed");
let humi = document.querySelector("#humidity");
input.addEventListener("keyup", async (e) => {
    if (e.keyCode === 13) {
        apiWeather();
    }
});
search.addEventListener("click",()=>
{
    apiWeather();
});
async function apiWeather() {
    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2dc7efbd73e1eae297a6dec17e6e4936&units=metric`);
    console.log(api.status);
    if(api.status==404)
    {
        alert("Enter valid city name");
    }
    let data = await api.json();

    let icon_id=data['weather'][0].icon;
    console.log(data);
    let t = data['main'].temp;
    im.src=`https://openweathermap.org/img/wn/${icon_id}@4x.png`;
    temp.innerHTML=`<p>${t}<sup><small>o</small></sup>c</p>`
    temp.style.fontsize=10;
    wSpeed.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
  </svg><p id="value">${data['wind'].speed} m/s</p>`
  humi.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0q.164.544.371 1.038c.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8m.413 1.021A31 31 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87z"/>
</svg><p>${data['main'].humidity} g/kg</p>`
}