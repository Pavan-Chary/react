[33mcommit 35e68b7c8d50ad850732623a4e01505dbdadc17e[m
Author: Pavan-Chary <kpkchary143@gmail.com>
Date:   Wed Aug 7 13:52:14 2024 +0530

    video 5

[1mdiff --git a/public/index.html b/public/index.html[m
[1mindex aa069f2..174faab 100644[m
[1m--- a/public/index.html[m
[1m+++ b/public/index.html[m
[36m@@ -24,6 +24,7 @@[m
       work correctly both with client-side routing and a non-root public URL.[m
       Learn how to configure a non-root public URL by running `npm run build`.[m
     -->[m
[32m+[m[32m    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">[m
     <title>React App</title>[m
   </head>[m
   <body>[m
[36m@@ -32,12 +33,14 @@[m
     <!--[m
       This HTML file is a template.[m
       If you open it directly in the browser, you will see an empty page.[m
[31m-[m
[32m+[m[41m      [m
       You can add webfonts, meta tags, or analytics to this file.[m
       The build step will place the bundled scripts into the <body> tag.[m
[31m-[m
[31m-      To begin the development, run `npm start` or `yarn start`.[m
[31m-      To create a production bundle, use `npm run build` or `yarn build`.[m
[31m-    -->[m
[31m-  </body>[m
[31m-</html>[m
[32m+[m[41m        [m
[32m+[m[32m        To begin the development, run `npm start` or `yarn start`.[m
[32m+[m[32m        To create a production bundle, use `npm run build` or `yarn build`.[m
[32m+[m[32m        -->[m
[32m+[m[32m        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>[m
[32m+[m[32m      </body>[m
[32m+[m[32m      </html>[m
[41m+      [m
\ No newline at end of file[m
[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 3784575..670674f 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -3,22 +3,27 @@[m [mimport './App.css';[m
 [m
 function App() {[m
   return ([m
[31m-    <div className="App">[m
[31m-      <header className="App-header">[m
[31m-        <img src={logo} className="App-logo" alt="logo" />[m
[31m-        <p>[m
[31m-          Edit <code>src/App.js</code> and save to reload.[m
[31m-        </p>[m
[31m-        <a[m
[31m-          className="App-link"[m
[31m-          href="https://reactjs.org"[m
[31m-          target="_blank"[m
[31m-          rel="noopener noreferrer"[m
[31m-        >[m
[31m-          Learn React[m
[31m-        </a>[m
[31m-      </header>[m
[32m+[m[32m    <>[m
[32m+[m[32m    <nav className="navbar navbar-expand-lg bg-body-tertiary">[m
[32m+[m[32m  <div className="container-fluid">[m
[32m+[m[32m    <a className="navbar-brand" href="/">My project</a>[m
[32m+[m[32m    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">[m
[32m+[m[32m      <span className="navbar-toggler-icon"></span>[m
[32m+[m[32m    </button>[m
[32m+[m[32m    <div className="collapse navbar-collapse" id="navbarSupportedContent">[m
[32m+[m[32m      <ul className="navbar-nav me-auto mb-2 mb-lg-0">[m
[32m+[m[32m        <li className="nav-item">[m
[32m+[m[32m          <a className="nav-link active" aria-current="page" href="#">Home</a>[m
[32m+[m[32m        </li>[m
[32m+[m[32m      </ul>[m
[32m+[m[32m      <form className="d-flex" role="search">[m
[32m+[m[32m        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>[m
[32m+[m[32m        <button className="btn btn-outline-success" type="submit">Search</button>[m
[32m+[m[32m      </form>[m
     </div>[m
[32m+[m[32m  </div>[m
[32m+[m[32m  </nav>[m
[32m+[m[32m  </>[m
   );[m
 }[m
 [m
