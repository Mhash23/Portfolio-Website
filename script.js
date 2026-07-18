/* ==========================
   SLIDESHOW FUNCTIONALITY
========================== */


let slideIndex = 1;


// Start slideshow when page loads

window.onload = function(){

    showSlides(slideIndex);

    autoSlides();

};




// Next / Previous buttons

function plusSlides(n){

    showSlides(slideIndex += n);

}




// Dot navigation

function currentSlide(n){

    showSlides(slideIndex = n);

}




// Display slides

function showSlides(n){


    let slides = document.getElementsByClassName("mySlides");

    let dots = document.getElementsByClassName("dot");



    if(n > slides.length){

        slideIndex = 1;

    }



    if(n < 1){

        slideIndex = slides.length;

    }



    // Hide all slides

    for(let i = 0; i < slides.length; i++){

        slides[i].style.display = "none";

    }



    // Remove active dots

    for(let i = 0; i < dots.length; i++){

        dots[i].className =
        dots[i].className.replace(" active","");

    }




    slides[slideIndex-1].style.display = "block";


    if(dots.length > 0){

        dots[slideIndex-1].className += " active";

    }


}







// Automatic slideshow every 5 seconds

function autoSlides(){


    let slides =
    document.getElementsByClassName("mySlides");



    if(slides.length === 0){

        return;

    }



    slideIndex++;



    if(slideIndex > slides.length){

        slideIndex = 1;

    }



    showSlides(slideIndex);



    setTimeout(autoSlides,5000);


}








/* ==========================
   CONTACT POPUP FORM
========================== */


function openForm(){


    document.getElementById("myForm").style.display = "block";


}






function closeForm(){


    document.getElementById("myForm").style.display = "none";


}








/* ==========================
   CLOSE FORM WHEN CLICKING OUTSIDE
========================== */


window.onclick = function(event){


    let form =
    document.getElementById("myForm");



    if(event.target == form){

        form.style.display="none";

    }


}
