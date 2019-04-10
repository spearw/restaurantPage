const createHeader = () => {

    let header = document.createElement('div');
    header.className = "header"
    
    let dropdown = document.createElement('div')
    dropdown.className = "dropdown"

    let dropBtn = document.createElement('button')
    dropBtn.className = "btn dropdown-toggle"
    dropBtn.type = "button"
    dropBtn.id = "dropdownMenuButton"
    dropBtn.innerHTML = ""
    dropBtn.setAttribute('data-toggle', "dropdown")
    dropBtn.setAttribute('aria-haspopup', "true")
    dropBtn.setAttribute('aria-expanded', "false")

    let dropdownMenu = document.createElement('div')
    dropdownMenu.className = "dropdown-menu"
    dropdownMenu.setAttribute('aria-labelledby', "drowndownMenuButton")
    let dropdownItem1 = document.createElement('a')
    dropdownItem1.innerHTML = "Home"
    dropdownItem1.className = "dropdown-item"
    dropdownItem1.href = "#"
    dropdownItem1.id = "homeButton"
    let dropdownItem2 = document.createElement('a')
    dropdownItem2.innerHTML = "Contact"
    dropdownItem2.className = "dropdown-item"
    dropdownItem2.href = "#"
    dropdownItem2.id = "contactButton"
    let dropdownItem3 = document.createElement('a')
    dropdownItem3.innerHTML = "Menu"
    dropdownItem3.className = "dropdown-item"
    dropdownItem3.href = "#"
    dropdownItem3.id = "menuButton"

    dropdownMenu.appendChild(dropdownItem1)
    dropdownMenu.appendChild(dropdownItem2)
    dropdownMenu.appendChild(dropdownItem3)

    dropdown.appendChild(dropBtn)
    dropdown.appendChild(dropdownMenu)


    let banner = document.createElement('div');
    banner.innerHTML = "Just Steak";
    banner.className = "banner";

    let reserve = document.createElement('button');
    reserve.innerHTML = "Reserve <br> Table";
    reserve.id = "reserve";

    header.appendChild(dropdown);
    header.appendChild(banner);
    header.appendChild(reserve);

  
    // Lodash, currently included via a script, is required for this line to work
    header.innerHTML = _.join([dropdown.outerHTML, banner.outerHTML, reserve.outerHTML], ' ');
  
    return header;
  };


  export default createHeader