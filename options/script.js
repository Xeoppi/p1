const card = document.getElementById('connectCard');
const sign = document.getElementById('signCard');
const reg = document.getElementById('regCard');
var currentCard = 0;

function swap()
{
	if(currentCard === 0)
	{
		card.style.transform = "rotate3d(0, 1, 0, 0.5turn)";
		card.style.transition = "1s ease";
		setTimeout(() =>{
			sign.style.visibility = "hidden";
			reg.style.visibility = "visible";
		}, 300);
		currentCard++;
	}else
	{
		card.style.transform = "rotate3d(0, 1, 0, 0)";
		card.style.transition = "1s ease";
		setTimeout(() =>{
			sign.style.visibility = "visible";
			reg.style.visibility = "hidden";
		}, 300);
		currentCard--;
	}
}
/*====================^Register card^========================*/
const prevServBtn = document.getElementById('prevServBtn');
const nextServBtn = document.getElementById('nextServBtn');
const card2 = document.getElementsByClassName('col2');
var currentCard2 = 0;

card2[0].style.transform = "scale(1)";
card2[1].style.display = "none";
card2[2].style.display = "none";
prevServBtn.style.display = "none";

function next() 
{
  if (currentCard2 === 0 || currentCard2 === 1) {
    card2[currentCard2].style.transform = "translateX(100%)";
    card2[currentCard2].style.transition = "0.5s ease";
    setTimeout(() => {
      card2[currentCard2].style.display = "none"; 
      card2[currentCard2].style.transform = "translateX(0)";
      card2[currentCard2].style.transform = "scale(0.1)";
      currentCard2++;
      if (currentCard2 === 1) {
        prevServBtn.style.display = "block";
        prevServBtn.style.zIndex = "2";
      }
      if (currentCard2 === 2) {
        nextServBtn.style.visibility = "hidden";
      }
      card2[currentCard2].style.display = "block";
      setTimeout(() =>
      {
      	card2[currentCard2].style.transform = "scale(1)";
      	card2[currentCard2].style.transition = "transform 0.5s ease";
      }, 100);
    }, 1000);
  }
}

function prev()
{
  if (currentCard2 === 1 || currentCard2 === 2) {
    card2[currentCard2].style.transform = "translateX(-100%)";
    card2[currentCard2].style.transition = "0.5s ease";
    setTimeout(() => {
      card2[currentCard2].style.display = "none";
      card2[currentCard2].style.transform = "translateX(0)";
      card2[currentCard2].style.transform = "scale(0.1)";
      currentCard2--;
      if (currentCard2 === 0) {
        prevServBtn.style.display = "none";
      }
      if (currentCard2 === 1) {
        nextServBtn.style.visibility = "visible";
        nextServBtn.style.zIndex = "1";
      }
      card2[currentCard2].style.display = "block";
      setTimeout(() =>
      {
      	card2[currentCard2].style.transform = "scale(1)";
      	card2[currentCard2].style.transition = "transform 0.5s ease";
      }, 100);
    }, 1000);
  }
}
/*====================^Services card^========================*/