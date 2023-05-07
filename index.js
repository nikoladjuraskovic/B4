let slike = document.getElementsByTagName("img");

//u pocetku sakrijemo sve slike osim prve


/*Mozete probati da zadatak uradite preko jquery-ja, mislim da je lakse.

***DISCLAIMER***
Ne mogu da garantujem 100% da ce vam biti dostupan i/ili dozvoljen jquery na maturi.

***Kraj disclaimer-a***

https://matfuvit.github.io/UVIT/vezbe/knjiga/Poglavlja/JQuery/#65-jquery-efekti-i-animacije

*/

let naslovSlike = document.getElementById("naslovSlike");
let godinaSlike = document.getElementById("godinaSlike");
let opisSlike = document.getElementById("spanOpis");

let krugovi = document.getElementsByClassName("dot");

naslovSlike.innerHTML="Фаун са звездама";
godinaSlike.innerHTML = "1955";
opisSlike.innerHTML = "Фаун са звездама настао је 1955...";
krugovi[0].style.backgroundColor = "green";

for(let i = 1; i < slike.length; i++)
{
    slike[i].hidden = true;
}

let broj_slika = slike.length;
var i = 0;
// Svake 3 sekunde promeni sliku
const si = setInterval(function() {
    
    // sakri tekucu sliku
    slike[i].hidden = true;
    krugovi[i].style.backgroundColor = "gray";
    
    //  indeksom predji na narednu sliku
    i = i + 1;
    // ako se desi da je indeks veci od 4 tj. prosli smo sve slike, onda resetuj na indeks prve slike
    if(i == broj_slika)
        i = 0;

    // prikazi narednu sliku
    slike[i].hidden = false;
    krugovi[i].style.backgroundColor = "green";
    /*slike[i].style.setProperty("opacity", 0.5);*/


    if(i == 1)
    {
        naslovSlike.innerHTML = "Гитариста";
        godinaSlike.innerHTML = "1910";
        opisSlike.innerHTML = "Гитариста је настао 1910..."
    } else if (i == 2)
    {
        naslovSlike.innerHTML = "Миран живот са компотом и чашом";
        godinaSlike.innerHTML = "1914";
        opisSlike.innerHTML = "Миран живот са компотом и чашом је настао 1914..."

    } else if(i == 3)
    {
        naslovSlike.innerHTML = "Виолина";
        godinaSlike.innerHTML = "1912";
        opisSlike.innerHTML = "Виолина је настао 1912..."
    } else if (i == 4)
    {
        naslovSlike.innerHTML = "Пиеро";
        godinaSlike.innerHTML = "1918";
        opisSlike.innerHTML = "Пиеро је настао 1918..."
    } else if (i == 0)
    {
        naslovSlike.innerHTML="Фаун са звездама";
        godinaSlike.innerHTML = "1955";
        opisSlike.innerHTML = "Фаун са звездама настао је 1955...";

    }

    fadeIn(slike[i], 1000);
    
// ubacivanjem svega ovoga u setInterval slike se ovako smenjuju stalno na svake 3 sekunde tj. 3000ms
  }, 3000);

/*fja FadeIn preuzeta sa : https://codepen.io/jorgemaiden/pen/xoRKWN*/

 function fadeIn(element, duration = 1000) {
    element.style.display = '';
    element.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
      element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
      last = +new Date();
      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }