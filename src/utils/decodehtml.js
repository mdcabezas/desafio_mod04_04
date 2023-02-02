
export function decodeHTML(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function cleanString(string) {
    let lowerString = string.toLowerCase();
    return lowerString
        .replace("á", "a")
        .replace("é", "e")
        .replace("í", "i")
        .replace("ó", "o")
        .replace("ú", "u")
}

export function statusColor(status) {
    switch (status) {
        case "bueno":
            return "success"
        case "regular":
            return "info"
        case "alerta":
            return "warning"
        case "preemergencia":
            return "danger"
        case "emergencia":
            return "danger"
        case "no disponible":
            return "secondary"
        default:
            return "primary"
    }
}