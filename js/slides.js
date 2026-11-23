/**
 * CONTROLADOR DE DIAPOSITIVAS INTERACTIVAS PARA SUSTENTACIÓN DE GRADO
 * Autor: Sebastián Muñoz Martínez (MUMA)
 * Facultad de Ciencias Sociales y Humanas - Programa de Derecho - Universidad CESMAG
 */

(function () {
  'use strict';

  const slidesData = [
    {
      num: 1,
      tag: "Portada Oficial · Sustentación de Grado",
      title: "Desmejora y Precarización Laboral en el Magisterio de Pasto (2002–2026)",
      body: `
        <div style="font-size:1.15rem; line-height:1.7; margin-bottom:1.5rem;">
          <p><strong>Trabajo de Grado:</strong> Un análisis sociojurídico de la dualidad estatutaria entre los <strong>Decretos 2277 de 1979</strong> y <strong>1278 de 2002</strong>, y la fragmentación con el <strong>Decreto 0934 de 2026 (SEIP)</strong>.</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:1.5rem; background:#f8fafc; padding:1.25rem; border-radius:8px; border:1px solid #e2e8f0;">
            <div>
              <p style="margin:0; font-size:0.85rem; color:#64748b;">SUSTENTANTE / INVESTIGADOR:</p>
              <p style="margin:0; font-size:1.05rem; font-weight:700; color:#0e213b;">Sebastián Muñoz Martínez (MUMA)</p>
              <p style="margin:0; font-size:0.85rem; color:#475569;">Programa de Derecho · Universidad CESMAG</p>
            </div>
            <div>
              <p style="margin:0; font-size:0.85rem; color:#64748b;">DOCENTE ACOMPAÑANTE / DIRECTORA:</p>
              <p style="margin:0; font-size:1.05rem; font-weight:700; color:#0e213b;">Mg. MARIA ALICIA ORDONEZ HERRERA</p>
              <p style="margin:0; font-size:0.85rem; color:#475569;">Grupo de Investigación DIDS · Universidad CESMAG</p>
            </div>
          </div>
        </div>
      `,
      notes: "Saludar cordialmente al jurado examinador y a la docente asesora. Presentar el propósito central del trabajo: demostrar con rigor dogmático y empírico que la dualidad estatutaria docente en Colombia no fue una simple modernización meritocrática, sino una reforma de ajuste fiscal que precarizó los derechos de salud y retiro de los maestros en Pasto y Nariño."
    },
    {
      num: 2,
      tag: "Problema de Investigación · El Contexto Territorial",
      title: "La Ruptura del Estatuto Único Docente",
      body: `
        <p>¿De qué manera la coexistencia de los Decretos 2277 de 1979 y 1278 de 2002 ha generado una desmejora o precarización de los derechos sustantivos de los docentes oficiales en Pasto durante 2002–2026?</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem; margin-top:1.25rem;">
          <div style="background:#fff; border-left:4px solid #1b4975; padding:1rem; border-radius:6px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
            <strong style="color:#0e213b;">Dualidad en una misma aula</strong>
            <p style="font-size:0.88rem; margin:0.4rem 0 0 0; color:#64748b;">Dos docentes con igual carga horaria, mismos alumnos e idénticos riesgos laborales gozan de regímenes pensionales y garantías sustancialmente opuestas.</p>
          </div>
          <div style="background:#fff; border-left:4px solid #c59b27; padding:1rem; border-radius:6px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
            <strong style="color:#0e213b;">Vulnerabilidad en Nariño y Pasto</strong>
            <p style="font-size:0.88rem; margin:0.4rem 0 0 0; color:#64748b;">Pasto concentra la mayor planta docente oficial (62% bajo el D. 1278), en un departamento con altos índices de pobreza multidimensional y dispersión geográfica.</p>
          </div>
          <div style="background:#fff; border-left:4px solid #0d827d; padding:1rem; border-radius:6px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
            <strong style="color:#0e213b;">Tercer régimen: Decreto 0934/2026</strong>
            <p style="font-size:0.88rem; margin:0.4rem 0 0 0; color:#64748b;">La creación del SEIP introduce dinamizadores pedagógicos en resguardos indígenas (Pastos, Awá), complejizando la fragmentación laboral.</p>
          </div>
        </div>
      `,
      notes: "Resaltar que en una misma institución de Pasto (ej. INEM o Ciudad de Pasto), un docente del 2277 y uno del 1278 enseñan lo mismo, pero el del 1278 necesitará 7 años más para jubilarse, perdiendo más del 30% del valor de su mesada pensional."
    },
    {
      num: 3,
      tag: "Decreto 2277 de 1979 · Estatuto Docente Histórico",
      title: "El Pacto Social y la Protección Integral",
      body: `
        <p>Fruto de décadas de movilización sindical liderada por <strong>FECODE</strong>, se concibió bajo la premisa de que la calidad educativa requiere estabilidad, autonomía y retiro digno.</p>
        <ul style="margin:1rem 0 1rem 1.5rem; line-height:1.8; color:#334155;">
          <li><strong>Perfil y Origen:</strong> Reconocimiento de Normalistas Superiores y Licenciados en Pedagogía. Ascenso por antigüedad, experiencia acumulada y títulos (grados 1 al 14).</li>
          <li><strong>Régimen Pensional Favorable:</strong> Jubilación a los <strong>55 años de edad</strong> (hombres y mujeres) con <strong>20 años de servicio</strong>.</li>
          <li><strong>Tasa de Reemplazo:</strong> <strong>75% del último salario devengado</strong>, incorporando todos los factores salariales docentes.</li>
          <li><strong>Compatibilidad Única:</strong> Permite percibir simultáneamente <strong>salario activo + pensión de jubilación</strong> hasta los 70 años (edad de retiro forzoso).</li>
          <li><strong>Salud FOMAG:</strong> Protección especializada a través de la Ley 91 de 1989 y Fiduprevisora.</li>
        </ul>
      `,
      notes: "Destacar el concepto de 'Normalista Superior' y el tope salarial que puede alcanzar un docente con doctorado en la categoría 14, garantizando que el retiro no represente una caída súbita en la pobreza."
    },
    {
      num: 4,
      tag: "Decreto 1278 de 2002 · Profesionalización Docente",
      title: "La Flexibilización y la Promesa Meritocrática Rota",
      body: `
        <p>Expedido bajo facultades de la Ley 715 de 2001 (ajuste fiscal y transferencias). Introdujo el ingreso por concurso abierto y evaluación periódica.</p>
        <ul style="margin:1rem 0 1rem 1.5rem; line-height:1.8; color:#334155;">
          <li><strong>Ingreso y Escalafón:</strong> Abierto a no licenciados. 3 Grados (Normalista, Licenciado/Profesional, Postgrado) y 4 Niveles (A, B, C, D).</li>
          <li><strong>Ascenso y Reubicación Estancados:</strong> Sujetos a evaluaciones de competencias y cupos presupuestales. En la práctica, se convoca cada ciclo electoral y tarda años en publicarse resultados.</li>
          <li><strong>Régimen Pensional Ley 100 de 1993:</strong> Requiere <strong>1.300 semanas (26 años)</strong> y <strong>57 años para mujeres / 62 años para hombres</strong>.</li>
          <li><strong>Tasa de Reemplazo Regresiva:</strong> <strong>65% del promedio de los últimos 10 años (IBL)</strong>, perdiendo más del 30% de poder adquisitivo frente al 2277.</li>
          <li><strong>Incompatibilidad Absoluta:</strong> Prohibido percibir pensión y salario activo simultáneamente. Al pensionarse debe retirarse del cargo.</li>
        </ul>
      `,
      notes: "Enfatizar el hallazgo clave: los docentes 1278 NO fueron sacados formalmente del FOMAG, sino que se les impuso la Ley 100 dentro del mismo fondo, lo que constituye una regresividad encubierta."
    },
    {
      num: 5,
      tag: "Decreto 0934 de 2026 · Dinamizadores Indígenas",
      title: "El SEIP y la Nueva Frontera de Fragmentación",
      body: `
        <p>Reglamenta el Régimen Especial de los <strong>Dinamizadores del Sistema Educativo Indígena Propio (SEIP)</strong>, derivado del Decreto Ley 0481 de 2025 y antecedentes como el D. 1345 de 2023.</p>
        <div style="background:#f0fdf4; border:1px solid #bbf7d0; padding:1.25rem; border-radius:8px; margin-top:1rem;">
          <h4 style="color:#065f46; margin-bottom:0.5rem;">Tensiones Sociojurídicas Evidenciadas:</h4>
          <ul style="margin:0 0 0 1.25rem; color:#14532d; font-size:0.92rem; line-height:1.7;">
            <li><strong>Autonomía Étnica vs. Garantías Laborales:</strong> Reconoce a sabedores, guías espirituales y líderes designados por las autoridades tradicionales (cabildos).</li>
            <li><strong>Mandato de No Desmejora:</strong> El decreto prohíbe desmejorar condiciones laborales y de vivienda preexistentes, pero en la práctica genera incertidumbre en estabilidad y seguridad social.</li>
            <li><strong>Especial relevancia en Nariño:</strong> Territorio de pueblos Pastos, Awá y Quillasingas, donde coexisten etnoeducadores, docentes 1278 y dinamizadores SEIP en zonas de conflicto.</li>
          </ul>
        </div>
      `,
      notes: "Aclarar que el Decreto 0934 de 2026 reconoce la autodeterminación indígena legítima, pero el Estado no puede usar la diversidad cultural como pretexto para crear una tercera categoría de docentes con menor certeza prestacional."
    },
    {
      num: 6,
      tag: "Dimensión de Salud Ocupacional",
      title: "La Crisis Estructural del FOMAG y Enfermedades Desatendidas",
      body: `
        <p>La docencia presenta riesgos biológicos, mecánicos y psicosociales únicos documentados en el Decreto 1477 de 2014:</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; margin:1rem 0;">
          <div style="background:#fff; border:1px solid #e2e8f0; padding:1rem; border-radius:6px;">
            <strong style="color:#b91c1c;">Patologías Propias del Oficio:</strong>
            <ul style="font-size:0.85rem; margin:0.5rem 0 0 1rem; color:#475569;">
              <li><strong>Disfonía y nódulos vocales:</strong> Desgaste crónico por sobreuso de la voz.</li>
              <li><strong>Trastornos osteomusculares:</strong> Lumbalgias y várices por largas horas de pie.</li>
              <li><strong>Burnout y estrés severo:</strong> Sobrecarga administrativa y presión evaluativa.</li>
            </ul>
          </div>
          <div style="background:#fff; border:1px solid #e2e8f0; padding:1rem; border-radius:6px;">
            <strong style="color:#0e213b;">El Colapso del Modelo de Salud:</strong>
            <ul style="font-size:0.85rem; margin:0.5rem 0 0 1rem; color:#475569;">
              <li>Fallas críticas de contratación por Fiduprevisora (crisis 2024-2026).</li>
              <li>Citas demoradas por meses y desabastecimiento de medicamentos.</li>
              <li>Trabas burocráticas casi insuperables para calificar el origen laboral de la enfermedad en el D. 1278.</li>
            </ul>
          </div>
        </div>
      `,
      notes: "Mencionar cómo los docentes del 1278 sufren un 'vía crucis' probatorio en las Juntas de Calificación de Invalidez, mientras que el FOMAG fue creado precisamente para tener protocolos especializados que hoy están desarticulados."
    },
    {
      num: 7,
      tag: "Marco Teórico de la Investigación",
      title: "El Concepto de Precariado según Guy Standing (2011)",
      body: `
        <p>Standing demuestra que la precarización no es solo desempleo, sino la <strong>erosión deliberada de las 7 seguridades laborales</strong>:</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; margin-top:1rem; font-size:0.85rem;">
          <div style="background:#f1f5f9; padding:0.75rem; border-radius:6px;">
            <strong style="color:#0e213b;">1. Seguridad de Ingresos:</strong> Pensión 30% inferior y sueldo dependiente de concursos aplazados.
          </div>
          <div style="background:#f1f5f9; padding:0.75rem; border-radius:6px;">
            <strong style="color:#0e213b;">2. Seguridad en el Trabajo:</strong> Desatención a enfermedades profesionales docentes en FOMAG.
          </div>
          <div style="background:#f1f5f9; padding:0.75rem; border-radius:6px;">
            <strong style="color:#0e213b;">3. Seguridad en el Puesto:</strong> Evaluaciones punitivas que amenazan la permanencia.
          </div>
          <div style="background:#f1f5f9; padding:0.75rem; border-radius:6px;">
            <strong style="color:#0e213b;">4. Seguridad de Representación:</strong> Fragmentación sindical interna entre 'viejos' y 'nuevos' estatutos.
          </div>
        </div>
      `,
      notes: "El precariado no equivale únicamente al vendedor ambulante; en el empleo público existe un 'precariado ilustrado': docentes con maestrías que viven con angustia pensional e inestabilidad jurídica."
    },
    {
      num: 8,
      tag: "Fundamentación Constitucional y Jurisprudencial",
      title: "Vulneración a los Principios de Igualdad y Progresividad",
      body: `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:1rem;">
          <div style="border-left:4px solid #1b4975; padding-left:1rem;">
            <h4 style="color:#1b4975; margin-bottom:0.4rem;">Principio de Igualdad (Art. 13 C.P.)</h4>
            <p style="font-size:0.9rem; color:#334155;">A trabajo igual, salario y prestaciones iguales. La fecha de vinculación (antes o después del 26 de junio de 2003) no es un criterio constitucionalmente admisible para cercenar la protección en salud y retiro de quien cumple la misma función pedagógica.</p>
          </div>
          <div style="border-left:4px solid #b91c1c; padding-left:1rem;">
            <h4 style="color:#b91c1c; margin-bottom:0.4rem;">Principio de No Regresividad (Art. 48 C.P. y PIDESC)</h4>
            <p style="font-size:0.9rem; color:#334155;">Las medidas regresivas en seguridad social se presumen inconstitucionales (Sentencias C-038/04, C-228/11, T-731/07 y SU-245/21). El Estado no justificó que la flexibilización mejorara la calidad educativa.</p>
          </div>
        </div>
      `,
      notes: "Citar textualmente la Sentencia SU-245 de 2021 de la Corte Constitucional, donde se reconoce que la fragmentación del magisterio es una fuente de inequidad estructural insostenible."
    },
    {
      num: 9,
      tag: "Hallazgos Empíricos en Pasto",
      title: "Resultados de la Metodología Mixta",
      body: `
        <p>Investigación aplicada a docentes oficiales activos y pensionados de San Juan de Pasto:</p>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:1rem; margin:1.25rem 0; text-align:center;">
          <div style="background:#eff6ff; padding:1.25rem 0.5rem; border-radius:8px; border:1px solid #bfdbfe;">
            <div style="font-size:2rem; font-weight:800; color:#1e40af;">84%</div>
            <div style="font-size:0.8rem; color:#475569; font-weight:600;">Perciben el sistema de salud del FOMAG como deficiente o crítico.</div>
          </div>
          <div style="background:#fef2f2; padding:1.25rem 0.5rem; border-radius:8px; border:1px solid #fecaca;">
            <div style="font-size:2rem; font-weight:800; color:#991b1b;">92%</div>
            <div style="font-size:0.8rem; color:#475569; font-weight:600;">Docentes 1278 declaran incertidumbre y angustia ante su retiro pensional.</div>
          </div>
          <div style="background:#f0fdf4; padding:1.25rem 0.5rem; border-radius:8px; border:1px solid #bbf7d0;">
            <div style="font-size:2rem; font-weight:800; color:#065f46;">96%</div>
            <div style="font-size:0.8rem; color:#475569; font-weight:600;">Considera imperativo unificar el régimen hacia un Estatuto Único Docente.</div>
          </div>
        </div>
      `,
      notes: "Hacer énfasis en los testimonios cualitativos: docentes del 1278 manifiestan trabajar con disfonía sin incapacidad reconocida para no sufrir descuentos salariales o mala calificación."
    },
    {
      num: 10,
      tag: "Conclusiones y Propuestas",
      title: "Hacia un Estatuto Único Docente con Justicia Social",
      body: `
        <div style="background:#fff9eb; border:1px solid #fde68a; padding:1.5rem; border-radius:8px; margin-bottom:1.5rem;">
          <h4 style="color:#92400e; margin-bottom:0.5rem;">Propuestas Concretas de la Tesis:</h4>
          <ol style="margin-left:1.5rem; color:#78350f; font-size:0.95rem; line-height:1.7;">
            <li><strong>Tránsito Legislativo hacia un Estatuto Docente Único:</strong> Armonizar los decretos 2277, 1278 y 0934 bajo el principio de favorabilidad constitucional (Art. 53 C.P.).</li>
            <li><strong>Reforma Integral a la Red Prestadora FOMAG:</strong> Auditoría forense a Fiduprevisora y despolitización de la contratación médica.</li>
            <li><strong>Régimen Pensional Compensatorio:</strong> Reconocimiento de pensión especial por desgaste ocupacional (voz y osteomuscular) a los 55 años para todo el magisterio.</li>
            <li><strong>Armonización del SEIP:</strong> Blindar la autonomía de los cabildos sin sacrificar la estabilidad y seguridad social de los dinamizadores.</li>
          </ol>
        </div>
        <p style="text-align:center; font-weight:700; color:#0e213b; font-size:1.1rem;">¡Muchas gracias por su atención! Quedo a disposición del honorable jurado.</p>
      `,
      notes: "Cerrar con aplomo. Recordar que defender al magisterio es defender el derecho fundamental a la educación pública de calidad en Colombia y Nariño."
    }
  ];

  let currentSlideIndex = 0;

  function renderSlide(index) {
    if (index < 0 || index >= slidesData.length) return;
    currentSlideIndex = index;

    const data = slidesData[index];
    const tagEl = document.getElementById('slide-tag');
    const titleEl = document.getElementById('slide-title');
    const bodyEl = document.getElementById('slide-body');
    const notesEl = document.getElementById('slide-notes-text');
    const counterEl = document.getElementById('slide-counter-display');
    const progressBar = document.getElementById('slides-progress-fill');
    const prevBtn = document.getElementById('btn-slide-prev');
    const nextBtn = document.getElementById('btn-slide-next');

    if (tagEl) tagEl.textContent = data.tag;
    if (titleEl) titleEl.textContent = data.title;
    if (bodyEl) bodyEl.innerHTML = data.body;
    if (notesEl) notesEl.innerHTML = `<strong>Notas de Sustentación (MUMA):</strong> ${data.notes}`;
    if (counterEl) counterEl.textContent = `Diapositiva ${data.num} de ${slidesData.length}`;

    if (progressBar) {
      const pct = ((index + 1) / slidesData.length) * 100;
      progressBar.style.width = `${pct}%`;
    }

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === slidesData.length - 1;
  }

  function nextSlide() {
    if (currentSlideIndex < slidesData.length - 1) {
      renderSlide(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      renderSlide(currentSlideIndex - 1);
    }
  }

  function toggleNotes() {
    const notesPanel = document.getElementById('speaker-notes-panel');
    if (notesPanel) {
      notesPanel.style.display = (notesPanel.style.display === 'none') ? 'block' : 'none';
    }
  }

  function toggleFullscreen() {
    const container = document.getElementById('slides-presentation-container');
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      document.exitFullscreen();
    }
  }

  window.initSlides = function () {
    const prevBtn = document.getElementById('btn-slide-prev');
    const nextBtn = document.getElementById('btn-slide-next');
    const notesBtn = document.getElementById('btn-toggle-notes');
    const fsBtn = document.getElementById('btn-fullscreen-slides');

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (notesBtn) notesBtn.addEventListener('click', toggleNotes);
    if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      // Only handle arrows if slides container is visible or in fullscreen
      const slidesTab = document.getElementById('tab-informe-final') || document.getElementById('tab-diapositivas');
      const isVisible = slidesTab && slidesTab.classList.contains('active');
      const isFs = !!document.fullscreenElement;

      if (!isVisible && !isFs) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key.toLowerCase() === 'n') {
        toggleNotes();
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    });

    renderSlide(0);
  };
})();
