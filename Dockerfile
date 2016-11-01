FROM node:argon
RUN mkdir -p /usr/src/athenaKb
WORKDIR /usr/src/athenaKb
COPY package.json /usr/src/athenaKb/
RUN npm install
COPY . /urs/src/athenaKb
EXPOSE 3003
RUN npm start
