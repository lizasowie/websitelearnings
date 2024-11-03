const images = {
    italien: [
        'images/Italy1.jpg',
        'images/Italy2.jpg',
        'images/Italy3.jpg'
    ],
    schweiz: [
        'images/Swiss1.jpg',
        'images/Swiss2.jpg',
        'images/Swiss3.jpg',
        'images/Swiss4.jpg'
    ],
    daenemark: [
        'https://example.com/daenemark1.jpg',
        'https://example.com/daenemark2.jpg',
        'https://example.com/daenemark3.jpg'
    ]
};

function showImages(country) {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = ''; // Vorherige Bilder löschen

    images[country].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = country;
        gallery.appendChild(img);
    });
}

let currentIndex = 0; // Aktueller Index des angezeigten Bildes
let currentCountry = 'italien'; // Standardmäßig auf Italien setzen

function showImages(country) {
    currentCountry = country; // Setze das aktuelle Land
    currentIndex = 0; // Setze den Index zurück
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = ''; // Vorherige Bilder löschen

    // Zeige das erste Bild an
    const img = document.createElement('img');
    img.id = 'current-image'; // Setze die ID für das Bild
    img.src = images[country][currentIndex]; // Setze das src-Attribut des Bildes
    img.alt = country; // Setze den Alt-Text
    gallery.appendChild(img);
}

function changeImage(direction) {
    const imagesArray = images[currentCountry]; // Hole die Bilder des aktuellen Landes
    currentIndex += direction; // Ändere den Index basierend auf der Richtung

    // Überprüfe, ob der Index innerhalb der Grenzen liegt
    if (currentIndex < 0) {
        currentIndex = imagesArray.length - 1; // Gehe zum letzten Bild
    } else if (currentIndex >= imagesArray.length) {
        currentIndex = 0; // Gehe zum ersten Bild
    }

    // Aktualisiere das Bild
    const currentImage = document.getElementById('current-image');
    currentImage.src = imagesArray[currentIndex]; // Setze das neue Bild
    currentImage.alt = currentCountry; // Setze den Alt-Text
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        this.textContent = 'Lightmode'; // Text für Dunkelmodus
    } else {
        this.textContent = 'Darkmode'; // Text für Lichtmodus
    }
});
