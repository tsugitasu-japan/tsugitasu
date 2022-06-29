# FROM node:lts-alpine
FROM node:12.21.0-alpine3.10

# Install python/pip
# ENV PYTHONUNBUFFERED=1
# RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
# RUN python3 -m ensurepip
# RUN pip3 install --no-cache --upgrade pip setuptools

# 静的コンテンツを配信するシンプルな http サーバをインストールする
RUN npm install -g http-server

# カレントワーキングディレクトリとして 'app' フォルダを指定する
WORKDIR /app
# WORKDIR /afefwf

# `package.json` と `package-lock.json` （あれば）を両方コピーする
# package.jsonはローカルパスでカレントディレクトリにあればいい
COPY package*.json ./
RUN pwd

RUN apk update && \
  apk add --no-cache python2 make g++

# プロジェクトの依存ライブラリをインストールする
RUN npm install

# カレントワーキングディレクトリ(つまり 'app' フォルダ)にプロジェクトのファイルやフォルダをコピーする
COPY . .

# テスト用アプリケーションを立ち上げる
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]