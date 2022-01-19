import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class LoginService {
    
    baseUrl: string = environment.baseUrl;
    constructor(private http:HttpClient){}

    ngOnInit(): void {
    }

    loginService(user:any):Observable<any>{
// Para levantar server hay que ejecutar comando npm run start-auth
            const url:string="/auth/login";
        return this.http.post( `${this.baseUrl}${url}` ,user)
    }

    // registerService(user:any):Observable<any>{
    //     // Para levantar server hay que ejecutar comando npm run start-auth
    //                 const url:string="/auth/login";
    //             return this.http.post( `${this.baseUrl}${url}` ,user)
    //         }

    
}