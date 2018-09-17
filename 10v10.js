var team1 = [
    {   name: "unit1",
        health: 50,
        attack: 10
    },
    {   name: "unit2", 
        health: 50,
        attack: 10
    },
    {   name: "unit3",
        health: 50,
        attack: 10
    }
];

var team2 = [
    {   name: "unit1",
        health: 50,
        attack: 10
    },
    {   name: "unit2", 
        health: 50,
        attack: 10
    },
    {   name: "unit3",
        health: 50,
        attack: 10
    }
];

function render() {
    //display team 1 health
    $(".team1unit0").html(team1[0].health);
    $(".team1unit1").html(team1[1].health);
    $(".team1unit2").html(team1[2].health);
    //display team 2 health
    $(".team2unit0").html(team2[0].health);
    $(".team2unit1").html(team2[1].health);
    $(".team2unit2").html(team2[2].health);
}

render();
//fight engine
$(".fight").click(function() {
    // loop through team 1's units
    for(let i = 0; i < team1.length; i++) {
        // generate rolls for both teams
        let t1DiceRoll = Math.ceil(Math.random()*6);
        let t2DiceRoll = Math.ceil(Math.random()*6);

        // checks to makes sure both units have health
        if (team1[i].health > 0 && team2[i].health > 0) {
            // checks to see if team1 attacks, defender does not attack
            if(t1DiceRoll > t2DiceRoll) {
                // team 1 unit attacks team 2 unit
                team2[i].health = team2[i].health - team1[i].attack;
                //outputs new health for team 2
                render();
            // checks to see if team2 attacks, defender does not attack
            } else {
                // team 2 unit attacks team 1 unit
                team1[i].health = team1[i].health - team2[i].attack;
                // outputs new health for team 2
                render();
            }
        }
        
        // check if team 1 unit has health and team 2 has no health
        else if (team1[i].health > 0 && team2[i].health <= 0) {
            // find opponent that has health
            for(let b = 0; b < team2.length; b++) {
                if (team2[b].health > 0) {
                    // if team 1 roll is greater than team 2, team 1 attacks team 2
                    if(t1DiceRoll > t2DiceRoll) {
                        team2[b].health = team2[b].health - team1[i].attack;
                        // display health of team 2 unit
                        render();
                    } else {
                        team1[i].health = team1[i].health - team2[b].attack;
                        // display health of team 2 unit
                        render();
                    }
                }
            } 
        } 
        
        else if (team1[i].health <= 0  && team2[i].health > 0) {
            // find opponent that has health
            for(let c = 0; c < team1.length; c++) {
                if (team1[c].health > 0) {
                    // if team 1 roll is greater than team 2, team 1 attacks team 2
                    if(t1DiceRoll > t2DiceRoll) {
                        team1[i].health = team1[i].health - team2[c].attack;
                        // display health of team 2 unit
                        render();
                    } else {
                        team2[c].health = team2[c].health - team1[i].attack;
                        // display health of team 2 unit
                        render();
                    }
                }
            } 
        }
    }   
}); 





// if both teams have health
// if team 1 has health and team 2 does not
// if team 2 has health and team 1 does not









// if (team1[i].health > 0) {
//     for (let ii = 0; ii < team2.length; ii++) {
//         if (team2[ii].health > 0) {
//             team2[ii].health = team2[ii].health - team1[i].attack;
//             $(".team2unit" + [ii + 1]).text(team2[i].health);
//         } 
//     }
// } else {
//     team1[i].health = team1[i].health - team2[i].attack;
//     $(".team1unit" + [i]).text(team1[i].health);
// }

// if (team2[i].health > 0) {
//     for (let iii = 0; iii < team2.length; iii++) {
//         if (team1[iii].health > 0) {
//             team1[iii].health = team1[iii].health - team2[i].attack;
//             $(".team1unit" + [iii + 1]).text(team1[i].health);
//         } else {
//             team2[iii].health = team2[iii].health - team1[i].attack;
//             $(".team2unit" + [i]).text(team2[i].health);
//         }
//     }
// }