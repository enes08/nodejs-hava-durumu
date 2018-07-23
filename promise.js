
var request = require('request');

function getweather(location){
    return new Promise(function(resolve,reject){

        var encodeURI= encodeURIComponent(location);
        var Apikey="";
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+encodeURI+",tr&appid="+Apikey+"&units=metric";
    
        if(!location){

            reject ("locasyon alınamadı!!");;
           }
    
        request(url, function (error, response, body) {
    
            if(error){
                reject("Hava durumu alınamadı!!");
              } else {
                   
                  var obj=JSON.parse(body)
               
                  resolve(obj.name + " 'da hava sıcaklığı : " + obj.main.temp);
          
              }
          });

    })
}


getweather("istanbul").then(function(curentwather){

    console.log(curentwather);
},function(error){
    console.log(error);
})
