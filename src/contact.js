const createContact = () => {

    let contact = document.createElement('div')
    contact.className = "contact"
    contact.id = "temp"

    let container = document.createElement('div')
    container.className = "container"

    let banner = document.createElement('div')
    banner.className = "sectionBanner";
    banner.innerHTML = "contact us";

    let email = document.createElement('div')
    email.className = "email"
    email.innerHTML = "info@juststeak.com"

    let address = document.createElement('div')
    address.className = "address"
    address.innerHTML = "9000 Somewhere Road, New York, NY, 10029"

    let number = document.createElement('div')
    number.className = "number"
    number.innerHTML = "555-0199"

    let hours = document.createElement('div')
    hours.className = "hours"
    hours.innerHTML = "Open Fri-Sun 4pm to 10pm"

    


    


    container.appendChild(banner);
    container.appendChild(email);
    container.appendChild(address);
    container.appendChild(number);
    container.appendChild(hours);





    contact.appendChild(container);

    contact.innerHTML = _.join([container.outerHTML,], ' '); 

    return contact

  };

  export default createContact;