document.addEventListener('DOMContentLoaded', () => {
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

  const serviceDetails = {
    geriatric: ['Geriatric Physiotherapy & Fall Prevention', 'Our geriatric programme supports older adults in maintaining independence, confidence and safe mobility.', ['Balance and fall-prevention training', 'Strength, flexibility and walking exercises', 'Support for arthritis, osteoporosis and post-surgical recovery']],
    chronic: ['Chronic Pain Management', 'We use a personalised, multidisciplinary approach to reduce persistent pain and improve everyday function.', ['Movement and exercise-based treatment', 'Education for pain self-management', 'Lifestyle and activity guidance']],
    postoperative: ['Post-Surgical Rehabilitation', 'A staged rehabilitation plan helps you recover safely, rebuild strength and return to daily activities after surgery.', ['Individual recovery goals', 'Mobility and strength progression', 'Guidance for safe return to activity']],
    sports: ['Sports Injury Recovery', 'Targeted rehabilitation for athletic injuries, designed to help you return to your sport confidently and safely.', ['Acute and chronic injury care', 'Sport-specific strengthening', 'Return-to-play planning']],
    neurological: ['Neurological Rehabilitation', 'Rehabilitation for people living with stroke, spinal cord injury, Parkinson’s disease and related neurological conditions.', ['Functional movement training', 'Balance and coordination support', 'Independence-focused rehabilitation']],
    pediatric: ['Pediatric Physiotherapy', 'Developmental and rehabilitative physiotherapy to help children build movement skills and reach their potential.', ['Support for developmental delay', 'Individualised family-centred care', 'Play-based therapeutic movement']],
    women: ["Women's Health Physiotherapy", 'Sensitive, individualised support for women at every stage of life.', ['Prenatal and postnatal care', 'Pelvic-floor rehabilitation', 'Osteoporosis and mobility support']],
    fitness: ['Fitness & Wellness Programs', 'Proactive programmes that support healthy movement, injury prevention and long-term physical wellbeing.', ['Mobility and strength building', 'Injury-prevention advice', 'Sustainable fitness guidance']],
    ergonomic: ['Ergonomic Solutions & Postural Correction', 'Practical assessment and exercise support to make work and everyday movement more comfortable.', ['Workstation and posture guidance', 'Movement-break strategies', 'Injury-risk reduction']],
    headache: ['Headache & Migraine Management', 'A multimodal approach combining physiotherapy, exercise and lifestyle guidance to manage recurring headaches.', ['Neck and posture assessment', 'Manual therapy when appropriate', 'Self-management strategies']]
  };
  const modal = document.querySelector('#serviceModal');
  const modalContent = document.querySelector('#serviceModalContent');
  document.querySelectorAll('.learn-more[data-service]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault(); const detail = serviceDetails[button.dataset.service]; if (!detail || !modal || !modalContent) return;
    modalContent.innerHTML = `<p class="eyebrow">Service details</p><h2>${detail[0]}</h2><p>${detail[1]}</p><ul>${detail[2].map(item => `<li>${item}</li>`).join('')}</ul><a class="button" href="appointment.html">Book an appointment →</a>`;
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  }));
  document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => { modal?.classList.remove('open'); modal?.setAttribute('aria-hidden', 'true'); }));
  modal?.addEventListener('click', event => { if (event.target === modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); } });
});
