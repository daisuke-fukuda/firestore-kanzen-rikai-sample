# ベースイメージを指定
FROM node:14.4.0-alpine3.10

# node.js の環境変数を定義する
# 本番環境では production
ENV NODE_ENV=development

# 雛形を生成するのに必要なパッケージのインストール
RUN npm install -g create-nuxt-app
RUN apk update && apk add \
    python\
    make\
    g++


# ディレクトリを移動する
WORKDIR /app

# ポート3000番を開放する
EXPOSE 3000
