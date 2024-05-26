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
    proyectCards.forEach(cardProyecto =>{
        cardProyecto.addEventListener("click",() =>{

           let idProyecto = cardProyecto.id
           
          let proyectoSelected = proyectos.find( proyecto => proyecto.id == idProyecto)


            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
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
                            title: "Cancelled",
                            text: "Your imaginary file is safe :)",
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


 function CreateTemplate(array){
    let template = ""

    for(item of array){
        template += createCard(item) 
    }

    return template
 }

 function createCard(obj){
    let host = obj.link == "" ? "" : "Hosted"
    console.log(host)
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



 