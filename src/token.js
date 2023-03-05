window.onload = () => {
  YaSendSuggestToken("https://oauth-master-class-git-main-andrew48rus.vercel.app")
    .then(({
      handler
   }) => handler())
   .then(data => console.log('Сообщение с токеном', data))
   .catch(error => console.log('Обработка ошибки', error));
};
