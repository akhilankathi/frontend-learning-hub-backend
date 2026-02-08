export const LEARNING_DATA = {
  html: {
    title: "HTML & HTML5",
    icon: "Code",
    description: "HyperText Markup Language - the foundation of web development",
    detailedInfo: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. HTML5 is the latest version, introducing semantic elements, multimedia support, and powerful APIs. It structures content on the web and works alongside CSS for styling and JavaScript for interactivity.",
    sections: [
      {
        id: 'html-basics',
        title: "HTML5 Features & Uses",
        content: [
          "Semantic elements (header, nav, article, section, footer)",
          "Audio and Video support without plugins",
          "Canvas for 2D graphics and animations",
          "Local Storage and Session Storage",
          "Geolocation API",
          "Drag and Drop functionality",
          "Web Workers for background processing",
          "Form enhancements (email, date, color inputs)"
        ]
      },
      {
        id: 'wcag',
        title: "WCAG (Web Content Accessibility Guidelines)",
        content: [
          "WCAG 2.1 & 2.2 standards for accessible web content",
          "Four main principles: Perceivable, Operable, Understandable, Robust (POUR)",
          "Three conformance levels: A (minimum), AA (mid-range), AAA (highest)",
          "Key requirements: Alt text for images, keyboard navigation, color contrast ratios",
          "ARIA labels and roles for screen readers",
          "Semantic HTML for better accessibility"
        ]
      },
      {
        id: 'html-resources',
        title: "Learning Resources",
        resources: [
          { name: "MDN Web Docs", url: "https://developer.mozilla.org", desc: "Comprehensive HTML documentation", type: "docs" },
          { name: "W3Schools", url: "https://www.w3schools.com/html", desc: "Interactive tutorials and examples", type: "docs" },
          { name: "HTML5 Doctor", url: "https://html5doctor.com", desc: "HTML5 element reference", type: "docs" },
          { name: "WebAIM", url: "https://webaim.org", desc: "Web accessibility resources", type: "docs" },
          { name: "A11y Project", url: "https://www.a11yproject.com", desc: "Accessibility checklist and guides", type: "docs" },
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org", desc: "Free HTML courses with projects", type: "docs" }
        ]
      },
      {
        id: 'html-youtube',
        title: "YouTube Channels & Tutorials",
        resources: [
          { name: "freeCodeCamp.org", url: "https://www.youtube.com/@freecodecamp", desc: "Full-length HTML/CSS crash courses (10+ hours)", type: "youtube" },
          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "HTML crash courses and real-world projects by Brad Traversy", type: "youtube" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "2000+ tutorials including comprehensive HTML series", type: "youtube" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified", desc: "Clear HTML explanations with best practices", type: "youtube" },
          { name: "Kevin Powell", url: "https://www.youtube.com/@KevinPowell", desc: "HTML & CSS expert with responsive design focus", type: "youtube" },
          { name: "Dave Gray", url: "https://www.youtube.com/@DaveGrayTeachesCode", desc: "Full HTML course for beginners with projects", type: "youtube" },
          { name: "SuperSimpleDev", url: "https://www.youtube.com/@SuperSimpleDev", desc: "HTML Full Course – Beginner to Pro", type: "youtube" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/@programmingwithmosh", desc: "HTML crash course with clean code practices", type: "youtube" }
        ]
      }
    ]
  },
  css: {
    title: "CSS & Ecosystem",
    icon: "Palette",
    description: "Cascading Style Sheets - styling and layout for the web",
    detailedInfo: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. Modern CSS includes powerful features like Flexbox, Grid, animations, and custom properties. CSS preprocessors and frameworks enhance development speed and maintainability.",
    sections: [
      {
        id: 'css-features',
        title: "Modern CSS Features",
        content: [
          "Flexbox for one-dimensional layouts",
          "CSS Grid for two-dimensional layouts",
          "Custom Properties (CSS Variables)",
          "CSS Animations and Transitions",
          "Media Queries for responsive design",
          "Pseudo-classes and Pseudo-elements",
          "CSS Functions (calc, clamp, min, max)",
          "Container Queries for component-based responsiveness"
        ]
      },
      {
        id: 'css-preprocessors',
        title: "CSS Preprocessors",
        content: [
          "Sass/SCSS - most popular, with variables, nesting, mixins",
          "Less - dynamic stylesheet language",
          "Stylus - expressive, dynamic, robust CSS",
          "PostCSS - tool for transforming CSS with JavaScript plugins"
        ]
      },
      {
        id: 'css-frameworks',
        title: "CSS Frameworks & Libraries",
        content: [
          "Tailwind CSS - utility-first framework",
          "Bootstrap - comprehensive component library",
          "Material UI - Google's Material Design",
          "Bulma - modern CSS framework based on Flexbox",
          "Foundation - responsive front-end framework",
          "Chakra UI - modular component library",
          "Ant Design - enterprise-level design system",
          "Styled Components - CSS-in-JS library"
        ]
      },
      {
        id: 'css-resources',
        title: "Learning Resources",
        resources: [
          { name: "CSS-Tricks", url: "https://css-tricks.com", desc: "Tips, tricks, and techniques", type: "docs" },
          { name: "MDN CSS Guide", url: "https://developer.mozilla.org/CSS", desc: "Complete CSS reference", type: "docs" },
          { name: "Flexbox Froggy", url: "https://flexboxfroggy.com", desc: "Learn Flexbox through games", type: "docs" },
          { name: "Grid Garden", url: "https://cssgridgarden.com", desc: "Learn CSS Grid through games", type: "docs" },
          { name: "Can I Use", url: "https://caniuse.com", desc: "Browser support tables", type: "docs" },
          { name: "Sass Documentation", url: "https://sass-lang.com", desc: "Official Sass guide", type: "docs" }
        ]
      },
      {
        id: 'css-youtube',
        title: "YouTube Channels & Tutorials",
        resources: [
          { name: "Kevin Powell", url: "https://www.youtube.com/@KevinPowell", desc: "CSS evangelist - Grid, Flexbox, responsive design master", type: "youtube" },
          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "CSS crash courses with Bootstrap, Tailwind, Sass", type: "youtube" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified", desc: "Modern CSS tutorials and best practices", type: "youtube" },
          { name: "freeCodeCamp.org", url: "https://www.youtube.com/@freecodecamp", desc: "Full CSS courses with projects", type: "youtube" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "CSS fundamentals to advanced animations", type: "youtube" },
          { name: "DesignCourse", url: "https://www.youtube.com/@DesignCourse", desc: "CSS with UI/UX design principles by Gary Simon", type: "youtube" },
          { name: "Layout Land", url: "https://www.youtube.com/@LayoutLand", desc: "CSS Grid and Flexbox by Jen Simmons (Mozilla)", type: "youtube" },
          { name: "DevTips", url: "https://www.youtube.com/@DevTips", desc: "CSS layouts, classes, and responsive design", type: "youtube" }
        ]
      }
    ]
  },
  javascript: {
    title: "JavaScript & Ecosystem",
    icon: "Sparkles",
    description: "The programming language of the web",
    detailedInfo: "JavaScript is a versatile, high-level programming language that enables interactive web pages. Modern JavaScript (ES6+) includes features like arrow functions, promises, async/await, and modules. It powers both frontend and backend development through Node.js and various frameworks.",
    sections: [
      {
        id: 'js-features',
        title: "Modern JavaScript (ES6+)",
        content: [
          "Arrow Functions and Template Literals",
          "Destructuring and Spread Operator",
          "Promises and Async/Await",
          "Modules (import/export)",
          "Classes and Inheritance",
          "Map, Set, WeakMap, WeakSet",
          "Optional Chaining and Nullish Coalescing",
          "Array methods (map, filter, reduce, find)"
        ]
      },
      {
        id: 'js-libraries',
        title: "JavaScript Libraries",
        content: [
          "jQuery - DOM manipulation and AJAX (legacy but still used)",
          "Lodash - utility functions for common tasks",
          "Moment.js / Day.js - date manipulation",
          "Axios - HTTP client for API requests",
          "RxJS - reactive programming library",
          "Three.js - 3D graphics library",
          "D3.js - data visualization",
          "GSAP - animation library"
        ]
      },
      {
        id: 'js-frameworks',
        title: "JavaScript Frameworks",
        content: [
          "React - component-based UI library by Meta",
          "Angular - full-featured framework by Google",
          "Vue.js - progressive framework",
          "Svelte - compile-time framework",
          "Next.js - React framework with SSR",
          "Nuxt.js - Vue framework with SSR",
          "Remix - full-stack React framework",
          "Solid.js - reactive UI library"
        ]
      },
      {
        id: 'js-resources',
        title: "Learning Resources",
        resources: [
          { name: "JavaScript.info", url: "https://javascript.info", desc: "Modern JavaScript tutorial", type: "docs" },
          { name: "MDN JavaScript", url: "https://developer.mozilla.org/JavaScript", desc: "Complete JS reference", type: "docs" },
          { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net", desc: "Free online book", type: "docs" },
          { name: "You Don't Know JS", url: "https://github.com/getify/You-Dont-Know-JS", desc: "Deep dive into JS", type: "docs" },
          { name: "JavaScript30", url: "https://javascript30.com", desc: "30 day vanilla JS challenge", type: "docs" }
        ]
      },
      {
        id: 'js-youtube',
        title: "YouTube Channels & Tutorials",
        resources: [
          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "JavaScript crash courses and modern ES6+ features", type: "youtube" },
          { name: "freeCodeCamp.org", url: "https://www.youtube.com/@freecodecamp", desc: "10+ hour full JavaScript courses", type: "youtube" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "Async/await, promises, modern JS features", type: "youtube" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/@programmingwithmosh", desc: "Clean JavaScript code with 17+ years experience", type: "youtube" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified", desc: "JavaScript in Y minutes - concise tutorials", type: "youtube" },
          { name: "Academind", url: "https://www.youtube.com/@academind", desc: "JavaScript fundamentals to advanced by Maximilian", type: "youtube" },
          { name: "Fireship", url: "https://www.youtube.com/@Fireship", desc: "100 seconds of JavaScript - lightning fast explainers", type: "youtube" },
          { name: "Fun Fun Function", url: "https://www.youtube.com/@funfunfunction", desc: "Functional programming with JavaScript", type: "youtube" }
        ]
      },
      {
        id: 'js-interview',
        title: 'Javascript Interview Questions',
        code: []

      }
    ]
  },
  react: {
    title: "React Ecosystem",
    icon: "BookOpen",
    description: "Component libraries, tools, and resources for React",
    detailedInfo: "React is a declarative, component-based JavaScript library for building user interfaces, developed by Meta (Facebook). It uses a virtual DOM for efficient rendering and follows a unidirectional data flow. React's ecosystem includes powerful tools for state management, routing, styling, and server-side rendering.",
    sections: [
      {
        id: 'react-ui',
        title: "React UI Component Libraries",
        content: [
          "Material-UI (MUI) - comprehensive component library",
          "Ant Design - enterprise-level design system",
          "Chakra UI - accessible component library",
          "React Bootstrap - Bootstrap components for React",
          "Mantine - full-featured components and hooks",
          "Headless UI - unstyled accessible components",
          "Radix UI - low-level UI primitives",
          "shadcn/ui - customizable component collection",
          "NextUI - beautiful, modern UI library",
          "PrimeReact - rich set of components"
        ]
      },
      {
        id: 'react-3d',
        title: "3D Graphics & Visualization",
        content: [
          "React Three Fiber - Three.js renderer for React",
          "React Three Drei - useful helpers for R3F",
          "React Force Graph - force-directed graph",
          "React Globe - interactive globe visualization",
          "Visx - low-level visualization primitives",
          "React Unity WebGL - Unity integration"
        ]
      },
      {
        id: 'react-charts',
        title: "Chart & Data Visualization Libraries",
        content: [
          "Recharts - composable charting library",
          "Victory - modular charting components",
          "Nivo - rich data visualization components",
          "Chart.js with react-chartjs-2",
          "Apache ECharts with echarts-for-react",
          "Tremor - dashboard component library",
          "React Plotly.js - interactive charts",
          "Visx by Airbnb - low-level viz primitives"
        ]
      },
      {
        id: 'react-realtime',
        title: "Real-time & Live Data",
        content: [
          "Socket.io-client - WebSocket library",
          "React Query (TanStack Query) - data fetching & caching",
          "SWR - data fetching with cache",
          "Firebase Realtime Database - live data sync",
          "Supabase - real-time PostgreSQL",
          "Pusher - real-time communication",
          "Ably - realtime data platform"
        ]
      },
      {
        id: 'react-animation',
        title: "Animation Libraries",
        content: [
          "Framer Motion - animation library",
          "React Spring - spring-physics animations",
          "React Transition Group - transitions",
          "GSAP (with React) - professional animations",
          "Auto Animate - automatic animations",
          "React Move - data-driven animations"
        ]
      },
      {
        id: 'react-forms',
        title: "Form Libraries",
        content: [
          "React Hook Form - performant forms",
          "Formik - form management",
          "React Final Form - subscription-based forms",
          "Yup / Zod - schema validation",
          "React Select - select input component",
          "React Datepicker - date picker component"
        ]
      },
      {
        id: 'react-state',
        title: "State Management",
        content: [
          "Redux Toolkit - predictable state container",
          "Zustand - lightweight state management",
          "Jotai - primitive and flexible state",
          "Recoil - experimental state library by Meta",
          "MobX - simple, scalable state",
          "XState - state machines library"
        ]
      },
      {
        id: 'react-routing',
        title: "Routing & Navigation",
        content: [
          "React Router - declarative routing",
          "TanStack Router - type-safe routing",
          "Wouter - minimalist router",
          "Next.js Router - file-based routing"
        ]
      },
      {
        id: 'react-resources',
        title: "Learning Resources",
        resources: [
          { name: "React Official Docs", url: "https://react.dev", desc: "New official documentation", type: "docs" },
          { name: "React TypeScript Cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app", desc: "TS with React", type: "docs" },
          { name: "Awesome React", url: "https://github.com/enaqx/awesome-react", desc: "Curated React resources", type: "docs" },
          { name: "React Patterns", url: "https://reactpatterns.com", desc: "Common React patterns", type: "docs" },
          { name: "Epic React", url: "https://epicreact.dev", desc: "Kent C. Dodds course", type: "docs" },
          { name: "UI.dev", url: "https://ui.dev", desc: "React courses and tutorials", type: "docs" }
        ]
      },
      {
        id: 'react-youtube',
        title: "YouTube Channels & Tutorials",
        resources: [
          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "React crash courses with hooks, context, routing", type: "youtube" },
          { name: "freeCodeCamp.org", url: "https://www.youtube.com/@freecodecamp", desc: "Full React courses - beginner to advanced", type: "youtube" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "React tutorial series with hooks and Firebase", type: "youtube" },
          { name: "Codevolution", url: "https://www.youtube.com/@Codevolution", desc: "React basics to Redux - step by step", type: "youtube" },
          { name: "JavaScript Mastery", url: "https://www.youtube.com/@javascriptmastery", desc: "Real-world React projects and applications", type: "youtube" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified", desc: "React hooks and best practices", type: "youtube" },
          { name: "Academind", url: "https://www.youtube.com/@academind", desc: "Complete React guide by Maximilian", type: "youtube" },
          { name: "Ben Awad", url: "https://www.youtube.com/@bawad", desc: "React with GraphQL and real-world apps", type: "youtube" },
          { name: "Pedro Tech", url: "https://www.youtube.com/@PedroTechnologies", desc: "8+ hour comprehensive React course", type: "youtube" },
          { name: "Lee Robinson (Vercel)", url: "https://www.youtube.com/@leerob", desc: "Learn Next.js and React 2025 playlists", type: "youtube" },
          { name: "Jack Herrington", url: "https://www.youtube.com/@jherr", desc: "Advanced React patterns and micro frontends", type: "youtube" },
          { name: "Fireship", url: "https://www.youtube.com/@Fireship", desc: "React in 100 seconds and quick tutorials", type: "youtube" }
        ]
      }
    ]
  },
  angular: {
    title: "Angular Ecosystem",
    icon: "BookOpen",
    description: "Full-featured TypeScript framework by Google",
    detailedInfo: "Angular is a comprehensive, opinionated framework for building scalable web applications, developed by Google. Built with TypeScript, it provides a complete solution with dependency injection, two-way data binding, RxJS for reactive programming, and a powerful CLI for development.",
    sections: [
      {
        id: 'angular-features',
        title: "Angular Core Features",
        content: [
          "Component-based architecture with TypeScript",
          "Two-way data binding with [(ngModel)]",
          "Dependency Injection system",
          "RxJS for reactive programming",
          "Angular CLI for scaffolding and development",
          "Directives (*ngIf, *ngFor, custom directives)",
          "Services and Interceptors",
          "Built-in form validation (Template & Reactive Forms)",
          "Angular Router for navigation",
          "HttpClient for API calls"
        ]
      },
      {
        id: 'angular-ui',
        title: "Angular UI Component Libraries",
        content: [
          "Angular Material - official Material Design components",
          "PrimeNG - rich set of UI components",
          "NG-ZORRO - Ant Design for Angular",
          "Clarity Design - VMware's design system",
          "Nebular - customizable UI library",
          "NGX-Bootstrap - Bootstrap components",
          "Kendo UI for Angular - comprehensive components",
          "Ionic - mobile-first components",
          "Taiga UI - open-source kit",
          "NG-Lightning - Salesforce Lightning components"
        ]
      },
      {
        id: 'angular-state',
        title: "State Management",
        content: [
          "NgRx - Redux pattern for Angular",
          "Akita - state management pattern",
          "NGXS - state management library",
          "Elf - reactive store",
          "Angular Services - simple state management",
          "RxJS BehaviorSubject - for shared state"
        ]
      },
      {
        id: 'angular-tools',
        title: "Essential Angular Tools & Libraries",
        content: [
          "Angular DevTools - browser extension for debugging",
          "NGX-Translate - internationalization (i18n)",
          "AngularFire - Firebase integration",
          "NGX-Charts - declarative charting",
          "NGX-Datatable - feature-rich tables",
          "Apollo Angular - GraphQL client",
          "Socket.io-client - WebSocket integration",
          "Compodoc - documentation tool"
        ]
      },
      {
        id: 'angular-resources',
        title: "Learning Resources",
        resources: [
          { name: "Angular Official Docs", url: "https://angular.io/docs", desc: "Comprehensive Angular guide", type: "docs" },
          { name: "Angular University", url: "https://angular-university.io", desc: "In-depth Angular courses", type: "docs" },
          { name: "NgRx Documentation", url: "https://ngrx.io", desc: "State management guide", type: "docs" },
          { name: "Angular In Depth", url: "https://angularindepth.com", desc: "Advanced Angular articles", type: "docs" },
          { name: "Awesome Angular", url: "https://github.com/PatrickJS/awesome-angular", desc: "Curated resources", type: "docs" },
          { name: "Tour of Heroes", url: "https://angular.io/tutorial", desc: "Official Angular tutorial", type: "docs" }
        ]
      },
      {
        id: 'angular-youtube',
        title: "YouTube Channels & Tutorials",
        resources: [
          { name: "freeCodeCamp.org", url: "https://www.youtube.com/@freecodecamp", desc: "17+ hour Angular full course with TypeScript", type: "youtube" },
          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "Angular crash courses and real projects", type: "youtube" },
          { name: "Programming with Mosh", url: "https://www.youtube.com/@programmingwithmosh", desc: "Angular fundamentals with clean code", type: "youtube" },
          { name: "Academind", url: "https://www.youtube.com/@academind", desc: "Complete Angular course by Maximilian", type: "youtube" },
          { name: "Codevolution", url: "https://www.youtube.com/@Codevolution", desc: "Angular tutorial from basics to advanced", type: "youtube" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "Angular series with components and services", type: "youtube" },
          { name: "Teddy Smith", url: "https://www.youtube.com/@TeddySmithDev", desc: "Beginner-friendly Angular playlist", type: "youtube" },
          { name: "ARC Tutorials", url: "https://www.youtube.com/@ARCTutorials", desc: "Step-by-step Angular videos", type: "youtube" },
          { name: "Procademy", url: "https://www.youtube.com/@procademy", desc: "Angular 13+ fundamentals and CLI", type: "youtube" },
          { name: "Bitfumes", url: "https://www.youtube.com/@Bitfumes", desc: "3+ hour Angular 14 tutorial with Firebase", type: "youtube" }
        ]
      }
    ]
  },
  vue: {
    title: "Vue.js Ecosystem",
    icon: "BookOpen",
    description: "The Progressive JavaScript Framework",
    detailedInfo: "Vue.js is a progressive, incrementally adoptable JavaScript framework for building user interfaces. Created by Evan You, it combines the best features of React and Angular with an approachable learning curve. Vue 3 introduces the Composition API, improved performance, and better TypeScript support.",
    sections: [
      {
        id: 'vue-features',
        title: "Vue.js Core Features",
        content: [
          "Reactive data binding with Composition API & Options API",
          "Single File Components (.vue files)",
          "Virtual DOM for efficient rendering",
          "Directives (v-if, v-for, v-model, v-bind, v-on)",
          "Computed properties and watchers",
          "Slots for component composition",
          "Transitions and animations built-in",
          "Vue Router for routing",
          "Pinia for state management (official)",
          "Vue 3 performance improvements"
        ]
      },
      {
        id: 'vue-ui',
        title: "Vue UI Component Libraries",
        content: [
          "Vuetify - Material Design component framework",
          "Element Plus - desktop UI library",
          "Quasar - high-performance framework",
          "PrimeVue - rich UI component suite",
          "Ant Design Vue - enterprise-level components",
          "Naive UI - Vue 3 component library",
          "Vuesax - beautiful, customizable components",
          "BootstrapVue - Bootstrap components",
          "Buefy - lightweight UI based on Bulma",
          "Headless UI - unstyled components"
        ]
      },
      {
        id: 'vue-state',
        title: "State Management",
        content: [
          "Pinia - official Vue store (recommended)",
          "Vuex - centralized state management (legacy)",
          "VueUse - collection of composition utilities",
          "Harlem - simple, unopinionated state",
          "Provide/Inject - built-in Vue feature"
        ]
      },
      {
        id: 'vue-tools',
        title: "Vue Tools & Libraries",
        content: [
          "Vite - next-gen build tool (official)",
          "Vue DevTools - browser extension",
          "Nuxt.js - server-side rendering framework",
          "VueUse - essential composition utilities",
          "Vue Apollo - GraphQL integration",
          "Vue Chart.js - chart integration",
          "Vue i18n - internationalization",
          "VeeValidate - form validation",
          "Vue Test Utils - official testing library",
          "Vitest - fast unit testing framework"
        ]
      },
      {
        id: 'vue-resources',
        title: "Learning Resources",
        resources: [
          { name: "Vue.js Official Docs", url: "https://vuejs.org", desc: "Comprehensive Vue guide", type: "docs" },
          { name: "Vue Mastery", url: "https://vuemastery.com", desc: "Premium Vue courses", type: "docs" },
          { name: "Vue School", url: "https://vueschool.io", desc: "Video courses for Vue", type: "docs" },
          { name: "Awesome Vue", url: "https://github.com/vuejs/awesome-vue", desc: "Curated Vue resources", type: "docs" },
          { name: "VueUse Docs", url: "https://vueuse.org", desc: "Composition utilities", type: "docs" },
          { name: "Nuxt Documentation", url: "https://nuxt.com", desc: "Nuxt framework guide", type: "docs" }
        ]
      },
      {
        id: 'vue-youtube',
        title: "YouTube Channels & Tutorials",
        resources: [
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "Comprehensive Vue.js tutorial series", type: "youtube" },
          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "Vue crash courses with real projects", type: "youtube" },
          { name: "freeCodeCamp.org", url: "https://www.youtube.com/@freecodecamp", desc: "Full Vue.js courses for beginners", type: "youtube" },
          { name: "Academind", url: "https://www.youtube.com/@academind", desc: "Vue complete guide by Maximilian", type: "youtube" },
          { name: "Program with Erik", url: "https://www.youtube.com/@ProgramWithErik", desc: "Vue.js specialist with in-depth tutorials", type: "youtube" },
          { name: "Vue Mastery", url: "https://www.youtube.com/@VueMastery", desc: "Advanced Vue techniques and best practices", type: "youtube" },
          { name: "Lachlan Miller", url: "https://www.youtube.com/@Lachlan19900", desc: "Vue 3 crash course and testing with Vue Test Utils", type: "youtube" },
          { name: "LearnVue", url: "https://www.youtube.com/@LearnVue", desc: "Modern Vue.js tutorials and tips", type: "youtube" },
          { name: "JavaScript Mastery", url: "https://www.youtube.com/@javascriptmastery", desc: "Vue projects and real-world applications", type: "youtube" }
        ]
      }
    ]
  },
  others: {
    title: "Other Frameworks",
    icon: "Sparkles",
    description: "Modern alternatives and emerging frameworks",
    detailedInfo: "The frontend ecosystem continues to evolve with innovative frameworks offering unique approaches to web development. From compile-time frameworks like Svelte to meta-frameworks like Next.js and Remix, these tools provide specialized solutions for performance, developer experience, and specific use cases.",
    sections: [
      {
        id: 'svelte',
        title: "Svelte & SvelteKit",
        content: [
          "Compile-time framework - no virtual DOM",
          "Truly reactive without dependencies",
          "Smaller bundle sizes",
          "Built-in animations and transitions",
          "SvelteKit - full-stack framework",
          "Scoped styling by default",
          "Simple state management with stores",
          "Excellent performance"
        ]
      },
      {
        id: 'solid',
        title: "Solid.js",
        content: [
          "Fine-grained reactivity system",
          "No virtual DOM - direct DOM updates",
          "JSX syntax like React",
          "Extremely fast performance",
          "Small bundle size",
          "SolidStart - meta-framework",
          "Simple and predictable",
          "Growing ecosystem"
        ]
      },
      {
        id: 'nextjs',
        title: "Next.js (React Framework)",
        content: [
          "Server-side rendering (SSR)",
          "Static site generation (SSG)",
          "API routes built-in",
          "File-based routing",
          "Image optimization",
          "App Router with Server Components",
          "Middleware support",
          "Vercel deployment optimization"
        ]
      },
      {
        id: 'remix',
        title: "Remix (React Framework)",
        content: [
          "Full-stack React framework",
          "Nested routing",
          "Progressive enhancement focus",
          "Built on Web Fetch API",
          "Excellent form handling",
          "Error boundaries",
          "Optimistic UI updates",
          "Server-side rendering"
        ]
      },
      {
        id: 'astro',
        title: "Astro",
        content: [
          "Content-focused static site builder",
          "Islands architecture - partial hydration",
          "Bring your own framework (React, Vue, Svelte)",
          "Zero JavaScript by default",
          "Markdown and MDX support",
          "Fast build times",
          "Excellent for blogs and documentation",
          "SEO-friendly"
        ]
      },
      {
        id: 'qwik',
        title: "Qwik",
        content: [
          "Resumability instead of hydration",
          "Instant-on applications",
          "Lazy loading by default",
          "O(1) loading time",
          "QwikCity - meta-framework",
          "Optimized for performance",
          "Progressive JavaScript execution",
          "Similar syntax to React"
        ]
      },
      {
        id: 'preact',
        title: "Preact",
        content: [
          "3KB React alternative",
          "Same modern API as React",
          "Fast rendering performance",
          "Compatible with React ecosystem",
          "Preact CLI for quick setup",
          "Preact X - latest version",
          "Perfect for lightweight apps",
          "Easy migration from React"
        ]
      },
      {
        id: 'alpine',
        title: "Alpine.js",
        content: [
          "Lightweight JavaScript framework (15KB)",
          "Declarative syntax in HTML",
          "No build step required",
          "Vue-like directives (x-data, x-show, x-if)",
          "Perfect for sprinkling interactivity",
          "Great for WordPress/Laravel projects",
          "Minimal learning curve",
          "Progressive enhancement"
        ]
      },
      {
        id: 'lit',
        title: "Lit (Web Components)",
        content: [
          "Simple, modern web components",
          "Reactive properties",
          "Scoped styles",
          "Fast and lightweight",
          "Framework agnostic",
          "By Google",
          "Works with any framework",
          "Standards-based"
        ]
      },
      {
        id: 'htmx',
        title: "HTMX",
        content: [
          "Access AJAX, CSS Transitions, WebSockets via HTML",
          "No JavaScript required",
          "Progressive enhancement",
          "Tiny size (14KB)",
          "Server-side rendering friendly",
          "Great for traditional backend devs",
          "RESTful approach",
          "Simple but powerful"
        ]
      },
      {
        id: 'other-resources',
        title: "Learning Resources",
        resources: [
          { name: "Svelte Tutorial", url: "https://svelte.dev/tutorial", desc: "Interactive Svelte guide", type: "docs" },
          { name: "SolidJS Docs", url: "https://solidjs.com", desc: "Official Solid documentation", type: "docs" },
          { name: "Next.js Learn", url: "https://nextjs.org/learn", desc: "Next.js interactive course", type: "docs" },
          { name: "Remix Docs", url: "https://remix.run/docs", desc: "Remix documentation", type: "docs" },
          { name: "Astro Docs", url: "https://docs.astro.build", desc: "Astro documentation", type: "docs" },
          { name: "Qwik Docs", url: "https://qwik.builder.io", desc: "Qwik framework guide", type: "docs" },
          { name: "Alpine.js Docs", url: "https://alpinejs.dev", desc: "Alpine.js documentation", type: "docs" },
          { name: "HTMX Essays", url: "https://htmx.org/essays", desc: "HTMX philosophy & guides", type: "docs" }
        ]
      },
      {
        id: 'other-youtube',
        title: "YouTube Channels & Tutorials",
        resources: [
          { name: "Fireship", url: "https://www.youtube.com/@Fireship", desc: "Svelte, Qwik, Astro in 100 seconds", type: "youtube" },
          { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", desc: "Svelte, Next.js, Remix crash courses", type: "youtube" },
          { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja", desc: "Svelte tutorial series from scratch", type: "youtube" },
          { name: "Lee Robinson (Vercel)", url: "https://www.youtube.com/@leerob", desc: "Next.js tutorials and app router guide", type: "youtube" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified", desc: "Next.js, Remix, and modern frameworks", type: "youtube" },
          { name: "freeCodeCamp.org", url: "https://www.youtube.com/@freecodecamp", desc: "Full Svelte, Next.js, Astro courses", type: "youtube" },
          { name: "Academind", url: "https://www.youtube.com/@academind", desc: "Next.js complete guide", type: "youtube" },
          { name: "Jack Herrington", url: "https://www.youtube.com/@jherr", desc: "Next.js, Astro, Fresh framework comparisons", type: "youtube" },
          { name: "Theo - t3.gg", url: "https://www.youtube.com/@t3dotgg", desc: "T3 stack, Next.js, and React ecosystem opinions", type: "youtube" },
          { name: "Huntabyte", url: "https://www.youtube.com/@huntabyte", desc: "Svelte and SvelteKit tutorials", type: "youtube" },
          { name: "Kevin Powell", url: "https://www.youtube.com/@KevinPowell", desc: "HTMX and progressive enhancement", type: "youtube" }
        ]
      }
    ]
  }
};
