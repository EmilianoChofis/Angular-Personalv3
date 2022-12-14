import {Injectable} from "@angular/core"
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token")
    const isLogged = !!token
    if (isLogged){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
          Accept: "application/json"
        }
      })
    }
    return next.handle(req)
  }
}
