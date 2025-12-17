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

document.addEventListener('DOMContentLoaded', () =>{
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiCodePosition = 0;
    document.addEventListener('keydown', (e) => {
        if(e.keyCode === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                showYoutubePopup();
                konamiCodePosition = 0 ;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    function showYoutubePopup(){
        const overlay = document.createElement('div');
        overlay.className ='konamiOverlay';
        const popup = document.createElement('div');
        popup.className ='konamiPopup';

        popup.innerHTML='<h2 class="konamiTitle">Konami Code Activé !</h2> <p class="konamiText">Tu as découvert le secret...</p> <a href="https://youtu.be/dQw4w9WgXcQ?si=5phB1YTA0xTWh5Lh" target="_blank" class="konamiLink">Clique pour avoir ta récompense</a><button class="konamiClose">Fermer</button>';

        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        const  closeBtn = popup.querySelector('.konamiClose');
        closeBtn.addEventListener('click', () =>{
            popup.remove();
            overlay.remove();
        });
        overlay.addEventListener('click', () =>{
            popup.remove();
            overlay.remove();
        });
    }
});