# T-20 World Cup 2024

![Demo](demo.gif)

This extension fetches live cricket match scores from an API and dynamically displays them along with country flags of the participating teams.

## Features

- Displays live scores of matches from the ICC Men's T20 World Cup 2024.
- Shows team names, scores, and match status dynamically.
- Includes country flags next to each team for visual identification.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   
   git clone https://github.com/your-username/live-cricket-scores.git

2. Navigate into the project directory:

    cd live-cricket-scores

3. Get your key from CricAPI then, Click on load upacked and select the folder
   ![image](https://github.com/prateek2pathak/T20-WorldCup2024/assets/119005608/509d01c9-9331-4e37-a33b-c22c9dfeec46)



## How It Works

- The `script.js` file fetches live match data from an API (`https://api.cricapi.com/v1/currentMatches`) using `fetch()` and `async/await`.
- Matches are filtered to include only those from the ICC Men's T20 World Cup 2024.
- For each match, a list item (`<li>`) is dynamically created and appended to the `<ul>` with id `match-list`.
- Country flags are displayed using `<img>` tags alongside team names.

## API Key

This project uses the [CricAPI](https://www.cricapi.com/) for fetching live cricket match data. You need to replace `'YOUR_API_KEY'` in `script.js` with your own API key obtained from CricAPI.

## Screenshots

![image](https://github.com/prateek2pathak/T20-WorldCup2024/assets/119005608/1f56b152-3866-44f8-8b2e-7e95c3b8df4a)



