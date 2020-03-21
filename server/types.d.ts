declare
import { Server, Application } from 'socket.io'

interface ExpressServer {
  _app: Application,
  _server: Server
}
