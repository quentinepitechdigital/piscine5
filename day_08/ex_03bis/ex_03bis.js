// Tippy.js initialization for tutorial mode on click with tooltips
document.addEventListener("DOMContentLoaded", function () {
  // Elements for the tutorial
  const elements = [
    { selector: '#image', content: 'This is an image!' },
    { selector: '#square', content: 'This is a square!' },
    { selector: '#sound', content: 'This is a sound player!' },
    { selector: '#button', content: 'This is a clickable button!' },
    { selector: '#video', content: 'This is a video player!' }
  ];

  // Initialize Tippy.js for each element
  const tippyInstances = elements.map(function (el) {
    return tippy(el.selector, {
      content: el.content,
      trigger: 'manual',
      interactive: true,
      animation: 'scale', // Nice animation
      hideOnClick: true, // Hide when clicked outside
      theme: 'light-border' // Optional theme
    });
  });

  tippyInstances.forEach(function (instance) {
    instance[0].show();
  });

  // Close all tooltips when clicking outside
  document.addEventListener('click', function (event) {
    tippy.hideAll();
  }, true);
});
