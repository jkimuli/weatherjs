// initialize weather object

const storage = new Storage();

const weather = new Weather(storage.getLocationData());
const ui = new UI();



function getWeather(){
    weather.getWeather()
    .then(results=>
        ui.paint(results))
    .catch(err=>console.log(err))
}

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value;
    
    //change location
    weather.changeLocation(city.toLowerCase());

    //reload weather for the new changed location
    getWeather();

    //close modal

    $('#locModal').modal('hide');

    storage.setLocationData(city);

});

document.addEventListener('DOMContentLoaded',getWeather);