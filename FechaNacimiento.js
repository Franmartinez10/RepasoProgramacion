var day = 10;
var month = "enero";
var SignoZodiaco = "";
function fechaNacimiento() {
    if ((day >= 19 && month === "abril") || (day <= 21 && month === "marzo")) {
        SignoZodiaco = "Aries";
    }
    else if ((day >= 20 && month === "abril") || (day <= 21 && month === "mayo")) {
        SignoZodiaco = "Tauro";
    }
    else if ((day >= 21 && month === "mayo") || (day <= 20 && month === "junio")) {
        SignoZodiaco = "Géminis";
    }
    else if ((day >= 21 && month === "junio") || (day <= 22 && month === "julio")) {
        SignoZodiaco = "Cáncer";
    }
    else if ((day >= 23 && month === "julio") || (day <= 22 && month === "agosto")) {
        SignoZodiaco = "Leo";
    }
    else if ((day >= 23 && month === "agosto") || (day <= 22 && month === "septiembre")) {
        SignoZodiaco = "Virgo";
    }
    else if ((day >= 23 && month === "septiembre") || (day <= 22 && month === "septiembre")) {
        SignoZodiaco = "Libra";
    }
    else if ((day >= 23 && month === "octubre") || (day <= 21 && month === "noviembre")) {
        SignoZodiaco = "Escorpio";
    }
    else if ((day >= 22 && month === "noviembre") || (day <= 21 && month === "diciembre")) {
        SignoZodiaco = "Sagitario";
    }
    else if ((day >= 22 && month === "diciembre") || (day <= 19 && month === "enero")) {
        SignoZodiaco = "Capricornio";
    }
    else if ((day >= 20 && month === "enero") || (day <= 18 && month === "febrero")) {
        SignoZodiaco = "Acuario";
    }
    else if ((day >= 19 && month === "febrero") || (day <= 20 && month === "marzo")) {
        SignoZodiaco = "Piscis";
    }
    return SignoZodiaco;
}
console.log(SignoZodiaco);
