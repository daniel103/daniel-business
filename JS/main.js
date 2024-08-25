/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================================= sticky navbar ===================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================= remove toggle icon and navbar ===================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================= scroll reveal ===================================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*================================= form value send gmail ===================================*/

const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

function sendEmail(e) {
    const bodyMessage =   `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`

    e.preventDefault();

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "danl3654321@gmail.com",
        Password : "CE408F29370096BAD9BE326B43F0D0B35336",
        To : "danl3654321@gmail.com",
        From : email.value,
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );

    return true;
}


