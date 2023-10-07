
const navbar = document.getElementById ("navbar");
const sticky = navbar.offsetTop;



function myFunction() {
    //compare havbar distance from top with the vertical scroll value
    if(window.scrollY>=sticky){
        //Add .stickyCssClass to navbar
        navbar.classList.add ("stickyCssClass");
        //avoid jump scroll of content by adding a margin top. 
        //Index always to be defined
        //this does not work, why? console says it's 60px
        document.getElementsByClassName("content")[0].style.paddingTop = "60px";
        //console.log(document.getElementsByClassName("content")[0].style.paddingTop);
        document.getElementsByID("contentInQuestion").style.paddingTop = "60px";
    }
    else{
        navbar.classList.remove("stickyCssClass");
        document.getElementsByClassName("content")[0].style.paddingTop = "16px";
    }//console.log(document.getElementsByClassName("content")[0].style.paddingTop);
}