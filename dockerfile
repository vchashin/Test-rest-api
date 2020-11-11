from node:12.18.3
WORKDIR ./src/app/
COPY ./src/app/
EXPOSE 3000
CMD [ "node", "main.ts" ]