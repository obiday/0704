const tabs = document.querySelectorAll('.tab-wrap-outer');
const alertOverlay = document.getElementById('alertOverlay');

function closeAlert() {
  alertOverlay.classList.add('hidden');
  setTimeout(() => {
    alertOverlay.style.display = 'none';
  }, 400);
}

function activateTab(selectedTab, event) {
  event.stopPropagation();
  tabs.forEach(tab => {
    if (tab !== selectedTab) {
      tab.classList.remove('active');
    }
  });
  selectedTab.classList.add('active');
}

document.addEventListener('click', () => {
  tabs.forEach(tab => tab.classList.remove('active'));
});

function copyUrl(url, btnElement) {
  const parentTab = btnElement.closest('.tab-wrap-outer');
  if (parentTab) {
    tabs.forEach(tab => tab.classList.remove('active'));
    parentTab.classList.add('active');
  }

  navigator.clipboard.writeText(url).then(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  });
}
