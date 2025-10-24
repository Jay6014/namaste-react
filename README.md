# Namaste React 


# Create index.html and app.js files --- in index.html, in script tag give type="module"  or else "Browser scripts cannot have imports or exports." will be thrown while building

# setting up git repository and pushing code to git

    1. git init 
    2. git branch -M main
    3. Create README.md file
    3. git add .
    4. git commit -m "episode-1"
    5. git remote add origin https://github.com/Jay6014/namaste-react.git
    6. git push origin main

# installing packages/dependencies
    1. npm init (give test as "jest")
    2. npm install -D parcel ---- installing parcel
    3. npm install react (same as npm i react)
    4. npm install react-dom (same as npm i react-dom)
    3. Create .gitignore file and add /node_modules in it.
    4. npm install --save-dev @babel/core @babel/preset-react ----- installing babel as parcel not installing babel    automatically
    5.create a file ".babelrc" in your project root and place 
        {
            "presets": [
                "@babel/preset-react"
            ]
        }
    6.open package.json file and under scripts,
        "scripts": {
            "test": "jest",
            "start": "parcel index.html",
            "build": "parcel build index.html"
        },
    7. While running npm init, we gave "main" as "app.js" which we throw an error while building. Remove "main" in package.json
    8. npm start
    9. after building "dist" and ".parcel-cache" folders will be created. include them in .gitignore
    10. npm install @reduxjs/toolkit
    11. npm install react-redux
    12. npm install -D @tesing-library/react
    13. npm install -D jest
    14. npm install --save-dev babel-jest @babel/core @babel/preset-env  --- install this dependency if you are using babel
    15. Create a file "babel.congig.js" in root folder and place
            module.exports = {
                presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
            };
    16. create a new file called ".parcelrc" in your root folder and paste it.
            {
                "extends": "@parcel/config-default",
                "transformers": {
                    "*.{js,mjs,jsx,cjs,ts,tsx}": [
                    "@parcel/transformer-js",
                    "@parcel/transformer-react-refresh-wrap"
                    ]
                }
            }
    17. npm run test ---  to run the testcases
    18. npm init jest@latest ---- jest configuration
    19. npm install --save-dev jest-environment-jsdom ---- if jest version is 28 or later version, install jsdom separately
    20. npm install -D @babel/preset-react  ------ to make JSX work in test cases
    21. Include @babel/preset-react in babel.config.js
            module.exports = {
                presets: [
                    ['@babel/preset-env', { targets: { node: 'current' }}],
                    ["@babel/preset-react", { runtime: "automatic" }]

            ],
            };
    22. Include below lines in .babelrc
            {
                "presets": [
                    "@babel/preset-env",
                    "@babel/preset-react",
                ]
            }
    23. npm install -D @testing-library/jest-dom



# planning for food order app 
    
    -Header
        -logo
        - Nav items
    -Body
        -search
        -RestaurantContainer
            -Restaurant cards
                -img
                -name of the restaurant
                -rating
                -cuisine
                -delivery time
    -Footer
        -copyright
        -links
        -contact us
        -about us
    


START THE SERVER:
-----------------
    npm start
    http://localhost:1234/
    

HOSTING URL:
-----------
    https://namaste-react-7n0d.onrender.com/

