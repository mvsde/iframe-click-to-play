'use strict';

class IframeClickToPlay {
  /**
   * Create new iframe click to play instance
   * @param {HTMLElement} iframe Target iframe
   * @param {HTMLElement} fallback Fallback content
   */
  constructor (iframe, fallback) {
    this.iframe = iframe;
    this.fallback = fallback;
  }

  init () {
    this.iframe.hidden = true;
    this.fallback.addEventListener('click', () => this.play());
  }

  play () {
    this.iframe.src = this.iframe.dataset.src;
    this.iframe.hidden = false;
    this.fallback.remove();
  }
}

module.exports = IframeClickToPlay;
