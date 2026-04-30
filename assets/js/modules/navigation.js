/* ========== MAIN NAVIGATION MODULE ========== */
/* Handles hamburger menu toggle and navigation interactions */

const Navigation = {
  menuToggle: document.getElementById('menu-toggle'),
  menuList: document.querySelector('nav ul'),
  hamburger: document.querySelector('.hamburger'),

  init() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener('change', () => this.handleToggle());
    }

    // Close menu when a link is clicked
    if (this.menuList) {
      const links = this.menuList.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });
    }
  },

  handleToggle() {
    // Menu opens/closes via CSS checkbox technique
    // No additional logic needed here, CSS handles visual state
  },

  closeMenu() {
    if (this.menuToggle) {
      this.menuToggle.checked = false;
    }
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Navigation.init());
} else {
  Navigation.init();
}
