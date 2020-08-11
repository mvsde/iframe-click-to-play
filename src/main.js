class IframeClickToPlay {
  /**
   * Create new iframe click to play instance
   * @param {HTMLElement} iframe Target iframe
   * @param {HTMLElement} fallback Fallback content
   * @param {HTMLElement} trigger Click-to-play trigger
   */
  constructor (iframe, fallback, trigger) {
    this.iframe = iframe
    this.fallback = fallback
    this.trigger = trigger
  }

  init () {
    this.iframe.hidden = true
    this.trigger.addEventListener('click', () => this.play())
  }

  play () {
    if (this.iframe.tagName === 'IFRAME') {
      this.iframe.src = this.iframe.dataset.src
    } else {
      const descendant = this.iframe.querySelector('iframe')
      descendant.src = descendant.dataset.src
    }

    this.iframe.hidden = false

    this.fallback.remove()
    this.trigger.remove()
  }
}

export default IframeClickToPlay
