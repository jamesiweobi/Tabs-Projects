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
    // Hide all articles but display the one with matching ID
    articles.forEach((article) => {
      article.classList.remove('active');
    });
    // using the variable ID, we search the DOM for the matching elemnt and then add the active class to the class list! the element in the DOM has matching ID ad the dataset!
    document.getElementById(id).classList.add('active');
  }
});
