const journal = document.querySelector('.journal-container');
  const trinkets = document.querySelectorAll('.trinket');

  journal.addEventListener('mouseenter', () => {
    trinkets.forEach(trinket => {
      trinket.style.opacity = 1;  
      trinket.style.transform = 'translateY(0) scale(1)'; 
    });
  });

  journal.addEventListener('mouseleave', () => {
    trinkets.forEach(trinket => {
      trinket.style.opacity = 0;  
      trinket.style.transform = 'translateY(20px) scale(0.7)'; 
    });
  });
  const menuButton = document.getElementById('menuButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  
  menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });
  