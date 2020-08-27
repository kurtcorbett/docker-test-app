FROM node:14.8.0-buster as base_build

WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install

CMD ["npm", "run", "start"]
