// selects all h3 and assigns each option as its content
document.querySelectorAll('.filters h3').forEach((header) => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const toggleBtn = this.querySelector('.toggle-btn');
      
        // visibility toggle
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggleBtn.textContent = '—'; // minus when expanded
        } else {
            content.classList.add('hidden');
            toggleBtn.textContent = '+'; // plus when collapsed
        }
    });
});