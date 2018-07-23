
var request = require('request');

module.exports=function(location,callback){

  var encodeURI= encodeURIComponent(location);
  var Apikey="";
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+encodeURI+",tr&appid="+Apikey+"&units=metric";


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