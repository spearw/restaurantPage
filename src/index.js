import 'bootstrap';
import _ from 'lodash';
import createAbout from './about';
import createHeader from './header';
import createContact from './contact';
import createMenu from './createMenu';
import menu from './menu';




 
document.getElementById('content').appendChild(createHeader());
document.getElementById('content').appendChild(createAbout()); 

document.getElementById('homeButton').addEventListener('click', function(){
      
  document.getElementById('content').removeChild(document.getElementById('temp'));
  document.getElementById('content').appendChild(createAbout()); 


});


document.getElementById('contactButton').addEventListener('click', function(){
      
  document.getElementById('content').removeChild(document.getElementById('temp'));
  document.getElementById('content').appendChild(createContact()); 


});


document.getElementById('menuButton').addEventListener('click', function(){
      
  document.getElementById('content').removeChild(document.getElementById('temp'));
  document.getElementById('content').appendChild(createMenu(menu)); 


});

document.getElementById('reserve').addEventListener('click', function(){

  let reserveButton = document.getElementById('reserve');
  let alert = document.createElement('span');
  alert.innerHTML = "Sorry, no reservations available at this time"
  alert.className = "alert"
  reserveButton.appendChild(alert)
  var timeOut = setTimeout(function() {

    reserveButton.removeChild(alert);

}, 3000);
});