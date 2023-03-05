YaAuthSuggest.init({
         client_id: 'c46f0c53093440c39f12eff95a9f2f93',
         response_type: 'token',
         redirect_uri: 'https://oauth-master-class-qn0cjn08m-andrew48rus.vercel.app/token.html'
      },
      'https://oauth-master-class-qn0cjn08m-andrew48rus.vercel.app/', {
         view: 'button',
         parentId: 'container',
         buttonView: 'main',
         buttonTheme: 'light',
         buttonSize: 'm',
         buttonBorderRadius: 0
         }
   )
   .then(({
      handler
   }) => handler())
   .then(data => console.log('Сообщение с токеном', data))
   .catch(error => console.log('Обработка ошибки', error));
