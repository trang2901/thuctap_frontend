# Cấu hình NGINX
```
server {
  listen      172.16.10.214:80;
  server_name cgatev2.cusc.vn www.cgatev2.cusc.vn;
  error_log  /var/log/httpd/domains/cgatev2.cusc.vn.error.log error;

  #location / {
  #    proxy_pass      http://172.16.10.214:7777;
  #    location ~* ^.+\.(jpeg|jpg|png|gif|bmp|ico|svg|tif|tiff|css|js|htm|html|ttf|otf|webp|woff|txt|csv|rtf|doc|docx|xls|xlsx|ppt|pptx|odf|odp|ods|odt|pdf|psd|ai|eot|eps|ps|zip|tar|tgz|gz|rar|bz2|7z|aac|m4a|mp3|mp4|ogg|wav|wma|3gp|avi|flv|m4v|mkv|mov|mpeg|mpg|wmv|exe|iso|dmg|swf)$ {
  #        root           /home/g2b/web/cgatev2.cusc.vn/public_html;
  #        access_log     /var/log/httpd/domains/cgatev2.cusc.vn.log combined;
  #        access_log     /var/log/httpd/domains/cgatev2.cusc.vn.bytes bytes;
  #        expires        max;
  #        try_files      $uri @fallback;
  #    }
  #}

  location / {
    # reverse proxy for next server
    proxy_pass http://172.16.10.214:7777;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;

    # we need to remove this 404 handling
    # because next's _next folder and own handling
    # try_files $uri $uri/ =404;
  }

  location /error/ {
      alias   /home/g2b/web/cgatev2.cusc.vn/document_errors/;
  }

  location @fallback {
      proxy_pass      http://172.16.10.214:8080;
  }

  location ~ /\.ht    {return 404;}
  location ~ /\.svn/  {return 404;}
  location ~ /\.git/  {return 404;}
  location ~ /\.hg/   {return 404;}
  location ~ /\.bzr/  {return 404;}

  include /home/g2b/conf/web/nginx.cgatev2.cusc.vn.conf*;
}

```
