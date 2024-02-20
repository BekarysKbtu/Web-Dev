let currentIndex1 = 0;
const iPhone15ProMaxImages = [
    "IMGForLab/iPhone15ProMax1.jpeg",
    "IMGForLab/iPhone15ProMax2.jpeg",
    "IMGForLab/iPhone15ProMax3.jpeg"
];

let currentIndex2 = 0;
const samsungS24Images = [
    "IMGForLab/samsungs241.jpeg",
    "IMGForLab/samsungs242.jpeg",
    "IMGForLab/samsungs243.jpeg"
];

let currentIndex3 = 0;
const googlePixel8Images = [
    "IMGForLab/pixel81.png",
    "IMGForLab/pixel82.png",
    "IMGForLab/pixel83.png"
];

let currentIndex4 = 0;
const samsungS24UltraImages = [
    "IMGForLab/samsungs24ultra1.jpeg",
    "IMGForLab/samsungs24ultra2.jpeg",
    "IMGForLab/samsungs24ultra3.jpeg"
];

let currentIndex5 = 0;
const googlePixel8ProImages = [
    "IMGForLab/pixel8pro1.jpeg",
    "IMGForLab/pixel8pro2.png",
    "IMGForLab/pixel8pro3.png"
];

let currentIndex6 = 0;
const iPhone15Images = [
    "IMGForLab/iPhone151.jpeg",
    "IMGForLab/iPhone152.jpeg",
    "IMGForLab/iPhone153.jpeg"
];

let currentIndex7 = 0;
const nothingPhoneImages = [
    "IMGForLab/nothingphone1.jpeg",
    "IMGForLab/nothingphone2.jpeg",
    "IMGForLab/nothingphone3.jpeg"
];

let currentIndex8 = 0;
const macBookAirImages = [
    "IMGForLab/macbookair1.jpeg",
    "IMGForLab/macbookair2.jpeg",
    "IMGForLab/macbookair3.jpeg"
];

let currentIndex9 = 0;
const macBookProImages = [
    "IMGForLab/macbookpro1.jpeg",
    "IMGForLab/macbookpro2.jpeg",
    "IMGForLab/macbookpro3.jpeg"
];

let currentIndex10 = 0;
const mateBookImages = [
    "IMGForLab/matebook1.jpeg",
    "IMGForLab/matebook2.jpeg",
    "IMGForLab/matebook3.jpeg"
];

let currentIndex11 = 0;
const lenovoImages = [
    "IMGForLab/lenovo1.jpeg",
    "IMGForLab/lenovo2.jpeg",
    "IMGForLab/lenovo3.jpeg"
];

function showImage(index, device) {
    let images, currentIndex, currentImage;
    // Здесь ошибка - нужно использовать строгое равенство ('===') вместо простого равенства ('==')
    // '===' более предпочтителен, так как он сравнивает и значения, и типы данных
    if (device === 'iphone15ProMax') {
        images = iPhone15ProMaxImages;
        currentIndex = currentIndex1;
        // Здесь ошибка - вы выбрали неправильный ID элемента
        // Вам нужно использовать 'currentImage1' вместо 'currentImage1'
        currentImage = document.getElementById('currentImage1');
    } else if (device === 'samsungS24') {
        images = samsungS24Images;
        currentIndex = currentIndex2;
        currentImage = document.getElementById('currentImage2');
    } else if (device === 'pixel8') {
        images = googlePixel8Images;
        currentIndex = currentIndex3;
        // Здесь ошибка - вы выбрали неправильный ID элемента
        // Вам нужно использовать 'currentImage3' вместо 'currentImage1'
        currentImage = document.getElementById('currentImage3');
    } else if (device === 'pixel8Pro') {
        images = googlePixel8ProImages;
        currentIndex = currentIndex4;
        currentImage = document.getElementById('currentImage4');
    }
    else if (device === 'samsungS24Ultra') {
        images = samsungS24UltraImages;
        currentIndex = currentIndex5;
        currentImage = document.getElementById('currentImage5');
    }
    else if (device === 'iphone15') {
        images = iPhone15Images;
        currentIndex = currentIndex6;
        currentImage = document.getElementById('currentImage6');
    } else if (device === 'nothing') {
        images = nothingPhoneImages;
        currentIndex = currentIndex7;
        currentImage = document.getElementById('currentImage7');
    } else if (device === 'macBookAir') {
        images = macBookAirImages;
        currentIndex = currentIndex8;
        currentImage = document.getElementById('currentImage8');
    } else if (device === 'macBookPro') {
        images = macBookProImages;
        currentIndex = currentIndex9;
        currentImage = document.getElementById('currentImage9');
    } else if (device === 'mateBook') {
        images = mateBookImages;
        currentIndex = currentIndex10;
        currentImage = document.getElementById('currentImage10');
    } else if (device === 'lenovo') {
        images = lenovoImages;
        currentIndex = currentIndex11;
        currentImage = document.getElementById('currentImage11');
    }



    if (index < 0) {
        index = images.length - 1; // Переключение на последнее изображение, если текущее - первое
    } else if (index >= images.length) {
        index = 0; // Переключение на первое изображение, если текущее - последнее
    }

    currentImage.src = images[index];
    if (device === 'iphone15ProMax') {
        currentIndex1 = index;
    } else if (device === 'samsungS24') {
        currentIndex2 = index;
    } else if (device === 'pixel8') {
        currentIndex3 = index;
    } else if (device === 'pixel8Pro') {
        currentIndex4 = index;
    } else if (device === 'samsungS24Ultra') {
        currentIndex5 = index;
    } else if (device === 'iphone15') {
        currentIndex6 = index;
    } else if (device === 'nothing') {
        currentIndex7 = index;
    } else if (device === 'macBookAir') {
        currentIndex8 = index;
    } else if (device === 'macBookPro') {
        currentIndex9= index;
    } else if (device === 'mateBook') {
        currentIndex10= index;
    } else if (device === 'mateBook') {
        currentIndex10= index;
    } else if (device === 'lenovo') {
        currentIndex11= index;
    }
}

function prevImage(device) {
    if (device === 'iphone15ProMax') {
        showImage(currentIndex1 - 1, 'iphone15ProMax');
    } else if (device === 'samsungS24') {
        showImage(currentIndex2 - 1, 'samsungS24');
    } else if (device === 'pixel8') {
        showImage(currentIndex3 - 1, 'pixel8');
    } else if (device === 'pixel8Pro') {
        showImage(currentIndex4 - 1, 'pixel8Pro');
    } else if (device === 'samsungS24Ultra') {
        showImage(currentIndex5 - 1, 'samsungS24Ultra');
    } else if (device === 'iphone15') {
        showImage(currentIndex6 - 1, 'iphone15');
    } else if (device === 'nothing') {
        showImage(currentIndex7 - 1, 'nothing');
    } else if (device === 'macBookAir') {
        showImage(currentIndex8 - 1, 'macBookAir');
    } else if (device === 'macBookPro') {
        showImage(currentIndex9 - 1, 'macBookPro');
    } else if (device === 'mateBook') {
        showImage(currentIndex10 - 1, 'mateBook');
    } else if (device === 'lenovo') {
        showImage(currentIndex11 - 1, 'lenovo');
    }

}

function nextImage(device) {
    if (device === 'iphone15ProMax') {
        showImage(currentIndex1 + 1, 'iphone15ProMax');
    } else if (device === 'samsungS24') {
        showImage(currentIndex2 + 1, 'samsungS24');
    } else if (device === 'pixel8') {
        showImage(currentIndex3 + 1, 'pixel8');
    } else if (device === 'pixel8Pro') {
        showImage(currentIndex4 + 1, 'pixel8Pro');
    } else if (device === 'samsungS24Ultra') {
        showImage(currentIndex5 + 1, 'samsungS24Ultra');
    } else if (device === 'iphone15') {
        showImage(currentIndex6 + 1, 'iphone15');
    } else if (device === 'nothing') {
        showImage(currentIndex7 + 1, 'nothing');
    } else if (device === 'macBookAir') {
        showImage(currentIndex8 + 1, 'macBookAir');
    } else if (device === 'macBookPro') {
        showImage(currentIndex9 + 1, 'macBookPro');
    } else if (device === 'mateBook') {
        showImage(currentIndex10 + 1, 'mateBook');
    } else if (device === 'lenovo') {
        showImage(currentIndex11 + 1, 'lenovo');
    }
}

// Показываем первое изображение каждого устройства при загрузке страницы
showImage(currentIndex1, 'iphone15ProMax');
showImage(currentIndex2, 'samsungS24');
showImage(currentIndex3, 'pixel8');
showImage(currentIndex4, 'pixel8Pro');
showImage(currentIndex5, 'samsungS24Ultra');
showImage(currentIndex6, 'iphone15');
showImage(currentIndex7, 'nothing');
showImage(currentIndex8, 'macBookAir');
showImage(currentIndex9, 'macBookPro');
showImage(currentIndex10, 'mateBook');
showImage(currentIndex11, 'lenovo');




