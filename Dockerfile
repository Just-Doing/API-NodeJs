FROM node:latest
MAINTAINER 969502899@qq.com
LABEL version="1.0"
EXPOSE 80 443
COPY . /home/api/v1

WORKDIR /home/api/v1
RUN npm install cross-env -g && npm install supervisor -g
RUN npm install

CMD ["npm", "run", "dev"]
