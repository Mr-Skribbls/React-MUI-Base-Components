import { createTheme as H } from "@mui/material/styles";
import { jsx as d, jsxs as P, Fragment as B } from "react/jsx-runtime";
import { ToggleButtonGroup as I, ToggleButton as T, Stack as z, IconButton as x } from "@mui/material";
import b, { useCallback as k, useMemo as C } from "react";
import w, { forEach as G, isNil as a, sortBy as R, uniq as N, flatten as V, keys as f, findIndex as F, isEmpty as W, isFunction as A, isString as $ } from "lodash";
import { DataGrid as q } from "@mui/x-data-grid";
const pe = ({
  options: t,
  onChange: e,
  label: l,
  selectedOption: s,
  disabled: o,
  displayProp: i,
  valueProp: h
}) => {
  const m = k(
    (r) => {
      if (!w.isNil(r))
        return w.isNil(h) ? r : r[h];
    },
    [h]
  ), n = k(
    (r) => w.isNil(i) ? r : r[i],
    [i]
  ), j = C(() => m(s), [m, s]);
  return /* @__PURE__ */ d(
    I,
    {
      color: "primary",
      value: j,
      exclusive: !0,
      onChange: (r, p) => {
        e(p);
      },
      "aria-label": l ?? "Select an option",
      children: w.chain(t).map((r) => {
        const p = m(r), u = n(r);
        return { option: r, value: p, display: u };
      }).filter((r) => !w.isNil(r.value)).value().map(({ value: r, display: p }) => /* @__PURE__ */ d(
        T,
        {
          value: r,
          disabled: o,
          children: p
        },
        r
      ))
    }
  );
};
var _ = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, E = b.createContext && /* @__PURE__ */ b.createContext(_), K = ["attr", "size", "title"];
function U(t, e) {
  if (t == null) return {};
  var l, s, o = J(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (s = 0; s < i.length; s++) l = i[s], e.indexOf(l) === -1 && {}.propertyIsEnumerable.call(t, l) && (o[l] = t[l]);
  }
  return o;
}
function J(t, e) {
  if (t == null) return {};
  var l = {};
  for (var s in t) if ({}.hasOwnProperty.call(t, s)) {
    if (e.indexOf(s) !== -1) continue;
    l[s] = t[s];
  }
  return l;
}
function O() {
  return O = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var l = arguments[e];
      for (var s in l) ({}).hasOwnProperty.call(l, s) && (t[s] = l[s]);
    }
    return t;
  }, O.apply(null, arguments);
}
function D(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? D(Object(l), !0).forEach(function(s) {
      Q(t, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : D(Object(l)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return t;
}
function Q(t, e, l) {
  return (e = X(e)) in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function X(t) {
  var e = Y(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Y(t, e) {
  if (typeof t != "object" || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(t, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function L(t) {
  return t && t.map((e, l) => /* @__PURE__ */ b.createElement(e.tag, M({
    key: l
  }, e.attr), L(e.child)));
}
function S(t) {
  return (e) => /* @__PURE__ */ b.createElement(Z, O({
    attr: M({}, t.attr)
  }, e), L(t.child));
}
function Z(t) {
  var e = (l) => {
    var s = t.attr, o = t.size, i = t.title, h = U(t, K), m = o || l.size || "1em", n;
    return l.className && (n = l.className), t.className && (n = (n ? n + " " : "") + t.className), /* @__PURE__ */ b.createElement("svg", O({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, s, h, {
      className: n,
      style: M(M({
        color: t.color || l.color
      }, l.style), t.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ b.createElement("title", null, i), t.children);
  };
  return E !== void 0 ? /* @__PURE__ */ b.createElement(E.Consumer, null, (l) => e(l)) : e(_);
}
function g(t) {
  return S({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function ee(t) {
  return S({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function te(t) {
  return S({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function le(t) {
  return S({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const se = {
  border: "1px solid",
  borderColor: "primary.main"
}, be = ({ address: t }) => {
  const e = (l) => {
    const s = encodeURIComponent(l), o = `comgooglemaps://?q=${s}`;
    window.location.href = o, setTimeout(() => {
      const i = `https://www.google.com/maps/search/?api=1&query=${s}`;
      window.open(i, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ P(z, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ d("span", { children: t }),
    /* @__PURE__ */ d(
      x,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: se,
        children: /* @__PURE__ */ d(g, {})
      }
    )
  ] });
}, re = () => {
  const t = C(() => {
    const h = [
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
    return G(h, (n) => {
      m += n.fn() ? n.confidence : 0;
    }), m >= 100;
  }, []), e = C(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, ve = ({ phone: t }) => {
  const { isMobile: e } = re(), l = (i) => window.open(`tel:${i}`), s = (i) => window.open(`sms:${i}`), o = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ P(z, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ d("span", { children: t }),
    e && /* @__PURE__ */ d(
      x,
      {
        title: "Call",
        size: "small",
        onClick: () => l(t),
        sx: o,
        children: /* @__PURE__ */ d(ee, {})
      }
    ),
    e && /* @__PURE__ */ d(
      x,
      {
        title: "Message",
        size: "small",
        onClick: () => s(t),
        sx: o,
        children: /* @__PURE__ */ d(te, {})
      }
    )
  ] });
}, ye = ({ email: t }) => {
  const e = (s) => window.open(`mailto:${s}`);
  return /* @__PURE__ */ P(z, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ d("span", { children: t }),
    /* @__PURE__ */ d(
      x,
      {
        title: "Email",
        size: "small",
        onClick: () => e(t),
        sx: {
          border: "1px solid",
          borderColor: "primary.main"
        },
        children: /* @__PURE__ */ d(le, {})
      }
    )
  ] });
};
function ne({
  data: t,
  configuration: e,
  events: l
}) {
  var i, h, m;
  const s = C(
    () => R([
      ...N(V(t.map((c) => f(c).filter((r) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(r));
      })))),
      ...f(e == null ? void 0 : e.columns.actions)
    ], (c) => F(e == null ? void 0 : e.columns.order, (r) => r === c)).map((c) => {
      let r = {};
      if (!a(e == null ? void 0 : e.columns.headers) && !a(e.columns.headers[c]) && (r.headerName = e.columns.headers[c]), !a(e == null ? void 0 : e.columns.dimensions) && !a(e.columns.dimensions[c])) {
        const u = e.columns.dimensions[c];
        W(u) || (r = {
          ...r,
          ...u
        });
      }
      if (!a(e == null ? void 0 : e.columns.types) && !a(e.columns.types[c]) && (r.type = e.columns.types[c]), !a(e == null ? void 0 : e.columns.actions) && !a(e.columns.actions[c]) && (r.type = "actions", r.getActions = e.columns.actions[c]), !a(e == null ? void 0 : e.columns.customCells) && !a(e.columns.customCells[c])) {
        const u = e.columns.customCells[c];
        r.type = "custom", r.renderCell = (v) => {
          let y = /* @__PURE__ */ d(B, {});
          return A(u) && $(v.value) && (y = u(v.value, v.row)), y;
        };
      }
      if (!a(e == null ? void 0 : e.columns.customCellClassNames) && !a(e.columns.customCellClassNames[c])) {
        const u = e.columns.customCellClassNames[c];
        r.cellClassName = (v) => {
          let y = "";
          return A(u) && (y = u(v)), y;
        };
      }
      return !a(e == null ? void 0 : e.columns.formats) && !a(e.columns.formats[c]) && (r.valueFormatter = e.columns.formats[c]), {
        field: c,
        ...r
      };
    }),
    [e, t]
  ), o = (n) => {
    l != null && l.onRowSelection && l.onRowSelection(n);
  };
  return /* @__PURE__ */ d(
    q,
    {
      getRowHeight: e == null ? void 0 : e.getRowHeight,
      autoPageSize: !0,
      disableColumnFilter: !0,
      checkboxSelection: (i = e == null ? void 0 : e.selection) == null ? void 0 : i.multiSelect,
      disableMultipleRowSelection: !((h = e == null ? void 0 : e.selection) != null && h.multiSelect),
      isRowSelectable: () => {
        var n;
        return !((n = e == null ? void 0 : e.selection) != null && n.disabled);
      },
      columns: s,
      rows: t,
      rowSelectionModel: (m = e == null ? void 0 : e.selection) == null ? void 0 : m.model,
      onRowSelectionModelChange: o,
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
const ce = "_addableGridList_fpq0x_1", ie = {
  addableGridList: ce
}, we = ({
  data: t,
  addItemDialog: e,
  configuration: l,
  events: s
}) => /* @__PURE__ */ P("div", { className: ie.addableGridList, children: [
  /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d(
    ne,
    {
      data: t,
      configuration: l,
      events: s
    }
  ) }) }),
  e
] }), xe = H({
  palette: {
    mode: "light"
  }
}), Ce = H({
  palette: {
    mode: "dark"
  }
});
export {
  be as ActiveAddress,
  ye as ActiveEmail,
  ve as ActivePhone,
  we as AddableGridList,
  pe as ButtonSelect,
  ne as GridList,
  Ce as darkTheme,
  xe as lightTheme,
  re as useDevice
};
//# sourceMappingURL=index.js.map
