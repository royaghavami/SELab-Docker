FROM node:alpine
WORKDIR /usr
COPY package.json /usr/
#COPY package-lock.json .
RUN npm install
COPY . /usr
EXPOSE 3000
CMD ["npm", "start"]
