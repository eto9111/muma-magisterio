/**
 * APLICACIÓN PRINCIPAL MUMA - CONTROLADOR DE VISTAS Y NAVEGACIÓN
 * Sustentación de Grado de Derecho · Universidad CESMAG
 * Sebastián Muñoz Martínez
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Manejo de Pestañas (Tab Navigation)
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchTab(targetTabId, smoothFocusNav = true) {
    if (!targetTabId) return;

    // Actualizar botones
    tabButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === targetTabId;
      btn.classList.toggle('active', isTarget);
      if (isTarget) {
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.setAttribute('aria-selected', 'false');
      }
    });

    // Actualizar paneles
    tabPanes.forEach(pane => {
      const isTarget = pane.id === targetTabId;
      pane.classList.toggle('active', isTarget);
    });

    // Actualizar URL hash sin salto brusco
    history.replaceState(null, null, `#${targetTabId}`);

    // No subir a la presentación inicial (Hero/Header).
    // Posicionar la vista directamente en el contenido de la pestaña bajo la barra de navegación
    const navEl = document.getElementById('main-navigation');
    if (navEl && smoothFocusNav) {
      const navTop = navEl.getBoundingClientRect().top + window.pageYOffset;
      // Si el usuario ya está interactuando o está por debajo del inicio, enfocar en el contenido
      if (window.pageYOffset > 80 || window.pageYOffset > navTop) {
        window.scrollTo({
          top: navTop,
          behavior: 'smooth'
        });
      }
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-tab');
      switchTab(targetId, true);
    });
  });

  // Enlaces directos dentro del contenido que apuntan a pestañas
  document.querySelectorAll('[data-switch-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-switch-tab');
      switchTab(target, true);
    });
  });

  // Manejo de Hash inicial en la URL
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    switchTab(initialHash, false);
  } else {
    switchTab('tab-inicio', false);
  }

  // 2. Acordeón para Capítulos del Trabajo de Grado
  const chapterHeaders = document.querySelectorAll('.chapter-header-btn');
  chapterHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.chapter-accordion-item');
      const body = parent.querySelector('.chapter-body-content');
      const isOpen = header.classList.contains('active');

      // Opcional: cerrar los demás o permitir múltiples abiertos
      chapterHeaders.forEach(h => {
        h.classList.remove('active');
        const b = h.closest('.chapter-accordion-item').querySelector('.chapter-body-content');
        if (b) b.classList.remove('active');
      });

      if (!isOpen) {
        header.classList.add('active');
        if (body) body.classList.add('active');
      }
    });
  });

  // 3. Manejo de Modales (QR de Encuesta y Poster Lightbox)
  function setupModal(triggerId, modalId, closeClass) {
    const triggers = document.querySelectorAll(triggerId);
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const closeBtns = modal.querySelectorAll(`.${closeClass}`);

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Cerrar con Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  setupModal('#btn-open-qr-modal, [data-open-qr-modal]', 'academic-qr-modal', 'modal-close-btn');
  setupModal('#btn-open-poster-modal, [data-open-poster-modal]', 'academic-poster-modal', 'modal-close-btn');

  // 4. Inicializar Módulos de Diapositivas y Simulador
  if (window.initSlides) {
    window.initSlides();
  }
  if (window.initSimulator) {
    window.initSimulator();
  }
});
