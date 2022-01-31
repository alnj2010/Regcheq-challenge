import { Server } from './server';
import { loadConfig } from './config';
import { loadDBConnection } from './db';

export class RegcheqBackendApp {
  server?: Server;
  dbModule?: { start(): Promise<void>; close(): Promise<void> };

  async start() {
    const appConfig = loadConfig();
    this.dbModule = loadDBConnection({ dbUri: appConfig.DB_URI });
    await this.dbModule.start();

    const port = process.env.PORT || '5000';
    this.server = new Server(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    await this.dbModule?.close();
    return this.server?.stop();
  }
}
