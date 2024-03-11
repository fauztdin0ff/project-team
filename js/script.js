//-----------------Языковая панель---------------------------
const sliderLang = document.querySelector('.slider-languages');
const toggleLang = document.getElementById('toggleLanguages');

toggleLang.addEventListener('change', function () {
   const isChecked = toggleLang.checked;

   if (isChecked) {
      sliderLang.classList.add('right');
      sliderLang.classList.remove('left');
   } else {
      sliderLang.classList.add('left');
      sliderLang.classList.remove('right');
   }
});

//-----------------Ночная/Дневная тема---------------------------
const slider = document.querySelector('.slider-theme');
const toggle = document.getElementById('toggleTheme');

toggle.addEventListener('change', function () {
   document.body.classList.toggle('dark-theme');
   const isChecked = toggle.checked;

   if (isChecked) {
      slider.classList.add('right');
      slider.classList.remove('left');
   } else {
      slider.classList.add('left');
      slider.classList.remove('right');
   }
});



/*--------------------------------------------ОТЗЫВЫ ПОПАП---------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButton = document.getElementById("open-popup");
   const popup = document.getElementById("popup");
   const closeButton = document.querySelector(".close-popup");

   if (openButton && popup && closeButton) {
      openButton.addEventListener("click", function () {
         popup.classList.add("show");
         document.body.classList.add("_popup");
      });

      closeButton.addEventListener("click", function () {
         popup.classList.remove("show");
         document.body.classList.remove("_popup");
      });

      // Закрытие попапа при клике вне формы
      window.addEventListener("click", function (event) {
         if (event.target === popup) {
            popup.classList.remove("show");
            document.body.classList.remove("_popup");
         }
      });
   }
});

/*--------------------------------------------Отображение поиска на мобилке---------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   document.querySelector('.open-search').addEventListener('click', function () {
      document.querySelector('.header__search').classList.toggle('show');
   });
});

/*--------------------------------------------Перенос навигации---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   var navigation = document.querySelector('.navigation');
   var answerContainer = document.querySelector('.answer-content');

   if (navigation && answerContainer) {
      function checkResolution() {
         var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

         if (screenWidth < 1100) {
            answerContainer.appendChild(navigation);
         } else {
            // Возможно, здесь нужно предусмотреть обратное действие, если разрешение снова становится больше 1100px
         }
      }

      checkResolution();
      window.addEventListener('resize', checkResolution);
   }
});


/*--------------------------------------------NAVIGATION---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const title = document.querySelector('.navigation__title');
   const icon = document.querySelector('.navigation__title svg');
   const list = document.querySelector('.navigation__list');

   if (title && icon && list) {
      // Добавляем обработчик клика
      title.addEventListener('click', function () {
         // Поворачиваем иконку, добавляя/удаляя класс rotate
         icon.classList.toggle('rotate');

         // Добавляем/удаляем класс active для списка
         list.classList.toggle('active');
      });
   }
});

/*--------------------------------------------SIDEBAR---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   var menuIcon = document.querySelector('.menu__icon');
   var sidebar = document.querySelector('.sidebar');
   var body = document.querySelector('body');

   if (menuIcon && sidebar && body) {
      menuIcon.addEventListener('click', function (event) {
         sidebar.classList.toggle('open');
         menuIcon.classList.toggle('active');
         body.classList.toggle('sidebar-open'); // Добавление/удаление класса к body при открытии/закрытии сайдбара
         event.stopPropagation();
      });

      document.addEventListener('click', function (event) {
         if (!sidebar.contains(event.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            menuIcon.classList.remove('active');
            body.classList.remove('sidebar-open'); // Удаление класса при закрытии сайдбара
         }
      });
   }
});

/*--------------------------------------------Выпадающий список в SIDEBAR---------------------------------------------*/
const buttons = document.querySelectorAll('.sidebar-arrow');
buttons.forEach(button => {
   button.addEventListener('click', function () {
      const submenu = this.parentElement.nextElementSibling;
      if (submenu) {
         submenu.classList.toggle('show');
         this.classList.toggle('active');
      } else {
         this.classList.toggle('empty');
      }
   });
});
