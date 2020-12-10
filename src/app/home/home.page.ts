import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  items: any;
  public selectedId;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getItems();
    // // this.dataService.getWinnerHeadsData().subscribe((data) => {
    // //   this.items = data;
    // //   console.log(data, "individuell item ");
    // // });
    // console.log(this.route.snapshot.params["id"]);
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"));
      this.selectedId = id;
    });
  }

  getItems() {
    this.dataService.getWinnerHeadsData().subscribe((data) => {
      this.items = data;
      console.log(data);
    });
  }

  onGoToSingleItem(item) {
    // sets the current article in the service t the one we have clicked on
    this.dataService.currentItem = item;
    this.router.navigate(["/home/singleItem"]);
  }

  // onSelect(item) {
  //   this.router.navigate([item.shoppingItem.id], {
  //     relativeTo: this.route,
  //   });
  // }
}
