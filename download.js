const donationDialog = document.querySelector('#donation-dialog');
const downloadUrl = 'https://www.mediafire.com/folder/2dt02knegkmwq/Julretsu';

if (donationDialog && typeof donationDialog.showModal === 'function') {
  document.querySelectorAll(`a[href="${downloadUrl}"]`).forEach(link => {
    if (donationDialog.contains(link)) return;
    link.addEventListener('click', event => {
      event.preventDefault();
      donationDialog.showModal();
    });
  });
  donationDialog.querySelector('[data-close]').addEventListener('click', () => donationDialog.close());
  donationDialog.querySelector('[data-download]').addEventListener('click', () => donationDialog.close());
}
