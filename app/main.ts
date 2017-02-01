import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app.module'

// No need to run in every component
platformBrowserDynamic().bootstrapModule(AppModule)