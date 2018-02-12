FROM node:9
# Create app directory
WORKDIR /app
# Install app dependencies

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install --only=production
# Bundle app source
COPY . /app
RUN npm run now-build
EXPOSE 4000
CMD [ "npm", "run", "now-start" ]
