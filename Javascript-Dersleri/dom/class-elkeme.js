/*css class ekleme- ulaşma */

let textPrimary = document.querySelector("#baslik");
//console.log(textPrimary.classList);
textPrimary.classList.add("text-primary");

let btn = document.querySelector("#btn");
//console.log(btn.classList);
btn.classList.add("btn-primary", "text-white");

// listeden class silme

btn.classList.remove("text-white");
btn.classList.add("text-secondary");
//console.log(btn.classList);
