const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active class from all buttons
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
  }
});
