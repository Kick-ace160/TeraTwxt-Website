
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click', ()=> navLinks.classList.toggle('open'));
}

const products = [
  {
    name: "Eversharp Pens",
    category: "stationery",
    image: "assets/img/stationery.svg",
    inquiryTag: "Eversharp Pens",
    note: "Smooth writing pens for school, office, and home use."
  },
  {
    name: "Deli Highlighters",
    category: "stationery",
    image: "assets/img/stationery.svg",
    inquiryTag: "Deli Highlighters",
    note: "Bright colors for study notes, offices, and planners."
  },
  {
    name: "6-Color Pencil Sets",
    category: "stationery",
    image: "assets/img/stationery.svg",
    inquiryTag: "6-Color Pencil Sets",
    note: "Color pencil packs for art, projects, and school work."
  },
  {
    name: "Whiteboard Markers & Erasers",
    category: "stationery",
    image: "assets/img/stationery.svg",
    inquiryTag: "Whiteboard Markers and Erasers",
    note: "Useful for classrooms, training rooms, and offices."
  },
  {
    name: "A4 Bond Paper",
    category: "paper",
    image: "assets/img/printing.svg",
    inquiryTag: "A4 Bond Paper",
    note: "Clean paper for printing, typing, and office records."
  },
  {
    name: "A4 / A5 Gloss Paper",
    category: "paper",
    image: "assets/img/printing.svg",
    inquiryTag: "A4 A5 Gloss Paper",
    note: "Gloss finish paper for premium prints and projects."
  },
  {
    name: "Exercise Books & Counter Books",
    category: "paper",
    image: "assets/img/printing.svg",
    inquiryTag: "Exercise Books and Counter Books",
    note: "Everyday books for students, teachers, and business use."
  },
  {
    name: "Manila Sheets & Envelopes",
    category: "paper",
    image: "assets/img/printing.svg",
    inquiryTag: "Manila Sheets and Envelopes",
    note: "C4 and DL sizes for presentations, letters, and filing."
  },
  {
    name: "PVC Box Files",
    category: "filing",
    image: "assets/img/stationery.svg",
    inquiryTag: "PVC Box Files",
    note: "Strong storage solutions for offices and schools."
  },
  {
    name: "Expanding Bags & File Dividers",
    category: "filing",
    image: "assets/img/stationery.svg",
    inquiryTag: "Expanding Bags and File Dividers",
    note: "Keep documents sorted and easy to carry."
  },
  {
    name: "Desk Organizers & Clipboards",
    category: "filing",
    image: "assets/img/stationery.svg",
    inquiryTag: "Desk Organizers and Clipboards",
    note: "Simple tools to keep desks clean and work moving."
  },
  {
    name: "Heavy-Duty Staplers",
    category: "tools",
    image: "assets/img/printing.svg",
    inquiryTag: "Heavy Duty Staplers",
    note: "Built for busy shops, schools, and offices."
  },
  {
    name: "Hole Punches",
    category: "tools",
    image: "assets/img/printing.svg",
    inquiryTag: "Hole Punches",
    note: "Useful for organized filing and binder preparation."
  },
  {
    name: "Paper Cutters / Trimmers",
    category: "tools",
    image: "assets/img/printing.svg",
    inquiryTag: "Paper Cutters and Trimmers",
    note: "Neat cutting for posters, sheets, and finishing work."
  },
  {
    name: "Laminating Machines",
    category: "tools",
    image: "assets/img/printing.svg",
    inquiryTag: "Laminating Machines",
    note: "Protect notices, ID cards, teaching materials, and signs."
  },
  {
    name: "Mathematical Sets",
    category: "education",
    image: "assets/img/stationery.svg",
    inquiryTag: "Mathematical Sets",
    note: "Ideal for geometry, technical drawing, and school work."
  },
  {
    name: "Scientific Calculators",
    category: "education",
    image: "assets/img/stationery.svg",
    inquiryTag: "Scientific Calculators",
    note: "Helpful for maths, science, and exam preparation."
  },
  {
    name: "A3 Drawing Boards",
    category: "education",
    image: "assets/img/stationery.svg",
    inquiryTag: "A3 Drawing Boards",
    note: "Practical drawing surfaces for art and technical classes."
  },
  {
    name: "Wax Crayons & Watercolors",
    category: "education",
    image: "assets/img/stationery.svg",
    inquiryTag: "Wax Crayons and Watercolors",
    note: "Creative supplies for schools, clubs, and young artists."
  },
  {
    name: "HP-Compatible Toners",
    category: "technology",
    image: "assets/img/toner.svg",
    inquiryTag: "HP Compatible Toners",
    note: "Common models include 05A, 12A, 35A, 80A, and 90A."
  },
  {
    name: "8GB Flash Drives",
    category: "technology",
    image: "assets/img/toner.svg",
    inquiryTag: "8GB Flash Drives",
    note: "Portable storage for assignments, forms, and backups."
  },
  {
    name: "Binding Machine",
    category: "technology",
    image: "assets/img/toner.svg",
    inquiryTag: "Binding Machine",
    note: "Great for reports, projects, proposals, and manuals."
  },
  {
    name: "Footballs",
    category: "sports",
    image: "assets/img/sports.svg",
    inquiryTag: "Footballs",
    note: "School and community sports essentials."
  },
  {
    name: "Volleyballs",
    category: "sports",
    image: "assets/img/sports.svg",
    inquiryTag: "Volleyballs",
    note: "Perfect for teams, clubs, and training sessions."
  },
  {
    name: "Tennis Balls",
    category: "sports",
    image: "assets/img/sports.svg",
    inquiryTag: "Tennis Balls",
    note: "For school sports, coaching, and recreation."
  },
  {
    name: "Basketballs",
    category: "sports",
    image: "assets/img/sports.svg",
    inquiryTag: "Basketballs",
    note: "Quality ball options for school and casual play."
  },
  {
    name: "Dartboards",
    category: "sports",
    image: "assets/img/sports.svg",
    inquiryTag: "Dartboards",
    note: "Fun recreational equipment for homes and clubs."
  },
  {
    name: "Zimbabwean Flags",
    category: "daily",
    image: "assets/img/contact.svg",
    inquiryTag: "Zimbabwean Flags",
    note: "Useful for schools, offices, and community events."
  },
  {
    name: "Wall Clocks",
    category: "daily",
    image: "assets/img/contact.svg",
    inquiryTag: "Wall Clocks",
    note: "Simple home and office timekeeping items."
  },
  {
    name: "Magnets",
    category: "daily",
    image: "assets/img/contact.svg",
    inquiryTag: "Magnets",
    note: "Practical small accessories for notice boards and more."
  }
];

const filters = [
  { key: 'all', label: 'All Products' },
  { key: 'stationery', label: 'Writing & Correction' },
  { key: 'paper', label: 'Paper Products' },
  { key: 'filing', label: 'Filing & Organization' },
  { key: 'tools', label: 'Office Tools' },
  { key: 'education', label: 'Math & Art' },
  { key: 'technology', label: 'Technology & Toners' },
  { key: 'sports', label: 'Sports' },
  { key: 'daily', label: 'Daily Necessities' },
];

function whatsappUrl(product = "a product", page = "website"){
  const msg = encodeURIComponent(`Hello Teratwxt, I would like to ask for the price and availability of ${product}. I saw it on your ${page}.`);
  return `https://wa.me/263772204910?text=${msg}`;
}

function emailUrl(product = "a product"){
  const subject = encodeURIComponent(`Price Inquiry - ${product}`);
  const body = encodeURIComponent(`Hello Teratwxt,\n\nI would like to ask for the price and availability of ${product}.\n\nThank you.`);
  return `mailto:florencemakona@gmail.com?subject=${subject}&body=${body}`;
}

function renderFilters(){
  const filterWrap = document.querySelector('[data-filters]');
  if(!filterWrap) return;
  filterWrap.innerHTML = filters.map((filter, index)=> `
    <button class="chip ${index === 0 ? 'active' : ''}" data-filter="${filter.key}">${filter.label}</button>
  `).join('');
}

function productCard(product){
  return `
    <article class="card product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="content">
        <span class="badge">${product.category.replace('-', ' ')}</span>
        <h3>${product.name}</h3>
        <p>${product.note}</p>
        <div class="product-meta">
          <span class="price-pill">Ask for price</span>
          <span class="small">Norton, Zimbabwe</span>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${whatsappUrl(product.inquiryTag, 'product page')}" target="_blank" rel="noreferrer">Ask on WhatsApp</a>
          <a class="btn btn-secondary" href="${emailUrl(product.inquiryTag)}">Email Inquiry</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(filter = 'all', search = ''){
  const wrap = document.querySelector('[data-products]');
  if(!wrap) return;
  const value = search.trim().toLowerCase();
  const visible = products.filter(item => {
    const matchesFilter = filter === 'all' ? true : item.category === filter;
    const hay = `${item.name} ${item.note} ${item.inquiryTag} ${item.category}`.toLowerCase();
    const matchesSearch = !value || hay.includes(value);
    return matchesFilter && matchesSearch;
  });

  wrap.innerHTML = visible.length
    ? visible.map(productCard).join('')
    : `<div class="card"><h3>No products found</h3><p>Try another search term or choose a different category.</p></div>`;

  const count = document.querySelector('[data-product-count]');
  if(count) count.textContent = `${visible.length} item${visible.length === 1 ? '' : 's'} shown`;
}

function setupProducts(){
  renderFilters();
  renderProducts();

  const filterWrap = document.querySelector('[data-filters]');
  const searchInput = document.querySelector('[data-search]');
  let currentFilter = 'all';

  filterWrap?.addEventListener('click', (event)=>{
    const btn = event.target.closest('[data-filter]');
    if(!btn) return;
    currentFilter = btn.dataset.filter;
    filterWrap.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(currentFilter, searchInput?.value || '');
  });

  searchInput?.addEventListener('input', ()=>{
    renderProducts(currentFilter, searchInput.value);
  });
}

function setupInquiryForm(){
  const form = document.querySelector('[data-inquiry-form]');
  if(!form) return;
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || 'Customer';
    const product = data.get('product') || 'a product';
    const detail = data.get('details') || '';
    const message = encodeURIComponent(`Hello Teratwxt, my name is ${name}. I would like to inquire about ${product}. ${detail}`);
    window.open(`https://wa.me/263772204910?text=${message}`, '_blank');
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupProducts();
  setupInquiryForm();
});
