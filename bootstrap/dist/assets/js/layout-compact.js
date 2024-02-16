'use strict';
(function () {
document.getElementsByTagName('body')[0].setAttribute('data-pc-layout', 'compact');

if (document.querySelector('.navbar-content')) {
  new SimpleBar(document.querySelector('.navbar-content'));
}

var elem = document.querySelectorAll('.pc-navbar li .pc-submenu');
for (var j = 0; j < elem.length; j++) {
  elem[j].style.display = 'none';
}

var sidebar_hide = document.querySelector('#sidebar-hide');
if (sidebar_hide) {
  sidebar_hide.addEventListener('click', function () {
    if (document.querySelector('body').classList.contains('pc-sidebar-hide')) {
      document.querySelector('body').classList.remove('pc-sidebar-hide');
    } else {
      document.querySelector('body').classList.add('pc-sidebar-hide');
    }
  });
}

var pc_link_click = document.querySelectorAll('.pc-navbar > li:not(.pc-caption)');
for (var i = 0; i < pc_link_click.length; i++) {
  
  new bootstrap.Tooltip(pc_link_click[i], {
    trigger: 'hover',
    placement: 'right',
    title: pc_link_click[i].children[0].children[1].innerHTML
  });

  pc_link_click[i].addEventListener('click', function (event) {
    event.stopPropagation();

    var targetElement = event.target;
    if (targetElement.tagName == 'SPAN') {
      targetElement = targetElement.parentNode;
    }

    if (targetElement.tagName == 'I') {
      targetElement = targetElement.parentNode.parentNode;
    }

    if (targetElement.parentNode.classList.contains('pc-hasmenu')) {
      if (targetElement.parentNode.classList.contains('pc-trigger')) {

        targetElement.parentNode.classList.remove('pc-trigger');
        if(document.querySelector('.pc-compact-submenu > .pc-compact-list .simplebar-content')){
          document.querySelector('.pc-compact-submenu > .pc-compact-list .simplebar-content').innerHTML = '';
        }
        document.querySelector('.pc-sidebar').classList.remove('pc-compact-submenu-active');
        document.querySelector('body').classList.remove('pc-compact-submenu-active');
        
      } else {

        document.querySelector('.pc-compact-submenu > .pc-compact-title h5').innerHTML = targetElement.children[1].innerHTML;
        document
          .querySelector('.pc-compact-submenu > .pc-compact-title .avtar').innerHTML = targetElement.children[0].children[0].outerHTML;
        document.querySelector('.pc-sidebar').classList.add('pc-compact-submenu-active');
        document.querySelector('body').classList.add('pc-compact-submenu-active');

        var pc_new_list = targetElement.parentNode.children[1].outerHTML;
        if (document.querySelector('.pc-compact-submenu > .pc-compact-list')) {
          new SimpleBar(document.querySelector('.pc-compact-submenu > .pc-compact-list'));
        }

        document.querySelector('.pc-compact-submenu > .pc-compact-list .simplebar-content').innerHTML = pc_new_list;
        var tc = document.querySelectorAll('li.pc-trigger');
        for (var t = 0; t < tc.length; t++) {
          var c = tc[t];
          c.classList.remove('pc-trigger');
        }

        targetElement.parentNode.classList.add('pc-trigger');
        var pc_link_click = document.querySelectorAll('.pc-compact-list .simplebar-content>ul > li:not(.pc-caption)');
        for (var i = 0; i < pc_link_click.length; i++) {
          pc_link_click[i].addEventListener('click', function (event) {
            event.stopPropagation();
            var targetElement = event.target;
            if (targetElement.tagName == 'SPAN') {
              targetElement = targetElement.parentNode;
            }
            if (targetElement.parentNode.classList.contains('pc-trigger')) {
              targetElement.parentNode.classList.remove('pc-trigger');
              slideUp(targetElement.parentNode.children[1], 200);
            } else {
              var tc = document.querySelectorAll('.pc-compact-list .simplebar-content>ul li.pc-trigger');
              for (var t = 0; t < tc.length; t++) {
                var c = tc[t];
                c.classList.remove('pc-trigger');
                slideUp(c.children[1], 200);
              }
              targetElement.parentNode.classList.add('pc-trigger');
              var tmp = targetElement.parentNode.children[1];
              if (tmp) {
                slideDown(tmp, 200);
              }
            }
          });
        }

        var pc_sub_link_click = document.querySelectorAll('.pc-compact-list .simplebar-content>ul > li:not(.pc-caption) li');
        for (var i = 0; i < pc_sub_link_click.length; i++) {
          pc_sub_link_click[i].addEventListener('click', function (event) {
            var targetElement = event.target;
            if (targetElement.tagName == 'SPAN') {
              targetElement = targetElement.parentNode;
            }
            event.stopPropagation();
            if (targetElement.parentNode.classList.contains('pc-trigger')) {
              targetElement.parentNode.classList.remove('pc-trigger');
              slideUp(targetElement.parentNode.children[1], 200);
            } else {
              var tc = targetElement.parentNode.parentNode.children;
              for (var t = 0; t < tc.length; t++) {
                var c = tc[t];
                c.classList.remove('pc-trigger');
                if (c.tagName == 'LI') {
                  c = c.children[0];
                }
                if (c.parentNode.classList.contains('pc-hasmenu')) {
                  slideUp(c.parentNode.children[1], 200);
                }
              }
              targetElement.parentNode.classList.add('pc-trigger');
              var tmp = targetElement.parentNode.children[1];
              if (tmp) {
                tmp.removeAttribute('style');
                slideDown(tmp, 200);
              }
            }
          });
        }
      }
    } else {
      document.querySelector('.pc-sidebar').classList.remove('pc-compact-submenu-active');
      document.querySelector('body').classList.remove('pc-compact-submenu-active');
    }
  });
}
})();
