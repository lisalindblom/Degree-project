function ud(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function cd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var dd = { exports: {} },
  qo = {},
  fd = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $i = Symbol.for("react.element"),
  cp = Symbol.for("react.portal"),
  dp = Symbol.for("react.fragment"),
  fp = Symbol.for("react.strict_mode"),
  hp = Symbol.for("react.profiler"),
  pp = Symbol.for("react.provider"),
  mp = Symbol.for("react.context"),
  vp = Symbol.for("react.forward_ref"),
  gp = Symbol.for("react.suspense"),
  yp = Symbol.for("react.memo"),
  wp = Symbol.for("react.lazy"),
  Su = Symbol.iterator;
function _p(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Su && e[Su]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pd = Object.assign,
  md = {};
function xr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = md),
    (this.updater = n || hd);
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vd() {}
vd.prototype = xr.prototype;
function sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = md),
    (this.updater = n || hd);
}
var la = (sa.prototype = new vd());
la.constructor = sa;
pd(la, xr.prototype);
la.isPureReactComponent = !0;
var ku = Array.isArray,
  gd = Object.prototype.hasOwnProperty,
  aa = { current: null },
  yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function wd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      gd.call(t, r) && !yd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: $i,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: aa.current,
  };
}
function Sp(e, t) {
  return {
    $$typeof: $i,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ua(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $i;
}
function kp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Eu = /\/+/g;
function xs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kp("" + e.key)
    : t.toString(36);
}
function fo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $i:
          case cp:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + xs(s, 0) : r),
      ku(i)
        ? ((n = ""),
          e != null && (n = e.replace(Eu, "$&/") + "/"),
          fo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ua(i) &&
            (i = Sp(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Eu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ku(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + xs(o, l);
      s += fo(o, t, n, a, i);
    }
  else if (((a = _p(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + xs(o, l++)), (s += fo(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Wi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    fo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Ep(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ze = { current: null },
  ho = { transition: null },
  xp = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: ho,
    ReactCurrentOwner: aa,
  };
K.Children = {
  map: Wi,
  forEach: function (e, t, n) {
    Wi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ua(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = xr;
K.Fragment = dp;
K.Profiler = hp;
K.PureComponent = sa;
K.StrictMode = fp;
K.Suspense = gp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xp;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = pd({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = aa.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      gd.call(t, a) &&
        !yd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: $i, type: e.type, key: i, ref: o, props: r, _owner: s };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: mp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: pp, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = wd;
K.createFactory = function (e) {
  var t = wd.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: vp, render: e };
};
K.isValidElement = ua;
K.lazy = function (e) {
  return { $$typeof: wp, _payload: { _status: -1, _result: e }, _init: Ep };
};
K.memo = function (e, t) {
  return { $$typeof: yp, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = ho.transition;
  ho.transition = {};
  try {
    e();
  } finally {
    ho.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return ze.current.useCallback(e, t);
};
K.useContext = function (e) {
  return ze.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return ze.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return ze.current.useEffect(e, t);
};
K.useId = function () {
  return ze.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return ze.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return ze.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return ze.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return ze.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return ze.current.useRef(e);
};
K.useState = function (e) {
  return ze.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return ze.current.useTransition();
};
K.version = "18.2.0";
fd.exports = K;
var R = fd.exports;
const _d = cd(R),
  Cp = ud({ __proto__: null, default: _d }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp = R,
  Rp = Symbol.for("react.element"),
  Tp = Symbol.for("react.fragment"),
  Op = Object.prototype.hasOwnProperty,
  jp = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sd(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Op.call(t, r) && !Lp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Rp,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: jp.current,
  };
}
qo.Fragment = Tp;
qo.jsx = Sd;
qo.jsxs = Sd;
dd.exports = qo;
var j = dd.exports,
  ol = {},
  kd = { exports: {} },
  Ye = {},
  Ed = { exports: {} },
  xd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, A) {
    var b = D.length;
    D.push(A);
    e: for (; 0 < b; ) {
      var Z = (b - 1) >>> 1,
        X = D[Z];
      if (0 < i(X, A)) (D[Z] = A), (D[b] = X), (b = Z);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var A = D[0],
      b = D.pop();
    if (b !== A) {
      D[0] = b;
      e: for (var Z = 0, X = D.length, Ze = X >>> 1; Z < Ze; ) {
        var $e = 2 * (Z + 1) - 1,
          vn = D[$e],
          Tt = $e + 1,
          Mn = D[Tt];
        if (0 > i(vn, b))
          Tt < X && 0 > i(Mn, vn)
            ? ((D[Z] = Mn), (D[Tt] = b), (Z = Tt))
            : ((D[Z] = vn), (D[$e] = b), (Z = $e));
        else if (Tt < X && 0 > i(Mn, b)) (D[Z] = Mn), (D[Tt] = b), (Z = Tt);
        else break e;
      }
    }
    return A;
  }
  function i(D, A) {
    var b = D.sortIndex - A.sortIndex;
    return b !== 0 ? b : D.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    _ = !1,
    g = !1,
    y = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= D)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function h(D) {
    if (((y = !1), v(D), !g))
      if (n(a) !== null) (g = !0), bt(C);
      else {
        var A = n(u);
        A !== null && Rt(h, A.startTime - D);
      }
  }
  function C(D, A) {
    (g = !1), y && ((y = !1), m(L), (L = -1)), (_ = !0);
    var b = d;
    try {
      for (
        v(A), f = n(a);
        f !== null && (!(f.expirationTime > A) || (D && !q()));

      ) {
        var Z = f.callback;
        if (typeof Z == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var X = Z(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(a) && r(a),
            v(A);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Ze = !0;
      else {
        var $e = n(u);
        $e !== null && Rt(h, $e.startTime - A), (Ze = !1);
      }
      return Ze;
    } finally {
      (f = null), (d = b), (_ = !1);
    }
  }
  var T = !1,
    x = null,
    L = -1,
    F = 5,
    z = -1;
  function q() {
    return !(e.unstable_now() - z < F);
  }
  function xe() {
    if (x !== null) {
      var D = e.unstable_now();
      z = D;
      var A = !0;
      try {
        A = x(!0, D);
      } finally {
        A ? Se() : ((T = !1), (x = null));
      }
    } else T = !1;
  }
  var Se;
  if (typeof p == "function")
    Se = function () {
      p(xe);
    };
  else if (typeof MessageChannel < "u") {
    var Pt = new MessageChannel(),
      de = Pt.port2;
    (Pt.port1.onmessage = xe),
      (Se = function () {
        de.postMessage(null);
      });
  } else
    Se = function () {
      E(xe, 0);
    };
  function bt(D) {
    (x = D), T || ((T = !0), Se());
  }
  function Rt(D, A) {
    L = E(function () {
      D(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || _ || ((g = !0), bt(C));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (D) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var b = d;
      d = A;
      try {
        return D();
      } finally {
        d = b;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, A) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var b = d;
      d = D;
      try {
        return A();
      } finally {
        d = b;
      }
    }),
    (e.unstable_scheduleCallback = function (D, A, b) {
      var Z = e.unstable_now();
      switch (
        (typeof b == "object" && b !== null
          ? ((b = b.delay), (b = typeof b == "number" && 0 < b ? Z + b : Z))
          : (b = Z),
        D)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = b + X),
        (D = {
          id: c++,
          callback: A,
          priorityLevel: D,
          startTime: b,
          expirationTime: X,
          sortIndex: -1,
        }),
        b > Z
          ? ((D.sortIndex = b),
            t(u, D),
            n(a) === null &&
              D === n(u) &&
              (y ? (m(L), (L = -1)) : (y = !0), Rt(h, b - Z)))
          : ((D.sortIndex = X), t(a, D), g || _ || ((g = !0), bt(C))),
        D
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (D) {
      var A = d;
      return function () {
        var b = d;
        d = A;
        try {
          return D.apply(this, arguments);
        } finally {
          d = b;
        }
      };
    });
})(xd);
Ed.exports = xd;
var Dp = Ed.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd = R,
  qe = Dp;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pd = new Set(),
  pi = {};
function Un(e, t) {
  vr(e, t), vr(e + "Capture", t);
}
function vr(e, t) {
  for (pi[e] = t, e = 0; e < t.length; e++) Pd.add(t[e]);
}
var It = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  sl = Object.prototype.hasOwnProperty,
  Np =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xu = {},
  Cu = {};
function $p(e) {
  return sl.call(Cu, e)
    ? !0
    : sl.call(xu, e)
    ? !1
    : Np.test(e)
    ? (Cu[e] = !0)
    : ((xu[e] = !0), !1);
}
function Ip(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ap(e, t, n, r) {
  if (t === null || typeof t > "u" || Ip(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Te[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Te[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Te[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Te[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Te[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Te[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ca = /[\-:]([a-z])/g;
function da(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ca, da);
    Te[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ca, da);
    Te[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ca, da);
  Te[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Te[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Te[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fa(e, t, n, r) {
  var i = Te.hasOwnProperty(t) ? Te[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ap(t, n, i, r) && (n = null),
    r || i === null
      ? $p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ki = Symbol.for("react.element"),
  qn = Symbol.for("react.portal"),
  Yn = Symbol.for("react.fragment"),
  ha = Symbol.for("react.strict_mode"),
  ll = Symbol.for("react.profiler"),
  Rd = Symbol.for("react.provider"),
  Td = Symbol.for("react.context"),
  pa = Symbol.for("react.forward_ref"),
  al = Symbol.for("react.suspense"),
  ul = Symbol.for("react.suspense_list"),
  ma = Symbol.for("react.memo"),
  Qt = Symbol.for("react.lazy"),
  Od = Symbol.for("react.offscreen"),
  Pu = Symbol.iterator;
function $r(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pu && e[Pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  Cs;
function Gr(e) {
  if (Cs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cs = (t && t[1]) || "";
    }
  return (
    `
` +
    Cs +
    e
  );
}
var Ps = !1;
function Rs(e, t) {
  if (!e || Ps) return "";
  Ps = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ps = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gr(e) : "";
}
function Up(e) {
  switch (e.tag) {
    case 5:
      return Gr(e.type);
    case 16:
      return Gr("Lazy");
    case 13:
      return Gr("Suspense");
    case 19:
      return Gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Rs(e.type, !1)), e;
    case 11:
      return (e = Rs(e.type.render, !1)), e;
    case 1:
      return (e = Rs(e.type, !0)), e;
    default:
      return "";
  }
}
function cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yn:
      return "Fragment";
    case qn:
      return "Portal";
    case ll:
      return "Profiler";
    case ha:
      return "StrictMode";
    case al:
      return "Suspense";
    case ul:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Td:
        return (e.displayName || "Context") + ".Consumer";
      case Rd:
        return (e._context.displayName || "Context") + ".Provider";
      case pa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ma:
        return (
          (t = e.displayName || null), t !== null ? t : cl(e.type) || "Memo"
        );
      case Qt:
        (t = e._payload), (e = e._init);
        try {
          return cl(e(t));
        } catch {}
    }
  return null;
}
function zp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return cl(t);
    case 8:
      return t === ha ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function jd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fp(e) {
  var t = jd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qi(e) {
  e._valueTracker || (e._valueTracker = Fp(e));
}
function Ld(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = jd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function xo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function dl(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Dd(e, t) {
  (t = t.checked), t != null && fa(e, "checked", t, !1);
}
function fl(e, t) {
  Dd(e, t);
  var n = cn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? hl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hl(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Tu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function hl(e, t, n) {
  (t !== "number" || xo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jr = Array.isArray;
function ur(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Jr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Nd(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ju(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $d(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ml(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $d(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Gi,
  Id = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Gi = Gi || document.createElement("div"),
          Gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Gi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function mi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ei = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ei).forEach(function (e) {
  Mp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ei[t] = ei[e]);
  });
});
function Ad(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ei.hasOwnProperty(e) && ei[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ud(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ad(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var bp = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function vl(e, t) {
  if (t) {
    if (bp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function gl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var yl = null;
function va(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wl = null,
  cr = null,
  dr = null;
function Lu(e) {
  if ((e = Ui(e))) {
    if (typeof wl != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = ts(t)), wl(e.stateNode, e.type, t));
  }
}
function zd(e) {
  cr ? (dr ? dr.push(e) : (dr = [e])) : (cr = e);
}
function Fd() {
  if (cr) {
    var e = cr,
      t = dr;
    if (((dr = cr = null), Lu(e), t)) for (e = 0; e < t.length; e++) Lu(t[e]);
  }
}
function Md(e, t) {
  return e(t);
}
function bd() {}
var Ts = !1;
function Bd(e, t, n) {
  if (Ts) return e(t, n);
  Ts = !0;
  try {
    return Md(e, t, n);
  } finally {
    (Ts = !1), (cr !== null || dr !== null) && (bd(), Fd());
  }
}
function vi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ts(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var _l = !1;
if (It)
  try {
    var Ir = {};
    Object.defineProperty(Ir, "passive", {
      get: function () {
        _l = !0;
      },
    }),
      window.addEventListener("test", Ir, Ir),
      window.removeEventListener("test", Ir, Ir);
  } catch {
    _l = !1;
  }
function Bp(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ti = !1,
  Co = null,
  Po = !1,
  Sl = null,
  Vp = {
    onError: function (e) {
      (ti = !0), (Co = e);
    },
  };
function Hp(e, t, n, r, i, o, s, l, a) {
  (ti = !1), (Co = null), Bp.apply(Vp, arguments);
}
function Wp(e, t, n, r, i, o, s, l, a) {
  if ((Hp.apply(this, arguments), ti)) {
    if (ti) {
      var u = Co;
      (ti = !1), (Co = null);
    } else throw Error(P(198));
    Po || ((Po = !0), (Sl = u));
  }
}
function zn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Du(e) {
  if (zn(e) !== e) throw Error(P(188));
}
function Kp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Du(i), e;
        if (o === r) return Du(i), t;
        o = o.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Hd(e) {
  return (e = Kp(e)), e !== null ? Wd(e) : null;
}
function Wd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kd = qe.unstable_scheduleCallback,
  Nu = qe.unstable_cancelCallback,
  Qp = qe.unstable_shouldYield,
  Gp = qe.unstable_requestPaint,
  ve = qe.unstable_now,
  Jp = qe.unstable_getCurrentPriorityLevel,
  ga = qe.unstable_ImmediatePriority,
  Qd = qe.unstable_UserBlockingPriority,
  Ro = qe.unstable_NormalPriority,
  qp = qe.unstable_LowPriority,
  Gd = qe.unstable_IdlePriority,
  Yo = null,
  xt = null;
function Yp(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function")
    try {
      xt.onCommitFiberRoot(Yo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : em,
  Xp = Math.log,
  Zp = Math.LN2;
function em(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xp(e) / Zp) | 0)) | 0;
}
var Ji = 64,
  qi = 4194304;
function qr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function To(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = qr(l)) : ((o &= s), o !== 0 && (r = qr(o)));
  } else (s = n & ~i), s !== 0 ? (r = qr(s)) : o !== 0 && (r = qr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function tm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function nm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - vt(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = tm(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function kl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Jd() {
  var e = Ji;
  return (Ji <<= 1), !(Ji & 4194240) && (Ji = 64), e;
}
function Os(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vt(t)),
    (e[t] = n);
}
function rm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - vt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ya(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Y = 0;
function qd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yd,
  wa,
  Xd,
  Zd,
  ef,
  El = !1,
  Yi = [],
  tn = null,
  nn = null,
  rn = null,
  gi = new Map(),
  yi = new Map(),
  qt = [],
  im =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $u(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      gi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yi.delete(t.pointerId);
  }
}
function Ar(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ui(t)), t !== null && wa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function om(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (tn = Ar(tn, e, t, n, r, i)), !0;
    case "dragenter":
      return (nn = Ar(nn, e, t, n, r, i)), !0;
    case "mouseover":
      return (rn = Ar(rn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return gi.set(o, Ar(gi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), yi.set(o, Ar(yi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function tf(e) {
  var t = xn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vd(n)), t !== null)) {
          (e.blockedOn = t),
            ef(e.priority, function () {
              Xd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function po(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (yl = r), n.target.dispatchEvent(r), (yl = null);
    } else return (t = Ui(n)), t !== null && wa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Iu(e, t, n) {
  po(e) && n.delete(t);
}
function sm() {
  (El = !1),
    tn !== null && po(tn) && (tn = null),
    nn !== null && po(nn) && (nn = null),
    rn !== null && po(rn) && (rn = null),
    gi.forEach(Iu),
    yi.forEach(Iu);
}
function Ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    El ||
      ((El = !0),
      qe.unstable_scheduleCallback(qe.unstable_NormalPriority, sm)));
}
function wi(e) {
  function t(i) {
    return Ur(i, e);
  }
  if (0 < Yi.length) {
    Ur(Yi[0], e);
    for (var n = 1; n < Yi.length; n++) {
      var r = Yi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && Ur(tn, e),
      nn !== null && Ur(nn, e),
      rn !== null && Ur(rn, e),
      gi.forEach(t),
      yi.forEach(t),
      n = 0;
    n < qt.length;
    n++
  )
    (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
    tf(n), n.blockedOn === null && qt.shift();
}
var fr = Ft.ReactCurrentBatchConfig,
  Oo = !0;
function lm(e, t, n, r) {
  var i = Y,
    o = fr.transition;
  fr.transition = null;
  try {
    (Y = 1), _a(e, t, n, r);
  } finally {
    (Y = i), (fr.transition = o);
  }
}
function am(e, t, n, r) {
  var i = Y,
    o = fr.transition;
  fr.transition = null;
  try {
    (Y = 4), _a(e, t, n, r);
  } finally {
    (Y = i), (fr.transition = o);
  }
}
function _a(e, t, n, r) {
  if (Oo) {
    var i = xl(e, t, n, r);
    if (i === null) Fs(e, t, r, jo, n), $u(e, r);
    else if (om(i, e, t, n, r)) r.stopPropagation();
    else if (($u(e, r), t & 4 && -1 < im.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ui(i);
        if (
          (o !== null && Yd(o),
          (o = xl(e, t, n, r)),
          o === null && Fs(e, t, r, jo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Fs(e, t, r, null, n);
  }
}
var jo = null;
function xl(e, t, n, r) {
  if (((jo = null), (e = va(r)), (e = xn(e)), e !== null))
    if (((t = zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jo = e), null;
}
function nf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jp()) {
        case ga:
          return 1;
        case Qd:
          return 4;
        case Ro:
        case qp:
          return 16;
        case Gd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null,
  Sa = null,
  mo = null;
function rf() {
  if (mo) return mo;
  var e,
    t = Sa,
    n = t.length,
    r,
    i = "value" in Zt ? Zt.value : Zt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (mo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function vo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xi() {
  return !0;
}
function Au() {
  return !1;
}
function Xe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Xi
        : Au),
      (this.isPropagationStopped = Au),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xi));
      },
      persist: function () {},
      isPersistent: Xi,
    }),
    t
  );
}
var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ka = Xe(Cr),
  Ai = ce({}, Cr, { view: 0, detail: 0 }),
  um = Xe(Ai),
  js,
  Ls,
  zr,
  Xo = ce({}, Ai, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ea,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zr &&
            (zr && e.type === "mousemove"
              ? ((js = e.screenX - zr.screenX), (Ls = e.screenY - zr.screenY))
              : (Ls = js = 0),
            (zr = e)),
          js);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ls;
    },
  }),
  Uu = Xe(Xo),
  cm = ce({}, Xo, { dataTransfer: 0 }),
  dm = Xe(cm),
  fm = ce({}, Ai, { relatedTarget: 0 }),
  Ds = Xe(fm),
  hm = ce({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pm = Xe(hm),
  mm = ce({}, Cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vm = Xe(mm),
  gm = ce({}, Cr, { data: 0 }),
  zu = Xe(gm),
  ym = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  wm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _m = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Sm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _m[e]) ? !!t[e] : !1;
}
function Ea() {
  return Sm;
}
var km = ce({}, Ai, {
    key: function (e) {
      if (e.key) {
        var t = ym[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = vo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? wm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ea,
    charCode: function (e) {
      return e.type === "keypress" ? vo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? vo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Em = Xe(km),
  xm = ce({}, Xo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fu = Xe(xm),
  Cm = ce({}, Ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ea,
  }),
  Pm = Xe(Cm),
  Rm = ce({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tm = Xe(Rm),
  Om = ce({}, Xo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jm = Xe(Om),
  Lm = [9, 13, 27, 32],
  xa = It && "CompositionEvent" in window,
  ni = null;
It && "documentMode" in document && (ni = document.documentMode);
var Dm = It && "TextEvent" in window && !ni,
  of = It && (!xa || (ni && 8 < ni && 11 >= ni)),
  Mu = " ",
  bu = !1;
function sf(e, t) {
  switch (e) {
    case "keyup":
      return Lm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function lf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xn = !1;
function Nm(e, t) {
  switch (e) {
    case "compositionend":
      return lf(t);
    case "keypress":
      return t.which !== 32 ? null : ((bu = !0), Mu);
    case "textInput":
      return (e = t.data), e === Mu && bu ? null : e;
    default:
      return null;
  }
}
function $m(e, t) {
  if (Xn)
    return e === "compositionend" || (!xa && sf(e, t))
      ? ((e = rf()), (mo = Sa = Zt = null), (Xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return of && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Im = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Im[e.type] : t === "textarea";
}
function af(e, t, n, r) {
  zd(r),
    (t = Lo(t, "onChange")),
    0 < t.length &&
      ((n = new ka("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ri = null,
  _i = null;
function Am(e) {
  wf(e, 0);
}
function Zo(e) {
  var t = tr(e);
  if (Ld(t)) return e;
}
function Um(e, t) {
  if (e === "change") return t;
}
var uf = !1;
if (It) {
  var Ns;
  if (It) {
    var $s = "oninput" in document;
    if (!$s) {
      var Vu = document.createElement("div");
      Vu.setAttribute("oninput", "return;"),
        ($s = typeof Vu.oninput == "function");
    }
    Ns = $s;
  } else Ns = !1;
  uf = Ns && (!document.documentMode || 9 < document.documentMode);
}
function Hu() {
  ri && (ri.detachEvent("onpropertychange", cf), (_i = ri = null));
}
function cf(e) {
  if (e.propertyName === "value" && Zo(_i)) {
    var t = [];
    af(t, _i, e, va(e)), Bd(Am, t);
  }
}
function zm(e, t, n) {
  e === "focusin"
    ? (Hu(), (ri = t), (_i = n), ri.attachEvent("onpropertychange", cf))
    : e === "focusout" && Hu();
}
function Fm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Zo(_i);
}
function Mm(e, t) {
  if (e === "click") return Zo(t);
}
function bm(e, t) {
  if (e === "input" || e === "change") return Zo(t);
}
function Bm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == "function" ? Object.is : Bm;
function Si(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!sl.call(t, i) || !yt(e[i], t[i])) return !1;
  }
  return !0;
}
function Wu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ku(e, t) {
  var n = Wu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wu(n);
  }
}
function df(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? df(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ff() {
  for (var e = window, t = xo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xo(e.document);
  }
  return t;
}
function Ca(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vm(e) {
  var t = ff(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    df(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ca(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ku(n, o));
        var s = Ku(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hm = It && "documentMode" in document && 11 >= document.documentMode,
  Zn = null,
  Cl = null,
  ii = null,
  Pl = !1;
function Qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pl ||
    Zn == null ||
    Zn !== xo(r) ||
    ((r = Zn),
    "selectionStart" in r && Ca(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ii && Si(ii, r)) ||
      ((ii = r),
      (r = Lo(Cl, "onSelect")),
      0 < r.length &&
        ((t = new ka("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zn))));
}
function Zi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var er = {
    animationend: Zi("Animation", "AnimationEnd"),
    animationiteration: Zi("Animation", "AnimationIteration"),
    animationstart: Zi("Animation", "AnimationStart"),
    transitionend: Zi("Transition", "TransitionEnd"),
  },
  Is = {},
  hf = {};
It &&
  ((hf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete er.animationend.animation,
    delete er.animationiteration.animation,
    delete er.animationstart.animation),
  "TransitionEvent" in window || delete er.transitionend.transition);
function es(e) {
  if (Is[e]) return Is[e];
  if (!er[e]) return e;
  var t = er[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hf) return (Is[e] = t[n]);
  return e;
}
var pf = es("animationend"),
  mf = es("animationiteration"),
  vf = es("animationstart"),
  gf = es("transitionend"),
  yf = new Map(),
  Gu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function fn(e, t) {
  yf.set(e, t), Un(t, [e]);
}
for (var As = 0; As < Gu.length; As++) {
  var Us = Gu[As],
    Wm = Us.toLowerCase(),
    Km = Us[0].toUpperCase() + Us.slice(1);
  fn(Wm, "on" + Km);
}
fn(pf, "onAnimationEnd");
fn(mf, "onAnimationIteration");
fn(vf, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(gf, "onTransitionEnd");
vr("onMouseEnter", ["mouseout", "mouseover"]);
vr("onMouseLeave", ["mouseout", "mouseover"]);
vr("onPointerEnter", ["pointerout", "pointerover"]);
vr("onPointerLeave", ["pointerout", "pointerover"]);
Un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
function Ju(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Wp(r, t, void 0, e), (e.currentTarget = null);
}
function wf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Ju(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Ju(i, l, u), (o = a);
        }
    }
  }
  if (Po) throw ((e = Sl), (Po = !1), (Sl = null), e);
}
function ie(e, t) {
  var n = t[Ll];
  n === void 0 && (n = t[Ll] = new Set());
  var r = e + "__bubble";
  n.has(r) || (_f(t, e, 2, !1), n.add(r));
}
function zs(e, t, n) {
  var r = 0;
  t && (r |= 4), _f(n, e, r, t);
}
var eo = "_reactListening" + Math.random().toString(36).slice(2);
function ki(e) {
  if (!e[eo]) {
    (e[eo] = !0),
      Pd.forEach(function (n) {
        n !== "selectionchange" && (Qm.has(n) || zs(n, !1, e), zs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[eo] || ((t[eo] = !0), zs("selectionchange", !1, t));
  }
}
function _f(e, t, n, r) {
  switch (nf(t)) {
    case 1:
      var i = lm;
      break;
    case 4:
      i = am;
      break;
    default:
      i = _a;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !_l ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Fs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = xn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Bd(function () {
    var u = o,
      c = va(n),
      f = [];
    e: {
      var d = yf.get(e);
      if (d !== void 0) {
        var _ = ka,
          g = e;
        switch (e) {
          case "keypress":
            if (vo(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = Em;
            break;
          case "focusin":
            (g = "focus"), (_ = Ds);
            break;
          case "focusout":
            (g = "blur"), (_ = Ds);
            break;
          case "beforeblur":
          case "afterblur":
            _ = Ds;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = Uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = dm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = Pm;
            break;
          case pf:
          case mf:
          case vf:
            _ = pm;
            break;
          case gf:
            _ = Tm;
            break;
          case "scroll":
            _ = um;
            break;
          case "wheel":
            _ = jm;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = vm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Fu;
        }
        var y = (t & 4) !== 0,
          E = !y && e === "scroll",
          m = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var h = v.stateNode;
          if (
            (v.tag === 5 &&
              h !== null &&
              ((v = h),
              m !== null && ((h = vi(p, m)), h != null && y.push(Ei(p, h, v)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((d = new _(d, g, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          d &&
            n !== yl &&
            (g = n.relatedTarget || n.fromElement) &&
            (xn(g) || g[At]))
        )
          break e;
        if (
          (_ || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          _
            ? ((g = n.relatedTarget || n.toElement),
              (_ = u),
              (g = g ? xn(g) : null),
              g !== null &&
                ((E = zn(g)), g !== E || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((_ = null), (g = u)),
          _ !== g)
        ) {
          if (
            ((y = Uu),
            (h = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Fu),
              (h = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (E = _ == null ? d : tr(_)),
            (v = g == null ? d : tr(g)),
            (d = new y(h, p + "leave", _, n, c)),
            (d.target = E),
            (d.relatedTarget = v),
            (h = null),
            xn(c) === u &&
              ((y = new y(m, p + "enter", g, n, c)),
              (y.target = v),
              (y.relatedTarget = E),
              (h = y)),
            (E = h),
            _ && g)
          )
            t: {
              for (y = _, m = g, p = 0, v = y; v; v = Vn(v)) p++;
              for (v = 0, h = m; h; h = Vn(h)) v++;
              for (; 0 < p - v; ) (y = Vn(y)), p--;
              for (; 0 < v - p; ) (m = Vn(m)), v--;
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Vn(y)), (m = Vn(m));
              }
              y = null;
            }
          else y = null;
          _ !== null && qu(f, d, _, y, !1),
            g !== null && E !== null && qu(f, E, g, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? tr(u) : window),
          (_ = d.nodeName && d.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && d.type === "file"))
        )
          var C = Um;
        else if (Bu(d))
          if (uf) C = bm;
          else {
            C = Fm;
            var T = zm;
          }
        else
          (_ = d.nodeName) &&
            _.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = Mm);
        if (C && (C = C(e, u))) {
          af(f, C, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            hl(d, "number", d.value);
      }
      switch (((T = u ? tr(u) : window), e)) {
        case "focusin":
          (Bu(T) || T.contentEditable === "true") &&
            ((Zn = T), (Cl = u), (ii = null));
          break;
        case "focusout":
          ii = Cl = Zn = null;
          break;
        case "mousedown":
          Pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Pl = !1), Qu(f, n, c);
          break;
        case "selectionchange":
          if (Hm) break;
        case "keydown":
        case "keyup":
          Qu(f, n, c);
      }
      var x;
      if (xa)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Xn
          ? sf(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (of &&
          n.locale !== "ko" &&
          (Xn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Xn && (x = rf())
            : ((Zt = c),
              (Sa = "value" in Zt ? Zt.value : Zt.textContent),
              (Xn = !0))),
        (T = Lo(u, L)),
        0 < T.length &&
          ((L = new zu(L, e, null, n, c)),
          f.push({ event: L, listeners: T }),
          x ? (L.data = x) : ((x = lf(n)), x !== null && (L.data = x)))),
        (x = Dm ? Nm(e, n) : $m(e, n)) &&
          ((u = Lo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new zu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = x)));
    }
    wf(f, t);
  });
}
function Ei(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Lo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = vi(e, n)),
      o != null && r.unshift(Ei(e, o, i)),
      (o = vi(e, t)),
      o != null && r.push(Ei(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = vi(n, o)), a != null && s.unshift(Ei(n, a, l)))
        : i || ((a = vi(n, o)), a != null && s.push(Ei(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Gm = /\r\n?/g,
  Jm = /\u0000|\uFFFD/g;
function Yu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gm,
      `
`
    )
    .replace(Jm, "");
}
function to(e, t, n) {
  if (((t = Yu(t)), Yu(e) !== t && n)) throw Error(P(425));
}
function Do() {}
var Rl = null,
  Tl = null;
function Ol(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var jl = typeof setTimeout == "function" ? setTimeout : void 0,
  qm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xu = typeof Promise == "function" ? Promise : void 0,
  Ym =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xu < "u"
      ? function (e) {
          return Xu.resolve(null).then(e).catch(Xm);
        }
      : jl;
function Xm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ms(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), wi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  wi(t);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pr = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + Pr,
  xi = "__reactProps$" + Pr,
  At = "__reactContainer$" + Pr,
  Ll = "__reactEvents$" + Pr,
  Zm = "__reactListeners$" + Pr,
  ev = "__reactHandles$" + Pr;
function xn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[Et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Zu(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = Zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ui(e) {
  return (
    (e = e[Et] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function tr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function ts(e) {
  return e[xi] || null;
}
var Dl = [],
  nr = -1;
function hn(e) {
  return { current: e };
}
function oe(e) {
  0 > nr || ((e.current = Dl[nr]), (Dl[nr] = null), nr--);
}
function re(e, t) {
  nr++, (Dl[nr] = e.current), (e.current = t);
}
var dn = {},
  Ne = hn(dn),
  Be = hn(!1),
  jn = dn;
function gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function No() {
  oe(Be), oe(Ne);
}
function ec(e, t, n) {
  if (Ne.current !== dn) throw Error(P(168));
  re(Ne, t), re(Be, n);
}
function Sf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, zp(e) || "Unknown", i));
  return ce({}, n, r);
}
function $o(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (jn = Ne.current),
    re(Ne, e),
    re(Be, Be.current),
    !0
  );
}
function tc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Sf(e, t, jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Be),
      oe(Ne),
      re(Ne, e))
    : oe(Be),
    re(Be, n);
}
var jt = null,
  ns = !1,
  bs = !1;
function kf(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function tv(e) {
  (ns = !0), kf(e);
}
function pn() {
  if (!bs && jt !== null) {
    bs = !0;
    var e = 0,
      t = Y;
    try {
      var n = jt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), (ns = !1);
    } catch (i) {
      throw (jt !== null && (jt = jt.slice(e + 1)), Kd(ga, pn), i);
    } finally {
      (Y = t), (bs = !1);
    }
  }
  return null;
}
var rr = [],
  ir = 0,
  Io = null,
  Ao = 0,
  rt = [],
  it = 0,
  Ln = null,
  Lt = 1,
  Dt = "";
function Sn(e, t) {
  (rr[ir++] = Ao), (rr[ir++] = Io), (Io = e), (Ao = t);
}
function Ef(e, t, n) {
  (rt[it++] = Lt), (rt[it++] = Dt), (rt[it++] = Ln), (Ln = e);
  var r = Lt;
  e = Dt;
  var i = 32 - vt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - vt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Lt = (1 << (32 - vt(t) + i)) | (n << i) | r),
      (Dt = o + e);
  } else (Lt = (1 << o) | (n << i) | r), (Dt = e);
}
function Pa(e) {
  e.return !== null && (Sn(e, 1), Ef(e, 1, 0));
}
function Ra(e) {
  for (; e === Io; )
    (Io = rr[--ir]), (rr[ir] = null), (Ao = rr[--ir]), (rr[ir] = null);
  for (; e === Ln; )
    (Ln = rt[--it]),
      (rt[it] = null),
      (Dt = rt[--it]),
      (rt[it] = null),
      (Lt = rt[--it]),
      (rt[it] = null);
}
var Je = null,
  Ge = null,
  se = !1,
  mt = null;
function xf(e, t) {
  var n = ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ge = on(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ln !== null ? { id: Lt, overflow: Dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $l(e) {
  if (se) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!nc(e, t)) {
        if (Nl(e)) throw Error(P(418));
        t = on(n.nextSibling);
        var r = Je;
        t && nc(e, t)
          ? xf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Je = e));
      }
    } else {
      if (Nl(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (Je = e);
    }
  }
}
function rc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function no(e) {
  if (e !== Je) return !1;
  if (!se) return rc(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ol(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (Nl(e)) throw (Cf(), Error(P(418)));
    for (; t; ) xf(e, t), (t = on(t.nextSibling));
  }
  if ((rc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = on(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Je ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function Cf() {
  for (var e = Ge; e; ) e = on(e.nextSibling);
}
function yr() {
  (Ge = Je = null), (se = !1);
}
function Ta(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
var nv = Ft.ReactCurrentBatchConfig;
function dt(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Uo = hn(null),
  zo = null,
  or = null,
  Oa = null;
function ja() {
  Oa = or = zo = null;
}
function La(e) {
  var t = Uo.current;
  oe(Uo), (e._currentValue = t);
}
function Il(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function hr(e, t) {
  (zo = e),
    (Oa = or = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (be = !0), (e.firstContext = null));
}
function lt(e) {
  var t = e._currentValue;
  if (Oa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), or === null)) {
      if (zo === null) throw Error(P(308));
      (or = e), (zo.dependencies = { lanes: 0, firstContext: e });
    } else or = or.next = e;
  return t;
}
var Cn = null;
function Da(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function Pf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Da(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ut(e, r)
  );
}
function Ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function Na(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ut(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Da(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ut(e, n)
  );
}
function go(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n);
  }
}
function ic(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fo(e, t, n, r) {
  var i = e.updateQueue;
  Gt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        _ = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: _,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            y = l;
          switch (((d = t), (_ = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                f = g.call(_, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (d = typeof g == "function" ? g.call(_, f, d) : g),
                d == null)
              )
                break e;
              f = ce({}, f, d);
              break e;
            case 2:
              Gt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (_ = {
          eventTime: _,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = _), (a = f)) : (c = c.next = _),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Nn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function oc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var Tf = new Cd.Component().refs;
function Al(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      i = an(e),
      o = Nt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = sn(e, o, i)),
      t !== null && (gt(t, e, i, r), go(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      i = an(e),
      o = Nt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = sn(e, o, i)),
      t !== null && (gt(t, e, i, r), go(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ue(),
      r = an(e),
      i = Nt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = sn(e, i, r)),
      t !== null && (gt(t, e, r, n), go(t, e, r));
  },
};
function sc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Si(n, r) || !Si(i, o)
      : !0
  );
}
function Of(e, t, n) {
  var r = !1,
    i = dn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = lt(o))
      : ((i = Ve(t) ? jn : Ne.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? gr(e, i) : dn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function lc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rs.enqueueReplaceState(t, t.state, null);
}
function Ul(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Tf), Na(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = lt(o))
    : ((o = Ve(t) ? jn : Ne.current), (i.context = gr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Al(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && rs.enqueueReplaceState(i, i.state, null),
      Fo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Tf && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function ro(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ac(e) {
  var t = e._init;
  return t(e._payload);
}
function jf(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = un(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, v, h) {
    return p === null || p.tag !== 6
      ? ((p = Gs(v, m.mode, h)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p);
  }
  function a(m, p, v, h) {
    var C = v.type;
    return C === Yn
      ? c(m, p, v.props.children, h, v.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Qt &&
            ac(C) === p.type))
      ? ((h = i(p, v.props)), (h.ref = Fr(m, p, v)), (h.return = m), h)
      : ((h = Eo(v.type, v.key, v.props, null, m.mode, h)),
        (h.ref = Fr(m, p, v)),
        (h.return = m),
        h);
  }
  function u(m, p, v, h) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Js(v, m.mode, h)), (p.return = m), p)
      : ((p = i(p, v.children || [])), (p.return = m), p);
  }
  function c(m, p, v, h, C) {
    return p === null || p.tag !== 7
      ? ((p = On(v, m.mode, h, C)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p);
  }
  function f(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Gs("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ki:
          return (
            (v = Eo(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = Fr(m, null, p)),
            (v.return = m),
            v
          );
        case qn:
          return (p = Js(p, m.mode, v)), (p.return = m), p;
        case Qt:
          var h = p._init;
          return f(m, h(p._payload), v);
      }
      if (Jr(p) || $r(p))
        return (p = On(p, m.mode, v, null)), (p.return = m), p;
      ro(m, p);
    }
    return null;
  }
  function d(m, p, v, h) {
    var C = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : l(m, p, "" + v, h);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ki:
          return v.key === C ? a(m, p, v, h) : null;
        case qn:
          return v.key === C ? u(m, p, v, h) : null;
        case Qt:
          return (C = v._init), d(m, p, C(v._payload), h);
      }
      if (Jr(v) || $r(v)) return C !== null ? null : c(m, p, v, h, null);
      ro(m, v);
    }
    return null;
  }
  function _(m, p, v, h, C) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (m = m.get(v) || null), l(p, m, "" + h, C);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ki:
          return (m = m.get(h.key === null ? v : h.key) || null), a(p, m, h, C);
        case qn:
          return (m = m.get(h.key === null ? v : h.key) || null), u(p, m, h, C);
        case Qt:
          var T = h._init;
          return _(m, p, v, T(h._payload), C);
      }
      if (Jr(h) || $r(h)) return (m = m.get(v) || null), c(p, m, h, C, null);
      ro(p, h);
    }
    return null;
  }
  function g(m, p, v, h) {
    for (
      var C = null, T = null, x = p, L = (p = 0), F = null;
      x !== null && L < v.length;
      L++
    ) {
      x.index > L ? ((F = x), (x = null)) : (F = x.sibling);
      var z = d(m, x, v[L], h);
      if (z === null) {
        x === null && (x = F);
        break;
      }
      e && x && z.alternate === null && t(m, x),
        (p = o(z, p, L)),
        T === null ? (C = z) : (T.sibling = z),
        (T = z),
        (x = F);
    }
    if (L === v.length) return n(m, x), se && Sn(m, L), C;
    if (x === null) {
      for (; L < v.length; L++)
        (x = f(m, v[L], h)),
          x !== null &&
            ((p = o(x, p, L)), T === null ? (C = x) : (T.sibling = x), (T = x));
      return se && Sn(m, L), C;
    }
    for (x = r(m, x); L < v.length; L++)
      (F = _(x, m, L, v[L], h)),
        F !== null &&
          (e && F.alternate !== null && x.delete(F.key === null ? L : F.key),
          (p = o(F, p, L)),
          T === null ? (C = F) : (T.sibling = F),
          (T = F));
    return (
      e &&
        x.forEach(function (q) {
          return t(m, q);
        }),
      se && Sn(m, L),
      C
    );
  }
  function y(m, p, v, h) {
    var C = $r(v);
    if (typeof C != "function") throw Error(P(150));
    if (((v = C.call(v)), v == null)) throw Error(P(151));
    for (
      var T = (C = null), x = p, L = (p = 0), F = null, z = v.next();
      x !== null && !z.done;
      L++, z = v.next()
    ) {
      x.index > L ? ((F = x), (x = null)) : (F = x.sibling);
      var q = d(m, x, z.value, h);
      if (q === null) {
        x === null && (x = F);
        break;
      }
      e && x && q.alternate === null && t(m, x),
        (p = o(q, p, L)),
        T === null ? (C = q) : (T.sibling = q),
        (T = q),
        (x = F);
    }
    if (z.done) return n(m, x), se && Sn(m, L), C;
    if (x === null) {
      for (; !z.done; L++, z = v.next())
        (z = f(m, z.value, h)),
          z !== null &&
            ((p = o(z, p, L)), T === null ? (C = z) : (T.sibling = z), (T = z));
      return se && Sn(m, L), C;
    }
    for (x = r(m, x); !z.done; L++, z = v.next())
      (z = _(x, m, L, z.value, h)),
        z !== null &&
          (e && z.alternate !== null && x.delete(z.key === null ? L : z.key),
          (p = o(z, p, L)),
          T === null ? (C = z) : (T.sibling = z),
          (T = z));
    return (
      e &&
        x.forEach(function (xe) {
          return t(m, xe);
        }),
      se && Sn(m, L),
      C
    );
  }
  function E(m, p, v, h) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Yn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ki:
          e: {
            for (var C = v.key, T = p; T !== null; ) {
              if (T.key === C) {
                if (((C = v.type), C === Yn)) {
                  if (T.tag === 7) {
                    n(m, T.sibling),
                      (p = i(T, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Qt &&
                    ac(C) === T.type)
                ) {
                  n(m, T.sibling),
                    (p = i(T, v.props)),
                    (p.ref = Fr(m, T, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, T);
                break;
              } else t(m, T);
              T = T.sibling;
            }
            v.type === Yn
              ? ((p = On(v.props.children, m.mode, h, v.key)),
                (p.return = m),
                (m = p))
              : ((h = Eo(v.type, v.key, v.props, null, m.mode, h)),
                (h.ref = Fr(m, p, v)),
                (h.return = m),
                (m = h));
          }
          return s(m);
        case qn:
          e: {
            for (T = v.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Js(v, m.mode, h)), (p.return = m), (m = p);
          }
          return s(m);
        case Qt:
          return (T = v._init), E(m, p, T(v._payload), h);
      }
      if (Jr(v)) return g(m, p, v, h);
      if ($r(v)) return y(m, p, v, h);
      ro(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = Gs(v, m.mode, h)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return E;
}
var wr = jf(!0),
  Lf = jf(!1),
  zi = {},
  Ct = hn(zi),
  Ci = hn(zi),
  Pi = hn(zi);
function Pn(e) {
  if (e === zi) throw Error(P(174));
  return e;
}
function $a(e, t) {
  switch ((re(Pi, t), re(Ci, e), re(Ct, zi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ml(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ml(t, e));
  }
  oe(Ct), re(Ct, t);
}
function _r() {
  oe(Ct), oe(Ci), oe(Pi);
}
function Df(e) {
  Pn(Pi.current);
  var t = Pn(Ct.current),
    n = ml(t, e.type);
  t !== n && (re(Ci, e), re(Ct, n));
}
function Ia(e) {
  Ci.current === e && (oe(Ct), oe(Ci));
}
var ae = hn(0);
function Mo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bs = [];
function Aa() {
  for (var e = 0; e < Bs.length; e++)
    Bs[e]._workInProgressVersionPrimary = null;
  Bs.length = 0;
}
var yo = Ft.ReactCurrentDispatcher,
  Vs = Ft.ReactCurrentBatchConfig,
  Dn = 0,
  ue = null,
  we = null,
  ke = null,
  bo = !1,
  oi = !1,
  Ri = 0,
  rv = 0;
function Oe() {
  throw Error(P(321));
}
function Ua(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yt(e[n], t[n])) return !1;
  return !0;
}
function za(e, t, n, r, i, o) {
  if (
    ((Dn = o),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (yo.current = e === null || e.memoizedState === null ? lv : av),
    (e = n(r, i)),
    oi)
  ) {
    o = 0;
    do {
      if (((oi = !1), (Ri = 0), 25 <= o)) throw Error(P(301));
      (o += 1),
        (ke = we = null),
        (t.updateQueue = null),
        (yo.current = uv),
        (e = n(r, i));
    } while (oi);
  }
  if (
    ((yo.current = Bo),
    (t = we !== null && we.next !== null),
    (Dn = 0),
    (ke = we = ue = null),
    (bo = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Fa() {
  var e = Ri !== 0;
  return (Ri = 0), e;
}
function kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ue.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function at() {
  if (we === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = ke === null ? ue.memoizedState : ke.next;
  if (t !== null) (ke = t), (we = e);
  else {
    if (e === null) throw Error(P(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      ke === null ? (ue.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function Ti(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hs(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = we,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((Dn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (ue.lanes |= c),
          (Nn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      yt(r, t.memoizedState) || (be = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ue.lanes |= o), (Nn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ws(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    yt(o, t.memoizedState) || (be = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Nf() {}
function $f(e, t) {
  var n = ue,
    r = at(),
    i = t(),
    o = !yt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (be = !0)),
    (r = r.queue),
    Ma(Uf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Oi(9, Af.bind(null, n, r, i, t), void 0, null),
      Ee === null)
    )
      throw Error(P(349));
    Dn & 30 || If(n, t, i);
  }
  return i;
}
function If(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Af(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), zf(t) && Ff(e);
}
function Uf(e, t, n) {
  return n(function () {
    zf(t) && Ff(e);
  });
}
function zf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function Ff(e) {
  var t = Ut(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function uc(e) {
  var t = kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ti,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sv.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Oi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Mf() {
  return at().memoizedState;
}
function wo(e, t, n, r) {
  var i = kt();
  (ue.flags |= e),
    (i.memoizedState = Oi(1 | t, n, void 0, r === void 0 ? null : r));
}
function is(e, t, n, r) {
  var i = at();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (we !== null) {
    var s = we.memoizedState;
    if (((o = s.destroy), r !== null && Ua(r, s.deps))) {
      i.memoizedState = Oi(t, n, o, r);
      return;
    }
  }
  (ue.flags |= e), (i.memoizedState = Oi(1 | t, n, o, r));
}
function cc(e, t) {
  return wo(8390656, 8, e, t);
}
function Ma(e, t) {
  return is(2048, 8, e, t);
}
function bf(e, t) {
  return is(4, 2, e, t);
}
function Bf(e, t) {
  return is(4, 4, e, t);
}
function Vf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), is(4, 4, Vf.bind(null, t, e), n)
  );
}
function ba() {}
function Wf(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ua(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kf(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ua(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qf(e, t, n) {
  return Dn & 21
    ? (yt(n, t) || ((n = Jd()), (ue.lanes |= n), (Nn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
}
function iv(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vs.transition;
  Vs.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (Vs.transition = r);
  }
}
function Gf() {
  return at().memoizedState;
}
function ov(e, t, n) {
  var r = an(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jf(e))
  )
    qf(t, n);
  else if (((n = Pf(e, t, n, r)), n !== null)) {
    var i = Ue();
    gt(n, e, r, i), Yf(n, t, r);
  }
}
function sv(e, t, n) {
  var r = an(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jf(e)) qf(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), yt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Da(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pf(e, t, i, r)),
      n !== null && ((i = Ue()), gt(n, e, r, i), Yf(n, t, r));
  }
}
function Jf(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function qf(e, t) {
  oi = bo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n);
  }
}
var Bo = {
    readContext: lt,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  lv = {
    readContext: lt,
    useCallback: function (e, t) {
      return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: cc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        wo(4194308, 4, Vf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return wo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return wo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ov.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: uc,
    useDebugValue: ba,
    useDeferredValue: function (e) {
      return (kt().memoizedState = e);
    },
    useTransition: function () {
      var e = uc(!1),
        t = e[0];
      return (e = iv.bind(null, e[1])), (kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        i = kt();
      if (se) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(P(349));
        Dn & 30 || If(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        cc(Uf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Oi(9, Af.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = kt(),
        t = Ee.identifierPrefix;
      if (se) {
        var n = Dt,
          r = Lt;
        (n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ri++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = rv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  av = {
    readContext: lt,
    useCallback: Wf,
    useContext: lt,
    useEffect: Ma,
    useImperativeHandle: Hf,
    useInsertionEffect: bf,
    useLayoutEffect: Bf,
    useMemo: Kf,
    useReducer: Hs,
    useRef: Mf,
    useState: function () {
      return Hs(Ti);
    },
    useDebugValue: ba,
    useDeferredValue: function (e) {
      var t = at();
      return Qf(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Hs(Ti)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Nf,
    useSyncExternalStore: $f,
    useId: Gf,
    unstable_isNewReconciler: !1,
  },
  uv = {
    readContext: lt,
    useCallback: Wf,
    useContext: lt,
    useEffect: Ma,
    useImperativeHandle: Hf,
    useInsertionEffect: bf,
    useLayoutEffect: Bf,
    useMemo: Kf,
    useReducer: Ws,
    useRef: Mf,
    useState: function () {
      return Ws(Ti);
    },
    useDebugValue: ba,
    useDeferredValue: function (e) {
      var t = at();
      return we === null ? (t.memoizedState = e) : Qf(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Ws(Ti)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Nf,
    useSyncExternalStore: $f,
    useId: Gf,
    unstable_isNewReconciler: !1,
  };
function Sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Up(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ks(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var cv = typeof WeakMap == "function" ? WeakMap : Map;
function Xf(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ho || ((Ho = !0), (Gl = r)), zl(e, t);
    }),
    n
  );
}
function Zf(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        zl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        zl(e, t),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function dc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = xv.bind(null, e, t, n)), t.then(e, e));
}
function fc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Nt(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dv = Ft.ReactCurrentOwner,
  be = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Lf(t, null, n, r) : wr(t, e.child, n, r);
}
function pc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    hr(t, i),
    (r = za(e, t, n, r, o, i)),
    (n = Fa()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        zt(e, t, i))
      : (se && n && Pa(t), (t.flags |= 1), Ae(e, t, r, i), t.child)
  );
}
function mc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ja(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), eh(e, t, o, r, i))
      : ((e = Eo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Si), n(s, r) && e.ref === t.ref)
    )
      return zt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = un(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function eh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Si(o, r) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (be = !0);
      else return (t.lanes = e.lanes), zt(e, t, i);
  }
  return Fl(e, t, n, r, i);
}
function th(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(lr, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(lr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        re(lr, Qe),
        (Qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(lr, Qe),
      (Qe |= r);
  return Ae(e, t, i, n), t.child;
}
function nh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fl(e, t, n, r, i) {
  var o = Ve(n) ? jn : Ne.current;
  return (
    (o = gr(t, o)),
    hr(t, i),
    (n = za(e, t, n, r, o, i)),
    (r = Fa()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        zt(e, t, i))
      : (se && r && Pa(t), (t.flags |= 1), Ae(e, t, n, i), t.child)
  );
}
function vc(e, t, n, r, i) {
  if (Ve(n)) {
    var o = !0;
    $o(t);
  } else o = !1;
  if ((hr(t, i), t.stateNode === null))
    _o(e, t), Of(t, n, r), Ul(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = lt(u))
      : ((u = Ve(n) ? jn : Ne.current), (u = gr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && lc(t, s, r, u)),
      (Gt = !1);
    var d = t.memoizedState;
    (s.state = d),
      Fo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Be.current || Gt
        ? (typeof c == "function" && (Al(t, n, c, r), (a = t.memoizedState)),
          (l = Gt || sc(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Rf(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : dt(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = lt(a))
        : ((a = Ve(n) ? jn : Ne.current), (a = gr(t, a)));
    var _ = n.getDerivedStateFromProps;
    (c =
      typeof _ == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && lc(t, s, r, a)),
      (Gt = !1),
      (d = t.memoizedState),
      (s.state = d),
      Fo(t, r, s, i);
    var g = t.memoizedState;
    l !== f || d !== g || Be.current || Gt
      ? (typeof _ == "function" && (Al(t, n, _, r), (g = t.memoizedState)),
        (u = Gt || sc(t, n, u, r, d, g, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ml(e, t, n, r, o, i);
}
function Ml(e, t, n, r, i, o) {
  nh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && tc(t, n, !1), zt(e, t, o);
  (r = t.stateNode), (dv.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = wr(t, e.child, null, o)), (t.child = wr(t, null, l, o)))
      : Ae(e, t, l, o),
    (t.memoizedState = r.state),
    i && tc(t, n, !0),
    t.child
  );
}
function rh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ec(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ec(e, t.context, !1),
    $a(e, t.containerInfo);
}
function gc(e, t, n, r, i) {
  return yr(), Ta(i), (t.flags |= 256), Ae(e, t, n, r), t.child;
}
var bl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ih(e, t, n) {
  var r = t.pendingProps,
    i = ae.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    re(ae, i & 1),
    e === null)
  )
    return (
      $l(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = ls(s, r, 0, null)),
              (e = On(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Bl(n)),
              (t.memoizedState = bl),
              e)
            : Ba(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return fv(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = un(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = un(l, o)) : ((o = On(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Bl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = bl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = un(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ba(e, t) {
  return (
    (t = ls({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function io(e, t, n, r) {
  return (
    r !== null && Ta(r),
    wr(t, e.child, null, n),
    (e = Ba(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function fv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ks(Error(P(422)))), io(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = ls({ mode: "visible", children: r.children }, i, 0, null)),
        (o = On(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && wr(t, e.child, null, s),
        (t.child.memoizedState = Bl(s)),
        (t.memoizedState = bl),
        o);
  if (!(t.mode & 1)) return io(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(P(419))), (r = Ks(o, r, void 0)), io(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), be || l)) {
    if (((r = Ee), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Ut(e, i), gt(r, e, i, -1));
    }
    return Ga(), (r = Ks(Error(P(421)))), io(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ge = on(i.nextSibling)),
      (Je = t),
      (se = !0),
      (mt = null),
      e !== null &&
        ((rt[it++] = Lt),
        (rt[it++] = Dt),
        (rt[it++] = Ln),
        (Lt = e.id),
        (Dt = e.overflow),
        (Ln = t)),
      (t = Ba(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Il(e.return, t, n);
}
function Qs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function oh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ae(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
        else if (e.tag === 19) yc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Mo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Qs(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Mo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Qs(t, !0, n, null, o);
        break;
      case "together":
        Qs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _o(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Nn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = un(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hv(e, t, n) {
  switch (t.tag) {
    case 3:
      rh(t), yr();
      break;
    case 5:
      Df(t);
      break;
    case 1:
      Ve(t.type) && $o(t);
      break;
    case 4:
      $a(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      re(Uo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ih(e, t, n)
          : (re(ae, ae.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      re(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return oh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        re(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), th(e, t, n);
  }
  return zt(e, t, n);
}
var sh, Vl, lh, ah;
sh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vl = function () {};
lh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Pn(Ct.current);
    var o = null;
    switch (n) {
      case "input":
        (i = dl(e, i)), (r = dl(e, r)), (o = []);
        break;
      case "select":
        (i = ce({}, i, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = pl(e, i)), (r = pl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Do);
    }
    vl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (pi.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (pi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ie("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ah = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function pv(e, t, n) {
  var r = t.pendingProps;
  switch ((Ra(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return Ve(t.type) && No(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        _r(),
        oe(Be),
        oe(Ne),
        Aa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (no(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), mt !== null && (Yl(mt), (mt = null)))),
        Vl(e, t),
        je(t),
        null
      );
    case 5:
      Ia(t);
      var i = Pn(Pi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return je(t), null;
        }
        if (((e = Pn(Ct.current)), no(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Et] = t), (r[xi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Yr.length; i++) ie(Yr[i], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Ru(r, o), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Ou(r, o), ie("invalid", r);
          }
          vl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      to(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      to(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : pi.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              Qi(r), Tu(r, o, !0);
              break;
            case "textarea":
              Qi(r), ju(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Do);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $d(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Et] = t),
            (e[xi] = r),
            sh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = gl(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Yr.length; i++) ie(Yr[i], e);
                i = r;
                break;
              case "source":
                ie("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (i = r);
                break;
              case "details":
                ie("toggle", e), (i = r);
                break;
              case "input":
                Ru(e, r), (i = dl(e, r)), ie("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ce({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                Ou(e, r), (i = pl(e, r)), ie("invalid", e);
                break;
              default:
                i = r;
            }
            vl(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Ud(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Id(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && mi(e, a)
                    : typeof a == "number" && mi(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (pi.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && ie("scroll", e)
                      : a != null && fa(e, o, a, s));
              }
            switch (n) {
              case "input":
                Qi(e), Tu(e, r, !1);
                break;
              case "textarea":
                Qi(e), ju(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ur(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ur(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Do);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) ah(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = Pn(Pi.current)), Pn(Ct.current), no(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Et] = t),
            (o = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                to(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  to(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Et] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (oe(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Ge !== null && t.mode & 1 && !(t.flags & 128))
          Cf(), yr(), (t.flags |= 98560), (o = !1);
        else if (((o = no(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(P(317));
            o[Et] = t;
          } else
            yr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (o = !1);
        } else mt !== null && (Yl(mt), (mt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? _e === 0 && (_e = 3) : Ga())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        _r(), Vl(e, t), e === null && ki(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return La(t.type._context), je(t), null;
    case 17:
      return Ve(t.type) && No(), je(t), null;
    case 19:
      if ((oe(ae), (o = t.memoizedState), o === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Mr(o, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Mo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Mr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ve() > kr &&
            ((t.flags |= 128), (r = !0), Mr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Mo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !se)
            )
              return je(t), null;
          } else
            2 * ve() - o.renderingStartTime > kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ve()),
          (t.sibling = null),
          (n = ae.current),
          re(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Qa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function mv(e, t) {
  switch ((Ra(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && No(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _r(),
        oe(Be),
        oe(Ne),
        Aa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ia(t), null;
    case 13:
      if (
        (oe(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        yr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(ae), null;
    case 4:
      return _r(), null;
    case 10:
      return La(t.type._context), null;
    case 22:
    case 23:
      return Qa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oo = !1,
  De = !1,
  vv = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function sr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function Hl(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var wc = !1;
function gv(e, t) {
  if (((Rl = Oo), (e = ff()), Ca(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var _;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (_ = f.firstChild) !== null;

            )
              (d = f), (f = _);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (_ = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = _;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Tl = { focusedElem: e, selectionRange: n }, Oo = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    E = g.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : dt(t.type, y),
                      E
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (h) {
          fe(t, t.return, h);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (g = wc), (wc = !1), g;
}
function si(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Hl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function os(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Wl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function uh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), uh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Et], delete t[xi], delete t[Ll], delete t[Zm], delete t[ev])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ch(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ch(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Kl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Do));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), (e = e.sibling);
}
function Ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ql(e, t, n), e = e.sibling; e !== null; ) Ql(e, t, n), (e = e.sibling);
}
var Pe = null,
  ft = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) dh(e, t, n), (n = n.sibling);
}
function dh(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function")
    try {
      xt.onCommitFiberUnmount(Yo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || sr(n, t);
    case 6:
      var r = Pe,
        i = ft;
      (Pe = null),
        Ht(e, t, n),
        (Pe = r),
        (ft = i),
        Pe !== null &&
          (ft
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (ft
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ms(e.parentNode, n)
              : e.nodeType === 1 && Ms(e, n),
            wi(e))
          : Ms(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (i = ft),
        (Pe = n.stateNode.containerInfo),
        (ft = !0),
        Ht(e, t, n),
        (Pe = r),
        (ft = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Hl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (sr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          fe(n, t, l);
        }
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), Ht(e, t, n), (De = r))
        : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function Sc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vv()),
      t.forEach(function (r) {
        var i = Pv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Pe = l.stateNode), (ft = !1);
              break e;
            case 3:
              (Pe = l.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Pe = l.stateNode.containerInfo), (ft = !0);
              break e;
          }
          l = l.return;
        }
        if (Pe === null) throw Error(P(160));
        dh(o, s, i), (Pe = null), (ft = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        fe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) fh(t, e), (t = t.sibling);
}
function fh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), _t(e), r & 4)) {
        try {
          si(3, e, e.return), os(3, e);
        } catch (y) {
          fe(e, e.return, y);
        }
        try {
          si(5, e, e.return);
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 1:
      ct(t, e), _t(e), r & 512 && n !== null && sr(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        _t(e),
        r & 512 && n !== null && sr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          mi(i, "");
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Dd(i, o),
              gl(l, s);
            var u = gl(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? Ud(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Id(i, f)
                : c === "children"
                ? mi(i, f)
                : fa(i, c, f, u);
            }
            switch (l) {
              case "input":
                fl(i, o);
                break;
              case "textarea":
                Nd(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var _ = o.value;
                _ != null
                  ? ur(i, !!o.multiple, _, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ur(i, !!o.multiple, o.defaultValue, !0)
                      : ur(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[xi] = o;
          } catch (y) {
            fe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ct(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          wi(t.containerInfo);
        } catch (y) {
          fe(e, e.return, y);
        }
      break;
    case 4:
      ct(t, e), _t(e);
      break;
    case 13:
      ct(t, e),
        _t(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Wa = ve())),
        r & 4 && Sc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (u = De) || c), ct(t, e), (De = u)) : ct(t, e),
        _t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (f = N = c; N !== null; ) {
              switch (((d = N), (_ = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  si(4, d, d.return);
                  break;
                case 1:
                  sr(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      fe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  sr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Ec(f);
                    continue;
                  }
              }
              _ !== null ? ((_.return = d), (N = _)) : Ec(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Ad("display", s)));
              } catch (y) {
                fe(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                fe(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), _t(e), r & 4 && Sc(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ch(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (mi(i, ""), (r.flags &= -33));
          var o = _c(e);
          Ql(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = _c(e);
          Kl(e, l, s);
          break;
        default:
          throw Error(P(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yv(e, t, n) {
  (N = e), hh(e);
}
function hh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || oo;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || De;
        l = oo;
        var u = De;
        if (((oo = s), (De = a) && !u))
          for (N = i; N !== null; )
            (s = N),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? xc(i)
                : a !== null
                ? ((a.return = s), (N = a))
                : xc(i);
        for (; o !== null; ) (N = o), hh(o), (o = o.sibling);
        (N = i), (oo = l), (De = u);
      }
      kc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (N = o)) : kc(e);
  }
}
function kc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || os(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && oc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                oc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && wi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        De || (t.flags & 512 && Wl(t));
      } catch (d) {
        fe(t, t.return, d);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Ec(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function xc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            os(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, i, a);
            }
          }
          var o = t.return;
          try {
            Wl(t);
          } catch (a) {
            fe(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Wl(t);
          } catch (a) {
            fe(t, s, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (N = l);
      break;
    }
    N = t.return;
  }
}
var wv = Math.ceil,
  Vo = Ft.ReactCurrentDispatcher,
  Va = Ft.ReactCurrentOwner,
  st = Ft.ReactCurrentBatchConfig,
  J = 0,
  Ee = null,
  ye = null,
  Re = 0,
  Qe = 0,
  lr = hn(0),
  _e = 0,
  ji = null,
  Nn = 0,
  ss = 0,
  Ha = 0,
  li = null,
  Me = null,
  Wa = 0,
  kr = 1 / 0,
  Ot = null,
  Ho = !1,
  Gl = null,
  ln = null,
  so = !1,
  en = null,
  Wo = 0,
  ai = 0,
  Jl = null,
  So = -1,
  ko = 0;
function Ue() {
  return J & 6 ? ve() : So !== -1 ? So : (So = ve());
}
function an(e) {
  return e.mode & 1
    ? J & 2 && Re !== 0
      ? Re & -Re
      : nv.transition !== null
      ? (ko === 0 && (ko = Jd()), ko)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nf(e.type))),
        e)
    : 1;
}
function gt(e, t, n, r) {
  if (50 < ai) throw ((ai = 0), (Jl = null), Error(P(185)));
  Ii(e, n, r),
    (!(J & 2) || e !== Ee) &&
      (e === Ee && (!(J & 2) && (ss |= n), _e === 4 && Yt(e, Re)),
      He(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((kr = ve() + 500), ns && pn()));
}
function He(e, t) {
  var n = e.callbackNode;
  nm(e, t);
  var r = To(e, e === Ee ? Re : 0);
  if (r === 0)
    n !== null && Nu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Nu(n), t === 1))
      e.tag === 0 ? tv(Cc.bind(null, e)) : kf(Cc.bind(null, e)),
        Ym(function () {
          !(J & 6) && pn();
        }),
        (n = null);
    else {
      switch (qd(r)) {
        case 1:
          n = ga;
          break;
        case 4:
          n = Qd;
          break;
        case 16:
          n = Ro;
          break;
        case 536870912:
          n = Gd;
          break;
        default:
          n = Ro;
      }
      n = Sh(n, ph.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ph(e, t) {
  if (((So = -1), (ko = 0), J & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (pr() && e.callbackNode !== n) return null;
  var r = To(e, e === Ee ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ko(e, r);
  else {
    t = r;
    var i = J;
    J |= 2;
    var o = vh();
    (Ee !== e || Re !== t) && ((Ot = null), (kr = ve() + 500), Tn(e, t));
    do
      try {
        kv();
        break;
      } catch (l) {
        mh(e, l);
      }
    while (!0);
    ja(),
      (Vo.current = o),
      (J = i),
      ye !== null ? (t = 0) : ((Ee = null), (Re = 0), (t = _e));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = kl(e)), i !== 0 && ((r = i), (t = ql(e, i)))), t === 1)
    )
      throw ((n = ji), Tn(e, 0), Yt(e, r), He(e, ve()), n);
    if (t === 6) Yt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !_v(i) &&
          ((t = Ko(e, r)),
          t === 2 && ((o = kl(e)), o !== 0 && ((r = o), (t = ql(e, o)))),
          t === 1))
      )
        throw ((n = ji), Tn(e, 0), Yt(e, r), He(e, ve()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          kn(e, Me, Ot);
          break;
        case 3:
          if (
            (Yt(e, r), (r & 130023424) === r && ((t = Wa + 500 - ve()), 10 < t))
          ) {
            if (To(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ue(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = jl(kn.bind(null, e, Me, Ot), t);
            break;
          }
          kn(e, Me, Ot);
          break;
        case 4:
          if ((Yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - vt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * wv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = jl(kn.bind(null, e, Me, Ot), r);
            break;
          }
          kn(e, Me, Ot);
          break;
        case 5:
          kn(e, Me, Ot);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return He(e, ve()), e.callbackNode === n ? ph.bind(null, e) : null;
}
function ql(e, t) {
  var n = li;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = Ko(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Yl(t)),
    e
  );
}
function Yl(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function _v(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!yt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Yt(e, t) {
  for (
    t &= ~Ha,
      t &= ~ss,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cc(e) {
  if (J & 6) throw Error(P(327));
  pr();
  var t = To(e, 0);
  if (!(t & 1)) return He(e, ve()), null;
  var n = Ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = kl(e);
    r !== 0 && ((t = r), (n = ql(e, r)));
  }
  if (n === 1) throw ((n = ji), Tn(e, 0), Yt(e, t), He(e, ve()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kn(e, Me, Ot),
    He(e, ve()),
    null
  );
}
function Ka(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((kr = ve() + 500), ns && pn());
  }
}
function $n(e) {
  en !== null && en.tag === 0 && !(J & 6) && pr();
  var t = J;
  J |= 1;
  var n = st.transition,
    r = Y;
  try {
    if (((st.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (st.transition = n), (J = t), !(J & 6) && pn();
  }
}
function Qa() {
  (Qe = lr.current), oe(lr);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qm(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((Ra(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && No();
          break;
        case 3:
          _r(), oe(Be), oe(Ne), Aa();
          break;
        case 5:
          Ia(r);
          break;
        case 4:
          _r();
          break;
        case 13:
          oe(ae);
          break;
        case 19:
          oe(ae);
          break;
        case 10:
          La(r.type._context);
          break;
        case 22:
        case 23:
          Qa();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (ye = e = un(e.current, null)),
    (Re = Qe = t),
    (_e = 0),
    (ji = null),
    (Ha = ss = Nn = 0),
    (Me = li = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Cn = null;
  }
  return e;
}
function mh(e, t) {
  do {
    var n = ye;
    try {
      if ((ja(), (yo.current = Bo), bo)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        bo = !1;
      }
      if (
        ((Dn = 0),
        (ke = we = ue = null),
        (oi = !1),
        (Ri = 0),
        (Va.current = null),
        n === null || n.return === null)
      ) {
        (_e = 1), (ji = t), (ye = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Re),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var _ = fc(s);
          if (_ !== null) {
            (_.flags &= -257),
              hc(_, s, l, o, t),
              _.mode & 1 && dc(o, u, t),
              (t = _),
              (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              dc(o, u, t), Ga();
              break e;
            }
            a = Error(P(426));
          }
        } else if (se && l.mode & 1) {
          var E = fc(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              hc(E, s, l, o, t),
              Ta(Sr(a, l));
            break e;
          }
        }
        (o = a = Sr(a, l)),
          _e !== 4 && (_e = 2),
          li === null ? (li = [o]) : li.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Xf(o, a, t);
              ic(o, m);
              break e;
            case 1:
              l = a;
              var p = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (ln === null || !ln.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = Zf(o, l, t);
                ic(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      yh(n);
    } catch (C) {
      (t = C), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vh() {
  var e = Vo.current;
  return (Vo.current = Bo), e === null ? Bo : e;
}
function Ga() {
  (_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    Ee === null || (!(Nn & 268435455) && !(ss & 268435455)) || Yt(Ee, Re);
}
function Ko(e, t) {
  var n = J;
  J |= 2;
  var r = vh();
  (Ee !== e || Re !== t) && ((Ot = null), Tn(e, t));
  do
    try {
      Sv();
      break;
    } catch (i) {
      mh(e, i);
    }
  while (!0);
  if ((ja(), (J = n), (Vo.current = r), ye !== null)) throw Error(P(261));
  return (Ee = null), (Re = 0), _e;
}
function Sv() {
  for (; ye !== null; ) gh(ye);
}
function kv() {
  for (; ye !== null && !Qp(); ) gh(ye);
}
function gh(e) {
  var t = _h(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? yh(e) : (ye = t),
    (Va.current = null);
}
function yh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = mv(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_e = 6), (ye = null);
        return;
      }
    } else if (((n = pv(n, t, Qe)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function kn(e, t, n) {
  var r = Y,
    i = st.transition;
  try {
    (st.transition = null), (Y = 1), Ev(e, t, n, r);
  } finally {
    (st.transition = i), (Y = r);
  }
  return null;
}
function Ev(e, t, n, r) {
  do pr();
  while (en !== null);
  if (J & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (rm(e, o),
    e === Ee && ((ye = Ee = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      so ||
      ((so = !0),
      Sh(Ro, function () {
        return pr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = st.transition), (st.transition = null);
    var s = Y;
    Y = 1;
    var l = J;
    (J |= 4),
      (Va.current = null),
      gv(e, n),
      fh(n, e),
      Vm(Tl),
      (Oo = !!Rl),
      (Tl = Rl = null),
      (e.current = n),
      yv(n),
      Gp(),
      (J = l),
      (Y = s),
      (st.transition = o);
  } else e.current = n;
  if (
    (so && ((so = !1), (en = e), (Wo = i)),
    (o = e.pendingLanes),
    o === 0 && (ln = null),
    Yp(n.stateNode),
    He(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ho) throw ((Ho = !1), (e = Gl), (Gl = null), e);
  return (
    Wo & 1 && e.tag !== 0 && pr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Jl ? ai++ : ((ai = 0), (Jl = e))) : (ai = 0),
    pn(),
    null
  );
}
function pr() {
  if (en !== null) {
    var e = qd(Wo),
      t = st.transition,
      n = Y;
    try {
      if (((st.transition = null), (Y = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), (Wo = 0), J & 6)) throw Error(P(331));
        var i = J;
        for (J |= 4, N = e.current; N !== null; ) {
          var o = N,
            s = o.child;
          if (N.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (N = u; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      si(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (N = f);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var d = c.sibling,
                        _ = c.return;
                      if ((uh(c), c === u)) {
                        N = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = _), (N = d);
                        break;
                      }
                      N = _;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var E = y.sibling;
                    (y.sibling = null), (y = E);
                  } while (y !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (N = s);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    si(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (N = m);
                break e;
              }
              N = o.return;
            }
        }
        var p = e.current;
        for (N = p; N !== null; ) {
          s = N;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (N = v);
          else
            e: for (s = p; N !== null; ) {
              if (((l = N), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      os(9, l);
                  }
                } catch (C) {
                  fe(l, l.return, C);
                }
              if (l === s) {
                N = null;
                break e;
              }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (N = h);
                break e;
              }
              N = l.return;
            }
        }
        if (
          ((J = i), pn(), xt && typeof xt.onPostCommitFiberRoot == "function")
        )
          try {
            xt.onPostCommitFiberRoot(Yo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (st.transition = t);
    }
  }
  return !1;
}
function Pc(e, t, n) {
  (t = Sr(n, t)),
    (t = Xf(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Ue()),
    e !== null && (Ii(e, 1, t), He(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          (e = Sr(n, e)),
            (e = Zf(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Ue()),
            t !== null && (Ii(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Re & n) === n &&
      (_e === 4 || (_e === 3 && (Re & 130023424) === Re && 500 > ve() - Wa)
        ? Tn(e, 0)
        : (Ha |= n)),
    He(e, t);
}
function wh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qi), (qi <<= 1), !(qi & 130023424) && (qi = 4194304))
      : (t = 1));
  var n = Ue();
  (e = Ut(e, t)), e !== null && (Ii(e, t, n), He(e, n));
}
function Cv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wh(e, n);
}
function Pv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), wh(e, n);
}
var _h;
_h = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (be = !1), hv(e, t, n);
      be = !!(e.flags & 131072);
    }
  else (be = !1), se && t.flags & 1048576 && Ef(t, Ao, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _o(e, t), (e = t.pendingProps);
      var i = gr(t, Ne.current);
      hr(t, n), (i = za(null, t, r, e, i, n));
      var o = Fa();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((o = !0), $o(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Na(t),
            (i.updater = rs),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ul(t, r, e, n),
            (t = Ml(null, t, r, !0, o, n)))
          : ((t.tag = 0), se && o && Pa(t), Ae(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_o(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Tv(r)),
          (e = dt(r, e)),
          i)
        ) {
          case 0:
            t = Fl(null, t, r, e, n);
            break e;
          case 1:
            t = vc(null, t, r, e, n);
            break e;
          case 11:
            t = pc(null, t, r, e, n);
            break e;
          case 14:
            t = mc(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : dt(r, i)),
        Fl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : dt(r, i)),
        vc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((rh(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Rf(e, t),
          Fo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Sr(Error(P(423)), t)), (t = gc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Sr(Error(P(424)), t)), (t = gc(e, t, r, n, i));
            break e;
          } else
            for (
              Ge = on(t.stateNode.containerInfo.firstChild),
                Je = t,
                se = !0,
                mt = null,
                n = Lf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yr(), r === i)) {
            t = zt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Df(t),
        e === null && $l(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ol(r, i) ? (s = null) : o !== null && Ol(r, o) && (t.flags |= 32),
        nh(e, t),
        Ae(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && $l(t), null;
    case 13:
      return ih(e, t, n);
    case 4:
      return (
        $a(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = wr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : dt(r, i)),
        pc(e, t, r, i, n)
      );
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          re(Uo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (yt(o.value, s)) {
            if (o.children === i.children && !Be.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Nt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Il(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(P(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Il(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ae(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        hr(t, n),
        (i = lt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = dt(r, t.pendingProps)),
        (i = dt(r.type, i)),
        mc(e, t, r, i, n)
      );
    case 15:
      return eh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : dt(r, i)),
        _o(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), $o(t)) : (e = !1),
        hr(t, n),
        Of(t, r, i),
        Ul(t, r, i, n),
        Ml(null, t, r, !0, e, n)
      );
    case 19:
      return oh(e, t, n);
    case 22:
      return th(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Sh(e, t) {
  return Kd(e, t);
}
function Rv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(e, t, n, r) {
  return new Rv(e, t, n, r);
}
function Ja(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Tv(e) {
  if (typeof e == "function") return Ja(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pa)) return 11;
    if (e === ma) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Eo(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ja(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Yn:
        return On(n.children, i, o, t);
      case ha:
        (s = 8), (i |= 8);
        break;
      case ll:
        return (
          (e = ot(12, n, t, i | 2)), (e.elementType = ll), (e.lanes = o), e
        );
      case al:
        return (e = ot(13, n, t, i)), (e.elementType = al), (e.lanes = o), e;
      case ul:
        return (e = ot(19, n, t, i)), (e.elementType = ul), (e.lanes = o), e;
      case Od:
        return ls(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Rd:
              s = 10;
              break e;
            case Td:
              s = 9;
              break e;
            case pa:
              s = 11;
              break e;
            case ma:
              s = 14;
              break e;
            case Qt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ot(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function On(e, t, n, r) {
  return (e = ot(7, e, r, t)), (e.lanes = n), e;
}
function ls(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)),
    (e.elementType = Od),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gs(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function Js(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ov(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Os(0)),
    (this.expirationTimes = Os(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Os(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function qa(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Ov(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ot(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Na(o),
    e
  );
}
function jv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kh(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return Sf(e, n, t);
  }
  return t;
}
function Eh(e, t, n, r, i, o, s, l, a) {
  return (
    (e = qa(n, r, !0, e, i, o, s, l, a)),
    (e.context = kh(null)),
    (n = e.current),
    (r = Ue()),
    (i = an(n)),
    (o = Nt(r, i)),
    (o.callback = t ?? null),
    sn(n, o, i),
    (e.current.lanes = i),
    Ii(e, i, r),
    He(e, r),
    e
  );
}
function as(e, t, n, r) {
  var i = t.current,
    o = Ue(),
    s = an(i);
  return (
    (n = kh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(i, t, s)),
    e !== null && (gt(e, i, s, o), go(e, i, s)),
    s
  );
}
function Qo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ya(e, t) {
  Rc(e, t), (e = e.alternate) && Rc(e, t);
}
function Lv() {
  return null;
}
var xh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xa(e) {
  this._internalRoot = e;
}
us.prototype.render = Xa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  as(e, t, null, null);
};
us.prototype.unmount = Xa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $n(function () {
      as(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function us(e) {
  this._internalRoot = e;
}
us.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
    qt.splice(n, 0, e), n === 0 && tf(e);
  }
};
function Za(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tc() {}
function Dv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Qo(s);
        o.call(u);
      };
    }
    var s = Eh(t, r, e, 0, null, !1, !1, "", Tc);
    return (
      (e._reactRootContainer = s),
      (e[At] = s.current),
      ki(e.nodeType === 8 ? e.parentNode : e),
      $n(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Qo(a);
      l.call(u);
    };
  }
  var a = qa(e, 0, !1, null, null, !1, !1, "", Tc);
  return (
    (e._reactRootContainer = a),
    (e[At] = a.current),
    ki(e.nodeType === 8 ? e.parentNode : e),
    $n(function () {
      as(t, a, n, r);
    }),
    a
  );
}
function ds(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Qo(s);
        l.call(a);
      };
    }
    as(t, s, e, i);
  } else s = Dv(n, t, e, i, r);
  return Qo(s);
}
Yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qr(t.pendingLanes);
        n !== 0 &&
          (ya(t, n | 1), He(t, ve()), !(J & 6) && ((kr = ve() + 500), pn()));
      }
      break;
    case 13:
      $n(function () {
        var r = Ut(e, 1);
        if (r !== null) {
          var i = Ue();
          gt(r, e, 1, i);
        }
      }),
        Ya(e, 1);
  }
};
wa = function (e) {
  if (e.tag === 13) {
    var t = Ut(e, 134217728);
    if (t !== null) {
      var n = Ue();
      gt(t, e, 134217728, n);
    }
    Ya(e, 134217728);
  }
};
Xd = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = Ut(e, t);
    if (n !== null) {
      var r = Ue();
      gt(n, e, t, r);
    }
    Ya(e, t);
  }
};
Zd = function () {
  return Y;
};
ef = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
wl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((fl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ts(r);
            if (!i) throw Error(P(90));
            Ld(r), fl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Nd(e, n);
      break;
    case "select":
      (t = n.value), t != null && ur(e, !!n.multiple, t, !1);
  }
};
Md = Ka;
bd = $n;
var Nv = { usingClientEntryPoint: !1, Events: [Ui, tr, ts, zd, Fd, Ka] },
  br = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  $v = {
    bundleType: br.bundleType,
    version: br.version,
    rendererPackageName: br.rendererPackageName,
    rendererConfig: br.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Hd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: br.findFiberByHostInstance || Lv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!lo.isDisabled && lo.supportsFiber)
    try {
      (Yo = lo.inject($v)), (xt = lo);
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nv;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Za(t)) throw Error(P(200));
  return jv(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!Za(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = xh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = qa(e, 1, !1, null, null, n, !1, r, i)),
    (e[At] = t.current),
    ki(e.nodeType === 8 ? e.parentNode : e),
    new Xa(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = Hd(t)), (e = e === null ? null : e.stateNode), e;
};
Ye.flushSync = function (e) {
  return $n(e);
};
Ye.hydrate = function (e, t, n) {
  if (!cs(t)) throw Error(P(200));
  return ds(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!Za(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = xh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Eh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[At] = t.current),
    ki(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new us(t);
};
Ye.render = function (e, t, n) {
  if (!cs(t)) throw Error(P(200));
  return ds(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!cs(e)) throw Error(P(40));
  return e._reactRootContainer
    ? ($n(function () {
        ds(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = Ka;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cs(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return ds(e, t, n, !1, r);
};
Ye.version = "18.2.0-next-9e3b772b8-20220608";
function Ch() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ch);
    } catch (e) {
      console.error(e);
    }
}
Ch(), (kd.exports = Ye);
var eu = kd.exports;
const Iv = cd(eu),
  Av = ud({ __proto__: null, default: Iv }, [eu]);
var Oc = eu;
(ol.createRoot = Oc.createRoot), (ol.hydrateRoot = Oc.hydrateRoot);
/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function he() {
  return (
    (he = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    he.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pe || (pe = {}));
const jc = "popstate";
function Uv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return Li(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : An(i);
  }
  return Fv(t, n, null, e);
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function In(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zv() {
  return Math.random().toString(36).substr(2, 8);
}
function Lc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Li(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    he(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Mt(t) : t,
      { state: n, key: (t && t.key) || r || zv() }
    )
  );
}
function An(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Mt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Fv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = pe.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(he({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = pe.Pop;
    let E = c(),
      m = E == null ? null : E - u;
    (u = E), a && a({ action: l, location: y.location, delta: m });
  }
  function d(E, m) {
    l = pe.Push;
    let p = Li(y.location, E, m);
    n && n(p, E), (u = c() + 1);
    let v = Lc(p, u),
      h = y.createHref(p);
    try {
      s.pushState(v, "", h);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(h);
    }
    o && a && a({ action: l, location: y.location, delta: 1 });
  }
  function _(E, m) {
    l = pe.Replace;
    let p = Li(y.location, E, m);
    n && n(p, E), (u = c());
    let v = Lc(p, u),
      h = y.createHref(p);
    s.replaceState(v, "", h),
      o && a && a({ action: l, location: y.location, delta: 0 });
  }
  function g(E) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof E == "string" ? E : An(E);
    return (
      H(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(E) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(jc, f),
        (a = E),
        () => {
          i.removeEventListener(jc, f), (a = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: g,
    encodeLocation(E) {
      let m = g(E);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: _,
    go(E) {
      return s.go(E);
    },
  };
  return y;
}
var me;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(me || (me = {}));
const Mv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function bv(e) {
  return e.index === !0;
}
function Xl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let s = [...n, o],
        l = typeof i.id == "string" ? i.id : s.join("-");
      if (
        (H(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        H(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        bv(i))
      ) {
        let a = he({}, i, t(i), { id: l });
        return (r[l] = a), a;
      } else {
        let a = he({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = a), i.children && (a.children = Xl(i.children, t, s, r)), a
        );
      }
    })
  );
}
function ar(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Mt(t) : t,
    i = Rr(r.pathname || "/", n);
  if (i == null) return null;
  let o = Ph(e);
  Vv(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) s = Xv(o[l], tg(i));
  return s;
}
function Bv(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Ph(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (H(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = $t([r, a.relativePath]),
      c = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (H(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Ph(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: qv(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let a of Rh(o.path)) i(o, s, a);
    }),
    t
  );
}
function Rh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Rh(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Vv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Yv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Hv = /^:\w+$/,
  Wv = 3,
  Kv = 2,
  Qv = 1,
  Gv = 10,
  Jv = -2,
  Dc = (e) => e === "*";
function qv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Dc) && (r += Jv),
    t && (r += Kv),
    n
      .filter((i) => !Dc(i))
      .reduce((i, o) => i + (Hv.test(o) ? Wv : o === "" ? Qv : Gv), r)
  );
}
function Yv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Xv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      a = s === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = Zv(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = l.route;
    o.push({
      params: r,
      pathname: $t([i, c.pathname]),
      pathnameBase: og($t([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (i = $t([i, c.pathnameBase]));
  }
  return o;
}
function Zv(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = eg(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: _ } = c;
      if (d === "*") {
        let y = l[f] || "";
        s = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const g = l[f];
      return _ && !g ? (u[d] = void 0) : (u[d] = ng(g || "", d)), u;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function eg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    In(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function tg(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      In(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ng(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      In(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Rr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function rg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Mt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ig(n, t)) : t,
    search: sg(r),
    hash: lg(i),
  };
}
function ig(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function qs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function fs(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function tu(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Mt(e))
    : ((i = he({}, e)),
      H(
        !i.pathname || !i.pathname.includes("?"),
        qs("?", "pathname", "search", i)
      ),
      H(
        !i.pathname || !i.pathname.includes("#"),
        qs("#", "pathname", "hash", i)
      ),
      H(!i.search || !i.search.includes("#"), qs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (s == null) l = n;
  else if (r) {
    let f = t[t.length - 1].replace(/^\//, "").split("/");
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), f.pop();
      i.pathname = d.join("/");
    }
    l = "/" + f.join("/");
  } else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let a = rg(i, l),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const $t = (e) => e.join("/").replace(/\/\/+/g, "/"),
  og = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  lg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class nu {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Th(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Oh = ["post", "put", "patch", "delete"],
  ag = new Set(Oh),
  ug = ["get", ...Oh],
  cg = new Set(ug),
  dg = new Set([301, 302, 303, 307, 308]),
  fg = new Set([307, 308]),
  Ys = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  hg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Br = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  jh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  pg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Lh = "remix-router-transitions";
function mg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  H(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    i = (S) => ({ hasErrorBoundary: w(S) });
  } else i = pg;
  let o = {},
    s = Xl(e.routes, i, void 0, o),
    l,
    a = e.basename || "/",
    u = he(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    c = null,
    f = new Set(),
    d = null,
    _ = null,
    g = null,
    y = e.hydrationData != null,
    E = ar(s, e.history.location, a),
    m = null;
  if (E == null) {
    let w = nt(404, { pathname: e.history.location.pathname }),
      { matches: S, route: k } = Mc(s);
    (E = S), (m = { [k.id]: w });
  }
  let p =
      !E.some((w) => w.route.lazy) &&
      (!E.some((w) => w.route.loader) || e.hydrationData != null),
    v,
    h = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: E,
      initialized: p,
      navigation: Ys,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = pe.Pop,
    T = !1,
    x,
    L = !1,
    F = new Map(),
    z = null,
    q = !1,
    xe = !1,
    Se = [],
    Pt = [],
    de = new Map(),
    bt = 0,
    Rt = -1,
    D = new Map(),
    A = new Set(),
    b = new Map(),
    Z = new Map(),
    X = new Set(),
    Ze = new Map(),
    $e = new Map(),
    vn = !1;
  function Tt() {
    if (
      ((c = e.history.listen((w) => {
        let { action: S, location: k, delta: O } = w;
        if (vn) {
          vn = !1;
          return;
        }
        In(
          $e.size === 0 || O != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let $ = gu({
          currentLocation: h.location,
          nextLocation: k,
          historyAction: S,
        });
        if ($ && O != null) {
          (vn = !0),
            e.history.go(O * -1),
            Vi($, {
              state: "blocked",
              location: k,
              proceed() {
                Vi($, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(O);
              },
              reset() {
                let B = new Map(h.blockers);
                B.set($, Br), We({ blockers: B });
              },
            });
          return;
        }
        return gn(S, k);
      })),
      n)
    ) {
      Pg(t, F);
      let w = () => Rg(t, F);
      t.addEventListener("pagehide", w),
        (z = () => t.removeEventListener("pagehide", w));
    }
    return h.initialized || gn(pe.Pop, h.location), v;
  }
  function Mn() {
    c && c(),
      z && z(),
      f.clear(),
      x && x.abort(),
      h.fetchers.forEach((w, S) => Bi(S)),
      h.blockers.forEach((w, S) => vu(S));
  }
  function Yh(w) {
    return f.add(w), () => f.delete(w);
  }
  function We(w, S) {
    S === void 0 && (S = {}), (h = he({}, h, w));
    let k = [],
      O = [];
    u.v7_fetcherPersist &&
      h.fetchers.forEach(($, B) => {
        $.state === "idle" && (X.has(B) ? O.push(B) : k.push(B));
      }),
      [...f].forEach(($) =>
        $(h, {
          deletedFetchers: O,
          unstable_viewTransitionOpts: S.viewTransitionOpts,
          unstable_flushSync: S.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (k.forEach(($) => h.fetchers.delete($)), O.forEach(($) => Bi($)));
  }
  function jr(w, S, k) {
    var O, $;
    let { flushSync: B } = k === void 0 ? {} : k,
      M =
        h.actionData != null &&
        h.navigation.formMethod != null &&
        ht(h.navigation.formMethod) &&
        h.navigation.state === "loading" &&
        ((O = w.state) == null ? void 0 : O._isRedirect) !== !0,
      U;
    S.actionData
      ? Object.keys(S.actionData).length > 0
        ? (U = S.actionData)
        : (U = null)
      : M
      ? (U = h.actionData)
      : (U = null);
    let I = S.loaderData
        ? Fc(h.loaderData, S.loaderData, S.matches || [], S.errors)
        : h.loaderData,
      Q = h.blockers;
    Q.size > 0 && ((Q = new Map(Q)), Q.forEach((ee, le) => Q.set(le, Br)));
    let Ce =
      T === !0 ||
      (h.navigation.formMethod != null &&
        ht(h.navigation.formMethod) &&
        (($ = w.state) == null ? void 0 : $._isRedirect) !== !0);
    l && ((s = l), (l = void 0)),
      q ||
        C === pe.Pop ||
        (C === pe.Push
          ? e.history.push(w, w.state)
          : C === pe.Replace && e.history.replace(w, w.state));
    let V;
    if (C === pe.Pop) {
      let ee = F.get(h.location.pathname);
      ee && ee.has(w.pathname)
        ? (V = { currentLocation: h.location, nextLocation: w })
        : F.has(w.pathname) &&
          (V = { currentLocation: w, nextLocation: h.location });
    } else if (L) {
      let ee = F.get(h.location.pathname);
      ee
        ? ee.add(w.pathname)
        : ((ee = new Set([w.pathname])), F.set(h.location.pathname, ee)),
        (V = { currentLocation: h.location, nextLocation: w });
    }
    We(
      he({}, S, {
        actionData: U,
        loaderData: I,
        historyAction: C,
        location: w,
        initialized: !0,
        navigation: Ys,
        revalidation: "idle",
        restoreScrollPosition: wu(w, S.matches || h.matches),
        preventScrollReset: Ce,
        blockers: Q,
      }),
      { viewTransitionOpts: V, flushSync: B === !0 }
    ),
      (C = pe.Pop),
      (T = !1),
      (L = !1),
      (q = !1),
      (xe = !1),
      (Se = []),
      (Pt = []);
  }
  async function cu(w, S) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let k = Zl(
        h.location,
        h.matches,
        a,
        u.v7_prependBasename,
        w,
        S == null ? void 0 : S.fromRouteId,
        S == null ? void 0 : S.relative
      ),
      {
        path: O,
        submission: $,
        error: B,
      } = Nc(u.v7_normalizeFormMethod, !1, k, S),
      M = h.location,
      U = Li(h.location, O, S && S.state);
    U = he({}, U, e.history.encodeLocation(U));
    let I = S && S.replace != null ? S.replace : void 0,
      Q = pe.Push;
    I === !0
      ? (Q = pe.Replace)
      : I === !1 ||
        ($ != null &&
          ht($.formMethod) &&
          $.formAction === h.location.pathname + h.location.search &&
          (Q = pe.Replace));
    let Ce =
        S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0,
      V = (S && S.unstable_flushSync) === !0,
      ee = gu({ currentLocation: M, nextLocation: U, historyAction: Q });
    if (ee) {
      Vi(ee, {
        state: "blocked",
        location: U,
        proceed() {
          Vi(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            cu(w, S);
        },
        reset() {
          let le = new Map(h.blockers);
          le.set(ee, Br), We({ blockers: le });
        },
      });
      return;
    }
    return await gn(Q, U, {
      submission: $,
      pendingError: B,
      preventScrollReset: Ce,
      replace: S && S.replace,
      enableViewTransition: S && S.unstable_viewTransition,
      flushSync: V,
    });
  }
  function Xh() {
    if (
      (ys(),
      We({ revalidation: "loading" }),
      h.navigation.state !== "submitting")
    ) {
      if (h.navigation.state === "idle") {
        gn(h.historyAction, h.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      gn(C || h.historyAction, h.navigation.location, {
        overrideNavigation: h.navigation,
      });
    }
  }
  async function gn(w, S, k) {
    x && x.abort(),
      (x = null),
      (C = w),
      (q = (k && k.startUninterruptedRevalidation) === !0),
      lp(h.location, h.matches),
      (T = (k && k.preventScrollReset) === !0),
      (L = (k && k.enableViewTransition) === !0);
    let O = l || s,
      $ = k && k.overrideNavigation,
      B = ar(O, S, a),
      M = (k && k.flushSync) === !0;
    if (!B) {
      let le = nt(404, { pathname: S.pathname }),
        { matches: Ie, route: wt } = Mc(O);
      ws(),
        jr(
          S,
          { matches: Ie, loaderData: {}, errors: { [wt.id]: le } },
          { flushSync: M }
        );
      return;
    }
    if (
      h.initialized &&
      !xe &&
      _g(h.location, S) &&
      !(k && k.submission && ht(k.submission.formMethod))
    ) {
      jr(S, { matches: B }, { flushSync: M });
      return;
    }
    x = new AbortController();
    let U = Hr(e.history, S, x.signal, k && k.submission),
      I,
      Q;
    if (k && k.pendingError) Q = { [ui(B).route.id]: k.pendingError };
    else if (k && k.submission && ht(k.submission.formMethod)) {
      let le = await Zh(U, S, k.submission, B, {
        replace: k.replace,
        flushSync: M,
      });
      if (le.shortCircuited) return;
      (I = le.pendingActionData),
        (Q = le.pendingActionError),
        ($ = Xs(S, k.submission)),
        (M = !1),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: Ce,
      loaderData: V,
      errors: ee,
    } = await ep(
      U,
      S,
      B,
      $,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      M,
      I,
      Q
    );
    Ce ||
      ((x = null),
      jr(
        S,
        he({ matches: B }, I ? { actionData: I } : {}, {
          loaderData: V,
          errors: ee,
        })
      ));
  }
  async function Zh(w, S, k, O, $) {
    $ === void 0 && ($ = {}), ys();
    let B = xg(S, k);
    We({ navigation: B }, { flushSync: $.flushSync === !0 });
    let M,
      U = ta(O, S);
    if (!U.route.action && !U.route.lazy)
      M = {
        type: me.error,
        error: nt(405, {
          method: w.method,
          pathname: S.pathname,
          routeId: U.route.id,
        }),
      };
    else if (((M = await Vr("action", w, U, O, o, i, a)), w.signal.aborted))
      return { shortCircuited: !0 };
    if (mr(M)) {
      let I;
      return (
        $ && $.replace != null
          ? (I = $.replace)
          : (I = M.location === h.location.pathname + h.location.search),
        await Lr(h, M, { submission: k, replace: I }),
        { shortCircuited: !0 }
      );
    }
    if (ci(M)) {
      let I = ui(O, U.route.id);
      return (
        ($ && $.replace) !== !0 && (C = pe.Push),
        { pendingActionData: {}, pendingActionError: { [I.route.id]: M.error } }
      );
    }
    if (Rn(M)) throw nt(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: M.data } };
  }
  async function ep(w, S, k, O, $, B, M, U, I, Q) {
    let Ce = O || Xs(S, $),
      V = $ || B || Vc(Ce),
      ee = l || s,
      [le, Ie] = $c(e.history, h, k, V, S, xe, Se, Pt, X, b, A, ee, a, I, Q);
    if (
      (ws(
        (te) =>
          !(k && k.some((et) => et.route.id === te)) ||
          (le && le.some((et) => et.route.id === te))
      ),
      (Rt = ++bt),
      le.length === 0 && Ie.length === 0)
    ) {
      let te = pu();
      return (
        jr(
          S,
          he(
            { matches: k, loaderData: {}, errors: Q || null },
            I ? { actionData: I } : {},
            te ? { fetchers: new Map(h.fetchers) } : {}
          ),
          { flushSync: U }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!q) {
      Ie.forEach((et) => {
        let ge = h.fetchers.get(et.key),
          yn = Wr(void 0, ge ? ge.data : void 0);
        h.fetchers.set(et.key, yn);
      });
      let te = I || h.actionData;
      We(
        he(
          { navigation: Ce },
          te
            ? Object.keys(te).length === 0
              ? { actionData: null }
              : { actionData: te }
            : {},
          Ie.length > 0 ? { fetchers: new Map(h.fetchers) } : {}
        ),
        { flushSync: U }
      );
    }
    Ie.forEach((te) => {
      de.has(te.key) && Vt(te.key),
        te.controller && de.set(te.key, te.controller);
    });
    let wt = () => Ie.forEach((te) => Vt(te.key));
    x && x.signal.addEventListener("abort", wt);
    let {
      results: Nr,
      loaderResults: _s,
      fetcherResults: bn,
    } = await du(h.matches, k, le, Ie, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    x && x.signal.removeEventListener("abort", wt),
      Ie.forEach((te) => de.delete(te.key));
    let ut = bc(Nr);
    if (ut) {
      if (ut.idx >= le.length) {
        let te = Ie[ut.idx - le.length].key;
        A.add(te);
      }
      return await Lr(h, ut.result, { replace: M }), { shortCircuited: !0 };
    }
    let { loaderData: Hi, errors: Ss } = zc(h, k, le, _s, Q, Ie, bn, Ze);
    Ze.forEach((te, et) => {
      te.subscribe((ge) => {
        (ge || te.done) && Ze.delete(et);
      });
    });
    let ks = pu(),
      Es = mu(Rt),
      Bn = ks || Es || Ie.length > 0;
    return he(
      { loaderData: Hi, errors: Ss },
      Bn ? { fetchers: new Map(h.fetchers) } : {}
    );
  }
  function tp(w, S, k, O) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    de.has(w) && Vt(w);
    let $ = (O && O.unstable_flushSync) === !0,
      B = l || s,
      M = Zl(
        h.location,
        h.matches,
        a,
        u.v7_prependBasename,
        k,
        S,
        O == null ? void 0 : O.relative
      ),
      U = ar(B, M, a);
    if (!U) {
      Dr(w, S, nt(404, { pathname: M }), { flushSync: $ });
      return;
    }
    let {
      path: I,
      submission: Q,
      error: Ce,
    } = Nc(u.v7_normalizeFormMethod, !0, M, O);
    if (Ce) {
      Dr(w, S, Ce, { flushSync: $ });
      return;
    }
    let V = ta(U, I);
    if (((T = (O && O.preventScrollReset) === !0), Q && ht(Q.formMethod))) {
      np(w, S, I, V, U, $, Q);
      return;
    }
    b.set(w, { routeId: S, path: I }), rp(w, S, I, V, U, $, Q);
  }
  async function np(w, S, k, O, $, B, M) {
    if ((ys(), b.delete(w), !O.route.action && !O.route.lazy)) {
      let ge = nt(405, { method: M.formMethod, pathname: k, routeId: S });
      Dr(w, S, ge, { flushSync: B });
      return;
    }
    let U = h.fetchers.get(w);
    Bt(w, Cg(M, U), { flushSync: B });
    let I = new AbortController(),
      Q = Hr(e.history, k, I.signal, M);
    de.set(w, I);
    let Ce = bt,
      V = await Vr("action", Q, O, $, o, i, a);
    if (Q.signal.aborted) {
      de.get(w) === I && de.delete(w);
      return;
    }
    if (X.has(w)) {
      Bt(w, Kt(void 0));
      return;
    }
    if (mr(V))
      if ((de.delete(w), Rt > Ce)) {
        Bt(w, Kt(void 0));
        return;
      } else return A.add(w), Bt(w, Wr(M)), Lr(h, V, { fetcherSubmission: M });
    if (ci(V)) {
      Dr(w, S, V.error);
      return;
    }
    if (Rn(V)) throw nt(400, { type: "defer-action" });
    let ee = h.navigation.location || h.location,
      le = Hr(e.history, ee, I.signal),
      Ie = l || s,
      wt =
        h.navigation.state !== "idle"
          ? ar(Ie, h.navigation.location, a)
          : h.matches;
    H(wt, "Didn't find any matches after fetcher action");
    let Nr = ++bt;
    D.set(w, Nr);
    let _s = Wr(M, V.data);
    h.fetchers.set(w, _s);
    let [bn, ut] = $c(
      e.history,
      h,
      wt,
      M,
      ee,
      xe,
      Se,
      Pt,
      X,
      b,
      A,
      Ie,
      a,
      { [O.route.id]: V.data },
      void 0
    );
    ut
      .filter((ge) => ge.key !== w)
      .forEach((ge) => {
        let yn = ge.key,
          _u = h.fetchers.get(yn),
          up = Wr(void 0, _u ? _u.data : void 0);
        h.fetchers.set(yn, up),
          de.has(yn) && Vt(yn),
          ge.controller && de.set(yn, ge.controller);
      }),
      We({ fetchers: new Map(h.fetchers) });
    let Hi = () => ut.forEach((ge) => Vt(ge.key));
    I.signal.addEventListener("abort", Hi);
    let {
      results: Ss,
      loaderResults: ks,
      fetcherResults: Es,
    } = await du(h.matches, wt, bn, ut, le);
    if (I.signal.aborted) return;
    I.signal.removeEventListener("abort", Hi),
      D.delete(w),
      de.delete(w),
      ut.forEach((ge) => de.delete(ge.key));
    let Bn = bc(Ss);
    if (Bn) {
      if (Bn.idx >= bn.length) {
        let ge = ut[Bn.idx - bn.length].key;
        A.add(ge);
      }
      return Lr(h, Bn.result);
    }
    let { loaderData: te, errors: et } = zc(
      h,
      h.matches,
      bn,
      ks,
      void 0,
      ut,
      Es,
      Ze
    );
    if (h.fetchers.has(w)) {
      let ge = Kt(V.data);
      h.fetchers.set(w, ge);
    }
    mu(Nr),
      h.navigation.state === "loading" && Nr > Rt
        ? (H(C, "Expected pending action"),
          x && x.abort(),
          jr(h.navigation.location, {
            matches: wt,
            loaderData: te,
            errors: et,
            fetchers: new Map(h.fetchers),
          }))
        : (We({
            errors: et,
            loaderData: Fc(h.loaderData, te, wt, et),
            fetchers: new Map(h.fetchers),
          }),
          (xe = !1));
  }
  async function rp(w, S, k, O, $, B, M) {
    let U = h.fetchers.get(w);
    Bt(w, Wr(M, U ? U.data : void 0), { flushSync: B });
    let I = new AbortController(),
      Q = Hr(e.history, k, I.signal);
    de.set(w, I);
    let Ce = bt,
      V = await Vr("loader", Q, O, $, o, i, a);
    if (
      (Rn(V) && (V = (await $h(V, Q.signal, !0)) || V),
      de.get(w) === I && de.delete(w),
      !Q.signal.aborted)
    ) {
      if (X.has(w)) {
        Bt(w, Kt(void 0));
        return;
      }
      if (mr(V))
        if (Rt > Ce) {
          Bt(w, Kt(void 0));
          return;
        } else {
          A.add(w), await Lr(h, V);
          return;
        }
      if (ci(V)) {
        Dr(w, S, V.error);
        return;
      }
      H(!Rn(V), "Unhandled fetcher deferred data"), Bt(w, Kt(V.data));
    }
  }
  async function Lr(w, S, k) {
    let {
      submission: O,
      fetcherSubmission: $,
      replace: B,
    } = k === void 0 ? {} : k;
    S.revalidate && (xe = !0);
    let M = Li(w.location, S.location, { _isRedirect: !0 });
    if ((H(M, "Expected a location on the redirect navigation"), n)) {
      let ee = !1;
      if (S.reloadDocument) ee = !0;
      else if (jh.test(S.location)) {
        const le = e.history.createURL(S.location);
        ee = le.origin !== t.location.origin || Rr(le.pathname, a) == null;
      }
      if (ee) {
        B ? t.location.replace(S.location) : t.location.assign(S.location);
        return;
      }
    }
    x = null;
    let U = B === !0 ? pe.Replace : pe.Push,
      { formMethod: I, formAction: Q, formEncType: Ce } = w.navigation;
    !O && !$ && I && Q && Ce && (O = Vc(w.navigation));
    let V = O || $;
    if (fg.has(S.status) && V && ht(V.formMethod))
      await gn(U, M, {
        submission: he({}, V, { formAction: S.location }),
        preventScrollReset: T,
      });
    else {
      let ee = Xs(M, O);
      await gn(U, M, {
        overrideNavigation: ee,
        fetcherSubmission: $,
        preventScrollReset: T,
      });
    }
  }
  async function du(w, S, k, O, $) {
    let B = await Promise.all([
        ...k.map((I) => Vr("loader", $, I, S, o, i, a)),
        ...O.map((I) =>
          I.matches && I.match && I.controller
            ? Vr(
                "loader",
                Hr(e.history, I.path, I.controller.signal),
                I.match,
                I.matches,
                o,
                i,
                a
              )
            : { type: me.error, error: nt(404, { pathname: I.path }) }
        ),
      ]),
      M = B.slice(0, k.length),
      U = B.slice(k.length);
    return (
      await Promise.all([
        Bc(
          w,
          k,
          M,
          M.map(() => $.signal),
          !1,
          h.loaderData
        ),
        Bc(
          w,
          O.map((I) => I.match),
          U,
          O.map((I) => (I.controller ? I.controller.signal : null)),
          !0
        ),
      ]),
      { results: B, loaderResults: M, fetcherResults: U }
    );
  }
  function ys() {
    (xe = !0),
      Se.push(...ws()),
      b.forEach((w, S) => {
        de.has(S) && (Pt.push(S), Vt(S));
      });
  }
  function Bt(w, S, k) {
    k === void 0 && (k = {}),
      h.fetchers.set(w, S),
      We(
        { fetchers: new Map(h.fetchers) },
        { flushSync: (k && k.flushSync) === !0 }
      );
  }
  function Dr(w, S, k, O) {
    O === void 0 && (O = {});
    let $ = ui(h.matches, S);
    Bi(w),
      We(
        { errors: { [$.route.id]: k }, fetchers: new Map(h.fetchers) },
        { flushSync: (O && O.flushSync) === !0 }
      );
  }
  function fu(w) {
    return (
      u.v7_fetcherPersist &&
        (Z.set(w, (Z.get(w) || 0) + 1), X.has(w) && X.delete(w)),
      h.fetchers.get(w) || hg
    );
  }
  function Bi(w) {
    let S = h.fetchers.get(w);
    de.has(w) && !(S && S.state === "loading" && D.has(w)) && Vt(w),
      b.delete(w),
      D.delete(w),
      A.delete(w),
      X.delete(w),
      h.fetchers.delete(w);
  }
  function ip(w) {
    if (u.v7_fetcherPersist) {
      let S = (Z.get(w) || 0) - 1;
      S <= 0 ? (Z.delete(w), X.add(w)) : Z.set(w, S);
    } else Bi(w);
    We({ fetchers: new Map(h.fetchers) });
  }
  function Vt(w) {
    let S = de.get(w);
    H(S, "Expected fetch controller: " + w), S.abort(), de.delete(w);
  }
  function hu(w) {
    for (let S of w) {
      let k = fu(S),
        O = Kt(k.data);
      h.fetchers.set(S, O);
    }
  }
  function pu() {
    let w = [],
      S = !1;
    for (let k of A) {
      let O = h.fetchers.get(k);
      H(O, "Expected fetcher: " + k),
        O.state === "loading" && (A.delete(k), w.push(k), (S = !0));
    }
    return hu(w), S;
  }
  function mu(w) {
    let S = [];
    for (let [k, O] of D)
      if (O < w) {
        let $ = h.fetchers.get(k);
        H($, "Expected fetcher: " + k),
          $.state === "loading" && (Vt(k), D.delete(k), S.push(k));
      }
    return hu(S), S.length > 0;
  }
  function op(w, S) {
    let k = h.blockers.get(w) || Br;
    return $e.get(w) !== S && $e.set(w, S), k;
  }
  function vu(w) {
    h.blockers.delete(w), $e.delete(w);
  }
  function Vi(w, S) {
    let k = h.blockers.get(w) || Br;
    H(
      (k.state === "unblocked" && S.state === "blocked") ||
        (k.state === "blocked" && S.state === "blocked") ||
        (k.state === "blocked" && S.state === "proceeding") ||
        (k.state === "blocked" && S.state === "unblocked") ||
        (k.state === "proceeding" && S.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + S.state
    );
    let O = new Map(h.blockers);
    O.set(w, S), We({ blockers: O });
  }
  function gu(w) {
    let { currentLocation: S, nextLocation: k, historyAction: O } = w;
    if ($e.size === 0) return;
    $e.size > 1 && In(!1, "A router only supports one blocker at a time");
    let $ = Array.from($e.entries()),
      [B, M] = $[$.length - 1],
      U = h.blockers.get(B);
    if (
      !(U && U.state === "proceeding") &&
      M({ currentLocation: S, nextLocation: k, historyAction: O })
    )
      return B;
  }
  function ws(w) {
    let S = [];
    return (
      Ze.forEach((k, O) => {
        (!w || w(O)) && (k.cancel(), S.push(O), Ze.delete(O));
      }),
      S
    );
  }
  function sp(w, S, k) {
    if (((d = w), (g = S), (_ = k || null), !y && h.navigation === Ys)) {
      y = !0;
      let O = wu(h.location, h.matches);
      O != null && We({ restoreScrollPosition: O });
    }
    return () => {
      (d = null), (g = null), (_ = null);
    };
  }
  function yu(w, S) {
    return (
      (_ &&
        _(
          w,
          S.map((O) => Bv(O, h.loaderData))
        )) ||
      w.key
    );
  }
  function lp(w, S) {
    if (d && g) {
      let k = yu(w, S);
      d[k] = g();
    }
  }
  function wu(w, S) {
    if (d) {
      let k = yu(w, S),
        O = d[k];
      if (typeof O == "number") return O;
    }
    return null;
  }
  function ap(w) {
    (o = {}), (l = Xl(w, i, void 0, o));
  }
  return (
    (v = {
      get basename() {
        return a;
      },
      get state() {
        return h;
      },
      get routes() {
        return s;
      },
      get window() {
        return t;
      },
      initialize: Tt,
      subscribe: Yh,
      enableScrollRestoration: sp,
      navigate: cu,
      fetch: tp,
      revalidate: Xh,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: fu,
      deleteFetcher: ip,
      dispose: Mn,
      getBlocker: op,
      deleteBlocker: vu,
      _internalFetchControllers: de,
      _internalActiveDeferreds: Ze,
      _internalSetRoutes: ap,
    }),
    v
  );
}
function vg(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Zl(e, t, n, r, i, o, s) {
  let l, a;
  if (o) {
    l = [];
    for (let c of t)
      if ((l.push(c), c.route.id === o)) {
        a = c;
        break;
      }
  } else (l = t), (a = t[t.length - 1]);
  let u = tu(
    i || ".",
    fs(l).map((c) => c.pathnameBase),
    Rr(e.pathname, n) || e.pathname,
    s === "path"
  );
  return (
    i == null && ((u.search = e.search), (u.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      a &&
      a.route.index &&
      !ru(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : $t([n, u.pathname])),
    An(u)
  );
}
function Nc(e, t, n, r) {
  if (!r || !vg(r)) return { path: n };
  if (r.formMethod && !Eg(r.formMethod))
    return { path: n, error: nt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: nt(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    s = e ? o.toUpperCase() : o.toLowerCase(),
    l = Nh(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ht(s)) return i();
      let d =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((_, g) => {
              let [y, E] = g;
              return (
                "" +
                _ +
                y +
                "=" +
                E +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ht(s)) return i();
      try {
        let d = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  H(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, u;
  if (r.formData) (a = ea(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (a = ea(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (u = Uc(a));
  else if (r.body == null) (a = new URLSearchParams()), (u = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (u = Uc(a));
    } catch {
      return i();
    }
  let c = {
    formMethod: s,
    formAction: l,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (ht(c.formMethod)) return { path: n, submission: c };
  let f = Mt(n);
  return (
    t && f.search && ru(f.search) && a.append("index", ""),
    (f.search = "?" + a),
    { path: An(f), submission: c }
  );
}
function gg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function $c(e, t, n, r, i, o, s, l, a, u, c, f, d, _, g) {
  let y = g ? Object.values(g)[0] : _ ? Object.values(_)[0] : void 0,
    E = e.createURL(t.location),
    m = e.createURL(i),
    p = g ? Object.keys(g)[0] : void 0,
    h = gg(n, p).filter((T, x) => {
      if (T.route.lazy) return !0;
      if (T.route.loader == null) return !1;
      if (yg(t.loaderData, t.matches[x], T) || s.some((z) => z === T.route.id))
        return !0;
      let L = t.matches[x],
        F = T;
      return Ic(
        T,
        he(
          {
            currentUrl: E,
            currentParams: L.params,
            nextUrl: m,
            nextParams: F.params,
          },
          r,
          {
            actionResult: y,
            defaultShouldRevalidate:
              o ||
              E.pathname + E.search === m.pathname + m.search ||
              E.search !== m.search ||
              Dh(L, F),
          }
        )
      );
    }),
    C = [];
  return (
    u.forEach((T, x) => {
      if (!n.some((xe) => xe.route.id === T.routeId) || a.has(x)) return;
      let L = ar(f, T.path, d);
      if (!L) {
        C.push({
          key: x,
          routeId: T.routeId,
          path: T.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let F = t.fetchers.get(x),
        z = ta(L, T.path),
        q = !1;
      c.has(x)
        ? (q = !1)
        : l.includes(x)
        ? (q = !0)
        : F && F.state !== "idle" && F.data === void 0
        ? (q = o)
        : (q = Ic(
            z,
            he(
              {
                currentUrl: E,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: m,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: y, defaultShouldRevalidate: o }
            )
          )),
        q &&
          C.push({
            key: x,
            routeId: T.routeId,
            path: T.path,
            matches: L,
            match: z,
            controller: new AbortController(),
          });
    }),
    [h, C]
  );
}
function yg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Dh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Ic(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Ac(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  H(i, "No route found in manifest");
  let o = {};
  for (let s in r) {
    let a = i[s] !== void 0 && s !== "hasErrorBoundary";
    In(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !a && !Mv.has(s) && (o[s] = r[s]);
  }
  Object.assign(i, o), Object.assign(i, he({}, t(i), { lazy: void 0 }));
}
async function Vr(e, t, n, r, i, o, s, l) {
  l === void 0 && (l = {});
  let a,
    u,
    c,
    f = (g) => {
      let y,
        E = new Promise((m, p) => (y = p));
      return (
        (c = () => y()),
        t.signal.addEventListener("abort", c),
        Promise.race([
          g({ request: t, params: n.params, context: l.requestContext }),
          E,
        ])
      );
    };
  try {
    let g = n.route[e];
    if (n.route.lazy)
      if (g) {
        let y,
          E = await Promise.all([
            f(g).catch((m) => {
              y = m;
            }),
            Ac(n.route, o, i),
          ]);
        if (y) throw y;
        u = E[0];
      } else if ((await Ac(n.route, o, i), (g = n.route[e]), g)) u = await f(g);
      else if (e === "action") {
        let y = new URL(t.url),
          E = y.pathname + y.search;
        throw nt(405, { method: t.method, pathname: E, routeId: n.route.id });
      } else return { type: me.data, data: void 0 };
    else if (g) u = await f(g);
    else {
      let y = new URL(t.url),
        E = y.pathname + y.search;
      throw nt(404, { pathname: E });
    }
    H(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (g) {
    (a = me.error), (u = g);
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  if (kg(u)) {
    let g = u.status;
    if (dg.has(g)) {
      let m = u.headers.get("Location");
      if (
        (H(
          m,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !jh.test(m))
      )
        m = Zl(new URL(t.url), r.slice(0, r.indexOf(n) + 1), s, !0, m);
      else if (!l.isStaticRequest) {
        let p = new URL(t.url),
          v = m.startsWith("//") ? new URL(p.protocol + m) : new URL(m),
          h = Rr(v.pathname, s) != null;
        v.origin === p.origin && h && (m = v.pathname + v.search + v.hash);
      }
      if (l.isStaticRequest) throw (u.headers.set("Location", m), u);
      return {
        type: me.redirect,
        status: g,
        location: m,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: a === me.error ? me.error : me.data, response: u };
    let y,
      E = u.headers.get("Content-Type");
    return (
      E && /\bapplication\/json\b/.test(E)
        ? (y = await u.json())
        : (y = await u.text()),
      a === me.error
        ? { type: a, error: new nu(g, u.statusText, y), headers: u.headers }
        : { type: me.data, data: y, statusCode: u.status, headers: u.headers }
    );
  }
  if (a === me.error) return { type: a, error: u };
  if (Sg(u)) {
    var d, _;
    return {
      type: me.deferred,
      deferredData: u,
      statusCode: (d = u.init) == null ? void 0 : d.status,
      headers:
        ((_ = u.init) == null ? void 0 : _.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: me.data, data: u };
}
function Hr(e, t, n, r) {
  let i = e.createURL(Nh(t)).toString(),
    o = { signal: n };
  if (r && ht(r.formMethod)) {
    let { formMethod: s, formEncType: l } = r;
    (o.method = s.toUpperCase()),
      l === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": l })),
          (o.body = JSON.stringify(r.json)))
        : l === "text/plain"
        ? (o.body = r.text)
        : l === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = ea(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function ea(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Uc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function wg(e, t, n, r, i) {
  let o = {},
    s = null,
    l,
    a = !1,
    u = {};
  return (
    n.forEach((c, f) => {
      let d = t[f].route.id;
      if (
        (H(!mr(c), "Cannot handle redirect results in processLoaderData"),
        ci(c))
      ) {
        let _ = ui(e, d),
          g = c.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (s = s || {}),
          s[_.route.id] == null && (s[_.route.id] = g),
          (o[d] = void 0),
          a || ((a = !0), (l = Th(c.error) ? c.error.status : 500)),
          c.headers && (u[d] = c.headers);
      } else
        Rn(c)
          ? (i.set(d, c.deferredData), (o[d] = c.deferredData.data))
          : (o[d] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !a &&
            (l = c.statusCode),
          c.headers && (u[d] = c.headers);
    }),
    r && ((s = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: s, statusCode: l || 200, loaderHeaders: u }
  );
}
function zc(e, t, n, r, i, o, s, l) {
  let { loaderData: a, errors: u } = wg(t, n, r, i, l);
  for (let c = 0; c < o.length; c++) {
    let { key: f, match: d, controller: _ } = o[c];
    H(
      s !== void 0 && s[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let g = s[c];
    if (!(_ && _.signal.aborted))
      if (ci(g)) {
        let y = ui(e.matches, d == null ? void 0 : d.route.id);
        (u && u[y.route.id]) || (u = he({}, u, { [y.route.id]: g.error })),
          e.fetchers.delete(f);
      } else if (mr(g)) H(!1, "Unhandled fetcher revalidation redirect");
      else if (Rn(g)) H(!1, "Unhandled fetcher deferred data");
      else {
        let y = Kt(g.data);
        e.fetchers.set(f, y);
      }
  }
  return { loaderData: a, errors: u };
}
function Fc(e, t, n, r) {
  let i = he({}, t);
  for (let o of n) {
    let s = o.route.id;
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (i[s] = t[s])
        : e[s] !== void 0 && o.route.loader && (i[s] = e[s]),
      r && r.hasOwnProperty(s))
    )
      break;
  }
  return i;
}
function ui(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Mc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function nt(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    s = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((s = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (l = "defer() is not supported in actions")
          : o === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((s = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((s = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((s = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new nu(e || 500, s, new Error(l), !0)
  );
}
function bc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (mr(n)) return { result: n, idx: t };
  }
}
function Nh(e) {
  let t = typeof e == "string" ? Mt(e) : e;
  return An(he({}, t, { hash: "" }));
}
function _g(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Rn(e) {
  return e.type === me.deferred;
}
function ci(e) {
  return e.type === me.error;
}
function mr(e) {
  return (e && e.type) === me.redirect;
}
function Sg(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function kg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Eg(e) {
  return cg.has(e.toLowerCase());
}
function ht(e) {
  return ag.has(e.toLowerCase());
}
async function Bc(e, t, n, r, i, o) {
  for (let s = 0; s < n.length; s++) {
    let l = n[s],
      a = t[s];
    if (!a) continue;
    let u = e.find((f) => f.route.id === a.route.id),
      c = u != null && !Dh(u, a) && (o && o[a.route.id]) !== void 0;
    if (Rn(l) && (i || c)) {
      let f = r[s];
      H(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await $h(l, f, i).then((d) => {
          d && (n[s] = d || n[s]);
        });
    }
  }
}
async function $h(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: me.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: me.error, error: i };
      }
    return { type: me.data, data: e.deferredData.data };
  }
}
function ru(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ta(e, t) {
  let n = typeof t == "string" ? Mt(t).search : t.search;
  if (e[e.length - 1].route.index && ru(n || "")) return e[e.length - 1];
  let r = fs(e);
  return r[r.length - 1];
}
function Vc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: s,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0,
      };
  }
}
function Xs(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function xg(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Wr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Cg(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Kt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Pg(e, t) {
  try {
    let n = e.sessionStorage.getItem(Lh);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function Rg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Lh, JSON.stringify(n));
    } catch (r) {
      In(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Go() {
  return (
    (Go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Go.apply(this, arguments)
  );
}
const hs = R.createContext(null),
  Ih = R.createContext(null),
  Tr = R.createContext(null),
  ps = R.createContext(null),
  mn = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ah = R.createContext(null);
function Tg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Fi() || H(!1);
  let { basename: r, navigator: i } = R.useContext(Tr),
    { hash: o, pathname: s, search: l } = zh(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : $t([r, s])),
    i.createHref({ pathname: a, search: l, hash: o })
  );
}
function Fi() {
  return R.useContext(ps) != null;
}
function ms() {
  return Fi() || H(!1), R.useContext(ps).location;
}
function Uh(e) {
  R.useContext(Tr).static || R.useLayoutEffect(e);
}
function Og() {
  let { isDataRoute: e } = R.useContext(mn);
  return e ? Vg() : jg();
}
function jg() {
  Fi() || H(!1);
  let e = R.useContext(hs),
    { basename: t, navigator: n } = R.useContext(Tr),
    { matches: r } = R.useContext(mn),
    { pathname: i } = ms(),
    o = JSON.stringify(fs(r).map((a) => a.pathnameBase)),
    s = R.useRef(!1);
  return (
    Uh(() => {
      s.current = !0;
    }),
    R.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = tu(a, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : $t([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
const Lg = R.createContext(null);
function Dg(e) {
  let t = R.useContext(mn).outlet;
  return t && R.createElement(Lg.Provider, { value: e }, t);
}
function zh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = R.useContext(mn),
    { pathname: i } = ms(),
    o = JSON.stringify(fs(r).map((s) => s.pathnameBase));
  return R.useMemo(() => tu(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Ng(e, t, n) {
  Fi() || H(!1);
  let { navigator: r } = R.useContext(Tr),
    { matches: i } = R.useContext(mn),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let a = ms(),
    u;
  if (t) {
    var c;
    let y = typeof t == "string" ? Mt(t) : t;
    l === "/" || ((c = y.pathname) != null && c.startsWith(l)) || H(!1),
      (u = y);
  } else u = a;
  let f = u.pathname || "/",
    d = l === "/" ? f : f.slice(l.length) || "/",
    _ = ar(e, { pathname: d }),
    g = zg(
      _ &&
        _.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, s, y.params),
            pathname: $t([
              l,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? l
                : $t([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && g
    ? R.createElement(
        ps.Provider,
        {
          value: {
            location: Go(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: pe.Pop,
          },
        },
        g
      )
    : g;
}
function $g() {
  let e = Bg(),
    t = Th(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Ig = R.createElement($g, null);
class Ag extends R.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? R.createElement(
          mn.Provider,
          { value: this.props.routeContext },
          R.createElement(Ah.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ug(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = R.useContext(hs);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(mn.Provider, { value: t }, r)
  );
}
function zg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let l = o.findIndex(
      (a) => a.route.id && (s == null ? void 0 : s[a.route.id])
    );
    l >= 0 || H(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, a, u) => {
    let c = a.route.id ? (s == null ? void 0 : s[a.route.id]) : null,
      f = null;
    n && (f = a.route.errorElement || Ig);
    let d = t.concat(o.slice(0, u + 1)),
      _ = () => {
        let g;
        return (
          c
            ? (g = f)
            : a.route.Component
            ? (g = R.createElement(a.route.Component, null))
            : a.route.element
            ? (g = a.route.element)
            : (g = l),
          R.createElement(Ug, {
            match: a,
            routeContext: { outlet: l, matches: d, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? R.createElement(Ag, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: _(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : _();
  }, null);
}
var Fh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Fh || {}),
  Jo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Jo || {});
function Fg(e) {
  let t = R.useContext(hs);
  return t || H(!1), t;
}
function Mg(e) {
  let t = R.useContext(Ih);
  return t || H(!1), t;
}
function bg(e) {
  let t = R.useContext(mn);
  return t || H(!1), t;
}
function Mh(e) {
  let t = bg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || H(!1), n.route.id;
}
function Bg() {
  var e;
  let t = R.useContext(Ah),
    n = Mg(Jo.UseRouteError),
    r = Mh(Jo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Vg() {
  let { router: e } = Fg(Fh.UseNavigateStable),
    t = Mh(Jo.UseNavigateStable),
    n = R.useRef(!1);
  return (
    Uh(() => {
      n.current = !0;
    }),
    R.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Go({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Hg(e) {
  return Dg(e.context);
}
function Wg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = pe.Pop,
    navigator: o,
    static: s = !1,
  } = e;
  Fi() && H(!1);
  let l = t.replace(/^\/*/, "/"),
    a = R.useMemo(() => ({ basename: l, navigator: o, static: s }), [l, o, s]);
  typeof r == "string" && (r = Mt(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: _ = "default",
    } = r,
    g = R.useMemo(() => {
      let y = Rr(u, l);
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: f, state: d, key: _ },
            navigationType: i,
          };
    }, [l, u, c, f, d, _, i]);
  return g == null
    ? null
    : R.createElement(
        Tr.Provider,
        { value: a },
        R.createElement(ps.Provider, { children: n, value: g })
      );
}
new Promise(() => {});
function Kg(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: R.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: R.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Di() {
  return (
    (Di = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Di.apply(this, arguments)
  );
}
function Qg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Gg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Jg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Gg(e);
}
const qg = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
function Yg(e, t) {
  return mg({
    basename: t == null ? void 0 : t.basename,
    future: Di({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Uv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Xg(),
    routes: e,
    mapRouteProperties: Kg,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Xg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Di({}, t, { errors: Zg(t.errors) })), t;
}
function Zg(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new nu(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let s = new o(i.message);
            (s.stack = ""), (n[r] = s);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const ey = R.createContext({ isTransitioning: !1 }),
  ty = R.createContext(new Map()),
  ny = "startTransition",
  Hc = Cp[ny],
  ry = "flushSync",
  Wc = Av[ry];
function iy(e) {
  Hc ? Hc(e) : e();
}
function Kr(e) {
  Wc ? Wc(e) : e();
}
let oy = class {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
};
function sy(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = R.useState(n.state),
    [s, l] = R.useState(),
    [a, u] = R.useState({ isTransitioning: !1 }),
    [c, f] = R.useState(),
    [d, _] = R.useState(),
    [g, y] = R.useState(),
    E = R.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    p = R.useCallback(
      (x) => {
        m ? iy(x) : x();
      },
      [m]
    ),
    v = R.useCallback(
      (x, L) => {
        let {
          deletedFetchers: F,
          unstable_flushSync: z,
          unstable_viewTransitionOpts: q,
        } = L;
        F.forEach((Se) => E.current.delete(Se)),
          x.fetchers.forEach((Se, Pt) => {
            Se.data !== void 0 && E.current.set(Pt, Se.data);
          });
        let xe =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!q || xe) {
          z ? Kr(() => o(x)) : p(() => o(x));
          return;
        }
        if (z) {
          Kr(() => {
            d && (c && c.resolve(), d.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: q.currentLocation,
                nextLocation: q.nextLocation,
              });
          });
          let Se = n.window.document.startViewTransition(() => {
            Kr(() => o(x));
          });
          Se.finished.finally(() => {
            Kr(() => {
              f(void 0), _(void 0), l(void 0), u({ isTransitioning: !1 });
            });
          }),
            Kr(() => _(Se));
          return;
        }
        d
          ? (c && c.resolve(),
            d.skipTransition(),
            y({
              state: x,
              currentLocation: q.currentLocation,
              nextLocation: q.nextLocation,
            }))
          : (l(x),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: q.currentLocation,
              nextLocation: q.nextLocation,
            }));
      },
      [n.window, d, c, E, p]
    );
  R.useLayoutEffect(() => n.subscribe(v), [n, v]),
    R.useEffect(() => {
      a.isTransitioning && !a.flushSync && f(new oy());
    }, [a]),
    R.useEffect(() => {
      if (c && s && n.window) {
        let x = s,
          L = c.promise,
          F = n.window.document.startViewTransition(async () => {
            p(() => o(x)), await L;
          });
        F.finished.finally(() => {
          f(void 0), _(void 0), l(void 0), u({ isTransitioning: !1 });
        }),
          _(F);
      }
    }, [p, s, c, n.window]),
    R.useEffect(() => {
      c && s && i.location.key === s.location.key && c.resolve();
    }, [c, d, i.location, s]),
    R.useEffect(() => {
      !a.isTransitioning &&
        g &&
        (l(g.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        y(void 0));
    }, [a.isTransitioning, g]);
  let h = R.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (x) => n.navigate(x),
        push: (x, L, F) =>
          n.navigate(x, {
            state: L,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (x, L, F) =>
          n.navigate(x, {
            replace: !0,
            state: L,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [n]
    ),
    C = n.basename || "/",
    T = R.useMemo(
      () => ({ router: n, navigator: h, static: !1, basename: C }),
      [n, h, C]
    );
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      hs.Provider,
      { value: T },
      R.createElement(
        Ih.Provider,
        { value: i },
        R.createElement(
          ty.Provider,
          { value: E.current },
          R.createElement(
            ey.Provider,
            { value: a },
            R.createElement(
              Wg,
              {
                basename: C,
                location: i.location,
                navigationType: i.historyAction,
                navigator: h,
              },
              i.initialized
                ? R.createElement(ly, { routes: n.routes, state: i })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function ly(e) {
  let { routes: t, state: n } = e;
  return Ng(t, void 0, n);
}
const ay =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  uy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Xr = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      d = Qg(t, qg),
      { basename: _ } = R.useContext(Tr),
      g,
      y = !1;
    if (typeof u == "string" && uy.test(u) && ((g = u), ay))
      try {
        let v = new URL(window.location.href),
          h = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          C = Rr(h.pathname, _);
        h.origin === v.origin && C != null
          ? (u = C + h.search + h.hash)
          : (y = !0);
      } catch {}
    let E = Tg(u, { relative: i }),
      m = cy(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      });
    function p(v) {
      r && r(v), v.defaultPrevented || m(v);
    }
    return R.createElement(
      "a",
      Di({}, d, { href: g || E, onClick: y || o ? r : p, ref: n, target: a })
    );
  });
var Kc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Kc || (Kc = {}));
var Qc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Qc || (Qc = {}));
function cy(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = Og(),
    u = ms(),
    c = zh(e, { relative: s });
  return R.useCallback(
    (f) => {
      if (Jg(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : An(u) === An(c);
        a(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, c, r, i, n, e, o, s, l]
  );
}
const dy = () =>
    j.jsx(j.Fragment, {
      children: j.jsxs("footer", {
        className: "outline container-col footer",
        children: [
          j.jsx("div", {
            id: "contact",
            children:
              "Vill du se fler av mina projekt eller komma i kontakt med mig?",
          }),
          j.jsxs("div", {
            className: "container-row ",
            id: "contact__links",
            children: [
              j.jsx("div", {
                className: "mail",
                children: j.jsxs("a", {
                  href: "mailto: lisa.manssonlindblom@medieinstitutet.se",
                  children: [
                    j.jsx("i", { className: "bi bi-envelope" }),
                    "lisa.manssonlindblom@medieinstitutet.se",
                  ],
                }),
              }),
              j.jsx("div", {
                className: "github",
                children: j.jsxs("a", {
                  href: "https://github.com/lisalindblom",
                  children: [
                    j.jsx("i", { className: "bi bi-github" }),
                    "lisalindblom",
                  ],
                }),
              }),
              j.jsx("div", {
                className: "linkedin",
                children: j.jsxs("a", {
                  href: "https://www.linkedin.com/in/lisa-lindblom-49940b254/",
                  children: [
                    j.jsx("i", { className: "bi bi-linkedin" }),
                    "lisa-lindblom-49940b254",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  fy = () =>
    j.jsx(j.Fragment, {
      children: j.jsxs("div", {
        className: "outline header",
        children: [
          j.jsx("div", { className: "outline", children: "Brand" }),
          j.jsx("nav", {
            children: j.jsxs("ul", {
              className: "outline container-row",
              children: [
                j.jsx("li", {
                  children: j.jsx(Xr, { to: "/guides", children: " Guides" }),
                }),
                j.jsx("li", {
                  children: j.jsx(Xr, {
                    to: "/climate-impact",
                    children: " Climate Impact",
                  }),
                }),
                j.jsx("li", {
                  children: j.jsx(Xr, {
                    to: "/material-guide",
                    children: " Material guide",
                  }),
                }),
                j.jsx("li", {
                  children: j.jsx(Xr, { to: "/login", children: " Login" }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  hy = () =>
    j.jsxs(j.Fragment, {
      children: [j.jsx(fy, {}), j.jsx(Hg, {}), j.jsx(dy, {})],
    }),
  py = () =>
    j.jsxs(j.Fragment, {
      children: [
        " ",
        j.jsx("p", { children: "Oj! Här blev det fel" }),
        j.jsx(Xr, { to: "/", children: "Gå till startsidan" }),
      ],
    }),
  my = () =>
    j.jsx(j.Fragment, {
      children: j.jsx("div", {
        className: "outline landing maincontent",
        children: "landing page",
      }),
    }),
  vy = "modulepreload",
  gy = function (e) {
    return "/" + e;
  },
  Gc = {},
  Mi = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const o = document.getElementsByTagName("link");
      i = Promise.all(
        n.map((s) => {
          if (((s = gy(s)), s in Gc)) return;
          Gc[s] = !0;
          const l = s.endsWith(".css"),
            a = l ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let f = o.length - 1; f >= 0; f--) {
              const d = o[f];
              if (d.href === s && (!l || d.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${s}"]${a}`)) return;
          const c = document.createElement("link");
          if (
            ((c.rel = l ? "stylesheet" : vy),
            l || ((c.as = "script"), (c.crossOrigin = "")),
            (c.href = s),
            document.head.appendChild(c),
            l)
          )
            return new Promise((f, d) => {
              c.addEventListener("load", f),
                c.addEventListener("error", () =>
                  d(new Error(`Unable to preload CSS for ${s}`))
                );
            });
        })
      );
    }
    return i
      .then(() => t())
      .catch((o) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented))
          throw o;
      });
  },
  yy = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...n) =>
            Mi(() => Promise.resolve().then(() => bi), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  };
class iu extends Error {
  constructor(t, n = "FunctionsError", r) {
    super(t), (this.name = n), (this.context = r);
  }
}
class wy extends iu {
  constructor(t) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      t
    );
  }
}
class _y extends iu {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class Sy extends iu {
  constructor(t) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      t
    );
  }
}
var ky = function (e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class Ey {
  constructor(t, { headers: n = {}, customFetch: r } = {}) {
    (this.url = t), (this.headers = n), (this.fetch = yy(r));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t, n = {}) {
    var r;
    return ky(this, void 0, void 0, function* () {
      try {
        const { headers: i, method: o, body: s } = n;
        let l = {},
          a;
        s &&
          ((i && !Object.prototype.hasOwnProperty.call(i, "Content-Type")) ||
            !i) &&
          ((typeof Blob < "u" && s instanceof Blob) || s instanceof ArrayBuffer
            ? ((l["Content-Type"] = "application/octet-stream"), (a = s))
            : typeof s == "string"
            ? ((l["Content-Type"] = "text/plain"), (a = s))
            : typeof FormData < "u" && s instanceof FormData
            ? (a = s)
            : ((l["Content-Type"] = "application/json"),
              (a = JSON.stringify(s))));
        const u = yield this.fetch(`${this.url}/${t}`, {
            method: o || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, l), this.headers),
              i
            ),
            body: a,
          }).catch((_) => {
            throw new wy(_);
          }),
          c = u.headers.get("x-relay-error");
        if (c && c === "true") throw new _y(u);
        if (!u.ok) throw new Sy(u);
        let f = (
            (r = u.headers.get("Content-Type")) !== null && r !== void 0
              ? r
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          d;
        return (
          f === "application/json"
            ? (d = yield u.json())
            : f === "application/octet-stream"
            ? (d = yield u.blob())
            : f === "multipart/form-data"
            ? (d = yield u.formData())
            : (d = yield u.text()),
          { data: d, error: null }
        );
      } catch (i) {
        return { data: null, error: i };
      }
    });
  }
}
var xy = function () {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  },
  Er = xy();
const Cy = Er.fetch,
  ou = Er.fetch.bind(Er),
  bh = Er.Headers,
  Py = Er.Request,
  Ry = Er.Response,
  bi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Headers: bh,
        Request: Py,
        Response: Ry,
        default: ou,
        fetch: Cy,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
class Ty {
  constructor(t) {
    (this.shouldThrowOnError = !1),
      (this.method = t.method),
      (this.url = t.url),
      (this.headers = t.headers),
      (this.schema = t.schema),
      (this.body = t.body),
      (this.shouldThrowOnError = t.shouldThrowOnError),
      (this.signal = t.signal),
      (this.isMaybeSingle = t.isMaybeSingle),
      t.fetch
        ? (this.fetch = t.fetch)
        : typeof fetch > "u"
        ? (this.fetch = ou)
        : (this.fetch = fetch);
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  then(t, n) {
    this.schema === void 0 ||
      (["GET", "HEAD"].includes(this.method)
        ? (this.headers["Accept-Profile"] = this.schema)
        : (this.headers["Content-Profile"] = this.schema)),
      this.method !== "GET" &&
        this.method !== "HEAD" &&
        (this.headers["Content-Type"] = "application/json");
    const r = this.fetch;
    let i = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal,
    }).then(async (o) => {
      var s, l, a;
      let u = null,
        c = null,
        f = null,
        d = o.status,
        _ = o.statusText;
      if (o.ok) {
        if (this.method !== "HEAD") {
          const m = await o.text();
          m === "" ||
            (this.headers.Accept === "text/csv" ||
            (this.headers.Accept &&
              this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
              ? (c = m)
              : (c = JSON.parse(m)));
        }
        const y =
            (s = this.headers.Prefer) === null || s === void 0
              ? void 0
              : s.match(/count=(exact|planned|estimated)/),
          E =
            (l = o.headers.get("content-range")) === null || l === void 0
              ? void 0
              : l.split("/");
        y && E && E.length > 1 && (f = parseInt(E[1])),
          this.isMaybeSingle &&
            this.method === "GET" &&
            Array.isArray(c) &&
            (c.length > 1
              ? ((u = {
                  code: "PGRST116",
                  details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message:
                    "JSON object requested, multiple (or no) rows returned",
                }),
                (c = null),
                (f = null),
                (d = 406),
                (_ = "Not Acceptable"))
              : c.length === 1
              ? (c = c[0])
              : (c = null));
      } else {
        const y = await o.text();
        try {
          (u = JSON.parse(y)),
            Array.isArray(u) &&
              o.status === 404 &&
              ((c = []), (u = null), (d = 200), (_ = "OK"));
        } catch {
          o.status === 404 && y === ""
            ? ((d = 204), (_ = "No Content"))
            : (u = { message: y });
        }
        if (
          (u &&
            this.isMaybeSingle &&
            !((a = u == null ? void 0 : u.details) === null || a === void 0) &&
            a.includes("0 rows") &&
            ((u = null), (d = 200), (_ = "OK")),
          u && this.shouldThrowOnError)
        )
          throw u;
      }
      return { error: u, data: c, count: f, status: d, statusText: _ };
    });
    return (
      this.shouldThrowOnError ||
        (i = i.catch((o) => {
          var s, l, a;
          return {
            error: {
              message: `${
                (s = o == null ? void 0 : o.name) !== null && s !== void 0
                  ? s
                  : "FetchError"
              }: ${o == null ? void 0 : o.message}`,
              details: `${
                (l = o == null ? void 0 : o.stack) !== null && l !== void 0
                  ? l
                  : ""
              }`,
              hint: "",
              code: `${
                (a = o == null ? void 0 : o.code) !== null && a !== void 0
                  ? a
                  : ""
              }`,
            },
            data: null,
            count: null,
            status: 0,
            statusText: "",
          };
        })),
      i.then(t, n)
    );
  }
}
class Oy extends Ty {
  select(t) {
    let n = !1;
    const r = (t ?? "*")
      .split("")
      .map((i) => (/\s/.test(i) && !n ? "" : (i === '"' && (n = !n), i)))
      .join("");
    return (
      this.url.searchParams.set("select", r),
      this.headers.Prefer && (this.headers.Prefer += ","),
      (this.headers.Prefer += "return=representation"),
      this
    );
  }
  order(
    t,
    {
      ascending: n = !0,
      nullsFirst: r,
      foreignTable: i,
      referencedTable: o = i,
    } = {}
  ) {
    const s = o ? `${o}.order` : "order",
      l = this.url.searchParams.get(s);
    return (
      this.url.searchParams.set(
        s,
        `${l ? `${l},` : ""}${t}.${n ? "asc" : "desc"}${
          r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"
        }`
      ),
      this
    );
  }
  limit(t, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(i, `${t}`), this;
  }
  range(t, n, { foreignTable: r, referencedTable: i = r } = {}) {
    const o = typeof i > "u" ? "offset" : `${i}.offset`,
      s = typeof i > "u" ? "limit" : `${i}.limit`;
    return (
      this.url.searchParams.set(o, `${t}`),
      this.url.searchParams.set(s, `${n - t + 1}`),
      this
    );
  }
  abortSignal(t) {
    return (this.signal = t), this;
  }
  single() {
    return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
  }
  maybeSingle() {
    return (
      this.method === "GET"
        ? (this.headers.Accept = "application/json")
        : (this.headers.Accept = "application/vnd.pgrst.object+json"),
      (this.isMaybeSingle = !0),
      this
    );
  }
  csv() {
    return (this.headers.Accept = "text/csv"), this;
  }
  geojson() {
    return (this.headers.Accept = "application/geo+json"), this;
  }
  explain({
    analyze: t = !1,
    verbose: n = !1,
    settings: r = !1,
    buffers: i = !1,
    wal: o = !1,
    format: s = "text",
  } = {}) {
    var l;
    const a = [
        t ? "analyze" : null,
        n ? "verbose" : null,
        r ? "settings" : null,
        i ? "buffers" : null,
        o ? "wal" : null,
      ]
        .filter(Boolean)
        .join("|"),
      u =
        (l = this.headers.Accept) !== null && l !== void 0
          ? l
          : "application/json";
    return (
      (this.headers.Accept = `application/vnd.pgrst.plan+${s}; for="${u}"; options=${a};`),
      s === "json" ? this : this
    );
  }
  rollback() {
    var t;
    return (
      ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim()
        .length > 0
        ? (this.headers.Prefer += ",tx=rollback")
        : (this.headers.Prefer = "tx=rollback"),
      this
    );
  }
  returns() {
    return this;
  }
}
class Gn extends Oy {
  eq(t, n) {
    return this.url.searchParams.append(t, `eq.${n}`), this;
  }
  neq(t, n) {
    return this.url.searchParams.append(t, `neq.${n}`), this;
  }
  gt(t, n) {
    return this.url.searchParams.append(t, `gt.${n}`), this;
  }
  gte(t, n) {
    return this.url.searchParams.append(t, `gte.${n}`), this;
  }
  lt(t, n) {
    return this.url.searchParams.append(t, `lt.${n}`), this;
  }
  lte(t, n) {
    return this.url.searchParams.append(t, `lte.${n}`), this;
  }
  like(t, n) {
    return this.url.searchParams.append(t, `like.${n}`), this;
  }
  likeAllOf(t, n) {
    return this.url.searchParams.append(t, `like(all).{${n.join(",")}}`), this;
  }
  likeAnyOf(t, n) {
    return this.url.searchParams.append(t, `like(any).{${n.join(",")}}`), this;
  }
  ilike(t, n) {
    return this.url.searchParams.append(t, `ilike.${n}`), this;
  }
  ilikeAllOf(t, n) {
    return this.url.searchParams.append(t, `ilike(all).{${n.join(",")}}`), this;
  }
  ilikeAnyOf(t, n) {
    return this.url.searchParams.append(t, `ilike(any).{${n.join(",")}}`), this;
  }
  is(t, n) {
    return this.url.searchParams.append(t, `is.${n}`), this;
  }
  in(t, n) {
    const r = n
      .map((i) =>
        typeof i == "string" && new RegExp("[,()]").test(i) ? `"${i}"` : `${i}`
      )
      .join(",");
    return this.url.searchParams.append(t, `in.(${r})`), this;
  }
  contains(t, n) {
    return (
      typeof n == "string"
        ? this.url.searchParams.append(t, `cs.${n}`)
        : Array.isArray(n)
        ? this.url.searchParams.append(t, `cs.{${n.join(",")}}`)
        : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
      this
    );
  }
  containedBy(t, n) {
    return (
      typeof n == "string"
        ? this.url.searchParams.append(t, `cd.${n}`)
        : Array.isArray(n)
        ? this.url.searchParams.append(t, `cd.{${n.join(",")}}`)
        : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
      this
    );
  }
  rangeGt(t, n) {
    return this.url.searchParams.append(t, `sr.${n}`), this;
  }
  rangeGte(t, n) {
    return this.url.searchParams.append(t, `nxl.${n}`), this;
  }
  rangeLt(t, n) {
    return this.url.searchParams.append(t, `sl.${n}`), this;
  }
  rangeLte(t, n) {
    return this.url.searchParams.append(t, `nxr.${n}`), this;
  }
  rangeAdjacent(t, n) {
    return this.url.searchParams.append(t, `adj.${n}`), this;
  }
  overlaps(t, n) {
    return (
      typeof n == "string"
        ? this.url.searchParams.append(t, `ov.${n}`)
        : this.url.searchParams.append(t, `ov.{${n.join(",")}}`),
      this
    );
  }
  textSearch(t, n, { config: r, type: i } = {}) {
    let o = "";
    i === "plain"
      ? (o = "pl")
      : i === "phrase"
      ? (o = "ph")
      : i === "websearch" && (o = "w");
    const s = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(t, `${o}fts${s}.${n}`), this;
  }
  match(t) {
    return (
      Object.entries(t).forEach(([n, r]) => {
        this.url.searchParams.append(n, `eq.${r}`);
      }),
      this
    );
  }
  not(t, n, r) {
    return this.url.searchParams.append(t, `not.${n}.${r}`), this;
  }
  or(t, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = r ? `${r}.or` : "or";
    return this.url.searchParams.append(i, `(${t})`), this;
  }
  filter(t, n, r) {
    return this.url.searchParams.append(t, `${n}.${r}`), this;
  }
}
class jy {
  constructor(t, { headers: n = {}, schema: r, fetch: i }) {
    (this.url = t), (this.headers = n), (this.schema = r), (this.fetch = i);
  }
  select(t, { head: n = !1, count: r } = {}) {
    const i = n ? "HEAD" : "GET";
    let o = !1;
    const s = (t ?? "*")
      .split("")
      .map((l) => (/\s/.test(l) && !o ? "" : (l === '"' && (o = !o), l)))
      .join("");
    return (
      this.url.searchParams.set("select", s),
      r && (this.headers.Prefer = `count=${r}`),
      new Gn({
        method: i,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  insert(t, { count: n, defaultToNull: r = !0 } = {}) {
    const i = "POST",
      o = [];
    if (
      (this.headers.Prefer && o.push(this.headers.Prefer),
      n && o.push(`count=${n}`),
      r || o.push("missing=default"),
      (this.headers.Prefer = o.join(",")),
      Array.isArray(t))
    ) {
      const s = t.reduce((l, a) => l.concat(Object.keys(a)), []);
      if (s.length > 0) {
        const l = [...new Set(s)].map((a) => `"${a}"`);
        this.url.searchParams.set("columns", l.join(","));
      }
    }
    return new Gn({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  upsert(
    t,
    {
      onConflict: n,
      ignoreDuplicates: r = !1,
      count: i,
      defaultToNull: o = !0,
    } = {}
  ) {
    const s = "POST",
      l = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
    if (
      (n !== void 0 && this.url.searchParams.set("on_conflict", n),
      this.headers.Prefer && l.push(this.headers.Prefer),
      i && l.push(`count=${i}`),
      o || l.push("missing=default"),
      (this.headers.Prefer = l.join(",")),
      Array.isArray(t))
    ) {
      const a = t.reduce((u, c) => u.concat(Object.keys(c)), []);
      if (a.length > 0) {
        const u = [...new Set(a)].map((c) => `"${c}"`);
        this.url.searchParams.set("columns", u.join(","));
      }
    }
    return new Gn({
      method: s,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  update(t, { count: n } = {}) {
    const r = "PATCH",
      i = [];
    return (
      this.headers.Prefer && i.push(this.headers.Prefer),
      n && i.push(`count=${n}`),
      (this.headers.Prefer = i.join(",")),
      new Gn({
        method: r,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: t,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  delete({ count: t } = {}) {
    const n = "DELETE",
      r = [];
    return (
      t && r.push(`count=${t}`),
      this.headers.Prefer && r.unshift(this.headers.Prefer),
      (this.headers.Prefer = r.join(",")),
      new Gn({
        method: n,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
const Ly = "1.9.0",
  Dy = { "X-Client-Info": `postgrest-js/${Ly}` };
class su {
  constructor(t, { headers: n = {}, schema: r, fetch: i } = {}) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, Dy), n)),
      (this.schemaName = r),
      (this.fetch = i);
  }
  from(t) {
    const n = new URL(`${this.url}/${t}`);
    return new jy(n, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
    });
  }
  schema(t) {
    return new su(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
    });
  }
  rpc(t, n = {}, { head: r = !1, count: i } = {}) {
    let o;
    const s = new URL(`${this.url}/rpc/${t}`);
    let l;
    r
      ? ((o = "HEAD"),
        Object.entries(n).forEach(([u, c]) => {
          s.searchParams.append(u, `${c}`);
        }))
      : ((o = "POST"), (l = n));
    const a = Object.assign({}, this.headers);
    return (
      i && (a.Prefer = `count=${i}`),
      new Gn({
        method: o,
        url: s,
        headers: a,
        schema: this.schemaName,
        body: l,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
}
const Ny = "2.9.0",
  $y = { "X-Client-Info": `realtime-js/${Ny}` },
  Iy = "1.0.0",
  Bh = 1e4,
  Ay = 1e3;
var di;
(function (e) {
  (e[(e.connecting = 0)] = "connecting"),
    (e[(e.open = 1)] = "open"),
    (e[(e.closing = 2)] = "closing"),
    (e[(e.closed = 3)] = "closed");
})(di || (di = {}));
var Ke;
(function (e) {
  (e.closed = "closed"),
    (e.errored = "errored"),
    (e.joined = "joined"),
    (e.joining = "joining"),
    (e.leaving = "leaving");
})(Ke || (Ke = {}));
var pt;
(function (e) {
  (e.close = "phx_close"),
    (e.error = "phx_error"),
    (e.join = "phx_join"),
    (e.reply = "phx_reply"),
    (e.leave = "phx_leave"),
    (e.access_token = "access_token");
})(pt || (pt = {}));
var na;
(function (e) {
  e.websocket = "websocket";
})(na || (na = {}));
var En;
(function (e) {
  (e.Connecting = "connecting"),
    (e.Open = "open"),
    (e.Closing = "closing"),
    (e.Closed = "closed");
})(En || (En = {}));
class Vh {
  constructor(t, n) {
    (this.callback = t),
      (this.timerCalc = n),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = t),
      (this.timerCalc = n);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
class Uy {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(t, n) {
    return t.constructor === ArrayBuffer
      ? n(this._binaryDecode(t))
      : n(typeof t == "string" ? JSON.parse(t) : {});
  }
  _binaryDecode(t) {
    const n = new DataView(t),
      r = new TextDecoder();
    return this._decodeBroadcast(t, n, r);
  }
  _decodeBroadcast(t, n, r) {
    const i = n.getUint8(1),
      o = n.getUint8(2);
    let s = this.HEADER_LENGTH + 2;
    const l = r.decode(t.slice(s, s + i));
    s = s + i;
    const a = r.decode(t.slice(s, s + o));
    s = s + o;
    const u = JSON.parse(r.decode(t.slice(s, t.byteLength)));
    return { ref: null, topic: l, event: a, payload: u };
  }
}
class Zs {
  constructor(t, n, r = {}, i = Bh) {
    (this.channel = t),
      (this.event = n),
      (this.payload = r),
      (this.timeout = i),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(t) {
    (this.timeout = t),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, n) {
    var r;
    return (
      this._hasReceived(t) &&
        n(
          (r = this.receivedResp) === null || r === void 0 ? void 0 : r.response
        ),
      this.recHooks.push({ status: t, callback: n }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const t = (n) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = n),
        this._matchReceive(n);
    };
    this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(t, n) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: t, response: n });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: t, response: n }) {
    this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(n));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var Jc;
(function (e) {
  (e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave");
})(Jc || (Jc = {}));
class fi {
  constructor(t, n) {
    (this.channel = t),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const r = (n == null ? void 0 : n.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(r.state, {}, (i) => {
      const { onJoin: o, onLeave: s, onSync: l } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = fi.syncState(this.state, i, o, s)),
        this.pendingDiffs.forEach((a) => {
          this.state = fi.syncDiff(this.state, a, o, s);
        }),
        (this.pendingDiffs = []),
        l();
    }),
      this.channel._on(r.diff, {}, (i) => {
        const { onJoin: o, onLeave: s, onSync: l } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(i)
          : ((this.state = fi.syncDiff(this.state, i, o, s)), l());
      }),
      this.onJoin((i, o, s) => {
        this.channel._trigger("presence", {
          event: "join",
          key: i,
          currentPresences: o,
          newPresences: s,
        });
      }),
      this.onLeave((i, o, s) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: i,
          currentPresences: o,
          leftPresences: s,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(t, n, r, i) {
    const o = this.cloneDeep(t),
      s = this.transformState(n),
      l = {},
      a = {};
    return (
      this.map(o, (u, c) => {
        s[u] || (a[u] = c);
      }),
      this.map(s, (u, c) => {
        const f = o[u];
        if (f) {
          const d = c.map((E) => E.presence_ref),
            _ = f.map((E) => E.presence_ref),
            g = c.filter((E) => _.indexOf(E.presence_ref) < 0),
            y = f.filter((E) => d.indexOf(E.presence_ref) < 0);
          g.length > 0 && (l[u] = g), y.length > 0 && (a[u] = y);
        } else l[u] = c;
      }),
      this.syncDiff(o, { joins: l, leaves: a }, r, i)
    );
  }
  static syncDiff(t, n, r, i) {
    const { joins: o, leaves: s } = {
      joins: this.transformState(n.joins),
      leaves: this.transformState(n.leaves),
    };
    return (
      r || (r = () => {}),
      i || (i = () => {}),
      this.map(o, (l, a) => {
        var u;
        const c = (u = t[l]) !== null && u !== void 0 ? u : [];
        if (((t[l] = this.cloneDeep(a)), c.length > 0)) {
          const f = t[l].map((_) => _.presence_ref),
            d = c.filter((_) => f.indexOf(_.presence_ref) < 0);
          t[l].unshift(...d);
        }
        r(l, c, a);
      }),
      this.map(s, (l, a) => {
        let u = t[l];
        if (!u) return;
        const c = a.map((f) => f.presence_ref);
        (u = u.filter((f) => c.indexOf(f.presence_ref) < 0)),
          (t[l] = u),
          i(l, u, a),
          u.length === 0 && delete t[l];
      }),
      t
    );
  }
  static map(t, n) {
    return Object.getOwnPropertyNames(t).map((r) => n(r, t[r]));
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((n, r) => {
        const i = t[r];
        return (
          "metas" in i
            ? (n[r] = i.metas.map(
                (o) => (
                  (o.presence_ref = o.phx_ref),
                  delete o.phx_ref,
                  delete o.phx_ref_prev,
                  o
                )
              ))
            : (n[r] = i),
          n
        );
      }, {})
    );
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  onJoin(t) {
    this.caller.onJoin = t;
  }
  onLeave(t) {
    this.caller.onLeave = t;
  }
  onSync(t) {
    this.caller.onSync = t;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var ne;
(function (e) {
  (e.abstime = "abstime"),
    (e.bool = "bool"),
    (e.date = "date"),
    (e.daterange = "daterange"),
    (e.float4 = "float4"),
    (e.float8 = "float8"),
    (e.int2 = "int2"),
    (e.int4 = "int4"),
    (e.int4range = "int4range"),
    (e.int8 = "int8"),
    (e.int8range = "int8range"),
    (e.json = "json"),
    (e.jsonb = "jsonb"),
    (e.money = "money"),
    (e.numeric = "numeric"),
    (e.oid = "oid"),
    (e.reltime = "reltime"),
    (e.text = "text"),
    (e.time = "time"),
    (e.timestamp = "timestamp"),
    (e.timestamptz = "timestamptz"),
    (e.timetz = "timetz"),
    (e.tsrange = "tsrange"),
    (e.tstzrange = "tstzrange");
})(ne || (ne = {}));
const qc = (e, t, n = {}) => {
    var r;
    const i = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(t).reduce((o, s) => ((o[s] = zy(s, e, t, i)), o), {});
  },
  zy = (e, t, n, r) => {
    const i = t.find((l) => l.name === e),
      o = i == null ? void 0 : i.type,
      s = n[e];
    return o && !r.includes(o) ? Hh(o, s) : ra(s);
  },
  Hh = (e, t) => {
    if (e.charAt(0) === "_") {
      const n = e.slice(1, e.length);
      return By(t, n);
    }
    switch (e) {
      case ne.bool:
        return Fy(t);
      case ne.float4:
      case ne.float8:
      case ne.int2:
      case ne.int4:
      case ne.int8:
      case ne.numeric:
      case ne.oid:
        return My(t);
      case ne.json:
      case ne.jsonb:
        return by(t);
      case ne.timestamp:
        return Vy(t);
      case ne.abstime:
      case ne.date:
      case ne.daterange:
      case ne.int4range:
      case ne.int8range:
      case ne.money:
      case ne.reltime:
      case ne.text:
      case ne.time:
      case ne.timestamptz:
      case ne.timetz:
      case ne.tsrange:
      case ne.tstzrange:
        return ra(t);
      default:
        return ra(t);
    }
  },
  ra = (e) => e,
  Fy = (e) => {
    switch (e) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return e;
    }
  },
  My = (e) => {
    if (typeof e == "string") {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  by = (e) => {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch (t) {
        return console.log(`JSON parse error: ${t}`), e;
      }
    return e;
  },
  By = (e, t) => {
    if (typeof e != "string") return e;
    const n = e.length - 1,
      r = e[n];
    if (e[0] === "{" && r === "}") {
      let o;
      const s = e.slice(1, n);
      try {
        o = JSON.parse("[" + s + "]");
      } catch {
        o = s ? s.split(",") : [];
      }
      return o.map((l) => Hh(t, l));
    }
    return e;
  },
  Vy = (e) => (typeof e == "string" ? e.replace(" ", "T") : e);
var Yc;
(function (e) {
  (e.ALL = "*"),
    (e.INSERT = "INSERT"),
    (e.UPDATE = "UPDATE"),
    (e.DELETE = "DELETE");
})(Yc || (Yc = {}));
var Xc;
(function (e) {
  (e.BROADCAST = "broadcast"),
    (e.PRESENCE = "presence"),
    (e.POSTGRES_CHANGES = "postgres_changes");
})(Xc || (Xc = {}));
var Zc;
(function (e) {
  (e.SUBSCRIBED = "SUBSCRIBED"),
    (e.TIMED_OUT = "TIMED_OUT"),
    (e.CLOSED = "CLOSED"),
    (e.CHANNEL_ERROR = "CHANNEL_ERROR");
})(Zc || (Zc = {}));
class lu {
  constructor(t, n = { config: {} }, r) {
    (this.topic = t),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = Ke.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = t.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
        n.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Zs(this, pt.join, this.params, this.timeout)),
      (this.rejoinTimer = new Vh(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = Ke.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((i) => i.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = Ke.closed),
          this.socket._remove(this);
      }),
      this._onError((i) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, i),
          (this.state = Ke.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = Ke.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(pt.reply, {}, (i, o) => {
        this._trigger(this._replyEventName(o), i);
      }),
      (this.presence = new fi(this)),
      (this.broadcastEndpointURL = this._broadcastEndpointURL());
  }
  subscribe(t, n = this.timeout) {
    var r, i;
    if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const {
        config: { broadcast: o, presence: s },
      } = this.params;
      this._onError((u) => t && t("CHANNEL_ERROR", u)),
        this._onClose(() => t && t("CLOSED"));
      const l = {},
        a = {
          broadcast: o,
          presence: s,
          postgres_changes:
            (i =
              (r = this.bindings.postgres_changes) === null || r === void 0
                ? void 0
                : r.map((u) => u.filter)) !== null && i !== void 0
              ? i
              : [],
        };
      this.socket.accessToken && (l.access_token = this.socket.accessToken),
        this.updateJoinPayload(Object.assign({ config: a }, l)),
        (this.joinedOnce = !0),
        this._rejoin(n),
        this.joinPush
          .receive("ok", ({ postgres_changes: u }) => {
            var c;
            if (
              (this.socket.accessToken &&
                this.socket.setAuth(this.socket.accessToken),
              u === void 0)
            ) {
              t && t("SUBSCRIBED");
              return;
            } else {
              const f = this.bindings.postgres_changes,
                d =
                  (c = f == null ? void 0 : f.length) !== null && c !== void 0
                    ? c
                    : 0,
                _ = [];
              for (let g = 0; g < d; g++) {
                const y = f[g],
                  {
                    filter: { event: E, schema: m, table: p, filter: v },
                  } = y,
                  h = u && u[g];
                if (
                  h &&
                  h.event === E &&
                  h.schema === m &&
                  h.table === p &&
                  h.filter === v
                )
                  _.push(Object.assign(Object.assign({}, y), { id: h.id }));
                else {
                  this.unsubscribe(),
                    t &&
                      t(
                        "CHANNEL_ERROR",
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = _), t && t("SUBSCRIBED");
              return;
            }
          })
          .receive("error", (u) => {
            t &&
              t(
                "CHANNEL_ERROR",
                new Error(
                  JSON.stringify(Object.values(u).join(", ") || "error")
                )
              );
          })
          .receive("timeout", () => {
            t && t("TIMED_OUT");
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, n = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: t },
      n.timeout || this.timeout
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: "presence", event: "untrack" }, t);
  }
  on(t, n, r) {
    return this._on(t, n, r);
  }
  async send(t, n = {}) {
    var r, i;
    if (!this._canPush() && t.type === "broadcast") {
      const { event: o, payload: s } = t,
        l = {
          method: "POST",
          headers: {
            apikey:
              (r = this.socket.accessToken) !== null && r !== void 0 ? r : "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [{ topic: this.subTopic, event: o, payload: s }],
          }),
        };
      try {
        return (
          await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            l,
            (i = n.timeout) !== null && i !== void 0 ? i : this.timeout
          )
        ).ok
          ? "ok"
          : "error";
      } catch (a) {
        return a.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((o) => {
        var s, l, a;
        const u = this._push(t.type, t, n.timeout || this.timeout);
        t.type === "broadcast" &&
          !(
            !(
              (a =
                (l =
                  (s = this.params) === null || s === void 0
                    ? void 0
                    : s.config) === null || l === void 0
                  ? void 0
                  : l.broadcast) === null || a === void 0
            ) && a.ack
          ) &&
          o("ok"),
          u.receive("ok", () => o("ok")),
          u.receive("timeout", () => o("timed out"));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  unsubscribe(t = this.timeout) {
    this.state = Ke.leaving;
    const n = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(pt.close, "leave", this._joinRef());
    };
    return (
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      new Promise((r) => {
        const i = new Zs(this, pt.leave, {}, t);
        i
          .receive("ok", () => {
            n(), r("ok");
          })
          .receive("timeout", () => {
            n(), r("timed out");
          })
          .receive("error", () => {
            r("error");
          }),
          i.send(),
          this._canPush() || i.trigger("ok", {});
      })
    );
  }
  _broadcastEndpointURL() {
    let t = this.socket.endPoint;
    return (
      (t = t.replace(/^ws/i, "http")),
      (t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
      t.replace(/\/+$/, "") + "/api/broadcast"
    );
  }
  async _fetchWithTimeout(t, n, r) {
    const i = new AbortController(),
      o = setTimeout(() => i.abort(), r),
      s = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, n), { signal: i.signal })
      );
    return clearTimeout(o), s;
  }
  _push(t, n, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new Zs(this, t, n, r);
    return (
      this._canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)),
      i
    );
  }
  _onMessage(t, n, r) {
    return n;
  }
  _isMember(t) {
    return this.topic === t;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(t, n, r) {
    var i, o;
    const s = t.toLocaleLowerCase(),
      { close: l, error: a, leave: u, join: c } = pt;
    if (r && [l, a, u, c].indexOf(s) >= 0 && r !== this._joinRef()) return;
    let d = this._onMessage(s, n, r);
    if (n && !d)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(s)
      ? (i = this.bindings.postgres_changes) === null ||
        i === void 0 ||
        i
          .filter((_) => {
            var g, y, E;
            return (
              ((g = _.filter) === null || g === void 0 ? void 0 : g.event) ===
                "*" ||
              ((E =
                (y = _.filter) === null || y === void 0 ? void 0 : y.event) ===
                null || E === void 0
                ? void 0
                : E.toLocaleLowerCase()) === s
            );
          })
          .map((_) => _.callback(d, r))
      : (o = this.bindings[s]) === null ||
        o === void 0 ||
        o
          .filter((_) => {
            var g, y, E, m, p, v;
            if (["broadcast", "presence", "postgres_changes"].includes(s))
              if ("id" in _) {
                const h = _.id,
                  C =
                    (g = _.filter) === null || g === void 0 ? void 0 : g.event;
                return (
                  h &&
                  ((y = n.ids) === null || y === void 0
                    ? void 0
                    : y.includes(h)) &&
                  (C === "*" ||
                    (C == null ? void 0 : C.toLocaleLowerCase()) ===
                      ((E = n.data) === null || E === void 0
                        ? void 0
                        : E.type.toLocaleLowerCase()))
                );
              } else {
                const h =
                  (p =
                    (m = _ == null ? void 0 : _.filter) === null || m === void 0
                      ? void 0
                      : m.event) === null || p === void 0
                    ? void 0
                    : p.toLocaleLowerCase();
                return (
                  h === "*" ||
                  h ===
                    ((v = n == null ? void 0 : n.event) === null || v === void 0
                      ? void 0
                      : v.toLocaleLowerCase())
                );
              }
            else return _.type.toLocaleLowerCase() === s;
          })
          .map((_) => {
            if (typeof d == "object" && "ids" in d) {
              const g = d.data,
                {
                  schema: y,
                  table: E,
                  commit_timestamp: m,
                  type: p,
                  errors: v,
                } = g;
              d = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: y,
                    table: E,
                    commit_timestamp: m,
                    eventType: p,
                    new: {},
                    old: {},
                    errors: v,
                  }
                ),
                this._getPayloadRecords(g)
              );
            }
            _.callback(d, r);
          });
  }
  _isClosed() {
    return this.state === Ke.closed;
  }
  _isJoined() {
    return this.state === Ke.joined;
  }
  _isJoining() {
    return this.state === Ke.joining;
  }
  _isLeaving() {
    return this.state === Ke.leaving;
  }
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  _on(t, n, r) {
    const i = t.toLocaleLowerCase(),
      o = { type: i, filter: n, callback: r };
    return (
      this.bindings[i] ? this.bindings[i].push(o) : (this.bindings[i] = [o]),
      this
    );
  }
  _off(t, n) {
    const r = t.toLocaleLowerCase();
    return (
      (this.bindings[r] = this.bindings[r].filter((i) => {
        var o;
        return !(
          ((o = i.type) === null || o === void 0
            ? void 0
            : o.toLocaleLowerCase()) === r && lu.isEqual(i.filter, n)
        );
      })),
      this
    );
  }
  static isEqual(t, n) {
    if (Object.keys(t).length !== Object.keys(n).length) return !1;
    for (const r in t) if (t[r] !== n[r]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(t) {
    this._on(pt.close, {}, t);
  }
  _onError(t) {
    this._on(pt.error, {}, (n) => t(n));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = Ke.joining),
      this.joinPush.resend(t));
  }
  _getPayloadRecords(t) {
    const n = { new: {}, old: {} };
    return (
      (t.type === "INSERT" || t.type === "UPDATE") &&
        (n.new = qc(t.columns, t.record)),
      (t.type === "UPDATE" || t.type === "DELETE") &&
        (n.old = qc(t.columns, t.old_record)),
      n
    );
  }
}
const Hy = () => {},
  Wh = typeof WebSocket < "u",
  Wy = Wh ? WebSocket : require("ws");
class Ky {
  constructor(t, n) {
    var r;
    (this.accessToken = null),
      (this.channels = []),
      (this.endPoint = ""),
      (this.headers = $y),
      (this.params = {}),
      (this.timeout = Bh),
      (this.transport = Wy),
      (this.heartbeatIntervalMs = 3e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = Hy),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new Uy()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this._resolveFetch = (o) => {
        let s;
        return (
          o
            ? (s = o)
            : typeof fetch > "u"
            ? (s = (...l) =>
                Mi(() => Promise.resolve().then(() => bi), void 0).then(
                  ({ default: a }) => a(...l)
                ))
            : (s = fetch),
          (...l) => s(...l)
        );
      }),
      (this.endPoint = `${t}/${na.websocket}`),
      n != null && n.params && (this.params = n.params),
      n != null &&
        n.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          n.headers
        )),
      n != null && n.timeout && (this.timeout = n.timeout),
      n != null && n.logger && (this.logger = n.logger),
      n != null && n.transport && (this.transport = n.transport),
      n != null &&
        n.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
    const i =
      (r = n == null ? void 0 : n.params) === null || r === void 0
        ? void 0
        : r.apikey;
    i && (this.accessToken = i),
      (this.reconnectAfterMs =
        n != null && n.reconnectAfterMs
          ? n.reconnectAfterMs
          : (o) => [1e3, 2e3, 5e3, 1e4][o - 1] || 1e4),
      (this.encode =
        n != null && n.encode ? n.encode : (o, s) => s(JSON.stringify(o))),
      (this.decode =
        n != null && n.decode
          ? n.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new Vh(async () => {
        this.disconnect(), this.connect();
      }, this.reconnectAfterMs)),
      (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch));
  }
  connect() {
    this.conn ||
      (Wh
        ? (this.conn = new this.transport(this._endPointURL()))
        : (this.conn = new this.transport(this._endPointURL(), void 0, {
            headers: this.headers,
          })),
      this.conn &&
        ((this.conn.binaryType = "arraybuffer"),
        (this.conn.onopen = () => this._onConnOpen()),
        (this.conn.onerror = (t) => this._onConnError(t)),
        (this.conn.onmessage = (t) => this._onConnMessage(t)),
        (this.conn.onclose = (t) => this._onConnClose(t))));
  }
  disconnect(t, n) {
    this.conn &&
      ((this.conn.onclose = function () {}),
      t ? this.conn.close(t, n ?? "") : this.conn.close(),
      (this.conn = null),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.reset());
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const n = await t.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), n;
  }
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((n) => n.unsubscribe()));
    return this.disconnect(), t;
  }
  log(t, n, r) {
    this.logger(t, n, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case di.connecting:
        return En.Connecting;
      case di.open:
        return En.Open;
      case di.closing:
        return En.Closing;
      default:
        return En.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === En.Open;
  }
  channel(t, n = { config: {} }) {
    const r = new lu(`realtime:${t}`, n, this);
    return this.channels.push(r), r;
  }
  push(t) {
    const { topic: n, event: r, payload: i, ref: o } = t,
      s = () => {
        this.encode(t, (l) => {
          var a;
          (a = this.conn) === null || a === void 0 || a.send(l);
        });
      };
    this.log("push", `${n} ${r} (${o})`, i),
      this.isConnected() ? s() : this.sendBuffer.push(s);
  }
  setAuth(t) {
    (this.accessToken = t),
      this.channels.forEach((n) => {
        t && n.updateJoinPayload({ access_token: t }),
          n.joinedOnce &&
            n._isJoined() &&
            n._push(pt.access_token, { access_token: t });
      });
  }
  _makeRef() {
    let t = this.ref + 1;
    return (
      t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
    );
  }
  _leaveOpenTopic(t) {
    let n = this.channels.find(
      (r) => r.topic === t && (r._isJoined() || r._isJoining())
    );
    n &&
      (this.log("transport", `leaving duplicate topic "${t}"`),
      n.unsubscribe());
  }
  _remove(t) {
    this.channels = this.channels.filter((n) => n._joinRef() !== t._joinRef());
  }
  _endPointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: Iy })
    );
  }
  _onConnMessage(t) {
    this.decode(t.data, (n) => {
      let { topic: r, event: i, payload: o, ref: s } = n;
      ((s && s === this.pendingHeartbeatRef) ||
        i === (o == null ? void 0 : o.type)) &&
        (this.pendingHeartbeatRef = null),
        this.log(
          "receive",
          `${o.status || ""} ${r} ${i} ${(s && "(" + s + ")") || ""}`,
          o
        ),
        this.channels
          .filter((l) => l._isMember(r))
          .forEach((l) => l._trigger(i, o, s)),
        this.stateChangeCallbacks.message.forEach((l) => l(n));
    });
  }
  _onConnOpen() {
    this.log("transport", `connected to ${this._endPointURL()}`),
      this._flushSendBuffer(),
      this.reconnectTimer.reset(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this._sendHeartbeat(),
        this.heartbeatIntervalMs
      )),
      this.stateChangeCallbacks.open.forEach((t) => t());
  }
  _onConnClose(t) {
    this.log("transport", "close", t),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((n) => n(t));
  }
  _onConnError(t) {
    this.log("transport", t.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((n) => n(t));
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(pt.error));
  }
  _appendParams(t, n) {
    if (Object.keys(n).length === 0) return t;
    const r = t.match(/\?/) ? "&" : "?",
      i = new URLSearchParams(n);
    return `${t}${r}${i}`;
  }
  _flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
  }
  _sendHeartbeat() {
    var t;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          this.log(
            "transport",
            "heartbeat timeout. Attempting to re-establish connection"
          ),
          (t = this.conn) === null ||
            t === void 0 ||
            t.close(Ay, "hearbeat timeout");
        return;
      }
      (this.pendingHeartbeatRef = this._makeRef()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        }),
        this.setAuth(this.accessToken);
    }
  }
}
class au extends Error {
  constructor(t) {
    super(t), (this.__isStorageError = !0), (this.name = "StorageError");
  }
}
function Le(e) {
  return typeof e == "object" && e !== null && "__isStorageError" in e;
}
class Qy extends au {
  constructor(t, n) {
    super(t), (this.name = "StorageApiError"), (this.status = n);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class ed extends au {
  constructor(t, n) {
    super(t), (this.name = "StorageUnknownError"), (this.originalError = n);
  }
}
var Gy = function (e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const Kh = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...n) =>
            Mi(() => Promise.resolve().then(() => bi), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  },
  Jy = () =>
    Gy(void 0, void 0, void 0, function* () {
      return typeof Response > "u"
        ? (yield Mi(() => Promise.resolve().then(() => bi), void 0)).Response
        : Response;
    });
var Or = function (e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const el = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  qy = (e, t) =>
    Or(void 0, void 0, void 0, function* () {
      const n = yield Jy();
      e instanceof n
        ? e
            .json()
            .then((r) => {
              t(new Qy(el(r), e.status || 500));
            })
            .catch((r) => {
              t(new ed(el(r), r));
            })
        : t(new ed(el(e), e));
    }),
  Yy = (e, t, n, r) => {
    const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return e === "GET"
      ? i
      : ((i.headers = Object.assign(
          { "Content-Type": "application/json" },
          t == null ? void 0 : t.headers
        )),
        (i.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, i), n));
  };
function vs(e, t, n, r, i, o) {
  return Or(this, void 0, void 0, function* () {
    return new Promise((s, l) => {
      e(n, Yy(t, r, i, o))
        .then((a) => {
          if (!a.ok) throw a;
          return r != null && r.noResolveJson ? a : a.json();
        })
        .then((a) => s(a))
        .catch((a) => qy(a, l));
    });
  });
}
function ia(e, t, n, r) {
  return Or(this, void 0, void 0, function* () {
    return vs(e, "GET", t, n, r);
  });
}
function Jt(e, t, n, r, i) {
  return Or(this, void 0, void 0, function* () {
    return vs(e, "POST", t, r, i, n);
  });
}
function Xy(e, t, n, r, i) {
  return Or(this, void 0, void 0, function* () {
    return vs(e, "PUT", t, r, i, n);
  });
}
function Qh(e, t, n, r, i) {
  return Or(this, void 0, void 0, function* () {
    return vs(e, "DELETE", t, r, i, n);
  });
}
var tt = function (e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const Zy = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  td = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class e0 {
  constructor(t, n = {}, r, i) {
    (this.url = t),
      (this.headers = n),
      (this.bucketId = r),
      (this.fetch = Kh(i));
  }
  uploadOrUpdate(t, n, r, i) {
    return tt(this, void 0, void 0, function* () {
      try {
        let o;
        const s = Object.assign(Object.assign({}, td), i),
          l = Object.assign(
            Object.assign({}, this.headers),
            t === "POST" && { "x-upsert": String(s.upsert) }
          );
        typeof Blob < "u" && r instanceof Blob
          ? ((o = new FormData()),
            o.append("cacheControl", s.cacheControl),
            o.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((o = r), o.append("cacheControl", s.cacheControl))
          : ((o = r),
            (l["cache-control"] = `max-age=${s.cacheControl}`),
            (l["content-type"] = s.contentType));
        const a = this._removeEmptyFolders(n),
          u = this._getFinalPath(a),
          c = yield this.fetch(
            `${this.url}/object/${u}`,
            Object.assign(
              { method: t, body: o, headers: l },
              s != null && s.duplex ? { duplex: s.duplex } : {}
            )
          ),
          f = yield c.json();
        return c.ok
          ? { data: { path: a, id: f.Id, fullPath: f.Key }, error: null }
          : { data: null, error: f };
      } catch (o) {
        if (Le(o)) return { data: null, error: o };
        throw o;
      }
    });
  }
  upload(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", t, n, r);
    });
  }
  uploadToSignedUrl(t, n, r, i) {
    return tt(this, void 0, void 0, function* () {
      const o = this._removeEmptyFolders(t),
        s = this._getFinalPath(o),
        l = new URL(this.url + `/object/upload/sign/${s}`);
      l.searchParams.set("token", n);
      try {
        let a;
        const u = Object.assign({ upsert: td.upsert }, i),
          c = Object.assign(Object.assign({}, this.headers), {
            "x-upsert": String(u.upsert),
          });
        typeof Blob < "u" && r instanceof Blob
          ? ((a = new FormData()),
            a.append("cacheControl", u.cacheControl),
            a.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((a = r), a.append("cacheControl", u.cacheControl))
          : ((a = r),
            (c["cache-control"] = `max-age=${u.cacheControl}`),
            (c["content-type"] = u.contentType));
        const f = yield this.fetch(l.toString(), {
            method: "PUT",
            body: a,
            headers: c,
          }),
          d = yield f.json();
        return f.ok
          ? { data: { path: o, fullPath: d.Key }, error: null }
          : { data: null, error: d };
      } catch (a) {
        if (Le(a)) return { data: null, error: a };
        throw a;
      }
    });
  }
  createSignedUploadUrl(t) {
    return tt(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(t);
        const r = yield Jt(
            this.fetch,
            `${this.url}/object/upload/sign/${n}`,
            {},
            { headers: this.headers }
          ),
          i = new URL(this.url + r.url),
          o = i.searchParams.get("token");
        if (!o) throw new au("No token returned by API");
        return {
          data: { signedUrl: i.toString(), path: t, token: o },
          error: null,
        };
      } catch (n) {
        if (Le(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  update(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", t, n, r);
    });
  }
  move(t, n) {
    return tt(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Jt(
            this.fetch,
            `${this.url}/object/move`,
            { bucketId: this.bucketId, sourceKey: t, destinationKey: n },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (Le(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  copy(t, n) {
    return tt(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield Jt(
              this.fetch,
              `${this.url}/object/copy`,
              { bucketId: this.bucketId, sourceKey: t, destinationKey: n },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (r) {
        if (Le(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  createSignedUrl(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(t),
          o = yield Jt(
            this.fetch,
            `${this.url}/object/sign/${i}`,
            Object.assign(
              { expiresIn: n },
              r != null && r.transform ? { transform: r.transform } : {}
            ),
            { headers: this.headers }
          );
        const s =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
        return (
          (o = { signedUrl: encodeURI(`${this.url}${o.signedURL}${s}`) }),
          { data: o, error: null }
        );
      } catch (i) {
        if (Le(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  createSignedUrls(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      try {
        const i = yield Jt(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: n, paths: t },
            { headers: this.headers }
          ),
          o =
            r != null && r.download
              ? `&download=${r.download === !0 ? "" : r.download}`
              : "";
        return {
          data: i.map((s) =>
            Object.assign(Object.assign({}, s), {
              signedUrl: s.signedURL
                ? encodeURI(`${this.url}${s.signedURL}${o}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (i) {
        if (Le(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  download(t, n) {
    return tt(this, void 0, void 0, function* () {
      const i =
          typeof (n == null ? void 0 : n.transform) < "u"
            ? "render/image/authenticated"
            : "object",
        o = this.transformOptsToQueryString(
          (n == null ? void 0 : n.transform) || {}
        ),
        s = o ? `?${o}` : "";
      try {
        const l = this._getFinalPath(t);
        return {
          data: yield (yield ia(this.fetch, `${this.url}/${i}/${l}${s}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (l) {
        if (Le(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
  getPublicUrl(t, n) {
    const r = this._getFinalPath(t),
      i = [],
      o =
        n != null && n.download
          ? `download=${n.download === !0 ? "" : n.download}`
          : "";
    o !== "" && i.push(o);
    const l =
        typeof (n == null ? void 0 : n.transform) < "u"
          ? "render/image"
          : "object",
      a = this.transformOptsToQueryString(
        (n == null ? void 0 : n.transform) || {}
      );
    a !== "" && i.push(a);
    let u = i.join("&");
    return (
      u !== "" && (u = `?${u}`),
      { data: { publicUrl: encodeURI(`${this.url}/${l}/public/${r}${u}`) } }
    );
  }
  remove(t) {
    return tt(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Qh(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (Le(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  list(t, n, r) {
    return tt(this, void 0, void 0, function* () {
      try {
        const i = Object.assign(Object.assign(Object.assign({}, Zy), n), {
          prefix: t || "",
        });
        return {
          data: yield Jt(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            i,
            { headers: this.headers },
            r
          ),
          error: null,
        };
      } catch (i) {
        if (Le(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(t) {
    const n = [];
    return (
      t.width && n.push(`width=${t.width}`),
      t.height && n.push(`height=${t.height}`),
      t.resize && n.push(`resize=${t.resize}`),
      t.format && n.push(`format=${t.format}`),
      t.quality && n.push(`quality=${t.quality}`),
      n.join("&")
    );
  }
}
const t0 = "2.5.5",
  n0 = { "X-Client-Info": `storage-js/${t0}` };
var Hn = function (e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class r0 {
  constructor(t, n = {}, r) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, n0), n)),
      (this.fetch = Kh(r));
  }
  listBuckets() {
    return Hn(this, void 0, void 0, function* () {
      try {
        return {
          data: yield ia(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        if (Le(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  getBucket(t) {
    return Hn(this, void 0, void 0, function* () {
      try {
        return {
          data: yield ia(this.fetch, `${this.url}/bucket/${t}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (n) {
        if (Le(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  createBucket(t, n = { public: !1 }) {
    return Hn(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Jt(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: t,
              name: t,
              public: n.public,
              file_size_limit: n.fileSizeLimit,
              allowed_mime_types: n.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (Le(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  updateBucket(t, n) {
    return Hn(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Xy(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: n.public,
              file_size_limit: n.fileSizeLimit,
              allowed_mime_types: n.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (Le(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  emptyBucket(t) {
    return Hn(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Jt(
            this.fetch,
            `${this.url}/bucket/${t}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (Le(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  deleteBucket(t) {
    return Hn(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Qh(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (Le(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
}
class i0 extends r0 {
  constructor(t, n = {}, r) {
    super(t, n, r);
  }
  from(t) {
    return new e0(this.url, this.headers, t, this.fetch);
  }
}
const o0 = "2.39.0";
let Zr = "";
typeof Deno < "u"
  ? (Zr = "deno")
  : typeof document < "u"
  ? (Zr = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (Zr = "react-native")
  : (Zr = "node");
const s0 = { "X-Client-Info": `supabase-js-${Zr}/${o0}` };
var l0 = function (e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const a0 = (e) => {
    let t;
    return (
      e ? (t = e) : typeof fetch > "u" ? (t = ou) : (t = fetch),
      (...n) => t(...n)
    );
  },
  u0 = () => (typeof Headers > "u" ? bh : Headers),
  c0 = (e, t, n) => {
    const r = a0(n),
      i = u0();
    return (o, s) =>
      l0(void 0, void 0, void 0, function* () {
        var l;
        const a = (l = yield t()) !== null && l !== void 0 ? l : e;
        let u = new i(s == null ? void 0 : s.headers);
        return (
          u.has("apikey") || u.set("apikey", e),
          u.has("Authorization") || u.set("Authorization", `Bearer ${a}`),
          r(o, Object.assign(Object.assign({}, s), { headers: u }))
        );
      });
  };
function d0(e) {
  return e.replace(/\/$/, "");
}
function f0(e, t) {
  const { db: n, auth: r, realtime: i, global: o } = e,
    { db: s, auth: l, realtime: a, global: u } = t;
  return {
    db: Object.assign(Object.assign({}, s), n),
    auth: Object.assign(Object.assign({}, l), r),
    realtime: Object.assign(Object.assign({}, a), i),
    global: Object.assign(Object.assign({}, u), o),
  };
}
function h0(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function p0() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    const t = (Math.random() * 16) | 0;
    return (e == "x" ? t : (t & 3) | 8).toString(16);
  });
}
const St = () => typeof document < "u",
  wn = { tested: !1, writable: !1 },
  hi = () => {
    if (!St()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (wn.tested) return wn.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (wn.tested = !0),
        (wn.writable = !0);
    } catch {
      (wn.tested = !0), (wn.writable = !1);
    }
    return wn.writable;
  };
function tl(e) {
  const t = {},
    n = new URL(e);
  if (n.hash && n.hash[0] === "#")
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((i, o) => {
        t[o] = i;
      });
    } catch {}
  return (
    n.searchParams.forEach((r, i) => {
      t[i] = r;
    }),
    t
  );
}
const Gh = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > "u"
        ? (t = (...n) =>
            Mi(() => Promise.resolve().then(() => bi), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
      (...n) => t(...n)
    );
  },
  m0 = (e) =>
    typeof e == "object" &&
    e !== null &&
    "status" in e &&
    "ok" in e &&
    "json" in e &&
    typeof e.json == "function",
  _n = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n));
  },
  ao = async (e, t) => {
    const n = await e.getItem(t);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  },
  nl = async (e, t) => {
    await e.removeItem(t);
  };
function v0(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let n = "",
    r,
    i,
    o,
    s,
    l,
    a,
    u,
    c = 0;
  for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
    (s = t.indexOf(e.charAt(c++))),
      (l = t.indexOf(e.charAt(c++))),
      (a = t.indexOf(e.charAt(c++))),
      (u = t.indexOf(e.charAt(c++))),
      (r = (s << 2) | (l >> 4)),
      (i = ((l & 15) << 4) | (a >> 2)),
      (o = ((a & 3) << 6) | u),
      (n = n + String.fromCharCode(r)),
      a != 64 && i != 0 && (n = n + String.fromCharCode(i)),
      u != 64 && o != 0 && (n = n + String.fromCharCode(o));
  return n;
}
class gs {
  constructor() {
    this.promise = new gs.promiseConstructor((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
gs.promiseConstructor = Promise;
function nd(e) {
  const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
    n = e.split(".");
  if (n.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
  if (!t.test(n[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const r = n[1];
  return JSON.parse(v0(r));
}
async function g0(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function y0(e, t) {
  return new Promise((r, i) => {
    (async () => {
      for (let o = 0; o < 1 / 0; o++)
        try {
          const s = await e(o);
          if (!t(o, null, s)) {
            r(s);
            return;
          }
        } catch (s) {
          if (!t(o, s)) {
            i(s);
            return;
          }
        }
    })();
  });
}
function w0(e) {
  return ("0" + e.toString(16)).substr(-2);
}
function Wn() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const n =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = n.length;
    let i = "";
    for (let o = 0; o < 56; o++) i += n.charAt(Math.floor(Math.random() * r));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, w0).join("");
}
async function _0(e) {
  const n = new TextEncoder().encode(e),
    r = await crypto.subtle.digest("SHA-256", n),
    i = new Uint8Array(r);
  return Array.from(i)
    .map((o) => String.fromCharCode(o))
    .join("");
}
function S0(e) {
  return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Kn(e) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      e
    );
  const n = await _0(e);
  return S0(n);
}
class uu extends Error {
  constructor(t, n) {
    super(t),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = n);
  }
}
function W(e) {
  return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class k0 extends uu {
  constructor(t, n) {
    super(t, n), (this.name = "AuthApiError"), (this.status = n);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
function E0(e) {
  return W(e) && e.name === "AuthApiError";
}
class Jh extends uu {
  constructor(t, n) {
    super(t), (this.name = "AuthUnknownError"), (this.originalError = n);
  }
}
class Fn extends uu {
  constructor(t, n, r) {
    super(t), (this.name = n), (this.status = r);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class Qn extends Fn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400);
  }
}
class rl extends Fn {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500);
  }
}
class uo extends Fn {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400);
  }
}
class co extends Fn {
  constructor(t, n = null) {
    super(t, "AuthImplicitGrantRedirectError", 500),
      (this.details = null),
      (this.details = n);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class rd extends Fn {
  constructor(t, n = null) {
    super(t, "AuthPKCEGrantCodeExchangeError", 500),
      (this.details = null),
      (this.details = n);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class oa extends Fn {
  constructor(t, n) {
    super(t, "AuthRetryableFetchError", n);
  }
}
function il(e) {
  return W(e) && e.name === "AuthRetryableFetchError";
}
class x0 extends Fn {
  constructor(t, n, r) {
    super(t, "AuthWeakPasswordError", n), (this.reasons = r);
  }
}
var C0 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
};
const Jn = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  P0 = [502, 503, 504];
async function id(e) {
  if (!m0(e)) throw new oa(Jn(e), 0);
  if (P0.includes(e.status)) throw new oa(Jn(e), e.status);
  let t;
  try {
    t = await e.json();
  } catch (n) {
    throw new Jh(Jn(n), n);
  }
  throw typeof t == "object" &&
    t &&
    typeof t.weak_password == "object" &&
    t.weak_password &&
    Array.isArray(t.weak_password.reasons) &&
    t.weak_password.reasons.length &&
    t.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0)
    ? new x0(Jn(t), e.status, t.weak_password.reasons)
    : new k0(Jn(t), e.status || 500);
}
const R0 = (e, t, n, r) => {
  const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === "GET"
    ? i
    : ((i.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        t == null ? void 0 : t.headers
      )),
      (i.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, i), n));
};
async function G(e, t, n, r) {
  var i;
  const o = Object.assign({}, r == null ? void 0 : r.headers);
  r != null && r.jwt && (o.Authorization = `Bearer ${r.jwt}`);
  const s =
    (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
  r != null && r.redirectTo && (s.redirect_to = r.redirectTo);
  const l = Object.keys(s).length
      ? "?" + new URLSearchParams(s).toString()
      : "",
    a = await T0(
      e,
      t,
      n + l,
      { headers: o, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(a)
    : { data: Object.assign({}, a), error: null };
}
async function T0(e, t, n, r, i, o) {
  const s = R0(t, r, i, o);
  let l;
  try {
    l = await e(n, s);
  } catch (a) {
    throw (console.error(a), new oa(Jn(a), 0));
  }
  if ((l.ok || (await id(l)), r != null && r.noResolveJson)) return l;
  try {
    return await l.json();
  } catch (a) {
    await id(a);
  }
}
function Wt(e) {
  var t;
  let n = null;
  D0(e) &&
    ((n = Object.assign({}, e)),
    e.expires_at || (n.expires_at = h0(e.expires_in)));
  const r = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: n, user: r }, error: null };
}
function Xt(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function O0(e) {
  return { data: e, error: null };
}
function j0(e) {
  const {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: i,
      verification_type: o,
    } = e,
    s = C0(e, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    l = {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: i,
      verification_type: o,
    },
    a = Object.assign({}, s);
  return { data: { properties: l, user: a }, error: null };
}
function L0(e) {
  return e;
}
function D0(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
var N0 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
};
class $0 {
  constructor({ url: t = "", headers: n = {}, fetch: r }) {
    (this.url = t),
      (this.headers = n),
      (this.fetch = Gh(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  async signOut(t, n = "global") {
    try {
      return (
        await G(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (W(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(t, n = {}) {
    try {
      return await G(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: Xt,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(t) {
    try {
      const { options: n } = t,
        r = N0(t, ["options"]),
        i = Object.assign(Object.assign({}, r), n);
      return (
        "newEmail" in r &&
          ((i.new_email = r == null ? void 0 : r.newEmail), delete i.newEmail),
        await G(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: i,
          headers: this.headers,
          xform: j0,
          redirectTo: n == null ? void 0 : n.redirectTo,
        })
      );
    } catch (n) {
      if (W(n)) return { data: { properties: null, user: null }, error: n };
      throw n;
    }
  }
  async createUser(t) {
    try {
      return await G(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Xt,
      });
    } catch (n) {
      if (W(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async listUsers(t) {
    var n, r, i, o, s, l, a;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await G(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = t == null ? void 0 : t.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (o =
                (i = t == null ? void 0 : t.perPage) === null || i === void 0
                  ? void 0
                  : i.toString()) !== null && o !== void 0
                ? o
                : "",
          },
          xform: L0,
        });
      if (c.error) throw c.error;
      const f = await c.json(),
        d =
          (s = c.headers.get("x-total-count")) !== null && s !== void 0 ? s : 0,
        _ =
          (a =
            (l = c.headers.get("link")) === null || l === void 0
              ? void 0
              : l.split(",")) !== null && a !== void 0
            ? a
            : [];
      return (
        _.length > 0 &&
          (_.forEach((g) => {
            const y = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)),
              E = JSON.parse(g.split(";")[1].split("=")[1]);
            u[`${E}Page`] = y;
          }),
          (u.total = parseInt(d))),
        { data: Object.assign(Object.assign({}, f), u), error: null }
      );
    } catch (u) {
      if (W(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(t) {
    try {
      return await G(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Xt,
      });
    } catch (n) {
      if (W(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUserById(t, n) {
    try {
      return await G(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: n,
        headers: this.headers,
        xform: Xt,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(t, n = !1) {
    try {
      return await G(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: n },
        xform: Xt,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(t) {
    try {
      const { data: n, error: r } = await G(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (i) => ({ data: { factors: i }, error: null }),
        }
      );
      return { data: n, error: r };
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(t) {
    try {
      return {
        data: await G(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
}
const qh = "2.60.1",
  I0 = "http://localhost:9999",
  A0 = "supabase.auth.token",
  U0 = { "X-Client-Info": `gotrue-js/${qh}` },
  od = 10,
  z0 = {
    getItem: (e) => (hi() ? globalThis.localStorage.getItem(e) : null),
    setItem: (e, t) => {
      hi() && globalThis.localStorage.setItem(e, t);
    },
    removeItem: (e) => {
      hi() && globalThis.localStorage.removeItem(e);
    },
  };
function sd(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
function F0() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
globalThis &&
  hi() &&
  globalThis.localStorage &&
  globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");
class M0 extends Error {
  constructor(t) {
    super(t), (this.isAcquireTimeout = !0);
  }
}
F0();
const b0 = {
    url: I0,
    storageKey: A0,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: U0,
    flowType: "implicit",
    debug: !1,
  },
  Qr = 30 * 1e3,
  ld = 3;
async function B0(e, t, n) {
  return await n();
}
class Ni {
  constructor(t) {
    var n;
    (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log),
      (this.instanceID = Ni.nextInstanceID),
      (Ni.nextInstanceID += 1),
      this.instanceID > 0 &&
        St() &&
        console.warn(
          "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
        );
    const r = Object.assign(Object.assign({}, b0), t);
    if (
      ((this.logDebugMessages = !!r.debug),
      typeof r.debug == "function" && (this.logger = r.debug),
      (this.persistSession = r.persistSession),
      (this.storageKey = r.storageKey),
      (this.autoRefreshToken = r.autoRefreshToken),
      (this.admin = new $0({ url: r.url, headers: r.headers, fetch: r.fetch })),
      (this.url = r.url),
      (this.headers = r.headers),
      (this.fetch = Gh(r.fetch)),
      (this.lock = r.lock || B0),
      (this.detectSessionInUrl = r.detectSessionInUrl),
      (this.flowType = r.flowType),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession
        ? r.storage
          ? (this.storage = r.storage)
          : hi()
          ? (this.storage = z0)
          : ((this.memoryStorage = {}), (this.storage = sd(this.memoryStorage)))
        : ((this.memoryStorage = {}), (this.storage = sd(this.memoryStorage))),
      St() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (i) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          i
        );
      }
      (n = this.broadcastChannel) === null ||
        n === void 0 ||
        n.addEventListener("message", async (i) => {
          this._debug(
            "received broadcast notification from other tab or client",
            i
          ),
            await this._notifyAllSubscribers(i.data.event, i.data.session, !1);
        });
    }
    this.initialize();
  }
  _debug(...t) {
    return (
      this.logDebugMessages &&
        this.logger(
          `GoTrueClient@${this.instanceID} (${qh}) ${new Date().toISOString()}`,
          ...t
        ),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(-1, async () => await this._initialize()))()),
        await this.initializePromise);
  }
  async _initialize() {
    try {
      const t = St() ? await this._isPKCEFlow() : !1;
      if (
        (this._debug("#_initialize()", "begin", "is PKCE flow", t),
        t || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
      ) {
        const { data: n, error: r } = await this._getSessionFromURL(t);
        if (r)
          return (
            this._debug(
              "#_initialize()",
              "error detecting session from URL",
              r
            ),
            (r == null ? void 0 : r.message) === "Identity is already linked" ||
            (r == null ? void 0 : r.message) ===
              "Identity is already linked to another user"
              ? { error: r }
              : (await this._removeSession(), { error: r })
          );
        const { session: i, redirectType: o } = n;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            i,
            "redirect type",
            o
          ),
          await this._saveSession(i),
          setTimeout(async () => {
            o === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i)
              : await this._notifyAllSubscribers("SIGNED_IN", i);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return W(t)
        ? { error: t }
        : { error: new Jh("Unexpected error during initialization", t) };
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signUp(t) {
    var n, r, i;
    try {
      await this._removeSession();
      let o;
      if ("email" in t) {
        const { email: c, password: f, options: d } = t;
        let _ = null,
          g = null;
        if (this.flowType === "pkce") {
          const y = Wn();
          await _n(this.storage, `${this.storageKey}-code-verifier`, y),
            (_ = await Kn(y)),
            (g = y === _ ? "plain" : "s256");
        }
        o = await G(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: d == null ? void 0 : d.emailRedirectTo,
          body: {
            email: c,
            password: f,
            data:
              (n = d == null ? void 0 : d.data) !== null && n !== void 0
                ? n
                : {},
            gotrue_meta_security: {
              captcha_token: d == null ? void 0 : d.captchaToken,
            },
            code_challenge: _,
            code_challenge_method: g,
          },
          xform: Wt,
        });
      } else if ("phone" in t) {
        const { phone: c, password: f, options: d } = t;
        o = await G(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: f,
            data:
              (r = d == null ? void 0 : d.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (i = d == null ? void 0 : d.channel) !== null && i !== void 0
                ? i
                : "sms",
            gotrue_meta_security: {
              captcha_token: d == null ? void 0 : d.captchaToken,
            },
          },
          xform: Wt,
        });
      } else
        throw new uo(
          "You must provide either an email or phone number and a password"
        );
      const { data: s, error: l } = o;
      if (l || !s) return { data: { user: null, session: null }, error: l };
      const a = s.session,
        u = s.user;
      return (
        s.session &&
          (await this._saveSession(s.session),
          await this._notifyAllSubscribers("SIGNED_IN", a)),
        { data: { user: u, session: a }, error: null }
      );
    } catch (o) {
      if (W(o)) return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  async signInWithPassword(t) {
    try {
      await this._removeSession();
      let n;
      if ("email" in t) {
        const { email: o, password: s, options: l } = t;
        n = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: o,
              password: s,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
            xform: Wt,
          }
        );
      } else if ("phone" in t) {
        const { phone: o, password: s, options: l } = t;
        n = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: o,
              password: s,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
            xform: Wt,
          }
        );
      } else
        throw new uo(
          "You must provide either an email or phone number and a password"
        );
      const { data: r, error: i } = n;
      return i
        ? { data: { user: null, session: null }, error: i }
        : !r || !r.session || !r.user
        ? { data: { user: null, session: null }, error: new rl() }
        : (r.session &&
            (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
          { data: { user: r.user, session: r.session }, error: i });
    } catch (n) {
      if (W(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async signInWithOAuth(t) {
    var n, r, i, o;
    return (
      await this._removeSession(),
      await this._handleProviderSignIn(t.provider, {
        redirectTo:
          (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
        scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
        queryParams:
          (i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
        skipBrowserRedirect:
          (o = t.options) === null || o === void 0
            ? void 0
            : o.skipBrowserRedirect,
      })
    );
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    );
  }
  async _exchangeCodeForSession(t) {
    const [n, r] = (
        await ao(this.storage, `${this.storageKey}-code-verifier`)
      ).split("/"),
      { data: i, error: o } = await G(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: n },
          xform: Wt,
        }
      );
    return (
      await nl(this.storage, `${this.storageKey}-code-verifier`),
      o
        ? { data: { user: null, session: null, redirectType: null }, error: o }
        : !i || !i.session || !i.user
        ? {
            data: { user: null, session: null, redirectType: null },
            error: new rl(),
          }
        : (i.session &&
            (await this._saveSession(i.session),
            await this._notifyAllSubscribers("SIGNED_IN", i.session)),
          {
            data: Object.assign(Object.assign({}, i), {
              redirectType: r ?? null,
            }),
            error: o,
          })
    );
  }
  async signInWithIdToken(t) {
    await this._removeSession();
    try {
      const {
          options: n,
          provider: r,
          token: i,
          access_token: o,
          nonce: s,
        } = t,
        l = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: i,
              access_token: o,
              nonce: s,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            xform: Wt,
          }
        ),
        { data: a, error: u } = l;
      return u
        ? { data: { user: null, session: null }, error: u }
        : !a || !a.session || !a.user
        ? { data: { user: null, session: null }, error: new rl() }
        : (a.session &&
            (await this._saveSession(a.session),
            await this._notifyAllSubscribers("SIGNED_IN", a.session)),
          { data: a, error: u });
    } catch (n) {
      if (W(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async signInWithOtp(t) {
    var n, r, i, o, s;
    try {
      if ((await this._removeSession(), "email" in t)) {
        const { email: l, options: a } = t;
        let u = null,
          c = null;
        if (this.flowType === "pkce") {
          const d = Wn();
          await _n(this.storage, `${this.storageKey}-code-verifier`, d),
            (u = await Kn(d)),
            (c = d === u ? "plain" : "s256");
        }
        const { error: f } = await G(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: l,
            data:
              (n = a == null ? void 0 : a.data) !== null && n !== void 0
                ? n
                : {},
            create_user:
              (r = a == null ? void 0 : a.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: a == null ? void 0 : a.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: c,
          },
          redirectTo: a == null ? void 0 : a.emailRedirectTo,
        });
        return { data: { user: null, session: null }, error: f };
      }
      if ("phone" in t) {
        const { phone: l, options: a } = t,
          { data: u, error: c } = await G(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: l,
                data:
                  (i = a == null ? void 0 : a.data) !== null && i !== void 0
                    ? i
                    : {},
                create_user:
                  (o = a == null ? void 0 : a.shouldCreateUser) !== null &&
                  o !== void 0
                    ? o
                    : !0,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
                channel:
                  (s = a == null ? void 0 : a.channel) !== null && s !== void 0
                    ? s
                    : "sms",
              },
            }
          );
        return {
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: c,
        };
      }
      throw new uo("You must provide either an email or phone number.");
    } catch (l) {
      if (W(l)) return { data: { user: null, session: null }, error: l };
      throw l;
    }
  }
  async verifyOtp(t) {
    var n, r;
    try {
      t.type !== "email_change" &&
        t.type !== "phone_change" &&
        (await this._removeSession());
      let i, o;
      "options" in t &&
        ((i = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo),
        (o =
          (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: s, error: l } = await G(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: o },
          }),
          redirectTo: i,
          xform: Wt,
        }
      );
      if (l) throw l;
      if (!s) throw new Error("An error occurred on token verification.");
      const a = s.session,
        u = s.user;
      return (
        a != null &&
          a.access_token &&
          (await this._saveSession(a),
          await this._notifyAllSubscribers("SIGNED_IN", a)),
        { data: { user: u, session: a }, error: null }
      );
    } catch (i) {
      if (W(i)) return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  async signInWithSSO(t) {
    var n, r, i;
    try {
      await this._removeSession();
      let o = null,
        s = null;
      if (this.flowType === "pkce") {
        const l = Wn();
        await _n(this.storage, `${this.storageKey}-code-verifier`, l),
          (o = await Kn(l)),
          (s = l === o ? "plain" : "s256");
      }
      return await G(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in t ? { provider_id: t.providerId } : null
                ),
                "domain" in t ? { domain: t.domain } : null
              ),
              {
                redirect_to:
                  (r =
                    (n = t.options) === null || n === void 0
                      ? void 0
                      : n.redirectTo) !== null && r !== void 0
                    ? r
                    : void 0,
              }
            ),
            !((i = t == null ? void 0 : t.options) === null || i === void 0) &&
              i.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: t.options.captchaToken,
                  },
                }
              : null
          ),
          {
            skip_http_redirect: !0,
            code_challenge: o,
            code_challenge_method: s,
          }
        ),
        headers: this.headers,
        xform: O0,
      });
    } catch (o) {
      if (W(o)) return { data: null, error: o };
      throw o;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._reauthenticate())
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: n },
          error: r,
        } = t;
        if (r) throw r;
        if (!n) throw new Qn();
        const { error: i } = await G(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: n.access_token }
        );
        return { data: { user: null, session: null }, error: i };
      });
    } catch (t) {
      if (W(t)) return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  async resend(t) {
    try {
      t.type != "email_change" &&
        t.type != "phone_change" &&
        (await this._removeSession());
      const n = `${this.url}/resend`;
      if ("email" in t) {
        const { email: r, type: i, options: o } = t,
          { error: s } = await G(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              email: r,
              type: i,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            redirectTo: o == null ? void 0 : o.emailRedirectTo,
          });
        return { data: { user: null, session: null }, error: s };
      } else if ("phone" in t) {
        const { phone: r, type: i, options: o } = t,
          { data: s, error: l } = await G(this.fetch, "POST", n, {
            headers: this.headers,
            body: {
              phone: r,
              type: i,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
          });
        return {
          data: {
            user: null,
            session: null,
            messageId: s == null ? void 0 : s.message_id,
          },
          error: l,
        };
      }
      throw new uo(
        "You must provide either an email or phone number and a type"
      );
    } catch (n) {
      if (W(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._useSession(async (t) => t))
    );
  }
  async _acquireLock(t, n) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          i = (async () => (await r, await n()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await i;
              } catch {}
            })()
          ),
          i
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const r = n();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })()
            ),
              await r;
            this.pendingInLock.length;

          ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await r;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await t(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let t = null;
      const n = await ao(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", n),
        n !== null &&
          (this._isValidSession(n)
            ? (t = n)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const r = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${r ? "" : " not"} expired`,
          "expires_at",
          t.expires_at
        ),
        !r)
      )
        return { data: { session: t }, error: null };
      const { session: i, error: o } = await this._callRefreshToken(
        t.refresh_token
      );
      return o
        ? { data: { session: null }, error: o }
        : { data: { session: i }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(t) {
    return t
      ? await this._getUser(t)
      : (await this.initializePromise,
        this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(t) {
    try {
      return t
        ? await G(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: Xt,
          })
        : await this._useSession(async (n) => {
            var r, i;
            const { data: o, error: s } = n;
            if (s) throw s;
            return await G(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt:
                (i =
                  (r = o.session) === null || r === void 0
                    ? void 0
                    : r.access_token) !== null && i !== void 0
                  ? i
                  : void 0,
              xform: Xt,
            });
          });
    } catch (n) {
      if (W(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUser(t, n = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._updateUser(t, n))
    );
  }
  async _updateUser(t, n = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: i, error: o } = r;
        if (o) throw o;
        if (!i.session) throw new Qn();
        const s = i.session;
        let l = null,
          a = null;
        if (this.flowType === "pkce" && t.email != null) {
          const f = Wn();
          await _n(this.storage, `${this.storageKey}-code-verifier`, f),
            (l = await Kn(f)),
            (a = f === l ? "plain" : "s256");
        }
        const { data: u, error: c } = await G(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: l,
              code_challenge_method: a,
            }),
            jwt: s.access_token,
            xform: Xt,
          }
        );
        if (c) throw c;
        return (
          (s.user = u.user),
          await this._saveSession(s),
          await this._notifyAllSubscribers("USER_UPDATED", s),
          { data: { user: s.user }, error: null }
        );
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  _decodeJWT(t) {
    return nd(t);
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._setSession(t))
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new Qn();
      const n = Date.now() / 1e3;
      let r = n,
        i = !0,
        o = null;
      const s = nd(t.access_token);
      if ((s.exp && ((r = s.exp), (i = r <= n)), i)) {
        const { session: l, error: a } = await this._callRefreshToken(
          t.refresh_token
        );
        if (a) return { data: { user: null, session: null }, error: a };
        if (!l) return { data: { user: null, session: null }, error: null };
        o = l;
      } else {
        const { data: l, error: a } = await this._getUser(t.access_token);
        if (a) throw a;
        (o = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: l.user,
          token_type: "bearer",
          expires_in: r - n,
          expires_at: r,
        }),
          await this._saveSession(o),
          await this._notifyAllSubscribers("SIGNED_IN", o);
      }
      return { data: { user: o.user, session: o }, error: null };
    } catch (n) {
      if (W(n)) return { data: { session: null, user: null }, error: n };
      throw n;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._refreshSession(t))
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!t) {
          const { data: s, error: l } = n;
          if (l) throw l;
          t = (r = s.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new Qn();
        const { session: i, error: o } = await this._callRefreshToken(
          t.refresh_token
        );
        return o
          ? { data: { user: null, session: null }, error: o }
          : i
          ? { data: { user: i.user, session: i }, error: null }
          : { data: { user: null, session: null }, error: null };
      });
    } catch (n) {
      if (W(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async _getSessionFromURL(t) {
    try {
      if (!St()) throw new co("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
        throw new co("Not a valid implicit grant flow url.");
      if (this.flowType == "pkce" && !t)
        throw new rd("Not a valid PKCE flow url.");
      const n = tl(window.location.href);
      if (t) {
        if (!n.code) throw new rd("No code detected.");
        const { data: p, error: v } = await this._exchangeCodeForSession(
          n.code
        );
        if (v) throw v;
        const h = new URL(window.location.href);
        return (
          h.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", h.toString()),
          { data: { session: p.session, redirectType: null }, error: null }
        );
      }
      if (n.error || n.error_description || n.error_code)
        throw new co(
          n.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: n.error || "unspecified_error",
            code: n.error_code || "unspecified_code",
          }
        );
      const {
        provider_token: r,
        provider_refresh_token: i,
        access_token: o,
        refresh_token: s,
        expires_in: l,
        expires_at: a,
        token_type: u,
      } = n;
      if (!o || !l || !s || !u) throw new co("No session defined in URL");
      const c = Math.round(Date.now() / 1e3),
        f = parseInt(l);
      let d = c + f;
      a && (d = parseInt(a));
      const _ = d - c;
      _ * 1e3 <= Qr &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${_}s, should have been closer to ${f}s`
        );
      const g = d - f;
      c - g >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            g,
            d,
            c
          )
        : c - g < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
            g,
            d,
            c
          );
      const { data: y, error: E } = await this._getUser(o);
      if (E) throw E;
      const m = {
        provider_token: r,
        provider_refresh_token: i,
        access_token: o,
        expires_in: f,
        expires_at: d,
        refresh_token: s,
        token_type: u,
        user: y.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        { data: { session: m, redirectType: n.type }, error: null }
      );
    } catch (n) {
      if (W(n))
        return { data: { session: null, redirectType: null }, error: n };
      throw n;
    }
  }
  _isImplicitGrantFlow() {
    const t = tl(window.location.href);
    return !!(St() && (t.access_token || t.error_description));
  }
  async _isPKCEFlow() {
    const t = tl(window.location.href),
      n = await ao(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && n);
  }
  async signOut(t = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._signOut(t))
    );
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (n) => {
      var r;
      const { data: i, error: o } = n;
      if (o) return { error: o };
      const s =
        (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
      if (s) {
        const { error: l } = await this.admin.signOut(s, t);
        if (l && !(E0(l) && (l.status === 404 || l.status === 401)))
          return { error: l };
      }
      return (
        t !== "others" &&
          (await this._removeSession(),
          await nl(this.storage, `${this.storageKey}-code-verifier`),
          await this._notifyAllSubscribers("SIGNED_OUT", null)),
        { error: null }
      );
    });
  }
  onAuthStateChange(t) {
    const n = p0(),
      r = {
        id: n,
        callback: t,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            n
          ),
            this.stateChangeEmitters.delete(n);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", n),
      this.stateChangeEmitters.set(n, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(n);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (n) => {
      var r, i;
      try {
        const {
          data: { session: o },
          error: s,
        } = n;
        if (s) throw s;
        await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", o)),
          this._debug("INITIAL_SESSION", "callback id", t, "session", o);
      } catch (o) {
        await ((i = this.stateChangeEmitters.get(t)) === null || i === void 0
          ? void 0
          : i.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", t, "error", o),
          console.error(o);
      }
    });
  }
  async resetPasswordForEmail(t, n = {}) {
    let r = null,
      i = null;
    if (this.flowType === "pkce") {
      const o = Wn();
      await _n(
        this.storage,
        `${this.storageKey}-code-verifier`,
        `${o}/PASSWORD_RECOVERY`
      ),
        (r = await Kn(o)),
        (i = o === r ? "plain" : "s256");
    }
    try {
      return await G(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: r,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: n.captchaToken },
        },
        headers: this.headers,
        redirectTo: n.redirectTo,
      });
    } catch (o) {
      if (W(o)) return { data: null, error: o };
      throw o;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r) throw r;
      return {
        data: {
          identities: (t = n.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      };
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async linkIdentity(t) {
    var n;
    try {
      const { data: r, error: i } = await this._useSession(async (o) => {
        var s, l, a, u, c;
        const { data: f, error: d } = o;
        if (d) throw d;
        const _ = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (s = t.options) === null || s === void 0 ? void 0 : s.redirectTo,
            scopes:
              (l = t.options) === null || l === void 0 ? void 0 : l.scopes,
            queryParams:
              (a = t.options) === null || a === void 0 ? void 0 : a.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await G(this.fetch, "GET", _, {
          headers: this.headers,
          jwt:
            (c =
              (u = f.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && c !== void 0
              ? c
              : void 0,
        });
      });
      if (i) throw i;
      return (
        St() &&
          !(
            !((n = t.options) === null || n === void 0) && n.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        {
          data: { provider: t.provider, url: r == null ? void 0 : r.url },
          error: null,
        }
      );
    } catch (r) {
      if (W(r)) return { data: { provider: t.provider, url: null }, error: r };
      throw r;
    }
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: o, error: s } = n;
        if (s) throw s;
        return await G(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (i =
                (r = o.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && i !== void 0
                ? i
                : void 0,
          }
        );
      });
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _refreshAccessToken(t) {
    const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      const r = Date.now();
      return await y0(
        async (i) => (
          await g0(i * 200),
          this._debug(n, "refreshing attempt", i),
          await G(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: Wt }
          )
        ),
        (i, o, s) =>
          s && s.error && il(s.error) && Date.now() + (i + 1) * 200 - r < Qr
      );
    } catch (r) {
      if ((this._debug(n, "error", r), W(r)))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      "access_token" in t &&
      "refresh_token" in t &&
      "expires_at" in t
    );
  }
  async _handleProviderSignIn(t, n) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        t,
        "options",
        n,
        "url",
        r
      ),
      St() && !n.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: t, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const r = await ao(this.storage, this.storageKey);
      if (
        (this._debug(n, "session from storage", r), !this._isValidSession(r))
      ) {
        this._debug(n, "session is not valid"),
          r !== null && (await this._removeSession());
        return;
      }
      const i = Math.round(Date.now() / 1e3),
        o = ((t = r.expires_at) !== null && t !== void 0 ? t : 1 / 0) < i + od;
      if (
        (this._debug(
          n,
          `session has${o ? "" : " not"} expired with margin of ${od}s`
        ),
        o)
      ) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: s } = await this._callRefreshToken(r.refresh_token);
          s &&
            (console.error(s),
            il(s) ||
              (this._debug(
                n,
                "refresh failed with a non-retryable error, removing the session",
                s
              ),
              await this._removeSession()));
        }
      } else await this._notifyAllSubscribers("SIGNED_IN", r);
    } catch (r) {
      this._debug(n, "error", r), console.error(r);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(t) {
    var n, r;
    if (!t) throw new Qn();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new gs();
      const { data: o, error: s } = await this._refreshAccessToken(t);
      if (s) throw s;
      if (!o.session) throw new Qn();
      await this._saveSession(o.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session);
      const l = { session: o.session, error: null };
      return this.refreshingDeferred.resolve(l), l;
    } catch (o) {
      if ((this._debug(i, "error", o), W(o))) {
        const s = { session: null, error: o };
        return (
          il(o) ||
            (await this._removeSession(),
            await this._notifyAllSubscribers("SIGNED_OUT", null)),
          (n = this.refreshingDeferred) === null ||
            n === void 0 ||
            n.resolve(s),
          s
        );
      }
      throw (
        ((r = this.refreshingDeferred) === null || r === void 0 || r.reject(o),
        o)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(t, n, r = !0) {
    const i = `#_notifyAllSubscribers(${t})`;
    this._debug(i, "begin", n, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: t, session: n });
      const o = [],
        s = Array.from(this.stateChangeEmitters.values()).map(async (l) => {
          try {
            await l.callback(t, n);
          } catch (a) {
            o.push(a);
          }
        });
      if ((await Promise.all(s), o.length > 0)) {
        for (let l = 0; l < o.length; l += 1) console.error(o[l]);
        throw o[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  async _saveSession(t) {
    this._debug("#_saveSession()", t),
      await _n(this.storage, this.storageKey, t);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await nl(this.storage, this.storageKey);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        St() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", t);
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const t = setInterval(() => this._autoRefreshTokenTick(), Qr);
    (this.autoRefreshTicker = t),
      t && typeof t == "object" && typeof t.unref == "function"
        ? t.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(t),
      setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), t && clearInterval(t);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (n) => {
              const {
                data: { session: r },
              } = n;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((r.expires_at * 1e3 - t) / Qr);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${i} ticks, a tick lasts ${Qr}ms, refresh threshold is ${ld} ticks`
              ),
                i <= ld && (await this._callRefreshToken(r.refresh_token));
            });
          } catch (n) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              n
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof M0)
        this._debug("auto refresh token tick lock not available");
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !St() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  async _onVisibilityChanged(t) {
    const n = `#_onVisibilityChanged(${t})`;
    this._debug(n, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(-1, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  n,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(t, n, r) {
    const i = [`provider=${encodeURIComponent(n)}`];
    if (
      (r != null &&
        r.redirectTo &&
        i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && i.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === "pkce")
    ) {
      const o = Wn();
      await _n(this.storage, `${this.storageKey}-code-verifier`, o);
      const s = await Kn(o),
        l = o === s ? "plain" : "s256";
      this._debug(
        "PKCE",
        "code verifier",
        `${o.substring(0, 5)}...`,
        "code challenge",
        s,
        "method",
        l
      );
      const a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(s)}`,
        code_challenge_method: `${encodeURIComponent(l)}`,
      });
      i.push(a.toString());
    }
    if (r != null && r.queryParams) {
      const o = new URLSearchParams(r.queryParams);
      i.push(o.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${t}?${i.join("&")}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: i, error: o } = n;
        return o
          ? { data: null, error: o }
          : await G(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            });
      });
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: o, error: s } = n;
        if (s) return { data: null, error: s };
        const { data: l, error: a } = await G(
          this.fetch,
          "POST",
          `${this.url}/factors`,
          {
            body: {
              friendly_name: t.friendlyName,
              factor_type: t.factorType,
              issuer: t.issuer,
            },
            headers: this.headers,
            jwt:
              (r = o == null ? void 0 : o.session) === null || r === void 0
                ? void 0
                : r.access_token,
          }
        );
        return a
          ? { data: null, error: a }
          : (!((i = l == null ? void 0 : l.totp) === null || i === void 0) &&
              i.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            { data: l, error: null });
      });
    } catch (n) {
      if (W(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _verify(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: o } = n;
          if (o) return { data: null, error: o };
          const { data: s, error: l } = await G(
            this.fetch,
            "POST",
            `${this.url}/factors/${t.factorId}/verify`,
            {
              body: { code: t.code, challenge_id: t.challengeId },
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            }
          );
          return l
            ? { data: null, error: l }
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + s.expires_in },
                  s
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s),
              { data: s, error: l });
        });
      } catch (n) {
        if (W(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: o } = n;
          return o
            ? { data: null, error: o }
            : await G(
                this.fetch,
                "POST",
                `${this.url}/factors/${t.factorId}/challenge`,
                {
                  headers: this.headers,
                  jwt:
                    (r = i == null ? void 0 : i.session) === null ||
                    r === void 0
                      ? void 0
                      : r.access_token,
                }
              );
        });
      } catch (n) {
        if (W(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: n, error: r } = await this._challenge({
      factorId: t.factorId,
    });
    return r
      ? { data: null, error: r }
      : await this._verify({
          factorId: t.factorId,
          challengeId: n.id,
          code: t.code,
        });
  }
  async _listFactors() {
    const {
      data: { user: t },
      error: n,
    } = await this.getUser();
    if (n) return { data: null, error: n };
    const r = (t == null ? void 0 : t.factors) || [],
      i = r.filter((o) => o.factor_type === "totp" && o.status === "verified");
    return { data: { all: r, totp: i }, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(
      -1,
      async () =>
        await this._useSession(async (t) => {
          var n, r;
          const {
            data: { session: i },
            error: o,
          } = t;
          if (o) return { data: null, error: o };
          if (!i)
            return {
              data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: [],
              },
              error: null,
            };
          const s = this._decodeJWT(i.access_token);
          let l = null;
          s.aal && (l = s.aal);
          let a = l;
          ((r =
            (n = i.user.factors) === null || n === void 0
              ? void 0
              : n.filter((f) => f.status === "verified")) !== null &&
          r !== void 0
            ? r
            : []
          ).length > 0 && (a = "aal2");
          const c = s.amr || [];
          return {
            data: {
              currentLevel: l,
              nextLevel: a,
              currentAuthenticationMethods: c,
            },
            error: null,
          };
        })
    );
  }
}
Ni.nextInstanceID = 0;
class V0 extends Ni {
  constructor(t) {
    super(t);
  }
}
var H0 = function (e, t, n, r) {
  function i(o) {
    return o instanceof n
      ? o
      : new n(function (s) {
          s(o);
        });
  }
  return new (n || (n = Promise))(function (o, s) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        s(f);
      }
    }
    function a(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? o(c.value) : i(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const W0 = { headers: s0 },
  K0 = { schema: "public" },
  Q0 = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  G0 = {};
class J0 {
  constructor(t, n, r) {
    var i, o, s, l, a, u, c, f;
    if (((this.supabaseUrl = t), (this.supabaseKey = n), !t))
      throw new Error("supabaseUrl is required.");
    if (!n) throw new Error("supabaseKey is required.");
    const d = d0(t);
    (this.realtimeUrl = `${d}/realtime/v1`.replace(/^http/i, "ws")),
      (this.authUrl = `${d}/auth/v1`),
      (this.storageUrl = `${d}/storage/v1`),
      (this.functionsUrl = `${d}/functions/v1`);
    const _ = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
      g = {
        db: K0,
        realtime: G0,
        auth: Object.assign(Object.assign({}, Q0), { storageKey: _ }),
        global: W0,
      },
      y = f0(r ?? {}, g);
    (this.storageKey =
      (o = (i = y.auth) === null || i === void 0 ? void 0 : i.storageKey) !==
        null && o !== void 0
        ? o
        : ""),
      (this.headers =
        (l = (s = y.global) === null || s === void 0 ? void 0 : s.headers) !==
          null && l !== void 0
          ? l
          : {}),
      (this.auth = this._initSupabaseAuthClient(
        (a = y.auth) !== null && a !== void 0 ? a : {},
        this.headers,
        (u = y.global) === null || u === void 0 ? void 0 : u.fetch
      )),
      (this.fetch = c0(
        n,
        this._getAccessToken.bind(this),
        (c = y.global) === null || c === void 0 ? void 0 : c.fetch
      )),
      (this.realtime = this._initRealtimeClient(
        Object.assign({ headers: this.headers }, y.realtime)
      )),
      (this.rest = new su(`${d}/rest/v1`, {
        headers: this.headers,
        schema: (f = y.db) === null || f === void 0 ? void 0 : f.schema,
        fetch: this.fetch,
      })),
      this._listenForAuthEvents();
  }
  get functions() {
    return new Ey(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new i0(this.storageUrl, this.headers, this.fetch);
  }
  from(t) {
    return this.rest.from(t);
  }
  schema(t) {
    return this.rest.schema(t);
  }
  rpc(t, n = {}, r) {
    return this.rest.rpc(t, n, r);
  }
  channel(t, n = { config: {} }) {
    return this.realtime.channel(t, n);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var t, n;
    return H0(this, void 0, void 0, function* () {
      const { data: r } = yield this.auth.getSession();
      return (n =
        (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !==
        null && n !== void 0
        ? n
        : null;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: t,
      persistSession: n,
      detectSessionInUrl: r,
      storage: i,
      storageKey: o,
      flowType: s,
      debug: l,
    },
    a,
    u
  ) {
    const c = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new V0({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, c), a),
      storageKey: o,
      autoRefreshToken: t,
      persistSession: n,
      detectSessionInUrl: r,
      storage: i,
      flowType: s,
      debug: l,
      fetch: u,
    });
  }
  _initRealtimeClient(t) {
    return new Ky(
      this.realtimeUrl,
      Object.assign(Object.assign({}, t), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          t == null ? void 0 : t.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((n, r) => {
      this._handleTokenChanged(
        n,
        "CLIENT",
        r == null ? void 0 : r.access_token
      );
    });
  }
  _handleTokenChanged(t, n, r) {
    (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
    this.changedAccessToken !== r
      ? (this.realtime.setAuth(r ?? null), (this.changedAccessToken = r))
      : t === "SIGNED_OUT" &&
        (this.realtime.setAuth(this.supabaseKey),
        n == "STORAGE" && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const q0 = (e, t, n) => new J0(e, t, n);
var Y0 = {};
const X0 = "https://lwfjbntqvslcwutotlde.supabase.co",
  Z0 = Y0.SUPABASE_KEY || "",
  ew = q0(X0, Z0),
  tw = async () => {
    const { data: e } = await ew.from("postss").select("*");
    return e;
  },
  ad = tw(),
  nw = () => (console.log("log", ad), j.jsx(j.Fragment, { children: ad })),
  rw = () => j.jsx(j.Fragment, { children: j.jsx(nw, {}) }),
  iw = () =>
    j.jsx(j.Fragment, {
      children: j.jsx("div", {
        className: "container-col outline maincontent",
        children: "Material guide",
      }),
    }),
  ow = () =>
    j.jsx(j.Fragment, {
      children: j.jsx("div", {
        className: "container-col",
        children: "climate report",
      }),
    }),
  sw = () =>
    j.jsx(j.Fragment, {
      children: j.jsx("div", {
        className: "container-col maincontent outline",
        children: "Login",
      }),
    }),
  lw = () =>
    j.jsx(j.Fragment, {
      children: j.jsx("div", {
        className: "container-col",
        children: "About us",
      }),
    }),
  aw = () => j.jsx(j.Fragment, {}),
  uw = () => j.jsx(j.Fragment, {}),
  cw = Yg([
    {
      path: "/",
      element: j.jsx(hy, {}),
      errorElement: j.jsx(py, {}),
      children: [
        { path: "/", element: j.jsx(my, {}), index: !0 },
        { path: "/guides", element: j.jsx(rw, {}), index: !0 },
        { path: "/material-guide", element: j.jsx(iw, {}), index: !0 },
        { path: "/climate-impact", element: j.jsx(ow, {}), index: !0 },
        { path: "/login", element: j.jsx(sw, {}), index: !0 },
        { path: "/about-us", element: j.jsx(lw, {}), index: !0 },
        {
          path: "/admin",
          element: j.jsx(aw, {}),
          children: [{ path: "/admin/:id", element: j.jsx(uw, {}) }],
        },
      ],
    },
  ]);
ol.createRoot(document.getElementById("root")).render(
  j.jsx(_d.StrictMode, { children: j.jsx(sy, { router: cw }) })
);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
