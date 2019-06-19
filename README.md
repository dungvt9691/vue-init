Setting Project
============================

Please pick a preset: 
```
  vue-init (vue-router, vuex, sass, babel, eslint) 
  vue-template (vue-router, vuex, sass, babel, eslint) 
  default (babel, eslint) 
❯ Manually select features
```

? Check the features needed for your project: 
```
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

? Use history mode for router? (Requires proper server setup for index fallback 
in production) (Y/n)
```
Y
```

? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported 
by default): 
```
  Sass/SCSS (with dart-sass) 
❯ Sass/SCSS (with node-sass) 
  Less 
  Stylus
```

? Pick a linter / formatter config: 
```
  ESLint with error prevention only 
❯ ESLint + Airbnb config 
  ESLint + Standard config 
  ESLint + Prettier 
```

? Pick additional lint features: (Press `<space>` to select, `<a>` to toggle all, `<i>` to invert selection)
```
 ◉ Lint on save
 ◯ Lint and fix on commit
```

? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? 
```
❯ In dedicated config files 
  In package.json 
```


Folder Structure Conventions
============================

    .
    ├── public       
    │   ├── favicon.ico
    │   └── index.html               
    ├── src         
    │   ├── assets                  
    │   │   ├── images              # Project image files
    │   │   └── stylesheets         # Project css files
    │   ├── components              # ui components
    │   ├── config                  # main project config
    │   ├── lib                     # Included JS file to write common functions
    │   ├── locales                 # Locales json files
    │   │   ├── vi.json             # Vietnamese define
    │   │   └── en.json             # English define
    │   ├── store                   # Vuex
    │   │   ├── modules             # Vuex modules
    │   │   └── index.js            # Vuex setting file
    │   ├── views
    │   ├── App.vue                 # main app component
    │   ├── i18n.js                 # locale setting file
    │   ├── main.js                 # app entry file             
    │   └── router.js               # router setting file
    ├── test/
    │   └── unit/                   # unit tests
    │   │   ├── specs/              # test spec files
    │   │   ├── eslintrc            # config file for eslint with extra settings only for unit tests
    │   │   ├── index.js            # test build entry file
    │   │   ├── jest.conf.js        # Config file when using Jest for unit tests
    │   │   └── karma.conf.js       # test runner config file when using Karma for unit tests
    │   │   ├── setup.js            # file that runs before Jest runs your unit tests
    │   └── e2e/                    # e2e tests
    │   │   ├── specs/              # test spec files
    │   │   ├── custom-assertions/  # custom assertions for e2e tests
    │   │   ├── runner.js           # test runner script
    │   │   └── nightwatch.conf.js  # test runner config file
    ├── .env                        # Define VARIABLES for all Enviroments
    ├── .env.development            # Define VARIABLES for only development enviroment.
    ├── .env.staging                # Define VARIABLES for only staging enviroment.
    ├── .env.production             # Define VARIABLES for only production enviroment.
    ├── eslintrc.js                 # Define Esline rules.
    ├── babel.config.js             # Babel config           
    ├── package.json                # Build scripts and dependencies
    ├── postcss.config.js           # Postcss config          
    ├── README.md                   # Default README file
    ├── vue.config.js               # Define config for vue
    └── yarn.lock                   # Auto-generated when running yarn install