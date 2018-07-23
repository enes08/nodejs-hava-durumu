/*
function dowork(data,callback){

    callback("herşey yolunca");

}

function doworkpromise(data){
     
    return new Promise(function(resolve,reject){

        reject("hata var lee");
    })

}


doworkpromise("data").then(function(response){

    console.log(response);
},function(error){
    console.log(error);

})*/
var request = require('request');

function getweather(location){
    return new Promise(function(resolve,reject){

        var encodeURI= encodeURIComponent(location);
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+encodeURI+",tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric";
    
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