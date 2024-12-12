    const modeToggle = document.getElementById('modeToggle');

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            modeToggle.textContent = '';
            modeToggle.classList.add('dark-mode');
        } else {
            modeToggle.textContent = '';
            modeToggle.classList.remove('dark-mode');
        }
    });
