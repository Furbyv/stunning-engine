import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { ChartCardComponent } from './features/chat/chat-card/chat-card.component';
import { FormsModule } from '@angular/forms';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';
import { GrpcCoreModule } from '@ngx-grpc/core';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, ChartCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: 'https://localhost:7092' }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
