FROM node:12

WORKDIR /app

RUN yarn global add gatsby-cli

# COPY package.json ./

# COPY yarn.lock ./

# RUN yarn install


# COPY . ./

EXPOSE 8000