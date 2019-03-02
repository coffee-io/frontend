FROM node:11-alpine

ENV CI true
RUN apk add zip

WORKDIR /home/node
COPY coffee/ .

CMD mkdir /tmp/artifacts \
	&& yarn \
	&& yarn test \
	&& yarn build \
	&& cd build \
	&& zip -r /tmp/artifacts/coffee.zip *
