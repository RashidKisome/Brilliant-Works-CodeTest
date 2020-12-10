import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
// import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  currentItem: any;
  constructor(private http: HttpClient) {}

  // getWinnerHeadsData() {
  //   return this.http.get(
  //     " https://api.winnerheads.com/api/marketplace/getMarketplaceByIdString/winnerheads "
  //   );
  // }

  getWinnerHeadsData() {
    return this.http
      .get(
        " https://api.winnerheads.com/api/marketplace/getMarketplaceByIdString/winnerheads "
      )
      .pipe(
        map((data: any) => {
          // map operator tar datan i vilken form den än är och låter oss returnera något annorlunda
          // console.log("Innan mapping", res);

          return data.space.content.filter((item) => {
            // returnera endast shoppingItems
            return item.shoppingItem;
          });
        })
      );
  }
}
