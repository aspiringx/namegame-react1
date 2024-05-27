I've tried two approaches:

- 2 github workflow files from this tutorial: https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/
- Github's pages config for Nextjs option created nextjs.yml

Neither seems to work since it tries to generate static pages and I'm using 
the "apps" [slug] approach to allow the /g/[slug] to be dynamic for each 
group. Need to see if this requires NodeJS. We want this React app to be 
only front-end. 