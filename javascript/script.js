const gambar = document.querySelectorAll('.picc');
const kanan = document.querySelector('.panahkanan');
const kiri = document.querySelector('.panahkiri');

let gambaraktif = 0;

if (gambar) {
  gambar.forEach((pic, index) => {
    if (index === 0) {
      pic.setAttribute('data-show', 'show');
    } else {
      pic.setAttribute('data-show', 'hidden');
    }
  });

  kanan.addEventListener('click', () => {
    gambar.forEach((pic, index) => {
      if (gambaraktif === index) {
        pic.setAttribute('data-show', 'show');
      } else {
        pic.setAttribute('data-show', 'hidden');
      }
    });
    if (gambaraktif === gambar.length - 1) {
      gambaraktif = 0;
    } else {
      gambaraktif++;
    }
  });
}

kiri.addEventListener('click', () => {
  gambar.forEach((pic, index) => {
    if (gambaraktif === index) {
      pic.setAttribute('data-show', 'hidden');
    } else {
      pic.setAttribute('data-show', 'show');
    }
  });
  if (gambaraktif === gambar.length - 1) {
    gambaraktif = 0;
  } else {
    gambaraktif++;
  }
});
