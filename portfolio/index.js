let navList=document.querySelectorAll('.nav .nav-pages .list');



navList.forEach(clickedBtn => {
    clickedBtn.addEventListener('click' , () => {
        navList.forEach(el => {
            el.classList.remove('active');
        });
        clickedBtn.classList.add('active');

    });

});

function toggleContact() {
    const contactList = document.getElementById('contactList');
    const contactText = document.getElementById('contactText');
    const con = document.getElementsByClassName('con')[0]; // Get the first element in the collection

    if (contactList.style.display === 'none' || contactList.style.display === '') {
        contactList.style.display = 'block';
        contactText.textContent = 'X';
        contactText.style.width = '50px'; // Optional: Adjust width for the 'X' text

        con.style.transform = 'rotate(0deg)';
        con.style.left="0px"; 
        con.style.borderRadius="0px";
        con.style.borderBottomRightRadius="8px";
        con.style.borderTopRightRadius="8px";

    } else {
        contactList.style.display = 'none';
        contactText.textContent = 'CONTACT';
        contactText.style.width = '100px'; // Optional: Adjust width for the 'CONTACT' text

        con.style.transform = 'rotate(270deg)';
        con.style.left="-30px"; // Reset the rotation to 0 degrees
        con.style.borderRadius="8px";
    }
}




