const apiTecnologias = "tecnologias.json"
const apiProyectos = "json.json"

const containerProyect = document.getElementById("containerProyect")

const $tecnologias = document.getElementById("skillsContainer")


fetch(apiTecnologias)
 .then(response => response.json())
 .then(data =>{
    let tecnologias = data

    let template = createTemplate(tecnologias,createCardsSkills)

    CreateElementHtml($tecnologias,template)


 })
 .catch(error => console.log(error))

fetch(apiProyectos)
 .then(response => response.json())
 .then(data => {

     const proyectos = data
     let template = createTemplate(proyectos,createCardsProyecto)
 
     CreateElementHtml(containerProyect,template)
     
     

     
    const proyectCards = document.querySelectorAll(".proyect")
    console.log(proyectCards)


    console.log(proyectCards)
    proyectCards.forEach(cardProyecto =>{
        cardProyecto.addEventListener("click",() =>{

           let idProyecto = cardProyecto.id
           
          let proyectoSelected = proyectos.find( proyecto => proyecto.id == idProyecto)


            Swal.fire({
                title: "A donde vamos Maestro?",
                text: "Queres ver la pagina web o el repositorio de Git!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#0d1117",
                cancelButtonText: "Web Site",   
                cancelButtonColor: "#46b705",
                confirmButtonText: '<i class="fa-brands fa-github"> </i> Git',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                 
                    window.open(proyectoSelected.repository, '_blank');

                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel


                ) {

                    if(proyectoSelected.link == ""){
                        swal.fire({
                            title: "Error",
                            text: "Todavia no pude hostear el proyecto                                                       :)",
                            icon: "error"
                          });
                    }else{
                        window.open(proyectoSelected.link, '_blank');
                    }
                 
                }
              });

        }
        
 )

})


        }  
)
 .catch(error => console.log(error))


 function createTemplate(array,createFunction){
    let template = ""

    for(item of array){
        template += createFunction(item) 
    }

    return template
 }




 function createCardsProyecto(obj){
    let host = obj.link == "" ? "" : "<p class='hosted'>Hosted</p>"
    console.log(host)
    return`
        <div class="item proyect" id="${obj.id}">
            <img src="./images/${obj.img}" alt="">
            <div class="name">${obj.title} 
            
            ${host}</div>

        </div>
    `
 }


 function createCardsSkills (obj){

    const conicGradient = `conic-gradient(
        #00000000 0deg,
        #00000000 10deg,
        ${obj.color1} 50deg,
        #00000000 50deg,
        #00000000 100deg,
        ${obj.color2} 150deg,
        #00000000 150deg,
        #00000000 190deg,
        ${obj.color1} 240deg,
        #00000000 240deg,
        #00000000 280deg,
        ${obj.color2} 330deg,
        #00000000 330deg
    )`;

    return`
     <article class="wrapper">
                <div class="spinner" style="background:${conicGradient}"></div>
               
                <div class="tecnologia">
                    <img src="./images/${obj.img}"  class="tecnologia-icon" alt="">
                    <h4 class="tecnologia-nombre"> ${obj.title} </h4>

                </div>

      </article>
      `


 }

 function CreateElementHtml(container,template){
    container.innerHTML += template

 }



 