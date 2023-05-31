//EXAMPLE OF EVENT LISTENER

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');


function showInfo(){
  moreInfo.style.display = 'block';
}

readMore.addEventListener('click',showInfo);


// EXAMPLE .onEvent (.onClick)
