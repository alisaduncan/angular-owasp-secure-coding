import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';

export const authInterceptor:HttpInterceptorFn = 
  (req, next, authService = inject(AuthService)) => {
    const allowedOrigins = [
      'api/owaspTopTen'
    ];

    if(!!allowedOrigins.find(origin => req.url.includes(origin))) {
      const authToken = authService.getAccessToken();
      const headers = req.headers.set('Authorization', `Bearer ${authToken}`);
      req = req.clone({ headers });
    }

    return next(req);
}