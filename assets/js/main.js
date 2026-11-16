// Lernstudio 1234 – kleine Helfer. Ohne JavaScript bleibt die Seite vollständig lesbar.

// Preise: Aus den drei Laufzeit-Blöcken wird ein Umschalter, der immer einen Block zeigt.
function initPricing() {
  const pricing = document.querySelector('[data-pricing]');
  if (!pricing) return;

  const switcher = pricing.querySelector('[data-term-switch]');
  const buttons = [...pricing.querySelectorAll('[data-term-button]')];
  const terms = [...pricing.querySelectorAll('[data-term]')];

  const select = (termId) => {
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.termButton === termId));
    });
    terms.forEach((term) => {
      term.classList.toggle('is-active', term.dataset.term === termId);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => select(button.dataset.termButton));
  });

  switcher.hidden = false;
  pricing.classList.add('is-enhanced');
}

// Porträt: Fehlt die Bilddatei, zeigt der Rahmen stattdessen den Gruß in Schulschrift.
function initPortrait() {
  const frame = document.querySelector('[data-portrait]');
  const image = frame?.querySelector('img');
  if (!image) return;

  const showFallback = () => frame.classList.add('is-empty');

  if (image.complete && image.naturalWidth === 0) {
    showFallback();
  } else {
    image.addEventListener('error', showFallback, { once: true });
  }
}

initPricing();
initPortrait();
