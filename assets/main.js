document.getElementById('year').textContent = new Date().getFullYear();

// Track when a user clicks the Email Me button
const emailBtn = document.getElementById('email-me-btn');
if (emailBtn) {
  emailBtn.addEventListener('click', function() {
    gtag('event', 'click_email_me', {
      'event_category': 'Engagement',
      'event_label': 'Contact Page'
    });
  });
}

// Track when a user clicks the Download Resume button
const resumeBtn = document.getElementById('download-resume-btn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', function() {
    gtag('event', 'click_download_resume', {
      'event_category': 'Engagement',
      'event_label': 'Contact Page'
    });
  });
}
