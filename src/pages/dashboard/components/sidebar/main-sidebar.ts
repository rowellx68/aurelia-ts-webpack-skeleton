import { bindable } from "aurelia-framework";
import { NavModel, Router, RouterConfiguration } from "aurelia-router";

export class MainSidebar {
  @bindable router: Router;

  public navigation: NavModel[] = [];

  routerChanged() {
    // filter out navigation based on user capabilities
    if (this.router && this.router.navigation) {
      this.navigation = this.router.navigation;
    }
  }
}
