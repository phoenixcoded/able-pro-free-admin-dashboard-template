'use strict';
(function () {
document.getElementsByTagName('body')[0].setAttribute('data-pc-layout', 'horizontal');
const pc_link = document.querySelector('.pc-navbar').innerHTML;
const pc_nav_content = document.querySelector('.navbar-content').innerHTML;


var docW = window.innerWidth;
if (docW > 1024) {
  set_horizontal_menu();
  set_edge_menu();
}
window.addEventListener('resize', function () {
  var docW = window.innerWidth;
  document.querySelector('.navbar-content').innerHTML = "";
  document.querySelector('.navbar-content').innerHTML = pc_nav_content;

  if (docW >= 1024) {
      setTimeout(() => {
        reinit_horizontal_menu();
      }, 500);
    } else {
      setTimeout(() => {
        reinit_vertical_menu();
      }, 500);
    }
});
function reinit_vertical_menu() {
  
  feather.replace();
  menu_click(); 

  if (document.querySelector('.navbar-content')) {
    new SimpleBar(document.querySelector('.navbar-content'));
  }

}

function reinit_horizontal_menu() {
  set_horizontal_menu();
  feather.replace();
  set_edge_menu();

  var elem = document.querySelectorAll('.pc-navbar li:not(.pc-trigger) .pc-submenu');
  if (document.querySelector('.pc-sidebar .pc-menu-overlay')) {
    document.querySelector('.pc-sidebar .pc-menu-overlay').remove();
  }

  for (var j = 0; j < elem.length; j++) {
    elem[j].removeAttribute('style');
  }
}
function set_horizontal_menu() {
  var pc_menu_list = document.querySelectorAll('.pc-navbar > li.pc-item');
  var pc_new_list = '';
  var pc_sing_link = '';
  var flag_item = '';
  var flag_item_extra = '';
  var flag_w = 0;
  var flag_cap = false;
  var flag_hit = false;
  var flag_hit_extra = false;

  pc_menu_list.forEach(function (item, list_index) {
    if (item.classList.contains('pc-caption')) {
        
        if (flag_hit_extra === true) {
          if (flag_item_extra.insertAdjacentHTML) {
            var tempicon = "";
            if(flag_item_extra.children[1]){ 
              tempicon = '<span class="pc-micon">' + flag_item_extra.children[1].outerHTML + '</span>';
            }
            flag_item_extra.insertAdjacentHTML(
              'afterend',
              '<li class="pc-item pc-hasmenu">\
                <a href="#!" class="pc-link ">'+
                    tempicon +
                  '<span class="pc-mtext">' +
                    flag_item_extra.children[0].innerHTML +
                  '</span>\
                  <span class="pc-arrow"><i data-feather="chevron-right"></i></span>\
                </a>\
                <ul class="pc-submenu">' +
                  pc_new_list +
                  '\
                </ul>\
            </li>'
            );
            flag_item_extra.remove();
          }
        }

        flag_hit_extra = true;
        pc_new_list = '';
        flag_hit = false;
        flag_item_extra = item;

        if(pc_menu_list[list_index + 1].classList.contains('pc-caption')){
          flag_item_extra.remove();
          pc_new_list = '';
          pc_sing_link = '';
          flag_item = '';
          flag_item_extra = '';
          flag_w = 0;
          flag_cap = false;
          flag_hit = false;
          flag_hit_extra = false;
        }

    } else {

      if (flag_hit === false) {
        pc_sing_link = flag_item;
        flag_hit = true;
      }

      pc_new_list += item.outerHTML;
      if (list_index + 1 === pc_menu_list.length) {
        if (flag_hit_extra === true) {
          if (flag_item_extra.insertAdjacentHTML) {
            flag_item_extra.insertAdjacentHTML(
              'afterend',
              '<li class="pc-item pc-hasmenu">\
                            <a href="#!" class="pc-link ">\
                                <span class="pc-micon">' +
              flag_item_extra.children[1].outerHTML +
              '</span>\
                                <span class="pc-mtext">' +
              flag_item_extra.children[0].innerHTML +
              '</span>\
                                <span class="pc-arrow"><i data-feather="chevron-right"></i></span>\
                            </a>\
                            <ul class="pc-submenu">' +
              pc_new_list +
              '\
                            </ul>\
                        </li>'
            );
            flag_item_extra.remove();
          }
        }

        flag_hit_extra = true;
        pc_new_list = '';
        flag_hit = false;
        flag_item_extra = item;
      }

      if(flag_hit_extra === true){
        item.remove();
      }
    }
  });

  var pc_menu_list_new = document.querySelectorAll('.pc-navbar > li.pc-item');

  pc_menu_list_new.forEach(function (item, list_index) {
    flag_w += get_w(item) + 49;
    if (flag_w > window.innerWidth) {
      if (flag_hit === false) {
        pc_sing_link = flag_item;
        flag_hit = true;
      }
      if (flag_hit === true) {
        pc_new_list += item.outerHTML;
        item.remove();
      }
    } else {
      flag_item = item;
    }
    if (list_index + 1 === pc_menu_list_new.length) {
      if (pc_sing_link.insertAdjacentHTML) {
        pc_sing_link.insertAdjacentHTML(
          'afterend',
          '<li class="pc-item pc-hasmenu">\
                          <a href="#!" class="pc-link ">\
                              <span class="pc-micon"><svg class="pc-icon"><use xlink:href="#custom-clipboard"></use></svg></span>\
                              <span class="pc-mtext">Other</span>\
                              <span class="pc-arrow"><i data-feather="chevron-right"></i></span>\
                          </a>\
                          <ul class="pc-submenu">' +
          pc_new_list +
          '\
                          </ul>\
                      </li>'
        );
      }
    }
  });

  var pc_menu_list_new = document.querySelectorAll('.pc-navbar .pc-trigger');
  pc_menu_list_new.forEach(function (item) {
    item.classList.remove('pc-trigger');
    item.children[1].removeAttribute("style");

    if(item.classList.contains('active')){
      item.classList.remove('active');
    }

  });
}

// open submenu 
function set_edge_menu() {
  var temp_link = document.querySelectorAll('.pc-sidebar .pc-navbar .pc-hasmenu');
  for (var t = 0; t < temp_link.length; t++) {
    var c = temp_link[t];
    c.addEventListener(
      'mouseenter',
      function (event) {
        collapse_edge(event);
      },
      function (event) {
        event.children[1].classList.remove('edge');
        event.children[1].classList.remove('edge-alt');
      }
    );
  }
}

// get width
function get_w(element) {
  var off = element.getBoundingClientRect();
  var w = off.width;
  return w;
}

// get height
function get_h(element) {
  var off = element.getBoundingClientRect();
  var h = off.height;
  return h;
}

// Collapse submenu
function collapse_edge(event) {
  var hpx;
  var docH = window.innerHeight;
  var docW = window.innerWidth;
  
  if (docW > 1024) {
    var targetElement = event.target;
    var elm = targetElement.children[1];
    var off = elm.getBoundingClientRect();
    var l = off.left;
    var t = off.top;
    var w = off.width;
    var h = off.height;
    var edge_pos = l + w <= docW;
    if (!edge_pos) {
      elm.classList.add('edge');
    }

    var edge_pos_alt = t + h <= docH;
    if (!edge_pos_alt) {
      elm.classList.add('edge-alt');

      var edge_pos_alt_big = t >= h;
      if (!edge_pos_alt_big) {
        elm.classList.add('edge-alt-full');
        var drp_t = t - 140;
        var drp_b = docH - t - 140;
        var temp_style = 'top: -' + drp_t + 'px; bottom: -' + drp_b + 'px';
        elm.setAttribute('style', temp_style);
      }
    }
  }
}

})();
