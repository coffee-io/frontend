FROM node:11-alpine

ENV CI true
RUN apk add zip

WORKDIR /home/node
COPY coffee/ .

CMD yarn \
	&& yarn test \
	&& yarn build \
	&& cd build \
	&& zip /tmp/coffee.zip *
