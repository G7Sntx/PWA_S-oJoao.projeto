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

window.addEventListener('online', statusUpdate);
window.addEventListener('offline', statusUpdate);
statusUpdate();