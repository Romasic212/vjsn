document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let headerOffset = header.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerOffset) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Блокируем стандартное поведение

        const targetId = this.getAttribute('href'); // Получаем href
        if (targetId) {
            const targetElement = document.querySelector(targetId); // Получаем нужный элемент
           if (targetElement) { // Проверяем существует ли элемент
             targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавно скроллим
           }
          }
      });
    });


   const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', function(event){
      event.preventDefault();
          const name = document.getElementById('review-name').value;
          const text = document.getElementById('review-text').value;

           if (name && text) {
             const reviewsSection = document.getElementById('reviews-section');

             // Создание нового элемента отзыва
             const reviewDiv = document.createElement('div');
              reviewDiv.className = 'review';
              reviewDiv.innerHTML = `<strong>${name}</strong><p>${text}</p>`;

             // Добавление нового отзыва в раздел отзывов
              reviewsSection.appendChild(reviewDiv);

             // Очистка полей ввода
                document.getElementById('review-name').value = '';
                document.getElementById('review-text').value = '';
          } else {
              alert('Пожалуйста, заполните все поля.');
          }
      });


    document.querySelectorAll('.service').forEach(item => {
      item.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      });
    });

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset(); // Сбросить форму после отправки
        });

        window.onscroll = function() {
            const button = document.getElementById('scrollToTop');
           
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        };

        document.getElementById('scrollToTop').onclick = function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
});
    
