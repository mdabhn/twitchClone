# Twitch Colne App with react redux

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
