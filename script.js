// obține butonul
var myButton = document.getElementById("sus");

// când utilizatorul derulează în jos 20px de la partea de sus a documentului, arată butonul
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// când utilizatorul dă clic pe buton, se deplasează în partea de sus a documentului
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*                       ^Ridicarea in partea de sus a ecranului^                                */
const catDesk = document.getElementById('catDesk');
const catMob = document.getElementById('catMob');
const catMobI = document.querySelector("#catMobBtn i"); // Iconita cu sageata de pe butonul Mobil

var catDeskStare = 0;
var catMobStare = 0;

function show_catalogDesk()
{
  if(catDeskStare === 0)
  {
    catDesk.style.marginTop = "0";
    catDesk.style.transition = "0.5s ease";
    setTimeout(() => {
    catDesk.style.zIndex = "2";
    }, 500);
    catDeskStare++;
  }else
  {
    setTimeout(() => {
      catDesk.style.marginTop = "-50px";
    }, 100);
    catDesk.style.transition = "0.5s ease";
    catDesk.style.zIndex = "1";
    catDeskStare--;
  }
}

function show_catalogMob()
{
  if(catMobStare === 0)   // Daca butonul nu este tastat, arata meniul
  {
    catMob.style.marginTop = "0";                             // Il readuce la distanta initiala
    catMob.style.transition = "0.5s ease";
    catMob.style.visibility = "visible";                      // Il face vizibil
    catMobI.style = "transform: rotate3d(1, 0, 0, 0.5turn);"; // Roteste iconita cu jumate de rotatie
    setTimeout(() => {
    catMob.style.zIndex = "2";                                // Il scuate de sub div-ul de deasupra, doar dupa 0.5 secunde, adica dupa ce s-a efectuat functia de returnare la distanta initiala
    }, 500);
    catMobStare++;                                            // Declaram ca meniul este deschis
  }else                   // Daca deja s-a deschis meniul (catMobStare != 0), si din nou se face click, meniul se va ascunde
  {
    setTimeout(() => {
      catMob.style.marginTop = "-3540px";                     // Se ridica la distanta initiala 
      catMobI.style = "transform: rotate3d(1, 0, 0, 0turn);"; // Roteste inapoi iconita cu jumate de rotatie
    }, 100);

    setTimeout(() =>
    {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)  // Daca de aflam la o distanta mai mare de 150px de la marginea de sus a ecranului
      {
        document.documentElement.scrollTop = 150;             // Ne aduce inapoi in locul unde se incepe meniul, adica la 150px fata de marginea de sus 
      }
    }, 300)
    catMob.style.transition = "0.5s ease";
    catMob.style.zIndex = "1";                                // Il ascundem inapoi sub div-ul din partea de sus
    catMobStare--;                                            // Declaram ca meniul este inchis
  }
}

/*                                   ^Show catalog^                                              */