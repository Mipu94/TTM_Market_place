FROM node:18-alpine
# RUN echo 8.8.8.8 >> /etc/resolv.conf
RUN apk add -U tzdata
RUN apk update && apk add openssl
ENV TZ=Asia/Ho_Chi_Minh
RUN cp /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime
RUN npm install -g pm2

WORKDIR /usr/src/app
# CMD [ "npm", "run", "dev" ]
