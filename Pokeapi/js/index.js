/*let _main = document.querySelector('#contenedor') 

_main.addEventListener('click', pokemon); 


function pokemon(){
    fetch("http://pokeapi.co/api/v2/pokemon/3")
    .then((resp)=>resp.json())
    .then((res)=>{
        _main.innerHTML=`
            <h2>${res.name}</h2>
            <img src='${res.sprites.front_shiny}' width='300px'></img>
            <div>
                <h3>Estadisticas:</h3>
                <div>
                    <span>${res.stats[0].stat.name} : </span>
                    <span>${res.stats[0].base_stat}</span>
                </div>
                
                <p>Fuerza : ${res.stats[1].base_stat}</p>
                <p>Resistencia : ${res.stats[2].base_stat}</p>
                <p>Velocidad : ${res.stats[3].base_stat}</p>
                <p>Inteligencia : ${res.stats[4].base_stat}</p>
                <p>Poder elemental : ${res.stats[5].base_stat}</p>
            </div>
        `;
        console.log(res);
    })
}
*/
let buton=document.getElementById('button')

buton.addEventListener('click',()=>{
    let caja=document.getElementById('caja').value
    let img=document.getElementById('img')
    let p=document.getElementById('info')
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`)
    xhttp.send()

    xhttp.onreadystatechange=function () {
        if(this.readyState==4 && this.status==200)
        {
        let datoPokemon=JSON.parse( this.responseText)
        console.log(datoPokemon)
        img.setAttribute("src",datoPokemon.sprites.front_default)
        p.textContent=datoPokemon.name
        }
    }

})