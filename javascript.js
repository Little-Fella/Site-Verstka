document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".service-btn");
  const contents = document.querySelectorAll(".service-content");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Удаляем активный класс у всех кнопок и контента
      buttons.forEach((btn) => btn.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Добавляем активный класс текущей кнопке
      this.classList.add("active");

      // Показываем соответствующий контент
      const serviceId = this.getAttribute("data-service");
      document.getElementById(serviceId).classList.add("active");
    });
  });
});

// Добавляем этот скрипт для работы гамбургер-меню
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header-menu");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Остальные скрипты без изменений
  const buttons = document.querySelectorAll(".service-btn");
  const contents = document.querySelectorAll(".service-content");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");
      const serviceId = this.getAttribute("data-service");
      document.getElementById(serviceId).classList.add("active");
    });
  });
});

document.querySelectorAll(".ans").forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const answer = this.closest(".qq-card").querySelector(".ans-content");
    answer.classList.toggle("active");

    // Закрытие других открытых ответов (опционально)
    if (this.classList.contains("active")) {
      document.querySelectorAll(".ans").forEach((otherBtn) => {
        if (otherBtn !== this && otherBtn.classList.contains("active")) {
          otherBtn.classList.remove("active");
          otherBtn
            .closest(".qq-card")
            .querySelector(".ans-content")
            .classList.remove("active");
        }
      });
    }
  });
});

const modelViewer = document.querySelector("#tooth-model");
const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".hotspot").forEach((hotspot) => {
  // Наведение — показать подсказку
  hotspot.addEventListener("mouseenter", () => {
    tooltip.textContent = hotspot.dataset.info;
    tooltip.style.display = "block";
  });

  // Уход мыши — скрыть подсказку
  hotspot.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});

// Следим за движением мыши, чтобы tooltip следовал
document.addEventListener("mousemove", (e) => {
  tooltip.style.left = `${e.clientX + 15}px`;
  tooltip.style.top = `${e.clientY + 15}px`;
});

// Остановка автоповорота при взаимодействии
let autoRotateTimeout;
modelViewer.addEventListener("mousedown", () => {
  modelViewer.autoRotate = false;
  clearTimeout(autoRotateTimeout);
});

modelViewer.addEventListener("mouseup", () => {
  autoRotateTimeout = setTimeout(() => {
    modelViewer.autoRotate = true;
  }, 3000);
});

// Слайдер до/после
const sliderContainer = document.querySelector('.slider-container');
const afterImage = document.getElementById('after');
const handle = document.querySelector('.slider-handle');

let isDragging = false;

handle.addEventListener('mousedown', () => {
  isDragging = true;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const rect = sliderContainer.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;
  offsetX = Math.max(0, Math.min(offsetX, rect.width));

  const percentage = (offsetX / rect.width) * 100;
  handle.style.left = `${percentage}%`;
  afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
});
