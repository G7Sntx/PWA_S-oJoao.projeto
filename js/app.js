if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js', { scope: '/' }) // ✅ escopo explícito
      .then(reg => console.log('PWA São João pronto para rodar offline!', reg))
      .catch(err => console.log('Erro ao registrar PWA:', err));
  });
}

const statusUpdate = () => {
  if (navigator.onLine) {
    console.log("Status: Online - Aproveite a festa!");
  } else {
    console.log("Status: Offline - Navegando via Cache do PWA");
  }
};
// countdown para o evento

  const dataDoEvento = new Date("2026-06-15T20:00:00").getTime();

  const atualizador = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataDoEvento - agora;
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
    document.getElementById("horas").innerText = horas.toString().padStart(2, '0');

    if (distancia < 0) {
      clearInterval(atualizador);
      document.getElementById("contador").innerHTML = "O evento começou!";
    }
    
  }, 1000);


window.addEventListener('online', statusUpdate);
window.addEventListener('offline', statusUpdate);
statusUpdate();