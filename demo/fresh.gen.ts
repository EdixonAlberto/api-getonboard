// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from './deno.json' assert { type: 'json' }
import * as $0 from './routes/index.tsx'
import * as $1 from './routes/profile.tsx'
import * as $$0 from './islands/Jobs.tsx'
import * as $$1 from './islands/Search.tsx'
import * as $$2 from './islands/Tabs.tsx'

const manifest = {
	routes: {
		'./routes/index.tsx': $0,
		'./routes/profile.tsx': $1,
	},
	islands: {
		'./islands/Jobs.tsx': $$0,
		'./islands/Search.tsx': $$1,
		'./islands/Tabs.tsx': $$2,
	},
	baseUrl: import.meta.url,
	config,
}

export default manifest
