var team1 = [
    {   name: "E-3 Sentry AWACS",
        health: 350,
        attack: Math.ceil(Math.random()*40+10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle", 
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle", 
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle", 
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "F-15 Eagle",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    }
];

var team2 = [
    {   name: "Beriev A-50 AWACS",
        health: 350,
        attack: Math.ceil(Math.random()*40+10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E", 
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E", 
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E", 
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    },
    {   name: "Su-35 Flanker-E",
        health: 100,
        attack: Math.ceil(Math.random()*10),
        defense: Math.random().toFixed(2),
        critical: Math.random()
    }
];

function render() {
    //remove negative numbers and replace them with 0
    for(let i = 0; i < team1.length; i++) {
        if (team1[i].health < 0) {
            team1[i].health = 0;
        }
    }
    
    //remove negative numbers and replace them with 0
    for(let i = 0; i < team2.length; i++) {
        if (team2[i].health < 0) {
            team2[i].health = 0;
        }
    }

    //display team 1 health
    for (let i = 0; i < team1.length; i++) {
        if(team1[i].health <= 0) {
            $(".team1unit" + i).hide();    
        }
        $(".team1unit" + i).html(team1[i].name + " | health: " + team1[i].health + " <br>(Attack: " + team1[i].attack + ")(Block: " + (team1[i].defense * 100).toFixed(0) + "%)(Crit Hit: " + (team1[i].critical * 100).toFixed(0) + "%)");
    }

    //display team 2 health
    for (let i = 0; i < team2.length; i++) {
        if(team2[i].health <= 0) {
            $(".team2unit" + i).hide();    
        }
        $(".team2unit" + i).html(team2[i].name + " | health: " + team2[i].health + " <br>(Attack: " + team2[i].attack + ")(Block: " + (team2[i].defense * 100).toFixed(0) + "%)(Crit Hit: " + (team2[i].critical * 100).toFixed(0) + "%)");
    }
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
                if (Math.random() < team2[i].defense) {
                    // team 2 defends attack
                    team2[i].health = team2[i].health - 1;
                } else {
                    if (Math.random() < team2[i].critical) {
                        // team 1 unit attacks team 2 unit with critical hit
                        team2[i].health = team2[i].health - (team1[i].attack + 25);
                    } else {
                        // team 1 unit attacks team 2 unit
                        team2[i].health = team2[i].health - team1[i].attack;
                    }
                }
                render();
            // checks to see if team2 attacks, defender does not attack
            } else {
                if (Math.random() < team1[i].defense) {
                    //team 1 defends attack
                    team1[i].health = team1[i].health - 1;
                } else {
                    if (Math.random() < team1[i].critical) {
                        //team 2 unit attacks team 1 unit with critical attack
                        team1[i].health = team1[i].health - (team2[i].attack + 25);
                    } else {
                        //team 2 unit attack team 1 unit
                        team1[i].health = team1[i].health - team2[i].attack;
                    }
                }
            }
            render();
        // check if team 1 unit has health and team 2 has no health
        } else if (team1[i].health > 0 && team2[i].health <= 0) {
            // find opponent that has health
            for(let b = 0; b < team2.length; b++) {
                if (team2[b].health > 0) {
                    // if team 1 roll is greater than team 2, team 1 attacks team 2
                    if(t1DiceRoll > t2DiceRoll) {
                        if (Math.random() < team2[i].defense) {
                            // team 2 defends attack
                            team2[i].health = team2[i].health - 1;
                        } else {
                            if (Math.random() < team2[i].critical) {
                                // team 1 unit attacks team 2 unit with critical hit
                                team2[i].health = team2[i].health - (team1[i].attack + 25);
                            } else {
                                // team 1 unit attacks team 2 unit
                                team2[i].health = team2[i].health - team1[i].attack;
                            }
                        }
                        render();
                    } else {
                        if (Math.random() < team1[i].defense) {
                            //team 1 defends attack
                            team1[i].health = team1[i].health - 1;
                        } else {
                            if (Math.random() < team1[i].critical) {
                                //team 2 unit attacks team 1 unit with critical attack
                                team1[i].health = team1[i].health - (team2[i].attack + 25);
                            } else {
                                //team 2 unit attack team 1 unit
                                team1[i].health = team1[i].health - team2[i].attack;
                            }
                        }
                    }
                    render();
                }
            }
        // check if team 2 unit has health and team 1 has no health 
        } else if (team1[i].health <= 0  && team2[i].health > 0) {
            // find opponent that has health
            for(let c = 0; c < team1.length; c++) {
                if (team1[c].health > 0) {
                    // if team 1 roll is greater than team 2, team 1 attacks team 2
                    if(t2DiceRoll > t1DiceRoll) {
                        if (Math.random() < team1[i].defense) {
                            //team 1 defends attack
                            team1[i].health = team1[i].health - 1;
                        } else {
                            if (Math.random() < team1[i].critical) {
                                //team 2 unit attacks team 1 unit with critical attack
                                team1[i].health = team1[i].health - (team2[i].attack + 25);
                            } else {
                                //team 2 unit attack team 1 unit
                                team1[i].health = team1[i].health - team2[i].attack;
                            }
                        }
                        render();
                        // display health of team 1 unit

                    } else {
                        if (Math.random() < team2[i].defense) {
                            // team 2 defends attack
                            team2[i].health = team2[i].health - 1;
                        } else {
                            if (Math.random() < team2[i].critical) {
                                // team 1 unit attacks team 2 unit with critical hit
                                team2[i].health = team2[i].health - (team1[i].attack + 25);
                            } else {
                                // team 1 unit attacks team 2 unit
                                team2[i].health = team2[i].health - team1[i].attack;
                            }
                        }
                        // display health of team 2 unit

                    }
                    render();
                }
            } 
        } 
    }   
}); 
