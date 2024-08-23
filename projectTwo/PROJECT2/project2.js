function displayInfo (response){
    $("#forecasts").show();
    $("#info").show();
    

    let city1 = response.location.city;
    $("#name").html(city1);

   let current = response.current_observation.condition.text;
    $("#current").html(current);

   let humidity = response.current_observation.atmosphere.humidity;
    $("#humid").html(humidity);

    let temp = response.current_observation.condition.temperature;
    $("#temp").html(temp);

    let country = response.location.country;
    $("#country").html(country);
    
    let high = response.forecasts[0].high;
    $("#high").html(high);

    let low = response.forecasts[0].low;
    $("#low").html(low);

    let timezone = response.location.timezone_id;
    $("#timezone").html(timezone);

    let rise = response.current_observation.astronomy.sunrise;
    $("#rise").html(rise);

    let set = response.current_observation.astronomy.sunset;
    $("#set").html(set);

    let wind = response.current_observation.wind.speed;
    $("#wind").html(wind);

    let visibility = (response.current_observation.atmosphere.visibility) * 1.609;
    visibility = visibility.toFixed(1);
    $("#Visibility").html(visibility);

    let x = response.current_observation.condition.text;

    if (x === "Scattered Showers") {
        zeromg = "rain.jpg";
    } else if (x === "Partly Cloudy") {
        zeromg = "partlycloudy.jpg";
    }else if (x === "Mostly Sunny") {
        zeromg = "sun.jpg";
    }else if (x === "Showers") {
        zeromg = "rain.jpg";
    }else if (x === "Thunderstorms") {
        zeromg = "ths.jpg";
    }else if (x === "Clear") {
        zeromg = "clear.jpg";
    }else if (x === "Cloudy") {
        zeromg = "cloudy.jpg";
    }else if (x === "Mostly Cloudy") {
        zeromg = "mcloudy.jpg";
    }else if (x === "Rain") {
        zeromg = "rain.jpg";
    }else{
        zeromg = "sun.jpg";
    }

    $("#currentImg").attr("src", zeromg);
    




}

function find() {
    
    let city = $("#city").val();
    if (city == ""){
        alert("Please enter a city.")
        return false;
    }
    url = "https://yahoo-weather5.p.rapidapi.com/weather?location=" + city + "&format=json&u=c";

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "4228f88f2fmsh665cb83ff204ef6p19eafcjsn19855bd6d36b",
            "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        displayInfo(response);
        if(document.getElementById("foreC").checked){
            chart(response);
        }else{
            $("#chartd").hide();
            $("#next").hide();
        }

        
    });

	
}

function chart(response) {
    $("#chartd").show();
    $("#next").show();

    let zero = response.forecasts[0].day;
    let zhigh = response.forecasts[0].high;
    let zlow = response.forecasts[0].low;

    let one = response.forecasts[1].day;
    let ohigh = response.forecasts[1].high;
    let olow = response.forecasts[1].low;

    let two = response.forecasts[2].day;
    let twhigh = response.forecasts[2].high;
    let twlow = response.forecasts[2].low;

    let three = response.forecasts[3].day;
    let thrhigh = response.forecasts[3].high;
    let thrlow = response.forecasts[3].low;

    let four = response.forecasts[4].day;
    let fohigh = response.forecasts[4].high;
    let folow = response.forecasts[4].low;

    let five = response.forecasts[5].day;
    let fihigh = response.forecasts[5].high;
    let filow = response.forecasts[5].low;

    let six = response.forecasts[6].day;
    let sihigh = response.forecasts[6].high;
    let silow = response.forecasts[6].low;

    let seven = response.forecasts[7].day;
    let sevhigh = response.forecasts[7].high;
    let sevlow = response.forecasts[7].low;

    const xValues = [zero, one, two, three, four, five, six, seven];

    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        data: [zhigh, ohigh, twhigh, thrhigh, fohigh, fihigh, sihigh, sevhigh],
        borderColor: "red",
        fill: false
        },{
        data: [zlow, olow, twlow, thrlow, folow, filow, silow, sevlow],
        borderColor: "blue",
        fill: false
        }]
    },
    options: {
        legend: {display: false}
    }
    });

    $("#zero").html(zero);
    $("#one").html(one);
    $("#two").html(two);
    $("#three").html(three);


    let zeroD = response.forecasts[0].text;

    if (zeroD === "Scattered Showers") {
        zeroDmg = "rain.png";
    } else if (zeroD === "Partly Cloudy") {
        zeroDmg = "parycloudy.jpg";
    }else if (zeroD === "Mostly Sunny") {
        zeroDmg = "sun.png";
    }else if (zeroD === "Showers") {
        zeroDmg = "rain.png";
    }else if (zeroD === "Thunderstorms") {
        zeroDmg = "ths.png";
    }else if (zeroD === "Clear") {
        zeroDmg = "clear.png";
    }else if (zeroD === "Cloudy") {
        zeroDmg = "cloudy.png";
    }else if (zeroD === "Mostly Cloudy") {
        zeroDmg = "cloudy.png";
    }else if (zeroD === "Rain") {
        zeroDmg = "rain.png";
    }else{
        zeroDmg = "sun.png";
    }

    $("#zImg").attr("src", zeroDmg);

    let oneD = response.forecasts[1].text;

    if (oneD === "Scattered Showers") {
        oneDmg = "rain.png";
    } else if (oneD === "Partly Cloudy") {
        oneDmg = "parycloudy.jpg";
    }else if (oneD === "Mostly Sunny") {
        oneDmg = "sun.png";
    }else if (oneD === "Showers") {
        oneDmg = "rain.png";
    }else if (oneD === "Thunderstorms") {
        oneDmg = "ths.png";
    }else if (oneD === "Clear") {
        oneDmg = "clear.png";
    }else if (oneD === "Cloudy") {
        oneDmg = "cloudy.png";
    }else if (oneD === "Mostly Cloudy") {
        oneDmg = "cloudy.png";
    }else if (oneD === "Rain") {
        oneDmg = "rain.png";
    }else{
        oneDmg = "sun.png";
    }

    $("#oImg").attr("src", oneDmg);

    let twoD = response.forecasts[2].text;

    if (twoD === "Scattered Showers") {
        twoDmg = "rain.png";
    } else if (twoD === "Partly Cloudy") {
        twoDmg = "parycloudy.jpg";
    }else if (twoD === "Mostly Sunny") {
        twoDmg = "sun.png";
    }else if (twoD === "Showers") {
        twoDmg = "rain.png";
    }else if (twoD === "Thunderstorms") {
        twoDmg = "ths.png";
    }else if (twoD === "Clear") {
        twoDmg = "clear.png";
    }else if (twoD === "Cloudy") {
        twoDmg = "cloudy.png";
    }else if (twoD === "Mostly Cloudy") {
        twoDmg = "cloudy.png";
    }else if (twoD === "Rain") {
        twoDmg = "rain.png";
    }else{
        twoDmg = "sun.png";
    }

    $("#twImg").attr("src", twoDmg);
    
    $("#oImg").attr("src", oneDmg);

    let thD = response.forecasts[3].text;

    if (thD === "Scattered Showers") {
        thDmg = "rain.png";
    } else if (thD === "Partly Cloudy") {
        thDmg = "parycloudy.jpg";
    }else if (thD === "Mostly Sunny") {
        thDmg = "sun.png";
    }else if (thD === "Showers") {
        thDmg = "rain.png";
    }else if (thD === "Thunderstorms") {
        thDmg = "ths.png";
    }else if (thD === "Clear") {
        thDmg = "clear.png";
    }else if (thD === "Cloudy") {
        thDmg = "cloudy.png";
    }else if (thD === "Mostly Cloudy") {
        thDmg = "cloudy.png";
    }else if (thD === "Rain") {
        thDmg = "rain.png";
    }else{
        thDmg = "sun.png";
    }

    $("#thrImg").attr("src", thDmg);
    

}





