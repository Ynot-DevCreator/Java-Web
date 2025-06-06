const frm = document.querySelector("form");
const r1 = document.querySelector("h3");
const r2 = document.querySelector("h4");

frm.addEventListener("submit",(e)=>{

    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    r1.innerText = titulo;
    r2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`;
    console.log("olá");
    e.preventDefault();
});