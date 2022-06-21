class Suggest {
    constructor(element, data, field){
        let htmlElement;
        if(typeof element === 'string'){
            htmlElement = document.querySelector(element);
            if(!htmlElement) {
                throw new Error('No element with selector' + element);
            }
        } else{
            htmlElement = element;
        }
        if (htmlElement.tagName !== 'INPUT'){
            throw new Error('support only input');
        }

        this.htmlElement = htmlElement;
        this.data = data;
        this.field = field;

        const coords = this.htmlElement.getBoundingClientRect();

        const suggestPopup = document.createElement('div');
        suggestPopup.classList.add('suggest_popup', 'suggest_popup_hidden');
        suggestPopup.style.left = coords.left + window.scrollX + 'px';
        suggestPopup.style.top = coords.bottom + 5 + window.scrollY + 'px';
        document.body.appendChild(suggestPopup);
    

        this.suggestPopup = suggestPopup;

        this.onInput = this.onInput.bind(this);
        this.onSuggestClick = this.onSuggestClick.bind(this);
        
        this.htmlElement.addEventListener('input', this.onInput);
        this.suggestPopup.addEventListener('click', this.onSuggestClick);
    }

    setValue(value){
        this.htmlElement.value = value;
    }

    onInput(){
        this.suggestPopup.innerHTML = '';
        const value = this.htmlElement.value.slice(0, 1).toUpperCase() + 
         this.htmlElement.value.slice(1).toLowerCase();
        const result = this.data.filter(
            element => element[this.field].startsWith(value)
            );

        if (result.length == 0){
            this.suggestPopup.classList.add('suggest_popup_hidden');
            return;
        }

        result.forEach(name => {
            const cityElem = document.createElement('div');
            cityElem.classList.add('suggest_popup-item');
            cityElem.textContent = name[this.field];
            cityElem.dataset.name = name[this.field];

            this.suggestPopup.appendChild(cityElem);
        });
        this.suggestPopup.classList.remove('suggest_popup_hidden');
    }

    onSuggestClick(event){
        const target = event.target;

        if(!target.classList.contains('suggest_popup-item')){
            return;
        }
        this.htmlElement.value = target.dataset.name;
        this.suggestPopup.classList.add('suggest_popup_hidden');
       
        for (let i = 0; i < cities.length; i++) {
            
            if(cities[i].name == this.htmlElement.value){
                const lat = cities[i].coords.lat;
                const lon = cities[i].coords.lon;
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=513eda365a84a94c67f822d9bb045d9e`

                httpRequest({url});
            }  
   
        }
        
        
        
    }
    
}

const suggest = new Suggest('.suggest', cities, 'name');

