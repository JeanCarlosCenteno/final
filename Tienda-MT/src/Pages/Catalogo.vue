<template>
    <h1 class="text-mejores">LOS MEJORES REPUESTOS PARA TU MOTO</h1>
    <h1> Los Mas vistos</h1>

    <div class="container_p">
        <p>Productos Nuevos</p>
    </div>
    <div class="contenedor-main">
        <div>
            <img src="../assets/Bobina.png">
        </div>
        <div class="nuevo">
            <p>CORONA ENCENDIDO</p>
            <p class="compra"> C$ COMPRAR AHORA</p>
        </div>
    </div>

    <div class="contenedor-main">
        <div>
            <img src="../assets/Manubrio.png">
        </div>
        <div class="nuevo">
            <p>MANUBRIO PRO-TAPER</p>
            <p class="compra"> C$ COMPRAR AHORA</p>
        </div>
    </div>

    <div class="contenedor-main">
        <div>
            <img src="../assets/casco-ls2.png">
        </div>
        <div class="nuevo">
            <p>CASCO LS2 VISOR REVERSIBLE</p>
            <p class="compra"> C$ COMPRAR AHORA</p>
        </div>
    </div>

    <div class="contenedor-main">
        <div>
            <img src="../assets/Guanteletas.png">
        </div>
        <div class="nuevo">
            <p>GUANTELETAS MOTO CROSS</p>
            <p class="compra"> C$ COMPRAR AHORA</p>
        </div>
    </div>
    <div class="contenedor-main">
        <div>
            <img src="../assets/Mascareta.png">
        </div>
        <div class="nuevo">
            <p>MASCARAS MB3</p>
            <p class="compra"> C$ COMPRAR AHORA</p>
        </div>
    </div>
    <div class="contenedor-main">
        <div>
            <img src="../assets/FastFire.png">
        </div>
        <div class="nuevo">
            <p>FIRE PARTS ORIGINAL</p>
            <p class="compra"> C$ COMPRAR AHORA</p>
        </div>
    </div>
    <div class="contenedor-main">
        <div>
            <img src="../assets/cacho.png">
        </div>
        <div class="nuevo">
            <p>MANUBRIO MENSAJERA</p>
            <p class="compra"> C$ COMPRAR AHORA</p>
        </div>
    </div>
    <div class="contenedor-main">
        <div>
            <img src="../assets/llantas2.png">
        </div>
        <div class="nuevo">
            <p>LLANTAS PREDAPTOR</p>
            <p class="compra"> C$ COMPRAR AHORA</p>
        </div>
    </div>
</template>

<style>
    .text-mejores{
        margin-top: 100px;
    }
    .container_p{
        width: 100%;
        display: flex;
        font-weight: 800;
        justify-content: center;
        padding-top: 20px;
        margin-bottom: 20px;
        background-color: rgb(11, 105, 99);
    }
    div.contenedor-main{
        margin: 10px 20px;
        box-shadow: 0 4px 10px 0 rgb(7, 247, 115), 0 6px 20px 0 rgba(0,0,0.19);
        float: left;
        width: 350px;
        cursor: pointer;
    }
    div.contenedor-main img{
        width: 100%;
    }
    div.contenedor-main:hover{
        border: 5px solid rgb(128, 240, 203);
    }
    div.nuevo{
        text-align: center;
        text-shadow: 1px 1px 3px rgb(31, 171, 209);
        padding: 10px ;
    }
    div.nuevo p{
        color: rgb(13, 240, 165);
        font-weight: 600;
        border: 2px solid;
    }
    div.nuevo .compra:hover {
        color: rgb(9, 9, 9);
        background-color: white;
        font-weight: 800;
        border: 2px solid  rgb(32, 13, 240) ;
    }
</style>