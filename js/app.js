if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js') 
      .then(reg => console.log('PWA São João pronto para rodar offline!', reg))
      .catch(err => console.log('Erro ao registrar PWA:', err));
  });
}
const statusUpdate = () => {
  const status = document.getElementById('status');
  if (navigator.onLine) {
    status.textContent = "✅ Online - Aproveite a festa!";
    status.style.color = "#2e7d32";
  } else {
    status.textContent = "⚠️ Offline - Conteúdo salvo no cache";
    status.style.color = "#d84315";
  }
};

window.addEventListener('online', statusUpdate);
window.addEventListener('offline', statusUpdate);
statusUpdate();