/**
=========================================================================
=========================================================================
Template Name: Able Pro - Tailwind Admin Template
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app
File: themes.js
Description:  this file will contains overall theme setup and handle
              behavior of live custumizer like Dark/Light, LTR/RTL,
              preset color, theme layout, theme contarast etc.
=========================================================================
=========================================================================
*/

'use strict';

var rtl_flag = false;
var dark_flag = false;

document.addEventListener('DOMContentLoaded', function () {
  if (typeof Storage !== 'undefined') {
    layout_change(localStorage.getItem('theme'));
  }
});
// Function to change layout dark/light settings
function layout_change_default() {
  // Determine initial layout based on user's color scheme preference
  let dark_layout = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // Apply the determined layout
  layout_change(dark_layout);

  // Set the active state for the default layout button
  const btn_control = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (btn_control) {
    btn_control.classList.add('active');
  }

  // Listen for changes in the user's color scheme preference and adjust layout accordingly
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    dark_layout = event.matches ? 'dark' : 'light';
    layout_change(dark_layout);
  });
}

// This event listener executes when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Check if elements with class 'preset-color' exist (switch preset-1 to preset-10 colors and change main colors according to preset-* value)
  var if_exist = document.querySelectorAll('.preset-color');
  if (if_exist) {
    // Iterate over preset color links and add click event listeners
    var preset_color = document.querySelectorAll('.preset-color > a');
    for (var h = 0; h < preset_color.length; h++) {
      var c = preset_color[h];
      c.addEventListener('click', function (event) {
        var targetElement = event.target;
        if (targetElement.tagName == 'I') {
          targetElement = targetElement.parentNode;
        }
        // Extract the preset value and call preset_change function
        var presetValue = targetElement.getAttribute('data-value');
        preset_change(presetValue);
      });
    }

    var layout_btn = document.querySelectorAll('.theme-layout .btn');
    for (var t = 0; t < layout_btn.length; t++) {
      if (layout_btn[t]) {
        layout_btn[t].addEventListener('click', function (event) {
          event.stopPropagation();
          var targetElement = event.target;

          if (targetElement.tagName == 'SPAN') {
            targetElement = targetElement.parentNode;
          }
          if (targetElement.getAttribute('data-value') == 'true') {
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light'); // Update theme immediately
          } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark'); // Update theme immediately
          }
        });
      }
    }

  }

  // Initialize SimpleBar on elements with class 'pct-body' for custom scrollbar
  if (document.querySelector('.pct-body')) {
    new SimpleBar(document.querySelector('.pct-body'));
  }

  // Reset layout on button click
  var layout_reset = document.querySelector('#layoutreset');
  if (layout_reset) {
    layout_reset.addEventListener('click', function (e) {
      localStorage.clear();
      location.reload();
      localStorage.setItem('layout', 'vertical');
    });
  }
});

// Functions to handle layout theme contrast change
function layout_theme_contrast_change(value) {
  // Determine the target element based on the value
  const targetElement = document.querySelector(value === 'true' ? 'html' : 'body');

  // Set the 'data-pc-theme_contrast' attribute on the target element
  targetElement.setAttribute('data-pc-theme_contrast', value);

  // Get the currently active button and remove the 'active' class
  const currentActiveBtn = document.querySelector('.theme-contrast .btn.active');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('active');
  }

  // Add the 'active' class to the button corresponding to the provided value
  const newActiveBtn = document.querySelector(`.theme-contrast .btn[data-value='${value}']`);
  if (newActiveBtn) {
    newActiveBtn.classList.add('active');
  }
}

// Functions to handle layout caption change (caption hide/show in sidebar)
function layout_caption_change(value) {
  // Set the attribute on the <html> element based on the value
  if (value == 'true') {
    document.getElementsByTagName('html')[0].setAttribute('data-pc-sidebar-caption', 'true');
  } else {
    document.getElementsByTagName('html')[0].setAttribute('data-pc-sidebar-caption', 'false');
  }

  // Update button states to reflect the current value
  var control = document.querySelector('.theme-nav-caption .btn.active');
  if (control) {
    control.classList.remove('active');
  }
  var newActiveButton = document.querySelector(`.theme-nav-caption .btn[data-value='${value}']`);
  if (newActiveButton) {
    newActiveButton.classList.add('active');
  }
}

// Functions to handle layout preset change (active class add/remove from preset-color according to click)
function preset_change(value) {
  // Set attribute based on value and update active preset color link
  document.getElementsByTagName('html')[0].setAttribute('class', value);
  var control = document.querySelector('.pct-offcanvas');
  if (control) {
    document.querySelector('.preset-color > a.active').classList.remove('active');
    document.querySelector(".preset-color > a[data-value='" + value + "']").classList.add('active');
  }
}

// Functions to handle main layout change (active class add/remove from theme-main-layout according to click)
function main_layout_change(value) {
  // Set the 'data-pc-layout' attribute on the <html> element based on the passed value
  document.getElementsByTagName('html')[0].setAttribute('data-pc-layout', value);

  // Check if the off-canvas menu control element exists
  var control = document.querySelector('.pct-offcanvas');
  if (control) {
    // Find and remove the 'active' class from the currently active link in the main layout section
    var activeLink = document.querySelector('.theme-main-layout > a.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    // Find the new active link based on the value passed to the function and add the 'active' class to it
    var newActiveLink = document.querySelector(".theme-main-layout > a[data-value='" + value + "']");
    if (newActiveLink) {
      newActiveLink.classList.add('active');
    }
  }
}

// Function to handle layout direction change (LTR/RTL)
function layout_rtl_change(value) {
  // Get the HTML element
  var htmlElement = document.getElementsByTagName('html')[0];

  // Determine if RTL is enabled
  if (value === 'true') {
    rtl_flag = true; // Set global RTL flag
    htmlElement.setAttribute('data-pc-direction', 'rtl');
    htmlElement.setAttribute('dir', 'rtl');
    htmlElement.setAttribute('lang', 'ar');

    // Update button states for RTL
    var activeButton = document.querySelector('.theme-direction .btn.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    var rtlButton = document.querySelector(".theme-direction .btn[data-value='true']");
    if (rtlButton) {
      rtlButton.classList.add('active');
    }
  } else {
    rtl_flag = false; // Reset global RTL flag
    htmlElement.setAttribute('data-pc-direction', 'ltr');
    htmlElement.setAttribute('dir', 'ltr');
    htmlElement.removeAttribute('lang');

    // Update button states for LTR
    var activeButton = document.querySelector('.theme-direction .btn.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    var ltrButton = document.querySelector(".theme-direction .btn[data-value='false']");
    if (ltrButton) {
      ltrButton.classList.add('active');
    }
  }
}

// Function to handle layout change (dark/light) and update related elements
function layout_change(layout) {
  // Set the theme layout attribute on the <html> tag
  document.getElementsByTagName('html')[0].setAttribute('data-pc-theme', layout);

  // Remove the 'active' class from the default layout button if it exists
  var btn_control = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (btn_control) {
    btn_control.classList.remove('active');
  }

  // Determine which logos and buttons to update based on the selected layout (dark or light)
  var isDark = layout === 'dark';
  dark_flag = isDark;

  // Update the logos to match the selected layout
  var logoSrc = isDark ? '../assets/images/logo-white.svg' : '../assets/images/logo-dark.svg';

  // Helper function to update a specific element's logo if it exists
  function updateLogo(selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.setAttribute('src', logoSrc);
    }
  }

  // Update logos in the sidebar, navbar, auth footer, and general footer
  updateLogo('.pc-sidebar .m-header .logo-lg');
  updateLogo('.navbar-brand .logo-lg');
  updateLogo('.auth-main.v1 .auth-sidefooter img');
  updateLogo('.footer-top .footer-logo');

  // Manage the active state of theme layout buttons
  var activeControl = document.querySelector('.theme-layout .btn.active');
  if (activeControl) {
    activeControl.classList.remove('active');
  }

  // Set the correct button as active based on the layout
  var newActiveControl = document.querySelector(`.theme-layout .btn[data-value='${isDark ? 'false' : 'true'}']`);
  if (newActiveControl) {
    newActiveControl.classList.add('active');
  }
}

// Function to toggle box container class based on value (true/false)
function change_box_container(value) {
  // Check if the main content area exists
  var contentElement = document.querySelector('.pc-content');
  var footerElement = document.querySelector('.footer-wrapper');

  if (contentElement && footerElement) {
    // Toggle classes based on the value passed
    if (value === 'true') {
      contentElement.classList.add('container');
      footerElement.classList.add('container');
      footerElement.classList.remove('container-fluid');
    } else {
      contentElement.classList.remove('container');
      footerElement.classList.remove('container');
      footerElement.classList.add('container-fluid');
    }

    // Update active button state in the theme container controls
    var activeButton = document.querySelector('.theme-container .btn.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }

    var newActiveButton = document.querySelector(`.theme-container .btn[data-value='${value}']`);
    if (newActiveButton) {
      newActiveButton.classList.add('active');
    }
  }
}