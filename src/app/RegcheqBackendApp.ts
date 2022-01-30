import { Server } from './server';
import { loadConfig } from './config';
import { loadDBConnection } from './db';

export class RegcheqBackendApp {
  server?: Server;

  async start() {
    const appConfig = loadConfig();
    const dbModule = loadDBConnection({ dbUri: appConfig.DB_URI });
    await dbModule.start();

    const port = process.env.PORT || '5000';
    this.server = new Server(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
