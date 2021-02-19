const container = document.querySelector(".main-container");

const API_call = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";



async function getPremierLeague() {
    try {
        const response = await fetch(API_call);
        const results = await response.json();
        const allTeams = results.teams;
        container.innerHTML = "";
       
        allTeams.forEach(function(teamInfo) {
            container.innerHTML += `<a href="details.html?id=${teamInfo.idTeam}" class="divs-index">
                                       <h4>${teamInfo.strTeam}</h4>
                                       <img class="badges" src="${teamInfo.strTeamBadge}"> 
                                       <p>Est: ${teamInfo.intFormedYear}</p>
                                    </a>`;
        });
        // console.log(allTeams)
    } catch(error) {
        console.log(error)
        container.innerHTML = "Something went wrong and we lost the ball..!!"
        
    }
}

getPremierLeague();

