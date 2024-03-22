const btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", () => {
    const user = document.getElementById("username").value;
    if (user == "") {
        alert("Escribe un nombre de usuario valido");
        return;
    }
    document.cookie = `username=${user}`;
    document.location.href = "/";
});