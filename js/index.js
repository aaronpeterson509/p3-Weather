// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

// Cheney
$.simpleWeather({
    location: 'Cheney',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
    
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

// Seattle
$.simpleWeather({
    location: 'Seattle',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#seattle .temp').text(weather.temp);
      $('#seattle .city').text(weather.city);
    
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

// Miami
$.simpleWeather({
    location: 'Miami',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#miami .temp').text(weather.temp);
      $('#miami .city').text(weather.city);
    
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });