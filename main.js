
//https://www.youtube.com/watch?v=fLp65siJP2M 

//FORMULARIO
//DATOS DEL FORMULARIO
const formulario = document.getElementById('formulario__pasos');
//EXPRESIONES REGULARES
const expReg = {
    nombreExp: /^[A-Za-z]+(?:\s+[A-Za-z]+){0,2}$/,
    apellidoExp: /^[A-Za-z]+(?:\s+[A-Za-z]+)?$/,
    edadExp: /^\d{2}$/,
    direccionExp: /^[a-zA-Z0-9\s\.,#-]*$/,
    numeroExp: /^\d{9}$/,
    correoExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    sexoExp: /^(Masculino|Femenino)$/,
    dniExp: /^\d{8}$/,
    estaturaExp: /^\d+,\d{2}$/,
    usuarioExp: /^[a-zA-Z0-9_]{3,20}$/,
    passwordExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    password2Exp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
}
//BOTONES I
const i__nombre = document.querySelector(".i__nombre");
const i__apellido = document.querySelector(".i__apellido");
const i__edad = document.querySelector(".i__edad");
const i__direccion = document.querySelector(".i__direccion");
const i__numero = document.querySelector(".i__numero");
const i__correo = document.querySelector(".i__correo");
const i__sexo = document.querySelector(".i__sexo");
const i__dni = document.querySelector(".i__dni");
const i__estatura = document.querySelector(".i__estatura");
const i__usuario = document.querySelector(".i__usuario");
const i__password = document.querySelector(".i__password");
const i__password2 = document.querySelector(".i__password2");

//VALIDACION INPUTS
const validacion__nombre = document.querySelector(".input__validacion-nombre");
const validacion__apellido = document.querySelector(".input__validacion-apellido");
const validacion__edad = document.querySelector(".input__validacion-edad");
const validacion__direccion = document.querySelector(".input__validacion-direccion");
const validacion__numero = document.querySelector(".input__validacion-numero");
const validacion__correo = document.querySelector(".input__validacion-correo");
const validacion__sexo = document.querySelector(".input__validacion-sexo");
const validacion__dni = document.querySelector(".input__validacion-dni");
const validacion__estatura = document.querySelector(".input__validacion-estatura");
const validacion__usuario = document.querySelector(".input__validacion-usuario");
const validacion__password = document.querySelector(".input__validacion-password");
const validacion__password2 = document.querySelector(".input__validacion-password2");

//LABELS DATO
const label__nombre = document.querySelector(".label__nombre");
const label__apellido = document.querySelector(".label__apellido");
const label__edad = document.querySelector(".label__edad");
const label__direccion = document.querySelector(".label__direccion");
const label__numero = document.querySelector(".label__numero");
const label__correo = document.querySelector(".label__correo");
const label__sexo = document.querySelector(".label__sexo");
const label__dni = document.querySelector(".label__dni");
const label__estatura = document.querySelector(".label__estatura");
const label__usuario = document.querySelector(".label__usuario");
const label__password = document.querySelector(".label__password");
const label__password2 = document.querySelector(".label__password2");

//VARIABLES FORMULARIO PASOS
const registrarDatos = document.querySelector("#registrarDatos");

//VARIABLES PASOS
const progresBar = document.querySelectorAll(".progres__bar-option");

const nombreResp = "El nombre admite solo palabras de 1,2 o 3";
const apellidoResp = "El apellido solo admite 2 palabras separadas";
const edadResp = "El formato edad solo acepta dos numeros";
const direccionResp = "La dirección no acepta caracteres extraños";
const numeroResp = "El fomato numero solo acepta 9 numeros";
const correoeResp = "Solo se acepta un formato correo";
const sexoResp = "Solo se acepta letras con inicio Mayuscula";
const dniResp = "El formato dni acepta solo 8 numeros";
const estaturaResp = "Solo se aceptan numero , y numero";
const usuarioResp = "Acepta Mayusculas , Minusculas y numeros";
const passwrodResp = "Acepta Mayusculas , Minusculas y numeros";
const password2Resp = "Acepta Mayusculas , Minusculas y numeros";

//KEY UP DEL FOMULARIO
formulario.addEventListener("keyup", (e) => {
    switch (e.target.id) {
        case "nombre":
            validarExpresion(nombre, expReg.nombreExp, "nombre", i__nombre, validacion__nombre, label__nombre,nombreResp);
            break;
        case "apellido":
            validarExpresion(apellido, expReg.apellidoExp, "apellido", i__apellido, validacion__apellido, label__apellido,apellidoResp);
            break;
        case "edad":
            validarExpresion(edad, expReg.edadExp, "edad", i__edad, validacion__edad, label__edad,edadResp);
            break;
        case "direccion":
            validarExpresion(direccion, expReg.direccionExp, "direccion", i__direccion, validacion__direccion, label__direccion,direccionResp);
            break;
        case "numero":
            validarExpresion(numero, expReg.numeroExp, "numero", i__numero, validacion__numero, label__numero,numeroResp);
            break;
        case "correo":
            validarExpresion(correo, expReg.correoExp, "correo", i__correo, validacion__correo, label__correo,correoeResp);
            break;
        case "sexo":
            validarExpresion(sexo, expReg.sexoExp, "sexo", i__sexo, validacion__sexo, label__sexo, sexoResp);
            break;
        case "dni":
            validarExpresion(dni, expReg.dniExp, "dni", i__dni, validacion__dni, label__dni, dniResp);
            break;
        case "estatura":
            validarExpresion(estatura, expReg.estaturaExp, "estatura", i__estatura, validacion__estatura, label__estatura, estaturaResp);
            break;
        case "usuario":
            validarExpresion(usuario, expReg.usuarioExp, "usuario", i__usuario, validacion__usuario, label__usuario, usuarioResp);
            break; 
        case "password":
            validarExpresion(password, expReg.passwordExp, "password", i__password, validacion__password, label__password, passwrodResp);
            break;
        case "password2":
            validarExpresion(password2, expReg.password2Exp, "password2", i__password2, validacion__password2, label__password2, password2Resp);
            break;
    }
});
//VALIDACION DE EXPREIONES
function validarExpresion(dato, expresion, respuestaDatos, botones_i, validacion, color_label, respuestas) {
    if (dato.value === "") {
        botones_i.classList.remove("fa-circle-exclamation");
        botones_i.classList.remove("fa-circle-check");
        validacion.style.boxShadow = "none";
        color_label.style.color = "black";
        validacion.style.border = "none";
        document.getElementById(`respuesta__${respuestaDatos}`).innerHTML = "";
    } else {
        if (!expresion.test(dato.value)) {
            botones_i.classList.remove("fa-circle-check");
            botones_i.classList.add("fa-circle-exclamation");
            validacion.style.border = "3px solid #bb2929";
            validacion.style.boxShadow = "0 0 5px 0 red";
            color_label.style.color = "#bb2929";
            document.getElementById(`respuesta__${respuestaDatos}`).innerHTML = respuestas;
        } else {
            botones_i.classList.remove("fa-circle-exclamation");
            botones_i.classList.add("fa-circle-check");
            validacion.style.border = "3px solid #0075FF";
            validacion.style.boxShadow = "none";
            color_label.style.color = "black";
            document.getElementById(`respuesta__${respuestaDatos}`).innerHTML = "";
        }
    }
}
//EVENTOS SIGUIENTE Y ANTERIOR
formulario.addEventListener("click", (e) => {
    const element = e.target;
    const btn__siguiente = element.classList.contains("btn__siguiente");
    const btn__anterior = element.classList.contains("btn__anterior");
    if (btn__siguiente || btn__anterior) {
        //atributos personalizados
        let currentStep = document.getElementById('step-' + element.dataset.step);
        let jump5step = document.getElementById('step-' + element.dataset.to_step);
        currentStep.classList.remove('activa');
        jump5step.classList.add('activa');
        if (btn__siguiente) {
            currentStep.classList.add("derecha");
            progresBar[element.dataset.to_step - 1].classList.add("color__bar");
        } else {
            jump5step.classList.remove("derecha");
            progresBar[element.dataset.step - 1].classList.remove("color__bar");

        }
        currentStep.classList.add("inactivo");
        jump5step.classList.remove('inactivo');
    }
});
//EVENTO DE REGISTRO DE DATOS
registrarDatos.addEventListener("click", () => {
    console.log("hola")
});