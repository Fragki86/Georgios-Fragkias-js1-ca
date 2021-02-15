const container = document.querySelector(".main-container");
const team = document.querySelector(".team-container");
const yearFormed = document.querySelector(".year-formed--container");

const API_call = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";




async function getPremierLeague() {
    try {
        const response = await fetch(API_call);
        const results = await response.json();
        const allTeams = results.teams;
        container.innerHTML = "";
        

      for (let i = 0; i < allTeams.length; i++) {
            const teamName = allTeams[i].strTeam;
            const badges = allTeams[i].strTeamBadge;
            const foundationYear = allTeams[i].intFormedYear;
            container.innerHTML += `<div class="divs-index">
                                <h4>${teamName}</h4>
                                <img class="badges" src="${badges}"> 
                                <p>Est: ${foundationYear}</p>
                               </div>`;
      }
    } catch(error) {
        console.log(error)
        container.innerHTML = "Something went wrong and we lost the ball..!!"
        
    }
}

getPremierLeague();

