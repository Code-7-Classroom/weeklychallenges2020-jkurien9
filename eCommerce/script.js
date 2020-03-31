var i = 0;
var images = ["blowdryer.jpeg", "flatiron.jpg", "lipgloss.jpg", "mascara.jpeg"];
var time = 1000;

images[0] = 'blowdryer.jpeg';
images[1] = 'flatiron.jpg';
images[2] = 'lipgloss.jpg';
images[3] = 'mascara.jpeg';

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;
