let forDark = document.getElementById('check');

forDark.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

!forDark.addEventListener('change', () => {
    document.body.classList.toggle('light');
})