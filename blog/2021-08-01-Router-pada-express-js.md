---
slug: router-express
title: Router Pada ExpressJs
author: Fiqry choerudin
author_title: Frontend Developer
author_url: https://github.com/fiqryq
author_image_url: https://avatars.githubusercontent.com/u/25787603?v=4
tags: [js, express]
---

Tulisan kali ini akan membahas penggunaan salah satu module dari express js yaitu router , kenapa sih kita harus menggunakan router? dengan menggunakan router kita bisa dengan mudah menghandle request.
langkah pertama init dulu projectnya dengan cara :

```
npm init -y
```

setelah itu lakukan installasi express js melalu npm :

```
npm install express --save
```

buat file app.js :

```js
const express = require("express");
const app = express();
const route = require("./Routes/index");
const port = 3000;

app.use("/", route);

app.listen(port, () => {
  console.log(`App runing at ${port}`);
});
```

lalu buat folder bernama Router dan buat file bernama index.js :

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/about", (req, res) => {
  res.send("Hello from about");
});

module.exports = router;
```

setelah selesai coba jalankan project dengan perintah :

```
node app.js
```

nah gimana mudah kan? dengan router kita bisa menghandle request dengan mudah. mungkin sekian tulisan saya kali ini kritik dan saran sangat welcome karena tulisan ini adalah hasil rangkuman dari roadmap belajar javascript saya hehe.