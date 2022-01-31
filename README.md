<p align="center">
  <a href="https://github.com/neogcamp/mockman" rel="noopener" target="_blank"><img src="https://github.com/neogcamp/mockman/blob/main/src/assets/Mockman.png" width="120" height="120" align="center"/></a>

</p>

<h1 align="center"><b>MockmanJS</b></h1>
<p align="center">
<a href="https://badge.fury.io/js/mockman-js"><img src="https://badge.fury.io/js/mockman-js.svg" alt="npm version" height="18"></a>
<a href="https://github.com/neogcamp/mockman/blob/main/LICENSE" target="blank">
<img src="https://img.shields.io/npm/l/mockman?style=flat-square" alt="mockman licence" />
</a>
<a href="https://github.com/neogcamp/mockman/fork" target="blank">
<img src="https://img.shields.io/github/forks/neogcamp/mockman?style=flat-square" alt="mockman forks"/>
</a>
<a href="https://github.com/neogcamp/mockman/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/neogcamp/mockman?style=flat-square" alt="mockman stars"/>
</a>
<a href="https://github.com/neogcamp/mockman/issues" target="blank">
<img src="https://img.shields.io/github/issues/neogcamp/mockman?style=flat-square" alt="mockman issues"/>
</a>
<a href="https://github.com/neogcamp/mockman/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/neogcamp/mockman?style=flat-square" alt="mockman pull-requests"/>
</a>

</p>

<p align="center">
    <a href="https://www.npmjs.com/package/mockman-js" target="blank">mockman-js</a>
    ·
    <a href="https://github.com/neogcamp/mockman/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/neogcamp/mockman/issues/new/choose">Request Feature</a>
</p>

---

## **🤔 About**

🚀 **MockmanJS** gives plug and play React Component to test your fake mock-backend APIs.

⚡ Mocking Libraries such as **MirageJS**, **JSON-Server** etc. provide fake RESTful APIs. But sadly, you cannot test them without actually using them in your project.

🌌 **Mockman** is POSTMAN; but for Mock APIs.

🤩 Import **Mockman** in your project and get started!

> You build **Mock APIs**, Mockman will handle the REST!

---

## **⬇ Installation**

Install **Mockman** by running:

```bash
npm i mockman-js

yarn add mockman-js
```

---

## **🛠️ Usage**

### **Import the component in your App**

```jsx
/*
we encourage to have a dedicated route called `/mock-api` on your frontend app where you can import Mockman and test them 
*/

import React from "react";
import Mockman from "mockman-js";
function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

export default MockAPI;
```

### **Import Styles**

In your `index.html`, add the following:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/mockman-js@latest/dist/style.css"
/>
```

You can always override the default styles by defining your custom css.

### **Color Scheme**

Mockman currently supports `colorScheme` prop to define color scheme to Mockman component.

The `colorScheme` prop currently accepts two values - "standard" (default) and "dark".

```jsx
<Mockman colorScheme="dark" />
```

---

## **💖 We love Contributions**

- **mockBEE** is truly Open Source. Any sort of contribution to this project are highly appreciated. Create a branch, add commits, and [open a pull request](https://github.com/neogcamp/mockBee/compare).

- Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details on our [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md), and the process for submitting pull requests to **mockBEE**.

---

## **🛡️ License**

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.
