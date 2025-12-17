document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.navbarTheme');
    const cssLink = document.querySelector('link[href="css/styles.css"]');
    let savedTheme = localStorage.getItem('currentTheme') || 'styles';
    if (savedTheme === 'sekiro' && cssLink) {
        cssLink.href = 'css/theme_sekiro.css?v=' + Date.now();
    }
    themeBtn.addEventListener('click', () => {
        if (!cssLink) return;
        if (cssLink.href.includes('theme_sekiro.css')) {
            cssLink.href = 'css/styles.css?v=' + Date.now();
            localStorage.setItem('currentTheme', 'styles');
        } else{
            cssLink.href = 'css/theme_sekiro.css?v=' + Date.now();
            localStorage.setItem('currentTheme', 'sekiro');
        }
    });
    themeBtn.style.cursor ='pointer';
});