document.addEventListener('DOMContentLoaded', function () {
    // // Initialize dark mode on page load
    // if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark');
    // } else {
    //     document.documentElement.classList.remove('dark');
    // }

    // // Get current theme
    // var currentTheme = localStorage.getItem('color-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // // Get theme toggle elements
    // var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    // var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    // var themeToggleDarkIcon_2 = document.getElementById('theme-toggle-dark-icon-2');
    // var themeToggleLightIcon_2 = document.getElementById('theme-toggle-light-icon-2');

    // // Function to apply theme to background
    // function apply_theme(theme) {
    //     var bg = document.getElementById('background');
    //     // if (bg) {
    //     //     if (theme === 'dark') {
    //     //         bg.style.backgroundColor = '#1e293b'; // dark mode color
    //     //     } else {
    //     //         bg.style.backgroundColor = '#fff7dc'; // light mode color
    //     //     }
    //     // }
    // }

    // // Apply initial theme
    // apply_theme(currentTheme);

    // // Show the correct icon based on current theme
    // if (currentTheme === 'dark') {
    //     // In dark mode, show light/sun icon (to switch to light)
    //     if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
    //     if (themeToggleLightIcon_2) themeToggleLightIcon_2.classList.remove('hidden');
    // } else {
    //     // In light mode, show dark/moon icon (to switch to dark)
    //     if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
    //     if (themeToggleDarkIcon_2) themeToggleDarkIcon_2.classList.remove('hidden');
    // }

    // function sync_theme() {
    //     // Toggle dark mode
    //     if (document.documentElement.classList.contains('dark')) {
    //         document.documentElement.classList.remove('dark');
    //         localStorage.setItem('color-theme', 'light');
    //         apply_theme('light');
    //     } else {
    //         document.documentElement.classList.add('dark');
    //         localStorage.setItem('color-theme', 'dark');
    //         apply_theme('dark');
    //     }
        
    //     // Toggle all icons
    //     if (themeToggleDarkIcon) themeToggleDarkIcon.classList.toggle('hidden');
    //     if (themeToggleLightIcon) themeToggleLightIcon.classList.toggle('hidden');
    //     if (themeToggleDarkIcon_2) themeToggleDarkIcon_2.classList.toggle('hidden');
    //     if (themeToggleLightIcon_2) themeToggleLightIcon_2.classList.toggle('hidden');
    // }

    // Desktop theme toggle button
    var themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            sync_theme();
        });
    }

    // Mobile theme toggle button
    var themeToggleBtn_2 = document.getElementById('theme-toggle-2');
    if (themeToggleBtn_2) {
        themeToggleBtn_2.addEventListener('click', function () {
            sync_theme();
        });
    }

    // Hamburger menu - open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // Hamburger menu - close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

});


