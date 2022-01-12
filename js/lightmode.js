function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");

    var imgs = document.getElementById("spotifyimg");
    var imgb = document.getElementById("image")

    imgs.src = "images/spotify-light.png";
    imgb.src = "images/anime-window-rain.gif"

    var moonthingy = document.getElementById("iconSun");
    var moonthingy1 = document.getElementById("buttonlightmode");

    moonthingy.className = ("fa fa-moon-o");
    if (element.classList.contains("light-mode")) {
        moonthingy.style.color = "black";
    } else {
        moonthingy.className = ("fa fa-sun-o");
        moonthingy.style.color = "white";
    };


    if (element.classList.contains("light-mode")) {
        return "done"

    } else {
        var imgs = document.getElementById("spotifyimg");
        var imgb = document.getElementById("image")


        imgb.src = "images/anime-rain.gif"
        imgs.src = "images/spotify.png"
    }

}