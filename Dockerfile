FROM zenika/alpine-chrome:with-node
WORKDIR /usr/src/app
#RUN apt-get update && apt-get install -y curl
#RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
#RUN apt-get install -y nodejs snapd
#RUN systemctl enable snapd
#RUN snap install chromium
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
RUN npm run build
ENTRYPOINT ["npm"]
