// PAD.CO theme — minimal interaction layer
(function () {
  document.documentElement.classList.remove('no-js');

  // Nav toggle (mobile)
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = 'var(--paper)';
      nav.style.borderBottom = '2px solid var(--ink)';
      nav.style.padding = '16px 24px';
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
