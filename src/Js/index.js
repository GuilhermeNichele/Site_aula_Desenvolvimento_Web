document.addEventListener("DOMContentLoaded", function() {
    var uriLocalImages = "C:/Users/guilh/OneDrive/Área de Trabalho/Site_aula_Desenvolvimento_Web/src/images/";
    var finalUriImages = ".jpg";
    var count = 30;
    var listImages = document.getElementById("main-list");

    while(count > 0){
        
        console.log("carregando imagens");
        var liImage = document.createElement("li");
        liImage.setAttribute("id", "img-products"+count);

        var imgImage = document.createElement("img");
        imgImage.setAttribute("src", uriLocalImages+count+finalUriImages);
        imgImage.setAttribute("alt", "Carregando...");

        liImage.appendChild(imgImage); // Correção desta linha

        listImages.appendChild(liImage);
    
        
        count-=1;
    }
});

