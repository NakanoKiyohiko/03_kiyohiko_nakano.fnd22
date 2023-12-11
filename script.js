'use strict'

const fire = document.getElementById("button"); 
const moon = document.getElementById("crescentmoon");
let setHanabidama;
let setHanabi;

function hanabiMini() {
  setHanabidama = document.getElementById("hanabidama-ref");
  setHanabidama.style.width = "20px";
  setHanabidama.style.left = "345px";
  setHanabi = document.getElementById("hanabi-ref");
  setHanabi.style.width = "200px";
  setHanabi.style.top = "100px";
  setHanabi.style.left = "255px";
}

function hanabiBig() {
  setHanabidama = document.getElementById("hanabidama-ref");
  setHanabidama.style.width = "45px";
  setHanabidama.style.left = "335px";
  setHanabi = document.getElementById("hanabi-ref");
  setHanabi.style.width = "450px";
  setHanabi.style.top = "15px";
  setHanabi.style.left = "130px";
}

function hanabiUnexploded() {
  setHanabidama = document.getElementById("hanabidama-ref");
  setHanabidama.style.width = "20px";
  setHanabidama.style.left = "345px";
  setHanabi = document.getElementById("unexploded");
}

function hanabiKana() {
  setHanabidama = document.getElementById("hanabidama-kana");
  setHanabi = document.getElementById("hanabi-kana");
}

function selectHanabi() {
  let num = randomNumber();
  if (num < 5) {
    hanabiMini();
  } else if (num < 8) {
      hanabiBig();
    } else if (num === 8) {
        hanabiUnexploded();
      } else {
          hanabiKana();
      }
}

function randomNumber() {
  return Math.floor( Math.random() * 10);
}

fire.addEventListener("click", selectHanabi);
fire.addEventListener("click", () => {
  setHanabidama.animate (
    [
      { transform: "translateX(0)"},
      { transform: "translatey(-260px)" }
    ],
    {
      duration: 2000
    }
  );

  setTimeout(() => {
    setHanabi.style.visibility = "visible";
  }, 3000);
  setTimeout(() => {
    setHanabi.style.visibility = "hidden";
  }, 5000);
});

window.addEventListener("load", () => {
  moon.animate (
    [
      { transform: "translateX(0)"},
      { transform: "translatex(-590px)" }
    ],
    {
      duration: 1000000
    }
  );
});

