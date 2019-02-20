# Building phase
FROM node:9 as builder

LABEL description="Landingpage for 'beat the traffic'"
LABEL project="lab-flightstorome"
LABEL maintainer="florian.porada@moovel.com"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production
# RUN npm audit fix

COPY . .

#Example: URL_PREFIX=/project/beatthetraffic
ARG URL_PREFIX="" 
ENV URL_PREFIX $URL_PREFIX
#Example: ROOT_URL=beatthetraffic.moovellab.com
ARG ROOT_URL=""
ENV ROOT_URL $ROOT_URL

RUN npm run now-build

# Production phase
FROM node:9

WORKDIR /usr/src/app

# Install mongodb on Debian 8 (jessie)
RUN apt-get update
# Install old package so the service config will be present in /etc/init.d/
RUN apt-get install -y mongodb
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/4.0 main" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list
RUN apt-get update
RUN apt-get install -y mongodb-org

COPY --from=builder /usr/src/app/.next /usr/src/app/.next
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/server /usr/src/app/server
COPY --from=builder /usr/src/app/out /usr/src/app/out
COPY --from=builder /usr/src/app/package.json /usr/src/app/
COPY --from=builder /usr/src/app/gameconfig.json /usr/src/app/
COPY --from=builder /usr/src/app/docker-entrypoint.sh /usr/src/app/

# Create volume for persistant data
VOLUME [ "/var/lib/mongodb" ]

EXPOSE 80

# For beat the traffic , need to specify env var at both build and runtime
#Example: /project/beatthetraffic
ARG URL_PREFIX="" 
ENV URL_PREFIX $URL_PREFIX
#Example: beatthetraffic.moovellab.com
ARG ROOT_URL=""
ENV ROOT_URL $ROOT_URL

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]

CMD [ "npm", "run", "aws-start" ]
