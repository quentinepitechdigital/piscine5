document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    { selector: '#image', content: 'This is an image!' },
    { selector: '#square', content: 'This is a square!' },
    { selector: '#sound', content: 'This is a sound player!' },
    { selector: '#button', content: 'This is a clickable button!' },
    { selector: '#video', content: 'This is a video player!' }
  ];

  const tippyInstances = elements.map(function (el) {
    return tippy(el.selector, {
      content: el.content,
      trigger: 'manual',
      interactive: true,
      animation: 'scale',
      hideOnClick: true,
      theme: 'light-border'
    });
  });

  tippies[0][0].show();
});
