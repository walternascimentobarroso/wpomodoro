#!/bin/bash
set -e # termina o script com um código diferente de 0 se alguma coisa falhar

# try fix the angular install
npm uninstall -g angular-cli
npm uninstall -g @angular/cli
npm cache verify
npm cache clean --force
npm install -g @angular/cli

# instal all dependency
npm install

# roda o script de build da nossa aplicação
ng build --prod --base-href=/wpomodoro/

# entre na pasta onde está o build do seu projeto e inicie um novo repositório git
cd dist
git init

# inside this git repo we'll pretend to be a new user
# dentro desse repositório nós pretendemos ser um novo usuário
git config user.name "Travis CI"
git config user.email "walter.nascimento.barroso@gmail.com"

# O primeiro e único commit do seu repositório terá
# todos os arquivos presentes e a mensagem do commit será "Deploy to GitHub Pages"
git add .
git commit -m "Deploy to GitHub Pages"

# Forçando o push do master para a branch gh-pages (Toda história anterior da branch
# gh-pages será perdido, pois vamos substituí-lo.)  Redirecionamos qualquer saída para
# /dev/null para ocultar quaisquer dados de credenciais sensíveis que de outra forma possam ser expostos.
# tokens GH_TOKEN e GH_REF serão fornecidos como variáveis de ambiente Travis CI
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1

# exit the script
exit 0
