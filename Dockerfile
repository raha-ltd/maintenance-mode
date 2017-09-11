FROM nginx:1.12.1

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY app/dist /var/www

EXPOSE 80 443

CMD "nginx -g 'daemon off;'"