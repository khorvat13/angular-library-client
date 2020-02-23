import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {IconsProviderModule} from '../icons-provider.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CoreRoutingModule} from './core-routing.module';
import {LoginComponent} from './components/login/login.component';
import {AuthorizationService} from './services/authorization.service';
import {AuthorizationGuard} from './guards/authorization.guard';
import {LayoutComponent} from './components/layout/layout.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    HttpClientModule,
    IconsProviderModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthorizationService,
    AuthorizationGuard
  ],
  exports: [
    CoreRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
  ]
})
export class CoreModule { }
