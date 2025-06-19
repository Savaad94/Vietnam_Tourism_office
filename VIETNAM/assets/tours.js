document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nature-grid [data-id]");
  const routes = document.querySelectorAll(".route-content");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const id = button.getAttribute("data-id");

      // Oculta todos los bloques de texto
      routes.forEach((route) => {
        route.style.display = "none";
      });

      // Muestra solo el que coincide con data-id
      const target = document.querySelector(`.route-content[data-id="${id}"]`);
      if (target) {
        target.style.display = "block";
      }
    });
  });

  // Por defecto, solo el primero visible
  routes.forEach((route, index) => {
    route.style.display = index === 0 ? "block" : "none";
  });
});
