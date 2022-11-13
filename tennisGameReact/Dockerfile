# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you want to copy, and where to put it?
COPY . /src/app

# Does your app have any dependencies that should be installed?

RUN npm install
RUN npm install jquery
RUN npm i sass
RUN npm install react-transition-group


WORKDIR /src/app/client


RUN npm install react-transition-group


RUN npm run build
RUN npm install -g serve
# What port will the container talk to the outside world with once created?
EXPOSE 80



 CMD [ "serve", "-s", "-n", "build"]