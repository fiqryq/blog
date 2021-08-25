---
sidebar_position: 4
---

# CSS

## Center content on div

```css
.container {
  width: 100%;
  max-width: 700px;
  margin: auto;
  align-items: center;
  height: 100vh;
  display: flex;
  justify-content: center;
}
```

## Particle js background

```css
/* Canvas untuk background */
canvas {
  display: block;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
}

.container {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  max-width: 90%;
  padding: 2em 3em;
}
```