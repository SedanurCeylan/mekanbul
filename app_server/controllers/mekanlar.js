var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
    res.render('anasayfa', 
    {baslık: 'SedaNur Ceylan',
    "sayfaBaslik" : {
        "siteAd" :"MekanBul",
        "slogan" : "Civardaki mekanları keşfet!"
       },
       "mekanlar" :[
        {
          "ad":"Seda'nın Mutfağı",
          "adres":"Merkez",
          "puan":"4",
          "mesafe":"2km",
          "imkanlar":["Ev yemekleri "," çay " , " GÜnlük Pastalar"]
  
        },
        {
          "ad":"Gloria Jeans",
          "adres":"Sdü Doğu Kampüsü",
          "puan":"3",
          "mesafe":"5km",
          "imkanlar":["Kahve ","su ", " çay"]
  
        }
  
    ]
    });
}

const mekanBilgisi = function (req, res, next) {
    res.render('mekanbilgisi', 
    { baslık: 'Mekan Bilgisi',
    "mekanBaslik" : "Seda'nın Mutfağı",
    "mekanDetay" : {
     "ad": "Seda'nın Mutfağı",
     "adres" : "Merkez",
     "puan" : "5",
     "saatler" : [
      {
        "gunler" : "Pazartesi-Cuma",
        "acilis" : "9:00",
        "kapanis" : "23:00",
        "kapali" : false
      },
      {
        "gunler" : "Cumartesi-Pazar",
        "acilis" : "10:00",
        "kapanis" : "22:00",
        "kapali" : false
      }

     ],

     "imkanlar" : ["Kahve ", " su ", " Çay"],
     "koordinatlar" : {
      "enlem": "37.7",
      "boylam": "30.5"
     },
    "yorumlar" :[
      {
        "yorumYapan" : " Seda ",
        "puan" :"2",
        "tarih" :"20 Ekim 2022",
        "yorumMetni" : "iğğğreeençççç"
      },
      {
        "yorumYapan" : " Arzu ",
        "puan" :"5",
        "tarih" :"18 Ekim 2022",
        "yorumMetni" : "Mükemmelll"
      }
    ]
     
    }

});
}

const yorumEkle = function (req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });

}


module.exports = {

    anaSayfa,
    mekanBilgisi,
    yorumEkle



}









