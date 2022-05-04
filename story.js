var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// story/StoryBase.ts
var _StoryBase = class extends HTMLDivElement {
  get uID() {
    let n = this.getAttribute("is");
    if (this.id) {
      n += "#" + this.id;
    }
    return n;
  }
  trace(...args) {
    let pre = this.getAttribute("is");
    if (this.id) {
      pre += "#" + this.id;
    }
    console.log(pre, ...args);
  }
  registerEventListener(name, listener, select) {
    _StoryBase._listeners.push({
      name,
      listener,
      select
    });
  }
  registerAttribute(aName, listener, select) {
  }
  connectedCallback() {
    _StoryBase._attributes.forEach((a) => {
      const v = this.getAttribute(a.name);
      if (v) {
        this[a.key] = v;
      }
    });
    _StoryBase._listeners.forEach((l) => {
      if (l.select) {
        console.trace("unfinished, missing register", l.select);
      }
      {
        this.addEventListener(l.name, l.listener.bind(this));
      }
    });
    const pos = this.getAttribute("effect-progress") || 0;
  }
  attributeChangedCallback(name, oldValue, newValue) {
  }
};
var StoryBase = _StoryBase;
__publicField(StoryBase, "_listeners", []);
__publicField(StoryBase, "_attributes", []);
function extendElement(isName) {
  return function(target) {
    customElements.define(isName, target, { extends: "div" });
    return target;
  };
}
function handleEvent(eventName) {
  return function(target, propertyKey, descriptor) {
    if (target instanceof StoryBase) {
      target.registerEventListener(eventName, descriptor.value);
    }
    return descriptor;
  };
}
function attribute(aName) {
  return function(target, key) {
    StoryBase._attributes.push({
      name: aName,
      key
    });
  };
}

// story/StoryController.ts
var StoryController = class extends HTMLDivElement {
  setupController() {
    let p = this.parentElement;
    while (p) {
      p = p.parentElement;
    }
  }
  connectedCallback() {
    window.addEventListener("load", () => {
      this.setupController();
    });
  }
};
StoryController = __decorateClass([
  extendElement("story-controller")
], StoryController);

// story/StoryEffect.ts
var _StoryEffect = class extends StoryBase {
  stepState = "" /* Inactive */;
  refAttribute;
  stepDuration = "600";
  stepWait = "0";
  parentStep;
  childSteps = [];
  calcMS(txt) {
    let n = Number.parseInt(txt, 10);
    if (txt.match(/\d+s/)) {
      n = n * 1e3;
    }
    this.trace(txt, n);
    return n;
  }
  setState(newState) {
    this.trace(`state(${newState})`);
    const cnt = _StoryEffect._active.length;
    this.stepState = newState;
    if (newState === "init" /* Init */ || newState === "done" /* Done */) {
      _StoryEffect._active = _StoryEffect._active.filter((e) => e !== this);
    } else if (newState === "running" /* Running */) {
      const n = _StoryEffect._active.indexOf(this);
      if (n >= 0) {
        _StoryEffect._active.splice(n, 1);
      }
      _StoryEffect._active.push(this);
    } else {
      debugger;
    }
    if (cnt !== _StoryEffect._active.length) {
      let col = _StoryEffect._active.map((eff) => eff.uID).join(", ");
      console.log(`active(${col})`);
    }
  }
  stepInit() {
    this.trace("init()");
    let p = this.parentElement;
    while (p && !(p instanceof _StoryEffect)) {
      p = p.parentElement;
    }
    if (p) {
      this.parentStep = p;
      p.addStep(this);
    }
  }
  stepEnd() {
    this.trace("end()");
    if (this.stepState === "running" /* Running */) {
      this.setState("done" /* Done */);
      const p = this.parentStep;
      if (p) {
        p.storyAction("start" /* Start */);
      }
    }
  }
  storyAction(sa) {
    this.trace("action", sa);
    if (sa === "reset" /* Reset */) {
      this.setState("init" /* Init */);
      this.childSteps.sort((a, b) => {
        const p = a.compareDocumentPosition(b);
        return p & 2 ? 1 : -1;
      });
    } else if (sa === "start" /* Start */) {
      this.setState("running" /* Running */);
    } else if (sa === "stop" /* Stop */) {
      console.trace("unfinished");
      this.setState("done" /* Done */);
    } else {
      console.trace("unfinished");
    }
  }
  showEffect(p) {
  }
  addStep(e) {
    console.log("addChild", e.id, e);
    this.childSteps.push(e);
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("load", this.stepInit.bind(this));
  }
};
var StoryEffect = _StoryEffect;
__publicField(StoryEffect, "_active", []);
__decorateClass([
  attribute("ref")
], StoryEffect.prototype, "refAttribute", 2);
__decorateClass([
  attribute("dur")
], StoryEffect.prototype, "stepDuration", 2);
__decorateClass([
  attribute("wait")
], StoryEffect.prototype, "stepWait", 2);

// story/Sequence.ts
var StorySequence = class extends StoryEffect {
  _current = 0;
  connectedCallback() {
    super.connectedCallback();
  }
  storyAction(sa) {
    super.storyAction(sa);
    const stepsCount = this.childSteps.length;
    this.trace("#childs:", stepsCount);
    if (sa === "reset" /* Reset */) {
      this.childSteps.forEach((cs) => cs.storyAction("reset" /* Reset */));
      this.setState("init" /* Init */);
      this._current = 0;
    } else if (sa === "start" /* Start */) {
      if (this.stepState !== "running" /* Running */) {
        this.setState("running" /* Running */);
        this.trace("start", this._current);
      } else {
        this.trace("step", this._current);
      }
      if (this._current < stepsCount) {
        this.childSteps[this._current].storyAction("start" /* Start */);
        this._current++;
      } else {
        this.trace("done.");
        this.setState("done" /* Done */);
      }
    } else {
      console.trace("unfinished");
    }
  }
  stepInit() {
    super.stepInit();
    this.trace(this.parentStep, this.childSteps);
  }
};
__publicField(StorySequence, "_tag", document.querySelector("#p3"));
StorySequence = __decorateClass([
  extendElement("story-sequence")
], StorySequence);

// story/StoryPage.ts
var StoryPage = class extends StorySequence {
  storyAction(sa) {
    super.storyAction(sa);
  }
  connectedCallback() {
    super.connectedCallback();
    this.trace("connected-1.");
    window.setTimeout(() => {
      this.trace("connected-2.");
      new IntersectionObserver((entries, observer) => {
        entries.forEach((e) => {
          console.log(">>", this, e.target, e.intersectionRatio);
          if (e.intersectionRatio === 1) {
            this.storyAction("start" /* Start */);
          } else if (e.intersectionRatio === 0) {
            this.storyAction("reset" /* Reset */);
          }
        });
      }, {
        threshold: [0, 1]
      }).observe(this);
      this.storyAction("reset" /* Reset */);
    }, 200);
  }
};
StoryPage = __decorateClass([
  extendElement("story-page")
], StoryPage);

// story/StoryAppear.ts
var StoryAppear = class extends StoryEffect {
  showEffect(p) {
    if (p === 0) {
      this.style.visibility = "hidden";
    } else {
      this.style.visibility = "visible";
    }
  }
};
StoryAppear = __decorateClass([
  extendElement("story-appear")
], StoryAppear);

// story/CSSAnimate.ts
var StoryCssAnimate = class extends StoryEffect {
  targetStyle = "";
  transition = "";
  from_css = {};
  to_css = {};
  handleTransitionend() {
    console.log("css done...");
    this.setState("done" /* Done */);
    const p = this.parentStep;
    if (p) {
      p.storyAction("start" /* Start */);
    }
  }
  storyAction(sa) {
    super.storyAction(sa);
    if (sa === "reset" /* Reset */) {
      this.style.transition = "";
      for (const p in this.from_css) {
        this.style[p] = this.from_css[p];
      }
    } else if (sa === "start" /* Start */) {
      this.style.transition = this.transition;
      for (const p in this.to_css) {
        this.style[p] = this.to_css[p];
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    console.log(this.targetStyle);
    const ani = JSON.parse(this.targetStyle);
    if (ani.transition) {
      this.transition = ani.transition;
      delete ani.transition;
    }
    this.from_css = ani;
    this.to_css = {};
    const compStyle = window.getComputedStyle(this, null);
    for (const p in ani) {
      this.to_css[p] = compStyle.getPropertyValue(p);
    }
    this.style.transition = "";
    for (const p in this.from_css) {
      this.style[p] = this.from_css[p];
    }
  }
};
__decorateClass([
  attribute("s-style")
], StoryCssAnimate.prototype, "targetStyle", 2);
__decorateClass([
  handleEvent("transitionend")
], StoryCssAnimate.prototype, "handleTransitionend", 1);
StoryCssAnimate = __decorateClass([
  extendElement("story-css-animate")
], StoryCssAnimate);

// story/Text.ts
var StoryText = class extends StoryEffect {
  effects = "show,hide";
  effectList = [];
  duration = "4s";
  ref;
  _timer = 0;
  _elem;
  stepEnd() {
    if (this.effectList.indexOf("hide") >= 0) {
      this._elem.style.transition = "";
      this._elem.style.opacity = "0";
    } else if (this.effectList.indexOf("fade-out") >= 0) {
      this._elem.style.transition = "opacity 0.5s";
      this._elem.style.opacity = "0";
    }
    super.stepEnd();
  }
  storyAction(sa) {
    super.storyAction(sa);
    if (sa === "reset" /* Reset */) {
      this._elem.style.opacity = "0";
    } else if (sa === "start" /* Start */) {
      if (this.effectList.indexOf("show") >= 0) {
        this._elem.style.transition = "";
        this._elem.style.opacity = "1";
      } else if (this.effectList.indexOf("fade-in") >= 0) {
        this._elem.style.transition = "opacity 0.5s";
        this._elem.style.opacity = "1";
      }
      this._timer = window.setTimeout(this.stepEnd.bind(this), this.calcMS(this.duration));
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.trace(this.effects);
    this.effectList = this.effects.toLowerCase().split(",");
    this._elem = this;
    if (this.ref) {
      this._elem = document.querySelector(this.ref) || this;
    }
    this.trace("==", this._elem);
    this.storyAction("reset" /* Reset */);
  }
};
__decorateClass([
  attribute("s-effects")
], StoryText.prototype, "effects", 2);
__decorateClass([
  attribute("dur")
], StoryText.prototype, "duration", 2);
__decorateClass([
  attribute("ref")
], StoryText.prototype, "ref", 2);
StoryText = __decorateClass([
  extendElement("story-text")
], StoryText);

// story/SVGAnimate.ts
var StorySVGBase = class extends StoryEffect {
  svgNS = "http://www.w3.org/2000/svg";
  refObj;
  refPath;
  svgDocument;
  svgElem;
  animElem;
  createSVGNode(parentNode, tagName, attr, txt) {
    var n = this.svgDocument.createElementNS(this.svgNS, tagName);
    if (attr) {
      Object.getOwnPropertyNames(attr).forEach(function(p) {
        n.setAttribute(p, attr[p]);
      });
    }
    if (txt) {
      n.textContent = txt;
    }
    parentNode.appendChild(n);
    return n;
  }
  onStepEnd() {
    this.setState("done" /* Done */);
    const p = this.parentStep;
    if (p) {
      p.storyAction("start" /* Start */);
    }
  }
  onAnimateEnd() {
    if (this.stepWait) {
      window.setTimeout(this.onStepEnd.bind(this), this.calcMS(this.stepWait));
    } else {
      this.onStepEnd();
    }
  }
  storyAction(sa) {
    super.storyAction(sa);
    if (this.animElem) {
      if (sa === "reset" /* Reset */) {
        this.animElem.setAttribute("dur", "indefinite");
        this.animElem.beginElement();
      } else if (sa === "start" /* Start */) {
        this.animElem.setAttribute("dur", this.stepDuration);
        this.animElem.beginElement();
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    const r = this.refAttribute?.split(":");
    if (r) {
      this.refObj = document.querySelector(r[0]) || void 0;
      this.refPath = r[1];
    }
  }
};
var SVGAnimate = class extends StorySVGBase {
  fromAttr = "180 180 30";
  toAttr = "0 0 0";
  storyAction(sa) {
    console.log("rotate", sa);
    if (!this.svgDocument) {
      this.svgDocument = this.refObj?.contentDocument;
      this.svgElem = this.svgDocument.documentElement;
    }
    if (this.svgElem) {
      const e = this.svgElem.querySelector(this.refPath);
      if (e) {
        this.animElem?.remove();
        this.animElem = this.createSVGNode(e, "animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: this.fromAttr,
          to: this.toAttr,
          begin: "",
          dur: "",
          fill: "freeze"
        });
        if (sa === "start" /* Start */) {
          this.animElem.addEventListener("endEvent", this.onAnimateEnd.bind(this));
        }
      }
    }
    super.storyAction(sa);
  }
};
__decorateClass([
  attribute("from")
], SVGAnimate.prototype, "fromAttr", 2);
__decorateClass([
  attribute("to")
], SVGAnimate.prototype, "toAttr", 2);
SVGAnimate = __decorateClass([
  extendElement("svg-rotate")
], SVGAnimate);
var StorySVGMove = class extends StorySVGBase {
  fromAttr = "0 0";
  toAttr = "0 0";
  storyAction(sa) {
    if (!this.svgDocument) {
      this.svgDocument = this.refObj?.contentDocument;
      this.svgElem = this.svgDocument.documentElement;
    }
    if (this.svgElem) {
      const e = this.svgElem.querySelector(this.refPath);
      if (e) {
        this.animElem?.remove();
        this.animElem = this.createSVGNode(e, "animateTransform", {
          attributeName: "transform",
          type: "translate",
          from: this.fromAttr,
          to: this.toAttr,
          begin: "",
          dur: "",
          fill: "freeze"
        });
        if (sa === "start" /* Start */) {
          this.animElem.addEventListener("endEvent", this.onAnimateEnd.bind(this));
        }
      }
    }
    super.storyAction(sa);
  }
};
__decorateClass([
  attribute("from")
], StorySVGMove.prototype, "fromAttr", 2);
__decorateClass([
  attribute("to")
], StorySVGMove.prototype, "toAttr", 2);
StorySVGMove = __decorateClass([
  extendElement("story-svg-move")
], StorySVGMove);
var StorySVGShow = class extends StorySVGBase {
  storyAction(sa) {
    if (!this.svgDocument) {
      this.svgDocument = this.refObj?.contentDocument;
      this.svgElem = this.svgDocument.documentElement;
    }
    if (this.svgElem) {
      const e = this.svgElem.querySelector(this.refPath);
      if (e) {
        this.animElem?.remove();
        this.animElem = this.createSVGNode(e, "animate", {
          attributeName: "opacity",
          to: "1",
          begin: "",
          dur: "",
          fill: "freeze"
        });
        if (sa === "start" /* Start */) {
          this.animElem.addEventListener("endEvent", this.onAnimateEnd.bind(this));
        }
      }
    }
    super.storyAction(sa);
  }
};
StorySVGShow = __decorateClass([
  extendElement("story-svg-show")
], StorySVGShow);
var StorySVGHide = class extends StorySVGBase {
  storyAction(sa) {
    if (!this.svgDocument) {
      this.svgDocument = this.refObj?.contentDocument;
      this.svgElem = this.svgDocument.documentElement;
    }
    if (this.svgElem) {
      const e = this.svgElem.querySelector(this.refPath);
      if (e) {
        this.animElem?.remove();
        this.animElem = this.createSVGNode(e, "animate", {
          attributeName: "opacity",
          to: "0",
          begin: "",
          dur: "",
          fill: "freeze"
        });
        if (sa === "start" /* Start */) {
          this.animElem.addEventListener("endEvent", this.onAnimateEnd.bind(this));
        }
      }
    }
    super.storyAction(sa);
  }
};
StorySVGHide = __decorateClass([
  extendElement("story-svg-hide")
], StorySVGHide);
var StorySVGFill = class extends StorySVGBase {
  colorAttribute = "red";
  storyAction(sa) {
    if (!this.svgDocument) {
      this.svgDocument = this.refObj?.contentDocument;
      this.svgElem = this.svgDocument.documentElement;
    }
    if (this.svgElem) {
      const e = this.svgElem.querySelector(this.refPath);
      if (e) {
        this.animElem?.remove();
        this.animElem = this.createSVGNode(e, "animate", {
          attributeName: "fill",
          to: this.colorAttribute,
          begin: "",
          dur: "",
          fill: "freeze"
        });
        if (sa === "start" /* Start */) {
          this.animElem.addEventListener("endEvent", this.onAnimateEnd.bind(this));
        }
      }
    }
    super.storyAction(sa);
  }
};
__decorateClass([
  attribute("color")
], StorySVGFill.prototype, "colorAttribute", 2);
StorySVGFill = __decorateClass([
  extendElement("story-svg-fill")
], StorySVGFill);
var StorySVGText = class extends StorySVGBase {
  txtAttribute = "";
  storyAction(sa) {
    if (!this.svgDocument) {
      this.svgDocument = this.refObj?.contentDocument;
      this.svgElem = this.svgDocument.documentElement;
    }
    if (sa === "start" /* Start */ && this.svgElem) {
      const e = this.svgElem?.querySelector(this.refPath);
      if (e) {
        e.textContent = this.txtAttribute;
        this.onAnimateEnd();
      }
    }
    super.storyAction(sa);
  }
};
__decorateClass([
  attribute("txt")
], StorySVGText.prototype, "txtAttribute", 2);
StorySVGText = __decorateClass([
  extendElement("story-svg-text")
], StorySVGText);

// story/Animate.ts
function camelCase(name) {
  let ret = "";
  if (!name.includes("-")) {
    ret = name;
  } else {
    const parts = name.split("-");
    ret += parts[0].toLowerCase();
    for (let n = 1; n < parts.length; n++) {
      ret += parts[n][0].toUpperCase() + parts[n].substring(1).toLowerCase();
    }
  }
  return ret;
}
var StoryAnimate = class extends StoryEffect {
  fromFrame = "";
  toFrame = "";
  _doc;
  _elem = this;
  _animation;
  keyframes = [
    { opacity: 0, fontSize: "100%" },
    { opacity: 1 }
  ];
  _defaultOptions = { fill: "forwards" };
  createKeyFrame(f) {
    const ret = {};
    const attList = f.split(";");
    attList.forEach((a) => {
      const [key, value] = a.split(":");
      if (key && value) {
        ret[camelCase(key)] = value;
      }
    });
    return ret;
  }
  storyAction(sa) {
    super.storyAction(sa);
    if (sa === "reset" /* Reset */) {
      if (!this._animation) {
        const kf = [
          this.createKeyFrame(this.fromFrame),
          this.createKeyFrame(this.toFrame)
        ];
        const opts = Object.assign({}, this._defaultOptions, {
          duration: this.calcMS(this.stepDuration),
          endDelay: this.calcMS(this.stepWait)
        });
        this._animation = this._elem.animate(kf, opts);
        this._animation.pause();
        this._animation.addEventListener("finish", this.stepEnd.bind(this));
      } else {
        this._animation.currentTime = 0;
        this._animation.pause();
      }
    } else if (sa === "start" /* Start */) {
      this._animation?.play();
    }
  }
  stepInit() {
    super.stepInit();
  }
  connectedCallback() {
    super.connectedCallback();
    this.trace("refAttribute", this.refAttribute);
    let ra = this.refAttribute;
    if (ra) {
      this._doc = document;
      if (ra.includes(":")) {
        const d = document.querySelector(ra.split(":")[0]);
        this._doc = d?.contentDocument;
        ra = ra.split(":")[1];
      }
      this._elem = this._doc.querySelector(ra);
    }
    this.storyAction("reset" /* Reset */);
  }
};
__decorateClass([
  attribute("s-from")
], StoryAnimate.prototype, "fromFrame", 2);
__decorateClass([
  attribute("s-to")
], StoryAnimate.prototype, "toFrame", 2);
StoryAnimate = __decorateClass([
  extendElement("story-animate")
], StoryAnimate);
export {
  SVGAnimate,
  StoryAnimate,
  StoryAppear,
  StoryController,
  StoryCssAnimate,
  StoryEffect,
  StoryPage,
  StorySVGMove,
  StorySVGShow,
  StorySequence,
  StoryText
};
//# sourceMappingURL=story.js.map
