'use strict';
(function () {
document.getElementsByTagName('body')[0].setAttribute('data-pc-layout', 'tab');
const pc_link = document.querySelector('.pc-navbar').innerHTML;
var pc_tab_menu_list = document.querySelector('.tab-container > .tab-sidemenu > .pc-tab-link');
var pc_tab_link_list = document.querySelector('.tab-container > .tab-link > .navbar-content > .tab-content');

if (document.querySelector('.tab-container > .tab-sidemenu')) {
  new SimpleBar(document.querySelector('.tab-container > .tab-sidemenu'));
}

if (document.querySelector('.tab-container > .tab-link .navbar-content')) {
  new SimpleBar(document.querySelector('.tab-container > .tab-link .navbar-content'));
}

var elem = document.querySelectorAll('.pc-navbar li .pc-submenu');
for (var j = 0; j < elem.length; j++) {
  elem[j].style.display = 'none';
}

set_tab_menu();

// set tab menu
function set_tab_menu() {
  var pc_menu_list = document.querySelectorAll('.pc-navbar > li.pc-item');
  var pc_new_list = '';
  var flag_count = 0;
  var flag_hit = false;
  var temp_blank_list = "";

  pc_menu_list.forEach(function (item, list_index) {
    if (item.classList.contains('pc-caption')) {
      if (pc_tab_menu_list) {
        flag_count += 1;
        var tempicon = "";
        try {
          tempicon = item.children[1].outerHTML;
        }
        catch (err) {
          tempicon = item.children[0].innerHTML.charAt(0);
        }
        pc_tab_menu_list.insertAdjacentHTML(
          "beforeend",
          '<li class="nav-item" data-bs-toggle="tooltip" title="' + item.children[0].innerHTML + '"><a class="nav-link" id="pc-tab-link-' + flag_count + '" data-bs-target="#pc-tab-' + flag_count + '" role="tab" data-bs-toggle="tab" aria-controls="home-tab-pane"\
            "data-bs-placement="right">' +
          tempicon +
          '</a></li>'
        );

      }
      if (flag_hit === true) {
        
        if (pc_tab_link_list) {
          var tmp_flag_count = flag_count - 1;
          if (tmp_flag_count == 0) {
            temp_blank_list = pc_new_list;
          }
          if (tmp_flag_count == 1) {            
            temp_blank_list += pc_new_list;
            pc_new_list = temp_blank_list;
            temp_blank_list = "";
          }
          pc_tab_link_list.insertAdjacentHTML(
            "beforeend",
            '<div class="tab-pane fade" id="pc-tab-' + tmp_flag_count + '" role="tabpanel" aria-labelledby="pc-tab-link-' + tmp_flag_count + '" tabindex="' + tmp_flag_count + '"><ul class="pc-navbar">\
              '+ pc_new_list + '\
              </ul></div>'
          );
          pc_new_list = "";
        }
      }
      item.remove();
    } else {
      pc_new_list += item.outerHTML;
      flag_hit = true;
      item.remove();
      if (list_index + 1 === pc_menu_list.length) {
        if (pc_tab_link_list) {
          var tmp_flag_count = flag_count;
          pc_tab_link_list.insertAdjacentHTML(
            "beforeend",
            '<div class="tab-pane fade" id="pc-tab-' + tmp_flag_count + '" role="tabpanel" aria-labelledby="pc-tab-link-' + tmp_flag_count + '" tabindex="' + tmp_flag_count + '"><ul class="pc-navbar">\
              '+ pc_new_list + '\
              </ul></div>'
          );
          pc_new_list = "";
        }
      }
    }
  });

  active_menu();
  menu_click();
}

// set active item
function active_menu() {
  // active menu item list start
  var elem = document.querySelectorAll('.pc-sidebar .pc-navbar a');
  for (var l = 0; l < elem.length; l++) {

    var pageUrl = window.location.href.split(/[?#]/)[0];
    if (elem[l].href == pageUrl && elem[l].getAttribute('href') != '') {
      elem[l].parentNode.classList.add('active');

      elem[l].parentNode.parentNode.parentNode.classList.add('pc-trigger');
      elem[l].parentNode.parentNode.parentNode.classList.add('active');
      elem[l].parentNode.parentNode.style.display = 'block';

      elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('pc-trigger');
      elem[l].parentNode.parentNode.parentNode.parentNode.style.display = 'block';
      var temp_flag = true;
      var cont = elem[l];

      while (temp_flag) {
        var cont = cont.parentNode;
        if (cont.classList.contains('tab-pane')) {
          var active_tab = cont.getAttribute('id');

          const triggerEl = document.querySelector('.tab-sidemenu a[data-bs-target="#' + active_tab + '"]');
          var actTab = new bootstrap.Tab(triggerEl);
          actTab.show();

          var temp_flag = false;
        }
      }
    }
  }
}
})();