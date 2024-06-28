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

        function setVal(){
            document.getElementById("r1_desc1").innerHTML = data1.height;
            document.getElementById("r1_desc2").innerHTML = data1.base_experience;
            document.getElementById("r1_desc3").innerHTML = data1.weight;
        }
        
        const data2 = await response2.json();
        var plr2 = document.getElementById("btn2");

        plr2.addEventListener('click', setVal2);

        function setVal2(){
            document.getElementById("r2_desc1").innerHTML = data2.height;
            document.getElementById("r2_desc2").innerHTML = data2.base_experience;
            document.getElementById("r2_desc3").innerHTML = data2.weight;
        }
    }
    catch (error) {
        console.log(error);
    }
}