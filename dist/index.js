import { createTheme as x } from "@mui/material/styles";
import { jsx as a, jsxs as P } from "react/jsx-runtime";
import { ToggleButtonGroup as k, ToggleButton as A, Stack as j, IconButton as v } from "@mui/material";
import d, { useCallback as y, useMemo as p } from "react";
import f, { forEach as D, isNil as N } from "lodash";
const X = ({
  options: e,
  onChange: n,
  label: t,
  selectedOption: r,
  disabled: c,
  displayProp: o,
  valueProp: u
}) => {
  const s = y(
    (i) => {
      if (!f.isNil(i))
        return f.isNil(u) ? i : i[u];
    },
    [u]
  ), l = y(
    (i) => f.isNil(o) ? i : i[o],
    [o]
  ), C = p(() => s(r), [s, r]);
  return /* @__PURE__ */ a(
    k,
    {
      color: "primary",
      value: C,
      exclusive: !0,
      onChange: (i, m) => {
        n(m);
      },
      "aria-label": t ?? "Select an option",
      children: f.chain(e).map((i) => {
        const m = s(i), S = l(i);
        return { option: i, value: m, display: S };
      }).filter((i) => !f.isNil(i.value)).value().map(({ value: i, display: m }) => /* @__PURE__ */ a(
        A,
        {
          value: i,
          disabled: c,
          children: m
        },
        i
      ))
    }
  );
};
var z = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, w = d.createContext && /* @__PURE__ */ d.createContext(z), E = ["attr", "size", "title"];
function _(e, n) {
  if (e == null) return {};
  var t, r, c = B(e, n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (c[t] = e[t]);
  }
  return c;
}
function B(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function h() {
  return h = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, h.apply(null, arguments);
}
function O(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function g(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? O(Object(t), !0).forEach(function(r) {
      H(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function H(e, n, t) {
  return (n = I(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function I(e) {
  var n = T(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function T(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function M(e) {
  return e && e.map((n, t) => /* @__PURE__ */ d.createElement(n.tag, g({
    key: t
  }, n.attr), M(n.child)));
}
function b(e) {
  return (n) => /* @__PURE__ */ d.createElement(V, h({
    attr: g({}, e.attr)
  }, n), M(e.child));
}
function V(e) {
  var n = (t) => {
    var r = e.attr, c = e.size, o = e.title, u = _(e, E), s = c || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ d.createElement("svg", h({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, u, {
      className: l,
      style: g(g({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ d.createElement("title", null, o), e.children);
  };
  return w !== void 0 ? /* @__PURE__ */ d.createElement(w.Consumer, null, (t) => n(t)) : n(z);
}
function L(e) {
  return b({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(e);
}
function W(e) {
  return b({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(e);
}
function $(e) {
  return b({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(e);
}
const q = {
  border: "1px solid",
  borderColor: "primary.main"
}, Y = ({ address: e }) => {
  const n = (t) => {
    const r = encodeURIComponent(t), c = `comgooglemaps://?q=${r}`;
    window.location.href = c, setTimeout(() => {
      const o = `https://www.google.com/maps/search/?api=1&query=${r}`;
      window.open(o, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ P(j, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ a("span", { children: e }),
    /* @__PURE__ */ a(
      v,
      {
        title: "Map",
        size: "small",
        onClick: () => n(e),
        sx: q,
        children: /* @__PURE__ */ a(L, {})
      }
    )
  ] });
}, G = () => {
  const e = p(() => {
    const u = [
      {
        fn: () => {
          const l = navigator.userAgentData;
          return N(l) ? !1 : l.mobile;
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
    let s = 0;
    return D(u, (l) => {
      s += l.fn() ? l.confidence : 0;
    }), s >= 100;
  }, []), n = p(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: e,
    isApple: n
  };
}, Z = ({ phone: e }) => {
  const { isMobile: n } = G(), t = (o) => window.open(`tel:${o}`), r = (o) => window.open(`sms:${o}`), c = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ P(j, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ a("span", { children: e }),
    n && /* @__PURE__ */ a(
      v,
      {
        title: "Call",
        size: "small",
        onClick: () => t(e),
        sx: c,
        children: /* @__PURE__ */ a(W, {})
      }
    ),
    n && /* @__PURE__ */ a(
      v,
      {
        title: "Message",
        size: "small",
        onClick: () => r(e),
        sx: c,
        children: /* @__PURE__ */ a($, {})
      }
    )
  ] });
}, ee = x({
  palette: {
    mode: "light"
  }
}), te = x({
  palette: {
    mode: "dark"
  }
});
export {
  Y as ActiveAddress,
  Z as ActivePhone,
  X as ButtonSelect,
  te as darkTheme,
  ee as lightTheme,
  G as useDevice
};
//# sourceMappingURL=index.js.map
