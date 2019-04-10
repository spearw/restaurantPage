import menu from './menu';

const createMenu = (menu) => {

   
  console.log(menu)

    let menuContainer = document.createElement('div')
    menuContainer.className = "menu"
    menuContainer.id = "temp"

    let container = document.createElement('div')
    container.className = "container"

    let banner = document.createElement('div')
    banner.className = "sectionBanner";
    banner.innerHTML = "menu";

    let blurb = document.createElement('div')
    blurb.className = "sectionBlurb"

    let menulist = ["starters", "entries", "desserts"]

    for (var i = 0; i<menu.length; i++){
      let categoryWrapper = document.createElement('div');
      categoryWrapper.className = "categoryWrapper"

      let categoryBanner = document.createElement('div');
      categoryBanner.className = "categoryBanner"
      categoryBanner.innerHTML = menulist[i]
      
      let categoryContainer = document.createElement('div');
      categoryContainer.className = "categoryContainer"

      for (var l = 0; l<menu[i].length; l++){
        
        let item = document.createElement('div');
        item.className = "foodItem";
        for (var key in menu[i][l]){
          let attribute = document.createElement('span');
          attribute.className = key;
          attribute.innerHTML = menu[i][l][key];
          item.appendChild(attribute);
        }
        categoryContainer.appendChild(item);
        
      }


      categoryWrapper.appendChild(categoryBanner);
      categoryWrapper.appendChild(categoryContainer)
      blurb.appendChild(categoryWrapper);
    }
    
    
    //let items = document.createElement('div');
    //items.className = "items"
    //items.innerHTML = "<span>beef</span><span>beef</span>"

    

    

    container.appendChild(banner);
    container.appendChild(blurb);





    menuContainer.appendChild(container);

    menuContainer.innerHTML = _.join([container.outerHTML,], ' '); 

    return menuContainer

  };

  export default createMenu;