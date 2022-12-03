<template>
    <h1 class="text-sucursales">Sucursal</h1>

    <div class="container-sucursal">
        <img class="img" src="..//assets/local.jpeg" alt="">
        <img class="img" src="..//assets/local2.jpeg" alt="">
    </div>

    <div class="contenedor-textos">
        <h1>NUEVA GUINEA</h1>
        <p class="parrafo">Zona #6 Costado norte del cementerio central  en los portones amarillo</p>
        <p  class="parrafo"> +505 5856-3326</p>
    </div>
    <div class="Text_p">
        <p>Contamos con los mejores productos para tu motocicleta</p>

        <div class="contenedor--img">
            <img class="img" src="..//assets/MT.jpeg" alt="">
            <img class="img" src="..//assets/Tienda.jpeg" alt="">
        </div>
    </div>  

    <div class="formulario">
        <form>
            <label for="">Register</label>

            <input type="text" placeholder="Nombre Y Apellido">
                
            <input type="text" placeholder="Correo Electronico">

            <input type="number" placeholder="Nùmero Telèfonico">

            <button type="submit">Enviar</button>
        </form> 
    </div> 

    <div class="div-redes">
        <div class="link_redes_sociales">
            <div>
                <img src="../assets/Face.jpg" alt="" width="40px" style="border-radius:15px;">
                <img src="../assets/linkedn.png" alt="" width="40px" style="border-radius:15px;">
                <img src="../assets/Twitter.jpg" alt="" width="40px" style="border-radius:15px;">
                <img src="../assets/Insta.jpg" alt="" width="40px" style="border-radius:15px;">
            
            </div>
            <select class="box_idioma">
                <option value="">English - En</option>
                <option value="">Spanish - Es</option>
            </select>
                        
        </div>
    </div>
</template>

<style>
    .text-sucursales{
        margin-top: 100px;
    }
    .container-sucursal{
        display: flex;
        justify-content: space-around;
        min-width: 100%;
        max-height: 500px;
        padding-top: 100px;
    }
    .img{
        width: 350px;
        height: 350px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 20px;
        box-shadow: 2px 2px 25px #4b2cb4f7 ;
    }
    .contenedor-textos{
        width: 100%;
        height: 200px;
        padding-top: 20px;
    }
    .parrafo{
        display: flex;
        justify-content: center;
        color: rgb(245, 251, 250);
    }
    .Text_p{
    width: 100%;
    min-height: 300px;
    }
    p{
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
        font-style:italic;
        font-size: 20px;
        font-weight:700;
        color: rgb(251, 245, 246);
    }
    .contenedor--img{
        max-width: 100%;
        min-height: 500px;
        display: flex;
        justify-content: space-around;
    } 
    .formulario{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    }
    form{
        width: 300px;
        height: 400px;
        margin: 50px auto;
        box-shadow: 0 0 45px rgb(30, 73, 191) ;
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
    }
    label{
        width: 100%;
        text-align: center;
        padding-top: 20px;
        font-size: 40px;
        color: rgb(7, 210, 250);
        font-weight: 900;
        font-family: cursive;
    }
    input{
        margin: 20px auto;

        width: 80%;
        height: 30px;
        background-color: #fcfeff;
        border-radius: 12px;
        display: flex;
        font-size: 18px;
        padding: 10px 10px 10px 10px;
        border: none;
    }
    button{
        color: rgb(5, 57, 148);
        font-family:Arial, Helvetica, sans-serif;
        background: linear-gradient(to top left, #057dde,#00ef63 95%);
        border: 0;
        display: block;
        width: 80%;
        margin: 10px auto;
        height: 30px;
        border-radius: 12px;
        font-size: 18px;
        cursor: pointer;
    }
    .div-redes{
        width: 100%;
        display: flex;
        margin-top: 20px;
        padding-bottom: 20px;
    }
    .link_redes_sociales{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .link_redes_sociales div{
        width: 100%;
        display: flex;
        padding-right: 20px;
        justify-content:end;
    }
    .link_redes_sociales div img{
        cursor: pointer;
        box-shadow: 2px 2px 10px 4px blue;
        width: 50px;
    }
    .link_redes_sociales .box_idioma{
        width: 200px;
        height: 30px;
        margin-left: 20px;
        border: 2px solid rgb(50, 38, 223);
    }
</style>