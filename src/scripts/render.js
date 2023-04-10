
export function render(posts){


    const containerMain = document.querySelector(".post__container-main");
    containerMain.innerHTML = "";

    for(let i = 0 ; i < posts.length ; i++){

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

        const divButton = document.createElement("div");
        divButton.classList.add("post__buttons");   
        const button = document.createElement("button");
        button.classList.add("btn-open-modal"); 
        const imagemheart = document.createElement("img");
        imagemheart.classList.add("imagem__coracao");
        imagemheart.src = "./src/assets/img/coracaocinza.jpeg";
        const like = document.createElement("img");
        const spanLike = document.createElement("span");
        like.classList.add("imagemDescription");
        spanLike.classList.add("span__like");

        divButton.appendChild(button);
        divButton.appendChild(like);
        divButton.appendChild(imagemheart);
        divButton.appendChild(spanLike);

        containerLists.appendChild(divImagem);
        containerLists.appendChild(divDescription);
        containerLists.appendChild(divButton);

        containerMain.appendChild(containerLists);

        containerLists.dataset.id = posts[i].id;
        spanLike.textContent = posts[i].likes;
        imagem.src = posts[i].img;
        paragraphNome.textContent = posts[i].user;
        paragrapgProf.textContent = posts[i].stack;
        tituloH3.textContent = posts[i].title;
        paragraphText.textContent = posts[i].text;
        button.textContent = "Abrir post";
      
        
        likeRed(imagemheart);
    };
    
};

function likeRed(heart){
    
    heart.addEventListener('click', function() {
        
        if(heart.id != "liked"){
            
            heart.id = "liked";
            
            heart.src = "./src/assets/img/coracaovermelho.jpeg";
         
        } else {

            heart.id = "deslike";
            
            heart.src = "./src/assets/img/coracaocinza.jpeg";
        }
    });
};

