'use strict';
// =========================================================
// ==================    ui kit model code   ===============
// =========================================================
(function () {
  
  function hasClass(el, cls) {
    return el.className.split(' ').indexOf(cls) !== -1;
  }

  function pcodbnd(source, blacklist) {
    source = source
      .replace(/\r/g, '')
      .replace(/\t/g, '  ')
      .replace(/^ *\n+/, '\n')
      .replace(/[\s\n]+$/, '');

    source = source.replace(new RegExp('\\n' + source.match(/^\n( *)/)[1], 'g'), '\n');

    if (blacklist) {
      source = source.replace(/class="([^"]+)"/g, function (m, clsStr) {
        var clsArr = clsStr
          .replace(/^\s+|\s+$/, '')
          .replace(/\s+/g, ' ')
          .split(' ');

        for (var i = 0, l = blacklist.length, clsInd; i < l; i++) {
          if ((clsInd = clsArr.indexOf(blacklist[i])) !== -1) {
            clsArr.splice(clsInd, 1);
          }
        }

        return 'class="' + clsArr.join(' ') + '"';
      });
    }

    return source
      .replace(/\s+class=""/gi, '')
      .replace(/([a-z]+)=""/gi, '$1')
      .replace(/javascript:void\(0\)/g, '#')
      .replace(/^\n/, '');
  }

  function pcclp(el, src) {
    return new ClipboardJS(el, {
      text: function () {
        return src;
      }
    });
  }

  function pcopnmdl(src, formattedSrc, parentEl) {
    document.querySelector('.pc-modal-content').innerHTML = '<pre><code class="hljs html xml">' + formattedSrc + '</code></pre>';

    var btn_copy = document.querySelector('.md-pc-modal-copy');
    var closeBtn = document.querySelector('.pc-modal-close');

    var btn_copyTimeout = null;
    var ClipboardJS = pcclp(btn_copy, src);

    ClipboardJS.on('success', function (e) {
      if (btn_copyTimeout) {
        clearTimeout(btn_copyTimeout);
        btn_copyTimeout = null;
      }

      btn_copy.className = btn_copy.className.replace(' copied', '');
      btn_copy.className += ' copied';

      btn_copyTimeout = setTimeout(function () {
        btn_copy.className = btn_copy.className.replace(' copied', '');
      }, 1000);
    });

    var closeListener = function () {
      document.querySelector('.pc-modal-content').innerHTML = '';
      document.querySelector('.pc-modal').scrollTop = 0;
      closeBtn.removeEventListener('click', closeListener);
      ClipboardJS.destroy();
      document.documentElement.className = document.documentElement.className.replace(' pc-modal-opened', '');
    };
    closeBtn.addEventListener('click', closeListener);
    document.documentElement.className += ' pc-modal-opened';
  }

  Array.prototype.slice.call(document.querySelectorAll('.pc-component')).forEach(function (parentEl) {
    var btnsWrapper = document.createElement('div');
    btnsWrapper.className = 'pc-btns';

    var btn_copy = document.createElement('a');
    btn_copy.href = 'javascript:void(0)';
    btn_copy.className = 'md-pc-modal-copy copy';
    btn_copy.innerHTML = '<i class="ph-duotone ph-copy"></i>';

    var btn_md_collapse = document.createElement('a');
    btn_md_collapse.href = 'javascript:void(0)';
    btn_md_collapse.className = 'pc-collapse';
    btn_md_collapse.innerHTML = '<i class="ph-duotone ph-code"></i>';

    var blacklistStr = parentEl.getAttribute('data-blacklist') || null;
    var blacklist = (blacklistStr && blacklistStr.split(',')) || null;
    var src = pcodbnd(parentEl.innerHTML, blacklist);
    var formattedSrc = hljs.highlight('html', src).value;

    var btn_copyTimeout = null;
    pcclp(btn_copy, src).on('success', function (e) {
      if (btn_copyTimeout) {
        clearTimeout(btn_copyTimeout);
        btn_copyTimeout = null;
      }
      btn_copy.className = btn_copy.className.replace(' copied', '');
      btn_copy.className += ' copied';

      btn_copyTimeout = setTimeout(function () {
        btn_copy.className = btn_copy.className.replace(' copied', '');
      }, 1000);
    });

    var codes = document.createElement('div');
    codes.className = 'pc-modal-content';
    codes.innerHTML = '<pre><code class="hljs html xml">' + formattedSrc + '</code></pre>';
    codes.appendChild(btn_copy);
    codes.appendChild(btn_md_collapse);
    parentEl.appendChild(codes);
    codes.childNodes[0].style.display = 'none';

    btn_md_collapse.addEventListener('click', function (e) {
      if (btn_md_collapse.parentElement.childNodes[0].style.display == 'none')
        btn_md_collapse.parentElement.childNodes[0].style.display = 'block';
      else btn_md_collapse.parentElement.childNodes[0].style.display = 'none';
    });
  });

})();
