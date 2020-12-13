FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN cd client/
RUN yarn instal
RUN yarn build
RUN cd ..
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn","service.js"]
