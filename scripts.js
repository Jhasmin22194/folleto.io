document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
  
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const toggleContent = btn.parentElement.querySelector('.content');
        toggleContent.classList.toggle('active');
      });
    });
  });
  
  