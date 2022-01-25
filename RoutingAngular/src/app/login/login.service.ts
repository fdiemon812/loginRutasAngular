import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:"root"}
)
export class LoginService {
    
    baseUrl: string = environment.baseUrl;
    constructor(private http:HttpClient){}

    ngOnInit(): void {
    }


    estado:boolean=false;

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

    // comprobarToken():boolean{

    //     let token = localStorage.getItem('token');
    //     console.log(token)
    //     const headers = new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //       })
    //     let url = "/comprobarToken"
    //     // HAY QUE PASARLE EL TOKEN A TRAVES DEL HEADER
    //     // this.http.get(`${this.baseUrl}${url}`, {headers:headers}).subscribe(data=>{


    //     //     console.log(data);
    //     // }


    //     this.http.get(`${this.baseUrl}${url}`,{ headers: new HttpHeaders({'Authorization': 'Bearer ' + token})}).subscribe( data => {
    //         console.log(data)

            
    //     })

    //     return false;
        
    // }


     comprobarToken():boolean{
        
       
       
        let respuesta = false;
        const url = `${this.baseUrl}/comprobarToken`

        this.http.get(url, { headers: new HttpHeaders({'Authorization': 'Bearer ' + this.getToken()})}).subscribe( data => {
         
            //No consigo sacar data.estado si no lo hago de esta forma.

         if(Object.values(data)[0] == true){
             console.log("entra ")
             respuesta=true;
             this.estado=true;
             console.log("deberia estar cambiado")
             
         }
        })
        console.log("la respuesta es "+respuesta)
        
        
        return respuesta;
      }

     
      getToken():string{
          if(localStorage.getItem('token')!=null){
              
              let token:any="";
              let tokenParseado:any="";
              token = localStorage.getItem('token');
              tokenParseado= JSON.parse(token);
              
              return tokenParseado

          }else{

              return "";
          }
      }

}