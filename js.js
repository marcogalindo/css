window.onDropdownSelect = null;

document.addEventListener('DOMContentLoaded', () => {
  const listaNotificaciones = document.querySelector('.notification-list');
  const sidebar = document.querySelector(".layout-sidebar.expandable");
  
  if (!sidebar) return;

  const sidebarElement = sidebar.querySelector(".layout-sidebar__sidebar");
  const iconButtons = sidebar.querySelectorAll(".sidebar-icon");

  Sortable.create(listaNotificaciones, {
    animation: 150,
    ghostClass: 'notification-ghost', // clase para el elemento "fantasma" mientras se arrastra
    dragClass: 'notification-drag',   // clase opcional para aplicar mientras se arrastra
  });

  sidebarElement.addEventListener("mouseenter", () => {
    sidebar.classList.add("layout-sidebar--expanded");
    iconButtons.forEach(btn => btn.classList.add("sidebar-icon--expanded"));
  });

  sidebarElement.addEventListener("mouseleave", () => {
    sidebar.classList.remove("layout-sidebar--expanded");
    iconButtons.forEach(btn => btn.classList.remove("sidebar-icon--expanded"));
  });
});

document.addEventListener('click', e => {
  const toggleBtn = e.target.closest('.dropdown-toggle');
  const btnNumero = e.target.closest('[data-action]');
  const actionToggle = e.target.closest('.actions-dropdown > i');
  const clickedTab = e.target.closest('.nav-tab');
  const sidebarBtn = e.target.closest('.sidebar-icon');

  // === Abrir/Cerrar dropdown principal ===
  if (toggleBtn) {
    const dropdown = toggleBtn.closest('.dropdown');
    dropdown.classList.toggle('open');

    // Cierra otros dropdowns
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    return;
  }

  // === Abrir/Cerrar dropdown de acciones ===
  if (actionToggle) {
    const dropdown = actionToggle.closest('.actions-dropdown');
    dropdown.classList.toggle('open');

    // Cierra otros dropdowns de acciones
    document.querySelectorAll('.actions-dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });

    const menu = dropdown.querySelector('.dropdown-menu-actions');
    if (menu) {
      const menuRect = menu.getBoundingClientRect();
      const spaceBelow = window.innerHeight - menuRect.top;

      if (spaceBelow < 200) {
        dropdown.classList.add('drop-up');
      } else {
        dropdown.classList.remove('drop-up');
      }
    }

    return;
  }

  // === Click en acción del dropdown contextual ===
  if (e.target.classList.contains('dropdown-item') && e.target.closest('.dropdown-menu-actions')) {
    const action = e.target.dataset.action;
    const row = e.target.closest('tr');
    const id = row?.dataset?.id ?? null;

    if (action && row) {
      console.log(`Acción: ${action} sobre fila ID: ${id}`);
      // Aquí puedes ejecutar funciones según la acción
    }

    // Cierra el menú
    const container = e.target.closest('.actions-dropdown');
    if (container) container.classList.remove('open');
    return;
  }

  // === MULTI-SELECT con checkboxes ===
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

    return;
  }

  // === NORMAL DROPDOWN ===
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

  // === Número incrementable ===
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

  // === Dismiss del snackbar ===
  if (e.target.closest('.dismiss-btn')) {
    const snackbar = e.target.closest('.snackbar');
    snackbar.classList.remove('show');
    return;
  }

  // === LOGICA NAV TABS ===
  if (clickedTab) {
    const allTabs = document.querySelectorAll('.nav-tab');
    const allContents = document.querySelectorAll('.tab-content');
  
    allTabs.forEach(tab => tab.classList.remove('active'));
    allContents.forEach(content => content.classList.add('hidden'));
  
    clickedTab.classList.add('active');
  
    const tabId = clickedTab.getAttribute('data-tab');
    const content = document.getElementById(`tab-${tabId}`);
    if (content) content.classList.remove('hidden');
  }

  // === LOGICA SIDEBAR ===
  if (sidebarBtn && sidebarBtn.querySelector('i')) {
    const iconClass = Array.from(sidebarBtn.querySelector('i').classList).find(c => c.startsWith('fi-'));
    if (!iconClass) return;

    // Mapeo íconos a secciones
    const map = {
      'fi-ss-home': 'view-home',
      'fi-ss-user': 'view-user',
      'fi-ss-settings': 'view-settings',
      'fi-ss-dashboard': 'view-dashboard',
      'fi-ss-plan-strategy': 'view-estrategias'
    };

    const targetId = map[iconClass];
    if (!targetId) return;

    // Oculta todas las vistas
    document.querySelectorAll('.sidebar-view').forEach(view => view.classList.add('hidden'));

    // Muestra la vista correspondiente
    const targetView = document.getElementById(targetId);
    if (targetView) targetView.classList.remove('hidden');

    // Marca el ícono como activo
    document.querySelectorAll('.sidebar-icon').forEach(btn => btn.classList.remove('active'));
    sidebarBtn.classList.add('active');
  }

  // === Cerrar dropdowns al hacer clic fuera ===
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });

  document.querySelectorAll('.actions-dropdown').forEach(dropdown => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
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

document.addEventListener('change', function (e) {
  if (e.target.matches('.checkbox-icon input[type="checkbox"]:not([data-selectall])')) {
    const checkbox = e.target;
    const tr = checkbox.closest('tr');
    const color = checkbox.dataset.color;
    tr.classList.toggle(`row-active-${color}`, checkbox.checked);

    const table = checkbox.closest('table');
    const allCheckboxes = table.querySelectorAll('tbody .checkbox-icon input[type="checkbox"]');
    const selectAll = table.querySelector('[data-selectall]');
    if (selectAll) {
      const allChecked = Array.from(allCheckboxes).every(cb => cb.checked);
      selectAll.checked = allChecked;
    }

    actualizarFilasSeleccionadas(table);
  }

  if (e.target.matches('[data-selectall]')) {
    const isChecked = e.target.checked;
    const table = e.target.closest('table');
    const checkboxes = table.querySelectorAll('tbody .checkbox-icon input[type="checkbox"]');

    checkboxes.forEach(cb => {
      cb.checked = isChecked;
      const tr = cb.closest('tr');
      const color = cb.dataset.color;
      tr.classList.toggle(`row-active-${color}`, isChecked);
    });

    actualizarFilasSeleccionadas(table);
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const modalesAbiertos = document.querySelectorAll('.modal.show');

    modalesAbiertos.forEach(modal => {
      const wrapper = modal.closest('.modal-wrapper');
      const dismissible = wrapper?.getAttribute('data-dismiss') !== 'false';

      if (wrapper && dismissible) {
        cerrarModal(wrapper.id);
      }
    });
  }
});

document.querySelectorAll('.number-input-fancy').forEach(control => {
    const input = control.querySelector('input');
    const minus = control.querySelector('.minus');
    const plus = control.querySelector('.plus');
  
    const min = parseInt(input.getAttribute('min')) || 0;
    const max = parseInt(input.getAttribute('max')) || Infinity;
  
    minus.addEventListener('click', () => {
      let val = parseInt(input.value) || 0;
      if (val > min) {
        val--;
        input.value = val;
      }
    });
  
    plus.addEventListener('click', () => {
      let val = parseInt(input.value) || 0;
      if (val < max) {
        val++;
        input.value = val;
      }
    });
});

document.querySelectorAll('.file-dropzone').forEach(dropzone => {
  const input = dropzone.querySelector('input[type="file"]');

  dropzone.addEventListener('click', () => input.click());

  dropzone.addEventListener('dragover', e => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
  });

  dropzone.addEventListener('drop', e => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    input.files = e.dataTransfer.files;
    manejarArchivos(input.files);
  });

  input.addEventListener('change', () => {
    manejarArchivos(input.files);
  });

  function manejarArchivos(archivos) {
    // Aquí podrías emitir un evento, llamar a un callback o mostrar la lista de archivos
    console.log('Archivos seleccionados:', archivos);
    if (typeof window.onFileDrop === 'function') {
      window.onFileDrop(archivos);
    }
  }
});

function obtenerValorCampo(id) {
  const campo = document.getElementById(id);
  const input = campo.querySelector('input[type="hidden"]');
  console.log(input.value); // ahora sí imprime el valor
  return input ? input.value : null;
}

function mostrarSnackbar(id, message, tiempo = 3000) {
    console.log("HOLA");
    const snackbar = document.getElementById(id);
    const snackbarMessage = document.querySelector(".snackbarMessage");
    snackbarMessage.innerHTML = message;
    snackbar.classList.add('show');
  
    setTimeout(() => {
      snackbar.classList.remove('show');
    }, tiempo);
}

function actualizarFilasSeleccionadas(table) {
  const filas = table.querySelectorAll('tbody tr');
  const seleccionadas = [];

  filas.forEach((tr, index) => {
    const checkbox = tr.querySelector('.checkbox-icon input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      const id = tr.dataset.id || index;
      seleccionadas.push(id);
    }
  });

  window.selectedRows = seleccionadas;

  // Por si quieres debug:
  console.log('Filas seleccionadas:', window.selectedRows);
}

function abrirModal(id) {
  const wrapper = document.getElementById(id);
  if (!wrapper) return;

  const modal = wrapper.querySelector('.modal');
  const backdrop = wrapper.querySelector('.modal-backdrop');

  if (!modal || !backdrop) return;

  // Mostrar wrapper
  wrapper.style.display = 'block';

  // === Backdrop (opaco o transparente)
  const backdropType = wrapper.getAttribute('data-backdrop') || 'opaque';
  backdrop.classList.remove('transparent');
  
  if (backdropType === 'transparent') {
    backdrop.classList.add('transparent');
  }

  backdrop.classList.add('show');

  // === Animación de entrada según posición
  let entradaAnimacion = 'slide-up-in';
  
  if (modal.classList.contains('modal-right')) {
    entradaAnimacion = 'slide-right-in';
  } else if (modal.classList.contains('modal-left')) {
    entradaAnimacion = 'slide-left-in';
  }

  modal.classList.remove('slide-up-out', 'slide-right-out', 'slide-left-out');
  modal.classList.add('show', entradaAnimacion);

  document.body.classList.add('modal-open');

  // === Cierre por clic en backdrop si data-dismiss = true
  const dismissible = wrapper.getAttribute('data-dismiss') !== 'false';

  if (dismissible) {
    backdrop.addEventListener('click', function cerrarClickBackdrop() {
      cerrarModal(id);
      backdrop.removeEventListener('click', cerrarClickBackdrop);
    });
  }
}

function cerrarModal(id) {
  const wrapper = document.getElementById(id);
  if (!wrapper) return;

  const modal = wrapper.querySelector('.modal');
  const backdrop = wrapper.querySelector('.modal-backdrop');

  if (!modal || !backdrop) return;

  // Detectar clase de posición
  let salidaAnimacion = 'slide-up-out';

  if (modal.classList.contains('modal-right')) {
    salidaAnimacion = 'slide-right-out';
  } else if (modal.classList.contains('modal-left')) {
    salidaAnimacion = 'slide-left-out';
  }

  // Eliminar clases anteriores de entrada
  modal.classList.remove('slide-up-in', 'slide-right-in', 'slide-left-in');
  modal.classList.add(salidaAnimacion);

  // Ocultar backdrop
  backdrop.classList.remove('show');

  document.body.classList.remove('modal-open');

  // Después de la animación, ocultar completamente
  setTimeout(() => {
    modal.classList.remove('show', salidaAnimacion);
    wrapper.style.display = 'none';
  }, 300);
}
