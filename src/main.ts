import './style.css';
import { initThreeScene } from './scene3d';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Canvas
  initThreeScene('threejs-container');

  // 2. Mobile Drawer Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  mobileMenuBtn?.addEventListener('click', openDrawer);
  closeDrawerBtn?.addEventListener('click', closeDrawer);
  drawerLinks.forEach((link) => link.addEventListener('click', closeDrawer));

  // 3. Consultation Booking Modal
  const consultationModal = document.getElementById('consultation-modal');
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');
  const openModalBtns = document.querySelectorAll('.open-modal-trigger');
  const bookingForm = document.getElementById('booking-form') as HTMLFormElement | null;
  const bookingSuccess = document.getElementById('booking-success');
  const packageSelect = document.getElementById('modal-package') as HTMLSelectElement | null;

  function openModal(preselectedPackage?: string) {
    if (packageSelect && preselectedPackage) {
      packageSelect.value = preselectedPackage;
    }
    consultationModal?.classList.remove('hidden');
    consultationModal?.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    consultationModal?.classList.add('hidden');
    consultationModal?.classList.remove('flex');
    document.body.style.overflow = '';
    if (bookingSuccess) bookingSuccess.classList.add('hidden');
    if (bookingForm) {
      bookingForm.classList.remove('hidden');
      bookingForm.reset();
    }
  }

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pkg = btn.getAttribute('data-package') || '';
      openModal(pkg);
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', closeModal);
  });

  consultationModal?.addEventListener('click', (e) => {
    if (e.target === consultationModal) {
      closeModal();
    }
  });

  // Handle Form Submission
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(bookingForm);
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const tier = formData.get('tier') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Consultation Inquiry: ${company || name} [${tier}]`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nScope: ${tier}\n\nProject Scope & Friction Details:\n${message}`
    );

    bookingForm.classList.add('hidden');
    if (bookingSuccess) bookingSuccess.classList.remove('hidden');

    // Also prepare mailto draft
    setTimeout(() => {
      window.location.href = `mailto:arfentra@gmail.com?subject=${subject}&body=${body}`;
    }, 1200);
  });

  // 4. Copy CIN to clipboard with feedback
  const copyCinBtns = document.querySelectorAll('.copy-cin-btn');
  copyCinBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cin = 'U62013TZ2026PTC041310';
      navigator.clipboard.writeText(cin).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span class="material-symbols-outlined text-[14px] text-champagne-base">check</span> Copied!`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      });
    });
  });

  // 5. Scroll spy for active bottom nav tab
  const sections = document.querySelectorAll('section[id], div[id]');
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

  window.addEventListener(
    'scroll',
    () => {
      let currentSectionId = '';
      const scrollPos = window.scrollY + 200;

      sections.forEach((sec) => {
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = sec.getAttribute('id') || '';
        }
      });

      bottomNavItems.forEach((item) => {
        const target = item.getAttribute('data-target');
        if (target === currentSectionId) {
          item.classList.add('text-tertiary', 'font-bold');
          item.classList.remove('text-on-surface-variant');
        } else {
          item.classList.remove('text-tertiary', 'font-bold');
          item.classList.add('text-on-surface-variant');
        }
      });
    },
    { passive: true }
  );
});
