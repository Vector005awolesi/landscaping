// Vera Landscaping JavaScript

// Sample data for testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    content: "Vera Landscaping transformed our backyard into a beautiful oasis. The team was professional, creative, and delivered exactly what we envisioned. Highly recommended!",
    rating: 5,
    location: "Green Valley, CA",
    imageUrl : "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Michael Chen",
    content: "Outstanding service from start to finish. They redesigned our front yard and installed a beautiful irrigation system. The plants are thriving and our neighbors are jealous!",
    rating: 5,
    location: "Oak Hills, CA",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emily Rodriguez",
    content: "Professional, reliable, and creative. Vera Landscaping helped us create the perfect outdoor space for entertaining. The hardscaping work is absolutely stunning.",
    rating: 5,
    location: "Riverside, CA",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

// All services data
const allServices = [
  {
    icon: "fas fa-cut",
    title: "Lawn Care & Maintenance",
    description: "Complete lawn care services to keep your grass healthy and beautiful year-round",
    features: [
      "Weekly/bi-weekly mowing",
      "Fertilization programs", 
      "Weed and pest control",
      "Aeration and overseeding",
      "Seasonal cleanup"
    ]
  },
  {
    icon: "fas fa-tree",
    title: "Tree & Shrub Services",
    description: "Professional tree care from certified arborists to maintain healthy, beautiful trees",
    features: [
      "Tree pruning and trimming",
      "Tree removal and stump grinding",
      "Disease diagnosis and treatment",
      "Emergency storm damage cleanup",
      "Shrub maintenance and shaping"
    ]
  },
  {
    icon: "fas fa-seedling",
    title: "Garden Design & Installation",
    description: "Custom garden design and installation services tailored to your space and preferences",
    features: [
      "Landscape design consultation",
      "Plant selection and sourcing",
      "Garden bed preparation",
      "Seasonal flower installation",
      "Vegetable garden setup"
    ]
  },
  {
    icon: "fas fa-tint",
    title: "Irrigation Systems",
    description: "Efficient watering solutions to keep your landscape healthy while conserving water",
    features: [
      "Sprinkler system installation",
      "Drip irrigation setup",
      "Smart controller installation",
      "System maintenance and repairs",
      "Water efficiency audits"
    ]
  },
  {
    icon: "fas fa-hammer",
    title: "Hardscaping",
    description: "Beautiful stone and concrete features that add structure and elegance to your landscape",
    features: [
      "Patio and walkway installation",
      "Retaining wall construction",
      "Fire pit and outdoor kitchen setup",
      "Decorative stone work",
      "Drainage solutions"
    ]
  },
  {
    icon: "fas fa-snowflake",
    title: "Seasonal Services",
    description: "Year-round maintenance to keep your landscape looking its best in every season",
    features: [
      "Spring cleanup and preparation",
      "Summer maintenance programs",
      "Fall leaf removal",
      "Winter protection services",
      "Holiday decoration installation"
    ]
  },
  {
    icon: "fas fa-truck",
    title: "Commercial Landscaping",
    description: "Professional landscaping services for businesses, HOAs, and commercial properties",
    features: [
      "Property maintenance contracts",
      "Commercial design services",
      "Large-scale installations",
      "Snow removal services",
      "Parking lot landscaping"
    ]
  },
  {
    icon: "fas fa-shield-alt",
    title: "Landscape Restoration",
    description: "Restore damaged or neglected landscapes to their full potential",
    features: [
      "Soil rehabilitation",
      "Erosion control",
      "Native plant restoration",
      "Damaged area repair",
      "Sustainable redesign"
    ]
  }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initializeNavigation();
  loadTestimonials();
  initializeContactForm();
  initializeScrollAnimations();
  initializePortfolio();
});

// Navigation functionality
function initializeNavigation() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Update active navigation item on scroll
  window.addEventListener('scroll', updateActiveNavItem);
}

function updateActiveNavItem() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Load testimonials
function loadTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = testimonials.map(testimonial => `
    <div class="col-lg-4 col-md-6">
      <div class="testimonial-card card h-100 border-0 shadow">
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-3">
            ${testimonial.imageUrl ? 
              `<img src="${testimonial.imageUrl}" alt="${testimonial.name}" class="testimonial-avatar me-3">` :
              `<div class="testimonial-avatar-placeholder me-3">${testimonial.name.charAt(0)}</div>`
            }
            <div>
              <h6 class="mb-1 fw-bold">${testimonial.name}</h6>
              <small class="text-muted">${testimonial.location}</small>
            </div>
          </div>
          <div class="star-rating mb-3">
            ${generateStarRating(testimonial.rating)}
          </div>
          <p class="card-text text-muted fst-italic">"${testimonial.content}"</p>
        </div>
      </div>
    </div>
  `).join('');
}

function generateStarRating(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fas fa-star"></i>';
    } else {
      stars += '<i class="fas fa-star empty"></i>';
    }
  }
  return stars;
}

// Show all services modal
function showAllServices() {
  const container = document.getElementById('all-services-container');
  if (!container) return;

  container.innerHTML = allServices.map(service => `
    <div class="col-lg-4 col-md-6">
      <div class="service-card card h-100 text-center border-0 shadow">
        <div class="card-body p-4">
          <div class="service-icon mb-3">
            <i class="${service.icon} text-success"></i>
          </div>
          <h5 class="card-title">${service.title}</h5>
          <p class="card-text text-muted">${service.description}</p>
          <ul class="list-unstyled text-start">
            ${service.features.map(feature => 
              `<li><i class="fas fa-circle text-success me-2" style="font-size: 0.5rem;"></i>${feature}</li>`
            ).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');

  // Show modal
  const modal = new bootstrap.Modal(document.getElementById('servicesModal'));
  modal.show();
}

// Contact form functionality
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Button handling (matches your logic)
  const submitButton = form.querySelector('button[type="submit"]');
  const originalHTML = submitButton.innerHTML;

  submitButton.disabled = true;
  submitButton.innerHTML = '<span class="loading"></span> Sending...';

  // Send to Netlify
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      form.reset();
      showToast("Thank you! We'll get back to you within 24 hours.", 'success');
    })
    .catch(() => {
      showToast('Something went wrong. Please try again.', 'error');
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = originalHTML;
    });
}

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', initializeContactForm);


function showToast(message, type = 'success') {
  const toast = document.getElementById('successToast');
  const toastBody = toast.querySelector('.toast-body');
  const toastHeader = toast.querySelector('.toast-header');
  
  // Update content
  toastBody.textContent = message;
  
  // Update icon and color based on type
  const icon = toastHeader.querySelector('i');
  if (type === 'success') {
    icon.className = 'fas fa-check-circle text-success me-2';
    toastHeader.querySelector('strong').textContent = 'Success';
  } else {
    icon.className = 'fas fa-exclamation-circle text-danger me-2';
    toastHeader.querySelector('strong').textContent = 'Error';
  }
  
  // Show toast
  const bsToast = new bootstrap.Toast(toast);
  bsToast.show();
}

// Scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        if (entry.target.classList.contains('portfolio-card')) {
          entry.target.classList.add('zoom-in');
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.service-card, .testimonial-card, .portfolio-card').forEach(el => {
    observer.observe(el);
  });
}

// -----------------------
// Portfolio: filtering & modal
// -----------------------
const portfolioItems = [
  {
    id: 'p1',
    title: 'Cozy Residential Garden',
    category: 'residential',
    image: '/ASSETS/IMAGES/Portfolio/residential-garden.png',
    description: 'A small front-yard transformation using native plants and permeable pavers to improve curb appeal.',
    features: ['Native plant palette', 'Permeable paving', 'Low-water irrigation']
  },

  {
    id: 'p2',
    title: 'Modern Commercial Entrance',
    category: 'commercial',
    image: '/ASSETS/IMAGES/Portfolio/modern-commercial-entrance.png',
    description: 'A contemporary landscape for a commercial office with clean lines and low maintenance plants.',
    features: ['Low-maintenance design', 'Hardscape accents', 'Lighting integration']
  },

  {
    id: 'p3',
    title: 'Cottage Garden Makeover',
    category: 'garden',
    image: '/ASSETS/IMAGES/Portfolio/cottage-garden.png',
    description: 'Colorful layered planting beds, custom pathways and seasonal interest throughout the year.',
    features: ['Seasonal color plan', 'Custom paths', 'Planting design']
  },

  {
    id: 'p4',
    title: 'Stone Patio & Retaining Wall',
    category: 'hardscape',
    image: '/ASSETS/IMAGES/Portfolio/stone-patting.png',
    description: 'Durable stone patio with integrated seating and retaining walls to create usable terraces.',
    features: ['Retaining walls', 'Patio installation', 'Integrated seating']
  },

  {
    id: 'p5',
    title: 'Xeriscape Front Yard',
    category: 'residential',
    image: '/ASSETS/IMAGES/Portfolio/xeriscape.png',
    description: 'A drought-tolerant xeriscape design with gravel, succulents and boulder accents.',
    features: ['Drought-tolerant', 'Low maintenance', 'Rock accents']
  },

  {
    id: 'p6',
    title: 'Rooftop Garden Oasis',
    category: 'commercial',
    image: '/ASSETS/IMAGES/Portfolio/oasis.png',
    description: 'A rooftop installation offering greenery, seating and planters for an urban office.',
    features: ['Planter design', 'Irrigation', 'Seating areas']
  },

  {
    id: 'p7',
    title: 'Native Meadow Restoration',
    category: 'garden',
    image: '/ASSETS/IMAGES/Portfolio/meadow.png',
    description: 'Restoring native meadow plantings to support pollinators and biodiversity.',
    features: ['Pollinator-friendly', 'Soil improvement', 'Seed mix']
  },

  {
    id: 'p8',
    title: 'Terraced Backyard Retreat',
    category: 'hardscape',
    image: '/ASSETS/IMAGES/Portfolio/retreat.png',
    description: 'Multi-level terraced landscaping that maximizes slope usability with stone steps and planting.',
    features: ['Terracing', 'Steps', 'Retaining structures']
  }
];


function initializePortfolio() {
  loadPortfolioGallery();
  setupPortfolioFilter();
}

function loadPortfolioGallery(filter = 'all') {
  const container = document.getElementById('portfolioGallery');
  if (!container) return;

  const itemsToShow = portfolioItems.filter(item => filter === 'all' ? true : item.category === filter);

  container.innerHTML = itemsToShow.map(item => `
    <div class="col-lg-4 col-md-6" data-category="${item.category}">
      <div class="card portfolio-card h-100 border-0 shadow" role="button" onclick="openPortfolioModal('${item.id}')">
        <div class="portfolio-image-wrap position-relative">
          <img
            src="${item.image}"
            class="card-img-top"
            loading="lazy"
            decoding="async"
            onerror="handleImgError(this)"
            alt="${item.title}">
            <div class="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3">
              <div>
                <h5 class="text-white fw-bold mb-1">${item.title}</h5>
                <small class="badge bg-success text-white">${capitalize(item.category)}</small>
                <p class="overlay-desc text-white mt-2 mb-2">${item.description}</p>
                <div class="overlay-features">
                  ${item.features.map(f => `<span>${f}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  `).join('');
}

function setupPortfolioFilter() {
  const filterGroup = document.getElementById('portfolioFilter');
  if (!filterGroup) return;

  filterGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    const filter = btn.getAttribute('data-filter');

    // update active state
    filterGroup.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // reload gallery
    loadPortfolioGallery(filter);
  });
}

function openPortfolioModal(id) {
  const item = portfolioItems.find(i => i.id === id);
  if (!item) return;

  const modalTitle = document.getElementById('portfolioModalTitle');
  const modalBody = document.getElementById('portfolioModalBody');
  if (!modalTitle || !modalBody) return;

  modalTitle.textContent = item.title;
  modalBody.innerHTML = `
    <div class="row">
        <div class="col-lg-7 mb-3">
        <img
          src="${item.image}"
          alt="${item.title}"
          class="img-fluid rounded"
          loading="lazy"
          decoding="async"
          onerror="handleImgError(this)">
      </div>
      <div class="col-lg-5">
        <h5 class="fw-bold">Project Details</h5>
        <p class="text-muted">${item.description}</p>
        <ul class="list-unstyled">
          ${item.features.map(f => `<li class="mb-2"><i class="fas fa-check text-success me-2"></i>${f}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  const modalEl = document.getElementById('portfolioModal');
  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}

function capitalize(s) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// expose modal opener for inline onclick usage
window.openPortfolioModal = openPortfolioModal;

// Fallback handler for images that fail to load (sets a generic themed image)
function handleImgError(img) {
  try {
    img.onerror = null;
    const fallback = 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80';
    img.src = fallback;
  } catch (e) {
    // ignore
  }
}


// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add debounced scroll listener
window.addEventListener('scroll', debounce(updateActiveNavItem, 100));

// Preload images for better performance
function preloadImages() {
  const imageUrls = [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Initialize image preloading
preloadImages();

// Export functions for global access
window.showAllServices = showAllServices;
