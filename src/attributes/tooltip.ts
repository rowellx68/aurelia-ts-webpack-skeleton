import { bindable, inject } from "aurelia-framework";

@inject(Element)
export class TooltipCustomAttribute {
  constructor(private element: Element) {
  }

  @bindable options: Tippy.Options;
  
  private tip: Tippy.Instance;

  bind() {
    let options: Tippy.Options = { arrow: true, size: "big" };

    if (this.options) {
      options = this.options;
    }

    this.tip = Tippy(this.element, options);
  }

  unbind() {
    this.destroyTippyInstance();
  }

  /* istanbul ignore next */
  optionsChanged() {
    this.destroyTippyInstance();

    this.tip = Tippy(this.element, this.options);
  }

  private destroyTippyInstance() {
    if (this.tip) {
      const popper = this.tip.getPopperElement(this.element);
      this.tip.destroy(popper);
    }
  }
}
