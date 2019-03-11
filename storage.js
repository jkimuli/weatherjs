class Storage{
    constructor(){
        this.city;
        this.defaultCity='Kampala';
    }

    getLocationData(){

        //check if there is existing city data in localstorage

        if(localStorage.getItem('city')!==null){
            this.city = localStorage.getItem('city');
        }else{
            this.city = this.defaultCity;
        }
        return this.city;
    }

    setLocationData(city){
        localStorage.setItem('city',city);
    }
}