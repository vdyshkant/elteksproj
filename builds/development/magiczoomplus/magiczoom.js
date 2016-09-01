window.MagicZoom = function() {
  /**
   * @param {string} b
   * @return {?}
   */
  function write(b) {
    var rtn;
    var bi;
    /** @type {string} */
    rtn = "";
    /** @type {number} */
    bi = 0;
    for (;bi < b.length;bi++) {
      rtn += String.fromCharCode(14 ^ b.charCodeAt(bi));
    }
    return rtn;
  }
  /**
   * @param {?} obj
   * @return {?}
   */
  function addClass(obj) {
    /** @type {Array} */
    var $current_el = [];
    /** @type {null} */
    var p = null;
    if (obj && (p = $(obj))) {
      $current_el = results.filter(function(el) {
        return el.placeholder === p;
      });
    }
    return $current_el.length ? $current_el[0] : null;
  }
  /**
   * @param {number} margin
   * @return {?}
   */
  function getPosition(margin) {
    var winSize = $(window).jGetSize();
    var scrollCoord = $(window).jGetScroll();
    margin = margin || 0;
    return{
      left : margin,
      right : winSize.width - margin,
      top : margin,
      bottom : winSize.height - margin,
      x : scrollCoord.x,
      y : scrollCoord.y
    };
  }
  /**
   * @param {Object} event
   * @return {?}
   */
  function callback(event) {
    return event.pointerType && ("touch" === event.pointerType || event.pointerType === event.MSPOINTER_TYPE_TOUCH) || /touch/i.test(event.type);
  }
  /**
   * @param {Event} event
   * @return {?}
   */
  function onTouchStart(event) {
    return event.pointerType ? ("touch" === event.pointerType || event.MSPOINTER_TYPE_TOUCH === event.pointerType) && event.isPrimary : 1 === event.changedTouches.length && (event.targetTouches.length ? event.targetTouches[0].identifier == event.changedTouches[0].identifier : true);
  }
  /**
   * @return {undefined}
   */
  function invoke() {
    var args = self.$A(arguments);
    var j = args.shift();
    var codeSegments = normalized[j];
    if (codeSegments) {
      /** @type {number} */
      var i = 0;
      for (;i < codeSegments.length;i++) {
        codeSegments[i].apply(null, args);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function process() {
    var element = arguments[0];
    var value;
    var src;
    /** @type {Array} */
    var exts = [];
    try {
      do {
        src = element.tagName;
        if (/^[A-Za-z]*$/.test(src)) {
          if (value = element.getAttribute("id")) {
            if (/^[A-Za-z][-A-Za-z0-9_]*/.test(value)) {
              src += "#" + value;
            }
          }
          exts.push(src);
        }
        element = element.parentNode;
      } while (element && element !== document.documentElement);
      exts = exts.reverse();
      self.addCSS(exts.join(" ") + "> .mz-figure > img", {
        width : "100% !important;"
      }, "mz-runtime-css", true);
    } catch (I) {
    }
  }
  /**
   * @return {?}
   */
  function initialize() {
    /** @type {null} */
    var cz = null;
    /** @type {null} */
    var scrollIntervalId = null;
    /**
     * @return {undefined}
     */
    var fn = function() {
      window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
      window.dispatchEvent(new Event("resize"));
    };
    /** @type {number} */
    scrollIntervalId = setInterval(function() {
      /** @type {boolean} */
      var result = window.orientation == 90 || window.orientation == -90;
      /** @type {number} */
      var i = window.innerHeight;
      /** @type {number} */
      var l = (result ? screen.availWidth : screen.availHeight) * 0.85;
      if ((cz == null || cz == false) && (result && i < l || !result && i < l)) {
        /** @type {boolean} */
        cz = true;
        fn();
      } else {
        if ((cz == null || cz == true) && (result && i > l || !result && i > l)) {
          /** @type {boolean} */
          cz = false;
          fn();
        }
      }
    }, 250);
    return scrollIntervalId;
  }
  /**
   * @return {undefined}
   */
  function addRule() {
    self.addCSS(".magic-hidden-wrapper, .magic-temporary-img", {
      display : "block !important",
      "min-height" : "0 !important",
      "min-width" : "0 !important",
      "max-height" : "none !important",
      "max-width" : "none !important",
      width : "10px !important",
      height : "10px !important",
      position : "absolute !important",
      top : "-10000px !important",
      left : "0 !important",
      overflow : "hidden !important",
      "-webkit-transform" : "none !important",
      transform : "none !important",
      "-webkit-transition" : "none !important",
      transition : "none !important"
    }, "magiczoom-reset-css");
    self.addCSS(".magic-temporary-img img", {
      display : "inline-block !important",
      border : "0 !important",
      padding : "0 !important",
      "min-height" : "0 !important",
      "min-width" : "0 !important",
      "max-height" : "none !important",
      "max-width" : "none !important",
      "-webkit-transform" : "none !important",
      transform : "none !important",
      "-webkit-transition" : "none !important",
      transition : "none !important"
    }, "magiczoom-reset-css");
    if (self.jBrowser.androidBrowser) {
      self.addCSS(".mobile-magic .mz-expand .mz-expand-bg", {
        display : "none !important"
      }, "magiczoom-reset-css");
    }
    if (self.jBrowser.androidBrowser && ("chrome" !== self.jBrowser.uaName || 44 == self.jBrowser.uaVersion)) {
      self.addCSS(".mobile-magic .mz-zoom-window.mz-magnifier, .mobile-magic .mz-zoom-window.mz-magnifier:before", {
        "border-radius" : "0 !important"
      }, "magiczoom-reset-css");
    }
  }
  var Zepto;
  var self;
  Zepto = self = function() {
    /**
     * @param {string} prop
     * @return {?}
     */
    function prefix(prop) {
      var uc_prop = prop.charAt(0).toUpperCase() + prop.slice(1);
      return prop in object || ("Webkit" + uc_prop in object || ("Moz" + uc_prop in object || ("ms" + uc_prop in object || "O" + uc_prop in object)));
    }
    /**
     * @param {string} prop
     * @return {?}
     */
    function constructor(prop) {
      var propertyName;
      var X;
      /** @type {boolean} */
      X = $.jBrowser.webkit && "filter" == prop ? false : prop in object;
      if (!X) {
        propertyName = $.jBrowser.cssDomPrefix + prop.charAt(0).toUpperCase() + prop.slice(1);
        if (propertyName in object) {
          return propertyName;
        }
      }
      return prop;
    }
    var b = {
      version : "v3.3-b3-8-g4bc9bfe",
      UUID : 0,
      storage : {},
      /**
       * @param {Object} activeXObj
       * @return {?}
       */
      $uuid : function(activeXObj) {
        return activeXObj.$J_UUID || (activeXObj.$J_UUID = ++$.UUID);
      },
      /**
       * @param {?} key
       * @return {?}
       */
      getStorage : function(key) {
        return $.storage[key] || ($.storage[key] = {});
      },
      /**
       * @return {undefined}
       */
      $F : function() {
      },
      /**
       * @return {?}
       */
      $false : function() {
        return false;
      },
      /**
       * @return {?}
       */
      $true : function() {
        return true;
      },
      stylesId : "mjs-" + Math.floor(Math.random() * (new Date).getTime()),
      /**
       * @param {Object} obj
       * @return {?}
       */
      defined : function(obj) {
        return undefined != obj;
      },
      /**
       * @param {string} max
       * @param {string} opt_attributes
       * @return {?}
       */
      ifndef : function(max, opt_attributes) {
        return undefined != max ? max : opt_attributes;
      },
      /**
       * @param {number} keepData
       * @return {?}
       */
      exists : function(keepData) {
        return!!keepData;
      },
      /**
       * @param {Object} obj
       * @return {?}
       */
      jTypeOf : function(obj) {
        if (!$.defined(obj)) {
          return false;
        }
        if (obj.$J_TYPE) {
          return obj.$J_TYPE;
        }
        if (!!obj.nodeType) {
          if (1 == obj.nodeType) {
            return "element";
          }
          if (3 == obj.nodeType) {
            return "textnode";
          }
        }
        if (obj.length && obj.item) {
          return "collection";
        }
        if (obj.length && obj.callee) {
          return "arguments";
        }
        if ((obj instanceof window.Object || obj instanceof window.Function) && obj.constructor === $.Class) {
          return "class";
        }
        if (obj instanceof window.Array) {
          return "array";
        }
        if (obj instanceof window.Function) {
          return "function";
        }
        if (obj instanceof window.String) {
          return "string";
        }
        if ($.jBrowser.trident) {
          if ($.defined(obj.cancelBubble)) {
            return "event";
          }
        } else {
          if (obj === window.event || (obj.constructor == window.Event || (obj.constructor == window.MouseEvent || (obj.constructor == window.UIEvent || (obj.constructor == window.KeyboardEvent || obj.constructor == window.KeyEvent))))) {
            return "event";
          }
        }
        if (obj instanceof window.Date) {
          return "date";
        }
        if (obj instanceof window.RegExp) {
          return "regexp";
        }
        if (obj === window) {
          return "window";
        }
        if (obj === document) {
          return "document";
        }
        return typeof obj;
      },
      /**
       * @param {Object} obj
       * @param {?} opt_attributes
       * @return {?}
       */
      extend : function(obj, opt_attributes) {
        if (!(obj instanceof window.Array)) {
          /** @type {Array} */
          obj = [obj];
        }
        if (!opt_attributes) {
          return obj[0];
        }
        /** @type {number} */
        var i = 0;
        var l = obj.length;
        for (;i < l;i++) {
          if (!$.defined(obj)) {
            continue;
          }
          var ii;
          for (ii in opt_attributes) {
            if (!Object.prototype.hasOwnProperty.call(opt_attributes, ii)) {
              continue;
            }
            try {
              obj[i][ii] = opt_attributes[ii];
            } catch (W) {
            }
          }
        }
        return obj[0];
      },
      /**
       * @param {(Array|string)} props
       * @param {Object} extended
       * @return {?}
       */
      implement : function(props, extended) {
        if (!(props instanceof window.Array)) {
          /** @type {Array} */
          props = [props];
        }
        /** @type {number} */
        var j = 0;
        var l2 = props.length;
        for (;j < l2;j++) {
          if (!$.defined(props[j])) {
            continue;
          }
          if (!props[j].prototype) {
            continue;
          }
          var key;
          for (key in extended || {}) {
            if (!props[j].prototype[key]) {
              props[j].prototype[key] = extended[key];
            }
          }
        }
        return props[0];
      },
      /**
       * @param {Object} original
       * @param {Object} extended
       * @return {?}
       */
      nativize : function(original, extended) {
        if (!$.defined(original)) {
          return original;
        }
        var key;
        for (key in extended || {}) {
          if (!original[key]) {
            original[key] = extended[key];
          }
        }
        return original;
      },
      /**
       * @return {?}
       */
      $try : function() {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var argLength = arguments.length;
        for (;i < argLength;i++) {
          try {
            return arguments[i]();
          } catch (Y) {
          }
        }
        return null;
      },
      /**
       * @param {Object} obj
       * @return {?}
       */
      $A : function(obj) {
        if (!$.defined(obj)) {
          return $.$([]);
        }
        if (obj.toArray) {
          return $.$(obj.toArray());
        }
        if (obj.item) {
          var x = obj.length || 0;
          /** @type {Array} */
          var target = new Array(x);
          for (;x--;) {
            target[x] = obj[x];
          }
          return $.$(target);
        }
        return $.$(Array.prototype.slice.call(obj));
      },
      /**
       * @return {?}
       */
      now : function() {
        return(new Date).getTime();
      },
      /**
       * @param {Object} obj
       * @return {?}
       */
      detach : function(obj) {
        var funcs;
        switch($.jTypeOf(obj)) {
          case "object":
            funcs = {};
            var i;
            for (i in obj) {
              funcs[i] = $.detach(obj[i]);
            }
            break;
          case "array":
            /** @type {Array} */
            funcs = [];
            /** @type {number} */
            var n = 0;
            var ol = obj.length;
            for (;n < ol;n++) {
              funcs[n] = $.detach(obj[n]);
            }
            break;
          default:
            return obj;
        }
        return $.$(funcs);
      },
      /**
       * @param {Object} obj
       * @return {?}
       */
      $ : function(obj) {
        /** @type {boolean} */
        var W = true;
        if (!$.defined(obj)) {
          return null;
        }
        if (obj.$J_EXT) {
          return obj;
        }
        switch($.jTypeOf(obj)) {
          case "array":
            obj = $.nativize(obj, $.extend($.Array, {
              /** @type {function (): undefined} */
              $J_EXT : $.$F
            }));
            obj.jEach = obj.forEach;
            return obj;
            break;
          case "string":
            /** @type {(HTMLElement|null)} */
            var result = document.getElementById(obj);
            if ($.defined(result)) {
              return $.$(result);
            }
            return null;
            break;
          case "window":
          ;
          case "document":
            $.$uuid(obj);
            obj = $.extend(obj, $.Doc);
            break;
          case "element":
            $.$uuid(obj);
            obj = $.extend(obj, $.Element);
            break;
          case "event":
            obj = $.extend(obj, $.Event);
            break;
          case "textnode":
          ;
          case "function":
          ;
          case "array":
          ;
          case "date":
          ;
          default:
            /** @type {boolean} */
            W = false;
            break;
        }
        if (W) {
          return $.extend(obj, {
            /** @type {function (): undefined} */
            $J_EXT : $.$F
          });
        } else {
          return obj;
        }
      },
      /**
       * @param {string} tag
       * @param {?} opt_attributes
       * @param {?} expectedNumberOfNonCommentArgs
       * @return {?}
       */
      $new : function(tag, opt_attributes, expectedNumberOfNonCommentArgs) {
        return $.$($.doc.createElement(tag)).setProps(opt_attributes || {}).jSetCss(expectedNumberOfNonCommentArgs || {});
      },
      /**
       * @param {string} selector
       * @param {Object} rules
       * @param {string} id
       * @return {?}
       */
      addCSS : function(selector, rules, id) {
        var tmp;
        var sheet;
        var declaration;
        /** @type {Array} */
        var tagNameArr = [];
        /** @type {number} */
        var node = -1;
        if (!id) {
          /** @type {string} */
          id = $.stylesId;
        }
        tmp = $.$(id) || $.$new("style", {
          id : id,
          type : "text/css"
        }).jAppendTo(document.head || document.body, "top");
        sheet = tmp.sheet || tmp.styleSheet;
        if ("string" != $.jTypeOf(rules)) {
          for (declaration in rules) {
            tagNameArr.push(declaration + ":" + rules[declaration]);
          }
          /** @type {string} */
          rules = tagNameArr.join(";");
        }
        if (sheet.insertRule) {
          node = sheet.insertRule(selector + " {" + rules + "}", sheet.cssRules.length);
        } else {
          node = sheet.addRule(selector, rules);
        }
        return node;
      },
      /**
       * @param {Object} result
       * @param {?} i
       * @return {undefined}
       */
      removeCSS : function(result, i) {
        var tmp;
        var sheet;
        tmp = $.$(result);
        if ("element" !== $.jTypeOf(tmp)) {
          return;
        }
        sheet = tmp.sheet || tmp.styleSheet;
        if (sheet.deleteRule) {
          sheet.deleteRule(i);
        } else {
          if (sheet.removeRule) {
            sheet.removeRule(i);
          }
        }
      },
      /**
       * @return {?}
       */
      generateUUID : function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          /** @type {number} */
          var r = Math.random() * 16 | 0;
          /** @type {number} */
          var v = c == "x" ? r : r & 3 | 8;
          return v.toString(16);
        }).toUpperCase();
      },
      getAbsoluteURL : function() {
        var anchor;
        return function(id) {
          if (!anchor) {
            /** @type {Element} */
            anchor = document.createElement("a");
          }
          anchor.setAttribute("href", id);
          return("!!" + anchor.href).replace("!!", "");
        };
      }(),
      /**
       * @param {string} a
       * @return {?}
       */
      getHashCode : function(a) {
        /** @type {number} */
        var d = 0;
        var aLength = a.length;
        /** @type {number} */
        var i = 0;
        for (;i < aLength;++i) {
          d = 31 * d + a.charCodeAt(i);
          d %= 4294967296;
        }
        return d;
      }
    };
    var $ = b;
    /** @type {function (Object): ?} */
    var bCtor = b.$;
    if (!window.magicJS) {
      window.magicJS = b;
      /** @type {function (Object): ?} */
      window.$mjs = b.$;
    }
    $.Array = {
      $J_TYPE : "array",
      /**
       * @param {string} obj
       * @param {number} from
       * @return {?}
       */
      indexOf : function(obj, from) {
        var l = this.length;
        var length = this.length;
        var i = from < 0 ? Math.max(0, length + from) : from || 0;
        for (;i < length;i++) {
          if (this[i] === obj) {
            return i;
          }
        }
        return-1;
      },
      /**
       * @param {string} o
       * @param {number} from
       * @return {?}
       */
      contains : function(o, from) {
        return this.indexOf(o, from) != -1;
      },
      /**
       * @param {Function} block
       * @param {?} thisObject
       * @return {undefined}
       */
      forEach : function(block, thisObject) {
        /** @type {number} */
        var i = 0;
        var l = this.length;
        for (;i < l;i++) {
          if (i in this) {
            block.call(thisObject, this[i], i, this);
          }
        }
      },
      /**
       * @param {Function} fn
       * @param {?} bind
       * @return {?}
       */
      filter : function(fn, bind) {
        /** @type {Array} */
        var data = [];
        /** @type {number} */
        var i = 0;
        var l = this.length;
        for (;i < l;i++) {
          if (i in this) {
            var seg = this[i];
            if (fn.call(bind, this[i], i, this)) {
              data.push(seg);
            }
          }
        }
        return data;
      },
      /**
       * @param {Function} f
       * @param {?} opt_obj
       * @return {?}
       */
      map : function(f, opt_obj) {
        /** @type {Array} */
        var res = [];
        /** @type {number} */
        var key = 0;
        var l = this.length;
        for (;key < l;key++) {
          if (key in this) {
            res[key] = f.call(opt_obj, this[key], key, this);
          }
        }
        return res;
      }
    };
    $.implement(String, {
      $J_TYPE : "string",
      /**
       * @return {?}
       */
      jTrim : function() {
        return this.replace(/^\s+|\s+$/g, "");
      },
      /**
       * @param {Object} match
       * @param {boolean} elem
       * @return {?}
       */
      eq : function(match, elem) {
        return elem || false ? this.toString() === match.toString() : this.toLowerCase().toString() === match.toLowerCase().toString();
      },
      /**
       * @return {?}
       */
      jCamelize : function() {
        return this.replace(/-\D/g, function(charsetPart) {
          return charsetPart.charAt(1).toUpperCase();
        });
      },
      /**
       * @return {?}
       */
      dashize : function() {
        return this.replace(/[A-Z]/g, function(charsetPart) {
          return "-" + charsetPart.charAt(0).toLowerCase();
        });
      },
      /**
       * @param {number} base
       * @return {?}
       */
      jToInt : function(base) {
        return parseInt(this, base || 10);
      },
      /**
       * @return {?}
       */
      toFloat : function() {
        return parseFloat(this);
      },
      /**
       * @return {?}
       */
      jToBool : function() {
        return!this.replace(/true/i, "").jTrim();
      },
      /**
       * @param {string} target
       * @param {string} separator
       * @return {?}
       */
      has : function(target, separator) {
        separator = separator || "";
        return(separator + this + separator).indexOf(separator + target + separator) > -1;
      }
    });
    b.implement(Function, {
      $J_TYPE : "function",
      /**
       * @return {?}
       */
      jBind : function() {
        var args = $.$A(arguments);
        var fn = this;
        var context = args.shift();
        return function() {
          return fn.apply(context || null, args.concat($.$A(arguments)));
        };
      },
      /**
       * @return {?}
       */
      jBindAsEvent : function() {
        var args = $.$A(arguments);
        var fn = this;
        var context = args.shift();
        return function(dataAndEvents) {
          return fn.apply(context || null, $.$([dataAndEvents || ($.jBrowser.ieMode ? window.event : null)]).concat(args));
        };
      },
      /**
       * @return {?}
       */
      jDelay : function() {
        var args = $.$A(arguments);
        var __method = this;
        var delay = args.shift();
        return window.setTimeout(function() {
          return __method.apply(__method, args);
        }, delay || 0);
      },
      /**
       * @return {?}
       */
      jDefer : function() {
        var args = $.$A(arguments);
        var newArgs = this;
        return function() {
          return newArgs.jDelay.apply(newArgs, args);
        };
      },
      /**
       * @return {?}
       */
      interval : function() {
        var args = $.$A(arguments);
        var __method = this;
        var inInterval = args.shift();
        return window.setInterval(function() {
          return __method.apply(__method, args);
        }, inInterval || 0);
      }
    });
    var _touchEventLookup = {};
    /** @type {string} */
    var segment = navigator.userAgent.toLowerCase();
    /** @type {(Array.<string>|null)} */
    var parts = segment.match(/(webkit|gecko|trident|presto)\/(\d+\.?\d*)/i);
    /** @type {(Array.<string>|null)} */
    var match = segment.match(/(edge|opr)\/(\d+\.?\d*)/i) || segment.match(/(crios|chrome|safari|firefox|opera|opr)\/(\d+\.?\d*)/i);
    /** @type {(Array.<string>|null)} */
    var matches = segment.match(/version\/(\d+\.?\d*)/i);
    /** @type {(CSSStyleDeclaration|null)} */
    var object = document.documentElement.style;
    $.jBrowser = {
      features : {
        xpath : !!document.evaluate,
        air : !!window.runtime,
        query : !!document.querySelector,
        fullScreen : !!(document.fullscreenEnabled || (document.msFullscreenEnabled || (document.exitFullscreen || (document.cancelFullScreen || (document.webkitexitFullscreen || (document.webkitCancelFullScreen || (document.mozCancelFullScreen || (document.oCancelFullScreen || document.msCancelFullScreen)))))))),
        xhr2 : !!window.ProgressEvent && (!!window.FormData && (window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest)),
        transition : prefix("transition"),
        transform : prefix("transform"),
        perspective : prefix("perspective"),
        animation : prefix("animation"),
        requestAnimationFrame : false,
        multibackground : false,
        cssFilters : false,
        svg : function() {
          return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        }()
      },
      touchScreen : function() {
        return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
      }(),
      mobile : segment.match(/(android|bb\d+|meego).+|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(jBrowser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/) ? true : false,
      engine : parts && parts[1] ? parts[1].toLowerCase() : window.opera ? "presto" : !!window.ActiveXObject ? "trident" : undefined !== document.getBoxObjectFor || null != window.mozInnerScreenY ? "gecko" : null !== window.WebKitPoint || !navigator.taintEnabled ? "webkit" : "unknown",
      version : parts && parts[2] ? parseFloat(parts[2]) : 0,
      uaName : match && match[1] ? match[1].toLowerCase() : "",
      uaVersion : match && match[2] ? parseFloat(match[2]) : 0,
      cssPrefix : "",
      cssDomPrefix : "",
      domPrefix : "",
      ieMode : 0,
      platform : segment.match(/ip(?:ad|od|hone)/) ? "ios" : (segment.match(/(?:webos|android)/) || (navigator.platform.match(/mac|win|linux/i) || ["other"]))[0].toLowerCase(),
      backCompat : document.compatMode && "backcompat" == document.compatMode.toLowerCase(),
      scrollbarsWidth : 0,
      /**
       * @return {?}
       */
      getDoc : function() {
        return document.compatMode && "backcompat" == document.compatMode.toLowerCase() ? document.body : document.documentElement;
      },
      /** @type {function (this:Window, function (number): ?, (Element|null)=): number} */
      requestAnimationFrame : window.requestAnimationFrame || (window.mozRequestAnimationFrame || (window.webkitRequestAnimationFrame || (window.oRequestAnimationFrame || (window.msRequestAnimationFrame || undefined)))),
      /** @type {function (this:Window, number): ?} */
      cancelAnimationFrame : window.cancelAnimationFrame || (window.mozCancelAnimationFrame || (window.mozCancelAnimationFrame || (window.oCancelAnimationFrame || (window.msCancelAnimationFrame || (window.webkitCancelRequestAnimationFrame || undefined))))),
      ready : false,
      /**
       * @return {undefined}
       */
      onready : function() {
        if ($.jBrowser.ready) {
          return;
        }
        var container;
        var style;
        /** @type {boolean} */
        $.jBrowser.ready = true;
        $.body = $.$(document.body);
        $.win = $.$(window);
        try {
          var testNode = $.$new("div").jSetCss({
            width : 100,
            height : 100,
            overflow : "scroll",
            position : "absolute",
            top : -9999
          }).jAppendTo(document.body);
          /** @type {number} */
          $.jBrowser.scrollbarsWidth = testNode.offsetWidth - testNode.clientWidth;
          testNode.jRemove();
        } catch (W) {
        }
        try {
          container = $.$new("div");
          style = container.style;
          /** @type {string} */
          style.cssText = "background:url(https://),url(https://),red url(https://)";
          /** @type {boolean} */
          $.jBrowser.features.multibackground = /(url\s*\(.*?){3}/.test(style.background);
          /** @type {null} */
          style = null;
          /** @type {null} */
          container = null;
        } catch (W) {
        }
        if (!$.jBrowser.cssTransformProp) {
          $.jBrowser.cssTransformProp = $.normalizeCSS("transform").dashize();
        }
        try {
          container = $.$new("div");
          container.style.cssText = $.normalizeCSS("filter").dashize() + ":blur(2px);";
          /** @type {boolean} */
          $.jBrowser.features.cssFilters = !!container.style.length && (!$.jBrowser.ieMode || $.jBrowser.ieMode > 9);
          /** @type {null} */
          container = null;
        } catch (W) {
        }
        if (!$.jBrowser.features.cssFilters) {
          $.$(document.documentElement).jAddClass("no-cssfilters-magic");
        }
        if (undefined === window.TransitionEvent && undefined !== window.WebKitTransitionEvent) {
          /** @type {string} */
          _touchEventLookup.transitionend = "webkitTransitionEnd";
        }
        $.Doc.jCallEvent.call($.$(document), "domready");
      }
    };
    (function() {
      /**
       * @return {?}
       */
      function appendChild() {
        return!!arguments.callee.caller;
      }
      /** @type {Array} */
      var additionalWhereSqls = [];
      var cssPrefix;
      var ver;
      var a;
      switch($.jBrowser.engine) {
        case "trident":
          if (!$.jBrowser.version) {
            /** @type {number} */
            $.jBrowser.version = !!window.XMLHttpRequest ? 3 : 2;
          }
          break;
        case "gecko":
          /** @type {number} */
          $.jBrowser.version = match && match[2] ? parseFloat(match[2]) : 0;
          break;
      }
      /** @type {boolean} */
      $.jBrowser[$.jBrowser.engine] = true;
      if (match && "crios" === match[1]) {
        /** @type {string} */
        $.jBrowser.uaName = "chrome";
      }
      if (!!window.chrome) {
        /** @type {boolean} */
        $.jBrowser.chrome = true;
      }
      if (match && "opr" === match[1]) {
        /** @type {string} */
        $.jBrowser.uaName = "opera";
        /** @type {boolean} */
        $.jBrowser.opera = true;
      }
      if ("safari" === $.jBrowser.uaName && (matches && matches[1])) {
        /** @type {number} */
        $.jBrowser.uaVersion = parseFloat(matches[1]);
      }
      if ("android" == $.jBrowser.platform && ($.jBrowser.webkit && (matches && matches[1]))) {
        /** @type {boolean} */
        $.jBrowser.androidBrowser = true;
      }
      cssPrefix = {
        gecko : ["-moz-", "Moz", "moz"],
        webkit : ["-webkit-", "Webkit", "webkit"],
        trident : ["-ms-", "ms", "ms"],
        presto : ["-o-", "O", "o"]
      }[$.jBrowser.engine] || ["", "", ""];
      $.jBrowser.cssPrefix = cssPrefix[0];
      $.jBrowser.cssDomPrefix = cssPrefix[1];
      $.jBrowser.domPrefix = cssPrefix[2];
      $.jBrowser.ieMode = !$.jBrowser.trident ? undefined : document.documentMode ? document.documentMode : function() {
        /** @type {number} */
        var ab = 0;
        if ($.jBrowser.backCompat) {
          return 5;
        }
        switch($.jBrowser.version) {
          case 2:
            /** @type {number} */
            ab = 6;
            break;
          case 3:
            /** @type {number} */
            ab = 7;
            break;
        }
        return ab;
      }();
      additionalWhereSqls.push($.jBrowser.platform + "-magic");
      if ($.jBrowser.mobile) {
        additionalWhereSqls.push("mobile-magic");
      }
      if ($.jBrowser.androidBrowser) {
        additionalWhereSqls.push("android-jBrowser-magic");
      }
      if ($.jBrowser.ieMode) {
        /** @type {string} */
        $.jBrowser.uaName = "ie";
        $.jBrowser.uaVersion = $.jBrowser.ieMode;
        additionalWhereSqls.push("ie" + $.jBrowser.ieMode + "-magic");
        /** @type {number} */
        ver = 11;
        for (;ver > $.jBrowser.ieMode;ver--) {
          additionalWhereSqls.push("lt-ie" + ver + "-magic");
        }
      }
      if ($.jBrowser.webkit && $.jBrowser.version < 536) {
        /** @type {boolean} */
        $.jBrowser.features.fullScreen = false;
      }
      if ($.jBrowser.requestAnimationFrame) {
        $.jBrowser.requestAnimationFrame.call(window, function() {
          /** @type {boolean} */
          $.jBrowser.features.requestAnimationFrame = true;
        });
      }
      if ($.jBrowser.features.svg) {
        additionalWhereSqls.push("svg-magic");
      } else {
        additionalWhereSqls.push("no-svg-magic");
      }
      /** @type {Array} */
      a = (document.documentElement.className || "").match(/\S+/g) || [];
      document.documentElement.className = $.$(a).concat(additionalWhereSqls).join(" ");
      if ($.jBrowser.ieMode && $.jBrowser.ieMode < 9) {
        document.createElement("figure");
        document.createElement("figcaption");
      }
    })();
    (function() {
      $.jBrowser.fullScreen = {
        capable : $.jBrowser.features.fullScreen,
        /**
         * @return {?}
         */
        enabled : function() {
          return!!(document.fullscreenElement || (document[$.jBrowser.domPrefix + "FullscreenElement"] || (document.fullScreen || (document.webkitIsFullScreen || document[$.jBrowser.domPrefix + "FullScreen"]))));
        },
        /**
         * @param {Element} el
         * @param {Object} options
         * @return {undefined}
         */
        request : function(el, options) {
          if (!options) {
            options = {};
          }
          if (this.capable) {
            $.$(document).jAddEvent(this.changeEventName, this.onchange = function(dataAndEvents) {
              if (this.enabled()) {
                if (options.onEnter) {
                  options.onEnter();
                }
              } else {
                $.$(document).jRemoveEvent(this.changeEventName, this.onchange);
                if (options.onExit) {
                  options.onExit();
                }
              }
            }.jBindAsEvent(this));
            $.$(document).jAddEvent(this.errorEventName, this.onerror = function(dataAndEvents) {
              if (options.fallback) {
                options.fallback();
              }
              $.$(document).jRemoveEvent(this.errorEventName, this.onerror);
            }.jBindAsEvent(this));
            (el[$.jBrowser.domPrefix + "RequestFullscreen"] || (el[$.jBrowser.domPrefix + "RequestFullScreen"] || (el.requestFullscreen || function() {
            }))).call(el);
          } else {
            if (options.fallback) {
              options.fallback();
            }
          }
        },
        cancel : (document.exitFullscreen || (document.cancelFullScreen || (document[$.jBrowser.domPrefix + "ExitFullscreen"] || (document[$.jBrowser.domPrefix + "CancelFullScreen"] || function() {
        })))).jBind(document),
        changeEventName : document.msExitFullscreen ? "MSFullscreenChange" : (document.exitFullscreen ? "" : $.jBrowser.domPrefix) + "fullscreenchange",
        errorEventName : document.msExitFullscreen ? "MSFullscreenError" : (document.exitFullscreen ? "" : $.jBrowser.domPrefix) + "fullscreenerror",
        prefix : $.jBrowser.domPrefix,
        activeElement : null
      };
    })();
    /** @type {RegExp} */
    var rclass = /\S+/g;
    /** @type {RegExp} */
    var exclude = /^(border(Top|Bottom|Left|Right)Width)|((padding|margin)(Top|Bottom|Left|Right))$/;
    var sockets = {
      "float" : "undefined" === typeof object.styleFloat ? "cssFloat" : "styleFloat"
    };
    var cssNumber = {
      fontWeight : true,
      lineHeight : true,
      opacity : true,
      zIndex : true,
      zoom : true
    };
    /** @type {function (?, string): ?} */
    var computed = window.getComputedStyle ? function(el, prop) {
      /** @type {(CSSStyleDeclaration|null)} */
      var computed = window.getComputedStyle(el, null);
      return computed ? computed.getPropertyValue(prop) || computed[prop] : null;
    } : function(element, style) {
      var css = element.currentStyle;
      /** @type {null} */
      var value = null;
      value = css ? css[style] : null;
      if (null == value && (element.style && element.style[style])) {
        value = element.style[style];
      }
      return value;
    };
    /** @type {function (string): ?} */
    $.normalizeCSS = constructor;
    $.Element = {
      /**
       * @param {(number|string)} result
       * @return {?}
       */
      jHasClass : function(result) {
        return!(result || "").has(" ") && (this.className || "").has(result, " ");
      },
      /**
       * @param {string} name
       * @return {?}
       */
      jAddClass : function(name) {
        var result = (this.className || "").match(rclass) || [];
        var values = (name || "").match(rclass) || [];
        var valuesLen = values.length;
        /** @type {number} */
        var i = 0;
        for (;i < valuesLen;i++) {
          if (!$.$(result).contains(values[i])) {
            result.push(values[i]);
          }
        }
        this.className = result.join(" ");
        return this;
      },
      /**
       * @param {number} name
       * @return {?}
       */
      jRemoveClass : function(name) {
        var result = (this.className || "").match(rclass) || [];
        var values = (name || "").match(rclass) || [];
        var valuesLen = values.length;
        /** @type {number} */
        var i = 0;
        var index;
        for (;i < valuesLen;i++) {
          if ((index = $.$(result).indexOf(values[i])) > -1) {
            result.splice(index, 1);
          }
        }
        this.className = name ? result.join(" ") : "";
        return this;
      },
      /**
       * @param {(number|string)} entry
       * @return {?}
       */
      jToggleClass : function(entry) {
        return this.jHasClass(entry) ? this.jRemoveClass(entry) : this.jAddClass(entry);
      },
      /**
       * @param {string} prop
       * @return {?}
       */
      jGetCss : function(prop) {
        var url = prop.jCamelize();
        /** @type {null} */
        var val = null;
        prop = sockets[url] || (sockets[url] = constructor(url));
        val = computed(this, prop);
        if ("auto" === val) {
          /** @type {null} */
          val = null;
        }
        if (null !== val) {
          if ("opacity" == prop) {
            return $.defined(val) ? parseFloat(val) : 1;
          }
          if (exclude.test(prop)) {
            val = parseInt(val, 10) ? val : "0px";
          }
        }
        return val;
      },
      /**
       * @param {string} prop
       * @param {string} value
       * @return {?}
       */
      jSetCssProp : function(prop, value) {
        var url = prop.jCamelize();
        try {
          if ("opacity" == prop) {
            this.jSetOpacity(value);
            return this;
          }
          prop = sockets[url] || (sockets[url] = constructor(url));
          /** @type {string} */
          this.style[prop] = value + ("number" == $.jTypeOf(value) && !cssNumber[url] ? "px" : "");
        } catch (Y) {
        }
        return this;
      },
      /**
       * @param {?} opt_attributes
       * @return {?}
       */
      jSetCss : function(opt_attributes) {
        var prefix;
        for (prefix in opt_attributes) {
          this.jSetCssProp(prefix, opt_attributes[prefix]);
        }
        return this;
      },
      /**
       * @return {?}
       */
      jGetStyles : function() {
        var employees = {};
        $.$A(arguments).jEach(function(i) {
          employees[i] = this.jGetCss(i);
        }, this);
        return employees;
      },
      /**
       * @param {number} value
       * @param {boolean} dataAndEvents
       * @return {?}
       */
      jSetOpacity : function(value, dataAndEvents) {
        var X;
        dataAndEvents = dataAndEvents || false;
        /** @type {number} */
        this.style.opacity = value;
        /** @type {number} */
        value = parseInt(parseFloat(value) * 100);
        if (dataAndEvents) {
          if (0 === value) {
            if ("hidden" != this.style.visibility) {
              /** @type {string} */
              this.style.visibility = "hidden";
            }
          } else {
            if ("visible" != this.style.visibility) {
              /** @type {string} */
              this.style.visibility = "visible";
            }
          }
        }
        if ($.jBrowser.ieMode && $.jBrowser.ieMode < 9) {
          if (!isNaN(value)) {
            if (!~this.style.filter.indexOf("Alpha")) {
              this.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity=" + value + ")";
            } else {
              this.style.filter = this.style.filter.replace(/Opacity=\d*/i, "Opacity=" + value);
            }
          } else {
            this.style.filter = this.style.filter.replace(/progid:DXImageTransform.Microsoft.Alpha\(Opacity=\d*\)/i, "").jTrim();
            if ("" === this.style.filter) {
              this.style.removeAttribute("filter");
            }
          }
        }
        return this;
      },
      /**
       * @param {Object} map
       * @return {?}
       */
      setProps : function(map) {
        var key;
        for (key in map) {
          if ("class" === key) {
            this.jAddClass("" + map[key]);
          } else {
            this.setAttribute(key, "" + map[key]);
          }
        }
        return this;
      },
      /**
       * @return {?}
       */
      hide : function() {
        return this.jSetCss({
          display : "none",
          visibility : "hidden"
        });
      },
      /**
       * @return {?}
       */
      show : function() {
        return this.jSetCss({
          display : "",
          visibility : "visible"
        });
      },
      /**
       * @return {?}
       */
      jGetSize : function() {
        return{
          width : this.offsetWidth,
          height : this.offsetHeight
        };
      },
      /**
       * @param {?} dataAndEvents
       * @return {?}
       */
      getInnerSize : function(dataAndEvents) {
        var $cont = this.jGetSize();
        $cont.width -= parseFloat(this.jGetCss("border-left-width") || 0) + parseFloat(this.jGetCss("border-right-width") || 0);
        $cont.height -= parseFloat(this.jGetCss("border-top-width") || 0) + parseFloat(this.jGetCss("border-bottom-width") || 0);
        if (!dataAndEvents) {
          $cont.width -= parseFloat(this.jGetCss("padding-left") || 0) + parseFloat(this.jGetCss("padding-right") || 0);
          $cont.height -= parseFloat(this.jGetCss("padding-top") || 0) + parseFloat(this.jGetCss("padding-bottom") || 0);
        }
        return $cont;
      },
      /**
       * @return {?}
       */
      jGetScroll : function() {
        return{
          top : this.scrollTop,
          left : this.scrollLeft
        };
      },
      /**
       * @return {?}
       */
      jGetFullScroll : function() {
        var currentElement = this;
        var animation = {
          top : 0,
          left : 0
        };
        do {
          animation.left += currentElement.scrollLeft || 0;
          animation.top += currentElement.scrollTop || 0;
          currentElement = currentElement.parentNode;
        } while (currentElement);
        return animation;
      },
      /**
       * @return {?}
       */
      jGetPosition : function() {
        var offsetParent = this;
        /** @type {number} */
        var pickWinLeft = 0;
        /** @type {number} */
        var pickWinTop = 0;
        if ($.defined(document.documentElement.getBoundingClientRect)) {
          var box = this.getBoundingClientRect();
          var scrollCoord = $.$(document).jGetScroll();
          var doc = $.jBrowser.getDoc();
          return{
            top : box.top + scrollCoord.y - doc.clientTop,
            left : box.left + scrollCoord.x - doc.clientLeft
          };
        }
        do {
          pickWinLeft += offsetParent.offsetLeft || 0;
          pickWinTop += offsetParent.offsetTop || 0;
          offsetParent = offsetParent.offsetParent;
        } while (offsetParent && !/^(?:body|html)$/i.test(offsetParent.tagName));
        return{
          top : pickWinTop,
          left : pickWinLeft
        };
      },
      /**
       * @return {?}
       */
      jGetRect : function() {
        var offset = this.jGetPosition();
        var size = this.jGetSize();
        return{
          top : offset.top,
          bottom : offset.top + size.height,
          left : offset.left,
          right : offset.left + size.width
        };
      },
      /**
       * @param {string} val
       * @return {?}
       */
      changeContent : function(val) {
        try {
          /** @type {string} */
          this.innerHTML = val;
        } catch (W) {
          /** @type {string} */
          this.innerText = val;
        }
        return this;
      },
      /**
       * @return {?}
       */
      jRemove : function() {
        return this.parentNode ? this.parentNode.removeChild(this) : this;
      },
      /**
       * @return {?}
       */
      kill : function() {
        $.$A(this.childNodes).jEach(function(content) {
          if (3 == content.nodeType || 8 == content.nodeType) {
            return;
          }
          $.$(content).kill();
        });
        this.jRemove();
        this.jClearEvents();
        if (this.$J_UUID) {
          /** @type {null} */
          $.storage[this.$J_UUID] = null;
          delete $.storage[this.$J_UUID];
        }
        return null;
      },
      /**
       * @param {string} elem
       * @param {string} buf
       * @return {?}
       */
      append : function(elem, buf) {
        buf = buf || "bottom";
        var firstChild = this.firstChild;
        if ("top" == buf && firstChild) {
          this.insertBefore(elem, firstChild);
        } else {
          this.appendChild(elem);
        }
        return this;
      },
      /**
       * @param {?} elem
       * @param {string} data
       * @return {?}
       */
      jAppendTo : function(elem, data) {
        if(typeof elem != 'undefined'){
          var buf = $.$(elem).append(this, data);
        }
        return this;
      },
      /**
       * @param {Node} s
       * @return {?}
       */
      enclose : function(s) {
        this.append(s.parentNode.replaceChild(this, s));
        return this;
      },
      /**
       * @param {HTMLElement} el
       * @return {?}
       */
      hasChild : function(el) {
        if ("element" !== $.jTypeOf("string" == $.jTypeOf(el) ? el = document.getElementById(el) : el)) {
          return false;
        }
        return this == el ? false : this.contains && !$.jBrowser.webkit419 ? this.contains(el) : this.compareDocumentPosition ? !!(this.compareDocumentPosition(el) & 16) : $.$A(this.byTag(el.tagName)).contains(el);
      }
    };
    /** @type {function (string): ?} */
    $.Element.jGetStyle = $.Element.jGetCss;
    /** @type {function (?): ?} */
    $.Element.jSetStyle = $.Element.jSetCss;
    if (!window.Element) {
      /** @type {function (): undefined} */
      window.Element = $.$F;
      if ($.jBrowser.engine.webkit) {
        window.document.createElement("iframe");
      }
      window.Element.prototype = $.jBrowser.engine.webkit ? window["[[DOMElement.prototype]]"] : {};
    }
    $.implement(window.Element, {
      $J_TYPE : "element"
    });
    $.Doc = {
      /**
       * @return {?}
       */
      jGetSize : function() {
        if ($.jBrowser.touchScreen || ($.jBrowser.presto925 || $.jBrowser.webkit419)) {
          return{
            width : window.innerWidth,
            height : window.innerHeight
          };
        }
        return{
          width : $.jBrowser.getDoc().clientWidth,
          height : $.jBrowser.getDoc().clientHeight
        };
      },
      /**
       * @return {?}
       */
      jGetScroll : function() {
        return{
          x : window.pageXOffset || $.jBrowser.getDoc().scrollLeft,
          y : window.pageYOffset || $.jBrowser.getDoc().scrollTop
        };
      },
      /**
       * @return {?}
       */
      jGetFullSize : function() {
        var childSize = this.jGetSize();
        return{
          width : Math.max($.jBrowser.getDoc().scrollWidth, childSize.width),
          height : Math.max($.jBrowser.getDoc().scrollHeight, childSize.height)
        };
      }
    };
    $.extend(document, {
      $J_TYPE : "document"
    });
    $.extend(window, {
      $J_TYPE : "window"
    });
    $.extend([$.Element, $.Doc], {
      /**
       * @param {string} name
       * @param {number} val
       * @return {?}
       */
      jFetch : function(name, val) {
        var exports = $.getStorage(this.$J_UUID);
        var v = exports[name];
        if (undefined !== val && undefined === v) {
          v = exports[name] = val;
        }
        return $.defined(v) ? v : null;
      },
      /**
       * @param {string} name
       * @param {string} dataAndEvents
       * @return {?}
       */
      jStore : function(name, dataAndEvents) {
        var old = $.getStorage(this.$J_UUID);
        /** @type {string} */
        old[name] = dataAndEvents;
        return this;
      },
      /**
       * @param {string} id
       * @return {?}
       */
      jDel : function(id) {
        var done = $.getStorage(this.$J_UUID);
        delete done[id];
        return this;
      }
    });
    if (!(window.HTMLElement && (window.HTMLElement.prototype && window.HTMLElement.prototype.getElementsByClassName))) {
      $.extend([$.Element, $.Doc], {
        /**
         * @param {string} arg
         * @return {?}
         */
        getElementsByClassName : function(arg) {
          return $.$A(this.getElementsByTagName("*")).filter(function(el) {
            try {
              return 1 == el.nodeType && el.className.has(arg, " ");
            } catch (X) {
            }
          });
        }
      });
    }
    $.extend([$.Element, $.Doc], {
      /**
       * @return {?}
       */
      byClass : function() {
        return this.getElementsByClassName(arguments[0]);
      },
      /**
       * @return {?}
       */
      byTag : function() {
        return this.getElementsByTagName(arguments[0]);
      }
    });
    if ($.jBrowser.fullScreen.capable && !document.requestFullScreen) {
      /**
       * @return {undefined}
       */
      $.Element.requestFullScreen = function() {
        $.jBrowser.fullScreen.request(this);
      };
    }
    $.Event = {
      $J_TYPE : "event",
      /** @type {function (): ?} */
      isQueueStopped : $.$false,
      /**
       * @return {?}
       */
      stop : function() {
        return this.stopDistribution().stopDefaults();
      },
      /**
       * @return {?}
       */
      stopDistribution : function() {
        if (this.stopPropagation) {
          this.stopPropagation();
        } else {
          /** @type {boolean} */
          this.cancelBubble = true;
        }
        return this;
      },
      /**
       * @return {?}
       */
      stopDefaults : function() {
        if (this.preventDefault) {
          this.preventDefault();
        } else {
          /** @type {boolean} */
          this.returnValue = false;
        }
        return this;
      },
      /**
       * @return {?}
       */
      stopQueue : function() {
        /** @type {function (): ?} */
        this.isQueueStopped = $.$true;
        return this;
      },
      /**
       * @return {?}
       */
      getClientXY : function() {
        var result;
        var W;
        result = /touch/i.test(this.type) ? this.changedTouches[0] : this;
        return!$.defined(result) ? {
          x : 0,
          y : 0
        } : {
          x : result.clientX,
          y : result.clientY
        };
      },
      /**
       * @return {?}
       */
      jGetPageXY : function() {
        var evt;
        var W;
        evt = /touch/i.test(this.type) ? this.changedTouches[0] : this;
        return!$.defined(evt) ? {
          x : 0,
          y : 0
        } : {
          x : evt.pageX || evt.clientX + $.jBrowser.getDoc().scrollLeft,
          y : evt.pageY || evt.clientY + $.jBrowser.getDoc().scrollTop
        };
      },
      /**
       * @return {?}
       */
      getTarget : function() {
        var target = this.target || this.srcElement;
        for (;target && 3 == target.nodeType;) {
          target = target.parentNode;
        }
        return target;
      },
      /**
       * @return {?}
       */
      getRelated : function() {
        /** @type {null} */
        var tapElement = null;
        switch(this.type) {
          case "mouseover":
          ;
          case "pointerover":
          ;
          case "MSPointerOver":
            tapElement = this.relatedTarget || this.fromElement;
            break;
          case "mouseout":
          ;
          case "pointerout":
          ;
          case "MSPointerOut":
            tapElement = this.relatedTarget || this.toElement;
            break;
          default:
            return tapElement;
        }
        try {
          for (;tapElement && 3 == tapElement.nodeType;) {
            tapElement = tapElement.parentNode;
          }
        } catch (W) {
          /** @type {null} */
          tapElement = null;
        }
        return tapElement;
      },
      /**
       * @return {?}
       */
      getButton : function() {
        if (!this.which && this.button !== undefined) {
          return this.button & 1 ? 1 : this.button & 2 ? 3 : this.button & 4 ? 2 : 0;
        }
        return this.which;
      },
      /**
       * @return {?}
       */
      isTouchEvent : function() {
        return this.pointerType && ("touch" === this.pointerType || this.pointerType === this.MSPOINTER_TYPE_TOUCH) || /touch/i.test(this.type);
      },
      /**
       * @return {?}
       */
      isPrimaryTouch : function() {
        return this.pointerType ? ("touch" === this.pointerType || this.MSPOINTER_TYPE_TOUCH === this.pointerType) && this.isPrimary : 1 === this.changedTouches.length && (this.targetTouches.length ? this.targetTouches[0].identifier == this.changedTouches[0].identifier : true);
      }
    };
    /** @type {string} */
    $._event_add_ = "addEventListener";
    /** @type {string} */
    $._event_del_ = "removeEventListener";
    /** @type {string} */
    $._event_prefix_ = "";
    if (!document.addEventListener) {
      /** @type {string} */
      $._event_add_ = "attachEvent";
      /** @type {string} */
      $._event_del_ = "detachEvent";
      /** @type {string} */
      $._event_prefix_ = "on";
    }
    $.Event.Custom = {
      type : "",
      x : null,
      y : null,
      timeStamp : null,
      button : null,
      target : null,
      relatedTarget : null,
      $J_TYPE : "event.custom",
      /** @type {function (): ?} */
      isQueueStopped : $.$false,
      events : $.$([]),
      /**
       * @param {Object} event
       * @return {undefined}
       */
      pushToEvents : function(event) {
        /** @type {Object} */
        var originalEvent = event;
        this.events.push(originalEvent);
      },
      /**
       * @return {?}
       */
      stop : function() {
        return this.stopDistribution().stopDefaults();
      },
      /**
       * @return {?}
       */
      stopDistribution : function() {
        this.events.jEach(function(dataAndEvents) {
          try {
            dataAndEvents.stopDistribution();
          } catch (W) {
          }
        });
        return this;
      },
      /**
       * @return {?}
       */
      stopDefaults : function() {
        this.events.jEach(function(dataAndEvents) {
          try {
            dataAndEvents.stopDefaults();
          } catch (W) {
          }
        });
        return this;
      },
      /**
       * @return {?}
       */
      stopQueue : function() {
        /** @type {function (): ?} */
        this.isQueueStopped = $.$true;
        return this;
      },
      /**
       * @return {?}
       */
      getClientXY : function() {
        return{
          x : this.clientX,
          y : this.clientY
        };
      },
      /**
       * @return {?}
       */
      jGetPageXY : function() {
        return{
          x : this.x,
          y : this.y
        };
      },
      /**
       * @return {?}
       */
      getTarget : function() {
        return this.target;
      },
      /**
       * @return {?}
       */
      getRelated : function() {
        return this.relatedTarget;
      },
      /**
       * @return {?}
       */
      getButton : function() {
        return this.button;
      },
      /**
       * @return {?}
       */
      getOriginalTarget : function() {
        return this.events.length > 0 ? this.events[0].getTarget() : undefined;
      }
    };
    $.extend([$.Element, $.Doc], {
      /**
       * @param {string} type
       * @param {Function} fn
       * @param {number} expectedNumberOfNonCommentArgs
       * @param {?} mapper
       * @return {?}
       */
      jAddEvent : function(type, fn, expectedNumberOfNonCommentArgs, mapper) {
        var typeSubscribers;
        var map;
        var uniqs;
        var config;
        var fx;
        if ("string" == $.jTypeOf(type)) {
          fx = type.split(" ");
          if (fx.length > 1) {
            type = fx;
          }
        }
        if ($.jTypeOf(type) == "array") {
          $.$(type).jEach(this.jAddEvent.jBindAsEvent(this, fn, expectedNumberOfNonCommentArgs, mapper));
          return this;
        }
        if (!type || (!fn || ($.jTypeOf(type) != "string" || $.jTypeOf(fn) != "function"))) {
          return this;
        }
        if (type == "domready" && $.jBrowser.ready) {
          fn.call(this);
          return this;
        }
        type = _touchEventLookup[type] || type;
        /** @type {number} */
        expectedNumberOfNonCommentArgs = parseInt(expectedNumberOfNonCommentArgs || 50);
        if (!fn.$J_EUID) {
          /** @type {number} */
          fn.$J_EUID = Math.floor(Math.random() * $.now());
        }
        typeSubscribers = $.Doc.jFetch.call(this, "_EVENTS_", {});
        map = typeSubscribers[type];
        if (!map) {
          typeSubscribers[type] = map = $.$([]);
          uniqs = this;
          if ($.Event.Custom[type]) {
            $.Event.Custom[type].handler.add.call(this, mapper);
          } else {
            /**
             * @param {Object} target
             * @return {undefined}
             */
            map.handle = function(target) {
              target = $.extend(target || window.e, {
                $J_TYPE : "event"
              });
              $.Doc.jCallEvent.call(uniqs, type, $.$(target));
            };
            this[$._event_add_]($._event_prefix_ + type, map.handle, false);
          }
        }
        config = {
          type : type,
          /** @type {Function} */
          fn : fn,
          priority : expectedNumberOfNonCommentArgs,
          euid : fn.$J_EUID
        };
        map.push(config);
        map.sort(function(a, b) {
          return a.priority - b.priority;
        });
        return this;
      },
      /**
       * @param {string} type
       * @return {?}
       */
      jRemoveEvent : function(type) {
        var special = $.Doc.jFetch.call(this, "_EVENTS_", {});
        var parts;
        var part;
        var i;
        var ad;
        var r20;
        var fx;
        r20 = arguments.length > 1 ? arguments[1] : -100;
        if ("string" == $.jTypeOf(type)) {
          fx = type.split(" ");
          if (fx.length > 1) {
            type = fx;
          }
        }
        if ($.jTypeOf(type) == "array") {
          $.$(type).jEach(this.jRemoveEvent.jBindAsEvent(this, r20));
          return this;
        }
        type = _touchEventLookup[type] || type;
        if (!type || ($.jTypeOf(type) != "string" || (!special || !special[type]))) {
          return this;
        }
        parts = special[type] || [];
        /** @type {number} */
        i = 0;
        for (;i < parts.length;i++) {
          part = parts[i];
          if (-100 == r20 || !!r20 && r20.$J_EUID === part.euid) {
            ad = parts.splice(i--, 1);
          }
        }
        if (0 === parts.length) {
          if ($.Event.Custom[type]) {
            $.Event.Custom[type].handler.jRemove.call(this);
          } else {
            this[$._event_del_]($._event_prefix_ + type, parts.handle, false);
          }
          delete special[type];
        }
        return this;
      },
      /**
       * @param {string} type
       * @param {Object} options
       * @return {?}
       */
      jCallEvent : function(type, options) {
        var special = $.Doc.jFetch.call(this, "_EVENTS_", {});
        var codeSegments;
        var W;
        var i;
        type = _touchEventLookup[type] || type;
        if (!type || ($.jTypeOf(type) != "string" || (!special || !special[type]))) {
          return this;
        }
        try {
          options = $.extend(options || {}, {
            type : type
          });
        } catch (ab) {
        }
        if (undefined === options.timeStamp) {
          options.timeStamp = $.now();
        }
        codeSegments = special[type] || [];
        /** @type {number} */
        i = 0;
        for (;i < codeSegments.length && !(options.isQueueStopped && options.isQueueStopped());i++) {
          codeSegments[i].fn.call(this, options);
        }
      },
      /**
       * @param {string} eventName
       * @param {string} type
       * @return {?}
       */
      jRaiseEvent : function(eventName, type) {
        /** @type {boolean} */
        var aa = "domready" == eventName ? false : true;
        var node = this;
        var event;
        eventName = _touchEventLookup[eventName] || eventName;
        if (!aa) {
          $.Doc.jCallEvent.call(this, eventName);
          return this;
        }
        if (node === document && (document.createEvent && !node.dispatchEvent)) {
          node = document.documentElement;
        }
        if (document.createEvent) {
          event = document.createEvent(eventName);
          event.initEvent(type, true, true);
        } else {
          event = document.createEventObject();
          /** @type {string} */
          event.eventType = eventName;
        }
        if (document.createEvent) {
          node.dispatchEvent(event);
        } else {
          node.fireEvent("on" + type, event);
        }
        return event;
      },
      /**
       * @return {?}
       */
      jClearEvents : function() {
        var mak = $.Doc.jFetch.call(this, "_EVENTS_");
        if (!mak) {
          return this;
        }
        var i;
        for (i in mak) {
          $.Doc.jRemoveEvent.call(this, i);
        }
        $.Doc.jDel.call(this, "_EVENTS_");
        return this;
      }
    });
    (function(self) {
      if ("complete" === document.readyState) {
        return self.jBrowser.onready.jDelay(1);
      }
      if (self.jBrowser.webkit && self.jBrowser.version < 420) {
        (function() {
          if (self.$(["loaded", "complete"]).contains(document.readyState)) {
            self.jBrowser.onready();
          } else {
            arguments.callee.jDelay(50);
          }
        })();
      } else {
        if (self.jBrowser.trident && (self.jBrowser.ieMode < 9 && window == top)) {
          (function() {
            if (self.$try(function() {
              self.jBrowser.getDoc().doScroll("left");
              return true;
            })) {
              self.jBrowser.onready();
            } else {
              arguments.callee.jDelay(50);
            }
          })();
        } else {
          self.Doc.jAddEvent.call(self.$(document), "DOMContentLoaded", self.jBrowser.onready);
          self.Doc.jAddEvent.call(self.$(window), "load", self.jBrowser.onready);
        }
      }
    })(b);
    /**
     * @return {?}
     */
    $.Class = function() {
      /** @type {null} */
      var constructor = null;
      var args = $.$A(arguments);
      if ("class" == $.jTypeOf(args[0])) {
        constructor = args.shift();
      }
      /**
       * @return {?}
       */
      var Class = function() {
        var i;
        for (i in this) {
          this[i] = $.detach(this[i]);
        }
        if (this.constructor.$parent) {
          this.$parent = {};
          var methods = this.constructor.$parent;
          var property;
          for (property in methods) {
            var value = methods[property];
            switch($.jTypeOf(value)) {
              case "function":
                this.$parent[property] = $.Class.wrap(this, value);
                break;
              case "object":
                this.$parent[property] = $.detach(value);
                break;
              case "array":
                this.$parent[property] = $.detach(value);
                break;
            }
          }
        }
        var obj = this.init ? this.init.apply(this, arguments) : this;
        delete this.caller;
        return obj;
      };
      if (!Class.prototype.init) {
        /** @type {function (): undefined} */
        Class.prototype.init = $.$F;
      }
      if (constructor) {
        /**
         * @return {undefined}
         */
        var SuperClassEmpty = function() {
        };
        SuperClassEmpty.prototype = constructor.prototype;
        Class.prototype = new SuperClassEmpty;
        Class.$parent = {};
        var property;
        for (property in constructor.prototype) {
          Class.$parent[property] = constructor.prototype[property];
        }
      } else {
        /** @type {null} */
        Class.$parent = null;
      }
      /** @type {function (): ?} */
      Class.constructor = $.Class;
      /** @type {function (): ?} */
      Class.prototype.constructor = Class;
      $.extend(Class.prototype, args[0]);
      $.extend(Class, {
        $J_TYPE : "class"
      });
      return Class;
    };
    /**
     * @param {?} self
     * @param {Function} fn
     * @return {?}
     */
    b.Class.wrap = function(self, fn) {
      return function() {
        var caller = this.caller;
        var result = fn.apply(self, arguments);
        return result;
      };
    };
    (function(util) {
      /** @type {function (Object): ?} */
      var $ = util.$;
      /** @type {number} */
      var W = 5;
      /** @type {number} */
      var threshold = 300;
      util.Event.Custom.btnclick = new util.Class(util.extend(util.Event.Custom, {
        type : "btnclick",
        /**
         * @param {Object} element
         * @param {Event} event
         * @return {undefined}
         */
        init : function(element, event) {
          var that = event.jGetPageXY();
          this.x = that.x;
          this.y = that.y;
          this.clientX = event.clientX;
          this.clientY = event.clientY;
          this.timeStamp = event.timeStamp;
          this.button = event.getButton();
          /** @type {Object} */
          this.target = element;
          this.pushToEvents(event);
        }
      }));
      util.Event.Custom.btnclick.handler = {
        options : {
          threshold : threshold,
          button : 1
        },
        /**
         * @param {Object} options
         * @return {undefined}
         */
        add : function(options) {
          this.jStore("event:btnclick:options", util.extend(util.detach(util.Event.Custom.btnclick.handler.options), options || {}));
          this.jAddEvent("mousedown", util.Event.Custom.btnclick.handler.handle, 1);
          this.jAddEvent("mouseup", util.Event.Custom.btnclick.handler.handle, 1);
          this.jAddEvent("click", util.Event.Custom.btnclick.handler.onclick, 1);
          if (util.jBrowser.trident && util.jBrowser.ieMode < 9) {
            this.jAddEvent("dblclick", util.Event.Custom.btnclick.handler.handle, 1);
          }
        },
        /**
         * @return {undefined}
         */
        jRemove : function() {
          this.jRemoveEvent("mousedown", util.Event.Custom.btnclick.handler.handle);
          this.jRemoveEvent("mouseup", util.Event.Custom.btnclick.handler.handle);
          this.jRemoveEvent("click", util.Event.Custom.btnclick.handler.onclick);
          if (util.jBrowser.trident && util.jBrowser.ieMode < 9) {
            this.jRemoveEvent("dblclick", util.Event.Custom.btnclick.handler.handle);
          }
        },
        /**
         * @param {?} evt
         * @return {undefined}
         */
        onclick : function(evt) {
          evt.stopDefaults();
        },
        /**
         * @param {Object} e
         * @return {undefined}
         */
        handle : function(e) {
          var that;
          var t;
          var pos;
          t = this.jFetch("event:btnclick:options");
          if (e.type != "dblclick" && e.getButton() != t.button) {
            return;
          }
          if (this.jFetch("event:btnclick:ignore")) {
            this.jDel("event:btnclick:ignore");
            return;
          }
          if ("mousedown" == e.type) {
            that = new util.Event.Custom.btnclick(this, e);
            this.jStore("event:btnclick:btnclickEvent", that);
          } else {
            if ("mouseup" == e.type) {
              that = this.jFetch("event:btnclick:btnclickEvent");
              if (!that) {
                return;
              }
              pos = e.jGetPageXY();
              this.jDel("event:btnclick:btnclickEvent");
              that.pushToEvents(e);
              if (e.timeStamp - that.timeStamp <= t.threshold && Math.sqrt(Math.pow(pos.x - that.x, 2) + Math.pow(pos.y - that.y, 2)) <= W) {
                this.jCallEvent("btnclick", that);
              }
              document.jCallEvent("mouseup", e);
            } else {
              if (e.type == "dblclick") {
                that = new util.Event.Custom.btnclick(this, e);
                this.jCallEvent("btnclick", that);
              }
            }
          }
        }
      };
    })(b);
    (function(util) {
      /** @type {function (Object): ?} */
      var $ = util.$;
      util.Event.Custom.mousedrag = new util.Class(util.extend(util.Event.Custom, {
        type : "mousedrag",
        state : "dragstart",
        dragged : false,
        /**
         * @param {Object} element
         * @param {Event} event
         * @param {number} config
         * @return {undefined}
         */
        init : function(element, event, config) {
          var that = event.jGetPageXY();
          this.x = that.x;
          this.y = that.y;
          this.clientX = event.clientX;
          this.clientY = event.clientY;
          this.timeStamp = event.timeStamp;
          this.button = event.getButton();
          /** @type {Object} */
          this.target = element;
          this.pushToEvents(event);
          /** @type {number} */
          this.state = config;
        }
      }));
      util.Event.Custom.mousedrag.handler = {
        /**
         * @return {undefined}
         */
        add : function() {
          var node = util.Event.Custom.mousedrag.handler.handleMouseMove.jBindAsEvent(this);
          var completed = util.Event.Custom.mousedrag.handler.handleMouseUp.jBindAsEvent(this);
          this.jAddEvent("mousedown", util.Event.Custom.mousedrag.handler.handleMouseDown, 1);
          this.jAddEvent("mouseup", util.Event.Custom.mousedrag.handler.handleMouseUp, 1);
          document.jAddEvent("mousemove", node, 1);
          document.jAddEvent("mouseup", completed, 1);
          this.jStore("event:mousedrag:listeners:document:move", node);
          this.jStore("event:mousedrag:listeners:document:end", completed);
        },
        /**
         * @return {undefined}
         */
        jRemove : function() {
          this.jRemoveEvent("mousedown", util.Event.Custom.mousedrag.handler.handleMouseDown);
          this.jRemoveEvent("mouseup", util.Event.Custom.mousedrag.handler.handleMouseUp);
          $(document).jRemoveEvent("mousemove", this.jFetch("event:mousedrag:listeners:document:move") || util.$F);
          $(document).jRemoveEvent("mouseup", this.jFetch("event:mousedrag:listeners:document:end") || util.$F);
          this.jDel("event:mousedrag:listeners:document:move");
          this.jDel("event:mousedrag:listeners:document:end");
        },
        /**
         * @param {number} ev
         * @return {undefined}
         */
        handleMouseDown : function(ev) {
          var dataAndEvents;
          if (1 != ev.getButton()) {
            return;
          }
          ev.stopDefaults();
          dataAndEvents = new util.Event.Custom.mousedrag(this, ev, "dragstart");
          this.jStore("event:mousedrag:dragstart", dataAndEvents);
        },
        /**
         * @param {string} e
         * @return {undefined}
         */
        handleMouseUp : function(e) {
          var memory;
          memory = this.jFetch("event:mousedrag:dragstart");
          if (!memory) {
            return;
          }
          e.stopDefaults();
          memory = new util.Event.Custom.mousedrag(this, e, "dragend");
          this.jDel("event:mousedrag:dragstart");
          this.jCallEvent("mousedrag", memory);
        },
        /**
         * @param {string} neighbor
         * @return {undefined}
         */
        handleMouseMove : function(neighbor) {
          var memory;
          memory = this.jFetch("event:mousedrag:dragstart");
          if (!memory) {
            return;
          }
          neighbor.stopDefaults();
          if (!memory.dragged) {
            /** @type {boolean} */
            memory.dragged = true;
            this.jCallEvent("mousedrag", memory);
          }
          memory = new util.Event.Custom.mousedrag(this, neighbor, "dragmove");
          this.jCallEvent("mousedrag", memory);
        }
      };
    })(b);
    (function(util) {
      /** @type {function (Object): ?} */
      var $ = util.$;
      util.Event.Custom.dblbtnclick = new util.Class(util.extend(util.Event.Custom, {
        type : "dblbtnclick",
        timedout : false,
        tm : null,
        /**
         * @param {Object} element
         * @param {Event} event
         * @return {undefined}
         */
        init : function(element, event) {
          var that = event.jGetPageXY();
          this.x = that.x;
          this.y = that.y;
          this.clientX = event.clientX;
          this.clientY = event.clientY;
          this.timeStamp = event.timeStamp;
          this.button = event.getButton();
          /** @type {Object} */
          this.target = element;
          this.pushToEvents(event);
        }
      }));
      util.Event.Custom.dblbtnclick.handler = {
        options : {
          threshold : 200
        },
        /**
         * @param {Object} options
         * @return {undefined}
         */
        add : function(options) {
          this.jStore("event:dblbtnclick:options", util.extend(util.detach(util.Event.Custom.dblbtnclick.handler.options), options || {}));
          this.jAddEvent("btnclick", util.Event.Custom.dblbtnclick.handler.handle, 1);
        },
        /**
         * @return {undefined}
         */
        jRemove : function() {
          this.jRemoveEvent("btnclick", util.Event.Custom.dblbtnclick.handler.handle);
        },
        /**
         * @param {Object} options
         * @return {undefined}
         */
        handle : function(options) {
          var instance;
          var settings;
          instance = this.jFetch("event:dblbtnclick:event");
          settings = this.jFetch("event:dblbtnclick:options");
          if (!instance) {
            instance = new util.Event.Custom.dblbtnclick(this, options);
            /** @type {number} */
            instance.tm = setTimeout(function() {
              /** @type {boolean} */
              instance.timedout = true;
              /** @type {function (): ?} */
              options.isQueueStopped = util.$false;
              this.jCallEvent("btnclick", options);
              this.jDel("event:dblbtnclick:event");
            }.jBind(this), settings.threshold + 10);
            this.jStore("event:dblbtnclick:event", instance);
            options.stopQueue();
          } else {
            clearTimeout(instance.tm);
            this.jDel("event:dblbtnclick:event");
            if (!instance.timedout) {
              instance.pushToEvents(options);
              options.stopQueue().stop();
              this.jCallEvent("dblbtnclick", instance);
            } else {
            }
          }
        }
      };
    })(b);
    (function(util) {
      /**
       * @param {Event} event
       * @return {?}
       */
      function onTouchStart(event) {
        return event.pointerType ? ("touch" === event.pointerType || event.MSPOINTER_TYPE_TOUCH === event.pointerType) && event.isPrimary : 1 === event.changedTouches.length && (event.targetTouches.length ? event.targetTouches[0].identifier == event.changedTouches[0].identifier : true);
      }
      /**
       * @param {Event} event
       * @return {?}
       */
      function isPrimaryTouch(event) {
        if (event.pointerType) {
          return "touch" === event.pointerType || event.MSPOINTER_TYPE_TOUCH === event.pointerType ? event.pointerId : null;
        } else {
          return event.changedTouches[0].identifier;
        }
      }
      /**
       * @param {Object} event
       * @return {?}
       */
      function cb(event) {
        if (event.pointerType) {
          return "touch" === event.pointerType || event.MSPOINTER_TYPE_TOUCH === event.pointerType ? event : null;
        } else {
          return event.changedTouches[0];
        }
      }
      /** @type {function (Object): ?} */
      var $ = util.$;
      util.Event.Custom.tap = new util.Class(util.extend(util.Event.Custom, {
        type : "tap",
        id : null,
        /**
         * @param {Object} element
         * @param {Object} evt
         * @return {undefined}
         */
        init : function(element, evt) {
          var e = cb(evt);
          this.id = e.pointerId || e.identifier;
          this.x = e.pageX;
          this.y = e.pageY;
          this.pageX = e.pageX;
          this.pageY = e.pageY;
          this.clientX = e.clientX;
          this.clientY = e.clientY;
          this.timeStamp = evt.timeStamp;
          /** @type {number} */
          this.button = 0;
          /** @type {Object} */
          this.target = element;
          this.pushToEvents(evt);
        }
      }));
      /** @type {number} */
      var end = 10;
      /** @type {number} */
      var n = 200;
      util.Event.Custom.tap.handler = {
        /**
         * @param {?} vec0
         * @return {undefined}
         */
        add : function(vec0) {
          this.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], util.Event.Custom.tap.handler.onTouchStart, 1);
          this.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], util.Event.Custom.tap.handler.onTouchEnd, 1);
          this.jAddEvent("click", util.Event.Custom.tap.handler.onClick, 1);
        },
        /**
         * @return {undefined}
         */
        jRemove : function() {
          this.jRemoveEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], util.Event.Custom.tap.handler.onTouchStart);
          this.jRemoveEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], util.Event.Custom.tap.handler.onTouchEnd);
          this.jRemoveEvent("click", util.Event.Custom.tap.handler.onClick);
        },
        /**
         * @param {?} e
         * @return {undefined}
         */
        onClick : function(e) {
          e.stopDefaults();
        },
        /**
         * @param {Event} event
         * @return {undefined}
         */
        onTouchStart : function(event) {
          if (!onTouchStart(event)) {
            this.jDel("event:tap:event");
            return;
          }
          this.jStore("event:tap:event", new util.Event.Custom.tap(this, event));
          this.jStore("event:btnclick:ignore", true);
        },
        /**
         * @param {Event} e
         * @return {undefined}
         */
        onTouchEnd : function(e) {
          var ae = util.now();
          var that = this.jFetch("event:tap:event");
          var jFetch = this.jFetch("event:tap:options");
          if (!that || !onTouchStart(e)) {
            return;
          }
          this.jDel("event:tap:event");
          if (that.id == isPrimaryTouch(e) && (e.timeStamp - that.timeStamp <= n && Math.sqrt(Math.pow(cb(e).pageX - that.x, 2) + Math.pow(cb(e).pageY - that.y, 2)) <= end)) {
            this.jDel("event:btnclick:btnclickEvent");
            e.stop();
            that.pushToEvents(e);
            this.jCallEvent("tap", that);
          }
        }
      };
    })(b);
    $.Event.Custom.dbltap = new $.Class($.extend($.Event.Custom, {
      type : "dbltap",
      timedout : false,
      tm : null,
      /**
       * @param {Object} element
       * @param {Object} e
       * @return {undefined}
       */
      init : function(element, e) {
        this.x = e.x;
        this.y = e.y;
        this.clientX = e.clientX;
        this.clientY = e.clientY;
        this.timeStamp = e.timeStamp;
        /** @type {number} */
        this.button = 0;
        /** @type {Object} */
        this.target = element;
        this.pushToEvents(e);
      }
    }));
    $.Event.Custom.dbltap.handler = {
      options : {
        threshold : 300
      },
      /**
       * @param {Object} options
       * @return {undefined}
       */
      add : function(options) {
        this.jStore("event:dbltap:options", $.extend($.detach($.Event.Custom.dbltap.handler.options), options || {}));
        this.jAddEvent("tap", $.Event.Custom.dbltap.handler.handle, 1);
      },
      /**
       * @return {undefined}
       */
      jRemove : function() {
        this.jRemoveEvent("tap", $.Event.Custom.dbltap.handler.handle);
      },
      /**
       * @param {Object} token
       * @return {undefined}
       */
      handle : function(token) {
        var pending;
        var settings;
        pending = this.jFetch("event:dbltap:event");
        settings = this.jFetch("event:dbltap:options");
        if (!pending) {
          pending = new $.Event.Custom.dbltap(this, token);
          /** @type {number} */
          pending.tm = setTimeout(function() {
            /** @type {boolean} */
            pending.timedout = true;
            /** @type {function (): ?} */
            token.isQueueStopped = $.$false;
            this.jCallEvent("tap", token);
          }.jBind(this), settings.threshold + 10);
          this.jStore("event:dbltap:event", pending);
          token.stopQueue();
        } else {
          clearTimeout(pending.tm);
          this.jDel("event:dbltap:event");
          if (!pending.timedout) {
            pending.pushToEvents(token);
            token.stopQueue().stop();
            this.jCallEvent("dbltap", pending);
          } else {
          }
        }
      }
    };
    (function(util) {
      /**
       * @param {Event} event
       * @return {?}
       */
      function onTouchStart(event) {
        return event.pointerType ? ("touch" === event.pointerType || event.MSPOINTER_TYPE_TOUCH === event.pointerType) && event.isPrimary : 1 === event.changedTouches.length && (event.targetTouches.length ? event.targetTouches[0].identifier == event.changedTouches[0].identifier : true);
      }
      /**
       * @param {Event} event
       * @return {?}
       */
      function onTouchMove(event) {
        if (event.pointerType) {
          return "touch" === event.pointerType || event.MSPOINTER_TYPE_TOUCH === event.pointerType ? event.pointerId : null;
        } else {
          return event.changedTouches[0].identifier;
        }
      }
      /**
       * @param {string} event
       * @return {?}
       */
      function fire(event) {
        if (event.pointerType) {
          return "touch" === event.pointerType || event.MSPOINTER_TYPE_TOUCH === event.pointerType ? event : null;
        } else {
          return event.changedTouches[0];
        }
      }
      /** @type {function (Object): ?} */
      var $ = util.$;
      /** @type {number} */
      var X = 10;
      util.Event.Custom.touchdrag = new util.Class(util.extend(util.Event.Custom, {
        type : "touchdrag",
        state : "dragstart",
        id : null,
        dragged : false,
        /**
         * @param {Object} element
         * @param {Object} event
         * @param {number} config
         * @return {undefined}
         */
        init : function(element, event, config) {
          var e = fire(event);
          this.id = e.pointerId || e.identifier;
          this.clientX = e.clientX;
          this.clientY = e.clientY;
          this.pageX = e.pageX;
          this.pageY = e.pageY;
          this.x = e.pageX;
          this.y = e.pageY;
          this.timeStamp = event.timeStamp;
          /** @type {number} */
          this.button = 0;
          /** @type {Object} */
          this.target = element;
          this.pushToEvents(event);
          /** @type {number} */
          this.state = config;
        }
      }));
      util.Event.Custom.touchdrag.handler = {
        /**
         * @return {undefined}
         */
        add : function() {
          var node = util.Event.Custom.touchdrag.handler.onTouchMove.jBind(this);
          var taskComplete = util.Event.Custom.touchdrag.handler.onTouchEnd.jBind(this);
          this.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], util.Event.Custom.touchdrag.handler.onTouchStart, 1);
          this.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], util.Event.Custom.touchdrag.handler.onTouchEnd, 1);
          this.jAddEvent(["touchmove", window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove"], util.Event.Custom.touchdrag.handler.onTouchMove, 1);
          this.jStore("event:touchdrag:listeners:document:move", node);
          this.jStore("event:touchdrag:listeners:document:end", taskComplete);
          $(document).jAddEvent(window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove", node, 1);
          $(document).jAddEvent(window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp", taskComplete, 1);
        },
        /**
         * @return {undefined}
         */
        jRemove : function() {
          this.jRemoveEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], util.Event.Custom.touchdrag.handler.onTouchStart);
          this.jRemoveEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], util.Event.Custom.touchdrag.handler.onTouchEnd);
          this.jRemoveEvent(["touchmove", window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove"], util.Event.Custom.touchdrag.handler.onTouchMove);
          $(document).jRemoveEvent(window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove", this.jFetch("event:touchdrag:listeners:document:move") || util.$F, 1);
          $(document).jRemoveEvent(window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp", this.jFetch("event:touchdrag:listeners:document:end") || util.$F, 1);
          this.jDel("event:touchdrag:listeners:document:move");
          this.jDel("event:touchdrag:listeners:document:end");
        },
        /**
         * @param {string} event
         * @return {undefined}
         */
        onTouchStart : function(event) {
          var dataAndEvents;
          if (!onTouchStart(event)) {
            return;
          }
          dataAndEvents = new util.Event.Custom.touchdrag(this, event, "dragstart");
          this.jStore("event:touchdrag:dragstart", dataAndEvents);
        },
        /**
         * @param {string} event
         * @return {undefined}
         */
        onTouchEnd : function(event) {
          var that;
          that = this.jFetch("event:touchdrag:dragstart");
          if (!that || (!that.dragged || that.id != onTouchMove(event))) {
            return;
          }
          that = new util.Event.Custom.touchdrag(this, event, "dragend");
          this.jDel("event:touchdrag:dragstart");
          this.jCallEvent("touchdrag", that);
        },
        /**
         * @param {string} event
         * @return {undefined}
         */
        onTouchMove : function(event) {
          var that;
          that = this.jFetch("event:touchdrag:dragstart");
          if (!that || !onTouchStart(event)) {
            return;
          }
          if (that.id != onTouchMove(event)) {
            this.jDel("event:touchdrag:dragstart");
            return;
          }
          if (!that.dragged && Math.sqrt(Math.pow(fire(event).pageX - that.x, 2) + Math.pow(fire(event).pageY - that.y, 2)) > X) {
            /** @type {boolean} */
            that.dragged = true;
            this.jCallEvent("touchdrag", that);
          }
          if (!that.dragged) {
            return;
          }
          that = new util.Event.Custom.touchdrag(this, event, "dragmove");
          this.jCallEvent("touchdrag", that);
        }
      };
    })(b);
    $.Event.Custom.touchpinch = new $.Class($.extend($.Event.Custom, {
      type : "touchpinch",
      scale : 1,
      previousScale : 1,
      curScale : 1,
      state : "pinchstart",
      /**
       * @param {Object} element
       * @param {Object} event
       * @return {undefined}
       */
      init : function(element, event) {
        this.timeStamp = event.timeStamp;
        /** @type {number} */
        this.button = 0;
        /** @type {Object} */
        this.target = element;
        this.x = event.touches[0].clientX + (event.touches[1].clientX - event.touches[0].clientX) / 2;
        this.y = event.touches[0].clientY + (event.touches[1].clientY - event.touches[0].clientY) / 2;
        /** @type {number} */
        this._initialDistance = Math.sqrt(Math.pow(event.touches[0].clientX - event.touches[1].clientX, 2) + Math.pow(event.touches[0].clientY - event.touches[1].clientY, 2));
        this.pushToEvents(event);
      },
      /**
       * @param {Object} obj
       * @return {undefined}
       */
      update : function(obj) {
        var scale;
        /** @type {string} */
        this.state = "pinchupdate";
        if (obj.changedTouches[0].identifier != this.events[0].touches[0].identifier || obj.changedTouches[1].identifier != this.events[0].touches[1].identifier) {
          return;
        }
        /** @type {number} */
        scale = Math.sqrt(Math.pow(obj.changedTouches[0].clientX - obj.changedTouches[1].clientX, 2) + Math.pow(obj.changedTouches[0].clientY - obj.changedTouches[1].clientY, 2));
        this.previousScale = this.scale;
        /** @type {number} */
        this.scale = scale / this._initialDistance;
        /** @type {number} */
        this.curScale = this.scale / this.previousScale;
        this.x = obj.changedTouches[0].clientX + (obj.changedTouches[1].clientX - obj.changedTouches[0].clientX) / 2;
        this.y = obj.changedTouches[0].clientY + (obj.changedTouches[1].clientY - obj.changedTouches[0].clientY) / 2;
        this.pushToEvents(obj);
      }
    }));
    $.Event.Custom.touchpinch.handler = {
      /**
       * @return {undefined}
       */
      add : function() {
        this.jAddEvent("touchstart", $.Event.Custom.touchpinch.handler.handleTouchStart, 1);
        this.jAddEvent("touchend", $.Event.Custom.touchpinch.handler.handleTouchEnd, 1);
        this.jAddEvent("touchmove", $.Event.Custom.touchpinch.handler.handleTouchMove, 1);
      },
      /**
       * @return {undefined}
       */
      jRemove : function() {
        this.jRemoveEvent("touchstart", $.Event.Custom.touchpinch.handler.handleTouchStart);
        this.jRemoveEvent("touchend", $.Event.Custom.touchpinch.handler.handleTouchEnd);
        this.jRemoveEvent("touchmove", $.Event.Custom.touchpinch.handler.handleTouchMove);
      },
      /**
       * @param {Object} event
       * @return {undefined}
       */
      handleTouchStart : function(event) {
        var dataAndEvents;
        if (event.touches.length != 2) {
          return;
        }
        event.stopDefaults();
        dataAndEvents = new $.Event.Custom.touchpinch(this, event);
        this.jStore("event:touchpinch:event", dataAndEvents);
      },
      /**
       * @param {?} event
       * @return {undefined}
       */
      handleTouchEnd : function(event) {
        var jFetch;
        jFetch = this.jFetch("event:touchpinch:event");
        if (!jFetch) {
          return;
        }
        event.stopDefaults();
        this.jDel("event:touchpinch:event");
      },
      /**
       * @param {Object} walkers
       * @return {undefined}
       */
      handleTouchMove : function(walkers) {
        var tween;
        tween = this.jFetch("event:touchpinch:event");
        if (!tween) {
          return;
        }
        walkers.stopDefaults();
        tween.update(walkers);
        this.jCallEvent("touchpinch", tween);
      }
    };
    (function(util) {
      /**
       * @return {undefined}
       */
      function later() {
        /** @type {null} */
        lowestDelta = null;
      }
      /**
       * @param {number} string
       * @param {(number|string)} dataAndEvents
       * @return {?}
       */
      function platform(string, dataAndEvents) {
        return string > 50 || (1 === dataAndEvents && !("win" == util.jBrowser.platform && string < 1) || (0 === string % 12 || 0 == string % 4.000244140625));
      }
      /** @type {function (Object): ?} */
      var $ = util.$;
      util.Event.Custom.mousescroll = new util.Class(util.extend(util.Event.Custom, {
        type : "mousescroll",
        /**
         * @param {Object} element
         * @param {Event} event
         * @param {number} delta
         * @param {number} allBindingsAccessor
         * @param {number} depMaps
         * @param {number} rootjQuery
         * @param {number} opt_setup
         * @return {undefined}
         */
        init : function(element, event, delta, allBindingsAccessor, depMaps, rootjQuery, opt_setup) {
          var that = event.jGetPageXY();
          this.x = that.x;
          this.y = that.y;
          this.timeStamp = event.timeStamp;
          /** @type {Object} */
          this.target = element;
          this.delta = delta || 0;
          this.deltaX = allBindingsAccessor || 0;
          this.deltaY = depMaps || 0;
          this.deltaZ = rootjQuery || 0;
          this.deltaFactor = opt_setup || 0;
          this.deltaMode = event.deltaMode || 0;
          /** @type {boolean} */
          this.isMouse = false;
          this.pushToEvents(event);
        }
      }));
      var lowestDelta;
      var timeout;
      util.Event.Custom.mousescroll.handler = {
        eventType : "onwheel" in document || util.jBrowser.ieMode > 8 ? "wheel" : "mousewheel",
        /**
         * @return {undefined}
         */
        add : function() {
          this.jAddEvent(util.Event.Custom.mousescroll.handler.eventType, util.Event.Custom.mousescroll.handler.handle, 1);
        },
        /**
         * @return {undefined}
         */
        jRemove : function() {
          this.jRemoveEvent(util.Event.Custom.mousescroll.handler.eventType, util.Event.Custom.mousescroll.handler.handle, 1);
        },
        /**
         * @param {Function} orgEvent
         * @return {undefined}
         */
        handle : function(orgEvent) {
          /** @type {number} */
          var delta = 0;
          /** @type {number} */
          var deltaX = 0;
          /** @type {number} */
          var deltaY = 0;
          /** @type {number} */
          var absDelta = 0;
          var fn;
          var memory;
          if (orgEvent.detail) {
            /** @type {number} */
            deltaY = orgEvent.detail * -1;
          }
          if (orgEvent.wheelDelta !== undefined) {
            deltaY = orgEvent.wheelDelta;
          }
          if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY;
          }
          if (orgEvent.wheelDeltaX !== undefined) {
            /** @type {number} */
            deltaX = orgEvent.wheelDeltaX * -1;
          }
          if (orgEvent.deltaY) {
            /** @type {number} */
            deltaY = -1 * orgEvent.deltaY;
          }
          if (orgEvent.deltaX) {
            deltaX = orgEvent.deltaX;
          }
          if (0 === deltaY && 0 === deltaX) {
            return;
          }
          delta = 0 === deltaY ? deltaX : deltaY;
          /** @type {number} */
          absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
          if (!lowestDelta || absDelta < lowestDelta) {
            /** @type {number} */
            lowestDelta = absDelta;
          }
          /** @type {string} */
          fn = delta > 0 ? "floor" : "ceil";
          delta = Math[fn](delta / lowestDelta);
          deltaX = Math[fn](deltaX / lowestDelta);
          deltaY = Math[fn](deltaY / lowestDelta);
          if (timeout) {
            clearTimeout(timeout);
          }
          /** @type {number} */
          timeout = setTimeout(later, 200);
          memory = new util.Event.Custom.mousescroll(this, orgEvent, delta, deltaX, deltaY, 0, lowestDelta);
          memory.isMouse = platform(lowestDelta, orgEvent.deltaMode || 0);
          this.jCallEvent("mousescroll", memory);
        }
      };
    })(b);
    $.win = $.$(window);
    $.doc = $.$(document);
    return b;
  }();
  (function($) {
    if (!$) {
      throw "MagicJS not found";
    }
    var error = $.$;
    /** @type {DOMURL} */
    var _URL = window.URL || (window.webkitURL || null);
    Zepto.ImageLoader = new $.Class({
      img : null,
      ready : false,
      options : {
        onprogress : $.$F,
        onload : $.$F,
        onabort : $.$F,
        onerror : $.$F,
        oncomplete : $.$F,
        onxhrerror : $.$F,
        xhr : false,
        progressiveLoad : true
      },
      size : null,
      _timer : null,
      loadedBytes : 0,
      _handlers : {
        /**
         * @param {Object} e
         * @return {undefined}
         */
        onprogress : function(e) {
          if (e.target && ((200 === e.target.status || 304 === e.target.status) && e.lengthComputable)) {
            this.options.onprogress.jBind(null, (e.loaded - (this.options.progressiveLoad ? this.loadedBytes : 0)) / e.total).jDelay(1);
            this.loadedBytes = e.loaded;
          }
        },
        /**
         * @param {Object} e
         * @return {undefined}
         */
        onload : function(e) {
          if (e) {
            error(e).stop();
          }
          this._unbind();
          if (this.ready) {
            return;
          }
          /** @type {boolean} */
          this.ready = true;
          this._cleanup();
          if (!this.options.xhr) {
            this.options.onprogress.jBind(null, 1).jDelay(1);
          }
          this.options.onload.jBind(null, this).jDelay(1);
          this.options.oncomplete.jBind(null, this).jDelay(1);
        },
        /**
         * @param {Object} e
         * @return {undefined}
         */
        onabort : function(e) {
          if (e) {
            error(e).stop();
          }
          this._unbind();
          /** @type {boolean} */
          this.ready = false;
          this._cleanup();
          this.options.onabort.jBind(null, this).jDelay(1);
          this.options.oncomplete.jBind(null, this).jDelay(1);
        },
        /**
         * @param {Object} e
         * @return {undefined}
         */
        onerror : function(e) {
          if (e) {
            error(e).stop();
          }
          this._unbind();
          /** @type {boolean} */
          this.ready = false;
          this._cleanup();
          this.options.onerror.jBind(null, this).jDelay(1);
          this.options.oncomplete.jBind(null, this).jDelay(1);
        }
      },
      /**
       * @return {undefined}
       */
      _bind : function() {
        error(["load", "abort", "error"]).jEach(function(t) {
          this.img.jAddEvent(t, this._handlers["on" + t].jBindAsEvent(this).jDefer(1));
        }, this);
      },
      /**
       * @return {undefined}
       */
      _unbind : function() {
        if (this._timer) {
          try {
            clearTimeout(this._timer);
          } catch (J) {
          }
          /** @type {null} */
          this._timer = null;
        }
        error(["load", "abort", "error"]).jEach(function(fix) {
          this.img.jRemoveEvent(fix);
        }, this);
      },
      /**
       * @return {undefined}
       */
      _cleanup : function() {
        this.jGetSize();
        if (this.img.jFetch("new")) {
          var p = this.img.parentNode;
          this.img.jRemove().jDel("new").jSetCss({
            position : "static",
            top : "auto"
          });
          p.kill();
        }
      },
      /**
       * @param {?} path
       * @return {undefined}
       */
      loadBlob : function(path) {
        /** @type {XMLHttpRequest} */
        var xhr = new XMLHttpRequest;
        var blob;
        error(["abort", "progress"]).jEach(function(eventName) {
          xhr["on" + eventName] = error(function(mapper) {
            this._handlers["on" + eventName].call(this, mapper);
          }).jBind(this);
        }, this);
        xhr.onerror = error(function() {
          this.options.onxhrerror.jBind(null, this).jDelay(1);
          /** @type {boolean} */
          this.options.xhr = false;
          this._bind();
          this.img.src = path;
        }).jBind(this);
        xhr.onload = error(function() {
          if (200 !== xhr.status && 304 !== xhr.status) {
            this._handlers.onerror.call(this);
            return;
          }
          /** @type {*} */
          blob = xhr.response;
          this._bind();
          if (_URL && (!$.jBrowser.trident && !("ios" === $.jBrowser.platform && $.jBrowser.version < 537))) {
            this.img.setAttribute("src", _URL.createObjectURL(blob));
          } else {
            this.img.src = path;
          }
        }).jBind(this);
        xhr.open("GET", path);
        /** @type {string} */
        xhr.responseType = "blob";
        xhr.send();
      },
      /**
       * @param {Object} path
       * @param {?} attributes
       * @return {undefined}
       */
      init : function(path, attributes) {
        this.options = $.extend(this.options, attributes);
        this.img = error(path) || $.$new("img", {}, {
          "max-width" : "none",
          "max-height" : "none"
        }).jAppendTo($.$new("div").jAddClass("magic-temporary-img").jSetCss({
          position : "absolute",
          top : -1E4,
          width : 10,
          height : 10,
          overflow : "hidden"
        }).jAppendTo(document.body)).jStore("new", true);
        if ($.jBrowser.features.xhr2 && (this.options.xhr && "string" == $.jTypeOf(path))) {
          this.loadBlob(path);
          return;
        }
        var thumbSource = function() {
          if (this.isReady()) {
            this._handlers.onload.call(this);
          } else {
            this._handlers.onerror.call(this);
          }
          /** @type {null} */
          thumbSource = null;
        }.jBind(this);
        this._bind();
        if ("string" == $.jTypeOf(path)) {
          /** @type {Object} */
          this.img.src = path;
        } else {
          if ($.jBrowser.trident && (5 == $.jBrowser.version && $.jBrowser.ieMode < 9)) {
            this.img.onreadystatechange = function() {
              if (/loaded|complete/.test(this.img.readyState)) {
                /** @type {null} */
                this.img.onreadystatechange = null;
                if (thumbSource) {
                  thumbSource();
                }
              }
            }.jBind(this);
          }
          this.img.src = path.getAttribute("src");
        }
        if (this.img) {
          if (this.img.complete) {
            if (thumbSource) {
              this._timer = thumbSource.jDelay(100);
            }
          }
        }
      },
      /**
       * @return {?}
       */
      destroy : function() {
        this._unbind();
        this._cleanup();
        /** @type {boolean} */
        this.ready = false;
        return this;
      },
      /**
       * @return {?}
       */
      isReady : function() {
        var img = this.img;
        return img.naturalWidth ? img.naturalWidth > 0 : img.readyState ? "complete" == img.readyState : img.width > 0;
      },
      /**
       * @return {?}
       */
      jGetSize : function() {
        return this.size || (this.size = {
          width : this.img.naturalWidth || this.img.width,
          height : this.img.naturalHeight || this.img.height
        });
      }
    });
  })(Zepto);
  (function($) {
    if (!$) {
      throw "MagicJS not found";
    }
    if ($.FX) {
      return;
    }
    var b = $.$;
    $.FX = new $.Class({
      /**
       * @param {Object} element
       * @param {?} attributes
       * @return {undefined}
       */
      init : function(element, attributes) {
        var test;
        this.el = $.$(element);
        this.options = $.extend(this.options, attributes);
        /** @type {boolean} */
        this.timer = false;
        this.easeFn = this.cubicBezierAtTime;
        test = $.FX.Transition[this.options.transition] || this.options.transition;
        if ("function" === $.jTypeOf(test)) {
          this.easeFn = test;
        } else {
          this.cubicBezier = this.parseCubicBezier(test) || this.parseCubicBezier("ease");
        }
        if ("string" == $.jTypeOf(this.options.cycles)) {
          /** @type {number} */
          this.options.cycles = "infinite" === this.options.cycles ? Infinity : parseInt(this.options.cycles) || 1;
        }
      },
      options : {
        fps : 60,
        duration : 600,
        transition : "ease",
        cycles : 1,
        direction : "normal",
        onStart : $.$F,
        onComplete : $.$F,
        onBeforeRender : $.$F,
        onAfterRender : $.$F,
        forceAnimation : false,
        roundCss : false
      },
      styles : null,
      cubicBezier : null,
      easeFn : null,
      /**
       * @param {Object} value
       * @return {undefined}
       */
      setTransition : function(value) {
        /** @type {Object} */
        this.options.transition = value;
        value = $.FX.Transition[this.options.transition] || this.options.transition;
        if ("function" === $.jTypeOf(value)) {
          /** @type {Object} */
          this.easeFn = value;
        } else {
          this.easeFn = this.cubicBezierAtTime;
          this.cubicBezier = this.parseCubicBezier(value) || this.parseCubicBezier("ease");
        }
      },
      /**
       * @param {Object} event
       * @return {?}
       */
      start : function(event) {
        /** @type {RegExp} */
        var rhtml = /\%$/;
        var key;
        /** @type {Object} */
        this.styles = event;
        /** @type {number} */
        this.cycle = 0;
        /** @type {number} */
        this.state = 0;
        /** @type {number} */
        this.curFrame = 0;
        this.pStyles = {};
        /** @type {boolean} */
        this.alternate = "alternate" === this.options.direction || "alternate-reverse" === this.options.direction;
        /** @type {boolean} */
        this.continuous = "continuous" === this.options.direction || "continuous-reverse" === this.options.direction;
        for (key in this.styles) {
          if (rhtml.test(this.styles[key][0])) {
            /** @type {boolean} */
            this.pStyles[key] = true;
          }
          if ("reverse" === this.options.direction || ("alternate-reverse" === this.options.direction || "continuous-reverse" === this.options.direction)) {
            this.styles[key].reverse();
          }
        }
        this.startTime = $.now();
        this.finishTime = this.startTime + this.options.duration;
        this.options.onStart.call();
        if (0 === this.options.duration) {
          this.render(1);
          this.options.onComplete.call();
        } else {
          this.loopBind = this.loop.jBind(this);
          if (!this.options.forceAnimation && $.jBrowser.features.requestAnimationFrame) {
            this.timer = $.jBrowser.requestAnimationFrame.call(window, this.loopBind);
          } else {
            this.timer = this.loopBind.interval(Math.round(1E3 / this.options.fps));
          }
        }
        return this;
      },
      /**
       * @return {undefined}
       */
      stopAnimation : function() {
        if (this.timer) {
          if (!this.options.forceAnimation && ($.jBrowser.features.requestAnimationFrame && $.jBrowser.cancelAnimationFrame)) {
            $.jBrowser.cancelAnimationFrame.call(window, this.timer);
          } else {
            clearInterval(this.timer);
          }
          /** @type {boolean} */
          this.timer = false;
        }
      },
      /**
       * @param {boolean} val
       * @return {?}
       */
      stop : function(val) {
        val = $.defined(val) ? val : false;
        this.stopAnimation();
        if (val) {
          this.render(1);
          this.options.onComplete.jDelay(10);
        }
        return this;
      },
      /**
       * @param {number} from
       * @param {number} to
       * @param {number} deepDataAndEvents
       * @return {?}
       */
      calc : function(from, to, deepDataAndEvents) {
        /** @type {number} */
        from = parseFloat(from);
        /** @type {number} */
        to = parseFloat(to);
        return(to - from) * deepDataAndEvents + from;
      },
      /**
       * @return {?}
       */
      loop : function() {
        var time = $.now();
        /** @type {number} */
        var seconds = (time - this.startTime) / this.options.duration;
        /** @type {number} */
        var v = Math.floor(seconds);
        if (time >= this.finishTime && v >= this.options.cycles) {
          this.stopAnimation();
          this.render(1);
          this.options.onComplete.jDelay(10);
          return this;
        }
        if (this.alternate && this.cycle < v) {
          var key;
          for (key in this.styles) {
            this.styles[key].reverse();
          }
        }
        /** @type {number} */
        this.cycle = v;
        if (!this.options.forceAnimation && $.jBrowser.features.requestAnimationFrame) {
          this.timer = $.jBrowser.requestAnimationFrame.call(window, this.loopBind);
        }
        this.render((this.continuous ? v : 0) + this.easeFn(seconds % 1));
      },
      /**
       * @param {number} deepDataAndEvents
       * @return {undefined}
       */
      render : function(deepDataAndEvents) {
        var token = {};
        /** @type {number} */
        var L = deepDataAndEvents;
        var key;
        for (key in this.styles) {
          if ("opacity" === key) {
            /** @type {number} */
            token[key] = Math.round(this.calc(this.styles[key][0], this.styles[key][1], deepDataAndEvents) * 100) / 100;
          } else {
            token[key] = this.calc(this.styles[key][0], this.styles[key][1], deepDataAndEvents);
            if (this.pStyles[key]) {
              token[key] += "%";
            }
          }
        }
        this.options.onBeforeRender(token, this.el);
        this.set(token);
        this.options.onAfterRender(token, this.el);
      },
      /**
       * @param {string} val
       * @return {?}
       */
      set : function(val) {
        return this.el.jSetCss(val);
      },
      /**
       * @param {string} name
       * @return {?}
       */
      parseCubicBezier : function(name) {
        var i;
        /** @type {null} */
        var c = null;
        if ("string" !== $.jTypeOf(name)) {
          return null;
        }
        switch(name) {
          case "linear":
            c = b([0, 0, 1, 1]);
            break;
          case "ease":
            c = b([0.25, 0.1, 0.25, 1]);
            break;
          case "ease-in":
            c = b([0.42, 0, 1, 1]);
            break;
          case "ease-out":
            c = b([0, 0, 0.58, 1]);
            break;
          case "ease-in-out":
            c = b([0.42, 0, 0.58, 1]);
            break;
          case "easeInSine":
            c = b([0.47, 0, 0.745, 0.715]);
            break;
          case "easeOutSine":
            c = b([0.39, 0.575, 0.565, 1]);
            break;
          case "easeInOutSine":
            c = b([0.445, 0.05, 0.55, 0.95]);
            break;
          case "easeInQuad":
            c = b([0.55, 0.085, 0.68, 0.53]);
            break;
          case "easeOutQuad":
            c = b([0.25, 0.46, 0.45, 0.94]);
            break;
          case "easeInOutQuad":
            c = b([0.455, 0.03, 0.515, 0.955]);
            break;
          case "easeInCubic":
            c = b([0.55, 0.055, 0.675, 0.19]);
            break;
          case "easeOutCubic":
            c = b([0.215, 0.61, 0.355, 1]);
            break;
          case "easeInOutCubic":
            c = b([0.645, 0.045, 0.355, 1]);
            break;
          case "easeInQuart":
            c = b([0.895, 0.03, 0.685, 0.22]);
            break;
          case "easeOutQuart":
            c = b([0.165, 0.84, 0.44, 1]);
            break;
          case "easeInOutQuart":
            c = b([0.77, 0, 0.175, 1]);
            break;
          case "easeInQuint":
            c = b([0.755, 0.05, 0.855, 0.06]);
            break;
          case "easeOutQuint":
            c = b([0.23, 1, 0.32, 1]);
            break;
          case "easeInOutQuint":
            c = b([0.86, 0, 0.07, 1]);
            break;
          case "easeInExpo":
            c = b([0.95, 0.05, 0.795, 0.035]);
            break;
          case "easeOutExpo":
            c = b([0.19, 1, 0.22, 1]);
            break;
          case "easeInOutExpo":
            c = b([1, 0, 0, 1]);
            break;
          case "easeInCirc":
            c = b([0.6, 0.04, 0.98, 0.335]);
            break;
          case "easeOutCirc":
            c = b([0.075, 0.82, 0.165, 1]);
            break;
          case "easeInOutCirc":
            c = b([0.785, 0.135, 0.15, 0.86]);
            break;
          case "easeInBack":
            c = b([0.6, -0.28, 0.735, 0.045]);
            break;
          case "easeOutBack":
            c = b([0.175, 0.885, 0.32, 1.275]);
            break;
          case "easeInOutBack":
            c = b([0.68, -0.55, 0.265, 1.55]);
            break;
          default:
            name = name.replace(/\s/g, "");
            if (name.match(/^cubic-bezier\((?:-?[0-9\.]{0,}[0-9]{1,},){3}(?:-?[0-9\.]{0,}[0-9]{1,})\)$/)) {
              c = name.replace(/^cubic-bezier\s*\(|\)$/g, "").split(",");
              /** @type {number} */
              i = c.length - 1;
              for (;i >= 0;i--) {
                /** @type {number} */
                c[i] = parseFloat(c[i]);
              }
            }
          ;
        }
        return b(c);
      },
      /**
       * @param {number} t
       * @return {?}
       */
      cubicBezierAtTime : function(t) {
        /**
         * @param {?} t
         * @return {?}
         */
        function sampleCurveX(t) {
          return((ax * t + bx) * t + cx) * t;
        }
        /**
         * @param {?} t
         * @return {?}
         */
        function sampleCurveY(t) {
          return((ay * t + by) * t + cy) * t;
        }
        /**
         * @param {number} t
         * @return {?}
         */
        function sampleCurveDerivativeX(t) {
          return(3 * ax * t + 2 * bx) * t + cx;
        }
        /**
         * @param {number} duration
         * @return {?}
         */
        function solveEpsilon(duration) {
          return 1 / (200 * duration);
        }
        /**
         * @param {number} x
         * @param {?} epsilon
         * @return {?}
         */
        function solve(x, epsilon) {
          return sampleCurveY(solveCurveX(x, epsilon));
        }
        /**
         * @param {number} x
         * @param {?} epsilon
         * @return {?}
         */
        function solveCurveX(x, epsilon) {
          /**
           * @param {number} n
           * @return {?}
           */
          function fabs(n) {
            if (n >= 0) {
              return n;
            } else {
              return 0 - n;
            }
          }
          var t0;
          var t1;
          var t2;
          var x2;
          var d2;
          var Z;
          /** @type {number} */
          t2 = x;
          /** @type {number} */
          Z = 0;
          for (;Z < 8;Z++) {
            /** @type {number} */
            x2 = sampleCurveX(t2) - x;
            if (fabs(x2) < epsilon) {
              return t2;
            }
            d2 = sampleCurveDerivativeX(t2);
            if (fabs(d2) < 1E-6) {
              break;
            }
            /** @type {number} */
            t2 = t2 - x2 / d2;
          }
          /** @type {number} */
          t0 = 0;
          /** @type {number} */
          t1 = 1;
          /** @type {number} */
          t2 = x;
          if (t2 < t0) {
            return t0;
          }
          if (t2 > t1) {
            return t1;
          }
          for (;t0 < t1;) {
            x2 = sampleCurveX(t2);
            if (fabs(x2 - x) < epsilon) {
              return t2;
            }
            if (x > x2) {
              t0 = t2;
            } else {
              t1 = t2;
            }
            t2 = (t1 - t0) * 0.5 + t0;
          }
          return t2;
        }
        /** @type {number} */
        var ax = 0;
        /** @type {number} */
        var bx = 0;
        /** @type {number} */
        var cx = 0;
        /** @type {number} */
        var ay = 0;
        /** @type {number} */
        var by = 0;
        /** @type {number} */
        var cy = 0;
        var duration = this.options.duration;
        /** @type {number} */
        cx = 3 * this.cubicBezier[0];
        /** @type {number} */
        bx = 3 * (this.cubicBezier[2] - this.cubicBezier[0]) - cx;
        /** @type {number} */
        ax = 1 - cx - bx;
        /** @type {number} */
        cy = 3 * this.cubicBezier[1];
        /** @type {number} */
        by = 3 * (this.cubicBezier[3] - this.cubicBezier[1]) - cy;
        /** @type {number} */
        ay = 1 - cy - by;
        return solve(t, solveEpsilon(duration));
      }
    });
    $.FX.Transition = {
      linear : "linear",
      sineIn : "easeInSine",
      sineOut : "easeOutSine",
      expoIn : "easeInExpo",
      expoOut : "easeOutExpo",
      quadIn : "easeInQuad",
      quadOut : "easeOutQuad",
      cubicIn : "easeInCubic",
      cubicOut : "easeOutCubic",
      backIn : "easeInBack",
      backOut : "easeOutBack",
      /**
       * @param {number} time
       * @param {Array} period
       * @return {?}
       */
      elasticIn : function(time, period) {
        period = period || [];
        return Math.pow(2, 10 * --time) * Math.cos(20 * time * Math.PI * (period[0] || 1) / 3);
      },
      /**
       * @param {number} b
       * @param {(Array|string)} period
       * @return {?}
       */
      elasticOut : function(b, period) {
        return 1 - $.FX.Transition.elasticIn(1 - b, period);
      },
      /**
       * @param {number} b
       * @return {?}
       */
      bounceIn : function(b) {
        /** @type {number} */
        var start = 0;
        /** @type {number} */
        var step = 1;
        for (;1;start += step, step /= 2) {
          if (b >= (7 - 4 * start) / 11) {
            return step * step - Math.pow((11 - 6 * start - 11 * b) / 4, 2);
          }
        }
      },
      /**
       * @param {number} b
       * @return {?}
       */
      bounceOut : function(b) {
        return 1 - $.FX.Transition.bounceIn(1 - b);
      },
      /**
       * @param {?} $slides
       * @return {?}
       */
      none : function($slides) {
        return 0;
      }
    };
  })(Zepto);
  (function($) {
    if (!$) {
      throw "MagicJS not found";
    }
    if ($.PFX) {
      return;
    }
    var selectElement = $.$;
    $.PFX = new $.Class($.FX, {
      /**
       * @param {(Array|string)} element
       * @param {?} attributes
       * @return {undefined}
       */
      init : function(element, attributes) {
        /** @type {(Array|string)} */
        this.el_arr = element;
        this.options = $.extend(this.options, attributes);
        /** @type {boolean} */
        this.timer = false;
        this.$parent.init();
      },
      /**
       * @param {Array} args
       * @return {?}
       */
      start : function(args) {
        /** @type {RegExp} */
        var rhtml = /\%$/;
        var a;
        var i;
        var cols = args.length;
        /** @type {Array} */
        this.styles_arr = args;
        /** @type {Array} */
        this.pStyles_arr = new Array(cols);
        /** @type {number} */
        i = 0;
        for (;i < cols;i++) {
          this.pStyles_arr[i] = {};
          for (a in args[i]) {
            if (rhtml.test(args[i][a][0])) {
              /** @type {boolean} */
              this.pStyles_arr[i][a] = true;
            }
            if ("reverse" === this.options.direction || ("alternate-reverse" === this.options.direction || "continuous-reverse" === this.options.direction)) {
              this.styles_arr[i][a].reverse();
            }
          }
        }
        this.$parent.start([]);
        return this;
      },
      /**
       * @param {number} deepDataAndEvents
       * @return {undefined}
       */
      render : function(deepDataAndEvents) {
        /** @type {number} */
        var i = 0;
        for (;i < this.el_arr.length;i++) {
          this.el = $.$(this.el_arr[i]);
          this.styles = this.styles_arr[i];
          this.pStyles = this.pStyles_arr[i];
          this.$parent.render(deepDataAndEvents);
        }
      }
    });
  })(Zepto);
  (function($) {
    if (!$) {
      throw "MagicJS not found";return;
    }
    if ($.Tooltip) {
      return;
    }
    var selectElement = $.$;
    /**
     * @param {Object} element
     * @param {?} text
     * @return {undefined}
     */
    $.Tooltip = function(element, text) {
      var elem = this.tooltip = $.$new("div", null, {
        position : "absolute",
        "z-index" : 999
      }).jAddClass("MagicToolboxTooltip");
      $.$(element).jAddEvent("mouseover", function() {
        elem.jAppendTo(document.body);
      });
      $.$(element).jAddEvent("mouseout", function() {
        elem.jRemove();
      });
      $.$(element).jAddEvent("mousemove", function(c) {
        /**
         * @param {number} far
         * @param {number} near
         * @param {number} n
         * @return {?}
         */
        function isPowerOfTwo(far, near, n) {
          return n < (far - near) / 2 ? n : n > (far + near) / 2 ? n - near : (far - near) / 2;
        }
        /** @type {number} */
        var margin = 20;
        var elementPos = $.$(c).jGetPageXY();
        var textSize = elem.jGetSize();
        var renderTarget = $.$(window).jGetSize();
        var containerPos = $.$(window).jGetScroll();
        elem.jSetCss({
          left : containerPos.x + isPowerOfTwo(renderTarget.width, textSize.width + 2 * margin, elementPos.x - containerPos.x) + margin,
          top : containerPos.y + isPowerOfTwo(renderTarget.height, textSize.height + 2 * margin, elementPos.y - containerPos.y) + margin
        });
      });
      this.text(text);
    };
    /**
     * @param {?} text
     * @return {undefined}
     */
    $.Tooltip.prototype.text = function(text) {
      if (this.tooltip.firstChild) {
        this.tooltip.removeChild(this.tooltip.firstChild);
      }
      this.tooltip.append(document.createTextNode(text));
    };
  })(Zepto);
  (function($) {
    if (!$) {
      throw "MagicJS not found";return;
    }
    if ($.MessageBox) {
      return;
    }
    var selectElement = $.$;
    /**
     * @param {?} msg
     * @param {string} params
     * @param {Object} body
     * @param {(number|string)} hash
     * @return {undefined}
     */
    $.Message = function(msg, params, body, hash) {
      /** @type {null} */
      this.hideTimer = null;
      this.messageBox = $.$new("span", null, {
        position : "absolute",
        "z-index" : 999,
        visibility : "hidden",
        opacity : 0.8
      }).jAddClass(hash || "").jAppendTo(body || document.body);
      this.setMessage(msg);
      this.show(params);
    };
    /**
     * @param {string} speed
     * @return {undefined}
     */
    $.Message.prototype.show = function(speed) {
      this.messageBox.show();
      this.hideTimer = this.hide.jBind(this).jDelay($.ifndef(speed, 5E3));
    };
    /**
     * @param {string} duration
     * @return {undefined}
     */
    $.Message.prototype.hide = function(duration) {
      clearTimeout(this.hideTimer);
      /** @type {null} */
      this.hideTimer = null;
      if (this.messageBox && !this.hideFX) {
        this.hideFX = (new Zepto.FX(this.messageBox, {
          duration : $.ifndef(duration, 500),
          onComplete : function() {
            this.messageBox.kill();
            delete this.messageBox;
            /** @type {null} */
            this.hideFX = null;
          }.jBind(this)
        })).start({
          opacity : [this.messageBox.jGetCss("opacity"), 0]
        });
      }
    };
    /**
     * @param {?} msg
     * @return {undefined}
     */
    $.Message.prototype.setMessage = function(msg) {
      if (this.messageBox.firstChild) {
        this.tooltip.removeChild(this.messageBox.firstChild);
      }
      this.messageBox.append(document.createTextNode(msg));
    };
  })(Zepto);
  (function($) {
    if (!$) {
      throw "MagicJS not found";
    }
    if ($.Options) {
      return;
    }
    var match = $.$;
    /** @type {null} */
    var data = null;
    var types = {
      "boolean" : 1,
      array : 2,
      number : 3,
      "function" : 4,
      string : 100
    };
    var object = {
      /**
       * @param {Object} param
       * @param {(Object|string)} name
       * @param {boolean} element
       * @return {?}
       */
      "boolean" : function(param, name, element) {
        if ("boolean" != $.jTypeOf(name)) {
          if (element || "string" != $.jTypeOf(name)) {
            return false;
          } else {
            if (!/^(true|false)$/.test(name)) {
              return false;
            } else {
              name = name.jToBool();
            }
          }
        }
        if (param.hasOwnProperty("enum") && !match(param["enum"]).contains(name)) {
          return false;
        }
        /** @type {(Object|string)} */
        data = name;
        return true;
      },
      /**
       * @param {Object} param
       * @param {string} str
       * @param {?} state
       * @return {?}
       */
      string : function(param, str, state) {
        if ("string" !== $.jTypeOf(str)) {
          return false;
        } else {
          if (param.hasOwnProperty("enum") && !match(param["enum"]).contains(str)) {
            return false;
          } else {
            /** @type {string} */
            data = "" + str;
            return true;
          }
        }
      },
      /**
       * @param {Object} options
       * @param {string} value
       * @param {boolean} n
       * @return {?}
       */
      number : function(options, value, n) {
        /** @type {boolean} */
        var P = false;
        /** @type {RegExp} */
        var rchecked = /%$/;
        /** @type {boolean} */
        var unit = $.jTypeOf(value) == "string" && rchecked.test(value);
        if (n && !"number" == typeof value) {
          return false;
        }
        /** @type {number} */
        value = parseFloat(value);
        if (isNaN(value)) {
          return false;
        }
        if (isNaN(options.minimum)) {
          /** @type {number} */
          options.minimum = Number.NEGATIVE_INFINITY;
        }
        if (isNaN(options.maximum)) {
          /** @type {number} */
          options.maximum = Number.POSITIVE_INFINITY;
        }
        if (options.hasOwnProperty("enum") && !match(options["enum"]).contains(value)) {
          return false;
        }
        if (options.minimum > value || value > options.maximum) {
          return false;
        }
        /** @type {(number|string)} */
        data = unit ? value + "%" : value;
        return true;
      },
      /**
       * @param {?} ar
       * @param {Object} b
       * @param {?} elements
       * @return {?}
       */
      array : function(ar, b, elements) {
        if ("string" === $.jTypeOf(b)) {
          try {
            /** @type {*} */
            b = window.JSON.parse(b);
          } catch (R) {
            return false;
          }
        }
        if ($.jTypeOf(b) === "array") {
          /** @type {Object} */
          data = b;
          return true;
        } else {
          return false;
        }
      },
      /**
       * @param {?} oFunctionBody
       * @param {Object} obj
       * @param {?} args
       * @return {?}
       */
      "function" : function(oFunctionBody, obj, args) {
        if ($.jTypeOf(obj) === "function") {
          /** @type {Object} */
          data = obj;
          return true;
        } else {
          return false;
        }
      }
    };
    /**
     * @param {Object} info
     * @param {Object} fn
     * @param {boolean} capture
     * @return {?}
     */
    var add = function(info, fn, capture) {
      var msgs;
      msgs = info.hasOwnProperty("oneOf") ? info.oneOf : [info];
      if ("array" != $.jTypeOf(msgs)) {
        return false;
      }
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var maxRange = msgs.length - 1;
      for (;i <= maxRange;i++) {
        if (object[msgs[i].type](msgs[i], fn, capture)) {
          return true;
        }
      }
      return false;
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    var restoreScript = function(elem) {
      var i;
      var j;
      var T;
      var ruleCount;
      var tempi;
      if (elem.hasOwnProperty("oneOf")) {
        ruleCount = elem.oneOf.length;
        /** @type {number} */
        i = 0;
        for (;i < ruleCount;i++) {
          /** @type {number} */
          j = i + 1;
          for (;j < ruleCount;j++) {
            if (types[elem.oneOf[i]["type"]] > types[elem.oneOf[j].type]) {
              tempi = elem.oneOf[i];
              elem.oneOf[i] = elem.oneOf[j];
              elem.oneOf[j] = tempi;
            }
          }
        }
      }
      return elem;
    };
    /**
     * @param {Object} info
     * @return {?}
     */
    var process = function(info) {
      var msgs;
      msgs = info.hasOwnProperty("oneOf") ? info.oneOf : [info];
      if ("array" != $.jTypeOf(msgs)) {
        return false;
      }
      /** @type {number} */
      var type = msgs.length - 1;
      for (;type >= 0;type--) {
        if (!msgs[type].type || !types.hasOwnProperty(msgs[type].type)) {
          return false;
        }
        if ($.defined(msgs[type]["enum"])) {
          if ("array" !== $.jTypeOf(msgs[type]["enum"])) {
            return false;
          }
          /** @type {number} */
          var i = msgs[type]["enum"].length - 1;
          for (;i >= 0;i--) {
            if (!object[msgs[type].type]({
              type : msgs[type].type
            }, msgs[type]["enum"][i], true)) {
              return false;
            }
          }
        }
      }
      if (info.hasOwnProperty("default") && !add(info, info["default"], true)) {
        return false;
      }
      return true;
    };
    /**
     * @param {Object} condition
     * @return {undefined}
     */
    var State = function(condition) {
      this.schema = {};
      this.options = {};
      this.parseSchema(condition);
    };
    $.extend(State.prototype, {
      /**
       * @param {Object} query
       * @return {undefined}
       */
      parseSchema : function(query) {
        var part;
        var name;
        var S;
        for (part in query) {
          if (!query.hasOwnProperty(part)) {
            continue;
          }
          name = (part + "").jTrim().jCamelize();
          if (!this.schema.hasOwnProperty(name)) {
            this.schema[name] = restoreScript(query[part]);
            if (!process(this.schema[name])) {
              throw "Incorrect definition of the '" + part + "' parameter in " + query;
            }
            this.options[name] = undefined;
          }
        }
      },
      /**
       * @param {number} name
       * @param {Object} value
       * @return {undefined}
       */
      set : function(name, value) {
        name = (name + "").jTrim().jCamelize();
        if ($.jTypeOf(value) == "string") {
          value = value.jTrim();
        }
        if (this.schema.hasOwnProperty(name)) {
          /** @type {Object} */
          data = value;
          if (add(this.schema[name], value)) {
            this.options[name] = data;
          }
          /** @type {null} */
          data = null;
        }
      },
      /**
       * @param {number} attr
       * @return {?}
       */
      get : function(attr) {
        attr = (attr + "").jTrim().jCamelize();
        if (this.schema.hasOwnProperty(attr)) {
          return $.defined(this.options[attr]) ? this.options[attr] : this.schema[attr]["default"];
        }
      },
      /**
       * @param {Object} attrs
       * @return {undefined}
       */
      fromJSON : function(attrs) {
        var attr;
        for (attr in attrs) {
          this.set(attr, attrs[attr]);
        }
      },
      /**
       * @return {?}
       */
      getJSON : function() {
        var obj = $.extend({}, this.options);
        var key;
        for (key in obj) {
          if (undefined === obj[key] && undefined !== this.schema[key]["default"]) {
            obj[key] = this.schema[key]["default"];
          }
        }
        return obj;
      },
      /**
       * @param {string} str
       * @return {undefined}
       */
      fromString : function(str) {
        match(str.split(";")).jEach(match(function(pair) {
          pair = pair.split(":");
          this.set(pair.shift().jTrim(), pair.join(":"));
        }).jBind(this));
      },
      /**
       * @param {number} path
       * @return {?}
       */
      exists : function(path) {
        path = (path + "").jTrim().jCamelize();
        return this.schema.hasOwnProperty(path);
      },
      /**
       * @param {number} key
       * @return {?}
       */
      isset : function(key) {
        key = (key + "").jTrim().jCamelize();
        return this.exists(key) && $.defined(this.options[key]);
      },
      /**
       * @param {number} name
       * @return {undefined}
       */
      jRemove : function(name) {
        name = (name + "").jTrim().jCamelize();
        if (this.exists(name)) {
          delete this.options[name];
          delete this.schema[name];
        }
      }
    });
    /** @type {function (Object): undefined} */
    $.Options = State;
  })(Zepto);
  (function(self) {
    if (!self) {
      throw "MagicJS not found";return;
    }
    var $ = self.$;
    if (self.SVGImage) {
      return;
    }
    /** @type {string} */
    var svgNameSpace = "http://www.w3.org/2000/svg";
    /** @type {string} */
    var XLINK = "http://www.w3.org/1999/xlink";
    /**
     * @param {Object} rows
     * @return {undefined}
     */
    var render = function(rows) {
      this.filters = {};
      this.originalImage = $(rows);
      this.canvas = $(document.createElementNS(svgNameSpace, "svg"));
      this.canvas.setAttribute("width", this.originalImage.naturalWidth || this.originalImage.width);
      this.canvas.setAttribute("height", this.originalImage.naturalHeight || this.originalImage.height);
      this.image = $(document.createElementNS(svgNameSpace, "image"));
      this.image.setAttributeNS(XLINK, "href", this.originalImage.getAttribute("src"));
      this.image.setAttribute("width", "100%");
      this.image.setAttribute("height", "100%");
      this.image.jAppendTo(this.canvas);
    };
    /**
     * @return {?}
     */
    render.prototype.getNode = function() {
      return this.canvas;
    };
    /**
     * @param {number} value
     * @return {?}
     */
    render.prototype.blur = function(value) {
      if (Math.round(value) < 1) {
        return;
      }
      if (!this.filters.blur) {
        this.filters.blur = $(document.createElementNS(svgNameSpace, "filter"));
        this.filters.blur.setAttribute("id", "filterBlur");
        this.filters.blur.appendChild($(document.createElementNS(svgNameSpace, "feGaussianBlur")).setProps({
          "in" : "SourceGraphic",
          stdDeviation : value
        }));
        this.filters.blur.jAppendTo(this.canvas);
        this.image.setAttribute("filter", "url(#filterBlur)");
      } else {
        this.filters.blur.firstChild.setAttribute("stdDeviation", value);
      }
      return this;
    };
    /** @type {function (Object): undefined} */
    self.SVGImage = render;
  })(Zepto);
  var expandNav = function($) {
    var fn = $.$;
    /**
     * @param {DirectoryEntry} parent
     * @param {?} attributes
     * @return {undefined}
     */
    var run = function(parent, attributes) {
      this.settings = {
        cssPrefix : "magic",
        orientation : "horizontal",
        position : "bottom",
        size : {
          units : "px",
          width : "auto",
          height : "auto"
        },
        sides : ["height", "width"]
      };
      /** @type {DirectoryEntry} */
      this.parent = parent;
      /** @type {null} */
      this.root = null;
      /** @type {null} */
      this.wrapper = null;
      /** @type {null} */
      this.context = null;
      this.buttons = {};
      /** @type {Array} */
      this.items = [];
      /** @type {null} */
      this.selectedItem = null;
      /** @type {null} */
      this.scrollFX = null;
      /** @type {null} */
      this.resizeCallback = null;
      this.settings = $.extend(this.settings, attributes);
      /** @type {string} */
      this.rootCSS = this.settings.cssPrefix + "-thumbs";
      /** @type {string} */
      this.itemCSS = this.settings.cssPrefix + "-thumb";
      this.setupContent();
    };
    run.prototype = {
      /**
       * @return {undefined}
       */
      setupContent : function() {
        this.root = $.$new("div").jAddClass(this.rootCSS).jAddClass(this.rootCSS + "-" + this.settings.orientation).jSetCss({
          visibility : "hidden"
        });
        this.wrapper = $.$new("div").jAddClass(this.rootCSS + "-wrapper").jAppendTo(this.root);
        this.root.jAppendTo(this.parent);
        fn(["prev", "next"]).jEach(function(attr) {
          this.buttons[attr] = $.$new("button").jAddClass(this.rootCSS + "-button").jAddClass(this.rootCSS + "-button-" + attr).jAppendTo(this.root).jAddEvent("btnclick tap", function(el, _super) {
            fn(el).events[0].stop().stopQueue();
            fn(el).stopDistribution();
            this.scroll(_super);
          }.jBindAsEvent(this, attr));
        }.jBind(this));
        this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
        this.context = $.$new("ul").jAddEvent("btnclick tap", function(event) {
          event.stop();
        });
      },
      /**
       * @param {string} container
       * @return {?}
       */
      addItem : function(container) {
        var item = $.$new("li").jAddClass(this.itemCSS).append(container).jAppendTo(this.context);
        new $.ImageLoader(container, {
          oncomplete : this.reflow.jBind(this)
        });
        this.items.push(item);
        return item;
      },
      /**
       * @param {Object} item
       * @return {undefined}
       */
      selectItem : function(item) {
        var suiteView = this.selectedItem || this.context.byClass(this.itemCSS + "-selected")[0];
        if (suiteView) {
          fn(suiteView).jRemoveClass(this.itemCSS + "-selected");
        }
        this.selectedItem = fn(item);
        if (!this.selectedItem) {
          return;
        }
        this.selectedItem.jAddClass(this.itemCSS + "-selected");
        this.scroll(this.selectedItem);
      },
      /**
       * @return {undefined}
       */
      run : function() {
        if (this.wrapper !== this.context.parentNode) {
          fn(this.context).jAppendTo(this.wrapper);
          this.initDrag();
          fn(window).jAddEvent("resize", this.resizeCallback = this.reflow.jBind(this));
          this.run.jBind(this).jDelay(1);
          return;
        }
        var viewportSize = this.parent.jGetSize();
        if (viewportSize.height > 0 && viewportSize.height > viewportSize.width) {
          this.setOrientation("vertical");
        } else {
          this.setOrientation("horizontal");
        }
        this.reflow();
        this.root.jSetCss({
          visibility : ""
        });
      },
      /**
       * @return {undefined}
       */
      stop : function() {
        if (this.resizeCallback) {
          fn(window).jRemoveEvent("resize", this.resizeCallback);
        }
        this.root.kill();
      },
      /**
       * @param {string} b
       * @param {number} v
       * @return {undefined}
       */
      scroll : function(b, v) {
        var after = {
          x : 0,
          y : 0
        };
        /** @type {string} */
        var dir = "vertical" == this.settings.orientation ? "top" : "left";
        /** @type {string} */
        var prop = "vertical" == this.settings.orientation ? "height" : "width";
        /** @type {string} */
        var attr = "vertical" == this.settings.orientation ? "y" : "x";
        var end = this.context.parentNode.jGetSize()[prop];
        var elem = this.context.parentNode.jGetPosition();
        var start = this.context.jGetSize()[prop];
        var cur;
        var originalEvent;
        var _base;
        var P;
        var K;
        var T;
        var offset;
        /** @type {Array} */
        var t = [];
        if (this.scrollFX) {
          this.scrollFX.stop();
        } else {
          this.context.jSetCss("transition", $.jBrowser.cssTransformProp + String.fromCharCode(32) + "0s");
        }
        if (undefined === v) {
          /** @type {number} */
          v = 600;
        }
        cur = this.context.jGetPosition();
        if ("string" == $.jTypeOf(b)) {
          /** @type {number} */
          after[attr] = "next" == b ? Math.max(cur[dir] - elem[dir] - end, end - start) : Math.min(cur[dir] - elem[dir] + end, 0);
        } else {
          if ("element" == $.jTypeOf(b)) {
            originalEvent = b.jGetSize();
            _base = b.jGetPosition();
            /** @type {number} */
            after[attr] = Math.min(0, Math.max(end - start, cur[dir] + end / 2 - _base[dir] - originalEvent[prop] / 2));
          } else {
            return;
          }
        }
        if ($.jBrowser.gecko && "android" == $.jBrowser.platform || $.jBrowser.ieMode && $.jBrowser.ieMode < 10) {
          if ("string" == $.jTypeOf(b) && after[attr] == cur[dir] - elem[dir]) {
            cur[dir] += 0 === cur[dir] - elem[dir] ? 30 : -30;
          }
          /** @type {Array} */
          after["margin-" + dir] = [start <= end ? 0 : cur[dir] - elem[dir], after[attr]];
          delete after.x;
          delete after.y;
          if (!this.selectorsMoveFX) {
            this.selectorsMoveFX = new $.PFX([this.context], {
              duration : 500
            });
          }
          t.push(after);
          this.selectorsMoveFX.start(t);
          offset = after["margin-" + dir][1];
        } else {
          this.context.jSetCss({
            transition : $.jBrowser.cssTransformProp + String.fromCharCode(32) + v + "ms ease",
            transform : "translate3d(" + after.x + "px, " + after.y + "px, 0)"
          });
          offset = after[attr];
        }
        if (offset >= 0) {
          this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
        } else {
          this.buttons.prev.jRemoveClass(this.rootCSS + "-button-disabled");
        }
        if (offset <= end - start) {
          this.buttons.next.jAddClass(this.rootCSS + "-button-disabled");
        } else {
          this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled");
        }
        /** @type {null} */
        offset = null;
      },
      /**
       * @return {undefined}
       */
      initDrag : function() {
        var y;
        var K;
        var res;
        var offset;
        var taskComplete;
        var t;
        var px;
        var startX;
        var startY;
        var U;
        var b;
        var a;
        var v;
        var o = {
          x : 0,
          y : 0
        };
        var position;
        var prop;
        /** @type {number} */
        var O = 300;
        /**
         * @param {number} d
         * @return {?}
         */
        var c = function(d) {
          var angle;
          /** @type {number} */
          var value = 0;
          /** @type {number} */
          angle = 1.5;
          for (;angle <= 90;angle += 1.5) {
            value += d * Math.cos(angle / Math.PI / 2);
          }
          if (offset < 0) {
            value *= -1;
          }
          return value;
        };
        taskComplete = fn(function(e) {
          o = {
            x : 0,
            y : 0
          };
          /** @type {string} */
          position = "vertical" == this.settings.orientation ? "top" : "left";
          /** @type {string} */
          prop = "vertical" == this.settings.orientation ? "height" : "width";
          /** @type {string} */
          y = "vertical" == this.settings.orientation ? "y" : "x";
          a = this.context.parentNode.jGetSize()[prop];
          b = this.context.jGetSize()[prop];
          /** @type {number} */
          res = a - b;
          if (res >= 0) {
            return;
          }
          if (e.state == "dragstart") {
            if (undefined === v) {
              /** @type {number} */
              v = 0;
            }
            this.context.jSetCssProp("transition", $.jBrowser.cssTransformProp + String.fromCharCode(32) + "0ms");
            t = e[y];
            startY = e.y;
            startX = e.x;
            /** @type {boolean} */
            U = false;
          } else {
            if ("dragend" == e.state) {
              if (U) {
                return;
              }
              px = c(Math.abs(offset));
              v += px;
              if (v <= res) {
                /** @type {number} */
                v = res;
              }
              if (v >= 0) {
                /** @type {number} */
                v = 0;
              }
              o[y] = v;
              this.context.jSetCssProp("transition", $.jBrowser.cssTransformProp + String.fromCharCode(32) + O + "ms  cubic-bezier(.0, .0, .0, 1)");
              this.context.jSetCssProp("transform", "translate3d(" + o.x + "px, " + o.y + "px, 0px)");
              /** @type {number} */
              offset = 0;
            } else {
              if (U) {
                return;
              }
              if ("horizontal" == this.settings.orientation && Math.abs(e.x - startX) > Math.abs(e.y - startY) || "vertical" == this.settings.orientation && Math.abs(e.x - startX) < Math.abs(e.y - startY)) {
                e.stop();
                /** @type {number} */
                offset = e[y] - t;
                v += offset;
                o[y] = v;
                this.context.jSetCssProp("transform", "translate3d(" + o.x + "px, " + o.y + "px, 0px)");
                if (v >= 0) {
                  this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
                } else {
                  this.buttons.prev.jRemoveClass(this.rootCSS + "-button-disabled");
                }
                if (v <= res) {
                  this.buttons.next.jAddClass(this.rootCSS + "-button-disabled");
                } else {
                  this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled");
                }
              } else {
                /** @type {boolean} */
                U = true;
              }
            }
            t = e[y];
          }
        }).jBind(this);
        this.context.jAddEvent("touchdrag", taskComplete);
      },
      /**
       * @return {undefined}
       */
      reflow : function() {
        var _j;
        var frame;
        var l;
        var viewportSize = this.parent.jGetSize();
        if (viewportSize.height > 0 && viewportSize.height > viewportSize.width) {
          this.setOrientation("vertical");
        } else {
          this.setOrientation("horizontal");
        }
        /** @type {string} */
        _j = "vertical" == this.settings.orientation ? "height" : "width";
        frame = this.context.jGetSize()[_j];
        l = this.root.jGetSize()[_j];
        if (frame <= l) {
          this.root.jAddClass("no-buttons");
          this.context.jSetCssProp("transition", "").jGetSize();
          this.context.jSetCssProp("transform", "translate3d(0,0,0)");
          this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
          this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled");
        } else {
          this.root.jRemoveClass("no-buttons");
        }
        if (this.selectedItem) {
          this.scroll(this.selectedItem, 0);
        }
      },
      /**
       * @param {string} orientation
       * @return {undefined}
       */
      setOrientation : function(orientation) {
        if ("vertical" !== orientation && "horizontal" !== orientation || orientation == this.settings.orientation) {
          return;
        }
        this.root.jRemoveClass(this.rootCSS + "-" + this.settings.orientation);
        /** @type {string} */
        this.settings.orientation = orientation;
        this.root.jAddClass(this.rootCSS + "-" + this.settings.orientation);
        this.context.jSetCssProp("transition", "none").jGetSize();
        this.context.jSetCssProp("transform", "").jSetCssProp("margin", "");
      }
    };
    return run;
  }(Zepto);
  var $ = self.$;
  if (!self.jBrowser.cssTransform) {
    self.jBrowser.cssTransform = self.normalizeCSS("transform").dashize();
  }
  var options = {
    zoomOn : {
      type : "string",
      "enum" : ["click", "hover"],
      "default" : "hover"
    },
    zoomMode : {
      oneOf : [{
        type : "string",
        "enum" : ["zoom", "magnifier", "preview", "off"],
        "default" : "zoom"
      }, {
        type : "boolean",
        "enum" : [false]
      }],
      "default" : "zoom"
    },
    zoomWidth : {
      oneOf : [{
        type : "string",
        "enum" : ["auto"]
      }, {
        type : "number",
        minimum : 1
      }],
      "default" : "auto"
    },
    zoomHeight : {
      oneOf : [{
        type : "string",
        "enum" : ["auto"]
      }, {
        type : "number",
        minimum : 1
      }],
      "default" : "auto"
    },
    zoomPosition : {
      type : "string",
      "default" : "right"
    },
    zoomDistance : {
      type : "number",
      minimum : 0,
      "default" : 15
    },
    zoomCaption : {
      oneOf : [{
        type : "string",
        "enum" : ["bottom", "top", "off"],
        "default" : "off"
      }, {
        type : "boolean",
        "enum" : [false]
      }],
      "default" : "off"
    },
    expand : {
      oneOf : [{
        type : "string",
        "enum" : ["window", "fullscreen", "off"]
      }, {
        type : "boolean",
        "enum" : [false]
      }],
      "default" : "window"
    },
    expandZoomMode : {
      oneOf : [{
        type : "string",
        "enum" : ["zoom", "magnifier", "off"],
        "default" : "zoom"
      }, {
        type : "boolean",
        "enum" : [false]
      }],
      "default" : "zoom"
    },
    expandZoomOn : {
      type : "string",
      "enum" : ["click", "always"],
      "default" : "click"
    },
    expandCaption : {
      type : "boolean",
      "default" : true
    },
    closeOnClickOutside : {
      type : "boolean",
      "default" : true
    },
    hint : {
      oneOf : [{
        type : "string",
        "enum" : ["once", "always", "off"]
      }, {
        type : "boolean",
        "enum" : [false]
      }],
      "default" : "once"
    },
    upscale : {
      type : "boolean",
      "default" : true
    },
    variableZoom : {
      type : "boolean",
      "default" : false
    },
    lazyZoom : {
      type : "boolean",
      "default" : false
    },
    autostart : {
      type : "boolean",
      "default" : true
    },
    rightClick : {
      type : "boolean",
      "default" : false
    },
    transitionEffect : {
      type : "boolean",
      "default" : true
    },
    selectorTrigger : {
      type : "string",
      "enum" : ["click", "hover"],
      "default" : "click"
    },
    cssClass : {
      type : "string"
    },
    textHoverZoomHint : {
      type : "string",
      "default" : "Hover to zoom"
    },
    textClickZoomHint : {
      type : "string",
      "default" : "Click to zoom"
    },
    textExpandHint : {
      type : "string",
      "default" : "Click to expand"
    },
    textBtnClose : {
      type : "string",
      "default" : "Close"
    },
    textBtnNext : {
      type : "string",
      "default" : "Next"
    },
    textBtnPrev : {
      type : "string",
      "default" : "Previous"
    }
  };
  var attributes = {
    zoomMode : {
      oneOf : [{
        type : "string",
        "enum" : ["zoom", "magnifier", "off"],
        "default" : "zoom"
      }, {
        type : "boolean",
        "enum" : [false]
      }],
      "default" : "zoom"
    },
    expandZoomOn : {
      type : "string",
      "enum" : ["click"],
      "default" : "click"
    },
    textExpandHint : {
      type : "string",
      "default" : "Tap to expand"
    },
    textHoverZoomHint : {
      type : "string",
      "default" : "Touch to zoom"
    },
    textClickZoomHint : {
      type : "string",
      "default" : "Double tap to zoom"
    }
  };
  /** @type {string} */
  var MagicZoom = "MagicZoom";
  /** @type {string} */
  var name = "mz";
  /** @type {number} */
  var udataCur = 20;
  /** @type {Array} */
  var codeSegments = ["onZoomReady", "onUpdate", "onZoomIn", "onZoomOut", "onExpandOpen", "onExpandClose"];
  var graph;
  var normalized = {};
  var results = $([]);
  var later;
  /** @type {number} */
  var e = window.devicePixelRatio || 1;
  var E;
  /** @type {boolean} */
  var x = true;
  /** @type {string} */
  var f = self.jBrowser.features.perspective ? "translate3d(" : "translate(";
  /** @type {string} */
  var translateSuffix = self.jBrowser.features.perspective ? ",0)" : ")";
  /** @type {null} */
  var scrollIntervalId = null;
  var el = function() {
    var H;
    var K;
    var J;
    var I;
    var browsers;
    /** @type {Array} */
    browsers = ["", "#ff0000", 11, "normal", "", "center", "100%"];
    return browsers;
  }();
  /**
   * @param {string} url
   * @param {Object} el
   * @param {string} ui
   * @param {Object} options
   * @param {string} coords
   * @return {undefined}
   */
  var start = function(url, el, ui, options, coords) {
    this.small = {
      src : null,
      url : null,
      dppx : 1,
      node : null,
      state : 0,
      size : {
        width : 0,
        height : 0
      },
      loaded : false
    };
    this.zoom = {
      src : null,
      url : null,
      dppx : 1,
      node : null,
      state : 0,
      size : {
        width : 0,
        height : 0
      },
      loaded : false
    };
    if ("object" == self.jTypeOf(url)) {
      /** @type {string} */
      this.small = url;
    } else {
      if ("string" == self.jTypeOf(url)) {
        this.small.url = self.getAbsoluteURL(url);
      }
    }
    if ("object" == self.jTypeOf(el)) {
      /** @type {Object} */
      this.zoom = el;
    } else {
      if ("string" == self.jTypeOf(el)) {
        this.zoom.url = self.getAbsoluteURL(el);
      }
    }
    /** @type {string} */
    this.caption = ui;
    /** @type {Object} */
    this.options = options;
    /** @type {string} */
    this.origin = coords;
    /** @type {null} */
    this.callback = null;
    /** @type {null} */
    this.link = null;
    /** @type {null} */
    this.node = null;
  };
  start.prototype = {
    /**
     * @param {string} parent
     * @param {string} isRoot
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    parseNode : function(parent, isRoot, dataAndEvents) {
      var source = parent.byTag("img")[0];
      if (dataAndEvents) {
        this.small.node = source || self.$new("img").jAppendTo(parent);
      }
      if (e > 1) {
        this.small.url = parent.getAttribute("data-image-2x");
        if (this.small.url) {
          /** @type {number} */
          this.small.dppx = 2;
        }
        this.zoom.url = parent.getAttribute("data-zoom-image-2x");
        if (this.zoom.url) {
          /** @type {number} */
          this.zoom.dppx = 2;
        }
      }
      this.small.src = parent.getAttribute("data-image") || (parent.getAttribute("rev") || (source ? source.getAttribute("src") : null));
      if (this.small.src) {
        this.small.src = self.getAbsoluteURL(this.small.src);
      }
      this.small.url = this.small.url || this.small.src;
      if (this.small.url) {
        this.small.url = self.getAbsoluteURL(this.small.url);
      }
      this.zoom.src = parent.getAttribute("data-zoom-image") || parent.getAttribute("href");
      if (this.zoom.src) {
        this.zoom.src = self.getAbsoluteURL(this.zoom.src);
      }
      this.zoom.url = this.zoom.url || this.zoom.src;
      if (this.zoom.url) {
        this.zoom.url = self.getAbsoluteURL(this.zoom.url);
      }
      this.caption = parent.getAttribute("data-caption") || (parent.getAttribute("title") || isRoot);
      this.link = parent.getAttribute("data-link");
      /** @type {string} */
      this.origin = parent;
      return this;
    },
    /**
     * @param {string} name
     * @return {undefined}
     */
    loadImg : function(name) {
      /** @type {null} */
      var token = null;
      if (arguments.length > 1 && "function" === self.jTypeOf(arguments[1])) {
        token = arguments[1];
      }
      if (0 !== this[name].state) {
        if (this[name].loaded) {
          this.onload(token);
        }
        return;
      }
      if (this[name].url && (this[name].node && (!this[name].node.getAttribute("src") && !this[name].node.getAttribute("srcset")))) {
        this[name].node.setAttribute("src", this[name].url);
      }
      /** @type {number} */
      this[name].state = 1;
      new self.ImageLoader(this[name].node || this[name].url, {
        oncomplete : $(function(data) {
          /** @type {boolean} */
          this[name].loaded = true;
          /** @type {number} */
          this[name].state = data.ready ? 2 : -1;
          if (data.ready) {
            this[name].size = data.jGetSize();
            if (!this[name].node) {
              this[name].node = $(data.img);
              this[name].node.getAttribute("style");
              this[name].node.removeAttribute("style");
              this[name].size.width /= this[name].dppx;
              this[name].size.height /= this[name].dppx;
            } else {
              this[name].node.jSetCss({
                "max-width" : this[name].size.width,
                "max-height" : this[name].size.height
              });
              if (this[name].node.currentSrc && this[name].node.currentSrc != this[name].node.src) {
                this[name].url = this[name].node.currentSrc;
              } else {
                if (self.getAbsoluteURL(this[name].node.getAttribute("src") || "") != this[name].url) {
                  this[name].node.setAttribute("src", this[name].url);
                }
              }
            }
          }
          this.onload(token);
        }).jBind(this)
      });
    },
    /**
     * @return {undefined}
     */
    loadSmall : function() {
      this.loadImg("small", arguments[0]);
    },
    /**
     * @return {undefined}
     */
    loadZoom : function() {
      this.loadImg("zoom", arguments[0]);
    },
    /**
     * @return {undefined}
     */
    load : function() {
      /** @type {null} */
      this.callback = null;
      if (arguments.length > 0 && "function" === self.jTypeOf(arguments[0])) {
        this.callback = arguments[0];
      }
      this.loadSmall();
      this.loadZoom();
    },
    /**
     * @param {Function} first
     * @return {undefined}
     */
    onload : function(first) {
      if (first) {
        first.call(null, this);
      }
      if (this.callback && (this.small.loaded && this.zoom.loaded)) {
        this.callback.call(null, this);
        /** @type {null} */
        this.callback = null;
        return;
      }
    },
    /**
     * @return {?}
     */
    loaded : function() {
      return this.small.loaded && this.zoom.loaded;
    },
    /**
     * @return {?}
     */
    ready : function() {
      return 2 === this.small.state && 2 === this.zoom.state;
    },
    /**
     * @param {string} key
     * @return {?}
     */
    getURL : function(key) {
      /** @type {string} */
      var id = "small" == key ? "zoom" : "small";
      if (!this[key].loaded || this[key].loaded && 2 === this[key].state) {
        return this[key].url;
      } else {
        if (!this[id].loaded || this[id].loaded && 2 === this[id].state) {
          return this[id].url;
        } else {
          return null;
        }
      }
    },
    /**
     * @param {string} name
     * @return {?}
     */
    getNode : function(name) {
      /** @type {string} */
      var id = "small" == name ? "zoom" : "small";
      if (!this[name].loaded || this[name].loaded && 2 === this[name].state) {
        return this[name].node;
      } else {
        if (!this[id].loaded || this[id].loaded && 2 === this[id].state) {
          return this[id].node;
        } else {
          return null;
        }
      }
    },
    /**
     * @param {string} name
     * @return {?}
     */
    jGetSize : function(name) {
      /** @type {string} */
      var j = "small" == name ? "zoom" : "small";
      if (!this[name].loaded || this[name].loaded && 2 === this[name].state) {
        return this[name].size;
      } else {
        if (!this[j].loaded || this[j].loaded && 2 === this[j].state) {
          return this[j].size;
        } else {
          return{
            width : 0,
            height : 0
          };
        }
      }
    },
    /**
     * @param {string} id
     * @return {?}
     */
    getRatio : function(id) {
      /** @type {string} */
      var j = "small" == id ? "zoom" : "small";
      if (!this[id].loaded || this[id].loaded && 2 === this[id].state) {
        return this[id].dppx;
      } else {
        if (!this[j].loaded || this[j].loaded && 2 === this[j].state) {
          return this[j].dppx;
        } else {
          return 1;
        }
      }
    },
    /**
     * @param {string} node
     * @return {undefined}
     */
    setCurNode : function(node) {
      this.node = this.getNode(node);
    }
  };
  /**
   * @param {Object} defs
   * @param {Object} e
   * @return {undefined}
   */
  var init = function(defs, e) {
    this.options = new self.Options(options);
    this.option = $(function() {
      if (arguments.length > 1) {
        return this.set(arguments[0], arguments[1]);
      } else {
        return this.get(arguments[0]);
      }
    }).jBind(this.options);
    this.touchOptions = new self.Options(attributes);
    /** @type {Array} */
    this.additionalImages = [];
    /** @type {null} */
    this.image = null;
    /** @type {null} */
    this.primaryImage = null;
    this.placeholder = $(defs).jAddEvent("dragstart selectstart click", function(event) {
      event.stop();
    });
    /** @type {null} */
    this.id = null;
    /** @type {null} */
    this.node = null;
    /** @type {null} */
    this.originalImg = null;
    /** @type {null} */
    this.originalImgSrc = null;
    /** @type {null} */
    this.originalTitle = null;
    this.normalSize = {
      width : 0,
      height : 0
    };
    this.size = {
      width : 0,
      height : 0
    };
    this.zoomSize = {
      width : 0,
      height : 0
    };
    this.zoomSizeOrigin = {
      width : 0,
      height : 0
    };
    this.boundaries = {
      top : 0,
      left : 0,
      bottom : 0,
      right : 0
    };
    /** @type {boolean} */
    this.ready = false;
    /** @type {boolean} */
    this.expanded = false;
    /** @type {null} */
    this.activateTimer = null;
    /** @type {null} */
    this.resizeTimer = null;
    this.resizeCallback = $(function() {
      if (this.expanded) {
        this.image.node.jSetCss({
          "max-height" : Math.min(this.image.jGetSize("zoom").height, this.expandMaxHeight())
        });
        this.image.node.jSetCss({
          "max-width" : Math.min(this.image.jGetSize("zoom").width, this.expandMaxWidth())
        });
      }
      this.reflowZoom(arguments[0]);
    }).jBind(this);
    this.onResize = $(function(statement) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = $(this.resizeCallback).jDelay(10, "scroll" === statement.type);
    }).jBindAsEvent(this);
    /** @type {null} */
    this.lens = null;
    /** @type {null} */
    this.zoomBox = null;
    /** @type {null} */
    this.hint = null;
    /** @type {null} */
    this.hintMessage = null;
    /** @type {number} */
    this.hintRuns = 0;
    /** @type {boolean} */
    this.mobileZoomHint = true;
    /** @type {null} */
    this.loadingBox = null;
    /** @type {null} */
    this.loadTimer = null;
    /** @type {null} */
    this.thumb = null;
    /** @type {null} */
    this.expandBox = null;
    /** @type {null} */
    this.expandBg = null;
    /** @type {null} */
    this.expandCaption = null;
    /** @type {null} */
    this.expandStage = null;
    /** @type {null} */
    this.expandImageStage = null;
    /** @type {null} */
    this.expandFigure = null;
    /** @type {null} */
    this.expandControls = null;
    /** @type {null} */
    this.expandNav = null;
    /** @type {null} */
    this.expandThumbs = null;
    /** @type {Array} */
    this.expandGallery = [];
    this.buttons = {};
    this.start(e);
  };
  init.prototype = {
    /**
     * @param {number} hash
     * @return {undefined}
     */
    loadOptions : function(hash) {
      this.options.fromJSON(window[name + "Options"] || {});
      this.options.fromString(this.placeholder.getAttribute("data-options") || "");
      if (self.jBrowser.mobile) {
        this.options.fromJSON(this.touchOptions.getJSON());
        this.options.fromJSON(window[name + "MobileOptions"] || {});
        this.options.fromString(this.placeholder.getAttribute("data-mobile-options") || "");
      }
      if ("string" == self.jTypeOf(hash)) {
        this.options.fromString(hash || "");
      } else {
        this.options.fromJSON(hash || {});
      }
      if (this.option("cssClass")) {
        this.option("cssClass", this.option("cssClass").replace(",", " "));
      }
      if (false === this.option("zoomCaption")) {
        this.option("zoomCaption", "off");
      }
      if (false === this.option("hint")) {
        this.option("hint", "off");
      }
      switch(this.option("hint")) {
        case "off":
          /** @type {number} */
          this.hintRuns = 0;
          break;
        case "once":
          /** @type {number} */
          this.hintRuns = 2;
          break;
        case "always":
          /** @type {number} */
          this.hintRuns = Infinity;
          break;
      }
      if ("off" === this.option("zoomMode")) {
        this.option("zoomMode", false);
      }
      if ("off" === this.option("expand")) {
        this.option("expand", false);
      }
      if ("off" === this.option("expandZoomMode")) {
        this.option("expandZoomMode", false);
      }
      if (E) {
        if ("zoom" == this.option("zoomMode")) {
          this.option("zoomPosition", "inner");
        }
      }
      if (self.jBrowser.mobile && ("zoom" == this.option("zoomMode") && "inner" == this.option("zoomPosition"))) {
        if (this.option("expand")) {
          this.option("zoomMode", false);
        } else {
          this.option("zoomOn", "click");
        }
      }
    },
    /**
     * @param {?} event
     * @return {undefined}
     */
    start : function(event) {
      var parts;
      this.loadOptions(event);
      if (x && !this.option("autostart")) {
        return;
      }
      this.id = this.placeholder.getAttribute("id") || "mz-" + Math.floor(Math.random() * self.now());
      this.placeholder.setAttribute("id", this.id);
      this.node = self.$new("figure").jAddClass("mz-figure");
      process(this.placeholder);
      this.originalImg = this.placeholder.querySelector("img");
      this.originalImgSrc = this.originalImg ? this.originalImg.getAttribute("src") : null;
      this.originalTitle = $(this.placeholder).getAttribute("title");
      $(this.placeholder).removeAttribute("title");
      this.primaryImage = (new start).parseNode(this.placeholder, this.originalTitle, true);
      this.image = this.primaryImage;
      this.node.enclose(this.image.small.node).jAddClass(this.option("cssClass"));
      if (true !== this.option("rightClick")) {
        this.node.jAddEvent("contextmenu", function(event) {
          event.stop();
          return false;
        });
      }
      this.node.jAddClass("mz-" + this.option("zoomOn") + "-zoom");
      if (!this.option("expand")) {
        this.node.jAddClass("mz-no-expand");
      }
      this.lens = {
        node : self.$new("div", {
          "class" : "mz-lens"
        }, {
          top : 0
        }).jAppendTo(this.node),
        image : self.$new("img", {
          src : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        }, {
          position : "absolute",
          top : 0,
          left : 0
        }),
        width : 0,
        height : 0,
        pos : {
          x : 0,
          y : 0
        },
        spos : {
          x : 0,
          y : 0
        },
        size : {
          width : 0,
          height : 0
        },
        border : {
          x : 0,
          y : 0
        },
        dx : 0,
        dy : 0,
        innertouch : false,
        /**
         * @return {undefined}
         */
        hide : function() {
          if (self.jBrowser.features.transform) {
            this.node.jSetCss({
              transform : "translate(-10000px,-10000px)"
            });
          } else {
            this.node.jSetCss({
              top : -1E4
            });
          }
        }
      };
      this.lens.hide();
      this.lens.node.append(this.lens.image);
      this.zoomBox = {
        node : self.$new("div", {
          "class" : "mz-zoom-window"
        }, {
          top : -1E5
        }).jAddClass(this.option("cssClass")).jAppendTo(later),
        image : self.$new("img", {
          src : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        }, {
          position : "absolute"
        }),
        aspectRatio : 0,
        width : 0,
        height : 0,
        innerWidth : 0,
        innerHeight : 0,
        size : {
          width : "auto",
          wunits : "px",
          height : "auto",
          hunits : "px"
        },
        mode : this.option("zoomMode"),
        position : this.option("zoomPosition"),
        custom : false,
        active : false,
        activating : false,
        enabled : false,
        enable : $(function() {
          /** @type {boolean} */
          this.zoomBox.enabled = false !== arguments[0];
          this.node[this.zoomBox.enabled ? "jRemoveClass" : "jAddClass"]("mz-no-zoom");
        }).jBind(this),
        hide : $(function() {
          var tc = $(this.node).jFetch("cr");
          this.zoomBox.node.jRemoveEvent("transitionend");
          this.zoomBox.node.jSetCss({
            top : -1E5
          }).jAppendTo(later);
          this.zoomBox.node.jRemoveClass("mz-deactivating mz-p-" + ("zoom" == this.zoomBox.mode ? this.zoomBox.position : this.zoomBox.mode));
          if (!this.expanded && tc) {
            tc.jRemove();
          }
          this.zoomBox.image.getAttribute("style");
          this.zoomBox.image.removeAttribute("style");
        }).jBind(this),
        setMode : $(function(setmode) {
          this.node[false === setmode ? "jAddClass" : "jRemoveClass"]("mz-no-zoom");
          this.node["magnifier" == setmode ? "jAddClass" : "jRemoveClass"]("mz-magnifier-zoom");
          this.zoomBox.node["magnifier" == setmode ? "jAddClass" : "jRemoveClass"]("mz-magnifier");
          this.zoomBox.node["preview" == setmode ? "jAddClass" : "jRemoveClass"]("mz-preview");
          if ("zoom" != setmode) {
            this.node.jRemoveClass("mz-inner-zoom");
            this.zoomBox.node.jRemoveClass("mz-inner");
          }
          /** @type {string} */
          this.zoomBox.mode = setmode;
          if (false === setmode) {
            this.zoomBox.enable(false);
          } else {
            if ("preview" === setmode) {
              this.zoomBox.enable(true);
            }
          }
        }).jBind(this)
      };
      this.zoomBox.node.append(this.zoomBox.image);
      this.zoomBox.setMode(this.option("zoomMode"));
      this.zoomBox.image.removeAttribute("width");
      this.zoomBox.image.removeAttribute("height");
      if ("undefined" !== typeof el) {
        $(this.node).jStore("cr", self.$new((Math.floor(Math.random() * 101) + 1) % 2 ? "span" : "div").jSetCss({
          display : "inline",
          overflow : "hidden",
          visibility : "visible",
          color : el[1],
          fontSize : el[2],
          fontWeight : el[3],
          fontFamily : "sans-serif",
          position : "absolute",
          top : 8,
          left : 8,
          margin : "auto",
          width : "auto",
          textAlign : "right",
          "line-height" : "2em",
          zIndex : 2147483647
        }).changeContent(write(el[0])));
        if ($($(this.node).jFetch("cr")).byTag("a")[0]) {
          $($($(this.node).jFetch("cr")).byTag("a")[0]).jAddEvent("tap btnclick", function(dataAndEvents) {
            dataAndEvents.stopDistribution();
            window.open(this.href);
          });
        }
      }
      if (parts = ("" + this.option("zoomWidth")).match(/^([0-9]+)?(px|%)?$/)) {
        this.zoomBox.size.wunits = parts[2] || "px";
        /** @type {(number|string)} */
        this.zoomBox.size.width = parseFloat(parts[1]) || "auto";
      }
      if (parts = ("" + this.option("zoomHeight")).match(/^([0-9]+)?(px|%)?$/)) {
        this.zoomBox.size.hunits = parts[2] || "px";
        /** @type {(number|string)} */
        this.zoomBox.size.height = parseFloat(parts[1]) || "auto";
      }
      if ("magnifier" == this.zoomBox.mode) {
        this.node.jAddClass("mz-magnifier-zoom");
        this.zoomBox.node.jAddClass("mz-magnifier");
        if ("auto" === this.zoomBox.size.width) {
          /** @type {string} */
          this.zoomBox.size.wunits = "%";
          /** @type {number} */
          this.zoomBox.size.width = 70;
        }
        if ("auto" === this.zoomBox.size.height) {
          /** @type {string} */
          this.zoomBox.size.hunits = "%";
        }
      } else {
        if (this.option("zoom-position").match(/^#/)) {
          if (this.zoomBox.custom = $(this.option("zoom-position").replace(/^#/, ""))) {
            if ($(this.zoomBox.custom).jGetSize().height > 50) {
              if ("auto" === this.zoomBox.size.width) {
                /** @type {string} */
                this.zoomBox.size.wunits = "%";
                /** @type {number} */
                this.zoomBox.size.width = 100;
              }
              if ("auto" === this.zoomBox.size.height) {
                /** @type {string} */
                this.zoomBox.size.hunits = "%";
                /** @type {number} */
                this.zoomBox.size.height = 100;
              }
            }
          } else {
            this.option("zoom-position", "right");
          }
        }
        if ("preview" == this.zoomBox.mode) {
          if ("auto" === this.zoomBox.size.width) {
            /** @type {string} */
            this.zoomBox.size.wunits = "px";
          }
          if ("auto" === this.zoomBox.size.height) {
            /** @type {string} */
            this.zoomBox.size.hunits = "px";
          }
        }
        if ("zoom" == this.zoomBox.mode) {
          if ("auto" === this.zoomBox.size.width || "inner" == this.option("zoom-position")) {
            /** @type {string} */
            this.zoomBox.size.wunits = "%";
            /** @type {number} */
            this.zoomBox.size.width = 100;
          }
          if ("auto" === this.zoomBox.size.height || "inner" == this.option("zoom-position")) {
            /** @type {string} */
            this.zoomBox.size.hunits = "%";
            /** @type {number} */
            this.zoomBox.size.height = 100;
          }
        }
        if ("inner" == this.option("zoom-position")) {
          this.node.jAddClass("mz-inner-zoom");
        }
      }
      this.zoomBox.position = this.zoomBox.custom ? "custom" : this.option("zoom-position");
      /** @type {number} */
      this.lens.border.x = parseFloat(this.lens.node.jGetCss("border-left-width") || "0");
      /** @type {number} */
      this.lens.border.y = parseFloat(this.lens.node.jGetCss("border-top-width") || "0");
      this.image.loadSmall(function() {
        if (2 !== this.image.small.state) {
          return;
        }
        this.image.setCurNode("small");
        this.size = this.image.node.jGetSize();
        this.registerEvents();
        /** @type {boolean} */
        this.ready = true;
        if (true === this.option("lazyZoom")) {
          this.showHint();
        }
      }.jBind(this));
      if (true !== this.option("lazyZoom") || "always" == this.option("zoomOn")) {
        this.image.load($(function(inplace) {
          this.setupZoom(inplace, true);
        }).jBind(this));
        this.loadTimer = $(this.showLoading).jBind(this).jDelay(400);
      }
      this.setupSelectors();
    },
    /**
     * @return {undefined}
     */
    stop : function() {
      this.unregisterEvents();
      if (this.zoomBox) {
        this.zoomBox.node.kill();
      }
      if (this.expandThumbs) {
        this.expandThumbs.stop();
        /** @type {null} */
        this.expandThumbs = null;
      }
      if (this.expandBox) {
        this.expandBox.kill();
      }
      if (this.expanded) {
        $(self.jBrowser.getDoc()).jSetCss({
          overflow : ""
        });
      }
      $(this.additionalImages).jEach(function(datum) {
        $(datum.origin).jRemoveClass("mz-thumb-selected").jRemoveClass(this.option("cssClass") || "mz-$dummy-css-class-to-jRemove$");
      }, this);
      if (this.originalImg) {
        this.placeholder.append(this.originalImg);
        if (this.originalImgSrc) {
          this.originalImg.setAttribute("src", this.originalImgSrc);
        }
      }
      if (this.originalTitle) {
        this.placeholder.setAttribute("title", this.originalTitle);
      }
      if (this.node) {
        this.node.kill();
      }
    },
    /**
     * @param {Object} data
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    setupZoom : function(data, dataAndEvents) {
      var source = this.initEvent;
      var image = this.image;
      /** @type {null} */
      this.initEvent = null;
      if (2 !== data.zoom.state) {
        /** @type {Object} */
        this.image = data;
        /** @type {boolean} */
        this.ready = true;
        this.zoomBox.enable(false);
        return;
      }
      /** @type {Object} */
      this.image = data;
      this.image.setCurNode(this.expanded ? "zoom" : "small");
      this.zoomBox.image.src = this.image.getURL("zoom");
      this.zoomBox.node.jRemoveClass("mz-preview");
      this.zoomBox.image.getAttribute("style");
      this.zoomBox.image.removeAttribute("style");
      this.zoomBox.node.jGetSize();
      setTimeout($(function() {
        var rect2 = this.zoomBox.image.jGetSize();
        var options;
        this.zoomSizeOrigin = this.image.jGetSize("zoom");
        if (rect2.width * rect2.height > 1 && rect2.width * rect2.height < this.zoomSizeOrigin.width * this.zoomSizeOrigin.height) {
          this.zoomSizeOrigin = rect2;
        }
        this.zoomSize = self.detach(this.zoomSizeOrigin);
        if ("preview" == this.zoomBox.mode) {
          this.zoomBox.node.jAddClass("mz-preview");
        }
        this.setCaption();
        this.lens.image.src = this.image.node.currentSrc || this.image.node.src;
        this.zoomBox.enable(this.zoomBox.mode && !(this.expanded && "preview" == this.zoomBox.mode));
        /** @type {boolean} */
        this.ready = true;
        /** @type {null} */
        this.activateTimer = null;
        this.resizeCallback();
        this.node.jAddClass("mz-ready");
        this.hideLoading();
        if (image !== this.image) {
          invoke("onUpdate", this.id, image.origin, this.image.origin);
          if (this.nextImage) {
            options = this.nextImage;
            /** @type {null} */
            this.nextImage = null;
            this.update(options.image, options.onswipe);
          }
        } else {
          invoke("onZoomReady", this.id);
        }
        if (source) {
          this.node.jCallEvent(source.type, source);
        } else {
          if (this.expanded && "always" == this.option("expandZoomOn")) {
            this.activate();
          } else {
            if (!!dataAndEvents) {
              this.showHint();
            }
          }
        }
      }).jBind(this), 256);
    },
    /**
     * @return {undefined}
     */
    setupSelectors : function() {
      var id = this.id;
      var values;
      var re;
      /** @type {RegExp} */
      re = new RegExp("zoom\\-id(\\s+)?:(\\s+)?" + id + "($|;)");
      if (self.jBrowser.features.query) {
        values = self.$A(document.querySelectorAll('[data-zoom-id="' + this.id + '"]'));
        values = $(values).concat(self.$A(document.querySelectorAll('[rel*="zoom-id"]')).filter(function(a) {
          return re.test(a.getAttribute("rel") || "");
        }));
      } else {
        values = self.$A(document.getElementsByTagName("A")).filter(function(a) {
          return id == a.getAttribute("data-zoom-id") || re.test(a.getAttribute("rel") || "");
        });
      }
      $(values).jEach(function(v) {
        var e;
        var wrapped;
        $(v).jAddEvent("click", function(dataAndEvents) {
          dataAndEvents.stopDefaults();
        });
        e = (new start).parseNode(v, this.originalTitle);
        if (this.image.zoom.src.has(e.zoom.src) && this.image.small.src.has(e.small.src)) {
          $(e.origin).jAddClass("mz-thumb-selected");
          e = this.image;
          /** @type {string} */
          e.origin = v;
        }
        if (!e.link && this.image.link) {
          e.link = this.image.link;
        }
        wrapped = $(function() {
          this.update(e);
        }).jBind(this);
        $(v).jAddEvent("mousedown", function(e) {
          if ("stopImmediatePropagation" in e) {
            e.stopImmediatePropagation();
          }
        }, 5);
        $(v).jAddEvent("tap " + ("hover" == this.option("selectorTrigger") ? "mouseover mouseout" : "btnclick"), $(function(statement, deepDataAndEvents) {
          if (this.updateTimer) {
            clearTimeout(this.updateTimer);
          }
          /** @type {boolean} */
          this.updateTimer = false;
          if ("mouseover" == statement.type) {
            this.updateTimer = $(wrapped).jDelay(deepDataAndEvents);
          } else {
            if ("tap" == statement.type || "btnclick" == statement.type) {
              wrapped();
            }
          }
        }).jBindAsEvent(this, 60)).jAddClass(this.option("cssClass")).jAddClass("mz-thumb");
        e.loadSmall();
        if (true !== this.option("lazyZoom")) {
          e.loadZoom();
        }
        this.additionalImages.push(e);
      }, this);
    },
    /**
     * @param {Object} obj
     * @param {boolean} full
     * @return {?}
     */
    update : function(obj, full) {
      if (!this.ready) {
        this.nextImage = {
          image : obj,
          onswipe : full
        };
        return;
      }
      if (!obj || obj === this.image) {
        return false;
      }
      this.deactivate(null, true);
      /** @type {boolean} */
      this.ready = false;
      this.node.jRemoveClass("mz-ready");
      this.loadTimer = $(this.showLoading).jBind(this).jDelay(400);
      obj.load($(function(item) {
        var settings;
        var currentSettings;
        var target;
        var opacity;
        var data;
        var e;
        /** @type {string} */
        var i = self.jBrowser.ieMode < 10 ? "jGetSize" : "getBoundingClientRect";
        this.hideLoading();
        item.setCurNode("small");
        if (!item.node) {
          /** @type {boolean} */
          this.ready = true;
          this.node.jAddClass("mz-ready");
          return;
        }
        this.setActiveThumb(item);
        settings = this.image.node[i]();
        if (this.expanded) {
          item.setCurNode("zoom");
          target = self.$new("div").jAddClass("mz-expand-bg");
          if (self.jBrowser.features.cssFilters || self.jBrowser.ieMode < 10) {
            target.append(self.$new("img", {
              src : item.getURL("zoom")
            }).jSetCss({
              opacity : 0
            }));
          } else {
            target.append((new self.SVGImage(item.node)).blur(udataCur).getNode().jSetCss({
              opacity : 0
            }));
          }
          $(target).jSetCss({
            "z-index" : -99
          }).jAppendTo(this.expandBox);
        }
        if (this.expanded && ("zoom" === this.zoomBox.mode && "always" === this.option("expandZoomOn"))) {
          $(item.node).jSetCss({
            opacity : 0
          }).jAppendTo(this.node);
          currentSettings = settings;
          /** @type {Array} */
          data = [item.node, this.image.node];
          /** @type {Array} */
          e = [{
            opacity : [0, 1]
          }, {
            opacity : [1, 0]
          }];
          $(item.node).jSetCss({
            "max-width" : Math.min(item.jGetSize("zoom").width, this.expandMaxWidth()),
            "max-height" : Math.min(item.jGetSize("zoom").height, this.expandMaxHeight())
          });
        } else {
          this.node.jSetCss({
            height : this.node[i]().height
          });
          this.image.node.jSetCss({
            position : "absolute",
            top : 0,
            left : 0,
            bottom : 0,
            right : 0,
            width : "100%",
            height : "100%",
            "max-width" : "",
            "max-height" : ""
          });
          $(item.node).jSetCss({
            "max-width" : Math.min(item.jGetSize(this.expanded ? "zoom" : "small").width, this.expanded ? this.expandMaxWidth() : Infinity),
            "max-height" : Math.min(item.jGetSize(this.expanded ? "zoom" : "small").height, this.expanded ? this.expandMaxHeight() : Infinity),
            position : "relative",
            top : 0,
            left : 0,
            opacity : 0,
            transform : ""
          }).jAppendTo(this.node);
          currentSettings = $(item.node)[i]();
          if (!full) {
            $(item.node).jSetCss({
              "min-width" : settings.width,
              height : settings.height,
              "max-width" : settings.width,
              "max-height" : ""
            });
          }
          this.node.jSetCss({
            height : "",
            overflow : ""
          }).jGetSize();
          $(item.node).jGetSize();
          /** @type {Array} */
          data = [item.node, this.image.node];
          /** @type {Array} */
          e = [self.extend({
            opacity : [0, 1]
          }, full ? {
            scale : [0.6, 1]
          } : {
            "min-width" : [settings.width, currentSettings.width],
            "max-width" : [settings.width, currentSettings.width],
            height : [settings.height, currentSettings.height]
          }), {
            opacity : [1, 0]
          }];
        }
        if (this.expanded) {
          if (this.expandBg.firstChild && target.firstChild) {
            opacity = $(this.expandBg.firstChild).jGetCss("opacity");
            if (self.jBrowser.gecko) {
              /** @type {Array} */
              data = data.concat([target.firstChild]);
              /** @type {Array} */
              e = e.concat([{
                opacity : [1E-4, opacity]
              }]);
            } else {
              /** @type {Array} */
              data = data.concat([target.firstChild, this.expandBg.firstChild]);
              /** @type {Array} */
              e = e.concat([{
                opacity : [1E-4, opacity]
              }, {
                opacity : [opacity, 1E-4]
              }]);
            }
          }
        }
        (new self.PFX(data, {
          duration : full || this.option("transitionEffect") ? full ? 400 : 350 : 0,
          transition : full ? "cubic-bezier(0.175, 0.885, 0.320, 1.275)" : settings.width == currentSettings.width ? "linear" : "cubic-bezier(0.25, .1, .1, 1)",
          onComplete : $(function() {
            this.image.node.jRemove().getAttribute("style");
            this.image.node.removeAttribute("style");
            $(item.node).jSetCss(this.expanded ? {
              width : "auto",
              height : "auto"
            } : {
              width : "",
              height : ""
            }).jSetCss({
              "min-width" : "",
              "min-height" : "",
              opacity : "",
              "max-width" : Math.min(item.jGetSize(this.expanded ? "zoom" : "small").width, this.expanded ? this.expandMaxWidth() : Infinity),
              "max-height" : Math.min(item.jGetSize(this.expanded ? "zoom" : "small").height, this.expanded ? this.expandMaxHeight() : Infinity)
            });
            if (this.expanded) {
              this.expandBg.jRemove();
              this.expandBg = undefined;
              this.expandBg = target.jSetCssProp("z-index", -100);
              $(this.expandBg.firstChild).jSetCss({
                opacity : ""
              });
              if (this.expandCaption) {
                if (item.caption) {
                  if (item.link) {
                    this.expandCaption.changeContent("").append(self.$new("a", {
                      href : item.link
                    }).jAddEvent("tap btnclick", this.openLink.jBind(this)).changeContent(item.caption));
                  } else {
                    this.expandCaption.changeContent(item.caption).jAddClass("mz-show");
                  }
                } else {
                  this.expandCaption.jRemoveClass("mz-show");
                }
              }
            }
            this.setupZoom(item);
          }).jBind(this),
          onBeforeRender : $(function(c, assert) {
            if (undefined !== c.scale) {
              assert.jSetCssProp("transform", "scale(" + c.scale + ")");
            }
          })
        })).start(e);
      }).jBind(this));
    },
    /**
     * @param {Object} obj
     * @return {undefined}
     */
    setActiveThumb : function(obj) {
      /** @type {boolean} */
      var opts = false;
      $(this.additionalImages).jEach(function(data) {
        $(data.origin).jRemoveClass("mz-thumb-selected");
        if (data === obj) {
          /** @type {boolean} */
          opts = true;
        }
      });
      if (opts && obj.origin) {
        $(obj.origin).jAddClass("mz-thumb-selected");
      }
      if (this.expandThumbs) {
        this.expandThumbs.selectItem(obj.selector);
      }
    },
    /**
     * @param {?} caption
     * @return {undefined}
     */
    setCaption : function(caption) {
      if (this.image.caption && ("off" !== this.option("zoomCaption") && "magnifier" !== this.zoomBox.mode)) {
        if (!this.zoomBox.caption) {
          this.zoomBox.caption = self.$new("div", {
            "class" : "mz-caption"
          }).jAppendTo(this.zoomBox.node.jAddClass("caption-" + this.option("zoomCaption")));
        }
        this.zoomBox.caption.changeContent(this.image.caption);
      }
    },
    /**
     * @param {boolean} dataAndEvents
     * @param {number} v
     * @return {undefined}
     */
    showHint : function(dataAndEvents, v) {
      var node;
      if (!this.expanded) {
        if (this.hintRuns <= 0) {
          return;
        }
        this.hintRuns--;
      }
      if (undefined === v) {
        if (!this.zoomBox.active && !this.zoomBox.activating) {
          if (this.option("zoomMode")) {
            if ("hover" == this.option("zoomOn")) {
              v = this.option("textHoverZoomHint");
            } else {
              if ("click" == this.option("zoomOn")) {
                v = this.option("textClickZoomHint");
              }
            }
          } else {
            v = this.option("expand") ? this.option("textExpandHint") : "";
          }
        } else {
          v = this.option("expand") ? this.option("textExpandHint") : "";
        }
      }
      if (!v) {
        this.hideHint();
        return;
      }
      node = this.node;
      if (!this.hint) {
        this.hint = self.$new("div", {
          "class" : "mz-hint"
        });
        this.hintMessage = self.$new("span", {
          "class" : "mz-hint-message"
        }).append(document.createTextNode(v)).jAppendTo(this.hint);
        $(this.hint).jAppendTo(this.node);
      } else {
        $(this.hintMessage).changeContent(v);
      }
      this.hint.jSetCss({
        "transition-delay" : ""
      }).jRemoveClass("mz-hint-hidden");
      if (this.expanded) {
        node = this.expandFigure;
      } else {
        if ((this.zoomBox.active || this.zoomBox.activating) && ("magnifier" !== this.zoomBox.mode && "inner" == this.zoomBox.position)) {
          node = this.zoomBox.node;
        }
      }
      if (true === dataAndEvents) {
        setTimeout($(function() {
          this.hint.jAddClass("mz-hint-hidden");
        }).jBind(this), 16);
      }
      this.hint.jAppendTo(node);
    },
    /**
     * @return {undefined}
     */
    hideHint : function() {
      if (this.hint) {
        this.hint.jSetCss({
          "transition-delay" : "0ms"
        }).jAddClass("mz-hint-hidden");
      }
    },
    /**
     * @return {undefined}
     */
    showLoading : function() {
      if (!this.loadingBox) {
        this.loadingBox = self.$new("div", {
          "class" : "mz-loading"
        });
        this.node.append(this.loadingBox);
        this.loadingBox.jGetSize();
      }
      this.loadingBox.jAddClass("shown");
    },
    /**
     * @return {undefined}
     */
    hideLoading : function() {
      clearTimeout(this.loadTimer);
      /** @type {null} */
      this.loadTimer = null;
      if (this.loadingBox) {
        $(this.loadingBox).jRemoveClass("shown");
      }
    },
    /**
     * @param {boolean} recurring
     * @param {Object} x
     * @return {undefined}
     */
    setSize : function(recurring, x) {
      var style = self.detach(this.zoomBox.size);
      var props = !this.expanded && this.zoomBox.custom ? $(this.zoomBox.custom).jGetSize() : {
        width : 0,
        height : 0
      };
      var bbox;
      var xScale;
      var size = this.size;
      var start = {
        x : 0,
        y : 0
      };
      x = x || this.zoomBox.position;
      this.normalSize = this.image.node.jGetSize();
      this.size = this.image.node.jGetSize();
      this.boundaries = this.image.node.getBoundingClientRect();
      if (!props.height) {
        props = this.size;
      }
      if (false === this.option("upscale") || (false === this.zoomBox.mode || "preview" === this.zoomBox.mode)) {
        /** @type {boolean} */
        recurring = false;
      }
      if ("preview" == this.zoomBox.mode) {
        if ("auto" === style.width) {
          style.width = this.zoomSizeOrigin.width;
        }
        if ("auto" === style.height) {
          style.height = this.zoomSizeOrigin.height;
        }
      }
      if (this.expanded && "magnifier" == this.zoomBox.mode) {
        /** @type {number} */
        style.width = 70;
        /** @type {string} */
        style.height = "auto";
      }
      if ("magnifier" == this.zoomBox.mode && "auto" === style.height) {
        /** @type {number} */
        this.zoomBox.width = parseFloat(style.width / 100) * Math.min(props.width, props.height);
        /** @type {number} */
        this.zoomBox.height = this.zoomBox.width;
      } else {
        if ("zoom" == this.zoomBox.mode && "inner" == x) {
          this.size = this.node.jGetSize();
          props = this.size;
          this.boundaries = this.node.getBoundingClientRect();
          this.zoomBox.width = props.width;
          this.zoomBox.height = props.height;
        } else {
          /** @type {number} */
          this.zoomBox.width = "%" === style.wunits ? parseFloat(style.width / 100) * props.width : parseInt(style.width);
          /** @type {number} */
          this.zoomBox.height = "%" === style.hunits ? parseFloat(style.height / 100) * props.height : parseInt(style.height);
        }
      }
      if ("preview" == this.zoomBox.mode) {
        /** @type {number} */
        xScale = Math.min(Math.min(this.zoomBox.width / this.zoomSizeOrigin.width, this.zoomBox.height / this.zoomSizeOrigin.height), 1);
        /** @type {number} */
        this.zoomBox.width = this.zoomSizeOrigin.width * xScale;
        /** @type {number} */
        this.zoomBox.height = this.zoomSizeOrigin.height * xScale;
      }
      /** @type {number} */
      this.zoomBox.width = Math.ceil(this.zoomBox.width);
      /** @type {number} */
      this.zoomBox.height = Math.ceil(this.zoomBox.height);
      /** @type {number} */
      this.zoomBox.aspectRatio = this.zoomBox.width / this.zoomBox.height;
      this.zoomBox.node.jSetCss({
        width : this.zoomBox.width,
        height : this.zoomBox.height
      });
      if (recurring) {
        props = this.expanded ? this.expandBox.jGetSize() : this.zoomBox.node.jGetSize();
        if (!this.expanded && this.normalSize.width * this.normalSize.height / (this.zoomSizeOrigin.width * this.zoomSizeOrigin.height) > 0.8) {
          /** @type {number} */
          this.zoomSize.width = 1.5 * this.zoomSizeOrigin.width;
          /** @type {number} */
          this.zoomSize.height = 1.5 * this.zoomSizeOrigin.height;
        } else {
          this.zoomSize = self.detach(this.zoomSizeOrigin);
        }
      }
      if (false !== this.zoomBox.mode && (!this.zoomBox.active && !(this.expanded && "always" == this.option("expandZoomOn")))) {
        if (this.normalSize.width * this.normalSize.height / (this.zoomSize.width * this.zoomSize.height) > 0.8) {
          this.zoomSize = self.detach(this.zoomSizeOrigin);
          this.zoomBox.enable(false);
        } else {
          this.zoomBox.enable(true);
        }
      }
      this.zoomBox.image.jSetCss({
        width : this.zoomSize.width,
        height : this.zoomSize.height
      });
      bbox = this.zoomBox.node.getInnerSize();
      /** @type {number} */
      this.zoomBox.innerWidth = Math.ceil(bbox.width);
      /** @type {number} */
      this.zoomBox.innerHeight = Math.ceil(bbox.height);
      /** @type {number} */
      this.lens.width = Math.ceil(this.zoomBox.innerWidth / (this.zoomSize.width / this.size.width));
      /** @type {number} */
      this.lens.height = Math.ceil(this.zoomBox.innerHeight / (this.zoomSize.height / this.size.height));
      this.lens.node.jSetCss({
        width : this.lens.width,
        height : this.lens.height
      });
      this.lens.image.jSetCss(this.size);
      self.extend(this.lens, this.lens.node.jGetSize());
      if (this.zoomBox.active) {
        clearTimeout(this.moveTimer);
        /** @type {null} */
        this.moveTimer = null;
        if (this.lens.innertouch) {
          this.lens.pos.x *= this.size.width / size.width;
          this.lens.pos.y *= this.size.height / size.height;
          start.x = this.lens.spos.x;
          start.y = this.lens.spos.y;
        } else {
          start.x = this.boundaries.left + this.lens.width / 2 + this.lens.pos.x * (this.size.width / size.width);
          start.y = this.boundaries.top + this.lens.height / 2 + this.lens.pos.y * (this.size.height / size.height);
        }
        this.animate(null, start);
      }
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    reflowZoom : function(dataAndEvents) {
      var top;
      var x;
      var pos;
      var direction;
      var positionStyle;
      var later;
      var tc = $(this.node).jFetch("cr");
      pos = getPosition(5);
      positionStyle = this.zoomBox.position;
      direction = this.expanded ? "inner" : this.zoomBox.custom ? "custom" : this.option("zoom-position");
      later = this.expanded && "zoom" == this.zoomBox.mode ? this.expandBox : document.body;
      if (this.expanded) {
        /** @type {number} */
        pos.y = 0;
        /** @type {number} */
        pos.x = 0;
      }
      if (!dataAndEvents) {
        this.setSize(true, direction);
      }
      if (!this.zoomBox.activating && !this.zoomBox.active) {
        return;
      }
      top = this.boundaries.top;
      if ("magnifier" !== this.zoomBox.mode) {
        if (dataAndEvents) {
          this.setSize(false);
          return;
        }
        switch(direction) {
          case "inner":
          ;
          case "custom":
            /** @type {number} */
            top = 0;
            /** @type {number} */
            x = 0;
            break;
          case "top":
            /** @type {number} */
            top = this.boundaries.top - this.zoomBox.height - this.option("zoom-distance");
            if (pos.top > top) {
              top = this.boundaries.bottom + this.option("zoom-distance");
              /** @type {string} */
              direction = "bottom";
            }
            x = this.boundaries.left;
            break;
          case "bottom":
            top = this.boundaries.bottom + this.option("zoom-distance");
            if (pos.bottom < top + this.zoomBox.height) {
              /** @type {number} */
              top = this.boundaries.top - this.zoomBox.height - this.option("zoom-distance");
              /** @type {string} */
              direction = "top";
            }
            x = this.boundaries.left;
            break;
          case "left":
            /** @type {number} */
            x = this.boundaries.left - this.zoomBox.width - this.option("zoom-distance");
            if (pos.left > x && pos.right >= this.boundaries.right + this.option("zoom-distance") + this.zoomBox.width) {
              x = this.boundaries.right + this.option("zoom-distance");
              /** @type {string} */
              direction = "right";
            }
            break;
          case "right":
          ;
          default:
            x = this.boundaries.right + this.option("zoom-distance");
            if (pos.right < x + this.zoomBox.width && pos.left <= this.boundaries.left - this.zoomBox.width - this.option("zoom-distance")) {
              /** @type {number} */
              x = this.boundaries.left - this.zoomBox.width - this.option("zoom-distance");
              /** @type {string} */
              direction = "left";
            }
            break;
        }
        switch(this.option("zoom-position")) {
          case "top":
          ;
          case "bottom":
            if (pos.top > top || pos.bottom < top + this.zoomBox.height) {
              /** @type {string} */
              direction = "inner";
            }
            break;
          case "left":
          ;
          case "right":
            if (pos.left > x || pos.right < x + this.zoomBox.width) {
              /** @type {string} */
              direction = "inner";
            }
            break;
        }
        this.zoomBox.position = direction;
        this.setSize(false);
        if (dataAndEvents) {
          return;
        }
        if ("custom" == direction) {
          later = this.zoomBox.custom;
          /** @type {number} */
          pos.y = 0;
          /** @type {number} */
          pos.x = 0;
        }
        if ("inner" == direction) {
          if ("preview" !== this.zoomBox.mode) {
            this.zoomBox.node.jAddClass("mz-inner");
            this.node.jAddClass("mz-inner-zoom");
          }
          this.lens.hide();
          top = this.boundaries.top + pos.y;
          x = this.boundaries.left + pos.x;
          if (!this.expanded && (self.jBrowser.ieMode && self.jBrowser.ieMode < 11)) {
            /** @type {number} */
            top = 0;
            /** @type {number} */
            x = 0;
            later = this.node;
          }
        } else {
          top += pos.y;
          x += pos.x;
          this.node.jRemoveClass("mz-inner-zoom");
          this.zoomBox.node.jRemoveClass("mz-inner");
        }
        this.zoomBox.node.jSetCss({
          top : top,
          left : x
        });
      } else {
        this.setSize(false);
        if (self.jBrowser.ieMode && self.jBrowser.ieMode < 11) {
          later = this.node;
        }
      }
      this.zoomBox.node[this.expanded ? "jAddClass" : "jRemoveClass"]("mz-expanded");
      if (!this.expanded && tc) {
        tc.jAppendTo("zoom" == this.zoomBox.mode && "inner" == direction ? this.zoomBox.node : this.node, (Math.floor(Math.random() * 101) + 1) % 2 ? "top" : "bottom");
      }
      this.zoomBox.node.jAppendTo(later);
    },
    /**
     * @param {Object} e
     * @return {undefined}
     */
    changeZoomLevel : function(e) {
      var bbox;
      var width;
      var height;
      var center;
      /** @type {boolean} */
      var L = false;
      /** @type {number} */
      var p = e.isMouse ? 5 : 3 / 54;
      $(e).stop();
      /** @type {number} */
      p = (100 + p * Math.abs(e.deltaY)) / 100;
      if (e.deltaY < 0) {
        /** @type {number} */
        p = 1 / p;
      }
      if ("magnifier" == this.zoomBox.mode) {
        /** @type {number} */
        width = Math.max(100, Math.round(this.zoomBox.width * p));
        /** @type {number} */
        width = Math.min(width, this.size.width * 0.9);
        /** @type {number} */
        height = width / this.zoomBox.aspectRatio;
        /** @type {number} */
        this.zoomBox.width = Math.ceil(width);
        /** @type {number} */
        this.zoomBox.height = Math.ceil(height);
        this.zoomBox.node.jSetCss({
          width : this.zoomBox.width,
          height : this.zoomBox.height
        });
        bbox = this.zoomBox.node.getInnerSize();
        /** @type {number} */
        this.zoomBox.innerWidth = Math.ceil(bbox.width);
        /** @type {number} */
        this.zoomBox.innerHeight = Math.ceil(bbox.height);
        /** @type {boolean} */
        L = true;
      } else {
        if (!this.expanded && "zoom" == this.zoomBox.mode) {
          /** @type {number} */
          width = Math.max(50, Math.round(this.lens.width * p));
          /** @type {number} */
          width = Math.min(width, this.size.width * 0.9);
          /** @type {number} */
          height = width / this.zoomBox.aspectRatio;
          /** @type {number} */
          this.zoomSize.width = Math.ceil(this.zoomBox.innerWidth / width * this.size.width);
          /** @type {number} */
          this.zoomSize.height = Math.ceil(this.zoomBox.innerHeight / height * this.size.height);
          this.zoomBox.image.jSetCss({
            width : this.zoomSize.width,
            height : this.zoomSize.height
          });
        } else {
          return;
        }
      }
      center = $(window).jGetScroll();
      /** @type {number} */
      this.lens.width = Math.ceil(this.zoomBox.innerWidth / (this.zoomSize.width / this.size.width));
      /** @type {number} */
      this.lens.height = Math.ceil(this.zoomBox.innerHeight / (this.zoomSize.height / this.size.height));
      this.lens.node.jSetCss({
        width : this.lens.width,
        height : this.lens.height
      });
      self.extend(this.lens, this.lens.node.jGetSize());
      if (this.zoomBox.active) {
        clearTimeout(this.moveTimer);
        /** @type {null} */
        this.moveTimer = null;
        if (L) {
          /** @type {boolean} */
          this.moveTimer = true;
        }
        this.animate(null, {
          x : e.x - center.x,
          y : e.y - center.y
        });
        if (L) {
          /** @type {null} */
          this.moveTimer = null;
        }
      }
    },
    /**
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    registerActivateEvent : function(dataAndEvents) {
      var i;
      /** @type {string} */
      var node = dataAndEvents ? "dbltap btnclick" : "touchstart" + (!self.jBrowser.mobile ? window.navigator.pointerEnabled ? " pointermove" : window.navigator.msPointerEnabled ? " MSPointerMove" : " mousemove" : "");
      var taskComplete = this.node.jFetch("mz:handlers:activate:fn", !dataAndEvents ? $(function(attributes) {
        i = self.jBrowser.ieMode < 9 ? self.extend({}, attributes) : attributes;
        if (!this.activateTimer) {
          clearTimeout(this.activateTimer);
          /** @type {number} */
          this.activateTimer = setTimeout($(function() {
            this.activate(i);
          }).jBind(this), 120);
        }
      }).jBindAsEvent(this) : $(this.activate).jBindAsEvent(this));
      this.node.jStore("mz:handlers:activate:event", node).jAddEvent(node, taskComplete, 10);
    },
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    unregisterActivateEvent : function(dataAndEvents) {
      var child = this.node.jFetch("mz:handlers:activate:event");
      var updateModel = this.node.jFetch("mz:handlers:activate:fn");
      this.node.jRemoveEvent(child, updateModel);
      this.node.jDel("mz:handlers:activate:fn");
    },
    /**
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    registerDeactivateEvent : function(dataAndEvents) {
      /** @type {string} */
      var node = dataAndEvents ? "dbltap btnclick" : "touchend" + (!self.jBrowser.mobile ? window.navigator.pointerEnabled ? " pointerout" : window.navigator.msPointerEnabled ? " MSPointerOut" : " mouseout" : "");
      var taskComplete = this.node.jFetch("mz:handlers:deactivate:fn", $(function(event) {
        if (callback(event) && !onTouchStart(event)) {
          return;
        }
        if (this.zoomBox.node !== event.getRelated() && (!(("inner" == this.zoomBox.position || "magnifier" == this.zoomBox.mode) && this.zoomBox.node.hasChild(event.getRelated())) && !this.node.hasChild(event.getRelated()))) {
          this.deactivate(event);
        }
      }).jBindAsEvent(this));
      this.node.jStore("mz:handlers:deactivate:event", node).jAddEvent(node, taskComplete, 20);
    },
    /**
     * @return {undefined}
     */
    unregisterDeactivateEvent : function() {
      var child = this.node.jFetch("mz:handlers:deactivate:event");
      var updateModel = this.node.jFetch("mz:handlers:deactivate:fn");
      this.node.jRemoveEvent(child, updateModel);
      this.node.jDel("mz:handlers:deactivate:fn");
    },
    /**
     * @return {undefined}
     */
    registerEvents : function() {
      this.moveBind = this.move.jBind(this);
      this.node.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], $(function(statement) {
        if ((self.jBrowser.androidBrowser || "android" === self.jBrowser.platform && self.jBrowser.gecko) && (this.option("zoomMode") && ("click" !== this.option("zoomOn") && "touchstart" === statement.type))) {
          statement.stopDefaults();
          if (self.jBrowser.gecko) {
            statement.stopDistribution();
          }
        }
        if (!this.zoomBox.active) {
          return;
        }
        if ("inner" === this.zoomBox.position) {
          this.lens.spos = statement.getClientXY();
        }
      }).jBindAsEvent(this), 10);
      this.node.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], $(function(event) {
        if (callback(event) && onTouchStart(event)) {
          /** @type {boolean} */
          this.lens.touchmovement = false;
        }
      }).jBindAsEvent(this), 10);
      this.node.jAddEvent("touchmove " + ("android" === self.jBrowser.platform ? "" : window.navigator.pointerEnabled ? "pointermove" : window.navigator.msPointerEnabled ? "MSPointerMove" : "mousemove"), $(this.animate).jBindAsEvent(this));
      if (this.option("zoomMode")) {
        this.registerActivateEvent("click" === this.option("zoomOn"));
        this.registerDeactivateEvent("click" === this.option("zoomOn") && !this.option("expand"));
      }
      this.node.jAddEvent("mousedown", function(dataAndEvents) {
        dataAndEvents.stopDistribution();
      }, 10).jAddEvent("btnclick", $(function(pending) {
        this.node.jRaiseEvent("MouseEvent", "click");
        if (this.expanded) {
          this.expandBox.jCallEvent("btnclick", pending);
        }
      }).jBind(this), 15);
      if (this.option("expand")) {
        this.node.jAddEvent("tap btnclick", $(this.expand).jBindAsEvent(this), 15);
      } else {
        this.node.jAddEvent("tap btnclick", $(this.openLink).jBindAsEvent(this), 15);
      }
      if (this.additionalImages.length > 1) {
        this.swipe();
      }
      if (!self.jBrowser.mobile && this.option("variableZoom")) {
        this.node.jAddEvent("mousescroll", this.changeZoomLevel.jBindAsEvent(this));
      }
      $(window).jAddEvent("resize scroll", this.onResize);
    },
    /**
     * @return {undefined}
     */
    unregisterEvents : function() {
      if (this.node) {
        this.node.jRemoveEvent("mousescroll");
      }
      $(window).jRemoveEvent("resize scroll", this.onResize);
      $(this.additionalImages).jEach(function(datum) {
        $(datum.origin).jClearEvents();
      });
    },
    /**
     * @param {Object} e
     * @return {undefined}
     */
    activate : function(e) {
      var pt;
      var scopeStart;
      var pixelSize;
      var margin;
      var insets;
      /** @type {number} */
      var H = 0;
      /** @type {number} */
      var I = 0;
      if (!this.ready || (!this.zoomBox.enabled || (this.zoomBox.active || this.zoomBox.activating))) {
        if (!this.image.loaded()) {
          if (e) {
            this.initEvent = self.extend({}, e);
            e.stopQueue();
          }
          this.image.load(this.setupZoom.jBind(this));
          if (!this.loadTimer) {
            this.loadTimer = $(this.showLoading).jBind(this).jDelay(400);
          }
        }
        return;
      }
      if (e && ("pointermove" == e.type && "touch" == e.pointerType)) {
        return;
      }
      if (!this.option("zoomMode") && (this.option("expand") && !this.expanded)) {
        /** @type {boolean} */
        this.zoomBox.active = true;
        return;
      }
      /** @type {boolean} */
      this.zoomBox.activating = true;
      if (this.expanded && "zoom" == this.zoomBox.mode) {
        margin = this.image.node.jGetRect();
        this.expandStage.jAddClass("mz-zoom-in");
        insets = this.expandFigure.jGetRect();
        /** @type {number} */
        I = (margin.left + margin.right) / 2 - (insets.left + insets.right) / 2;
        /** @type {number} */
        H = (margin.top + margin.bottom) / 2 - (insets.top + insets.bottom) / 2;
      }
      this.zoomBox.image.jRemoveEvent("transitionend");
      this.zoomBox.node.jRemoveClass("mz-deactivating").jRemoveEvent("transitionend");
      this.zoomBox.node.jAddClass("mz-activating");
      this.node.jAddClass("mz-activating");
      this.reflowZoom();
      scopeStart = "zoom" == this.zoomBox.mode ? this.zoomBox.position : this.zoomBox.mode;
      if (self.jBrowser.features.transition && !(this.expanded && "always" == this.option("expandZoomOn"))) {
        if ("inner" == scopeStart) {
          pixelSize = this.image.node.jGetSize();
          this.zoomBox.image.jSetCss({
            transform : "translate3d(0," + H + "px, 0) scale(" + pixelSize.width / this.zoomSize.width + ", " + pixelSize.height / this.zoomSize.height + ")"
          }).jGetSize();
          this.zoomBox.image.jAddEvent("transitionend", $(function() {
            this.zoomBox.image.jRemoveEvent("transitionend");
            this.zoomBox.node.jRemoveClass("mz-activating mz-p-" + scopeStart);
            /** @type {boolean} */
            this.zoomBox.activating = false;
            /** @type {boolean} */
            this.zoomBox.active = true;
          }).jBind(this));
          this.zoomBox.node.jAddClass("mz-p-" + scopeStart).jGetSize();
          if (!self.jBrowser.mobile && (self.jBrowser.chrome && ("chrome" === self.jBrowser.uaName || "opera" === self.jBrowser.uaName))) {
            /** @type {boolean} */
            this.zoomBox.activating = false;
            /** @type {boolean} */
            this.zoomBox.active = true;
          }
        } else {
          this.zoomBox.node.jAddEvent("transitionend", $(function() {
            this.zoomBox.node.jRemoveEvent("transitionend");
            this.zoomBox.node.jRemoveClass("mz-activating mz-p-" + scopeStart);
          }).jBind(this));
          this.zoomBox.node.jAddClass("mz-p-" + scopeStart).jGetSize();
          this.zoomBox.node.jRemoveClass("mz-p-" + scopeStart);
          /** @type {boolean} */
          this.zoomBox.activating = false;
          /** @type {boolean} */
          this.zoomBox.active = true;
        }
      } else {
        this.zoomBox.node.jRemoveClass("mz-activating");
        /** @type {boolean} */
        this.zoomBox.activating = false;
        /** @type {boolean} */
        this.zoomBox.active = true;
      }
      if (!this.expanded) {
        this.showHint(true);
      }
      if (e) {
        e.stop().stopQueue();
        pt = e.getClientXY();
        if ("magnifier" == this.zoomBox.mode && /tap/i.test(e.type)) {
          pt.y -= this.zoomBox.height / 2 + 10;
        }
        if ("inner" == scopeStart && (/tap/i.test(e.type) || callback(e))) {
          this.lens.pos = {
            x : 0,
            y : 0
          };
          /** @type {number} */
          pt.x = -(pt.x - this.boundaries.left - this.size.width / 2) * (this.zoomSize.width / this.size.width);
          /** @type {number} */
          pt.y = -(pt.y - this.boundaries.top - this.size.height / 2) * (this.zoomSize.height / this.size.height);
        }
      } else {
        pt = {
          x : this.boundaries.left + (this.boundaries.right - this.boundaries.left) / 2,
          y : this.boundaries.top + (this.boundaries.bottom - this.boundaries.top) / 2
        };
      }
      this.node.jRemoveClass("mz-activating").jAddClass("mz-active");
      pt.x += -I;
      pt.y += -H;
      this.lens.spos = {
        x : 0,
        y : 0
      };
      /** @type {number} */
      this.lens.dx = 0;
      /** @type {number} */
      this.lens.dy = 0;
      this.animate(e, pt, true);
      invoke("onZoomIn", this.id);
    },
    /**
     * @param {Object} event
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    deactivate : function(event, dataAndEvents) {
      var scopeStart;
      var pixelSize;
      var margin;
      var insets;
      /** @type {number} */
      var K = 0;
      /** @type {number} */
      var M = 0;
      var active = this.zoomBox.active;
      /** @type {null} */
      this.initEvent = null;
      if (!this.ready) {
        return;
      }
      if (event && ("pointerout" == event.type && "touch" == event.pointerType)) {
        return;
      }
      clearTimeout(this.moveTimer);
      /** @type {null} */
      this.moveTimer = null;
      clearTimeout(this.activateTimer);
      /** @type {null} */
      this.activateTimer = null;
      /** @type {boolean} */
      this.zoomBox.activating = false;
      /** @type {boolean} */
      this.zoomBox.active = false;
      if (true !== dataAndEvents && !this.expanded) {
        if (active) {
          this.showHint();
        }
      }
      if (!this.zoomBox.enabled) {
        return;
      }
      if (event) {
        event.stop();
      }
      this.zoomBox.image.jRemoveEvent("transitionend");
      this.zoomBox.node.jRemoveClass("mz-activating").jRemoveEvent("transitionend");
      if (this.expanded) {
        insets = this.expandFigure.jGetRect();
        if ("always" !== this.option("expandZoomOn")) {
          this.expandStage.jRemoveClass("mz-zoom-in");
        }
        this.image.node.jSetCss({
          "max-height" : this.expandMaxHeight()
        });
        margin = this.image.node.jGetRect();
        /** @type {number} */
        M = (margin.left + margin.right) / 2 - (insets.left + insets.right) / 2;
        /** @type {number} */
        K = (margin.top + margin.bottom) / 2 - (insets.top + insets.bottom) / 2;
      }
      scopeStart = "zoom" == this.zoomBox.mode ? this.zoomBox.position : this.zoomBox.mode;
      if (self.jBrowser.features.transition && (event && !(this.expanded && "always" == this.option("expandZoomOn")))) {
        if ("inner" == scopeStart) {
          this.zoomBox.image.jAddEvent("transitionend", $(function() {
            this.zoomBox.image.jRemoveEvent("transitionend");
            this.node.jRemoveClass("mz-active");
            setTimeout($(function() {
              this.zoomBox.hide();
            }).jBind(this), 32);
          }).jBind(this));
          pixelSize = this.image.node.jGetSize();
          this.zoomBox.node.jAddClass("mz-deactivating mz-p-" + scopeStart).jGetSize();
          this.zoomBox.image.jSetCss({
            transform : "translate3d(0," + K + "px,0) scale(" + pixelSize.width / this.zoomSize.width + ", " + pixelSize.height / this.zoomSize.height + ")"
          });
        } else {
          this.zoomBox.node.jAddEvent("transitionend", $(function() {
            this.zoomBox.hide();
            this.node.jRemoveClass("mz-active");
          }).jBind(this));
          this.zoomBox.node.jGetCss("opacity");
          this.zoomBox.node.jAddClass("mz-deactivating mz-p-" + scopeStart);
          this.node.jRemoveClass("mz-active");
        }
      } else {
        this.zoomBox.hide();
        this.node.jRemoveClass("mz-active");
      }
      /** @type {number} */
      this.lens.dx = 0;
      /** @type {number} */
      this.lens.dy = 0;
      this.lens.spos = {
        x : 0,
        y : 0
      };
      this.lens.hide();
      if (active) {
        invoke("onZoomOut", this.id);
      }
    },
    /**
     * @param {string} e
     * @param {Function} prop
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    animate : function(e, prop, dataAndEvents) {
      /** @type {Function} */
      var p = prop;
      var x;
      var y;
      /** @type {number} */
      var cStartX = 0;
      var cp2y;
      /** @type {number} */
      var minimumCellWidth = 0;
      var maxHeight;
      var d;
      /** @type {boolean} */
      var fetcher = false;
      if (this.initEvent && !this.image.loaded()) {
        /** @type {string} */
        this.initEvent = e;
      }
      if (!this.zoomBox.active && !dataAndEvents) {
        return;
      }
      if (e) {
        $(e).stopDefaults().stopDistribution();
        if (callback(e) && !onTouchStart(e)) {
          return;
        }
        fetcher = /tap/i.test(e.type) || callback(e);
        if (fetcher && !this.lens.touchmovement) {
          this.lens.touchmovement = fetcher;
        }
        if (!p) {
          p = e.getClientXY();
        }
      }
      if ("preview" == this.zoomBox.mode) {
        return;
      }
      if ("zoom" == this.zoomBox.mode && ("inner" === this.zoomBox.position && (e && fetcher || !e && this.lens.innertouch))) {
        /** @type {boolean} */
        this.lens.innertouch = true;
        x = this.lens.pos.x + (p.x - this.lens.spos.x);
        y = this.lens.pos.y + (p.y - this.lens.spos.y);
        this.lens.spos = p;
        /** @type {number} */
        cStartX = Math.min(0, this.zoomBox.innerWidth - this.zoomSize.width) / 2;
        /** @type {number} */
        cp2y = -cStartX;
        /** @type {number} */
        minimumCellWidth = Math.min(0, this.zoomBox.innerHeight - this.zoomSize.height) / 2;
        /** @type {number} */
        maxHeight = -minimumCellWidth;
      } else {
        /** @type {boolean} */
        this.lens.innertouch = false;
        /** @type {number} */
        x = p.x - this.boundaries.left;
        /** @type {number} */
        y = p.y - this.boundaries.top;
        /** @type {number} */
        cp2y = this.size.width - this.lens.width;
        /** @type {number} */
        maxHeight = this.size.height - this.lens.height;
        x -= this.lens.width / 2;
        y -= this.lens.height / 2;
      }
      if ("magnifier" !== this.zoomBox.mode) {
        /** @type {number} */
        x = Math.max(cStartX, Math.min(x, cp2y));
        /** @type {number} */
        y = Math.max(minimumCellWidth, Math.min(y, maxHeight));
      }
      /** @type {number} */
      this.lens.pos.x = x = Math.round(x);
      /** @type {number} */
      this.lens.pos.y = y = Math.round(y);
      if ("zoom" == this.zoomBox.mode && "inner" != this.zoomBox.position) {
        if (self.jBrowser.features.transform) {
          this.lens.node.jSetCss({
            transform : "translate(" + this.lens.pos.x + "px," + this.lens.pos.y + "px)"
          });
          this.lens.image.jSetCss({
            transform : "translate(" + -(this.lens.pos.x + this.lens.border.x) + "px, " + -(this.lens.pos.y + this.lens.border.y) + "px)"
          });
        } else {
          this.lens.node.jSetCss({
            top : this.lens.pos.y,
            left : this.lens.pos.x
          });
          this.lens.image.jSetCss({
            top : -(this.lens.pos.y + this.lens.border.y),
            left : -(this.lens.pos.x + this.lens.border.x)
          });
        }
      }
      if ("magnifier" == this.zoomBox.mode) {
        if (this.lens.touchmovement && !(e && "dbltap" == e.type)) {
          p.y -= this.zoomBox.height / 2 + 10;
        }
        d = $(window).jGetScroll();
        this.zoomBox.node.jSetCss(self.jBrowser.ieMode && self.jBrowser.ieMode < 11 ? {
          top : p.y - this.boundaries.top - this.zoomBox.height / 2,
          left : p.x - this.boundaries.left - this.zoomBox.width / 2
        } : {
          top : p.y + d.y - this.zoomBox.height / 2,
          left : p.x + d.x - this.zoomBox.width / 2
        });
      }
      if (!this.moveTimer) {
        /** @type {number} */
        this.lens.dx = 0;
        /** @type {number} */
        this.lens.dy = 0;
        this.move(1);
      }
    },
    /**
     * @param {number} delta
     * @return {undefined}
     */
    move : function(delta) {
      var deltaX;
      var distance;
      if (!isFinite(delta)) {
        /** @type {number} */
        delta = this.lens.innertouch ? 0.2 : 0.1;
      }
      /** @type {number} */
      deltaX = (this.lens.pos.x - this.lens.dx) * delta;
      /** @type {number} */
      distance = (this.lens.pos.y - this.lens.dy) * delta;
      this.lens.dx += deltaX;
      this.lens.dy += distance;
      if (!this.moveTimer || (Math.abs(deltaX) > 1E-6 || Math.abs(distance) > 1E-6)) {
        this.zoomBox.image.jSetCss(self.jBrowser.features.transform ? {
          transform : f + (this.lens.innertouch ? this.lens.dx : -(this.lens.dx * (this.zoomSize.width / this.size.width) - Math.max(0, this.zoomSize.width - this.zoomBox.innerWidth) / 2)) + "px," + (this.lens.innertouch ? this.lens.dy : -(this.lens.dy * (this.zoomSize.height / this.size.height) - Math.max(0, this.zoomSize.height - this.zoomBox.innerHeight) / 2)) + "px" + translateSuffix + " scale(1)"
        } : {
          left : -(this.lens.dx * (this.zoomSize.width / this.size.width) + Math.min(0, this.zoomSize.width - this.zoomBox.innerWidth) / 2),
          top : -(this.lens.dy * (this.zoomSize.height / this.size.height) + Math.min(0, this.zoomSize.height - this.zoomBox.innerHeight) / 2)
        });
      }
      if ("magnifier" == this.zoomBox.mode) {
        return;
      }
      /** @type {number} */
      this.moveTimer = setTimeout(this.moveBind, 16);
    },
    /**
     * @return {undefined}
     */
    swipe : function() {
      var width;
      var scale;
      /** @type {number} */
      var errorThresh = 30;
      /** @type {number} */
      var iterations = 201;
      var i;
      /** @type {string} */
      var optsData = "";
      var s = {};
      var tx;
      var point;
      /** @type {number} */
      var x = 0;
      var attributes = {
        transition : self.jBrowser.cssTransform + String.fromCharCode(32) + "300ms cubic-bezier(.18,.35,.58,1)"
      };
      var suiteView;
      var O;
      var source = $(function(e) {
        if (!this.ready || this.zoomBox.active) {
          return;
        }
        if (e.state == "dragstart") {
          clearTimeout(this.activateTimer);
          /** @type {null} */
          this.activateTimer = null;
          /** @type {number} */
          x = 0;
          s = {
            x : e.x,
            y : e.y,
            ts : e.timeStamp
          };
          width = this.size.width;
          /** @type {number} */
          scale = width / 2;
          this.image.node.jRemoveEvent("transitionend");
          this.image.node.jSetCssProp("transition", "");
          this.image.node.jSetCssProp("transform", "translate3d(0, 0, 0)");
          /** @type {null} */
          O = null;
        } else {
          /** @type {number} */
          tx = e.x - s.x;
          point = {
            x : 0,
            y : 0,
            z : 0
          };
          if (null === O) {
            /** @type {boolean} */
            O = Math.abs(e.x - s.x) < Math.abs(e.y - s.y);
          }
          if (O) {
            return;
          }
          e.stop();
          if ("dragend" == e.state) {
            /** @type {number} */
            x = 0;
            /** @type {null} */
            suiteView = null;
            /** @type {number} */
            i = e.timeStamp - s.ts;
            if (Math.abs(tx) > scale || i < iterations && Math.abs(tx) > errorThresh) {
              if (optsData = tx > 0 ? "backward" : tx <= 0 ? "forward" : "") {
                if (optsData == "backward") {
                  suiteView = this.getPrev();
                  x += width * 10;
                } else {
                  suiteView = this.getNext();
                  x -= width * 10;
                }
              }
            }
            /** @type {number} */
            point.x = x;
            /** @type {number} */
            point.deg = -90 * (point.x / width);
            this.image.node.jAddEvent("transitionend", $(function(dataAndEvents) {
              this.image.node.jRemoveEvent("transitionend");
              this.image.node.jSetCssProp("transition", "");
              if (suiteView) {
                this.image.node.jSetCss({
                  transform : "translate3d(" + point.x + "px, 0px, 0px)"
                });
                this.update(suiteView, true);
              }
            }).jBind(this));
            this.image.node.jSetCss(attributes);
            this.image.node.jSetCss({
              "transition-duration" : point.x ? "100ms" : "300ms",
              opacity : 1 - 0.7 * Math.abs(point.x / width),
              transform : "translate3d(" + point.x + "px, 0px, 0px)"
            });
            /** @type {number} */
            tx = 0;
            return;
          }
          /** @type {number} */
          point.x = tx;
          /** @type {number} */
          point.z = -50 * Math.abs(point.x / scale);
          /** @type {number} */
          point.deg = -60 * (point.x / scale);
          this.image.node.jSetCss({
            opacity : 1 - 0.7 * Math.abs(point.x / scale),
            transform : "translate3d(" + point.x + "px, 0px, " + point.z + "px)"
          });
        }
      }).jBind(this);
      this.node.jAddEvent("touchdrag", source);
    },
    /**
     * @return {undefined}
     */
    setupExpandGallery : function() {
      var galleryName;
      var suiteView;
      if (this.additionalImages.length) {
        this.expandGallery = this.additionalImages;
      } else {
        galleryName = this.placeholder.getAttribute("data-gallery");
        if (galleryName) {
          if (self.jBrowser.features.query) {
            suiteView = self.$A(document.querySelectorAll('.MagicZoom[data-gallery="' + galleryName + '"]'));
          } else {
            suiteView = self.$A(document.getElementsByTagName("A")).filter(function(demoLink) {
              return galleryName == demoLink.getAttribute("data-gallery");
            });
          }
          $(suiteView).jEach(function(element) {
            var options;
            var img;
            options = addClass(element);
            if (options && options.additionalImages.length > 0) {
              return;
            }
            if (options) {
              img = new start(options.image.small.url, options.image.zoom.url, options.image.caption, null, options.image.origin);
            } else {
              img = (new start).parseNode(element, options ? options.originalTitle : null);
            }
            if (this.image.zoom.src.has(img.zoom.src) && this.image.small.src.has(img.small.src)) {
              img = this.image;
            }
            this.expandGallery.push(img);
          }, this);
          this.primaryImage = this.image;
        }
      }
      if (this.expandGallery.length > 1) {
        this.expandStage.jAddClass("with-thumbs");
        this.expandNav = self.$new("div", {
          "class" : "mz-expand-thumbnails"
        }).jAppendTo(this.expandStage);
        this.expandThumbs = new expandNav(this.expandNav);
        $(this.expandGallery).jEach(function(walkers) {
          var wrapped = $(function(dataAndEvents) {
            this.setActiveThumb(walkers);
            this.update(walkers);
          }).jBind(this);
          walkers.selector = this.expandThumbs.addItem(self.$new("img", {
            src : walkers.getURL("small")
          }).jAddEvent("tap btnclick", function(event) {
            event.stop();
          }).jAddEvent("tap " + ("hover" == this.option("selectorTrigger") ? "mouseover mouseout" : "btnclick"), $(function(statement, deepDataAndEvents) {
            if (this.updateTimer) {
              clearTimeout(this.updateTimer);
            }
            /** @type {boolean} */
            this.updateTimer = false;
            if ("mouseover" == statement.type) {
              this.updateTimer = $(wrapped).jDelay(deepDataAndEvents);
            } else {
              if ("tap" == statement.type || "btnclick" == statement.type) {
                wrapped();
              }
            }
          }).jBindAsEvent(this, 60)));
        }, this);
        this.buttons.next.show();
        this.buttons.prev.show();
      } else {
        this.expandStage.jRemoveClass("with-thumbs");
        this.buttons.next.hide();
        this.buttons.prev.hide();
      }
    },
    /**
     * @return {undefined}
     */
    destroyExpandGallery : function() {
      var self;
      if (this.expandThumbs) {
        this.expandThumbs.stop();
        /** @type {null} */
        this.expandThumbs = null;
      }
      if (this.expandNav) {
        this.expandNav.jRemove();
        /** @type {null} */
        this.expandNav = null;
      }
      if (this.expandGallery.length > 1 && !this.additionalImages.length) {
        this.node.jRemoveEvent("touchdrag");
        this.image.node.jRemove().getAttribute("style");
        this.image.node.removeAttribute("style");
        this.primaryImage.node.jAppendTo(this.node);
        this.setupZoom(this.primaryImage);
        for (;self = this.expandGallery.pop();) {
          if (self !== this.primaryImage) {
            if (self.small.node) {
              self.small.node.kill();
              /** @type {null} */
              self.small.node = null;
            }
            if (self.zoom.node) {
              self.zoom.node.kill();
              /** @type {null} */
              self.zoom.node = null;
            }
            /** @type {null} */
            self = null;
          }
        }
      }
      /** @type {Array} */
      this.expandGallery = [];
    },
    /**
     * @return {undefined}
     */
    close : function() {
      if (!this.ready || !this.expanded) {
        return;
      }
      if ("ios" == self.jBrowser.platform && ("safari" == self.jBrowser.uaName && 7 == parseInt(self.jBrowser.uaVersion))) {
        clearInterval(scrollIntervalId);
        /** @type {null} */
        scrollIntervalId = null;
      }
      $(document).jRemoveEvent("keydown", this.keyboardCallback);
      this.deactivate(null, true);
      /** @type {boolean} */
      this.ready = false;
      if (Zepto.jBrowser.fullScreen.capable && Zepto.jBrowser.fullScreen.enabled()) {
        Zepto.jBrowser.fullScreen.cancel();
      } else {
        if (self.jBrowser.features.transition) {
          this.node.jRemoveEvent("transitionend").jSetCss({
            transition : ""
          });
          this.node.jAddEvent("transitionend", this.onClose);
          if (self.jBrowser.chrome && ("chrome" === self.jBrowser.uaName || "opera" === self.jBrowser.uaName)) {
            setTimeout($(function() {
              this.onClose();
            }).jBind(this), 600);
          }
          this.expandBg.jRemoveEvent("transitionend").jSetCss({
            transition : ""
          });
          this.expandBg.jSetCss({
            transition : "all 0.6s cubic-bezier(0.895, 0.030, 0.685, 0.220) 0.0s"
          }).jGetSize();
          if (self.jBrowser.androidBrowser && "chrome" !== self.jBrowser.uaName) {
            this.node.jSetCss({
              transition : "all .4s cubic-bezier(0.600, 0, 0.735, 0.045) 0s"
            }).jGetSize();
          } else {
            this.node.jSetCss({
              transition : "all .4s cubic-bezier(0.600, -0.280, 0.735, 0.045) 0s"
            }).jGetSize();
          }
          if ("always" == this.option("expandZoomOn") && "magnifier" !== this.option("expandZoomMode")) {
            this.image.node.jSetCss({
              "max-height" : this.image.jGetSize("zoom").height
            });
            this.image.node.jSetCss({
              "max-width" : this.image.jGetSize("zoom").width
            });
          }
          this.expandBg.jSetCss({
            opacity : 0.4
          });
          this.node.jSetCss({
            opacity : 0.01,
            transform : "scale(0.4)"
          });
        } else {
          this.onClose();
        }
      }
    },
    /**
     * @param {?} attributes
     * @return {undefined}
     */
    expand : function(attributes) {
      if (!this.image.loaded() || (!this.ready || this.expanded)) {
        if (!this.image.loaded()) {
          if (attributes) {
            this.initEvent = self.extend({}, attributes);
            attributes.stopQueue();
          }
          this.image.load(this.setupZoom.jBind(this));
          if (!this.loadTimer) {
            this.loadTimer = $(this.showLoading).jBind(this).jDelay(400);
          }
        }
        return;
      }
      if (attributes) {
        attributes.stopQueue();
      }
      var tc = $(this.node).jFetch("cr");
      /** @type {DocumentFragment} */
      var ol = document.createDocumentFragment();
      this.hideHint();
      this.hintRuns--;
      this.deactivate(null, true);
      this.unregisterActivateEvent();
      this.unregisterDeactivateEvent();
      /** @type {boolean} */
      this.ready = false;
      if (!this.expandBox) {
        this.expandBox = self.$new("div").jAddClass("mz-expand").jAddClass(this.option("cssClass")).jSetCss({
          opacity : 0
        });
        this.expandStage = self.$new("div").jAddClass("mz-expand-stage").jAppendTo(this.expandBox);
        this.expandControls = self.$new("div").jAddClass("mz-expand-controls").jAppendTo(this.expandStage);
        $(["prev", "next", "close"]).jEach(function(type) {
          /** @type {string} */
          var name = "mz-button";
          this.buttons[type] = self.$new("button", {
            title : this.option("text-btn-" + type)
          }).jAddClass(name).jAddClass(name + "-" + type);
          ol.appendChild(this.buttons[type]);
          switch(type) {
            case "prev":
              this.buttons[type].jAddEvent("tap btnclick", function(event) {
                event.stop();
                this.update(this.getPrev());
              }.jBindAsEvent(this));
              break;
            case "next":
              this.buttons[type].jAddEvent("tap btnclick", function(event) {
                event.stop();
                this.update(this.getNext());
              }.jBindAsEvent(this));
              break;
            case "close":
              this.buttons[type].jAddEvent("tap btnclick", function(event) {
                event.stop();
                this.close();
              }.jBindAsEvent(this));
              break;
          }
        }, this);
        this.expandControls.append(ol);
        this.expandBox.jAddEvent("mousescroll touchstart dbltap", $(function(el) {
          $(el).stop();
        }));
        if (this.option("closeOnClickOutside")) {
          this.expandBox.jAddEvent("tap btnclick", function(action) {
            if ("always" !== this.option("expandZoomOn") && this.node.hasChild(action.getOriginalTarget())) {
              return;
            }
            action.stop();
            this.close();
          }.jBindAsEvent(this));
        }
        this.keyboardCallback = $(function(self) {
          /** @type {null} */
          var suiteView = null;
          if (27 !== self.keyCode && (37 !== self.keyCode && 39 !== self.keyCode)) {
            return;
          }
          $(self).stop();
          if (27 === self.keyCode) {
            this.close();
          } else {
            suiteView = 37 === self.keyCode ? this.getPrev() : this.getNext();
            if (suiteView) {
              this.update(suiteView);
            }
          }
        }).jBindAsEvent(this);
        this.onExpand = $(function() {
          var J;
          this.node.jRemoveEvent("transitionend").jSetCss({
            transition : "",
            transform : "translate3d(0,0,0)"
          });
          if (this.expanded) {
            return;
          }
          /** @type {boolean} */
          this.expanded = true;
          this.expandBox.jSetCss({
            opacity : 1
          });
          this.zoomBox.setMode(this.option("expandZoomMode"));
          this.zoomSize = self.detach(this.zoomSizeOrigin);
          this.resizeCallback();
          if (this.expandCaption && this.image.caption) {
            if (this.image.link) {
              this.expandCaption.append(self.$new("a", {
                href : this.image.link
              }).jAddEvent("tap btnclick", this.openLink.jBind(this)).changeContent(this.image.caption));
            } else {
              this.expandCaption.changeContent(this.image.caption);
            }
            this.expandCaption.jAddClass("mz-show");
          }
          if ("always" !== this.option("expandZoomOn")) {
            this.registerActivateEvent(true);
            this.registerDeactivateEvent(true);
          }
          /** @type {boolean} */
          this.ready = true;
          if ("always" === this.option("expandZoomOn")) {
            this.activate();
          }
          if (self.jBrowser.mobile && (this.mobileZoomHint && this.zoomBox.enabled)) {
            this.showHint(true, this.option("textClickZoomHint"));
            /** @type {boolean} */
            this.mobileZoomHint = false;
          }
          this.expandControls.jRemoveClass("mz-hidden").jAddClass("mz-fade mz-visible");
          if (this.expandNav) {
            this.expandNav.jRemoveClass("mz-hidden").jAddClass("mz-fade mz-visible");
          }
          if (this.expandThumbs) {
            this.expandThumbs.run();
            this.setActiveThumb(this.image);
          }
          if (tc) {
            tc.jAppendTo(this.expandBox, (Math.floor(Math.random() * 101) + 1) % 2 ? "top" : "bottom");
          }
          if (this.expandGallery.length && !this.additionalImages.length) {
            this.swipe();
          }
          $(document).jAddEvent("keydown", this.keyboardCallback);
          if ("ios" == self.jBrowser.platform && ("safari" == self.jBrowser.uaName && 7 == parseInt(self.jBrowser.uaVersion))) {
            scrollIntervalId = initialize();
          }
          invoke("onExpandOpen", this.id);
        }).jBind(this);
        this.onClose = $(function() {
          this.node.jRemoveEvent("transitionend");
          if (!this.expanded) {
            return;
          }
          if (this.expanded) {
            $(document).jRemoveEvent("keydown", this.keyboardCallback);
            this.deactivate(null, true);
          }
          this.destroyExpandGallery();
          /** @type {boolean} */
          this.expanded = false;
          this.zoomBox.setMode(this.option("zoomMode"));
          this.node.replaceChild(this.image.getNode("small"), this.image.node);
          this.image.setCurNode("small");
          $(this.image.node).jSetCss({
            width : "",
            height : "",
            "max-width" : Math.min(this.image.jGetSize("small").width),
            "max-height" : Math.min(this.image.jGetSize("small").height)
          });
          this.node.jSetCss({
            opacity : "",
            transition : ""
          });
          this.node.jSetCss({
            transform : "translate3d(0,0,0)"
          });
          this.node.jAppendTo(this.placeholder);
          this.setSize(true);
          if (this.expandCaption) {
            this.expandCaption.jRemove();
            /** @type {null} */
            this.expandCaption = null;
          }
          this.unregisterActivateEvent();
          this.unregisterDeactivateEvent();
          if ("always" == this.option("zoomOn")) {
            this.activate();
          } else {
            if (false !== this.option("zoomMode")) {
              this.registerActivateEvent("click" === this.option("zoomOn"));
              this.registerDeactivateEvent("click" === this.option("zoomOn") && !this.option("expand"));
            }
          }
          this.showHint();
          this.expandBg.jRemoveEvent("transitionend");
          this.expandBox.jRemove();
          this.expandBg.jRemove();
          /** @type {null} */
          this.expandBg = null;
          $(self.jBrowser.getDoc()).jSetCss({
            overflow : ""
          });
          $(document.body).jSetCss({
            overflow : ""
          });
          /** @type {boolean} */
          this.ready = true;
          if (self.jBrowser.ieMode < 10) {
            this.resizeCallback();
          } else {
            $(window).jRaiseEvent("UIEvent", "resize");
          }
          invoke("onExpandClose", this.id);
        }).jBind(this);
        this.expandImageStage = self.$new("div", {
          "class" : "mz-image-stage"
        }).jAppendTo(this.expandStage);
        this.expandFigure = self.$new("figure").jAppendTo(this.expandImageStage);
      }
      this.setupExpandGallery();
      $(self.jBrowser.getDoc()).jSetCss({
        overflow : "hidden"
      });
      $(document.body).jSetCss({
        overflow : "hidden"
      }).jGetSize();
      if ("fullscreen" == this.option("expand")) {
        this.prepareExpandedView();
        Zepto.jBrowser.fullScreen.request(this.expandBox, {
          onEnter : $(function() {
            this.onExpand();
          }).jBind(this),
          onExit : this.onClose,
          fallback : $(function() {
            this.expandToWindow();
          }).jBind(this)
        });
      } else {
        setTimeout($(function() {
          this.expandToWindow();
        }).jBind(this), 96);
      }
    },
    /**
     * @return {undefined}
     */
    prepareExpandedView : function() {
      var pattern;
      pattern = self.$new("img", {
        src : this.image.getURL("zoom")
      });
      this.expandBg = self.$new("div").jAddClass("mz-expand-bg").append(self.jBrowser.features.cssFilters || self.jBrowser.ieMode < 10 ? pattern : (new self.SVGImage(pattern)).blur(udataCur).getNode()).jAppendTo(this.expandBox);
      if ("always" === this.option("expandZoomOn")) {
        this.expandStage.jAddClass("mz-always-zoom" + ("zoom" === this.option("expandZoomMode") ? " mz-zoom-in" : "")).jGetSize();
      }
      this.node.replaceChild(this.image.getNode("zoom"), this.image.node);
      this.image.setCurNode("zoom");
      this.expandBox.jAppendTo(document.body);
      this.expandMaxWidth = function() {
        var suiteView = this.expandImageStage;
        if ($(this.expandFigure).jGetSize().width > 50) {
          suiteView = this.expandFigure;
        }
        return function() {
          return "always" == this.option("expandZoomOn") && "magnifier" !== this.option("expandZoomMode") ? Infinity : Math.round($(suiteView).getInnerSize().width);
        };
      }.call(this);
      this.expandMaxHeight = function() {
        var suiteView = this.expandImageStage;
        if ($(this.expandFigure).jGetSize().height > 50) {
          suiteView = this.expandFigure;
        }
        return function() {
          return "always" == this.option("expandZoomOn") && "magnifier" !== this.option("expandZoomMode") ? Infinity : Math.round($(suiteView).getInnerSize().height);
        };
      }.call(this);
      this.expandControls.jRemoveClass("mz-fade mz-visible").jAddClass("mz-hidden");
      if (this.expandNav) {
        this.expandNav.jRemoveClass("mz-fade mz-visible").jAddClass("mz-hidden");
      }
      this.image.node.jSetCss({
        "max-height" : Math.min(this.image.jGetSize("zoom").height, this.expandMaxHeight())
      });
      this.image.node.jSetCss({
        "max-width" : Math.min(this.image.jGetSize("zoom").width, this.expandMaxWidth())
      });
      this.expandFigure.append(this.node);
      if (this.option("expandCaption")) {
        this.expandCaption = self.$new("figcaption", {
          "class" : "mz-caption"
        }).jAppendTo(this.expandFigure);
      }
    },
    /**
     * @return {undefined}
     */
    expandToWindow : function() {
      this.prepareExpandedView();
      this.node.jSetCss({
        transition : ""
      });
      this.node.jSetCss({
        transform : "scale(0.6)"
      }).jGetSize();
      if (self.jBrowser.androidBrowser && "chrome" !== self.jBrowser.uaName) {
        this.node.jSetCss({
          transition : self.jBrowser.cssTransform + " 0.6s cubic-bezier(0.175, 0.885, 0.320, 1) 0s"
        });
      } else {
        this.node.jSetCss({
          transition : self.jBrowser.cssTransform + " 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0s"
        });
      }
      if (self.jBrowser.features.transition) {
        this.node.jAddEvent("transitionend", this.onExpand);
        if (self.jBrowser.chrome && ("chrome" === self.jBrowser.uaName || "opera" === self.jBrowser.uaName)) {
          setTimeout($(function() {
            this.onExpand();
          }).jBind(this), 800);
        }
      } else {
        this.onExpand.jDelay(16, this);
      }
      this.expandBox.jSetCss({
        opacity : 1
      });
      this.node.jSetCss({
        transform : "scale(1)"
      });
    },
    /**
     * @return {undefined}
     */
    openLink : function() {
      if (this.image.link) {
        window.open(this.image.link, "_self");
      }
    },
    /**
     * @return {?}
     */
    getNext : function() {
      var q = (this.expanded ? this.expandGallery : this.additionalImages).filter(function(options) {
        return-1 !== options.small.state || -1 !== options.zoom.state;
      });
      var l = q.length;
      var num = $(q).indexOf(this.image) + 1;
      return 1 >= l ? null : q[num >= l ? 0 : num];
    },
    /**
     * @return {?}
     */
    getPrev : function() {
      var q = (this.expanded ? this.expandGallery : this.additionalImages).filter(function(options) {
        return-1 !== options.small.state || -1 !== options.zoom.state;
      });
      var l = q.length;
      /** @type {number} */
      var c = $(q).indexOf(this.image) - 1;
      return 1 >= l ? null : q[c < 0 ? l - 1 : c];
    },
    /**
     * @param {?} el
     * @param {string} arg
     * @return {?}
     */
    imageByURL : function(el, arg) {
      var G = this.additionalImages.filter(function(img) {
        return(img.zoom.src.has(el) || img.zoom.url.has(el)) && (img.small.src.has(arg) || img.small.url.has(arg));
      }) || [];
      return G[0] || (arg && (el && ("string" === self.jTypeOf(arg) && "string" === self.jTypeOf(el))) ? new start(arg, el) : null);
    },
    /**
     * @param {Object} element
     * @return {?}
     */
    imageByOrigin : function(element) {
      var G = this.additionalImages.filter(function(event) {
        return event.origin === element;
      }) || [];
      return G[0];
    },
    /**
     * @param {Object} a1
     * @return {?}
     */
    imageByIndex : function(a1) {
      return this.additionalImages[a1];
    }
  };
  graph = {
    version : "v5.0.8",
    /**
     * @param {Object} e
     * @param {Function} attrs
     * @return {?}
     */
    start : function(e, attrs) {
      /** @type {null} */
      var child = null;
      /** @type {Array} */
      var paragraph = [];
      self.$A(e ? [$(e)] : self.$A(document.byClass("MagicZoom")).concat(self.$A(document.byClass("MagicZoomPlus")))).jEach(function(walkers) {
        if ($(walkers)) {
          if (!addClass(walkers)) {
            child = new init(walkers, attrs);
            if (x && !child.option("autostart")) {
              child.stop();
              /** @type {null} */
              child = null;
            } else {
              results.push(child);
              paragraph.push(child);
            }
          }
        }
      }.jBind(this));
      return e ? paragraph[0] : paragraph;
    },
    /**
     * @param {?} el
     * @return {undefined}
     */
    stop : function(el) {
      var l;
      var value;
      var G;
      if (el) {
        if (value = addClass(el)) {
          if (value = results.splice(results.indexOf(value), 1)) {
            if (value[0].stop()) {
              delete value[0];
            }
          }
        }
        return;
      }
      for (;l = results.length;) {
        value = results.splice(l - 1, 1);
        value[0].stop();
        delete value[0];
      }
    },
    /**
     * @param {Object} event
     * @return {?}
     */
    refresh : function(event) {
      this.stop(event);
      return this.start(event);
    },
    /**
     * @param {?} obj
     * @param {Object} element
     * @param {string} val
     * @param {?} allBindingsAccessor
     * @return {undefined}
     */
    update : function(obj, element, val, allBindingsAccessor) {
      var fn = addClass(obj);
      var copy;
      if (fn) {
        copy = "element" === self.jTypeOf(element) ? fn.imageByOrigin(element) : fn.imageByURL(element, val);
        if (copy) {
          fn.update(copy);
        }
      }
    },
    /**
     * @param {?} node
     * @param {Object} parent
     * @return {undefined}
     */
    switchTo : function(node, parent) {
      var range = addClass(node);
      var obj;
      if (range) {
        switch(self.jTypeOf(parent)) {
          case "element":
            obj = range.imageByOrigin(parent);
            break;
          case "number":
            obj = range.imageByIndex(parent);
            break;
          default:
          ;
        }
        if (obj) {
          range.update(obj);
        }
      }
    },
    /**
     * @param {?} obj
     * @return {undefined}
     */
    prev : function(obj) {
      var result;
      if (result = addClass(obj)) {
        result.update(result.getPrev());
      }
    },
    /**
     * @param {?} elem
     * @return {undefined}
     */
    next : function(elem) {
      var queue;
      if (queue = addClass(elem)) {
        queue.update(queue.getNext());
      }
    },
    /**
     * @param {?} parent
     * @return {undefined}
     */
    zoomIn : function(parent) {
      var obj;
      if (obj = addClass(parent)) {
        obj.activate();
      }
    },
    /**
     * @param {?} parent
     * @return {undefined}
     */
    zoomOut : function(parent) {
      var obj;
      if (obj = addClass(parent)) {
        obj.deactivate();
      }
    },
    /**
     * @param {?} list
     * @return {undefined}
     */
    expand : function(list) {
      var result;
      if (result = addClass(list)) {
        result.expand();
      }
    },
    /**
     * @param {?} code
     * @return {undefined}
     */
    close : function(code) {
      var result;
      if (result = addClass(code)) {
        result.close();
      }
    },
    /**
     * @param {?} name
     * @param {Object} handler
     * @return {undefined}
     */
    registerCallback : function(name, handler) {
      if (!normalized[name]) {
        /** @type {Array} */
        normalized[name] = [];
      }
      if ("function" == self.jTypeOf(handler)) {
        normalized[name].push(handler);
      }
    },
    /**
     * @param {?} walkers
     * @return {?}
     */
    running : function(walkers) {
      return!!addClass(walkers);
    }
  };
  $(document).jAddEvent("domready", function() {
    var points = window[name + "Options"] || {};
    addRule();
    later = self.$new("div", {
      "class" : "magic-hidden-wrapper"
    }).jAppendTo(document.body);
    E = self.jBrowser.mobile && (window.matchMedia && window.matchMedia("(max-device-width: 767px), (max-device-height: 767px)").matches);
    if (self.jBrowser.mobile) {
      self.extend(options, attributes);
    }
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      if (points[codeSegments[i]] && self.$F !== points[codeSegments[i]]) {
        graph.registerCallback(codeSegments[i], points[codeSegments[i]]);
      }
    }
    graph.start();
    /** @type {boolean} */
    x = false;
  });
  window.MagicZoomPlus = window.MagicZoomPlus || {};
  return graph;
}();
