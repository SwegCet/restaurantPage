export function loadAboutPage() {
    //select content div
    const content = document.querySelector('#content');

    //create about us section
    const header = document.createElement('h1');
    header.textContent = 'About Us';

    const aboutUsCard = document.createElement('div');
    aboutUsCard.className = 'aboutUs-card';
    const aboutUs = document.createElement('div');
    aboutUs.className = 'aboutUs';
    aboutUs.textContent = `Kokpan Ramen Bar is an Asian fusion restaurant located in the heart of the San Francisco Bay Area,
                dedicated to bringing you a unique culinary experience. Our diverse menu offers a delightful mix of
                traditional and modern Asian dishes, including savory Gyoza, aromatic Pho, hearty Ramen, spicy Mapo
                Tofu, flavorful Fried Rice, and classic Pad Thai. At Kokpan Ramen Bar, we pride ourselves on using
                fresh, high-quality ingredients to create dishes that are not only delicious but also visually stunning.
                Join us for an unforgettable dining experience that celebrates the rich flavors and vibrant cultures of
                Asia.`
    //create location section
    const locationCard = document.createElement('div');
    locationCard.className = 'location-card';
    const location = document.createElement('div');
    location.className = 'location';
    location.textContent = 'Located at : 123 Fusion Street, San Francisco, CA 94105'

    //create contact section
    const contactCard = document.createElement('div');
    contactCard.className = 'contact-card';

    const email = document.createElement('div');
    email.className = 'email';
    email.textContent = 'Email: info@kokpanramenbar.com';

    const phoneNumber = document.createElement('div');
    phoneNumber.className = 'phoneNumber';
    phoneNumber.textContent = 'Phone: (415) 555-7890'

    //append child the sections
    aboutUsCard.appendChild(aboutUs);

    locationCard.appendChild(location);

    contactCard.appendChild(email);
    contactCard.appendChild(phoneNumber);
    //append content
    content.appendChild(header);
    content.appendChild(aboutUsCard);
    content.appendChild(locationCard);
    content.appendChild(contactCard);
}