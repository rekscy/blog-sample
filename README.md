# Tx Mini blog
###### Author: Tiago Almeida

## Project setup
Setup your environment if needed (optional):
 - Install Docker in your computer if you don't have it => https://docs.docker.com/docker-for-windows/install/
 - Install Docker compose if you don't have it => https://docs.docker.com/compose/install/ 
 
 Clone the project and then run:
 - Open a terminal in the project root folder  
 - Run: docker-compose up --build
 - Wait until the servers are running, then you can visit: 
 
 ---
 
 - Client can be found at:  http://localhost:3000/
 - Api can be found at: http://localhost:4000
 - Api specification can be found at: http://localhost:4000/api-spec

## Remarks
 - The database is restored every time we launch the server
 - Methods to create and update comments are implemented in backend but not in the client
 - The data flow has been kept simple in purpose, in a true project I would have treated aspects like rich content rendering, pictures, xss injection prevention, and this kind of things 
 - For a more clean project structure each project has his own DockerFile and then I put them together, with docker-compose, I hope this solution is not a problem

## Assumptions
 - I tried to document correctly the backend, but put less effort on the client, it was on purpose for a matter of time 
 - The tests I have made, show only general approach, I have not tried to do a full coverage of the code
    ######Full / partial Tested Client components
    - blog-post-list
    - loader
    - blog-post-list
        
    ######Tested Backend components
    - almost all the code is covered by the tests
        
 
 - While error management can still be improved, I have implemented the base of the system
 - The client only handle http codes that are coded in the backend 
