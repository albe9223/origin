window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();


}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");


    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

}

function hideStart() {


    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", hideStart);



    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", StartGame);

}

function startGame() {


    console.log("start game");


    document.querySelector("#start").removeEventListener("animationend", StartGame);
    document.querySelector("#start").classList.add("fade_out");


    document.querySelector("#start").classList.add("hide");


}

