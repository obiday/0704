const tabs = document.querySelectorAll('.tab-wrap-outer');
const alertOverlay = document.getElementById('alertOverlay');

// Đóng thông báo đầu trang
function closeAlert() {
  alertOverlay.classList.add('hidden');
  setTimeout(() => {
    alertOverlay.style.display = 'none';
  }, 400);
}

// Bật hiệu ứng sáng lên khi bấm vào từng Tab
function activateTab(selectedTab, event) {
  event.stopPropagation();
  tabs.forEach(tab => {
    if (tab !== selectedTab) {
      tab.classList.remove('active');
    }
  });
  selectedTab.classList.add('active');
}

// Tắt hiệu ứng khi bấm ra vùng trống
document.addEventListener('click', () => {
  tabs.forEach(tab => tab.classList.remove('active'));
});

// Tính năng Copy link và hiển thị thông báo "ĐÃ SAO CHÉP"
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

// Tính năng bật/tắt Video Demo và đổi chữ
function toggleVideo(btnElement, event) {
  event.stopPropagation(); 
  const tabInner = btnElement.closest('.tab-inner');
  const videoContainer = tabInner.querySelector('.video-container');
  const video = videoContainer.querySelector('video');
  const btnText = btnElement.querySelector('span'); 

  if (videoContainer.classList.contains('show')) {
    // Nếu video đang xem thì Tắt đi
    videoContainer.classList.remove('show');
    video.pause(); 
    if (btnText) btnText.innerText = 'Xem Demo';
  } else {
    // Nếu chưa xem thì Bật video lên
    const parentTab = btnElement.closest('.tab-wrap-outer');
    if (parentTab) {
      tabs.forEach(tab => tab.classList.remove('active'));
      parentTab.classList.add('active');
    }
    videoContainer.classList.add('show');
    if (btnText) btnText.innerText = 'Đóng Demo';
  }
}
