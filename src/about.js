const createAbout = () => {

    let about = document.createElement('div')
    about.className = "about"
    about.id = "temp"

    let container = document.createElement('div')
    container.className = "container"

    let banner = document.createElement('div')
    banner.className = "sectionBanner";
    banner.innerHTML = "our story";

    let blurb = document.createElement('div')
    blurb.className = "sectionBlurb"
    blurb.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    container.appendChild(banner);
    container.appendChild(blurb);





    about.appendChild(container);

    about.innerHTML = _.join([container.outerHTML,], ' '); 

    return about

  };

  export default createAbout