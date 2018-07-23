var weather = require('./weather');
var location = require('./location');
var argv=require("yargs")
 .command("location","Yazdığınız Konumunuzu alır",function(yargs){
    yargs.option({
            location:{
                require:true,
                description:"Konumunu giriniz!!",
               alias:"l",
               type:"string"
            }
    

        }).help("help");

 }).help("help").argv;


 if(typeof argv.l=="string"&&argv.l.length>0){
     weather(argv.l,function(currentwather){
        console.log(currentwather);
    });

 }else{
    location(function(location){

        if(!location){
            console.log("locasyon bilgisi alınamadı");

        }
        else{
            weather(location.city,function(currentwather){
                console.log(currentwather);
            });

        }
      });

     

 }

     
    
      
