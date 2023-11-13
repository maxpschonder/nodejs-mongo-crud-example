FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN useradd -m appuser
USER appuser

EXPOSE 3000

CMD [ "node", "app.js" ]
