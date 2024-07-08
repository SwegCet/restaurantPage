export function loadMenuPage() {
    //select content div
    const content = document.querySelector('#content');

    //create elements here
    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';

    const gyozaCard = document.createElement('div');
    gyozaCard.className = 'gyoza';
    //Create 2 child 1 of which is an image and the other is text
    const gyozaImage = document.createElement('img');
    gyozaImage.src = ''; //Fill in with path of image
    const gyozaDescription = document.createElement('p');
    gyozaDescription.textContent = 'Savory Japanese dumplings filled with seasoned meat and vegetables, pan-fried to perfection.'; //Fill in description

    const phoCard = document.createElement('div');
    phoCard.className = 'pho';
    //Create 2 child 1 of which is an image and the other is text
    const phoImage = document.createElement('img');
    phoImage.src = ''; //Fill in with path of image
    const phoDescription = document.createElement('p');
    phoDescription.textContent = 'Vietnamese noodle soup with aromatic broth, tender beef slices, fresh herbs, and rice noodles.'; //Fill in description

    const mapoTofuCard = document.createElement('div');
    mapoTofuCard.className = 'mapotofu';
    //Create 2 child 1 of which is an image and the other is text
    const mapoTofuImage = document.createElement('img');
    mapoTofuImage.src = ''; //Fill in with path of image
    const mapoTofuDescription = document.createElement('p');
    mapoTofuDescription.textContent = 'Spicy Sichuan dish featuring silky tofu in a rich, flavorful chili bean sauce with minced pork.'; //Fill in description

    const ramenCard = document.createElement('div');
    ramenCard.className = 'ramen';
    //Create 2 child 1 of which is an image and the other is text
    const ramenImage = document.createElement('img');
    ramenImage.src = ''; //Fill in with path of image
    const ramenDescription = document.createElement('p');
    ramenDescription.textContent = 'Hearty Japanese noodle soup with rich broth, tender meat, and assorted toppings like eggs and vegetables.'; //Fill in description

    const padThaiCard = document.createElement('div');
    padThaiCard.className = 'padthai';
    //Create 2 child 1 of which is an image and the other is text
    const padThaiImage = document.createElement('img');
    padThaiImage.src = ''; //Fill in with path of image
    const padThaiDescription = document.createElement('p');
    padThaiDescription.textContent = 'Classic Thai stir-fried rice noodles with shrimp or chicken, bean sprouts, peanuts, and a tangy sauce.'; //Fill in description

    const friedRiceCard = document.createElement('div');
    friedRiceCard.className = 'friedrice';
    //Create 2 child 1 of which is an image and the other is text
    const friedRiceImage = document.createElement('img');
    friedRiceImage.src = ''; //Fill in with path of image
    const friedRiceDescription = document.createElement('p');
    friedRiceDescription.textContent = 'Flavorful stir-fried rice with mixed vegetables, egg, and your choice of meat or tofu.'; //Fill in description

    //gyoza append
    gyozaCard.appendChild(gyozaImage);
    gyozaCard.appendChild(gyozaDescription);
    //pho append
    phoCard.appendChild(phoImage);
    phoCard.appendChild(phoDescription)
    //mapo Tofu append
    mapoTofuCard.appendChild(mapoTofuImage);
    mapoTofuCard.appendChild(mapoTofuDescription);
    //ramen append
    ramenCard.appendChild(ramenImage);
    ramenCard.appendChild(ramenDescription);
    //pad thai append
    padThaiCard.appendChild(padThaiImage);
    padThaiCard.appendChild(padThaiDescription);
    //fried rice append
    friedRiceCard.appendChild(friedRiceImage);
    friedRiceCard.appendChild(friedRiceDescription);
    //Append to menu grid
    menuGrid.appendChild(gyozaCard);
    menuGrid.appendChild(phoCard);
    menuGrid.appendChild(mapoTofuCard);
    menuGrid.appendChild(ramenCard);
    menuGrid.appendChild(padThaiCard);
    menuGrid.appendChild(friedRiceCard);
    //content.appendChild menu grid
    content.appendChild(menuGrid);
}
