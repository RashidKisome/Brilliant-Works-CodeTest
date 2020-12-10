import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute, ParamMap } from "@angular/router";
// import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-shoppingitem-detail",
  templateUrl: "./shoppingitem-detail.component.html",
  styleUrls: ["./shoppingitem-detail.component.scss"],
})
export class ShoppingitemDetailComponent implements OnInit {
  item: any;
  // public itemId;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getWinnerHeadsData().subscribe((data) => {
    //   this.items = data;
    // });
    // console.log(this.route.snapshot.params["id"]);
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   let id = parseInt(params.get("id"));
    //   this.itemId = id;
    // });
    // let id = this.route.params["id"];
    // this.dataService.getWinnerHeadsData(id).subscribe(())
    // console.log(this.dataService.currentItem);
    this.item = this.dataService.currentItem;
    console.log(this.dataService.currentItem);
  }
}
