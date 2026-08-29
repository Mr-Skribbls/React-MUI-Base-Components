import { createTheme as z } from "@mui/material/styles";
import { jsx as a, jsxs as y } from "react/jsx-runtime";
import { ToggleButtonGroup as k, ToggleButton as E, Stack as w, IconButton as f } from "@mui/material";
import d, { useCallback as O, useMemo as b } from "react";
import h, { forEach as A, isNil as D } from "lodash";
const Y = ({
  options: e,
  onChange: t,
  label: n,
  selectedOption: r,
  disabled: c,
  displayProp: o,
  valueProp: u
}) => {
  const s = O(
    (i) => {
      if (!h.isNil(i))
        return h.isNil(u) ? i : i[u];
    },
    [u]
  ), l = O(
    (i) => h.isNil(o) ? i : i[o],
    [o]
  ), C = b(() => s(r), [s, r]);
  return /* @__PURE__ */ a(
    k,
    {
      color: "primary",
      value: C,
      exclusive: !0,
      onChange: (i, m) => {
        t(m);
      },
      "aria-label": n ?? "Select an option",
      children: h.chain(e).map((i) => {
        const m = s(i), S = l(i);
        return { option: i, value: m, display: S };
      }).filter((i) => !h.isNil(i.value)).value().map(({ value: i, display: m }) => /* @__PURE__ */ a(
        E,
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
var M = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, x = d.createContext && /* @__PURE__ */ d.createContext(M), H = ["attr", "size", "title"];
function N(e, t) {
  if (e == null) return {};
  var n, r, c = B(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
  }
  return c;
}
function B(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function g() {
  return g = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, g.apply(null, arguments);
}
function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(c) {
      return Object.getOwnPropertyDescriptor(e, c).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? P(Object(n), !0).forEach(function(r) {
      _(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _(e, t, n) {
  return (t = I(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function I(e) {
  var t = T(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function T(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j(e) {
  return e && e.map((t, n) => /* @__PURE__ */ d.createElement(t.tag, p({
    key: n
  }, t.attr), j(t.child)));
}
function v(e) {
  return (t) => /* @__PURE__ */ d.createElement(V, g({
    attr: p({}, e.attr)
  }, t), j(e.child));
}
function V(e) {
  var t = (n) => {
    var r = e.attr, c = e.size, o = e.title, u = N(e, H), s = c || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ d.createElement("svg", g({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, u, {
      className: l,
      style: p(p({
        color: e.color || n.color
      }, n.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ d.createElement("title", null, o), e.children);
  };
  return x !== void 0 ? /* @__PURE__ */ d.createElement(x.Consumer, null, (n) => t(n)) : t(M);
}
function L(e) {
  return v({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(e);
}
function W(e) {
  return v({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(e);
}
function $(e) {
  return v({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(e);
}
function q(e) {
  return v({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(e);
}
const G = {
  border: "1px solid",
  borderColor: "primary.main"
}, Z = ({ address: e }) => {
  const t = (n) => {
    const r = encodeURIComponent(n), c = `comgooglemaps://?q=${r}`;
    window.location.href = c, setTimeout(() => {
      const o = `https://www.google.com/maps/search/?api=1&query=${r}`;
      window.open(o, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ y(w, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ a("span", { children: e }),
    /* @__PURE__ */ a(
      f,
      {
        title: "Map",
        size: "small",
        onClick: () => t(e),
        sx: G,
        children: /* @__PURE__ */ a(L, {})
      }
    )
  ] });
}, K = () => {
  const e = b(() => {
    const u = [
      {
        fn: () => {
          const l = navigator.userAgentData;
          return D(l) ? !1 : l.mobile;
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
    return A(u, (l) => {
      s += l.fn() ? l.confidence : 0;
    }), s >= 100;
  }, []), t = b(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: e,
    isApple: t
  };
}, ee = ({ phone: e }) => {
  const { isMobile: t } = K(), n = (o) => window.open(`tel:${o}`), r = (o) => window.open(`sms:${o}`), c = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ y(w, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ a("span", { children: e }),
    t && /* @__PURE__ */ a(
      f,
      {
        title: "Call",
        size: "small",
        onClick: () => n(e),
        sx: c,
        children: /* @__PURE__ */ a(W, {})
      }
    ),
    t && /* @__PURE__ */ a(
      f,
      {
        title: "Message",
        size: "small",
        onClick: () => r(e),
        sx: c,
        children: /* @__PURE__ */ a($, {})
      }
    )
  ] });
}, te = ({ email: e }) => {
  const t = (r) => window.open(`mailto:${r}`);
  return /* @__PURE__ */ y(w, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ a("span", { children: e }),
    /* @__PURE__ */ a(
      f,
      {
        title: "Email",
        size: "small",
        onClick: () => t(e),
        sx: {
          border: "1px solid",
          borderColor: "primary.main"
        },
        children: /* @__PURE__ */ a(q, {})
      }
    )
  ] });
}, ne = z({
  palette: {
    mode: "light"
  }
}), re = z({
  palette: {
    mode: "dark"
  }
});
export {
  Z as ActiveAddress,
  te as ActiveEmail,
  ee as ActivePhone,
  Y as ButtonSelect,
  re as darkTheme,
  ne as lightTheme,
  K as useDevice
};
//# sourceMappingURL=index.js.map
