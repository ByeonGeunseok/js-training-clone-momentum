"use strict";

const images = [
  "alex-robert-sbwuDopIUPI-unsplash.jpg",
  "igor-kasalovic-7WWyRNDCQgw-unsplash.jpg",
  "paul-earle-wVjd0eWNqI8-unsplash.jpg",
  "benjamin-voros-phIFdC6lA4E-unsplash.jpg",
  "jack-millard-zjyP-UYI-ko-unsplash.jpg",
  "sean-oulashin-KMn4VEeEPR8-unsplash.jpg",
  "claudio-testa--SO3JtE3gZo-unsplash.jpg",
  "james-adams-DC9z-Xau6j0-unsplash.jpg",
  "tim-swaan-eOpewngf68w-unsplash.jpg",
  "david-marcu-78A265wPiO4-unsplash.jpg",
  "kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
  "tom-gainor-ZqLeQDjY6fY-unsplash.jpg",
  "denys-nevozhai-UNv2lxq8Rmo-unsplash.jpg",
  "kalen-emsley-Bkci_8qcdvQ-unsplash.jpg",
  "vincent-guth-ISI5DlnYvuY-unsplash.jpg",
  "gabriel-garcia-marengo-ht9aLtovtSo-unsplash.jpg",
  "leonard-cotte-c1Jp-fo53U8-unsplash.jpg",
  "harli-marten-n7a2OJDSZns-unsplash.jpg",
  "lukasz-szmigiel-jFCViYFYcus-unsplash.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;
document.body.appendChild(bgImage);
