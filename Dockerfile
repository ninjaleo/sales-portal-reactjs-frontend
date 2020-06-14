<<<<<<< HEAD
# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
=======
FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install
COPY ./ ./

ADD src /usr/src/app/src
ADD public /usr/src/app/public

EXPOSE 3000

RUN npm build

CMD [ "npm", "start" ]
>>>>>>> 52a884dacd7ef094be8f07d13d14c9a94a040b8e
