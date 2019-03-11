class UI{

    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.mintemp = document.getElementById('w-mintemp');
        this.maxtemp = document.getElementById('w-maxtemp');
        this.wind = document.getElementById('w-wind');

    }

    paint(results){
        this.location.textContent = results.name;
        this.description.textContent=results.weather[0].description;
        this.string.innerHTML=`${results.main.temp} &deg C`;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${results.weather[0].icon}.png`);
        this.humidity.innerHTML=`Relative Humidity: ${results.main.humidity} &#37;`;
        this.mintemp.innerHTML = `Min Temperature: ${results.main.temp_min} &deg C`;
        this.maxtemp.innerHTML = `Max Temperature: ${results.main.temp_max} &deg C`;
    }

}