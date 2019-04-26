
const activeButton = (active) => {
  document.querySelector(active).classList.add('active');

  document.querySelector('.navigation__overview').addEventListener('mouseover', () => {
    document.querySelector(active).classList.remove('active');
  });
  document.querySelector('.navigation__overview').addEventListener('mouseout', () => {
    document.querySelector(active).classList.add('active');
  });

  document.querySelector('.navigation__statistics').addEventListener('mouseover', () => {
    document.querySelector(active).classList.remove('active');
  });
  document.querySelector('.navigation__statistics').addEventListener('mouseout', () => {
    document.querySelector(active).classList.add('active');
  });
};

activeButton('.navigation__addItem');
