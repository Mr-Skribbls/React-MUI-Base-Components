import { createTheme as I } from "@mui/material/styles";
import v, { useCallback as H, useMemo as S, useReducer as W, useState as q, useEffect as U } from "react";
import { produce as K } from "immer";
import x, { forEach as J, isNil as a, sortBy as Q, uniq as X, flatten as Y, keys as R, findIndex as Z, isEmpty as g, isFunction as E, isString as $, isNumber as ee, isBoolean as te, isSymbol as se, cloneDeep as le } from "lodash";
import { jsx as n, jsxs as w, Fragment as B } from "react/jsx-runtime";
import { ToggleButtonGroup as re, ToggleButton as ne, Stack as _, IconButton as C, Dialog as ce, DialogContent as oe, DialogActions as de, Button as G } from "@mui/material";
import { DataGrid as ie } from "@mui/x-data-grid";
import ae, { Color as me } from "@rc-component/color-picker";
const qe = ({
  options: t,
  onChange: e,
  label: s,
  selectedOption: l,
  disabled: c,
  displayProp: o,
  valueProp: u
}) => {
  const m = H(
    (r) => {
      if (!x.isNil(r))
        return x.isNil(u) ? r : r[u];
    },
    [u]
  ), d = H(
    (r) => x.isNil(o) ? r : r[o],
    [o]
  ), O = S(() => m(l), [m, l]);
  return /* @__PURE__ */ n(
    re,
    {
      color: "primary",
      value: O,
      exclusive: !0,
      onChange: (r, p) => {
        e(p);
      },
      "aria-label": s ?? "Select an option",
      children: x.chain(t).map((r) => {
        const p = m(r), h = d(r);
        return { option: r, value: p, display: h };
      }).filter((r) => !x.isNil(r.value)).value().map(({ value: r, display: p }) => /* @__PURE__ */ n(
        ne,
        {
          value: r,
          disabled: c,
          children: p
        },
        r
      ))
    }
  );
};
var F = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, A = v.createContext && /* @__PURE__ */ v.createContext(F), ue = ["attr", "size", "title"];
function he(t, e) {
  if (t == null) return {};
  var s, l, c = pe(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (l = 0; l < o.length; l++) s = o[l], e.indexOf(s) === -1 && {}.propertyIsEnumerable.call(t, s) && (c[s] = t[s]);
  }
  return c;
}
function pe(t, e) {
  if (t == null) return {};
  var s = {};
  for (var l in t) if ({}.hasOwnProperty.call(t, l)) {
    if (e.indexOf(l) !== -1) continue;
    s[l] = t[l];
  }
  return s;
}
function z() {
  return z = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var s = arguments[e];
      for (var l in s) ({}).hasOwnProperty.call(s, l) && (t[l] = s[l]);
    }
    return t;
  }, z.apply(null, arguments);
}
function T(t, e) {
  var s = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    e && (l = l.filter(function(c) {
      return Object.getOwnPropertyDescriptor(t, c).enumerable;
    })), s.push.apply(s, l);
  }
  return s;
}
function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2 ? T(Object(s), !0).forEach(function(l) {
      be(t, l, s[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : T(Object(s)).forEach(function(l) {
      Object.defineProperty(t, l, Object.getOwnPropertyDescriptor(s, l));
    });
  }
  return t;
}
function be(t, e, s) {
  return (e = ve(e)) in t ? Object.defineProperty(t, e, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = s, t;
}
function ve(t) {
  var e = we(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function we(t, e) {
  if (typeof t != "object" || !t) return t;
  var s = t[Symbol.toPrimitive];
  if (s !== void 0) {
    var l = s.call(t, e);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function V(t) {
  return t && t.map((e, s) => /* @__PURE__ */ v.createElement(e.tag, M({
    key: s
  }, e.attr), V(e.child)));
}
function k(t) {
  return (e) => /* @__PURE__ */ v.createElement(ye, z({
    attr: M({}, t.attr)
  }, e), V(t.child));
}
function ye(t) {
  var e = (s) => {
    var l = t.attr, c = t.size, o = t.title, u = he(t, ue), m = c || s.size || "1em", d;
    return s.className && (d = s.className), t.className && (d = (d ? d + " " : "") + t.className), /* @__PURE__ */ v.createElement("svg", z({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, s.attr, l, u, {
      className: d,
      style: M(M({
        color: t.color || s.color
      }, s.style), t.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ v.createElement("title", null, o), t.children);
  };
  return A !== void 0 ? /* @__PURE__ */ v.createElement(A.Consumer, null, (s) => e(s)) : e(F);
}
function xe(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function Ce(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function Oe(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function Pe(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const Se = {
  border: "1px solid",
  borderColor: "primary.main"
}, Ue = ({ address: t }) => {
  const e = (s) => {
    const l = encodeURIComponent(s), c = `comgooglemaps://?q=${l}`;
    window.location.href = c, setTimeout(() => {
      const o = `https://www.google.com/maps/search/?api=1&query=${l}`;
      window.open(o, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ w(_, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    /* @__PURE__ */ n(
      C,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: Se,
        children: /* @__PURE__ */ n(xe, {})
      }
    )
  ] });
}, ze = () => {
  const t = S(() => {
    const u = [
      {
        fn: () => {
          const d = navigator.userAgentData;
          return a(d) ? !1 : d.mobile;
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
    return J(u, (d) => {
      m += d.fn() ? d.confidence : 0;
    }), m >= 100;
  }, []), e = S(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, Ke = ({ phone: t }) => {
  const { isMobile: e } = ze(), s = (o) => window.open(`tel:${o}`), l = (o) => window.open(`sms:${o}`), c = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ w(_, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    e && /* @__PURE__ */ n(
      C,
      {
        title: "Call",
        size: "small",
        onClick: () => s(t),
        sx: c,
        children: /* @__PURE__ */ n(Ce, {})
      }
    ),
    e && /* @__PURE__ */ n(
      C,
      {
        title: "Message",
        size: "small",
        onClick: () => l(t),
        sx: c,
        children: /* @__PURE__ */ n(Oe, {})
      }
    )
  ] });
}, Je = ({ email: t }) => {
  const e = (l) => window.open(`mailto:${l}`);
  return /* @__PURE__ */ w(_, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    /* @__PURE__ */ n(
      C,
      {
        title: "Email",
        size: "small",
        onClick: () => e(t),
        sx: {
          border: "1px solid",
          borderColor: "primary.main"
        },
        children: /* @__PURE__ */ n(Pe, {})
      }
    )
  ] });
};
function Me({
  data: t,
  configuration: e,
  events: s
}) {
  var o, u, m;
  const l = S(
    () => Q([
      ...X(Y(t.map((i) => R(i).filter((r) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(r));
      })))),
      ...R(e == null ? void 0 : e.columns.actions)
    ], (i) => Z(e == null ? void 0 : e.columns.order, (r) => r === i)).map((i) => {
      let r = {};
      if (!a(e == null ? void 0 : e.columns.headers) && !a(e.columns.headers[i]) && (r.headerName = e.columns.headers[i]), !a(e == null ? void 0 : e.columns.dimensions) && !a(e.columns.dimensions[i])) {
        const h = e.columns.dimensions[i];
        g(h) || (r = {
          ...r,
          ...h
        });
      }
      if (!a(e == null ? void 0 : e.columns.types) && !a(e.columns.types[i]) && (r.type = e.columns.types[i]), !a(e == null ? void 0 : e.columns.actions) && !a(e.columns.actions[i]) && (r.type = "actions", r.getActions = e.columns.actions[i]), !a(e == null ? void 0 : e.columns.customCells) && !a(e.columns.customCells[i])) {
        const h = e.columns.customCells[i];
        r.type = "custom", r.renderCell = (b) => {
          let y = /* @__PURE__ */ n(B, {});
          return E(h) && $(b.value) && (y = h(b.value, b.row)), y;
        };
      }
      if (!a(e == null ? void 0 : e.columns.customCellClassNames) && !a(e.columns.customCellClassNames[i])) {
        const h = e.columns.customCellClassNames[i];
        r.cellClassName = (b) => {
          let y = "";
          return E(h) && (y = h(b)), y;
        };
      }
      return !a(e == null ? void 0 : e.columns.formats) && !a(e.columns.formats[i]) && (r.valueFormatter = e.columns.formats[i]), {
        field: i,
        ...r
      };
    }),
    [e, t]
  ), c = (d) => {
    s != null && s.onRowSelection && s.onRowSelection(d);
  };
  return /* @__PURE__ */ n(
    ie,
    {
      getRowHeight: e == null ? void 0 : e.getRowHeight,
      autoPageSize: !0,
      disableColumnFilter: !0,
      checkboxSelection: (o = e == null ? void 0 : e.selection) == null ? void 0 : o.multiSelect,
      disableMultipleRowSelection: !((u = e == null ? void 0 : e.selection) != null && u.multiSelect),
      isRowSelectable: () => {
        var d;
        return !((d = e == null ? void 0 : e.selection) != null && d.disabled);
      },
      columns: l,
      rows: t,
      rowSelectionModel: (m = e == null ? void 0 : e.selection) == null ? void 0 : m.model,
      onRowSelectionModelChange: c,
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
const _e = "_addableGridList_fpq0x_1", ke = {
  addableGridList: _e
}, Qe = ({
  data: t,
  addItemDialog: e,
  configuration: s,
  events: l
}) => /* @__PURE__ */ w("div", { className: ke.addableGridList, children: [
  /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    Me,
    {
      data: t,
      configuration: s,
      events: l
    }
  ) }) }),
  e
] }), De = "_colorPickerButton_142zf_1", je = {
  colorPickerButton: De
}, Ee = () => ({
  randomHex: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}), Be = (t) => $(t) || ee(t) || typeof t == "bigint" || te(t) || a(t) || se(t);
var P = /* @__PURE__ */ ((t) => (t.SET = "set", t.UPDATE = "update", t.DRAFT = "draft", t))(P || {});
const D = {
  set: (t, e) => e.value,
  update: (t, e) => e.updateFn(t),
  draft: (t, e) => K(t, e.draftFn)
}, He = (t, e) => {
  switch (e.type) {
    case "set":
      return D[e.type](t, e);
    case "update":
      return D[e.type](t, e);
    case "draft":
      return D[e.type](t, e);
  }
}, Re = () => (t, e) => He(t, e), L = (t) => W(Re(), Be(t) ? t : le(t)), Xe = ({
  color: t,
  onChange: e,
  configuration: s
}) => {
  const { randomHex: l } = Ee(), [c, o] = L(t || new me(l())), [u, m] = L(!1), d = a(s == null ? void 0 : s.size) ? 35 : s.size, O = a(s == null ? void 0 : s.padding) ? 5 : s.padding, i = a(s == null ? void 0 : s.borderRadius) ? 5 : s.borderRadius, r = a(s == null ? void 0 : s.allowDialog) ? !0 : s.allowDialog, p = () => {
    m({
      type: P.SET,
      value: !0
    });
  }, h = () => {
    m({
      type: P.SET,
      value: !1
    });
  };
  return /* @__PURE__ */ w(B, { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: je.colorPickerButton,
        style: {
          width: `${d}px`,
          height: `${d}px`,
          borderRadius: `${i}px`,
          padding: `${O}px`,
          cursor: r ? "pointer" : "default"
        },
        onClick: p,
        children: /* @__PURE__ */ n("div", { style: {
          backgroundColor: c == null ? void 0 : c.toHexString(),
          borderRadius: `${i}px`
        } })
      }
    ),
    r && /* @__PURE__ */ w(ce, { open: u, onClose: h, children: [
      /* @__PURE__ */ n(oe, { children: /* @__PURE__ */ n(
        ae,
        {
          defaultValue: c,
          onChange: (b) => {
            o({
              type: P.SET,
              value: b
            }), E(e) && e(b);
          }
        }
      ) }),
      /* @__PURE__ */ n(de, { children: /* @__PURE__ */ n(G, { onClick: h, children: "Close" }) })
    ] })
  ] });
}, Ae = "_overlay_1bmet_1", Te = "_container_1bmet_13", Le = "_center_1bmet_21", j = {
  overlay: Ae,
  container: Te,
  center: Le
}, Ye = ({
  children: t,
  className: e
}) => {
  const s = [j.overlay, e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: s, children: /* @__PURE__ */ n("div", { className: j.container, children: /* @__PURE__ */ n("div", { className: j.center, children: t }) }) });
}, Ze = ({
  children: t,
  direction: e = "column",
  minWidth: s = 0,
  spacing: l = 1.5,
  onDragOver: c,
  onDragEnter: o,
  onDragLeave: u,
  onDrop: m
}) => /* @__PURE__ */ n(
  _,
  {
    minWidth: s,
    sx: {
      marginTop: "6px"
    },
    spacing: l,
    direction: e,
    flexGrow: 1,
    onDragOver: c,
    onDragEnter: o,
    onDragLeave: u,
    onDrop: m,
    children: t
  }
), N = {
  "mobile-button": "_mobile-button_12ue1_1",
  "desktop-button": "_desktop-button_12ue1_5"
}, ge = ({
  title: t,
  icon: e,
  onClick: s
}) => /* @__PURE__ */ w(B, { children: [
  /* @__PURE__ */ n("div", { className: N["desktop-button"], children: /* @__PURE__ */ n(
    G,
    {
      title: t,
      size: "small",
      onClick: s,
      startIcon: e,
      children: t
    }
  ) }),
  /* @__PURE__ */ n("div", { className: N["mobile-button"], children: /* @__PURE__ */ n(
    C,
    {
      title: t,
      size: "small",
      onClick: s,
      children: e
    }
  ) })
] }), f = () => {
  const { innerWidth: t, innerHeight: e } = window;
  return {
    width: t,
    height: e
  };
}, et = () => {
  const [t, e] = q(f());
  return U(() => {
    const s = () => {
      e(f());
    };
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []), t;
}, tt = I({
  palette: {
    mode: "light"
  }
}), st = I({
  palette: {
    mode: "dark"
  }
});
export {
  P as ActionType,
  Ue as ActiveAddress,
  Je as ActiveEmail,
  Ke as ActivePhone,
  Qe as AddableGridList,
  qe as ButtonSelect,
  Xe as ColorPickerButton,
  Ze as FieldContainer,
  Me as GridList,
  Ye as Overlay,
  ge as ResponsiveButton,
  st as darkTheme,
  tt as lightTheme,
  Ee as useColor,
  ze as useDevice,
  L as useImducer,
  et as useWindowDimensions
};
//# sourceMappingURL=index.js.map
