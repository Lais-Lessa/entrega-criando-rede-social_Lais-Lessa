
export function renderizaUsers(suggestUsers){

    const aside = document.querySelector(".aside__aside");
    const containerAside = document.querySelector(".container__aside");
    const containerCards = document.querySelector(".container__cards");
    
    for(let i = 0 ; i < suggestUsers.length ; i++){

        const divContainer = document.createElement("div");
        divContainer.classList.add("container__users");
        const divUsers = document.createElement("div");
        divUsers.classList.add("followers__card-div");
        const divImage = document.createElement("div");
        divImage.classList.add("div__cards-img");
        const imagem = document.createElement("img");
        imagem.classList.add("imagem__posts");

        divImage.appendChild(imagem);
        divUsers.appendChild(divImage);
      
        const divParagraph = document.createElement("div");
        divParagraph.classList.add("div__paragraph");
        const paragraphNome = document.createElement("p");
        paragraphNome.classList.add("followers__card-name");
        const paragrapgProf = document.createElement("p");
        paragrapgProf.classList.add("followers__card-prof");
        const button = document.createElement("button");
        button.classList.add("followers__card-button");
        button.textContent = "Seguir"
        
        
        divParagraph.appendChild(paragraphNome);
        divParagraph.appendChild(paragrapgProf);
        divUsers.appendChild(divParagraph);
        
        paragraphNome.textContent = suggestUsers[i].user;
        paragrapgProf.textContent = suggestUsers[i].stack;
        imagem.src = suggestUsers[i].img;
        

        divContainer.appendChild(divUsers);
        divContainer.appendChild(button);
        containerCards.appendChild(divContainer);
        aside.appendChild(containerCards);
        containerAside.appendChild(aside);

        botoesSeguir(button);
       

    }
}

function botoesSeguir(btn){
    const botoes = document.querySelectorAll(".followers__card-button");

        btn.addEventListener('click', function(){
           btn.classList.toggle("btn__followers");
            if(btn.textContent == "Seguir"){
              btn.textContent = "Seguindo";
            } else{
               btn.textContent = "Seguir";
            }
        }
)}
