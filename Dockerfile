# Pull base image, using Ubuntu latest
FROM ubuntu:18.04

# Install Node.js
RUN apt-get update && apt-get install --yes curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install --yes nodejs build-essential cmake bison flex

COPY . /src

#RUN cp -r /src/doc/sphinx/buildRootMod/html /src/node/doc && cp /src/images/icon_small.png /src/node/favicon.ico && \
#    cp -r /src/images /src/node/doc/images && cp -r /src/images /src/node/images  

WORKDIR /src/node

# Install app dependencies
RUN npm install --unsafe-perm

# Binds to port 3000
EXPOSE 3000

#  Defines your runtime(define default command)
# These commands unlike RUN (they are carried out in the construction of the container) are run when the container
CMD ["node", "/src/node/app.js"]
