

document.addEventListener('DOMContentLoaded', function() {
    const initialText = 'Выберите категорию, чтобы увидеть подробности'; // Исходный текст
    updateHiddenText(initialText); // Обновляем содержимое hidden-text при загрузке страницы
  });
  
  function updateHiddenText(text) {
    const hiddenTextElement = document.getElementById('hidden-text');
    hiddenTextElement.textContent = text;
  }
  
  function hide_elem(hoverDIV, text) {
    const hoverElement = document.getElementById(hoverDIV);
  
    hoverElement.addEventListener('mouseover', function() {
      updateHiddenText(text);
      document.getElementById('hidden-text').style.opacity = '1';
    });
  
    hoverElement.addEventListener('mouseout', function() {
      document.getElementById('hidden-text').style.opacity = '0';
    });
  }
  
  hide_elem('hover-job', 'Сейчас я учусь в МАИ по направлению "Бизнес-информатика". А также, параллельно учусь в школе 21 (Сбер/ecole 42), там я получил кучу навыков в управлении Linux, Web-разработке, прошел интенсив по Python Data-Science и многое другое, подробнее о моих навыках в моем резюме (ссылка снизу).');
  
  hide_elem('hover-pers', 'Очень люблю смотреть фильмы и в целом разбираюсь в правилах кинематографа. Путешествую, хотелось бы побывать по миру, но пока только по России. Играю в D&D. По выходным люблю сходить куда-нибудь или просто покататься на велосипеде по городу.');
  
// showHiddenContent('hover-job', 'hidden-job');
// showHiddenContent('hover-pers', 'hidden-pers');