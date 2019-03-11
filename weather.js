class Weather{
    constructor(city){
        this.apiKey='f3307c7561495eaa4506490de98a5f3d';
        this.city=city;
    
    }

    //fetch weather from ApI
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //change weather location

    changeLocation(city){
        this.city = city;
        
    }
}