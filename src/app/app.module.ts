import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddTodoPage } from '../pages/add-todo/add-todo';
import { TodoDetailPage } from '../pages/todo-detail/todo-detail';
import { Data } from '../providers/data/data';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddTodoPage,
    TodoDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddTodoPage,
    TodoDetailPage
  ],
  providers: [
    StatusBar, 
    SplashScreen, 
    Data, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
