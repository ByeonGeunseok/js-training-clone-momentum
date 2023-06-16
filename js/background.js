"use strict";

const images = [
    "alex-robert-sbwuDopIUPI-unsplash.jpg",
    "kalen-emsley-Bkci_8qcdvQ-unsplash.jpg",
    "benjamin-voros-phIFdC6lA4E-unsplash.jpg",
    "leonard-cotte-c1Jp-fo53U8-unsplash.jpg",
    "claudio-testa--SO3JtE3gZo-unsplash.jpg",
    "lukasz-szmigiel-jFCViYFYcus-unsplash.jpg",
    "david-marcu-78A265wPiO4-unsplash.jpg",
    "paul-earle-wVjd0eWNqI8-unsplash.jpg",
    "denys-nevozhai-UNv2lxq8Rmo-unsplash.jpg",
    "sean-oulashin-KMn4VEeEPR8-unsplash.jpg",
    "gabriel-garcia-marengo-ht9aLtovtSo-unsplash.jpg",
    "tom-gainor-ZqLeQDjY6fY-unsplash.jpg",
    "harli-marten-n7a2OJDSZns-unsplash.jpg",
    "vincent-guth-ISI5DlnYvuY-unsplash.jpg",
    "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.className = "bgImage";
bgImage.src = `./img/${chosenImage}`;
document.body.appendChild(bgImage);
