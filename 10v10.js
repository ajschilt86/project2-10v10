var team1 = [
    {   name: "unit1",
        health: 350,
        attack: Math.ceil(Math.random()*50)
    },
    {   name: "unit2", 
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit3",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit4",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit5", 
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit6",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit7",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit8",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit9", 
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit10",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    }
];

var team2 = [
    {   name: "unit1",
        health: 350,
        attack: Math.ceil(Math.random()*50)
    },
    {   name: "unit2", 
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit3",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit4",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit5", 
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit6",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit7",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit8",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit9", 
        health: 100,
        attack: Math.ceil(Math.random()*10)
    },
    {   name: "unit10",
        health: 100,
        attack: Math.ceil(Math.random()*10)
    }
];

function render() {
    //display team 1 health
    $(".team1unit0").html(team1[0].health);
    $(".team1unit1").html(team1[1].health);
    $(".team1unit2").html(team1[2].health);
    $(".team1unit3").html(team1[3].health);
    $(".team1unit4").html(team1[4].health);
    $(".team1unit5").html(team1[5].health);
    $(".team1unit6").html(team1[6].health);
    $(".team1unit7").html(team1[7].health);
    $(".team1unit8").html(team1[8].health);
    $(".team1unit9").html(team1[9].health);
    //display team 2 health
    $(".team2unit0").html(team2[0].health);
    $(".team2unit1").html(team2[1].health);
    $(".team2unit2").html(team2[2].health);
    $(".team2unit3").html(team2[3].health);
    $(".team2unit4").html(team2[4].health);
    $(".team2unit5").html(team2[5].health);
    $(".team2unit6").html(team2[6].health);
    $(".team2unit7").html(team2[7].health);
    $(".team2unit8").html(team2[8].health);
    $(".team2unit9").html(team2[9].health);
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
                        // display health of team 1 unit
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
                    if(t2DiceRoll > t1DiceRoll) {
                        team1[c].health = team1[c].health - team2[i].attack;
                        // display health of team 1 unit
                        render();
                    } else {
                        team2[i].health = team2[i].health - team1[c].attack;
                        // display health of team 2 unit
                        render();
                    }
                }
            } 
        } 
    }   
}); 
