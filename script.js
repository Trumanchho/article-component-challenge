showSocials();

function showSocials() {
    const shareBox = document.getElementById("share-box");
    const button = document.getElementById("button");
    const svg = document.getElementById("share-svg");
    const profilePic = document.getElementById("pic");
    const date = document.getElementById("date");
    const name = document.getElementById("name");
    

    if (shareBox.style.opacity === "0") {
        shareBox.style.opacity = "1";
        svg.style.color = "white";
        button.style.backgroundColor = "#6d7f97";
        if (window.innerWidth < 576) {
            profilePic.style.opacity = "0";
            date.style.opacity = "0";
            name.style.opacity = "0";            
        }
    } else {
        shareBox.style.opacity = "0";
        button.style.backgroundColor = "#ecf2f8";
        svg.style.color = "#6E8098";
        if (window.innerWidth < 576) {
            profilePic.style.opacity = "1";
            date.style.opacity = "1";
            name.style.opacity = "1";
        }
    }
    profilePic.style.opacity = "1";
    date.style.opacity = "1";
    name.style.opacity = "1"; 
}