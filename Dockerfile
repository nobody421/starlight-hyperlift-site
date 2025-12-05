FROM nginx:alpine

# Clear default HTML
RUN rm -rf /usr/share/nginx/html/*

# Copy ONLY the website files
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Fix permissions so nginx can read files (prevents 403)
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
