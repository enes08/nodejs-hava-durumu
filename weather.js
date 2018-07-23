
var request = require('request');

module.exports=function(location,callback){

  var encodeURI= encodeURIComponent(location);
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+encodeURI+",tr&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric";


       if(!location){

        return callback("locasyon alınamadı!!");;
       }

    request(url, function (error, response, body) {

        if(error){
            callback("Hava durumu alınamadı!!");
          } else {
               
              var obj=JSON.parse(body)
           
              callback(obj.name + " 'da hava sıcaklığı : " + obj.main.temp);
      
          }
      });
   

};