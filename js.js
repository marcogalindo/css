window.onDropdownSelect = null;

document.addEventListener('click', e => {
    const toggleBtn = e.target.closest('.dropdown-toggle');
    const btnNumero = e.target.closest('[data-action]');

  if (toggleBtn) {
    const dropdown = toggleBtn.closest('.dropdown');
    dropdown.classList.toggle('open');
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    return;
  }

  // MULTI-SELECT: clic en checkbox-icon o checkbox
  const checkbox = e.target.closest('input[type="checkbox"]');

  if (checkbox && checkbox.closest('.multi-select')) {
    const dropdown = checkbox.closest('.dropdown');
    const toggle = dropdown.querySelector('.dropdown-toggle');

    const checked = dropdown.querySelectorAll('input[type="checkbox"]:checked');
    const values = Array.from(checked).map(cb => cb.getAttribute('data-value'));

    const hiddenInput = dropdown.querySelector('input[type="hidden"]');
    if (hiddenInput) hiddenInput.value = values.join(',');

    toggle.childNodes[0].nodeValue = values.length > 0
      ? `${values.length} seleccionados `
      : 'Selecciona servicios ';

    if (typeof window.onDropdownSelect === 'function') {
      window.onDropdownSelect({ values, dropdown });
    }

    return; // No cerramos el dropdown aún
  }

  // NORMAL DROPDOWN: clic en .dropdown-item
  if (e.target.classList.contains('dropdown-item')) {
    const dropdown = e.target.closest('.dropdown');
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const text = e.target.textContent.trim();
    const value = e.target.getAttribute('data-value');

    const hiddenInput = dropdown.querySelector('input[type="hidden"]');
    if (hiddenInput) hiddenInput.value = value;

    if (typeof window.onDropdownSelect === 'function') {
      window.onDropdownSelect({ text, value, dropdown });
    }

    toggle.childNodes[0].nodeValue = text + ' ';
    dropdown.classList.remove('open');
    return;
  }


if (btnNumero && btnNumero.closest('.numero-control')) {
  const accion = btnNumero.getAttribute('data-action');
  const grupo = btnNumero.closest('.numero-control');
  const input = grupo.querySelector('input[type="number"]');

  let valor = parseInt(input.value, 10) || 0;
  const min = parseInt(input.min, 10) || -Infinity;
  const max = parseInt(input.max, 10) || Infinity;

  if (accion === 'incrementar') valor++;
  else if (accion === 'decrementar') valor--;

  valor = Math.max(min, Math.min(max, valor));
  input.value = valor;

  return;
}

  // Clic fuera – cierra todos
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});

document.addEventListener('input', e => {
    const textarea = e.target.closest('.textarea-conteo');
    if (textarea) {
      const contador = textarea.parentElement.querySelector('.contador-caracteres');
      const max = textarea.getAttribute('maxlength') || 100;
      contador.textContent = `${textarea.value.length} / ${max}`;
    }
});

document.addEventListener('click', e => {
    // Botón dismiss del snackbar
    if (e.target.closest('.dismiss-btn')) {
      const snackbar = e.target.closest('.snackbar');
      snackbar.classList.remove('show');
    }
});

function obtenerValorCampo(id) {
  const campo = document.getElementById(id);
  const input = campo.querySelector('input[type="hidden"]');
  console.log(input.value); // ahora sí imprime el valor
  return input ? input.value : null;
}

function mostrarSnackbar(id, tiempo = 3000) {
    const snackbar = document.getElementById(id);
    snackbar.classList.add('show');
  
    setTimeout(() => {
      snackbar.classList.remove('show');
    }, tiempo);
}
