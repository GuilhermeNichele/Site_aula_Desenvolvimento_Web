document.addEventListener("DOMContentLoaded", function() {
   // Função para carregar as imagens de uma pasta numerada
    function carregarImagens(pasta, containerId, sContainer) {
        console.log(containerId);
        const container = document.getElementById(containerId);
        console.log(container);
        container.innerHTML = ''; // Limpa o container
        for (let i = 1; i <= 2; i++) { // Ajuste o valor '10' para o número máximo de imagens em cada pasta
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            const img = new Image();
            img.src =  `C:/Users/lucas/OneDrive/Área de Trabalho/Desenvolvimento Web/Site_aula_Desenvolvimento_Web/src/images/${pasta}/${i}.jpg`;
            console.log(img);
            slide.appendChild(img);
            container.appendChild(slide);
        }

        // Inicializar o swiper para o contêiner específico
        new Swiper(`#${sContainer}`, {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // Carrega as imagens das pastas
    carregarImagens(1, 'imageContainer1', 'swiperContainer1');
    carregarImagens(2, 'imageContainer2', 'swiperContainer2');
        
});

