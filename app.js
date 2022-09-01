
const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay= document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const locationDisplay1 = document.querySelector(".location-display1");
const locationDisplay2 = document.querySelector(".location-display2");
const geoDisplay = document.querySelector(".geo-display");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details");

lookupBtn.addEventListener("click",function(){
    loader.style.display = "flex";
    details.style.display = "none";
    axios.get("https://ipapi.co/json/").then(response =>{
        loader.style.display = "none";
        details.style.display = "block";
    ipDisplay.textContent=`IP:${response.data.ip}`;
    
    locationDisplay.textContent = `City: ${response.data.city}`;
    locationDisplay1.textContent = `Region: ${response.data.region}`;
    locationDisplay2.textContent = `Country: ${response.data.country_name}`;
    geoDisplay.textContent = `Geo location: ${response.data.latitude},${response.data.longitude}`;
});
});

