// PAD.CO theme — minimal interaction layer
(function () {
  document.documentElement.classList.remove('no-js');

  // Full-screen menu overlay
  var toggle = document.getElementById('MenuToggle');
  var closeBtn = document.getElementById('MenuClose');
  var overlay = document.getElementById('MenuOverlay');
  if (toggle && overlay) {
    function openMenu() {
      overlay.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      overlay.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Product option swatches -> hidden variant select
  var select = document.getElementById('ProductVariantSelect');
  if (select) {
    var swatchGroups = {};
    document.querySelectorAll('.swatch').forEach(function (btn) {
      var idx = btn.dataset.optionIndex;
      swatchGroups[idx] = swatchGroups[idx] || [];
      swatchGroups[idx].push(btn);
      btn.addEventListener('click', function () {
        swatchGroups[idx].forEach(function (b) { b.classList.remove('is-selected'); });
        btn.classList.add('is-selected');
        syncVariant();
      });
    });

    function currentSelection() {
      var sel = [];
      Object.keys(swatchGroups).sort().forEach(function (idx) {
        var active = swatchGroups[idx].find(function (b) { return b.classList.contains('is-selected'); });
        sel.push(active ? active.dataset.value : null);
      });
      return sel;
    }

    function syncVariant() {
      var sel = currentSelection();
      var options = Array.from(select.options);
      var match = options.find(function (o) {
        var parts = o.textContent.trim().split(' / ');
        return sel.every(function (v, i) { return v === null || parts[i] === v; });
      });
      if (match) select.value = match.value;
    }

    // pre-select first swatch per group
    Object.keys(swatchGroups).forEach(function (idx) {
      swatchGroups[idx][0].classList.add('is-selected');
    });
  }
})();
