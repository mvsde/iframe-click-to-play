export class IframeClickToPlay {
  /**
   * Create new iframe click to play instance
   * @param {Object} options Options
   * @param {HTMLElement} options.iframe Target iframe
   * @param {HTMLElement} options.fallback Fallback content
   * @param {HTMLButtonElement} options.trigger Click-to-play trigger
   */
  constructor ({ iframe, fallback, trigger }) {
    this.container = iframe
    this.iframe = iframe
    this.src = iframe.dataset.src
    this.fallback = fallback
    this.trigger = trigger
    this.placeholder = document.createComment('')

    if (iframe.tagName !== 'IFRAME') {
      const descendant = iframe.querySelector('iframe')
      this.iframe = descendant
      this.src = descendant.dataset.src
    }
  }

  init () {
    // Remove the iframe from the DOM to avoid a history entry on src change.
    this.container.after(this.placeholder)
    this.container.remove()

    this.trigger.addEventListener('click', () => this.play())
  }

  play () {
    // Set the iframe src before re-inserting the node into the DOM.
    // This avoids a history entry due to a src change.
    this.iframe.src = this.src
    this.placeholder.replaceWith(this.container)

    this.fallback.remove()
    this.trigger.remove()
  }
}
