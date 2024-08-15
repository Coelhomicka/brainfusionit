document.addEventListener('DOMContentLoaded', function() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    const minimizeButton = document.getElementById('minimize-chatbot');

    // Função para minimizar ou restaurar o chatbot
    minimizeButton.addEventListener('click', function() {
        if (chatbotPopup.style.height === '40px') {
            chatbotPopup.style.height = '400px'; // Altura restaurada
            chatbotPopup.style.width = '300px';  // Largura restaurada
        } else {
            chatbotPopup.style.height = '40px'; // Altura minimizada
            chatbotPopup.style.width = '300px';  // Largura minimizada
        }
    });
});
