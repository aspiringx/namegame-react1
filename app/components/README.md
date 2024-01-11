# components directory
NextJS does routing by the folder structure inside the `app` directory.
If a folder has a `page.ts` or `route.ts` file inside of it that file will
be servable.

e.g. If we have an `app/dog/page.ts` file, it will be servable at
`http://localhost/dog` because `page.ts` is the default file for that folder
similar to `index.js` or `index.html` in other systems.

We can put the `components` directory under app and it will remain private
because we're not putting a `page.ts` or `route.ts` file inside of it. The
`components` directory is where we'll put all our UI building blocks.