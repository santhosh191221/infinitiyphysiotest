document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const welcomeVideo = document.querySelector(isMobile ? '.welcome-video-mobile' : '.welcome-video-desktop');
  document.querySelectorAll('.welcome-video').forEach(video => {
    if (video !== welcomeVideo) {
      video.pause();
      video.style.display = 'none';
    }
  });
  if (welcomeVideo) {
    window.setTimeout(() => {
      welcomeVideo.style.opacity = '0';
      window.setTimeout(() => {
        welcomeVideo.style.display = 'none';
        welcomeVideo.pause();
      }, 1000);
    }, 3000);
  }

  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? '×' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰';
    }));
  }
  const form = document.querySelector('#appointmentForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const message = `Appointment Request%0A%0AName: ${encodeURIComponent(data.get('name'))}%0APhone: ${encodeURIComponent(data.get('phone'))}%0AEmail: ${encodeURIComponent(data.get('email') || 'Not provided')}%0ARequirement: ${encodeURIComponent(data.get('message'))}`;
    window.open(`https://wa.me/919600619608?text=${message}`, '_blank', 'noopener');
    document.querySelector('#formStatus').textContent = 'Opening WhatsApp with your booking request…';
  });

  const serviceDetails = window.originalServiceDetails;
  const modal = document.querySelector('#serviceModal');
  const modalContent = document.querySelector('#serviceModalContent');
  document.querySelectorAll('.learn-more[data-service]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    const detail = serviceDetails?.[button.dataset.service];
    if (!detail) {
      console.error(`Service details not found for "${button.dataset.service}".`);
      return;
    }
    if (!modal || !modalContent) {
      console.error('The service details dialog is missing from this page.');
      return;
    }
    modalContent.innerHTML = `<div class="service-modal-content">${detail.content}<a class="button" href="appointment.html">Book an appointment →</a></div>`;
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  }));
  document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => { modal?.classList.remove('open'); modal?.setAttribute('aria-hidden', 'true'); }));
  modal?.addEventListener('click', event => { if (event.target === modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); } });
});
