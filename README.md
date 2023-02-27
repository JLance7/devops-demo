# Todo app with devops tools
## Tools used:
- docker & docker-compose 
- jenkins
- terraform 
- node.js/react UI
- node.js/express server
- mongodb & mongo-express
---

## For local development:

**To start app run:**  
```
  cd todo-app
  docker compose up
```
- React UI at: [http://localhost:3000]   
- Node.js server at: [http://localhost:2000]   
- View db at: [http://localhost:1001] 

**To stop app run:**    
```
  cd todo-app
  docker compose down
```
# collapsible
<details>
  <summary>Click me!</summary>
  
  hi  
  hello
</details>
---

## For deployment
Commit changes to repo  
Jenkins pipeline will run and deploy code 