# 03. Igniting our app
> 🔥 "It only takes a spark to ignite a brilliant idea." 🔥

**`Q1. What is NPM?`** <br />
NPM is package manager that manage the npm database. Packages can be installed using npm.

**`Q2. What is Parcel/Webpack. Why do you need it?`** <br />
<br />
Parcel and webpack are the bundler that are used to create build. Apart from the general build functionality these bundler perfrom different jobs like performance optimization / Caching etc.

**`What is .parcel-cache?`** <br />
parcel-cache is the cache file that Parcel bundler manages for cacheing. Parcel then uses this file for better performance.


**`Q: What is npx?`** <br />
Npx is the package runner it is used to run the npm pacakges.

**`Q: What is the differences between dependencies and dev-dependencies?`** <br />
Dev-Dependencies is the dependences that we use for development purpose / testing purpose only. If you do not want to install devdependencies you can simply use `npm install --production`