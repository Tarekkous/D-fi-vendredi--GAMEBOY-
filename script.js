let btn_on  = document.querySelector('.onoff');
let ecran =  document.querySelector('.ecran');
let posx = 620;
let posy= 510;

btn_on.addEventListener('click', function (e) {
   this.classList.toggle('actif');

   document.querySelector('.on .pwr').classList.toggle('actif');
   ecran.classList.toggle('actif');
});


// bas 
let btn_bas  = document.querySelector('.croix .bas');

btn_bas.addEventListener('click', function (e) {
   posy-= 60;
   ecran.style.backgroundPosition = `${posx}px ${posy}px`;

   document.querySelector('.bonhomme').classList.add('gobas');
    setTimeout(() => {
     
    document.querySelector('.bonhomme').classList.remove('gobas');
    }, 1200);
 });
 

 // gauche 
let btn_gauche  = document.querySelector('.croix .gauche');

btn_gauche.addEventListener('click', function (e) {
   posx += 60;
   ecran.style.backgroundPosition = `${posx}px ${posy}px`;

    document.querySelector('.bonhomme').classList.add('gogauche');
    setTimeout(() => {
    document.querySelector('.bonhomme').classList.remove('gogauche');
    }, 1200);
 });

  // droite 
let btn_droite  = document.querySelector('.croix .droite');

btn_droite.addEventListener('click', function (e) {
   posx -= 60;
   ecran.style.backgroundPosition = `${posx}px ${posy}px`;

   
   document.querySelector('.bonhomme').classList.add('godroite');
    setTimeout(() => {
    document.querySelector('.bonhomme').classList.remove('godroite');
    }, 1200);
 });


   // haut 
let btn_haut  = document.querySelector('.croix .haut');

btn_haut.addEventListener('click', function (e) {
   posy+= 60;
   ecran.style.backgroundPosition = `${posx}px ${posy}px`;

   
   document.querySelector('.bonhomme').classList.add('gohaut');
    setTimeout(() => {
    document.querySelector('.bonhomme').classList.remove('gohaut');
    }, 1200);
 });


// AVEC MOUSEDOWN

// let btn_gauche = document.querySelector('.croix .gauche');
// let bonhomme = document.querySelector('.bonhomme');
// let ecranActif = document.querySelector('.game_boy .ecran_contour .ecran');
// let posx = 210;
// let posy = 10;


// var marche ;

// btn_gauche.addEventListener('mousedown', function () {
//     bonhomme.classList.add('gauche');
//     posx += 40;
//     ecranActif.style.backgroundPosition = posx+'px '+ posy+'px';

//     marche = setInterval(() => {
//         posx += 5;
//         ecranActif.style.backgroundPosition = posx+'px '+ posy+'px';   
//     }, 700);

// });

// btn_gauche.addEventListener('mouseup', function () {
//     bonhomme.classList.remove('gauche');
//     clearInterval(marche);
// });