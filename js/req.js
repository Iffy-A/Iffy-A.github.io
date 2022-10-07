// JavaScript Document
// Remember concat is used -> `${var_name}`

window.onload = function () {
	const url = ('https://api.github.com/users/Iffy-A/repos'); console.log(url);
    var card = document.querySelector("#repos");	

    const getRepos = async () => {
        const resp = await fetch(url);
        const respJson = await resp.json();
        console.log(respJson);
        var nodeTbl = document.createElement("table");
        for(var i = 0; i < respJson.length; i++) {
            console.log(respJson[i]);
            var repoName = respJson[i].name;
            var repoUrl = respJson[i].html_url;
            console.log(repoName, repoUrl);

            var nodeTr = document.createElement("tr"); //Create Table Row
            var nodeRepoInf = document.createElement("td"); //Create repo info data
            var repoItem = document.createTextNode(repoName); //Set row val
            var nodeRepoLink = document.createElement("td"); //Create repo link
            var nodeA = document.createElement("a");
            nodeA.href = repoUrl;
            nodeA.target = '_blank';
            nodeA.innerText = 'Click';
            var repoLink = document.createTextNode(repoUrl);

            nodeRepoInf.appendChild(repoItem);
            nodeRepoLink.appendChild(nodeA);
            nodeTbl.appendChild(nodeTr);
            nodeTr.appendChild(nodeRepoInf);
            nodeTr.appendChild(nodeRepoLink);
            card.appendChild(nodeTbl);         
        }
    };
    const testRepo = getRepos();
}