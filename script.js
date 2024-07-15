document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header=document.getElementById('header')
    const hero=document.getElementById('hero')
    const projects=document.getElementById('projects')
    const footer=document.getElementById('footer')
    const projdesc=document.getElementById('projdesc')
    const themeSwitcher = document.getElementById('theme-switcher');
    const seeMyWorksBtn = document.getElementById('see-my-works');
    const projectsSection = document.getElementById('projects');

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
        projdesc.classList.toggle('dark')
        projdesc.classList.toggle('light')
    });

    // Initialize theme based on preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: )').matches) {
        body.classList.add('dark');
        projdesc.classList.add('dark');
    } 
    else {
        body.classList.add('light');
        projdesc.classList.add('light');
    }
    seeMyWorksBtn.addEventListener('click', () => {
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });
});
