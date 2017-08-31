# tracker
real time analytics tool for viewing what users are doing

backend:

This server will intercept events on the frontend and pass it to your app. When you setup your server, `/internal` must be private, only accessible by your team. Allow access to `/track`

```js
import { server } from 'tracker'

const app = server({
  appUrl: 'https://myapp.com',
  onUser: user => {
   //generate an auth token to use on the internal view and impersonate the user browsing the site
  }
})

app.listen(8888)

```

frontend:

Add the script tag to the top of your app. Call a function that will pass the logged in user's info so that the internal view can impersonate the user:

```js
KimmelTracker.sendUser('user@test.com')
```

Add a method that will receive a token and set it as the active user in your frontend:

```
window.onUser = token => localStorage.setItem('token',token)
```

The server will call `window.onUser` any time a user logs in and you are watching their screen. This way you can follow them to protected areas of your site.
