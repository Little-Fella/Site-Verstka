document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.service-btn');
    const contents = document.querySelectorAll('.service-content');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок и контента
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Показываем соответствующий контент
            const serviceId = this.getAttribute('data-service');
            document.getElementById(serviceId).classList.add('active');
        });
    });
});

// Добавляем этот скрипт для работы гамбургер-меню
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.header-menu');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
  });
  
  // Остальные скрипты без изменений
  const buttons = document.querySelectorAll('.service-btn');
  const contents = document.querySelectorAll('.service-content');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
      
      this.classList.add('active');
      const serviceId = this.getAttribute('data-service');
      document.getElementById(serviceId).classList.add('active');
    });
  });
});

document.querySelectorAll('.ans').forEach(button => {
button.addEventListener('click', function() {
this.classList.toggle('active');
const answer = this.closest('.qq-card').querySelector('.ans-content');
answer.classList.toggle('active');

// Закрытие других открытых ответов (опционально)
if (this.classList.contains('active')) {
  document.querySelectorAll('.ans').forEach(otherBtn => {
    if (otherBtn !== this && otherBtn.classList.contains('active')) {
      otherBtn.classList.remove('active');
      otherBtn.closest('.qq-card').querySelector('.ans-content').classList.remove('active');
    }
  });
}
});
});
