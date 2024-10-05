function updateDateTime() {
    const now = new Date();
    
    // Formata a data como "2024 October 2"
    const dateOptions = { month: 'short', year: 'numeric', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    
    // Pega a hora no formato padrão
    const timeString = now.toLocaleTimeString();
    
    // Junta a data e a hora no formato desejado
    const dateTimeString = dateString + ' - ' + timeString;
    
    // Atualiza o elemento HTML com o novo valor
    document.getElementById('datetime').innerText = dateTimeString;
}

// Atualiza a cada 1000 milissegundos (1 segundo)
setInterval(updateDateTime, 1000);
updateDateTime();
