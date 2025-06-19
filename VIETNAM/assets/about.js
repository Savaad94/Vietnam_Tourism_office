  function handlePlaceClick(id) {
    // Ocultar todas las cards
    const allCards = document.querySelectorAll('.places-to-go');
    allCards.forEach(card => {
      card.style.display = 'none';
    });

    // Mostrar la card que coincida con el ID
    const targetCard = document.querySelector(`.places-to-go[data-id="${id}"]`);
    if (targetCard) {
      targetCard.style.display = 'flex';
    }
  }


  function scrollCarousel(dir) {
  let c = document.getElementById("carousel");
  let carta = c.querySelector(".card");
  let ancho = carta.offsetWidth + 16; // margen o gap

  let max = c.scrollWidth - c.clientWidth;
  let actual = c.scrollLeft;

  if (dir === 1 && actual >= max) {
    c.scrollTo({ left: 0, behavior: 'smooth' }); // volver al inicio
  } else if (dir === -1 && actual <= 0) {
    c.scrollTo({ left: max, behavior: 'smooth' }); // ir al final
  } else {
    c.scrollBy({ left: dir * ancho, behavior: 'smooth' });
  }
}

  function handleHowToGetClick(id) {
    // Ocultar todos los contenedores
    const allSections = document.querySelectorAll('.howtoget-container');
    allSections.forEach(section => {
      section.style.display = 'none';
    });

    // Mostrar el contenedor que coincide con el ID
    const targetSection = document.querySelector(`.howtoget-container[data-id="${id}"]`);
    if (targetSection) {
      targetSection.style.display = 'flex';
    }
  }

  // Esperar al DOM para vincular los botones
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.howtoget-carrousel .card button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir el scroll de anclaje del form
        const card = button.closest('.card');
        const id = card.getAttribute('data-id');
        handleHowToGetClick(id);
      });
    });
  });
