import { createTheme as y } from "@mui/material/styles";
import { jsx as d, jsxs as x } from "react/jsx-runtime";
import { ToggleButtonGroup as C, ToggleButton as N, Stack as S, IconButton as k } from "@mui/material";
import c, { useCallback as p, useMemo as z } from "react";
import f from "lodash";
const $ = ({
  options: e,
  onChange: r,
  label: t,
  selectedOption: n,
  disabled: l,
  displayProp: i,
  valueProp: s
}) => {
  const u = p(
    (o) => {
      if (!f.isNil(o))
        return f.isNil(s) ? o : o[s];
    },
    [s]
  ), a = p(
    (o) => f.isNil(i) ? o : o[i],
    [i]
  ), j = z(() => u(n), [u, n]);
  return /* @__PURE__ */ d(
    C,
    {
      color: "primary",
      value: j,
      exclusive: !0,
      onChange: (o, m) => {
        r(m);
      },
      "aria-label": t ?? "Select an option",
      children: f.chain(e).map((o) => {
        const m = u(o), P = a(o);
        return { option: o, value: m, display: P };
      }).filter((o) => !f.isNil(o.value)).value().map(({ value: o, display: m }) => /* @__PURE__ */ d(
        N,
        {
          value: o,
          disabled: l,
          children: m
        },
        o
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
}, b = c.createContext && /* @__PURE__ */ c.createContext(O), _ = ["attr", "size", "title"];
function E(e, r) {
  if (e == null) return {};
  var t, n, l = T(e, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
  }
  return l;
}
function T(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.indexOf(n) !== -1) continue;
    t[n] = e[n];
  }
  return t;
}
function g() {
  return g = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, g.apply(null, arguments);
}
function v(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function h(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? v(Object(t), !0).forEach(function(n) {
      I(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function I(e, r, t) {
  return (r = M(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function M(e) {
  var r = B(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function B(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function w(e) {
  return e && e.map((r, t) => /* @__PURE__ */ c.createElement(r.tag, h({
    key: t
  }, r.attr), w(r.child)));
}
function D(e) {
  return (r) => /* @__PURE__ */ c.createElement(V, g({
    attr: h({}, e.attr)
  }, r), w(e.child));
}
function V(e) {
  var r = (t) => {
    var n = e.attr, l = e.size, i = e.title, s = E(e, _), u = l || t.size || "1em", a;
    return t.className && (a = t.className), e.className && (a = (a ? a + " " : "") + e.className), /* @__PURE__ */ c.createElement("svg", g({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, s, {
      className: a,
      style: h(h({
        color: e.color || t.color
      }, t.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ c.createElement("title", null, i), e.children);
  };
  return b !== void 0 ? /* @__PURE__ */ c.createElement(b.Consumer, null, (t) => r(t)) : r(O);
}
function A(e) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(e);
}
const L = {
  border: "1px solid",
  borderColor: "primary.main"
}, H = ({ address: e }) => {
  const r = (t) => {
    const n = encodeURIComponent(t), l = `comgooglemaps://?q=${n}`;
    window.location.href = l, setTimeout(() => {
      const i = `https://www.google.com/maps/search/?api=1&query=${n}`;
      window.open(i, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ x(S, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ d("span", { children: e }),
    /* @__PURE__ */ d(
      k,
      {
        title: "Map",
        size: "small",
        onClick: () => r(e),
        sx: L,
        children: /* @__PURE__ */ d(A, {})
      }
    )
  ] });
}, F = y({
  palette: {
    mode: "light"
  }
}), J = y({
  palette: {
    mode: "dark"
  }
});
export {
  H as ActiveAddress,
  $ as ButtonSelect,
  J as darkTheme,
  F as lightTheme
};
//# sourceMappingURL=index.js.map
