let profile = document.getElementById('maincont');
let profile1 = document.getElementById('log-1');
let profile2 = document.getElementById('log-2');
let navbar = document.getElementById('navbar');
let boysec = document.getElementById('boysec');
let girlsec = document.getElementById('girlsec');


profile1.addEventListener('click', ()=>{
    profile.style.display = 'none';
    navbar.style.display = 'flex';
    boysec.style.display = 'flex';
});
profile2.addEventListener('click', ()=>{
    profile.style.display = 'none';
    navbar.style.display = 'flex';
    girlsec.style.display = 'flex';
});



