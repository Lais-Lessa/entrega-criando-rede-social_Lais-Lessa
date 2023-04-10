import { posts, suggestUsers } from "./database.js";
import { render } from "./render.js";
import { renderizaUsers } from "./renderizaAside.js";

renderizaUsers(suggestUsers);
render(posts); 



function modal() {
    const buttons = document.querySelectorAll(".btn-open-modal");
    const modal = document.querySelector("#modal_post");
   

    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {

            const eventoClick = e.target
            const select = eventoClick.closest(".container__individual")
            const selectId = select.dataset.id;
           
            for(let i = 0; i < posts.length; i++){
                if(selectId == posts[i].id){
                    const selectPosts = posts[i];
                    renderizaModal(selectPosts);
                };
            };
        });
    });
};

modal();

function renderizaModal(selectPosts){

    
    const containerModal = document.querySelector(".modal_post");
    console.log(containerModal)
    containerModal.innerHTML = "";

    const buttonExit = document.createElement("button")
    buttonExit.classList.add("btn__exit");
    buttonExit.textContent = "X";
    containerModal.appendChild(buttonExit);

    const containerLists = document.createElement("div");
    containerLists.classList.add("container__individual");

    const divImagem = document.createElement("div");
    divImagem.classList.add("container__identificador-post");
    const imagem = document.createElement("img");
    imagem.classList.add("imagem__posts");
    divImagem.appendChild(imagem);


    const divParagraph = document.createElement("div");
    divParagraph.classList.add("textArea__div");
    const paragraphNome = document.createElement("p");
    paragraphNome.classList.add("textArea__name");
    const paragrapgProf = document.createElement("p");
    paragrapgProf.classList.add("textArea__prof");
    divParagraph.appendChild(paragraphNome);
    divParagraph.appendChild(paragrapgProf);

    divImagem.appendChild(divParagraph);

    const divDescription = document.createElement("div");
    divDescription.classList.add("post__description")
    const tituloH3 = document.createElement("h3"); 
    tituloH3.classList.add("post__description-negrito");
    const paragraphText = document.createElement("p"); 
    paragraphText.classList.add("post__descriptio-p");
    divDescription.appendChild(tituloH3);
    divDescription.appendChild(paragraphText);


    containerLists.appendChild(divImagem);
    containerLists.appendChild(divDescription);

    
    containerLists.dataset.id = selectPosts.id;
    imagem.src = selectPosts.img;
    paragraphNome.textContent = selectPosts.user;
    paragrapgProf.textContent = selectPosts.stack;
    tituloH3.textContent = selectPosts.title;
    paragraphText.textContent = selectPosts.text;
    
    containerModal.appendChild(containerLists);
    
    containerModal.showModal();
    
    exitModal();
    
};

function exitModal(){
    const exitModal = document.querySelector(".btn__exit");
    const modal = document.querySelector(".modal_post")

    exitModal.addEventListener('click', function () {
        modal.close();

    });
};



