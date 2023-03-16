const mobileMenu = document.querySelector('.hamburger');
const mobilePop = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

mobileMenu.addEventListener('click', () => {
  mobilePop.classList.remove('show');
});

closeBtn.addEventListener('click', () => {
  mobilePop.classList.add('show');
});

const artist = [
  {
    name: 'Sarkodie',
    achievement: 'Sarkodie is a Ghanaian rapper and musician who has achieved international awards for his music',
    accolades: 'He was the first rapper from Africa to win the BET Best International Flow award in 2019.',
    img: 'img/speakers/sark.png',
  },
  {
    name: 'Kwesi Arthur',
    achievement: 'Kwesi Arthur is a Ghanaian rapper and musician who gained recognition with his hit song "Grind Day"',
    accolades: 'Experience the electrifying beats of rising Ghanaian star, Kwesi Arthur, at Afrochella 2023.',
    img: 'img/speakers/kwesi.png',
  },
  {
    name: 'Wizkid',
    achievement: 'Best overall artist for the year 2022',
    accolades: 'Join us at Afrochella to experience the electrifying sound and dynamic stage presence of Wizkid, the Nigerian superstar taking the Afrobeats world by storm.',
    img: 'img/speakers/wiz.png',
  },
  {
    name: 'Black Sheriff',
    achievement: 'Released his debut album that topped the charts for several weeks.',
    accolades: 'Get ready to vibe to the soulful tunes of Ghanaian artist, Black Sherif, as he takes the stage at Afrochella 2023.',
    img: 'img/speakers/black.png',
  },
  {
    name: 'Rema',
    achievement: 'Currently has the most streamed song on YouTube',
    accolades: 'Experience the dynamic and infectious sounds of Nigerian superstar, Rema, as he takes the stage at Afrochella 2023.',
    img: 'img/speakers/rema.png',
  },
  {
    name: 'Tems',
    achievement: 'Number three on most streamed African artist on Spotify',
    accolades: 'Experience the raw and soulful vocals of Nigerian sensation, Tems, as she takes Afrochella 2023',
    img: 'img/speakers/tems.png',
  },
];

const container = document.querySelector('#data-display');
const moreBtn = document.querySelector('#more');
const lessBtn = document.querySelector('#less');

function createItemElement(item) {
  const itemElement = document.createElement('div');
  itemElement.classList.add('item');
  itemElement.innerHTML = `
  <div class="d-flex align-items-center gap-3 mb-4">
      <img src="${item.img}" alt="sark">
        <div>
          <p class="speaker">${item.name}</p>
          <p class="speaker-des mt-1">${item.achievement}</p>
          <p class="speak-line mt-2"></p>
          <p class="speaker-achievement mt-3">${item.accolades}</p>
        </div>
     </div>
  `;
  return itemElement;
}

function displayItems() {
  container.innerHTML = '';
  artist.forEach((item) => {
    container.appendChild(createItemElement(item));
  });
}

function displayTwoItems() {
  container.innerHTML = '';
  artist.slice(0, 2).forEach((item) => {
    container.appendChild(createItemElement(item));
  });
}

function init() {
  if (window.innerWidth < 768) {
    displayTwoItems();
  } else {
    displayItems();
  }

  moreBtn.addEventListener('click', () => {
    displayItems();
    moreBtn.classList.add('d-none');
    lessBtn.classList.remove('d-none');
  });

  lessBtn.addEventListener('click', () => {
    displayTwoItems();
    lessBtn.classList.add('d-none');
    moreBtn.classList.remove('d-none');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      displayTwoItems();
    } else {
      displayItems();
    }
  });
}

init();