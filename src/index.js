// https://www.codewars.com/api/v1/users/{user}
//get user info from codewars using fetch

// fetch('https://www.codewars.com/api/v1/users/TLAMHutto')
//     .then(response => response.json())
//     .then(data => {
//         let score = data.ranks.overall.score;
//         let rank = data.ranks.overall.rank;
//         let name = data.ranks.overall.name
//         document.getElementById('codeWars').innerHTML = 'Score: ' + score + ' Rank: ' + rank + ' Name: ' + name;
//         console.log(data.ranks.overall);
        
            

//     }
//     )
//     .catch(error => console.log(error));
//when button id=software is clicked console log software
    document.getElementById('softwareDev').style.visibility = 'hidden';
    document.getElementById('threeDev').style.visibility = 'hidden';

document.getElementById('webButton').addEventListener('click', () => {
    console.log('webDev');
    document.getElementById('webDev').style.visibility = 'visible';
    document.getElementById('softwareDev').style.visibility = 'hidden';
    document.getElementById('threeDev').style.visibility = 'hidden';
}) 
document.getElementById('software').addEventListener('click', () => {
    console.log('software');
    document.getElementById('softwareDev').style.visibility = 'visible';
    document.getElementById('webDev').style.visibility = 'hidden';
    document.getElementById('threeDev').style.visibility = 'hidden';
})
document.getElementById('threed').addEventListener('click', () => {
    console.log('threed');
    document.getElementById('threeDev').style.visibility = 'visible';
    document.getElementById('webDev').style.visibility = 'hidden';
    document.getElementById('softwareDev').style.visibility = 'hidden';
})  