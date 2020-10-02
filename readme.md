# Twitch Clone App with react redux and Google Auth

Google API call - `https://apis.google.com/js/api.js`

Notes -

    window.gapi.load('client:auth2', () => {
          window.gapi.client
            .init({
              client_id:
                'id.apps.googleusercontent.com',
              scope: 'email',
            })
            .then(() => {
              this.auth = window.gapi.auth2.getAuthInstance();
              this.setState({ isSignedIn: this.auth.isSignedIn.get() });
              this.auth.isSignedIn.listen(this.onAuthchange);
            });
        });
      }

In redux dev tool -

we can use `localhost:3000/?degug_session=something` and it will store all the previous action that we have done in the dev tool
