// Toggle the optional account dropdown (purely front-end)
const caretBtn = document.querySelector('.icon-btn.caret');
const dropdown = document.querySelector('.user .dropdown');

if (caretBtn && dropdown) {
  caretBtn.addEventListener('click', () => {
    dropdown.dataset.open = dropdown.dataset.open === 'true' ? 'false' : 'true';
  });

  // click-away close
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user')) dropdown.dataset.open = 'false';
  });
}
