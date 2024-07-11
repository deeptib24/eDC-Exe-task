document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeSwitcher = document.getElementById('theme-switcher');

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        header.classList.toggle('dark');
        header.classList.toggle('light');
        hero.classList.toggle('dark');
        hero.classList.toggle('light');
        projects.classList.toggle('dark');
        projects.classList.toggle('light');
        footer.classList.toggle('dark');
        footer.classList.toggle('light');
    });

    // Initialize theme based on preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
    } else {
        body.classList.add('light');
    }
});
