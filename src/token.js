YaAuthSuggest.init({
         client_id: 'c46f0c53093440c39f12eff95a9f2f93',
         response_type: 'token',
         redirect_uri: 'https://oauth-master-class-git-main-andrew48rus.vercel.app/token.html'
      },
      'https://oauth-master-class-git-main-andrew48rus.vercel.app/'
   )
   .then(({
      handler
   }) => handler())
   .then(data => console.log('Сообщение с токеном', data))
   .catch(error => console.log('Обработка ошибки', error));
