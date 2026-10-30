# becaus — video & text pin wall

Static site: a masonry "pin wall" of creator videos and brand text cards, with saving, filters, search, infinite scroll and a small matching game.

```
index.html
css/styles.css
js/app.js
```

No build step. Open `index.html` in a browser or serve the folder with any static host (e.g. GitHub Pages).

Videos load from `MEDIA_BASE` at the top of `js/app.js`. To self-host them, put the files in a `media/` folder and set `MEDIA_BASE = "media/"`.
