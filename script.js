(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const countdown = document.querySelector('[data-wedding-countdown]');
  if (!countdown) return;

  // Local time in Norway: the ceremony day begins at midnight on 10 July 2027.
  const weddingStart = new Date('2027-07-10T00:00:00+02:00');
  const sundayStart = new Date('2027-07-11T00:00:00+02:00');
  const mondayStart = new Date('2027-07-12T00:00:00+02:00');
  const dayEl = document.getElementById('countdown-days');
  const hourEl = document.getElementById('countdown-hours');
  const minuteEl = document.getElementById('countdown-minutes');
  const secondEl = document.getElementById('countdown-seconds');
  const message = document.getElementById('wedding-day-message');
  const gif = document.getElementById('celebration-gif');
  const caption = document.getElementById('celebration-caption');

  // Replace these URLs with your preferred GIFs whenever you like.
  const partyGif = 'assets/party.gif';
  const hangoverGif = 'assets/hungover.gif';

  function updateCountdown() {
    const now = new Date();
    if (now >= mondayStart) {
      countdown.hidden = true;
      message.hidden = false;
      gif.hidden = true;
      caption.textContent = 'Festen er over... Tusen takk for at dere var med på feiringen!';
      return;
    }
    if (now >= sundayStart) {
      countdown.hidden = true;
      message.hidden = false;
      gif.hidden = false;
      gif.src = hangoverGif;
      gif.alt = 'Animasjon for dagen derpå';
      caption.textContent = 'Dagen derpå. Vann, kaffe og gode historier.';
      return;
    }
    if (now >= weddingStart) {
      countdown.hidden = true;
      message.hidden = false;
      gif.hidden = false;
      gif.src = partyGif;
      gif.alt = 'Animasjon av mennesker som fester';
      caption.textContent = 'Det er bryllupsdag! Nå feirer vi!';
      return;
    }
    const diff = weddingStart.getTime() - now.getTime();
    dayEl.textContent = Math.floor(diff / 86400000);
    hourEl.textContent = Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0');
    minuteEl.textContent = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
    secondEl.textContent = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
