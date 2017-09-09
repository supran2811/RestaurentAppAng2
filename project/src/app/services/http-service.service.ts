import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/Rx";

@Injectable()
export class HttpService{
    
    constructor(private http:Http){}
    
    save(url:string , data:any[]){
        return this.http.put(url , data);
    }

    get(url:string){
       return this.http.get(url).map(
             (response:Response) => {
                 const data  = response.json();
                 return data;
             }
       );
    }
}