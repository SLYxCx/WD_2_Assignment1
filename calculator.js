        /**
         * Calculator function for converting weight classes.
         * 
         * @param {*} event 
         */
        
        function convertWeight(event) {
            event.preventDefault();
            const scale = document.getElementById('WeightInputScale').value;
            const weight = parseFloat(document.getElementById('WeightInputBox').value);
            let outputValue;
            let outputScale;
        
            if (scale === 'Pounds') {
                outputValue = (weight * 0.453592).toFixed(2); // Pounds to Kg
                outputScale = 'Kilograms (kg)';
            } else {
                outputValue = (weight * 2.20462).toFixed(2); // Kg to Pounds
                outputScale = 'Pounds (lb.)';
            }
        
            document.getElementById('weightOutputScale').textContent = outputScale;
            document.getElementById('weightOutputValue').textContent = outputValue;
        }
        
        function convertDistance(event) {
            event.preventDefault();
            const scale = document.getElementById('DistanceInputScale').value;
            const distance = parseFloat(document.getElementById('DistanceInputBox').value);
            let outputValue;
            let outputScale;
        
            if (scale === 'Miles') {
                outputValue = (distance * 1.60934).toFixed(2); // Miles to Km
                outputScale = 'Kilometers (km)';
            } else {
                outputValue = (distance * 0.621371).toFixed(2); // Km to Miles
                outputScale = 'Miles (mi.)';
            }
        
            document.getElementById('distanceOutputScale').textContent = outputScale;
            document.getElementById('distanceOutputValue').textContent = outputValue;
        }
        
        function convertTemperature(event) {
            event.preventDefault();
            const scale = document.getElementById('TemperatureInputScale').value;
            const temperature = parseFloat(document.getElementById('TemperatureInputBox').value);
            let outputValue;
            let outputScale;
        
            if (scale === 'Celsius') {
                outputValue = ((temperature * 9/5) + 32).toFixed(2); // Celsius to Fahrenheit
                outputScale = 'Fahrenheit (°F)';
            } else {
                outputValue = ((temperature - 32) * 5/9).toFixed(2); // Fahrenheit to Celsius
                outputScale = 'Celsius (°C)';
            }
        
            document.getElementById('temperatureOutputScale').textContent = outputScale;
            document.getElementById('temperatureOutputValue').textContent = outputValue;
        }