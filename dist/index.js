import { createTheme as _ } from "@mui/material/styles";
import b, { useCallback as k, useMemo as x, useReducer as R } from "react";
import { produce as T } from "immer";
import w, { forEach as G, isNil as a, sortBy as F, uniq as N, flatten as V, keys as D, findIndex as W, isEmpty as $, isFunction as E, isString as B, isNumber as q, isBoolean as U, isSymbol as K, cloneDeep as g } from "lodash";
import { jsx as o, jsxs as P, Fragment as J } from "react/jsx-runtime";
import { ToggleButtonGroup as Q, ToggleButton as X, Stack as f, IconButton as C } from "@mui/material";
import { DataGrid as Y } from "@mui/x-data-grid";
const fe = ({
  options: t,
  onChange: e,
  label: r,
  selectedOption: l,
  disabled: i,
  displayProp: d,
  valueProp: u
}) => {
  const m = k(
    (s) => {
      if (!w.isNil(s))
        return w.isNil(u) ? s : s[u];
    },
    [u]
  ), n = k(
    (s) => w.isNil(d) ? s : s[d],
    [d]
  ), j = x(() => m(l), [m, l]);
  return /* @__PURE__ */ o(
    Q,
    {
      color: "primary",
      value: j,
      exclusive: !0,
      onChange: (s, p) => {
        e(p);
      },
      "aria-label": r ?? "Select an option",
      children: w.chain(t).map((s) => {
        const p = m(s), h = n(s);
        return { option: s, value: p, display: h };
      }).filter((s) => !w.isNil(s.value)).value().map(({ value: s, display: p }) => /* @__PURE__ */ o(
        X,
        {
          value: s,
          disabled: i,
          children: p
        },
        s
      ))
    }
  );
};
var L = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, A = b.createContext && /* @__PURE__ */ b.createContext(L), Z = ["attr", "size", "title"];
function ee(t, e) {
  if (t == null) return {};
  var r, l, i = te(t, e);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    for (l = 0; l < d.length; l++) r = d[l], e.indexOf(r) === -1 && {}.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
  }
  return i;
}
function te(t, e) {
  if (t == null) return {};
  var r = {};
  for (var l in t) if ({}.hasOwnProperty.call(t, l)) {
    if (e.indexOf(l) !== -1) continue;
    r[l] = t[l];
  }
  return r;
}
function O() {
  return O = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var l in r) ({}).hasOwnProperty.call(r, l) && (t[l] = r[l]);
    }
    return t;
  }, O.apply(null, arguments);
}
function H(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    e && (l = l.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? H(Object(r), !0).forEach(function(l) {
      re(t, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach(function(l) {
      Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return t;
}
function re(t, e, r) {
  return (e = le(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function le(t) {
  var e = se(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function se(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var l = r.call(t, e);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function I(t) {
  return t && t.map((e, r) => /* @__PURE__ */ b.createElement(e.tag, M({
    key: r
  }, e.attr), I(e.child)));
}
function S(t) {
  return (e) => /* @__PURE__ */ b.createElement(ne, O({
    attr: M({}, t.attr)
  }, e), I(t.child));
}
function ne(t) {
  var e = (r) => {
    var l = t.attr, i = t.size, d = t.title, u = ee(t, Z), m = i || r.size || "1em", n;
    return r.className && (n = r.className), t.className && (n = (n ? n + " " : "") + t.className), /* @__PURE__ */ b.createElement("svg", O({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, l, u, {
      className: n,
      style: M(M({
        color: t.color || r.color
      }, r.style), t.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && /* @__PURE__ */ b.createElement("title", null, d), t.children);
  };
  return A !== void 0 ? /* @__PURE__ */ b.createElement(A.Consumer, null, (r) => e(r)) : e(L);
}
function ce(t) {
  return S({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function de(t) {
  return S({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function oe(t) {
  return S({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function ie(t) {
  return S({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const ae = {
  border: "1px solid",
  borderColor: "primary.main"
}, je = ({ address: t }) => {
  const e = (r) => {
    const l = encodeURIComponent(r), i = `comgooglemaps://?q=${l}`;
    window.location.href = i, setTimeout(() => {
      const d = `https://www.google.com/maps/search/?api=1&query=${l}`;
      window.open(d, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ P(f, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ o("span", { children: t }),
    /* @__PURE__ */ o(
      C,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: ae,
        children: /* @__PURE__ */ o(ce, {})
      }
    )
  ] });
}, me = () => {
  const t = x(() => {
    const u = [
      {
        fn: () => {
          const n = navigator.userAgentData;
          return a(n) ? !1 : n.mobile;
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
    let m = 0;
    return G(u, (n) => {
      m += n.fn() ? n.confidence : 0;
    }), m >= 100;
  }, []), e = x(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, ke = ({ phone: t }) => {
  const { isMobile: e } = me(), r = (d) => window.open(`tel:${d}`), l = (d) => window.open(`sms:${d}`), i = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ P(f, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ o("span", { children: t }),
    e && /* @__PURE__ */ o(
      C,
      {
        title: "Call",
        size: "small",
        onClick: () => r(t),
        sx: i,
        children: /* @__PURE__ */ o(de, {})
      }
    ),
    e && /* @__PURE__ */ o(
      C,
      {
        title: "Message",
        size: "small",
        onClick: () => l(t),
        sx: i,
        children: /* @__PURE__ */ o(oe, {})
      }
    )
  ] });
}, De = ({ email: t }) => {
  const e = (l) => window.open(`mailto:${l}`);
  return /* @__PURE__ */ P(f, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ o("span", { children: t }),
    /* @__PURE__ */ o(
      C,
      {
        title: "Email",
        size: "small",
        onClick: () => e(t),
        sx: {
          border: "1px solid",
          borderColor: "primary.main"
        },
        children: /* @__PURE__ */ o(ie, {})
      }
    )
  ] });
};
function ue({
  data: t,
  configuration: e,
  events: r
}) {
  var d, u, m;
  const l = x(
    () => F([
      ...N(V(t.map((c) => D(c).filter((s) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(s));
      })))),
      ...D(e == null ? void 0 : e.columns.actions)
    ], (c) => W(e == null ? void 0 : e.columns.order, (s) => s === c)).map((c) => {
      let s = {};
      if (!a(e == null ? void 0 : e.columns.headers) && !a(e.columns.headers[c]) && (s.headerName = e.columns.headers[c]), !a(e == null ? void 0 : e.columns.dimensions) && !a(e.columns.dimensions[c])) {
        const h = e.columns.dimensions[c];
        $(h) || (s = {
          ...s,
          ...h
        });
      }
      if (!a(e == null ? void 0 : e.columns.types) && !a(e.columns.types[c]) && (s.type = e.columns.types[c]), !a(e == null ? void 0 : e.columns.actions) && !a(e.columns.actions[c]) && (s.type = "actions", s.getActions = e.columns.actions[c]), !a(e == null ? void 0 : e.columns.customCells) && !a(e.columns.customCells[c])) {
        const h = e.columns.customCells[c];
        s.type = "custom", s.renderCell = (v) => {
          let y = /* @__PURE__ */ o(J, {});
          return E(h) && B(v.value) && (y = h(v.value, v.row)), y;
        };
      }
      if (!a(e == null ? void 0 : e.columns.customCellClassNames) && !a(e.columns.customCellClassNames[c])) {
        const h = e.columns.customCellClassNames[c];
        s.cellClassName = (v) => {
          let y = "";
          return E(h) && (y = h(v)), y;
        };
      }
      return !a(e == null ? void 0 : e.columns.formats) && !a(e.columns.formats[c]) && (s.valueFormatter = e.columns.formats[c]), {
        field: c,
        ...s
      };
    }),
    [e, t]
  ), i = (n) => {
    r != null && r.onRowSelection && r.onRowSelection(n);
  };
  return /* @__PURE__ */ o(
    Y,
    {
      getRowHeight: e == null ? void 0 : e.getRowHeight,
      autoPageSize: !0,
      disableColumnFilter: !0,
      checkboxSelection: (d = e == null ? void 0 : e.selection) == null ? void 0 : d.multiSelect,
      disableMultipleRowSelection: !((u = e == null ? void 0 : e.selection) != null && u.multiSelect),
      isRowSelectable: () => {
        var n;
        return !((n = e == null ? void 0 : e.selection) != null && n.disabled);
      },
      columns: l,
      rows: t,
      rowSelectionModel: (m = e == null ? void 0 : e.selection) == null ? void 0 : m.model,
      onRowSelectionModelChange: i,
      sx: {
        border: "2px solid var(--mui-palette-borders-main)",
        "& .MuiDataGrid-cell": {
          borderTop: "1px solid var(--mui-palette-borders-main)"
        },
        // Target both header and row checkboxes
        "& .MuiCheckbox-root": {
          color: "var(--mui-palette-cards-contrastText)"
          // Color when unchecked
        },
        "& .MuiCheckbox-root.Mui-checked": {
          color: "var(--mui-palette-highlights-main)"
          // Color when checked
        }
      }
    }
  );
}
const he = "_addableGridList_fpq0x_1", pe = {
  addableGridList: he
}, Ee = ({
  data: t,
  addItemDialog: e,
  configuration: r,
  events: l
}) => /* @__PURE__ */ P("div", { className: pe.addableGridList, children: [
  /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    ue,
    {
      data: t,
      configuration: r,
      events: l
    }
  ) }) }),
  e
] }), be = (t) => B(t) || q(t) || typeof t == "bigint" || U(t) || a(t) || K(t);
var ve = /* @__PURE__ */ ((t) => (t.SET = "set", t.UPDATE = "update", t.DRAFT = "draft", t))(ve || {});
const z = {
  set: (t, e) => e.value,
  update: (t, e) => e.updateFn(t),
  draft: (t, e) => T(t, e.draftFn)
}, ye = (t, e) => {
  switch (e.type) {
    case "set":
      return z[e.type](t, e);
    case "update":
      return z[e.type](t, e);
    case "draft":
      return z[e.type](t, e);
  }
}, we = () => (t, e) => ye(t, e), Ae = (t) => R(we(), be(t) ? t : g(t)), He = () => ({
  randomHex: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}), _e = _({
  palette: {
    mode: "light"
  }
}), Be = _({
  palette: {
    mode: "dark"
  }
});
export {
  ve as ActionType,
  je as ActiveAddress,
  De as ActiveEmail,
  ke as ActivePhone,
  Ee as AddableGridList,
  fe as ButtonSelect,
  ue as GridList,
  Be as darkTheme,
  _e as lightTheme,
  He as useColor,
  me as useDevice,
  Ae as useImducer
};
//# sourceMappingURL=index.js.map
