const temperatureref= document.querySelector(".weather1")
const locationref= document.querySelector(".weather2>p")
const date_time_ref = document.querySelector(".weather2>span")
const emojiref= document.querySelector(".weather3>p>img")
const conditionref= document.querySelector(".weather3>span")

const searchfield= document.querySelector(".searchfield")
const navform= document.querySelector("form")
const submitbtnref= document.querySelector(".btn")

const apikey=`enter your Weather API key here`

const fetchdata= async(location_entered="Delhi")=>{
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}=${location_entered}&aqi=yes`;
        const callresponse= await fetch(url)
        const data= await callresponse.json();
        console.log(data)
        temperatureref.innerText= (String(data.current.temp_c)+"°").padStart(3,"0");
        locationref.innerText= `${data.location.name}, ${data.location.country}`
        date_time_ref.innerText= data.location.localtime;
        emojiref.src= data.current.condition.icon;
        conditionref.innerText= data.current.condition.text;
    } catch (error) {
        console.log("Dear Kinshul, an error has occured as under", error)
    }
}

fetchdata("delhi, India");

navform.addEventListener("submit", (e)=>{
    e.preventDefault();
    const location_entered= searchfield.value; 
    submitbtnref.style.background= "transparent"
    setTimeout(() => {
        submitbtnref.style.transition= "all 0s"
        submitbtnref.style.background= "rgba(175, 175, 66, 0.655)"
        
    }, 2000);
    fetchdata(location_entered)
    submitbtnref.transition= "all 0.2s ease-in-out"
    searchfield.value= "";

})