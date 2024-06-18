document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const overlay = document.getElementById('overlay');
  const overlayLinks = document.querySelectorAll('.overlay-menu a');
  const sections = document.querySelectorAll('section');

  menuIcon.addEventListener('click', function () {
    if (overlay.style.height === '100%') {
      overlay.style.height = '0';
    } else {
      overlay.style.height = '100%';
    }
  });

  overlayLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const target = this.getAttribute('href').slice(1);

      sections.forEach((section) => {
        if (section.id === target) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      overlay.style.height = '0';
    });
  });
});

function scrollToParticles() {
  const particlesSection = document.getElementById('particles-section');
  particlesSection.scrollIntoView({ behavior: 'smooth' });
}

const roles = ["Software Engineer.", "Developer.", "Makeup Artist."];
let roleIndex = 0;
let charIndex = 0;

function clearRoleText(textElement, callback) {
  const text = textElement.textContent;
  if (text.length === 0) {
    callback();
    return;
  }
  textElement.textContent = text.slice(0, -1);
  setTimeout(() => {
    clearRoleText(textElement, callback);
  }, 100); // Adjust the delay here
}

function typeRoleText(textElement, roleText, callback) {
  const text = roleText.substring(0, charIndex + 1);
  textElement.textContent = text;
  charIndex++;
  if (text === roleText) {
    callback();
    return;
  }
  setTimeout(() => {
    typeRoleText(textElement, roleText, callback);
  }, 100); // Adjust the delay here
}

function blinkCursor(cursorElement, times, callback) {
  let count = 0;
  function toggleVisibility() {
    cursorElement.style.visibility = (cursorElement.style.visibility === 'hidden') ? 'visible' : 'hidden';
    count++;
    if (count === times * 2) {
      callback();
      return;
    }
    setTimeout(toggleVisibility, 500);
  }
  toggleVisibility();
}

function showNextRole() {
  const roleTextElement = document.getElementById('roleText');
  const cursorElement = document.getElementById('cursor');
  const currentRole = roles[roleIndex];
  clearRoleText(roleTextElement, () => {
    charIndex = 0;
    typeRoleText(roleTextElement, currentRole, () => {
      blinkCursor(cursorElement, 2, () => {
        clearRoleText(roleTextElement, () => {
          setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            showNextRole();
          }, 1000);
        });
      });
    });
  });
}

showNextRole();
