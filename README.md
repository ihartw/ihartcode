# IHartCode

My professional portfolio showcasing various projects and skills. I designed, built, and deployed it with [Vue 3](https://vuejs.org/) + [MaterializeCSS](https://materializecss.com/) + [Netlify](https://www.netlify.com/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Structure
The app is a hybrid mixture of microfrontends. Some of the projects have been modularized as part of the monorepo and some have been independently deployed as standalone apps. Since all of the projects are built with vue, I've considered integrating the polyrepos into the monorepo but each repo has different dependencies so I've left it as is for now.

**Components / Design System**
> I componentized each section of the home view for best practices & maintainability. Hypothetically, this is also great for a/b testing and would allow me to rapidly create and deploy new isolated sections for testing purposes.

> The MaterializeCSS framework already provides a design system but if I had to implement my own, I would base it off [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/).

**CSS**
> The global css folder has 2 files. The base.css is where I would add css variables and normalize styles. main.css has global styles that can be reused throughout the entire app but custom styles are scoped directly to the components. If I weren't using MaterializeCSS I would create my own helpers.css file or use Tailwind css.

**Naming Conventions**
> I try to follow the vue style guide. You'll notice components and view file names are UpperCamelCase when defined but are multi-word tags when used in a template.

**Global**
> There's a store folder with a store.js file which I created with the intention of implementing a global state management but didn't end up needing it.

**Services**
> There's an empty services folder which is where I would modularize services for dependency injection.

## Technologies
- Vue 3 
- Vite 
- Materialize CSS Framework
- Lottie files
- CSS animations 
- Vue Animations
- JavaScript
- Netlify

