#!/usr/bin/env node
import debug from 'debug';

import app from './app';

debug('puppy:server');

const port = parseInt(process.env.PORT || '3000', 10);

app.set('port', port);
app.listen(port);
