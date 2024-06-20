const match_list = document.getElementById("match-list");

const listHTML=(matchData)=>{
    return `
<div class="match-info">
    <span class="match-status">${matchData.status}</span>
</div>
<div class="score-details">
    <div class="team-score">
        <img class="team-flag" src=${matchData.t1img} alt="Team 1 Flag">
        <span class="team-name">${matchData.t1}</span>
        <span class="score">${matchData.t1s}</span>
    </div>
    <div class="team-score">
        <img class="team-flag" src=${matchData.t2img} alt="Team 2 Flag">
        <span class="team-name">${matchData.t2}</span>
        <span class="score">${matchData.t2s}</span>
    </div>
</div>

`;
}

function addItem(matchData) {

    const li = document.createElement('li');
    li.innerHTML = listHTML(matchData);
    match_list.appendChild(li);
}


async function getScores() {
    const response = await fetch('https://api.cricapi.com/v1/cricScore?apikey=d79fa79a-ebd6-4f9b-9deb-0d9cf46aa4f4');
    const json = await response.json();
    const data = json.data;
    console.log(data);
    const scoreList = data.filter(match => match.series === "ICC Mens T20 World Cup 2024").slice(0, 5).map((match) => {
        return match;
    });
    console.log(scoreList);
    scoreList.map(match=>{
        addItem(match);
    })
}
getScores();
