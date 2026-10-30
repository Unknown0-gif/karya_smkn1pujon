// Fungsi Filter Galeri
function filterGallery(category) {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.filter-btn');

  // Atur kelas aktif pada tombol yang diklik
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Sembunyikan atau tampilkan card sesuai kategori
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Fungsi Membuka Modal Pop-up Detail
function openModal(title, author, desc, imgSrc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalAuthor').innerText = author;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('modalImg').src = imgSrc;

  // Nomor WhatsApp admin/siswa (Ganti dengan nomor yang sesuai, format: 628xxx)
  const phoneNumber = '6281234567890';
  const message = encodeURIComponent(`Halo, saya tertarik untuk memesan atau bertanya terkait karya "${title}" karya ${author}.`);
  document.getElementById('waBtn').href = `https://wa.me/${phoneNumber}?text=${message}`;

  document.getElementById('detailModal').style.display = 'flex';
}

// Fungsi Menutup Modal Pop-up
function closeModal() {
  document.getElementById('detailModal').style.display = 'none';
}

// Menutup modal jika area luar pop-up diklik
window.onclick = function(event) {
  const modal = document.getElementById('detailModal');
  if (event.target === modal) {
    closeModal();
  }
};
