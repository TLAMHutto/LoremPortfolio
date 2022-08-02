// https://www.codewars.com/api/v1/users/{user}
//get user info from codewars using fetch

fetch('https://www.codewars.com/api/v1/users/TLAMHutto')
    .then(response => response.json())
    .then(data => {
        let score = data.ranks.overall.score;
        let rank = data.ranks.overall.rank;
        let name = data.ranks.overall.name
        document.getElementById('codeWars').innerHTML = 'Score: ' + score + ' Rank: ' + rank + ' Name: ' + name;
        console.log(data.ranks.overall);
        
            

    }
    )
    .catch(error => console.log(error));
