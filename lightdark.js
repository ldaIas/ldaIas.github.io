function changeLight() {
    let isL = localStorage.getItem("isLight");
    console.log("curr mode:", isL);

    // Get the image
    let img = document.getElementById("light");

    body = document.getElementsByTagName("body")[0];

    if(img === null){
        return;
    }
    // Change lightmode to "light"
    if(isL == 0) {
        console.log("in if");
        isL = 1;
        img.src = "./images/light.png";

        body.style = 'background-color: #ededeb; color: #575755;'

    }

    // Change lightmode to "dark"
    else {
        console.log("in else");
        isL = 0;
        img.src = "./images/dark.png";

        body.style = 'background-color: #7a7978; color: #d9d9d9;'        
    }
    console.log("new mode:", isL);
    localStorage.setItem("isLight", isL);
    console.log("New isLight in storage: ", localStorage.getItem("isLight"));

}

function loadImage() {
    let imtag = document.createElement("img");
    imtag.id = "light";
    if(localStorage.getItem("isLight") == 1) {
        imtag.src = './images/light.png';
        imtag.alt = 'Lightmode'
    }
    else {
        imtag.src = './images/dark.png';
        imtag.alt = 'Darkmode'
    }
    imtag.setAttribute("onClick", "changeLight();"); 
    let divEl = document.getElementById("mode");
    divEl.append(imtag);   
}