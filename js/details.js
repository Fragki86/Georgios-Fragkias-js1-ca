const detailsContainer = document.querySelector(".details-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);


const id = params.get("idTeam");

console.log(id);

// console.log(params);

const teamDetailsURL = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League/" + id;

console.log(teamDetailsURL);


async function getTeamDetails() {
    try {
        const response = await fetch(teamDetailsURL);
        const detailedInfo = await response.json();

        detailsContainer.innerHTML = "";
        console.log(detailedInfo);
        

        newDetails(detailedInfo);
    } catch(error) {
        console.log(error);
        detailsContainer.innerHTML = "We lost the ball again!!";
    }
}
getTeamDetails();


function newDetails(detailedInfo) {
    detailsContainer.innerHTML = `<h1>${detailedInfo.strTeam}</h1>`;
}