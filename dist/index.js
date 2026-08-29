import { createTheme as w } from "@mui/material/styles";
import { jsx as d, jsxs as S } from "react/jsx-runtime";
import { ToggleButtonGroup as C, ToggleButton as D, Stack as N, IconButton as k } from "@mui/material";
import u, { useCallback as v, useMemo as p } from "react";
import m, { forEach as E, isNil as M } from "lodash";
const F = ({
  options: e,
  onChange: n,
  label: t,
  selectedOption: r,
  disabled: a,
  displayProp: c,
  valueProp: s
}) => {
  const l = v(
    (i) => {
      if (!m.isNil(i))
        return m.isNil(s) ? i : i[s];
    },
    [s]
  ), o = v(
    (i) => m.isNil(c) ? i : i[c],
    [c]
  ), j = p(() => l(r), [l, r]);
  return /* @__PURE__ */ d(
    C,
    {
      color: "primary",
      value: j,
      exclusive: !0,
      onChange: (i, f) => {
        n(f);
      },
      "aria-label": t ?? "Select an option",
      children: m.chain(e).map((i) => {
        const f = l(i), x = o(i);
        return { option: i, value: f, display: x };
      }).filter((i) => !m.isNil(i.value)).value().map(({ value: i, display: f }) => /* @__PURE__ */ d(
        D,
        {
          value: i,
          disabled: a,
          children: f
        },
        i
      ))
    }
  );
};
var O = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, b = u.createContext && /* @__PURE__ */ u.createContext(O), z = ["attr", "size", "title"];
function A(e, n) {
  if (e == null) return {};
  var t, r, a = _(e, n);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (r = 0; r < c.length; r++) t = c[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
function _(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function g() {
  return g = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, g.apply(null, arguments);
}
function y(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function h(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? y(Object(t), !0).forEach(function(r) {
      T(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function T(e, n, t) {
  return (n = B(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function B(e) {
  var n = I(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function I(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function P(e) {
  return e && e.map((n, t) => /* @__PURE__ */ u.createElement(n.tag, h({
    key: t
  }, n.attr), P(n.child)));
}
function V(e) {
  return (n) => /* @__PURE__ */ u.createElement(W, g({
    attr: h({}, e.attr)
  }, n), P(e.child));
}
function W(e) {
  var n = (t) => {
    var r = e.attr, a = e.size, c = e.title, s = A(e, z), l = a || t.size || "1em", o;
    return t.className && (o = t.className), e.className && (o = (o ? o + " " : "") + e.className), /* @__PURE__ */ u.createElement("svg", g({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: o,
      style: h(h({
        color: e.color || t.color
      }, t.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ u.createElement("title", null, c), e.children);
  };
  return b !== void 0 ? /* @__PURE__ */ u.createElement(b.Consumer, null, (t) => n(t)) : n(O);
}
function H(e) {
  return V({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(e);
}
const L = {
  border: "1px solid",
  borderColor: "primary.main"
}, J = ({ address: e }) => {
  const n = (t) => {
    const r = encodeURIComponent(t), a = `comgooglemaps://?q=${r}`;
    window.location.href = a, setTimeout(() => {
      const c = `https://www.google.com/maps/search/?api=1&query=${r}`;
      window.open(c, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ S(N, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ d("span", { children: e }),
    /* @__PURE__ */ d(
      k,
      {
        title: "Map",
        size: "small",
        onClick: () => n(e),
        sx: L,
        children: /* @__PURE__ */ d(H, {})
      }
    )
  ] });
}, Q = () => {
  const e = p(() => {
    const s = [
      {
        fn: () => {
          const o = navigator.userAgentData;
          return M(o) ? !1 : o.mobile;
        },
        confidence: 100
      },
      {
        fn: () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        confidence: 60
      },
      {
        fn: () => navigator.maxTouchPoints > 0,
        confidence: 20
      },
      {
        fn: () => window.matchMedia("(max-width: 768px)").matches,
        confidence: 20
      }
    ];
    let l = 0;
    return E(s, (o) => {
      l += o.fn() ? o.confidence : 0;
    }), l >= 100;
  }, []), n = p(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: e,
    isApple: n
  };
}, X = w({
  palette: {
    mode: "light"
  }
}), Y = w({
  palette: {
    mode: "dark"
  }
});
export {
  J as ActiveAddress,
  F as ButtonSelect,
  Y as darkTheme,
  X as lightTheme,
  Q as useDevice
};
//# sourceMappingURL=index.js.map
