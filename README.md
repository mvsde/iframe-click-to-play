# iframe Click-to-Play

Some `<iframe>`s might save cookies or do other kinds of tracking. This isn't allowed under GDPR law without prior consent from the user. A “click-to-play” solution helps with this situation.

[Demos →](https://iframe-click-to-play.fynn.be)

## Installation

```bash
npm install @mvsde/iframe-click-to-play
```

## Usage

### Markup

Rename the `src` attribute of the `<iframe>` to `data-src` This makes sure no external content gets loaded without prior consent. A fallback element is required which may have arbitrary content. The trigger button can be part of the fallback element, but doesn’t need to be.

#### Standalone `<iframe>`

[Demo for the standalone variant →](https://iframe-click-to-play.fynn.be/standalone.html)

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

#### `<iframe>` within a container

[Demo for the container variant →](https://iframe-click-to-play.fynn.be/container.html)

The `<iframe>` can be nested inside a container. The script automatically searches for the first descendant `<iframe>`.

```html
<div class="iframe">
  <iframe
    data-src="https://www.youtube.com/embed/OrxmtDw4pVI"
    width="960"
    height="540"
  ></iframe>
</div>

<div class="fallback">
  <h2>YouTube Video Embed</h2>
  <p>Click to load the embedded YouTube video.</p>
  <button class="trigger">Load video</button>
</div>
```

### JavaScript

Select the `<iframe>` or the element containing it, the fallback element, and the trigger button. Create a new `IframeClickToPlay` instance.

```js
import { IframeClickToPlay } from '@mvsde/iframe-click-to-play'

const iframe = document.querySelector('.iframe')
const fallback = document.querySelector('.fallback')
const trigger = document.querySelector('.trigger')

new IframeClickToPlay({ iframe, fallback, trigger }).init()
```
