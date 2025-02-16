import jsonServer from "json-server"
import dotenv from "dotenv";

dotenv.config();

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
   "/api/*": "/$1",
  })
 );
server.use(router)
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})