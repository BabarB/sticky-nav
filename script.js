
const navbar = document.getElementById ("navbar");
const sticky = navbar.offsetTop;
console.log (sticky);


function myFunction() {
    //compare havbar distance from top with the vertical scroll value
    if(window.scrollY>=sticky){
        //Add .stickyCssClass to navbar
        navbar.classList.add ("stickyCssClass");
        //avoid jump scroll of content by adding a margin top. 
        //Index always to be defined
        document.getElementsByClassName("content")[0].style.marginTop = "60px";
    }
    else{
        navbar.classList.remove("stickyCssClass");
    }
}