
const logo = document.querySelector(".logo-container");
const team = document.querySelector(".team-container");
const yearFormed = document.querySelector(".year-formed--container");

const API_call = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";




async function getPremierLeague() {
    try {
        const response = await fetch(API_call);
        const results = await response.json();
        const allTeams = results.teams;
        logo.innerHTML = "";
        

      for (let i = 0; i < allTeams.length; i++) {
            const teamName = allTeams[i].strTeam;
            const badges = allTeams[i].strTeamBadges;
            const foundationYear = allTeams[i].intFormedYear;
            logo.innerHTML += `<div>
                                <h4>${teamName}</h4>
                                <p>${foundationYear}</p>
                                <img src="${badges}>`;


        console.log(allTeams[i]);
      }
        

        
        console.log(allTeams.length);








    } catch(error) {
        console.log(error)
    }
}

getPremierLeague();

