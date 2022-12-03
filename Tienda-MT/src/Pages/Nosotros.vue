<template>
    <div class="cont-nosotros">
        <div class="cont-img">
            <img class="img-nosotros" src="../assets/img-nosotros.jpg" alt="">
            <div>
                <h1 >¿QUIENES SOMOS?</h1>
                <p class="text-p">Somos especialistas en el mercado de repuestos para motocicletas con mas de 3 años de experiencia. Nos dedicamos a la importación y distribución de los componentes de la motocicleta (carrocería, sistema eléctrico, motor y accesorios) de excelente calidad a precios competitivos. Moto Repuestos MT fue fundada en Nueva Guinea  en el año 2019, con su enfoque en el servicio al cliente e innovación  del mercado de repuestos de motocicletas en Nicaragua.</p>
            </div>
        </div>
    </div>

    <div class="contenedor-1">
        <div class="contenedor-mision-vision">
            <span class="text-span">Mision</span>
            <h5>Somos especialistas en la venta de repuestos para motocicletas, ofremos productos de buena calidad precios competitivos, estamos comprometidos con la eficiencia en el servicio al cliente para garantizarles rapidos tiempos de entrega y brindamos soluciones a su ambiente comercial social.</h5>
        </div>
        <div class="contenedor-mision-vision">
            <span class="text-span">Vision</span>
            <h5>Ser lideres en ventas,distribuicion,calidad y servicio en el marcado de los repuestos para motocicletas ofreciendo calidad al precio mas competitivo, con un alto compromiso y responsabilidad empresarial.</h5>
        </div>
    </div>


</template>

<style>
    .cont-nosotros{
        max-width: 100%;
        min-height: 400px;
        padding-top: 150px;
    }
    .cont-img{
        display: flex;
        padding-left: 20px;
    }
    .img-nosotros{
        width: 300px;
        height: 300px;
        border-radius: 20px;
        box-shadow: 2px 2px 25px rgb(5, 45, 250);
    }
    .text-p{
        font-size: 20px;
        color: rgb(22, 91, 242);
        font-family:Georgia, 'Times New Roman', Times, serif;
        margin-left: 50px;
    }
    .contenedor-1{
        width: 100%;
        display: flex;
        justify-content:space-around;
        margin-top: 25px;

    }
    .contenedor-mision-vision{
        width: 300px;
        height: 300px;
        border-radius: 10px;
        border: 3px solid rgb(241, 70, 54);
    }
    .text-span{
        display: flex;
        justify-content: center;
        font-size: 24px;
        color: rgb(200, 13, 13);
        font-weight: 700;
        border-radius: 4.2px;
        background-color: rgb(23, 7, 93);
    }
    h5{
        font-size: 20px;
        color: rgb(244, 243, 248);
        font-family: 'Times New Roman', Times, serif;
    }
</style>