import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    //Get request
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


async function getPokemon (){
    try{
        const pokemonName = document.getElementById("p1").value.toLowerCase;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("You have selected an unavailable pokemon");
        }

        const data = await response.json();
        // get a random stat to compare
        document.getElementsByTagName(r1_desc).innerHTML = data.height;
        const stat2 = data.abilities[base_experience]
        const stat3 = data.weight

    } catch(error){
        console.log(error);
    }
}