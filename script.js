const api = "json.json"

const containerProyect = document.getElementById("containerProyect")

fetch(api)
 .then(response => response.json())
 .then(data => {

     const proyectos = data
     let template = CreateTemplate(proyectos)
 
     CreateElementHtml(containerProyect,template)
     

     
    const proyectCards = document.querySelectorAll(".proyect")
    console.log(proyectCards)


    console.log(proyectCards)
    proyectCards.forEach(proyecto =>{
        proyecto.addEventListener("click",() =>{
            console.log(proyecto.id )


        }
        
 )

})


        }  
)
 .catch(error => console.log(error))


 function CreateTemplate(array){
    let template = " "

    for(item of array){
        template += createCard(item) 
    }

    return template
 }

 function createCard(obj){
    return`
        <div class="item proyect" id="${obj.id}">
            <img src="./images/${obj.img}" alt="">
            <div class="name">${obj.title}</div>
        </div>
    `
 }

 function CreateElementHtml(container,template){
    container.innerHTML += template

 }



 