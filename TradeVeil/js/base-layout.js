class BaseLayout extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;

    this.innerHTML = `
      <style>
        /* Override base styles with higher specificity */
        base-layout nav {
          position: sticky !important;
          top: 0;
          background-color: #ffffffcc !important;
          backdrop-filter: saturate(180%) blur(20px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          z-index: 1000;
          transition: background-color 0.3s ease;
        }
        base-layout nav:hover {
          background-color: #ffffffee !important;
        }
        base-layout nav .container {
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          padding: 1rem 2rem !important;
        }
        base-layout nav .logo {
          font-weight: 900;
          font-size: 1.8rem;
          color: #10b981;
          letter-spacing: 2px;
          cursor: pointer;
          user-select: none;
          transition: color 0.3s ease;
          flex-shrink: 0;
        }
        base-layout nav .logo:hover {
          color: #059669;
        }
        base-layout nav ul {
          list-style: none !important;
          display: flex !important;
          gap: 1.5rem;
          margin: 0 !important;
          padding: 0 !important;
        }
        base-layout nav ul li a {
          text-decoration: none !important;
          color: #333 !important;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.5rem 0.75rem;
          border-radius: 5px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        base-layout nav ul li a:hover {
          background-color: #10b981 !important;
          color: white !important;
        }
      </style>
      
      <nav>
        <div class="container">
          <div class="logo">TradeVeil</div>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact us.html">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      <main>${content}</main>
    `;

    this.querySelector('.logo').addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
}

customElements.define('base-layout', BaseLayout);
