/**
=========================================================================
=========================================================================
Template Name: Able Pro - Tailwind Admin Template
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app
File: script.js
Description:  this file will contains behavior, properties, 
              functionality and interactions of a small module of ui element 
              which used to build a theme layout.
=========================================================================
=========================================================================
*/
'use strict';
var flg = '0';

// Function to handle menu click events (collpase menus and it's submenu also collapse)

function menu_click() {
  // Remove click event listeners from navigation menu items
  var elem = document.querySelectorAll('.pc-navbar li');
  for (var j = 0; j < elem.length; j++) {
    elem[j].removeEventListener('click', function () {});
  }

  // Hide submenu items (when menu link not active then submenu hide)
  var elem = document.querySelectorAll('.pc-navbar li:not(.pc-trigger) .pc-submenu');
  for (var j = 0; j < elem.length; j++) {
    elem[j].style.display = 'none';
  }

  // Add click event listeners to main menu items (for first menu level collapse)
  var pc_link_click = document.querySelectorAll('.pc-navbar > li:not(.pc-caption).pc-hasmenu');
  for (var i = 0; i < pc_link_click.length; i++) {
    pc_link_click[i].addEventListener('click', function (event) {
      // Prevent parent elements from triggering their events
      event.stopPropagation();
      var targetElement = event.target;
      if (targetElement.tagName == 'SPAN') {
        targetElement = targetElement.parentNode;
      }
      // Toggle submenu visibility (active remove who has menu link not clicked and it's submenu also hide)
      if (targetElement.parentNode.classList.contains('pc-trigger')) {
        targetElement.parentNode.classList.remove('pc-trigger');
        slideUp(targetElement.parentNode.children[1], 200);
        window.setTimeout(() => {
          targetElement.parentNode.children[1].removeAttribute('style');
          targetElement.parentNode.children[1].style.display = 'none';
        }, 200);
      } else {
        // Close other open submenus
        var tc = document.querySelectorAll('li.pc-trigger');
        for (var t = 0; t < tc.length; t++) {
          var c = tc[t];
          c.classList.remove('pc-trigger');
          slideUp(c.children[1], 200);
          window.setTimeout(() => {
            c.children[1].removeAttribute('style');
            c.children[1].style.display = 'none';
          }, 200);
        }

        // Open clicked submenu (for active menu link)
        targetElement.parentNode.classList.add('pc-trigger');
        var submenu_list = targetElement.children[1];
        if (submenu_list) {
          slideDown(targetElement.parentNode.children[1], 200);
        }
      }
    });
  }

  // Initialize SimpleBar for navbar content if available
  if (document.querySelector('.navbar-content')) {
    new SimpleBar(document.querySelector('.navbar-content'));
  }

  // Add click event listeners to submenu items
  var pc_sub_link_click = document.querySelectorAll('.pc-navbar > li:not(.pc-caption) li.pc-hasmenu');
  for (var i = 0; i < pc_sub_link_click.length; i++) {
    pc_sub_link_click[i].addEventListener('click', function (event) {
      var targetElement = event.target;
      if (targetElement.tagName == 'SPAN') {
        targetElement = targetElement.parentNode;
      }
      event.stopPropagation();
      // Toggle submenu visibility
      if (targetElement.parentNode.classList.contains('pc-trigger')) {
        targetElement.parentNode.classList.remove('pc-trigger');
        slideUp(targetElement.parentNode.children[1], 200);
      } else {
        // Close other open submenus
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

        // Open clicked submenu
        targetElement.parentNode.classList.add('pc-trigger');
        var submenu_list = targetElement.parentNode.children[1];
        if (submenu_list) {
          submenu_list.removeAttribute('style');
          slideDown(submenu_list, 200);
        }
      }
    });
  }
}

// Initialize menu click function on DOMContentLoaded (function call on page load)
document.addEventListener('DOMContentLoaded', menu_click);

// Initialize various components on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // feather icon start
  feather.replace();
  // feather icon end

  // Check for specific layout and add scrollbar if necessary(add scrollbar from 1024 screen size in horizontal layout)
  if (document.querySelector('html').hasAttribute('data-pc-layout')) {
    if (document.querySelector('html').getAttribute('data-pc-layout') == 'horizontal') {
      var docW = window.innerWidth;
      if (docW <= 1024) {
        add_scroller();
      }
    }
  } else {
    add_scroller();
  }

  // Menu collapse click start (when click it's open and close sidebar for mobile screen)
  var mobile_collapse_over = document.querySelector('#mobile-collapse');
  if (mobile_collapse_over) {
    mobile_collapse_over.addEventListener('click', function () {
      var mobile_sidebar = document.querySelector('.pc-sidebar');
      if (mobile_sidebar) {
        if (document.querySelector('.pc-sidebar').classList.contains('mob-sidebar-active')) {
          rm_menu();
        } else {
          document.querySelector('.pc-sidebar').classList.add('mob-sidebar-active');
          // add overlay when sidebar open
          document.querySelector('.pc-sidebar').insertAdjacentHTML('beforeend', '<div class="pc-menu-overlay"></div>');
          document.querySelector('.pc-menu-overlay').addEventListener('click', function () {
            rm_menu();
          });
        }
      }
    });
  }
  // Menu collapse click end

  // header dropdown scrollbar start
  if (document.querySelector('.header-notification-scroll')) {
    new SimpleBar(document.querySelector('.header-notification-scroll'));
  }

  if (document.querySelector('.profile-notification-scroll')) {
    new SimpleBar(document.querySelector('.profile-notification-scroll'));
  }
  
  if (document.querySelector('.announcement-scroll-block')) {
    new SimpleBar(document.querySelector('.announcement-scroll-block'));
  }
  // header dropdown scrollbar end

  // component scrollbar start
  if (document.querySelector('.component-list-card .scroll-div')) {
    new SimpleBar(document.querySelector('.component-list-card .scroll-div'));
  }
  // component- dropdown scrollbar end

  // for sidebar close
  var sidebar_hide = document.querySelector('#sidebar-hide');
  if (sidebar_hide) {
    sidebar_hide.addEventListener('click', function () {
      if (document.querySelector('.pc-sidebar').classList.contains('pc-sidebar-hide')) {
        document.querySelector('.pc-sidebar').classList.remove('pc-sidebar-hide');
      } else {
        document.querySelector('.pc-sidebar').classList.add('pc-sidebar-hide');
      }
    });
  }

  // for input focus add when click search icon
  if (document.querySelector('.trig-drp-search')) {
    const search_drp = document.querySelector('.trig-drp-search');
    search_drp.addEventListener('shown.bs.dropdown', (event) => {
      document.querySelector('.drp-search input').focus();
    });
  }

  // layout options (when click customizer layout options according to that set value in local storage)
  setLayout();
  var if_layout = document.querySelectorAll('.theme-main-layout');
  var layoutValue = 'vertical';
  if (if_layout) {
    var preset_layout = document.querySelectorAll('.theme-main-layout > a');
    preset_layout.forEach(function (element) {
      element.addEventListener('click', function () {
        // Reload the page after setting the layout for the first time to sync in all open tabs
        location.reload();

        document.querySelectorAll('.theme-main-layout > a').forEach(function (el) {
          el.classList.remove('active');
        });
        this.classList.add('active');
        if (this.getAttribute('data-value') == 'horizontal') {
          layoutValue = 'horizontal';
        } else if (this.getAttribute('data-value') == 'compact') {
          layoutValue = 'compact';
        } else if (this.getAttribute('data-value') == 'tab') {
          layoutValue = 'tab';
        } else if (this.getAttribute('data-value') == 'color-header') {
          layoutValue = 'color-header';
        } else {
          layoutValue = 'vertical';
        }

        // Set data to localStorage
        localStorage.setItem('layout', layoutValue);

        setLayout();
      });
    });
  }
});

// Function to set the layout based on data stored in localStorage
function setLayout() {
  var layout = localStorage.getItem('layout'); // Retrieve layout data from localStorage

  // Pass the layout value to main_layout_change function
  main_layout_change(layout);

  // Load corresponding scripts or perform actions based on the layout value
  if (layout !== null && layout !== '') {
    var script = document.createElement('script');
    if (layout === 'horizontal') {
      document.querySelector('.pc-sidebar').classList.add('d-none');
      script.src = '../assets/js/layout-horizontal.js'; // Load script for horizontal layout
      document.body.appendChild(script);
    } else if (layout === 'color-header') {
      // Change logo color for color-header layout
      if (document.querySelector('.pc-sidebar .m-header .logo-lg')) {
        document.querySelector('.pc-sidebar .m-header .logo-lg').setAttribute('src', '../assets/images/logo-white.svg');
      }
    } else if (layout === 'compact') {
      script.src = '../assets/js/layout-compact.js'; // Load script for compact layout
      document.body.appendChild(script);
    } else if (layout === 'tab') {
      script.src = '../assets/js/layout-tab.js'; // Load script for tab layout
      document.body.appendChild(script);
    }
  }

  // If no layout data found in localStorage, set default layout to 'vertical'
  if (layout === null) {
    main_layout_change('vertical');
    localStorage.setItem('layout', 'vertical');
  }
}

// Function to handle menu click and scrollbar initialization
function add_scroller() {
  // Initialize scrollbar if navbar-content exists
  if (document.querySelector('.navbar-content')) {
    new SimpleBar(document.querySelector('.navbar-content'));
  }
}

// Function to hide mobile menu (sidebar hide on click overlay)
function rm_menu() {
  // Remove active class from mobile menu elements
  var sidebar = document.querySelector('.pc-sidebar');
  var topbar = document.querySelector('.topbar');

  if (sidebar) {
    sidebar.classList.remove('mob-sidebar-active');
  }
  if (topbar) {
    topbar.classList.remove('mob-sidebar-active');
  }

  // Remove menu overlay elements with error checking
  var sidebarOverlay = document.querySelector('.pc-sidebar .pc-menu-overlay');
  var topbarOverlay = document.querySelector('.topbar .pc-menu-overlay');

  if (sidebarOverlay) {
    sidebarOverlay.remove();
  }
  if (topbarOverlay) {
    topbarOverlay.remove();
  }
}

// Function to remove overlay menu
function remove_overlay_menu() {
  // Remove active class from sidebar and topbar if they exist
  var sidebar = document.querySelector('.pc-sidebar');
  var topbar = document.querySelector('.topbar');

  if (sidebar) {
    sidebar.classList.remove('pc-over-menu-active');
    var sidebarOverlay = sidebar.querySelector('.pc-menu-overlay');
    if (sidebarOverlay) {
      sidebarOverlay.remove();
    }
  }

  if (topbar) {
    topbar.classList.remove('mob-sidebar-active');
    var topbarOverlay = topbar.querySelector('.pc-menu-overlay');
    if (topbarOverlay) {
      topbarOverlay.remove();
    }
  }
}

// Event listener to initialize tooltips, popovers, and toasts on window load
window.addEventListener('load', function () {
  // Remove pre-loader after page load with a fade-out effect
  var loader = document.querySelector('.loader-bg');
  if (loader) {
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';

    // Wait for the fade-out transition to complete before removing the element
    setTimeout(function () {
      loader.remove();
    }, 500); // Duration matches the CSS transition duration
  }
});

// Function to mark active menu items based on current page URL
var elem = document.querySelectorAll('.pc-sidebar .pc-navbar a');
for (var l = 0; l < elem.length; l++) {
  // Check if current URL matches menu item URL
  var pageUrl = window.location.href.split(/[?#]/)[0];
  if (elem[l].href == pageUrl && elem[l].getAttribute('href') != '') {
    // Add active class to matching menu item and its parent elements
    elem[l].parentNode.classList.add('active');
    elem[l].parentNode.parentNode.parentNode.classList.add('pc-trigger');
    elem[l].parentNode.parentNode.parentNode.classList.add('active');
    elem[l].parentNode.parentNode.style.display = 'block';
    elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('pc-trigger');
    elem[l].parentNode.parentNode.parentNode.parentNode.style.display = 'block';
  }
}

// Change authentication logo
document.querySelectorAll('.auth-main.v2 .img-brand').forEach((img) => {
  img.setAttribute('src', '../assets/images/logo-white.svg');
});

// Function to remove CSS classes with a given prefix from a DOM node
function removeClassByPrefix(node, prefix) {
  // Create a copy of the class list to avoid issues with dynamic length
  node.classList.forEach((value) => {
    if (value.startsWith(prefix)) {
      node.classList.remove(value);
    }
  });
}

// Functions for sliding up, sliding down, and toggling visibility of elements
let slideUp = (target, duration = 0) => {
  // Slide up animation implementation
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
};

let slideDown = (target, duration = 0) => {
  // Slide down animation implementation
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none') display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

var slideToggle = (target, duration = 0) => {
  // Slide toggle animation implementation
  if (window.getComputedStyle(target).height === '0px') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

// =======================================================
// =======================================================