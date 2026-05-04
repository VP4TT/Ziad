function changeTheme() {
    var body = document.body;
    var button = document.getElementById('theme-btn');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        button.textContent = 'Switch Theme';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        button.textContent = 'Switch Theme';
        localStorage.setItem('theme', 'dark');
    }
}

window.onload = function() {
    var savedTheme = localStorage.getItem('theme');
    var themeBtn = document.getElementById('theme-btn');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeBtn) {
            themeBtn.textContent = 'Switch Theme';
        }
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
