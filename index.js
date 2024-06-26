async function getPokemon() {
    try {
        let pokemonName = document.getElementById("player1").value;
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);

        if (!response.ok) {
            throw new Error("You have selected an unavailable pokemon");
        }

        const data = await response.json();
        // console.log(data);
        // console.log(pokemonName);
        var test = document.getElementsByClassName("button");
        console.log(test);

        test[0].addEventListner('click', function () {
            document.getElementById("r1_desc1").innerHTML = data.height;
            document.getElementById("r1_desc2").innerHTML = data.abilities[base_experience];
            document.getElementById("r1_desc3").innerHTML = data.weight;
        });

        
    }
    catch (error) {
        console.log(error);
    }
}