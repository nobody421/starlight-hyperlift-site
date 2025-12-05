FROM nginx:alpine

# Clear default HTML
RUN rm -rf /usr/share/nginx/html/*

# Copy your static website
COPY . /usr/share/nginx/html

# Copy custom nginx config that listens on port 8080
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
