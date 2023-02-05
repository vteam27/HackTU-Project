const elem=document.querySelector("#clickk");
const sub = document.querySelector("#su");
sub.addEventListener("click",function () {
    clickk.classList.remove("hidden");
});

// function toggleDisplay() {
//     let durationSelection = document.querySelector('input[name="time"]:checked');
//     let capacitySelection = document.querySelector('input[name="capacity"]:checked');
  
//     if (durationSelection.value === "fifty" && capacitySelection.value === "hundred") {
//       document.getElementById("app-bord-1").classList.remove ("hidden")
//       document.getElementById("app-bord-2").style.display = "block";
//       document.getElementById("app-bord-3").style.display = "none";
//       document.getElementById("app-bord-4").style.display = "none";
//     } else if (durationSelection.value === "twenty" && capacitySelection.value === "threehundred") {
//       document.getElementById("app-bord-1").style.display = "none";
//       document.getElementById("app-bord-2").style.display = "none";
//       document.getElementById("app-bord-3").style.display = "block";
//       document.getElementById("app-bord-4").style.display = "block";
//     }
//   }
  
//   sub.addEventListener("click", toggleDisplay);
  
