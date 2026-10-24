/* Blacks La Estación — comportamiento del sitio (sin dependencias). */
(function () {
  var D = window.DATOS || {};

  // 1) Datos del negocio: todo lo que tiene data-dato="clave" toma el valor de datos.js.
  document.querySelectorAll('[data-dato]').forEach(function (el) {
    var v = D[el.getAttribute('data-dato')];
    if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-correo]').forEach(function (a) { if (D.correo) a.href = 'mailto:' + D.correo; });
  document.querySelectorAll('[data-mapa]').forEach(function (a) { if (D.mapa) a.href = D.mapa; });
  document.querySelectorAll('[data-anio]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // 2) Enlaces de WhatsApp: usan el número de datos.js y el mensaje del botón (data-texto).
  if (D.whatsapp) {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      var t = a.getAttribute('data-texto');
      a.href = 'https://wa.me/' + D.whatsapp + (t ? '?text=' + encodeURIComponent(t) : '');
    });
  }

  // 3) Menú en celulares.
  var boton = document.querySelector('.menu-movil');
  var nav = document.getElementById('nav-principal');
  if (boton && nav) {
    boton.addEventListener('click', function () {
      var abierto = nav.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.addEventListener('click', function (ev) {
      if (ev.target.closest('a')) { nav.classList.remove('abierto'); boton.setAttribute('aria-expanded', 'false'); }
    });
  }

  // 4) Pestañas de marcas en el menú: resalta la marca que se está viendo.
  var tabs = document.querySelectorAll('[data-tab]');
  if (tabs.length && 'IntersectionObserver' in window) {
    var porId = {};
    tabs.forEach(function (t) { porId[t.getAttribute('data-tab')] = t; });
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        tabs.forEach(function (t) { t.classList.remove('activa'); t.removeAttribute('aria-current'); });
        var t = porId[en.target.id];
        if (t) {
          t.classList.add('activa');
          t.setAttribute('aria-current', 'true');
          var ul = t.closest('ul');
          if (ul && ul.scrollWidth > ul.clientWidth) ul.scrollTo({ left: t.parentNode.offsetLeft - ul.clientWidth / 2 + t.offsetWidth / 2, behavior: 'smooth' });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('.carta').forEach(function (s) { obs.observe(s); });
  }
})();
