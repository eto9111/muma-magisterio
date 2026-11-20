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

  // 3. Manejo de Video de MUMA (Carga local / Video Player interactivo)
  const videoInput = document.getElementById('local-video-file');
  const mainVideo = document.getElementById('muma-main-video');
  const videoOverlay = document.getElementById('video-placeholder-overlay');
  const playOverlayBtn = document.getElementById('btn-play-overlay');
  const videoStatusText = document.getElementById('video-status-msg');

  if (videoInput && mainVideo) {
    videoInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        mainVideo.src = fileUrl;
        mainVideo.load();
        if (videoOverlay) videoOverlay.style.display = 'none';
        if (videoStatusText) videoStatusText.textContent = `Reproduciendo archivo: ${file.name}`;
        mainVideo.play();
      }
    });
  }

  if (playOverlayBtn && mainVideo) {
    playOverlayBtn.addEventListener('click', () => {
      if (videoOverlay) videoOverlay.style.display = 'none';
      if (mainVideo.src) {
        mainVideo.play();
      } else {
        alert("¡Hola! Aquí puedes cargar tu video explicativo en formato MP4 o WebM usando el botón inferior 'Subir video local', o colocar el archivo en la carpeta 'assets/video/muma_explicativo.mp4'.");
      }
    });
  }

  // 4. Inicializar Módulos de Diapositivas y Simulador
  if (window.initSlides) {
    window.initSlides();
  }
  if (window.initSimulator) {
    window.initSimulator();
  }
});
