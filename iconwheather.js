function iconWeather(requestResponse){
    const weathername = document.createElement('h4');
    weathername.classList.add('weathername');
    const rainImg = document.createElement('div');
    rainImg.classList.add('rainImg');

    if ((requestResponse.weather[0].icon) === '10d' || (requestResponse.weather[0].icon) === '10n' || (requestResponse.weather[0].icon) === '09d' || (requestResponse.weather[0].icon) === '09n'){
        weathername.textContent = `На улице ${requestResponse.weather[0].description}`;
        wheatherResult.appendChild(weathername);
       
        rainImg.style.backgroundImage = "url('./img/rain.svg')";
        wheatherResult.appendChild(rainImg);
    }
    if ((requestResponse.weather[0].icon) === '01d' || (requestResponse.weather[0].icon) === '01n'){
        weathername.textContent = `На улице ${requestResponse.weather[0].description}`;
        wheatherResult.appendChild(weathername);
       
        rainImg.style.backgroundImage = "url('./img/sun.svg')";
        wheatherResult.appendChild(rainImg);
    }
    if ((requestResponse.weather[0].icon) === '02d' || (requestResponse.weather[0].icon) === '02n' || (requestResponse.weather[0].icon) === '03d' || (requestResponse.weather[0].icon) === '03n' || (requestResponse.weather[0].icon) === '04d' || (requestResponse.weather[0].icon) === '04n'){
        weathername.textContent = `На улице ${requestResponse.weather[0].description}`;
        wheatherResult.appendChild(weathername);
       
        rainImg.style.backgroundImage = "url('./img/cloud.svg')";
        wheatherResult.appendChild(rainImg);
    }
    if ((requestResponse.weather[0].icon) === '11d' || (requestResponse.weather[0].icon) === '11n'){
        weathername.textContent = `На улице ${requestResponse.weather[0].description}`;
        wheatherResult.appendChild(weathername);
       
        rainImg.style.backgroundImage = "url('./img/storm.svg')";
        wheatherResult.appendChild(rainImg);
    }
    if ((requestResponse.weather[0].icon) === '13d' || (requestResponse.weather[0].icon) === '13n'){
        weathername.textContent = `На улице ${requestResponse.weather[0].description}`;
        wheatherResult.appendChild(weathername);
       
        rainImg.style.backgroundImage = "url('./img/snow.svg')";
        wheatherResult.appendChild(rainImg);
    }
    if ((requestResponse.weather[0].icon) === '50d' || (requestResponse.weather[0].icon) === '50n'){
        weathername.textContent = `На улице ${requestResponse.weather[0].description}`;
        wheatherResult.appendChild(weathername);
       
        rainImg.style.backgroundImage = "url('./img/tuman.svg')";
        wheatherResult.appendChild(rainImg);
    }
 }