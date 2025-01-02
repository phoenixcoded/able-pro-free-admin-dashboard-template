
/**
=========================================================================
=========================================================================
Template Name: Able Pro - Bootstrap  Admin Template
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
  if (document.querySelector('body').hasAttribute('data-pc-layout')) {
    if (document.querySelector('body').getAttribute('data-pc-layout') == 'horizontal') {
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
  // header dropdown scrollbar end

  // component scrollbar start
  if (document.querySelector('.component-list-card .card-body')) {
    new SimpleBar(document.querySelector('.component-list-card .card-body'));
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
  menu_click(); // Call menu_click function
  // Initialize scrollbar if navbar-content exists
  if (document.querySelector('.navbar-content')) {
    new SimpleBar(document.querySelector('.navbar-content'));
  }
}

// Function to hide mobile menu (sidebar hide on click overlay)
function rm_menu() {
  // Remove active class from mobile menu elements
  var menu_list = document.querySelector('.pc-sidebar');
  if (menu_list) {
    document.querySelector('.pc-sidebar').classList.remove('mob-sidebar-active');
  }
  if (document.querySelector('.topbar')) {
    document.querySelector('.topbar').classList.remove('mob-sidebar-active');
  }

  // Remove menu overlay elements
  document.querySelector('.pc-sidebar .pc-menu-overlay').remove();
  if (document.querySelector('.topbar .pc-menu-overlay')) {
    document.querySelector('.topbar .pc-menu-overlay').remove();
  }
}

// Function to remove overlay menu
function remove_overlay_menu() {
  // Remove active class and overlay elements
  document.querySelector('.pc-sidebar').classList.remove('pc-over-menu-active');
  if (document.querySelector('.topbar')) {
    document.querySelector('.topbar').classList.remove('mob-sidebar-active');
  }
  document.querySelector('.pc-sidebar .pc-menu-overlay').remove();
  document.querySelector('.topbar .pc-menu-overlay').remove();
}

// Event listener to initialize tooltips, popovers, and toasts on window load
window.addEventListener('load', function () {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Initialize toasts
  var toastElList = [].slice.call(document.querySelectorAll('.toast'));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });

  // Remove pre-loader after page load
  var loader = document.querySelector('.loader-bg');
  if (loader) {
    loader.remove();
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

// Event listener to handle like events (added to favourites)
// Select all checkboxes inside elements with the 'prod-likes' class
var tc = document.querySelectorAll('.prod-likes .form-check-input');

// Loop through each like checkbox
for (var t = 0; t < tc.length; t++) {
  var prod_like = tc[t]; // Assign current checkbox to prod_like variable

  // Add event listener to detect changes on the checkbox (checked or unchecked)
  prod_like.addEventListener('change', function (event) {
    var currentCheckbox = event.currentTarget; // The checkbox that triggered the event

    if (currentCheckbox.checked) {
      // If checkbox is checked (i.e., user liked the product)

      // Create and insert the like animation HTML into the DOM
      currentCheckbox.parentNode.insertAdjacentHTML(
        'beforeend',
        '<div class="pc-like">' +
          '<div class="like-wrapper">' +
          '<span>' +
          '<span class="pc-group">' +
          '<span class="pc-dots"></span>' +
          '<span class="pc-dots"></span>' +
          '<span class="pc-dots"></span>' +
          '<span class="pc-dots"></span>' +
          '</span>' +
          '</span>' +
          '</div>' +
          '</div>'
      );

      // Add animation class to trigger CSS-based animations
      currentCheckbox.parentNode.querySelector('.pc-like').classList.add('pc-like-animate');

      // Remove the like animation after 3 seconds to clean up
      setTimeout(function () {
        try {
          currentCheckbox.parentNode.querySelector('.pc-like').remove();
        } catch (error) {
          console.error("Error removing like animation:", error);
        }
      }, 3000);

    } else {
      // If checkbox is unchecked (i.e., user unliked the product)
      
      // Try to remove the like animation immediately
      try {
        currentCheckbox.parentNode.querySelector('.pc-like').remove();
      } catch (error) {
        console.error("Error removing like animation:", error);
      }
    }
  });
}


// Change authentication logo
var tc = document.querySelectorAll('.auth-main.v2 .img-brand');
for (var t = 0; t < tc.length; t++) {
  tc[t].setAttribute('src', '../assets/images/logo-white.svg');
}

// Functions to handle main layout change (active class add/remove from theme-main-layout according to click)
function main_layout_change(value) {
  // Set attribute based on value and update active main layout link
  document.getElementsByTagName('body')[0].setAttribute('data-pc-layout', value);
  var control = document.querySelector('.pct-offcanvas');
  if (control) {
    var activeLink = document.querySelector('.theme-main-layout > a.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }
    var newActiveLink = document.querySelector(".theme-main-layout > a[data-value='" + value + "']");
    if (newActiveLink) {
      newActiveLink.classList.add('active');
    }
  }
}


// Function to remove CSS classes with a given prefix from a DOM node
function removeClassByPrefix(node, prefix) {
  // Iterate over class list and remove classes with the specified prefix
  for (let i = 0; i < node.classList.length; i++) {
    let value = node.classList[i];
    if (value.startsWith(prefix)) {
      node.classList.remove(value);
    }
  }
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
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

// =======================================================
// =======================================================
