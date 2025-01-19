FROM nginx:stable
COPY nginx.conf /etc/nginx/nginx.conf
COPY /front/build /data/www/rsk-frontend
RUN chmod -R 777 'data/www/rsk-frontend'