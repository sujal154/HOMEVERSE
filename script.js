// ---- Footer year ----
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---- Mobile menu toggle ----
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> mobileNav.classList.remove('open'));
  });

  // ---- Listings data (edit/extend this array to add your own properties) ----
  const listings = [
    {
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop",
      tag: "For Rent", tagClass: "rent",
      location: "Belmont Gardens, Chicago",
      price: "34,900", period: "Month",
      title: "New Apartment Nice View",
      desc: "Beautiful huge 1 family house in the heart of Westbury. Newly renovated kitchen and baths.",
      photos: 4, videos: 2
    },
    {
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
      tag: "For Sale", tagClass: "sale",
      location: "Belmont Gardens, Chicago",
      price: "34,900", period: "Month",
      title: "Modern Apartments",
      desc: "Beautiful huge 1 family house in the heart of Westbury. Newly renovated kitchen and baths.",
      photos: 4, videos: 2
    },
    {
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
      tag: "For Rent", tagClass: "rent",
      location: "Belmont Gardens, Chicago",
      price: "34,900", period: "Month",
      title: "Comfortable Apartment",
      desc: "Beautiful huge 1 family house in the heart of Westbury. Newly renovated kitchen and baths.",
      photos: 4, videos: 2
    }
  ];

  const grid = document.getElementById('listingGrid');
  grid.innerHTML = listings.map(item => `
    <div class="listing-card">
      <div class="listing-img">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <span class="tag ${item.tagClass}">${item.tag}</span>
        <div class="listing-meta">
          <span class="loc">📍 ${item.location}</span>
          <span class="stats">
            <span>📷 ${item.photos}</span>
            <span>🎬 ${item.videos}</span>
          </span>
        </div>
      </div>
      <div class="listing-body">
        <div class="price">$${item.price}<span>/${item.period}</span></div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');

  // ---- Simple cart click feedback (demo only) ----
  document.getElementById('cartBtn').addEventListener('click', () => {
    alert('Your cart is empty — start adding properties you love!');
  });
