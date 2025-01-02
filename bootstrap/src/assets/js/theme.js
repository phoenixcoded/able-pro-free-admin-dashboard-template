/**
=========================================================================
=========================================================================
Template Name: Able Pro - Bootstrap Admin Template
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
// Wait for the DOM to fully load before executing the function
document.addEventListener('DOMContentLoaded', function () {
  // Check if the browser supports Web Storage API (localStorage/sessionStorage)
  if (typeof Storage !== 'undefined') {
    // Retrieve the 'theme' value from localStorage
    var savedTheme = localStorage.getItem('theme');

    // Call the layout_change function to apply the stored theme if it exists
    if (savedTheme) {
      layout_change(savedTheme);
    }
  } else {
    console.warn('Web Storage API is not supported in this browser.');
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

var layout_btn = document.querySelectorAll('.theme-layout .btn');
for (var t = 0; t < layout_btn.length; t++) {
  if (layout_btn[t]) {
    layout_btn[t].addEventListener('click', function (event) {
      event.stopPropagation();
      var targetElement = event.target;

      if (targetElement.tagName == 'SPAN') {
        targetElement = targetElement.parentNode;
      }
      if (targetElement.tagName == 'SPAN') {
        targetElement = targetElement.parentNode;
      }
      if (targetElement.getAttribute('data-value') == 'true') {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  }
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
        if (targetElement.tagName == 'SPAN') {
          targetElement = targetElement.parentNode;
        }
        // Extract the preset value and call preset_change function
        var presetValue = targetElement.getAttribute('data-value');
        preset_change(presetValue);
      });
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
  // Select the body element and the active button from the contrast theme buttons
  var bodyElement = document.getElementsByTagName('body')[0];
  var activeButton = document.querySelector('.theme-contrast .btn.active');

  // Set the body attribute for theme contrast based on the value ('true' or 'false')
  bodyElement.setAttribute('data-pc-theme_contrast', value);

  // If an active button exists, remove the 'active' class from it
  if (activeButton) {
    activeButton.classList.remove('active');
  }

  // Add the 'active' class to the new button that matches the selected value
  var newActiveButton = document.querySelector(`.theme-contrast .btn[data-value='${value}']`);
  if (newActiveButton) {
    newActiveButton.classList.add('active');
  }
}


// Functions to handle layout caption change (caption hide/show in sidebar)
function layout_caption_change(value) {
  // Set attribute based on value and update button state accordingly
  if (value == 'true') {
    document.getElementsByTagName('body')[0].setAttribute('data-pc-sidebar-caption', 'true');
    var control = document.querySelector('.theme-nav-caption .btn.active');
    if (control) {
      document.querySelector('.theme-nav-caption .btn.active').classList.remove('active');
      document.querySelector(".theme-nav-caption .btn[data-value='true']").classList.add('active');
    }
  } else {
    document.getElementsByTagName('body')[0].setAttribute('data-pc-sidebar-caption', 'false');
    var control = document.querySelector('.theme-nav-caption .btn.active');
    if (control) {
      document.querySelector('.theme-nav-caption .btn.active').classList.remove('active');
      document.querySelector(".theme-nav-caption .btn[data-value='false']").classList.add('active');
    }
  }
}

// Functions to handle layout preset change (active class add/remove from preset-color according to click)
function preset_change(value) {
  // Set attribute based on value and update active preset color link
  document.getElementsByTagName('body')[0].setAttribute('data-pc-preset', value);
  var control = document.querySelector('.pct-offcanvas');
  if (control) {
    document.querySelector('.preset-color > a.active').classList.remove('active');
    document.querySelector(".preset-color > a[data-value='" + value + "']").classList.add('active');
  }
}


// Function to handle layout direction change (LTR/RTL)
function layout_rtl_change(value) {
  // Get references to key elements
  var bodyElement = document.getElementsByTagName('body')[0];
  var htmlElement = document.getElementsByTagName('html')[0];
  var activeButton = document.querySelector('.theme-direction .btn.active');

  // Check if RTL mode is being activated
  if (value === 'true') {
    rtl_flag = true;

    // Set the body and html to RTL mode
    bodyElement.setAttribute('data-pc-direction', 'rtl');
    htmlElement.setAttribute('dir', 'rtl');
    htmlElement.setAttribute('lang', 'ar');
    
    // Update button states
    if (activeButton) {
      activeButton.classList.remove('active');
      document.querySelector(".theme-direction .btn[data-value='true']").classList.add('acxtive');
    }
    
  } else {
    rtl_flag = false;

    // Reset the body and html to LTR (default) mode
    bodyElement.setAttribute('data-pc-direction', 'ltr');
    htmlElement.removeAttribute('dir');
    htmlElement.removeAttribute('lang');
    
    // Update button states
    if (activeButton) {
      activeButton.classList.remove('active');
      document.querySelector(".theme-direction .btn[data-value='false']").classList.add('active');
    }
  }
}

// Function to handle layout change (dark/light) and update related elements
function layout_change(layout) {
  // Set the layout theme attribute on the body element
  document.getElementsByTagName('body')[0].setAttribute('data-pc-theme', layout);

  // Deactivate the default layout button if it exists
  var defaultBtnControl = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (defaultBtnControl) {
    defaultBtnControl.classList.remove('active');
  }

  // Check if the theme is 'dark' and adjust logos and button states accordingly
  if (layout === 'dark') {
    dark_flag = true;

    // Update logo to white version for dark theme
    updateLogo('.pc-sidebar .m-header .logo-lg', '../assets/images/logo-white.svg');
    updateLogo('.navbar-brand .logo-lg', '../assets/images/logo-white.svg');
    updateLogo('.auth-main.v1 .auth-sidefooter img', '../assets/images/logo-white.svg');
    updateLogo('.footer-top .footer-logo', '../assets/images/logo-white.svg');

    // Update active button state for dark theme
    updateActiveButton('.theme-layout .btn[data-value="false"]');
    
  } else {
    dark_flag = false;

    // Update logo to dark version for light theme
    updateLogo('.pc-sidebar .m-header .logo-lg', '../assets/images/logo-dark.svg');
    updateLogo('.navbar-brand .logo-lg', '../assets/images/logo-dark.svg');
    updateLogo('.auth-main.v1 .auth-sidefooter img', '../assets/images/logo-dark.svg');
    updateLogo('.footer-top .footer-logo', '../assets/images/logo-dark.svg');

    // Update active button state for light theme
    updateActiveButton('.theme-layout .btn[data-value="true"]');
  }
}

// Helper function to update the logo image source
function updateLogo(selector, newSrc) {
  var logo = document.querySelector(selector);
  if (logo) {
    logo.setAttribute('src', newSrc);
  }
}

// Helper function to update the active button state
function updateActiveButton(selector) {
  var activeBtn = document.querySelector('.theme-layout .btn.active');
  if (activeBtn) {
    activeBtn.classList.remove('active');
  }
  var newActiveBtn = document.querySelector(selector);
  if (newActiveBtn) {
    newActiveBtn.classList.add('active');
  }
}

// Function to toggle box container class based on value (true/false)
function change_box_container(value) {
  var contentElement = document.querySelector('.pc-content');
  var footerWrapper = document.querySelector('.footer-wrapper');

  // Check if the necessary elements are present before proceeding
  if (contentElement && footerWrapper) {
    
    // If value is 'true', switch layout to boxed (container class)
    if (value === 'true') {
      contentElement.classList.add('container');
      footerWrapper.classList.add('container');
      footerWrapper.classList.remove('container-fluid');

      // Update active button state to 'true'
      var activeBtn = document.querySelector('.theme-container .btn.active');
      if (activeBtn) {
        activeBtn.classList.remove('active');
      }
      var newActiveBtn = document.querySelector('.theme-container .btn[data-value="true"]');
      if (newActiveBtn) {
        newActiveBtn.classList.add('active');
      }

    } else {
      // Otherwise, switch layout to fluid (container-fluid class)
      contentElement.classList.remove('container');
      footerWrapper.classList.remove('container');
      footerWrapper.classList.add('container-fluid');

      // Update active button state to 'false'
      var activeBtn = document.querySelector('.theme-container .btn.active');
      if (activeBtn) {
        activeBtn.classList.remove('active');
      }
      var newActiveBtn = document.querySelector('.theme-container .btn[data-value="false"]');
      if (newActiveBtn) {
        newActiveBtn.classList.add('active');
      }
    }
  }
}


// ----------    new setup end   ------------
