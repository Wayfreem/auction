import { enableProdMode } from '@angular/core';

//告诉 angular 用哪个模块来启动应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  //是否关闭 angular 的开发模式  Disable Angular's development mode
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
