## YouTube Clone
A basic single page react/redux web application which searches the youtube API with some basic filtering, and ability to save favourites.

A demo is available at https://youtube-clone.herokuapp.com/

<img src='http://res.cloudinary.com/small-change/raw/upload/v1482059803/Group_11_1_t0qkyx.png'/>


### How to get the repo running locally on your machine

Clone it to your machine:

`git clone https://github.com/shenders13/youtube-clone.git`

Install all the node dependencies:

`npm install`

Start the server. From the root directory:

`npm start`

In a new tab in your terminal, start the autotranspiler. This detects any changes you make to the client runs webpack to automatically transpile your changes from JSX to javascript.:

`npm run dev`

### Suggested improvements

- A new video starts automatically when the current one finishes. Especially useful to "play through" a user's favourites list.
- User accounts (will obviously require a DB) so that a user's favourite list can persist after refreshing the browser.
