# build environment
FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /usr/src/app
RUN npm install
COPY ./ ./
ADD src /usr/src/app/src
ADD public /usr/src/app/public
RUN npm run build

# production environment
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
