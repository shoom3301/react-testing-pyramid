import {PORT} from './config';
import {quotesRoutes} from './routes/quotes.routes';
import {runServer} from './utils/server.utils';

runServer(PORT, quotesRoutes);
