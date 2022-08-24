
FROM node:14.20.0-alpine

COPY * ./
RUN npm install

CMD [ "npm", "start" ]
