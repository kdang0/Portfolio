const button = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');

// document.getElementById("hamburger").addEventListener('click', e => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]")
//     // const isDropDownMenu = e.target.matches(".dropdownmenu")
//     let currentDropdown = document.querySelector(".dropdown")
 
//     currentDropdown.classList.toggle('active');
    
//     currentDropdown.focus()
//     // else if(isDropDownMenu){
//     //     console.log('hi');
//     //     document.querySelector("[data-dropdown].active").classList.remove('active');
//     //     return
//     // }
//     // console.log(e.target)
    
// })

// document.querySelector(".dropdown").addEventListener('blur', e => {
//     let currentDropdown = document.querySelector(".dropdown")
//     if(!currentDropdown.contains(document.activeElement)){
//         console.log(document.activeElement)
//         currentDropdown.classList.toggle('active');
//     }
// })


// document.querySelectorAll(".dropdown *").forEach( (item, index)=> {
//     item.tabIndex = index
//     item.addEventListener('focus', e=>{
//         console.log('bye')
//         document.querySelector(".dropdown").focus()
//     });
// })


button.addEventListener("click", () => {
    if(!navbar.classList.contains("hidden")){
        navbar.classList.replace('transition-out',"transition-in");
        navbar.focus();
    } else{
        navbar.classList.remove("hidden");
        navbar.classList.toggle("transition-in");
        navbar.focus();
    }
});

navbar.querySelectorAll("ul")

navbar.addEventListener("blur", () =>{
    navbar.classList.replace("transition-in",'transition-out');
    // navbar.classList.toggle("hidden");
});

function includeHidden() {
    if(window.innerWidth > 591){
        navbar.classList.add("hidden");
        navbar.classList.remove("transition-in");
        navbar.classList.remove("transition-out");
    }
}

window.onresize = includeHidden;