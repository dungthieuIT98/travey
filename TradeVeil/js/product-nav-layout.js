class ProductNavLayout extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;
    const currentPage = this.getAttribute('current-page') || '';

    this.innerHTML = `
      <style>
        /* Override any base styles with higher specificity */
        product-nav-layout nav {
          position: sticky !important;
          top: 75px;
          background-color: #059669 !important;
          padding: 0.5rem 0;
          backdrop-filter: none;
          z-index: 999;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        product-nav-layout nav :hover{
                  background-color: #059669 !important;

        }

        product-nav-layout nav .container {
          display: block !important;
          padding: 0 !important;
        }
        product-nav-layout nav ul {
          list-style: none;
          display: flex;
          justify-content: center;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }
        product-nav-layout nav ul li a {
          color: white !important;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: background-color 0.3s ease;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
        product-nav-layout nav ul li a.active {
          background-color: #047857 !important;
          color: white !important;
        }
        @media screen and (max-width: 768px) {
          product-nav-layout nav ul {
            flex-direction: column;
            gap: 1rem;
          }
        }
      </style>
      <nav>
        <ul>
          <li><a href="index.html" ${currentPage === 'home' ? 'class="active"' : ''}>Home</a></li>
          <li><a href="electronics.html" ${currentPage === 'electronics' ? 'class="active"' : ''}>Electronics</a></li>
          <li><a href="stationery.html" ${currentPage === 'stationery' ? 'class="active"' : ''}>Stationery</a></li>
          <li><a href="textiles.html" ${currentPage === 'textiles' ? 'class="active"' : ''}>Textiles</a></li>
          <li><a href="cosmetics.html" ${currentPage === 'cosmetics' ? 'class="active"' : ''}>Cosmetics</a></li>
        </ul>
      </nav>
      <br>
    `;

  }
}

customElements.define('product-nav-layout', ProductNavLayout);