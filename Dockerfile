FROM nginx:1.12.1

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /var/www

EXPOSE 8000 8443
