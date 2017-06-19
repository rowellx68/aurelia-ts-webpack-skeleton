import { inject } from "aurelia-framework";
import { validateTrigger, ValidationController, ValidationControllerFactory, ValidationRules } from "aurelia-validation";

import { AppRouter } from "../../../routers/app-router";
import { UserService } from "../../../services/user-service";
import { appEvents, EventManager } from "../../../utilities/event-manager";
import { ValidationBootstrapFormRenderer } from "../../../utilities/validation-bootstrap-renderer";

@inject(AppRouter, EventManager, UserService, ValidationControllerFactory)
export class LoginPanelCustomElement {
  constructor(private appRouter: AppRouter, private events: EventManager, private userService: UserService, private validationFactory: ValidationControllerFactory) {
    ValidationRules
      .ensure((l: LoginPanelCustomElement) => l.username).required()
      .ensure((l: LoginPanelCustomElement) => l.password).required()
      .on(this);
    
    this.validationController = this.validationFactory.createForCurrentScope();
    this.validationController.addRenderer(new ValidationBootstrapFormRenderer());
    this.validationController.validateTrigger = validateTrigger.change;
  }

  public username: string;

  public password: string;

  private validationController: ValidationController;

  async login() {
    this.validationController.validate()
      .then(async(result) => {
        if (result.valid) {
          await this.loginUser();
        }
      });
  }

  authenticate() {
    this.appRouter.navigateToWelcome();
    this.events.publish(appEvents.app.login);
  }

  private async loginUser() {
    const loginResult = await this.userService.login(this.username, this.password);

    if (loginResult) {
      this.appRouter.navigateToWelcome();
      this.events.publish(appEvents.app.login);
    } 
  }
}
