function httpRequest({
        method = 'GET',
        url,
        type = 'json',
    }){
        console.log(url);
        
        const request = new XMLHttpRequest();
        
        request.open(method, url);
        request.responseType = type;
        request.send();

        request.addEventListener('load', () => {
           const requestResponse = request.response;
           console.log(requestResponse)
           console.log(wheatherResult.children.length)

           while (wheatherResult.children.length > 0){
            wheatherResult.children[0].remove();
           }
    
           const minTemp = document.createElement('h3');
           minTemp.classList.add('minTemp');
           minTemp.textContent = `Минимальная температура воздуха: ${Math.round(requestResponse.main.temp_min - 273.15)}°C`
           wheatherResult.appendChild(minTemp);
            
           const feelTemp = document.createElement('h3');
           feelTemp.classList.add('feelTemp');
           feelTemp.textContent = `Ощущается как: ${Math.round(requestResponse.main.feels_like - 273.15)}°C`
           wheatherResult.appendChild(feelTemp);

           console.log(requestResponse.weather[0].description);

           iconWeather(requestResponse);
        });
    } 
