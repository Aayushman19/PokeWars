async function getPokemon() {
    try {
        let pokemonName1 = document.getElementById("player1").value;
        const response1 = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName1);

        let pokemonName2 = document.getElementById("player2").value;
        const response2 = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName2);

        if (!response1.ok || !response2.ok) {
            throw new Error("You have selected an unavailable pokemon");
        }

        const data1 = await response1.json();
        var plr1 = document.getElementById("btn1");

        plr1.addEventListener('click', setVal);

        function setVal() {
            document.getElementById("r1_desc1").innerHTML = data1.height;
            document.getElementById("r1_desc2").innerHTML = data1.base_experience;
            document.getElementById("r1_desc3").innerHTML = data1.weight;
            document.getElementById("pk1").setAttribute("src", data1.sprites.front_default);
        }

        const data2 = await response2.json();
        var plr2 = document.getElementById("btn2");

        plr2.addEventListener('click', setVal2);

        function setVal2() {
            document.getElementById("r2_desc1").innerHTML = data2.height;
            document.getElementById("r2_desc2").innerHTML = data2.base_experience;
            document.getElementById("r2_desc3").innerHTML = data2.weight;
            document.getElementById("pk2").setAttribute("src", data2.sprites.front_default);
        }
    }
    catch (error) {
        console.log(error);
    }
}

function fight() {

    var points1 = 0;
    var points2 = 0;

    //Select Ability to compare for player 1
    let p1_abil1 = document.getElementById("r1_desc1").innerText;
    let p1_abil2 = document.getElementById("r1_desc2").innerText;
    let p1_abil3 = document.getElementById("r1_desc3").innerText;

    //Select Ability to compare for player 2
    let p2_abil1 = document.getElementById("r2_desc1").innerText;
    let p2_abil2 = document.getElementById("r2_desc2").innerText;
    let p2_abil3 = document.getElementById("r2_desc3").innerText;

    if (p1_abil1 > p2_abil1) {
        points1++;
    }
    else {
        points2++;
    }
    if (p1_abil2 > p2_abil2) {
        points1++;
    }
    else {
        points2++;
    }
    if (p1_abil3 > p2_abil3) {
        points1++;
    } else {
        points2++;
    }

    console.log(points1);
    console.log(points2);

    var ans = document.getElementById("result");
    if (points1 > points2) {
        ans.innerText = "Player1 Wins";
    } else if (points2 > points1) {
        ans.innerText = "Player2 Wins"
    }
}