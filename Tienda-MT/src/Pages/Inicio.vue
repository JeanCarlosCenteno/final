<template>
    <div class="class-nav">
        <div 
            class="container">
        </div>
    </div>
    <div class="container-inicial">
        <div class="container-img">
            <div class="wrapper">
                <img src="../assets/logo-oumurs.png">
                <img src="../assets/motores.png">
                <img src="../assets/piston.png">
                <img src="../assets/moto2.png">
            </div>
        </div>
        <div class="container-img">
            <div class="wrapper">
                <img src="../assets/LOGO-PISTON.png">
                <img src="../assets/repuestos.png">
                <img src="../assets/moto1.png">
                <img src="../assets/motor.png">
            </div>
        </div>

    </div>

    <div class="class-accesorios">
    <div class="parrafo-accesorios">
        <p>Los Mejores Accesorios Para Tu Moto</p>
    </div>
    </div>
    <div class="container-inicial">
        <div class="contenedor-imagenes">
            <div class="wrapper">
                <img src="../assets/casco-ls2.png">
                <img src="../assets/cascoverde.png">
                <img src="../assets/casco1.png">
                <img src="../assets/casco2.png">
            </div>
        </div>
        <div class="contenedor-imagenes">
            <div class="wrapper">
                <img src="../assets/Puño.png">
                <img src="../assets/Guardafangos.png">
                <img src="../assets/bateria.png">
                <img src="../assets/llantas.png">
            </div>
        </div>
        <div class="contenedor-imagenes">
            <div class="wrapper">
                <img src="../assets/bolso.png">
                <img src="../assets/culata.png">
                <img src="../assets/Prensa.png">
                <img src="../assets/Escape.png">
            </div>
        </div>
        <div class="contenedor-imagenes">
            <div class="wrapper">
                <img src="../assets/Bobina.png">
                <img src="../assets/Fricciones.png">
                <img src="../assets/Neumatico.png">
                <img src="../assets/varios.png">
            </div>
        </div>
    </div>
    <div>
        <h1>DICIEMBRE LLENO DE MUCHAS SORPRESAS</h1>
        <h1>SOLO EN  MOTO REPUESTO MT</h1>
        <h1> CON LAS MEJORES PROMOCIONES PARA TI</h1>
    </div>
    <div 
        class="container-footer">
    </div>
    <footer>
    <a href="">Mas Informacion</a>
    <a href="">Acerca de</a>
    <a href="">Redes Sociales</a>
</footer>
</template>

<style>
    body{
    margin: 0;
    padding: 0;
    background: url(../assets/Imagenfondo.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 180px;
    background-attachment: fixed;
    }
    .class-nav{
        width: 100%;
        margin-top: 100px;
    }
    .container{
        height: 500px;
        min-width: 900px;
        background: url(../assets/Biker.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size:contain;

    }
    .container-inicial{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
        padding-top: 100px;
        padding-bottom: 40px; 
    }
    .container-img{
        width: 290px;
        max-width: 900px;
        margin-bottom: 10px;
        border: 3px solid rgb(10, 10, 10);
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 2px 2px 25px rgb(5, 101, 245);
        cursor: pointer;
    }
    .wrapper{
        width: 100%;
        display: flex;
        animation: slide 8s infinite linear;
    }
    img{
        width: 100%;
    }
    @keyframes slide{
        0%  { transform: translateX(0); }
        25% { transform: translateX(0); }
        30% { transform: translateX(-100%); }
        50% { transform: translateX(-100%); }
        55% { transform: translateX(-200%); }
        75% { transform: translateX(-200%); }
        80% { transform: translateX(-300%); }
        100% { transform: translateX(-300%); }
    }
    .class-accesorios{
        padding-top: 40px;
        display: flex;
        width: 100%; 
    }
    .parrafo-accesorios{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 40px;
        margin-bottom: 20px;
        border: 2px solid rgb(0, 0, 0);
        background-color: rgb(6, 22, 88);
    }
    .contenedor-imagenes{
        width: 310px;
        max-width: 900px;
        margin-bottom: 10px;
        border: 4px solid rgb(10, 10, 10);
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 4px 4px 30px rgb(5, 101, 245);
        background: url(../assets/mtlogo.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size:contain;
        cursor: pointer;
    }
    h1{
        color: rgb(252, 18, 18);
        text-shadow: 1px 2px 2px black, 0 0 25px blue, 0 0 5px blue;
        text-align: center;
        padding-bottom: 20px;
    }
    .container-footer{
        height: 500px;
        min-width: 900px;
        background: url(../assets/filter-banner.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size:contain;
    }
    footer{
    width: 100%;
    height: 200px;
    margin-top: 20px;
    background-color: #ec2424ff;
    }
    footer a{
        color: black;
        display: flex;
        padding-top: 18px;
        font-size: 24px;
        justify-content: space-around;
        cursor: pointer;
    }
</style>