/* ========== PROJECTS MODULE ========== */
/* Handles project interactions and dynamic functionality */

const Projects = {
  projectButtons: document.querySelectorAll('.project-card button'),

  init() {
    this.setupButtonHandlers();
  },

  setupButtonHandlers() {
    this.projectButtons.forEach(button => {
      // Remove inline onclick handlers if present
      const githubUrl = button.getAttribute('data-url');
      
      if (githubUrl) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          this.openLink(githubUrl);
        });
      }
    });
  },

  openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Projects.init());
} else {
  Projects.init();
}
