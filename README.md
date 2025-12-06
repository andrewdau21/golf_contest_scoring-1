
# 2025 Golf Majors Pool Scoreboard App

This app helps track entries and scoring for the 2025 Golf Majors Pool contest. Use it to view leaderboards, overall standings, and tournament results for all participants.


## Contest Instructions

### How It Works

- For each major, players are split into 6 groups based on odds to win the tournament.
- You choose 1 player from each of the 6 groups to make up your team.
- Your score is the total of your best 4 players overall (not each day).
- At least 4 of your players must make the cut for your team to make the cut.
- Updated leaderboards will be sent following the conclusion of each round.

#### Tiebreakers
- For the winner only: First tiebreaker is most players to make the cut, then lowest total of all remaining players.

#### Overall Scoring
- After each tournament, your position determines how many points go toward your cumulative total. (e.g., if 70 players, winner gets 70 points, 2nd gets 69, ..., last gets 1. Miss the cut = 0 points.)
- Total points across all 4 tournaments determine the overall winner.


## App Usage

### Local Development

1. Install dependencies:
	```sh
	npm install
	```
2. Start the app:
	```sh
	npm start
	```
	The app will run at http://localhost:3000


### Deploy to GitHub Pages

1. Install the gh-pages package:
	```sh
	npm install --save gh-pages
	```
2. Ensure your `package.json` includes:
	```json
	"homepage": "https://andrewdau21.github.io/golf_contest_scoring-1",
	"scripts": {
	  "predeploy": "npm run build",
	  "deploy": "gh-pages -d build"
	}
	```
3. Deploy your app:
	```sh
	npm run deploy
	```
	Your app will be live at: https://andrewdau21.github.io/golf_contest_scoring-1

## Features

- Leaderboard with expandable team details
- Overall standings and tournament standings pages
- Search and filter by golfer name

## License

MIT

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
