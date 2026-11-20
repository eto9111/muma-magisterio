/**
 * SIMULADOR DE BRECHA PENSIONAL Y PRECARIZACIÓN DOCENTE
 * Investigación de Grado: Sebastián Muñoz Martínez (MUMA)
 * Universidad CESMAG - Facultad de Ciencias Sociales y Humanas
 * Compara: Decreto Ley 2277 de 1979 vs. Decreto Ley 1278 de 2002
 */

(function () {
  'use strict';

  function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(amount);
  }

  function calculatePensions() {
    const salaryInput = document.getElementById('sim-salary');
    const yearsInput = document.getElementById('sim-years');
    const genderInput = document.getElementById('sim-gender');

    if (!salaryInput || !yearsInput || !genderInput) return;

    const currentSalary = parseFloat(salaryInput.value) || 6000000;
    const yearsService = parseInt(yearsInput.value, 10) || 25;
    const gender = genderInput.value; // 'M' o 'F'

    // --- CÁLCULO RÉGIMEN 2277 (1979) ---
    // Reglas: 55 años de edad (hombres y mujeres), 20 años de servicio (aprox 1000 semanas).
    // Tasa de reemplazo: 75% sobre el ÚLTIMO salario devengado con factores especiales.
    // Además, permite compatibilidad de salario activo + pensión hasta los 70 años (retiro forzoso).
    const rate2277 = 0.75;
    const monthlyPension2277 = currentSalary * rate2277;
    const minAge2277 = 55;
    const minYears2277 = 20;
    const compatibility2277 = true;

    // --- CÁLCULO RÉGIMEN 1278 (2002 - LEY 100) ---
    // Reglas: 57 años mujeres / 62 años hombres. 1.300 semanas mínimas (26 años).
    // Liquidación: 65% sobre el promedio de los últimos 10 años cotizados (IBL).
    // Históricamente, el promedio de los últimos 10 años equivale aproximadamente al 75%-80% del último salario debido a la inflación y ascensos.
    // Por tanto, IBL estimado = currentSalary * 0.82
    // Tasa de reemplazo base = 65% (pudiendo subir máx al 70-75% con semanas adicionales extremas, pero para 1300 sem es 65%).
    const estimatedIBL = currentSalary * 0.82; 
    let rate1278 = 0.65;
    // Si tiene más de 1300 semanas (26 años), suma 1.5% cada 50 semanas hasta max 80%
    if (yearsService > 26) {
      const extraWeeks = (yearsService - 26) * 50;
      const extraChunks = Math.floor(extraWeeks / 50);
      rate1278 = Math.min(0.78, 0.65 + (extraChunks * 0.015));
    }
    const monthlyPension1278 = estimatedIBL * rate1278;
    const minAge1278 = (gender === 'F') ? 57 : 62;
    const minWeeks1278 = 1300;
    const compatibility1278 = false; // Incompatibilidad absoluta

    // Brecha mensual directa
    const monthlyGap = monthlyPension2277 - monthlyPension1278;
    const percentageLoss = ((monthlyGap / monthlyPension2277) * 100).toFixed(1);

    // Impacto acumulado a 15 años de retiro (180 mesadas + primas anuales = ~210 mesadas)
    const cumulativeLoss15Years = monthlyGap * 210;

    // Actualizar DOM
    const elP2277 = document.getElementById('res-pension-2277');
    const elP1278 = document.getElementById('res-pension-1278');
    const elGap = document.getElementById('res-monthly-gap');
    const elCumul = document.getElementById('res-cumulative-gap');
    const elAge2277 = document.getElementById('res-age-2277');
    const elAge1278 = document.getElementById('res-age-1278');
    const elRate2277 = document.getElementById('res-rate-2277');
    const elRate1278 = document.getElementById('res-rate-1278');

    if (elP2277) elP2277.textContent = formatCurrency(monthlyPension2277);
    if (elP1278) elP1278.textContent = formatCurrency(monthlyPension1278);
    if (elGap) elGap.textContent = `Pérdida mensual: ${formatCurrency(monthlyGap)} (-${percentageLoss}%)`;
    if (elCumul) elCumul.textContent = `Pérdida en 15 años de retiro: ${formatCurrency(cumulativeLoss15Years)}`;

    if (elAge2277) elAge2277.textContent = `${minAge2277} años (ambos sexos) | 20 años serv.`;
    if (elAge1278) elAge1278.textContent = `${minAge1278} años (${gender === 'F' ? 'Mujeres' : 'Hombres'}) | 1.300 semanas (26 años)`;

    if (elRate2277) elRate2277.textContent = `75% del último salario devengado`;
    if (elRate1278) elRate1278.textContent = `${(rate1278 * 100).toFixed(1)}% del promedio últimos 10 años (IBL)`;
  }

  window.initSimulator = function () {
    const salaryInput = document.getElementById('sim-salary');
    const yearsInput = document.getElementById('sim-years');
    const genderInput = document.getElementById('sim-gender');

    if (salaryInput) salaryInput.addEventListener('input', calculatePensions);
    if (yearsInput) yearsInput.addEventListener('input', calculatePensions);
    if (genderInput) genderInput.addEventListener('change', calculatePensions);

    calculatePensions();
  };
})();
