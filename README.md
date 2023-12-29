# namaste-react
Namaste React 🚀 by Akshay Saini
# General Questions
- Transpiler: program to convert code from one form to other like Jsx to Html
# Setting up testing JEST
- Install RTL (React testing library) command is npm install --save-dev @testing-library/react

- Install JEST as dev dependency command is npm install --save-dev jest
- Install Babel dependencies command is npm install --save-dev babel-jest @babel/core @babel/preset-env
- Configured the babel in the root of the folder using babel.config.js
- Create .parcelrc at the root to disable default babel transpilation.
- Configured JEST Using npx jest --init which creates jest.config.js
- Install JSDOM Using the command npm install --save-dev jest-environment-jsdoms
- Install @babel/preset-react to make JSX Work in test cases command npm install --save-dev babel-jest @babel/preset-react
- Include @babel/preset-react inside babel.config.js
- Install @testing-library/jest-dom for the method like toBeInTheDocument();
# JEST Folder default conventions

-  __tests__ (dundertests)
-  Headers.test.js 
- etc
# Issues during the JEST Testing
- If the component is having the fetch it will be failed because of fetch (if any) because it is part of browser and JSDOM Browser does not contain it
