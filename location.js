
var request = require('request');

var url = "https://ipinfo.io/";


module.exports=function(callback){
    request(url, function (error, response, body) {

        if(error){
            callback();
          } else {
               
              var obj=JSON.parse(body)
           
              callback(obj);
      
          }
      });
   

};