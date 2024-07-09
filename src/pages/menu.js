export function loadMenuPage() {
    //select content div
    const content = document.querySelector('#content');

    //create elements here
    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';

    const gyozaCard = document.createElement('div');
    gyozaCard.className = 'gyoza';
    //Create 4 child 1 of which is an image and the other is text
    const gyozaName = document.createElement('div');
    gyozaName.textContent = 'Gyoza';
    gyozaName.className = 'name';
    const gyozaImage = document.createElement('img');
    gyozaImage.src = ''; //Fill in with path of image
    const gyozaDescription = document.createElement('div');
    gyozaDescription.className = 'description';
    gyozaDescription.textContent = 'Savory Japanese dumplings filled with seasoned meat and vegetables, pan-fried to perfection.'; //Fill in description
    //Add price tag
    const gyozaPrice = document.createElement('div');
    gyozaPrice.className = 'price';
    gyozaPrice.textContent = '$8.99';

    const phoCard = document.createElement('div');
    phoCard.className = 'pho';
    //Create 4 child 1 of which is an image and the other is text
    const phoName = document.createElement('div');
    phoName.textContent = 'Pho';
    phoName.className = 'name';
    const phoImage = document.createElement('img');
    phoImage.src = ''; //Fill in with path of image
    const phoDescription = document.createElement('div');
    phoDescription.className = 'description';
    phoDescription.textContent = 'Vietnamese noodle soup with aromatic broth, tender beef slices, fresh herbs, and rice noodles.'; //Fill in description
    //Add price tag
    const phoPrice = document.createElement('div');
    phoPrice.className = 'price';
    phoPrice.textContent = '$12.99';

    const mapoTofuCard = document.createElement('div');
    mapoTofuCard.className = 'mapotofu';
    //Create 4 child 1 of which is an image and the other is text
    const mapoTofuName = document.createElement('div');
    mapoTofuName.textContent = 'Mapo Tofu';
    mapoTofuName.className = 'name';
    const mapoTofuImage = document.createElement('img');
    mapoTofuImage.src = ''; //Fill in with path of image
    const mapoTofuDescription = document.createElement('div');
    mapoTofuDescription.className = 'description';
    mapoTofuDescription.textContent = 'Spicy Sichuan dish featuring silky tofu in a rich, flavorful chili bean sauce with minced pork.'; //Fill in description
    //Add price tag
    const mapoTofuPrice = document.createElement('div');
    mapoTofuPrice.className = 'price';
    mapoTofuPrice.textContent = '$10.99';

    const ramenCard = document.createElement('div');
    ramenCard.className = 'ramen';
    //Create 4 child 1 of which is an image and the other is text
    const ramenName = document.createElement('div');
    ramenName.textContent = 'Ramen';
    ramenName.className = 'name';
    const ramenImage = document.createElement('img');
    ramenImage.src = ''; //Fill in with path of image
    const ramenDescription = document.createElement('div');
    ramenDescription.className = 'description';
    ramenDescription.textContent = 'Hearty Japanese noodle soup with rich broth, tender meat, and assorted toppings like eggs and vegetables.'; //Fill in description
    //Add price tag
    const ramenPrice = document.createElement('div');
    ramenPrice.className = 'price';
    ramenPrice.textContent = '$14.99';

    const padThaiCard = document.createElement('div');
    padThaiCard.className = 'padthai';
    //Create 4 child 1 of which is an image and the other is text
    const padThaiName = document.createElement('div');
    padThaiName.textContent = 'Pad Thai';
    padThaiName.className = 'name';
    const padThaiImage = document.createElement('img');
    padThaiImage.src = ''; //Fill in with path of image
    const padThaiDescription = document.createElement('div');
    padThaiDescription.className = 'description';
    padThaiDescription.textContent = 'Classic Thai stir-fried rice noodles with shrimp or chicken, bean sprouts, peanuts, and a tangy sauce.'; //Fill in description
    //Add price tag
    const padThaiPrice = document.createElement('div');
    padThaiPrice.className = 'price';
    padThaiPrice.textContent = '$12.99';

    const friedRiceCard = document.createElement('div');
    friedRiceCard.className = 'friedrice';
    //Create 4 child 1 of which is an image and the other is text
    const friedRiceName = document.createElement('div');
    friedRiceName.textContent = 'Fried Rice';
    friedRiceName.className = 'name';
    const friedRiceImage = document.createElement('img');
    friedRiceImage.src = ''; //Fill in with path of image
    const friedRiceDescription = document.createElement('div');
    friedRiceDescription.className = 'description';
    friedRiceDescription.textContent = 'Flavorful stir-fried rice with mixed vegetables, egg, and your choice of meat or tofu.'; //Fill in description
    //Add price tag
    const friedRicePrice = document.createElement('div');
    friedRicePrice.className = 'price';
    friedRicePrice.textContent = '$9.99';

    //gyoza append
    gyozaCard.appendChild(gyozaName);
    gyozaCard.appendChild(gyozaImage);
    gyozaCard.appendChild(gyozaDescription);
    gyozaCard.appendChild(gyozaPrice)
    //pho append
    phoCard.appendChild(phoName);
    phoCard.appendChild(phoImage);
    phoCard.appendChild(phoDescription)
    phoCard.appendChild(phoPrice)
    //mapo Tofu append
    mapoTofuCard.appendChild(mapoTofuName);
    mapoTofuCard.appendChild(mapoTofuImage);
    mapoTofuCard.appendChild(mapoTofuDescription);
    mapoTofuCard.appendChild(mapoTofuPrice)
    //ramen append
    ramenCard.appendChild(ramenName);
    ramenCard.appendChild(ramenImage);
    ramenCard.appendChild(ramenDescription);
    ramenCard.appendChild(ramenPrice)
    //pad thai append
    padThaiCard.appendChild(padThaiName);
    padThaiCard.appendChild(padThaiImage);
    padThaiCard.appendChild(padThaiDescription);
    padThaiCard.appendChild(padThaiPrice)
    //fried rice append
    friedRiceCard.appendChild(friedRiceName);
    friedRiceCard.appendChild(friedRiceImage);
    friedRiceCard.appendChild(friedRiceDescription);
    friedRiceCard.appendChild(friedRicePrice);
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
