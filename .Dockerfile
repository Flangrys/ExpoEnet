# Using an official NODE image
FROM node:19-buster

# Exposing App port `80`
EXPOSE 80

# Define a workspace
WORKDIR /app

# Bundle app source
COPY . .

# Install app dependencies
# A wildcard is used to ensure both package.json AND
# package-lock.json are copied where available (npm@5+)
COPY package*.json ./

RUN npm install

CMD ["npm", "start"]