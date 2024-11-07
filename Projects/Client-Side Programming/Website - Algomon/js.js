
//Links Change color
let listItems = document.getElementsByTagName("a");
let listItemsColours = [];


for (let item = 0; item < listItems.length; item++) {
    listItemsColours.push(listItems[item].style.color);

    listItems[item].addEventListener("mouseover", () => {
        listItems[item].style.color = "#4CAF50";
    });

    listItems[item].addEventListener("mouseout", () => {
        listItems[item].style.color = listItemsColours[item];
    });

}


function resetColor(list){
    
}

//Image with a nav bar on the bottom and as you scroll the nav bar stays on the top and the image disapears
window.addEventListener('scroll', function() {
    scrollFunction();
});

function scrollFunction() {
    let scrollTop = document.documentElement.scrollTop;

    let navbar = document.getElementById("navbar");

    if (scrollTop > 80) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-10px";}
}


//I don't know why it only works on the Create an Account page
//Alert when clicking the button of signing in
document.getElementById("SignIn").addEventListener("click", function() {
    alert("Thank you for Signing In");
});

//Alert when clicking the button for downloading
document.getElementsByTagName("buttondownload").addEventListener("click", function() {
    alert("Downloading");
});

