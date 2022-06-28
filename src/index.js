// https://www.codewars.com/api/v1/users/{user}
//get user info from codewars using fetch

fetch('https://www.codewars.com/api/v1/users/TLAMHutto')
    .then(response => response.json())
    .then(data => {
        console.log(data.ranks.overall);
        let score = data.ranks.overall.score;
            

    }
    )
    .catch(error => console.log(error));
