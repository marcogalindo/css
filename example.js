<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Componentes</title>
    <link rel="stylesheet" href="/styles/index.css">
</head>
<body>
    <h3 class="p-2">Botones Solidos</h3>
    <div class="grid grid-cols-4 grid-gap-1 p-2">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-error">Error</button>
    </div>
    <h3 class="p-2">Botones outlined</h3>
    <div class="grid grid-cols-4 grid-gap-1 p-2">
        <button class="btn-outline btn-primary-outline">Primary</button>
        <button class="btn-outline btn-secondary-outline">Secondary</button>
        <button class="btn-outline btn-warning-outline">Warning</button>
        <button class="btn-outline btn-error-outline">Error</button>
    </div>
    <h3 class="p-2">Botones distintos tamaños</h3>
    <div class="grid grid-cols-2 grid-gap-1 p-2">
        <button class="btn btn-primary btn-sm">Primary</button>
        <button class="btn-outline btn-secondary-outline btn-lg">Secondary</button>
    </div>
    <div class="p-2">
        <button class="btn-outline btn-error-outline btn-full">Error</button>
    </div>
    <h3 class="p-2">Botones con iconos</h3>
    <div class="p-2">
        <button class="btn btn-primary btn-icon">
            <i class="fi fi-rs-check icon"></i> Guardar
        </button>
        <button class="btn-secondary-outline btn-icon-only">
            <i class="fi fi-ss-home icon"></i>
        </button>
        <button class="btn-primary-outline btn-icon-only">
            <i class="fi fi-ss-disk icon"></i>
        </button>
        <button class="btn-error-outline btn-icon-only">
            <i class="fi fi-ss-trash icon"></i>
        </button>
    </div>
    <h3 class="p-2">Barra de herramientas</h3>
    <div class="p-2">
        <div class="toolbar">
            <button class="btn-icon-only">
                <i class="fi fi-rs-edit icon"></i>
            </button>
            <button class="btn-icon-only">
                <i class="fi fi-ss-plus icon"></i>
            </button>
            <button class="btn-icon-only">
                <i class="fi fi-rs-trash icon"></i>
            </button>
            <button class="btn-icon-only">
                <i class="fi fi-ss-ban icon"></i>
            </button>     
          </div>
    </div>
    <h3 class="p-2">Inputs</h3>
    <div class="p-2">
        <input type="text" class="input input-primary" placeholder="Escribe algo...">
    </div>
    <div class="p-2">
        <input type="password" class="input input-secondary" placeholder="Ingresa tu contraseña">
    </div>
    <div class="p-2">
        <input type="email" class="input input-secondary" placeholder="Ingresa tu correo">
    </div>
    <div class="p-2">
        <input type="phone" class="input input-disabled" placeholder="Ingresa tu telefono">
    </div>
    <div class="p-2">
        <textarea name="" id="" class="input input-error" cols="50" rows="10" placeholder="Escribe algo..."></textarea>
    </div>
    <div class="p-2">
        <div class="form-group">
            <label for="comentario">Comentario</label>
            <div class="textarea-wrapper">
              <textarea id="comentario" class="input input-primary textarea-conteo" maxlength="200" rows="4" placeholder="Escribe tu comentario..."></textarea>
              <div class="contador-caracteres">0 / 200</div>
            </div>
        </div>
    </div>
    <div class="p-2">
        <div class="input-group">
            <input type="text" class="input input-primary" placeholder="Buscar...">
            <button class="btn btn-primary">Buscar</button>
        </div>
    </div>
    <div class="p-2">
        <div class="input-group">
            <input type="text" class="input input-primary" placeholder="Buscar...">
            <button class="btn-outline btn-primary-outline">Buscar</button>
        </div>
    </div>
    <div class="p-2">
        <div class="input-group">
            <input type="text" class="input input-primary" placeholder="Buscar...">
            <button class="btn-outline btn-primary-outline btn-icon-only" aria-label="Buscar">
              <i class="fi fi-rs-search icon"></i>
            </button>
        </div>
    </div>
    <div class="p-2">
        <div class="input-group">
            <input type="text" class="input input-primary" placeholder="Buscar...">
            <button class="btn btn-primary" aria-label="Buscar">
              <i class="fi fi-rs-search icon"></i>
            </button>
        </div>
    </div>
    <div class="p-2">
        <div class="input-icon">
            <i class="fi fi-rs-search icon icon-left"></i>
            <input type="text" class="input input-primary" placeholder="Fecha">
        </div>
    </div>
    <h3 class="p-2">Checkbox</h3>
    <div class="p-2">
        <label class="checkbox-icon primary">
            <input type="checkbox" class="checkbox-hidden">
            <i class="fi fi-rs-square primary icon unchecked"></i>
            <i class="fi fi-ss-checkbox icon primary checked"></i>
            Opción
        </label>
    </div>
    <div class="p-2">
        <label class="checkbox-icon secondary">
            <input type="checkbox" class="checkbox-hidden">
            <i class="fi fi-rs-square secondary icon unchecked"></i>
            <i class="fi fi-ss-checkbox icon secondary checked"></i>
            Opción
        </label>
    </div>
    <div class="p-2">
        <label class="toggle-icon">
            <input type="checkbox" class="toggle-hidden">
            <i class="fi fi-ss-toggle-off icon unchecked text-md"></i>
            <i class="fi fi-ss-toggle-on icon checked text-md"></i>
        </label>
    </div>
    <h3 class="p-2">Dropdown</h3>
    <div class="p-2">
        <div class="dropdown" id="campoPais">
            <input type="hidden" name="pais" value="">
            <button class="btn-outline btn-primary-outline dropdown-toggle text-sm text-black">
                Seleccionar país
                <i class="fi fi-rs-caret-down icon icon-down"></i>
                <i class="fi fi-rs-caret-up icon icon-up"></i>
            </button>
            <ul class="dropdown-menu">
                <li class="dropdown-item text-sm" data-value="mx">
                    <img src="/assets/mexico.png" width="16" height="16" alt="">
                    México
                </li>
                <li class="dropdown-item text-sm" data-value="us">
                    <i class="fi fi-ss-pound"></i>
                    Pounds
                </li>
                <li class="dropdown-item text-sm" data-value="ur">URSS</li>
                <li class="dropdown-item text-sm" data-value="es">España</li>
            </ul>
        </div>
        <button type="button" onclick="obtenerValorCampo('campoPais')" class="btn btn-primary">Probar</button>                 
    </div>
    <div class="p-2">
        <div class="dropdown dropdown-secondary" id="campoEstado">
            <input type="hidden" name="pais" value="">
            <button class="btn-outline btn-secondary-outline dropdown-toggle text-sm text-black">
              Seleccionar país
              <i class="fi fi-rs-caret-down icon icon-down"></i>
              <i class="fi fi-rs-caret-up icon icon-up"></i>
            </button>
            <ul class="dropdown-menu">
              <li class="dropdown-item text-sm" data-value="cdmx">1️⃣ CDMX</li>
              <li class="dropdown-item text-sm" data-value="jal">2️⃣ Jalisco</li>
              <li class="dropdown-item text-sm" data-value="pue">3️⃣ Puebla</li>
              <li class="dropdown-item text-sm" data-value="zac">4️⃣ Zacatecas</li>
            </ul>
        </div>
        <button type="button" onclick="obtenerValorCampo('campoEstado')" class="btn-outline btn-secondary-outline">Probar</button>                 
    </div>
    <h3 class="p-2">Dropdown multi</h3>
    <div class="p-2">
        <div class="dropdown multi-select" id="campoServicios">
            <input type="hidden" name="servicios" value="">
            <button class="btn-outline btn-primary-outline dropdown-toggle text-sm text-black">
                Selecciona servicios
                <i class="fi fi-rs-caret-down icon icon-down"></i>
                <i class="fi fi-rs-caret-up icon icon-up"></i>
            </button>
            <ul class="dropdown-menu">
                <li class="dropdown-item text-sm">
                    <label class="checkbox-icon">
                        <input type="checkbox" class="checkbox-hidden" data-value="internet">
                        <i class="fi fi-rs-square icon unchecked"></i>
                        <i class="fi fi-rs-checkbox icon checked"></i>
                        Internet
                    </label>
                </li>
                <li class="dropdown-item text-sm">
                    <label class="checkbox-icon">
                        <input type="checkbox" class="checkbox-hidden" data-value="tv">
                        <i class="fi fi-rs-square icon unchecked"></i>
                        <i class="fi fi-rs-checkbox icon checked"></i>
                        TV Cable
                    </label>
                </li>
                <li class="dropdown-item text-sm">
                    <label class="checkbox-icon">
                        <input type="checkbox" class="checkbox-hidden" data-value="telefono">
                        <i class="fi fi-rs-square icon unchecked"></i>
                        <i class="fi fi-rs-checkbox icon checked"></i>
                        Teléfono
                    </label>
                </li>
            </ul>
        </div>
        <button type="button" onclick="obtenerValorCampo('campoServicios')" class="btn-outline btn-secondary-outline">Probar</button>
    </div>
    <h3 class="p-2">Radio buttons</h3>
    <div class="p-2">
        <label class="radio-icon">
            <input type="radio" name="opcion" class="radio-hidden" checked value="a">
            <i class="fi fi-rs-circle icon unchecked"></i>
            <i class="fi fi-rs-dot-circle icon checked"></i>
            Opción A
          </label>
          
          <label class="radio-icon">
            <input type="radio" name="opcion" class="radio-hidden" value="b">
            <i class="fi fi-rs-circle icon unchecked"></i>
            <i class="fi fi-rs-dot-circle icon checked"></i>
            Opción B
          </label>          
    </div>
    <h3 class="p-2">Input number</h3>
    <div class="p-2">
        <div class="p-2">
            <div class="input-group numero-control" id="inputCantidad">
              <button class="btn-outline btn-secondary-outline btn-icon-only" data-action="decrementar">
                <i class="fi fi-ss-minus icon"></i>
              </button>
              <input type="number" class="input input-secondary" value="1" min="1" max="10">
              <button class="btn-outline btn-secondary-outline btn-icon-only" data-action="incrementar">
                <i class="fi fi-ss-plus icon"></i>
              </button>
            </div>
          </div>          
    </div>
    <h3 class="p-2">Form groups</h3>
    <div class="p-2">
        <div class="form-group">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" id="email" class="input input-primary" placeholder="correo@ejemplo.com">
        </div>
        <div class="form-group">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" id="email" class="input input-error" placeholder="correo@ejemplo.com">
            <small class="form-error">Este campo es obligatorio</small>
        </div>
        <div class="form-group form-group-horizontal">
            <label for="busqueda">Buscar</label>
            <div class="input-group">
              <input type="text" id="busqueda" class="input input-secondary" placeholder="Escribe algo">
              <button class="btn-outline btn-secondary-outline">Buscar</button>
            </div>
          </div>
    </div>
    <h3 class="p-2">Badges / Pills</h3>
    <div class="p-2">
        <span class="badge badge-primary">4</span>
        <span class="badge badge-primary">200</span>
        <span class="badge badge-primary">
            <i class="fi fi-rs-envelope icon mr"></i>
             200
        </span>
        <span class="badge badge-error">
            Voz
            <i class="fi fi-ss-circle-xmark icon ml"></i>
        </span>
        <span class="badge badge-warning badge-circle">!</span>
        <span class="pill pill-secondary">Activo</span>
        <span class="pill pill-error">Error</span>
    </div>
    <div class="p-2">
        <span class="badge badge-outline badge-primary">4</span>
        <span class="badge badge-outline badge-warning badge-circle">!</span>
        <span class="pill pill-outline pill-secondary">Activo</span>
        <span class="pill pill-outline pill-secondary">Estatus activo</span>
        <span class="pill pill-outline pill-error">Error</span>
      </div>
      <div class="p-2">
        <span class="badge badge-error badge-circle">
            <i class="fi fi-ss-light-emergency-on"></i>
        </span>
    </div>
    <h3 class="p-2">Snackbar</h3>
    <div class="p-2">
        <div class="snackbar snackbar-bottom" id="miSnackbar">
            <i class="fi fi-ss-info icon"></i>
            <span>El elemento se creo correctamente, espere un momento mientras actualizamos todo.</span>
            <button class="dismiss-btn">
              <i class="fi fi-rs-cross-small icon"></i>
            </button>
        </div>
        <button class="btn btn-primary" onclick="mostrarSnackbar('miSnackbar')">Mostrar Snackbar</button>
    </div>
    <script src="/scripts/index.js"></script>
</body>
</html>
