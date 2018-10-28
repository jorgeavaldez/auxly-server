FROM mhart/alpine-node:10

WORKDIR /code

# ENV XXX

COPY package.json .
RUN yarn install

COPY .babelrc .
COPY .eslintrc.json .
COPY config/ ./config/

COPY index.js .
# we need tests b
# COPY __tests__/ ./__tests__/
COPY src/ ./src/
