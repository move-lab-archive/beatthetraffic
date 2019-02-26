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

COPY --from=builder /usr/src/app/.next /usr/src/app/.next
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/server /usr/src/app/server
COPY --from=builder /usr/src/app/out /usr/src/app/out
COPY --from=builder /usr/src/app/package.json /usr/src/app/
COPY --from=builder /usr/src/app/gameconfig.json /usr/src/app/
COPY --from=builder /usr/src/app/docker-entrypoint.sh /usr/src/app/

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
