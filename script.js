document.addEventListener('DOMContentLoaded', function() {
    // Menangani tombol "Tampilkan Lebih Banyak"
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenClients = document.querySelectorAll('.hidden-client');

    showMoreBtn.addEventListener('click', function() {
        hiddenClients.forEach(client => {
            client.classList.remove('hidden-client');
        });
        showMoreBtn.style.display = 'none';
    });

    // Navigasi ke WhatsApp dan Telepon
    const whatsappBtn = document.querySelector('.btn-success');
    const teleponBtn = document.querySelector('.btn-danger');

    whatsappBtn.addEventListener('click', function() {
        const whatsappNumber = '628123456789'; // Ganti dengan nomor WhatsApp Anda
        const whatsappMessage = 'Halo, saya tertarik dengan layanan IDMETAFORA.';
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    });

    teleponBtn.addEventListener('click', function() {
        const phoneNumber = '08123456789'; // Ganti dengan nomor telepon Anda
        window.location.href = `tel:${phoneNumber}`;
    });
});
