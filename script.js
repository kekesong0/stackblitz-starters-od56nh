let selectedColor = '';

// Theme Toggle: Light (unchecked) and Dark (checked)
document.getElementById('themeToggle').addEventListener('change', function () {
    if (this.checked) {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
});

document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        selectedColor = this.getAttribute('data-color');
        document.documentElement.style.setProperty('--highlight-color', selectedColor);
    });
});

// Apply light theme function
function applyLightTheme() {
    document.documentElement.style.setProperty('--bg-color', '#e0e0e0');
    document.documentElement.style.setProperty('--panel-color', '#f5f5f5');
    document.documentElement.style.setProperty('--text-color', '#333');
    document.documentElement.style.setProperty('--button-bg-color', '#d1d1d1');
    document.documentElement.style.setProperty('--button-hover-bg-color', '#c0c0c0');
}

// Apply dark theme function
function applyDarkTheme() {
    document.documentElement.style.setProperty('--bg-color', '#333');
    document.documentElement.style.setProperty('--panel-color', '#444');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--button-bg-color', '#555');
    document.documentElement.style.setProperty('--button-hover-bg-color', '#666');
}

// Apply button functionality
function applyTheme() {
    if (selectedColor) {
        document.documentElement.style.setProperty('--bg-color', selectedColor);
        document.documentElement.style.setProperty('--panel-color',selectedColor);
    }
}

// Reset button functionality
function resetTheme() {
    applyLightTheme();
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
    selectedColor = '';
    document.getElementById('themeToggle').checked = false; 
}
