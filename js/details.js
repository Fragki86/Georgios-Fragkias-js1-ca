const detailsContainer = document.querySelector(".details-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);



const id = params.get("id");

console.log(id);



const teamDetailsURL = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=" + id;

console.log(teamDetailsURL);


async function getTeamDetails() {
    try {
        const response = await fetch(teamDetailsURL);
        const detailedInfo = await response.json();
    
        detailsContainer.innerHTML = "";
        console.log(detailedInfo.teams[0]);
        

        newDetails(detailedInfo);
    } catch(error) {
        console.log(error);
        detailsContainer.innerHTML = "We lost the ball again!!";
    }
}
getTeamDetails();


function newDetails(detailedInfo) {
    detailsContainer.innerHTML = `<div class="div-details">
                                    <img class="badges" src="${detailedInfo.teams[0].strTeamBadge}">
                                    <h1>${detailedInfo.teams[0].strTeam}</h1>
                                    <p><span class="stadium">Stadium:</span> ${detailedInfo.teams[0].strStadium}, ${detailedInfo.teams[0].intStadiumCapacity} seats</p>
                                    <img class="stadium-photo" src="${detailedInfo.teams[0].strStadiumThumb}">
                                    <h2>Description / History</h2>
                                    <p>${detailedInfo.teams[0].strDescriptionEN}</p>
                                    <p>Teams website: ${detailedInfo.teams[0].strWebsite}</p>
                                  </div>`;



    const updatedTitle = document.querySelector("title")

    function pageTitleUpdate() {
        updatedTitle.innerHTML = detailedInfo.teams[0].strTeam;
    }
    pageTitleUpdate();
}

console.dir(document)