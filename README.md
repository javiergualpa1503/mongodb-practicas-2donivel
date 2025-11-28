# mongodb-practicas-2donivel


sudo docker-compose up -d
sudo docker ps -a


sudo docker exec -it mongodb-services mongosh miEmpresa /tmp/script.js  -u "admin" -p "password123" --authenticationDatabase "admin"