import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "../interfaces/stores.interface";
import { DetailsOrder, Order } from "../interfaces/order.interface";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiURL}/stores`)
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiURL}/orders`, order);
  }

  saveDetailsOrder(details: DetailsOrder): Observable<DetailsOrder> {
    return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`, details);
  }

}