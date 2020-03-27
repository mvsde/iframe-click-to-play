# `<iframe>` click-to-play

Some `<iframe>`s might save cookies or do other kinds of tracking. This isn't allowed under GDPR law without prior consent from the user. A "click-to-play" solution helps with this situation.

[Demo](https://iframe-click-to-play.fynn.be)

## Installation

```bash
npm install @mvsde/iframe-click-to-play
```

## Usage

### Markup

The `<iframe>` has to have a `data-src` attribute pointing to the desired source. A fallback element is required which may have arbitrary content.

```html
<iframe
  class="iframe"
  data-src="https://www.youtube.com/embed/OrxmtDw4pVI"
  width="960"
  height="540"
></iframe>

<div class="fallback">
  <h2>YouTube Video Embed</h2>
  <p>Click to load the embedded YouTube video.</p>
  <button class="trigger">Load video</button>
</div>
```

### JavaScript

Select the `<iframe>` and fallback elements and create a new `IframeClickToPlay` instance.

```js
import IframeClickToPlay from '@mvsde/iframe-click-to-play'

const iframe = document.querySelector('.iframe')
const fallback = document.querySelector('.fallback')
const trigger = document.querySelector('.trigger')

new IframeClickToPlay(iframe, fallback, trigger).init()
```
