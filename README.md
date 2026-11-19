# Sitio web de Blacks La Estación

La Estación Parrilla Bar · Black's Pizza · Heladería Yellow — La Loma, Cesar.
Sitio estático (HTML + CSS + JS, sin dependencias) listo para GitHub Pages.

## Páginas
| Archivo | Contenido |
|---|---|
| `index.html` | Inicio: marcas, imperdibles, nosotros, cómo pedir por WhatsApp, horario y ubicación |
| `menu.html` | Menú completo (252 productos) por marca y categoría, con botón **Pedir** por WhatsApp en cada producto |
| `terminos.html` | Términos y condiciones (Ley 1480 de 2011, Ley 527 de 1999, Ley 124 de 1994) |
| `privacidad.html` | Política de tratamiento de datos (Ley 1581 de 2012) + sección **Eliminación de datos** (`privacidad.html#eliminacion`) |
| `404.html` | Página de error |

## 1. Datos del negocio
Ya están los del RUT (titular Johanyelis Patricia Horta Faria, NIT 1.065.665.295-7, nombre comercial BLACKS ESTACIÓN, Calle 10A # 10-80, barrio Centro, La Loma, El Paso, Cesar).
Para cambiar algo (horario, WhatsApp, correo…) edita `assets/js/datos.js`.

## 2. Publícalo en GitHub Pages
**Opción A (recomendada): organización propia → `https://blacks-estacion.github.io/`**
1. GitHub → foto de perfil → **Your organizations → New organization → Free**. Nombre: `blacks-estacion`.
2. En la organización: **New repository** con el nombre exacto `blacks-estacion.github.io`, **Public**.
3. **Add file → Upload files** → arrastra el CONTENIDO de esta carpeta (que `index.html` quede en la raíz) → **Commit changes**.
4. **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
5. En 1–3 minutos: `https://blacks-estacion.github.io/`.

**Opción B: dentro de Valley-Tech → `https://valley-tech.github.io/blackslaestacion/`**
Mismo procedimiento, pero el repo se crea en Valley-Tech con el nombre `blackslaestacion`. No toca el sitio de ValleyTech.

## 3. Meta (verificación del negocio)
- **Sitio web del negocio:** `https://blacks-estacion.github.io/` (u opción B)
- Política de privacidad: `…/privacidad.html` · Términos: `…/terminos.html` · Eliminación de datos: `…/privacidad.html#eliminacion`
- El nombre legal, la dirección y el teléfono del sitio deben coincidir con los del formulario de Meta y con la Cámara de Comercio/RUT.
- Si Meta pide verificar el dominio con etiqueta meta, pega la etiqueta en `index.html` donde dice `facebook-domain-verification`.

## Dominio propio (opcional)
Crea un archivo `CNAME` con el dominio (p. ej. `www.blackslaestacion.com`) y en el proveedor del dominio apunta un registro CNAME a `valley-tech.github.io`. Luego Settings → Pages → Custom domain.

## Imágenes
- Logos: `assets/img/` (recortados del PDF, fondo transparente).
- Fotos de productos: las 38 fotos que tiene Loggro (`urlImage`). Los productos sin foto muestran el logo de su marca.
