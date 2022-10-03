document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    const isDropDownMenu = e.target.matches("[data-dropdown-menu]")
    let currentDropdown
    if(isDropdownButton){
        console.log('bye')
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
    else if(!isDropDownMenu){
        console.log('hi');
        document.querySelector("[data-dropdown].active").classList.remove('active');
        return
    }
    
})