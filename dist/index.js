import { createTheme as L } from "@mui/material/styles";
import v, { useCallback as B, useMemo as P, useReducer as G } from "react";
import { produce as F } from "immer";
import x, { forEach as V, isNil as i, sortBy as W, uniq as q, flatten as U, keys as H, findIndex as K, isEmpty as J, isFunction as E, isString as N, isNumber as Q, isBoolean as X, isSymbol as Y, cloneDeep as Z } from "lodash";
import { jsx as n, jsxs as y, Fragment as I } from "react/jsx-runtime";
import { ToggleButtonGroup as g, ToggleButton as ee, Stack as k, IconButton as S, Dialog as te, DialogContent as le, DialogActions as re, Button as se } from "@mui/material";
import { DataGrid as ne } from "@mui/x-data-grid";
import ce, { Color as oe } from "@rc-component/color-picker";
const Ge = ({
  options: t,
  onChange: e,
  label: l,
  selectedOption: r,
  disabled: c,
  displayProp: o,
  valueProp: h
}) => {
  const m = B(
    (s) => {
      if (!x.isNil(s))
        return x.isNil(h) ? s : s[h];
    },
    [h]
  ), d = B(
    (s) => x.isNil(o) ? s : s[o],
    [o]
  ), C = P(() => m(r), [m, r]);
  return /* @__PURE__ */ n(
    g,
    {
      color: "primary",
      value: C,
      exclusive: !0,
      onChange: (s, p) => {
        e(p);
      },
      "aria-label": l ?? "Select an option",
      children: x.chain(t).map((s) => {
        const p = m(s), u = d(s);
        return { option: s, value: p, display: u };
      }).filter((s) => !x.isNil(s.value)).value().map(({ value: s, display: p }) => /* @__PURE__ */ n(
        ee,
        {
          value: s,
          disabled: c,
          children: p
        },
        s
      ))
    }
  );
};
var $ = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, A = v.createContext && /* @__PURE__ */ v.createContext($), de = ["attr", "size", "title"];
function ae(t, e) {
  if (t == null) return {};
  var l, r, c = ie(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (r = 0; r < o.length; r++) l = o[r], e.indexOf(l) === -1 && {}.propertyIsEnumerable.call(t, l) && (c[l] = t[l]);
  }
  return c;
}
function ie(t, e) {
  if (t == null) return {};
  var l = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (e.indexOf(r) !== -1) continue;
    l[r] = t[r];
  }
  return l;
}
function M() {
  return M = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var l = arguments[e];
      for (var r in l) ({}).hasOwnProperty.call(l, r) && (t[r] = l[r]);
    }
    return t;
  }, M.apply(null, arguments);
}
function R(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(c) {
      return Object.getOwnPropertyDescriptor(t, c).enumerable;
    })), l.push.apply(l, r);
  }
  return l;
}
function z(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? R(Object(l), !0).forEach(function(r) {
      me(t, r, l[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : R(Object(l)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(l, r));
    });
  }
  return t;
}
function me(t, e, l) {
  return (e = he(e)) in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function he(t) {
  var e = ue(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ue(t, e) {
  if (typeof t != "object" || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var r = l.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function f(t) {
  return t && t.map((e, l) => /* @__PURE__ */ v.createElement(e.tag, z({
    key: l
  }, e.attr), f(e.child)));
}
function D(t) {
  return (e) => /* @__PURE__ */ v.createElement(pe, M({
    attr: z({}, t.attr)
  }, e), f(t.child));
}
function pe(t) {
  var e = (l) => {
    var r = t.attr, c = t.size, o = t.title, h = ae(t, de), m = c || l.size || "1em", d;
    return l.className && (d = l.className), t.className && (d = (d ? d + " " : "") + t.className), /* @__PURE__ */ v.createElement("svg", M({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, r, h, {
      className: d,
      style: z(z({
        color: t.color || l.color
      }, l.style), t.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ v.createElement("title", null, o), t.children);
  };
  return A !== void 0 ? /* @__PURE__ */ v.createElement(A.Consumer, null, (l) => e(l)) : e($);
}
function be(t) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function ve(t) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function ye(t) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function we(t) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const xe = {
  border: "1px solid",
  borderColor: "primary.main"
}, Fe = ({ address: t }) => {
  const e = (l) => {
    const r = encodeURIComponent(l), c = `comgooglemaps://?q=${r}`;
    window.location.href = c, setTimeout(() => {
      const o = `https://www.google.com/maps/search/?api=1&query=${r}`;
      window.open(o, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ y(k, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    /* @__PURE__ */ n(
      S,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: xe,
        children: /* @__PURE__ */ n(be, {})
      }
    )
  ] });
}, Ce = () => {
  const t = P(() => {
    const h = [
      {
        fn: () => {
          const d = navigator.userAgentData;
          return i(d) ? !1 : d.mobile;
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
    return V(h, (d) => {
      m += d.fn() ? d.confidence : 0;
    }), m >= 100;
  }, []), e = P(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, Ve = ({ phone: t }) => {
  const { isMobile: e } = Ce(), l = (o) => window.open(`tel:${o}`), r = (o) => window.open(`sms:${o}`), c = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ y(k, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    e && /* @__PURE__ */ n(
      S,
      {
        title: "Call",
        size: "small",
        onClick: () => l(t),
        sx: c,
        children: /* @__PURE__ */ n(ve, {})
      }
    ),
    e && /* @__PURE__ */ n(
      S,
      {
        title: "Message",
        size: "small",
        onClick: () => r(t),
        sx: c,
        children: /* @__PURE__ */ n(ye, {})
      }
    )
  ] });
}, We = ({ email: t }) => {
  const e = (r) => window.open(`mailto:${r}`);
  return /* @__PURE__ */ y(k, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    /* @__PURE__ */ n(
      S,
      {
        title: "Email",
        size: "small",
        onClick: () => e(t),
        sx: {
          border: "1px solid",
          borderColor: "primary.main"
        },
        children: /* @__PURE__ */ n(we, {})
      }
    )
  ] });
};
function Oe({
  data: t,
  configuration: e,
  events: l
}) {
  var o, h, m;
  const r = P(
    () => W([
      ...q(U(t.map((a) => H(a).filter((s) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(s));
      })))),
      ...H(e == null ? void 0 : e.columns.actions)
    ], (a) => K(e == null ? void 0 : e.columns.order, (s) => s === a)).map((a) => {
      let s = {};
      if (!i(e == null ? void 0 : e.columns.headers) && !i(e.columns.headers[a]) && (s.headerName = e.columns.headers[a]), !i(e == null ? void 0 : e.columns.dimensions) && !i(e.columns.dimensions[a])) {
        const u = e.columns.dimensions[a];
        J(u) || (s = {
          ...s,
          ...u
        });
      }
      if (!i(e == null ? void 0 : e.columns.types) && !i(e.columns.types[a]) && (s.type = e.columns.types[a]), !i(e == null ? void 0 : e.columns.actions) && !i(e.columns.actions[a]) && (s.type = "actions", s.getActions = e.columns.actions[a]), !i(e == null ? void 0 : e.columns.customCells) && !i(e.columns.customCells[a])) {
        const u = e.columns.customCells[a];
        s.type = "custom", s.renderCell = (b) => {
          let w = /* @__PURE__ */ n(I, {});
          return E(u) && N(b.value) && (w = u(b.value, b.row)), w;
        };
      }
      if (!i(e == null ? void 0 : e.columns.customCellClassNames) && !i(e.columns.customCellClassNames[a])) {
        const u = e.columns.customCellClassNames[a];
        s.cellClassName = (b) => {
          let w = "";
          return E(u) && (w = u(b)), w;
        };
      }
      return !i(e == null ? void 0 : e.columns.formats) && !i(e.columns.formats[a]) && (s.valueFormatter = e.columns.formats[a]), {
        field: a,
        ...s
      };
    }),
    [e, t]
  ), c = (d) => {
    l != null && l.onRowSelection && l.onRowSelection(d);
  };
  return /* @__PURE__ */ n(
    ne,
    {
      getRowHeight: e == null ? void 0 : e.getRowHeight,
      autoPageSize: !0,
      disableColumnFilter: !0,
      checkboxSelection: (o = e == null ? void 0 : e.selection) == null ? void 0 : o.multiSelect,
      disableMultipleRowSelection: !((h = e == null ? void 0 : e.selection) != null && h.multiSelect),
      isRowSelectable: () => {
        var d;
        return !((d = e == null ? void 0 : e.selection) != null && d.disabled);
      },
      columns: r,
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
const Pe = "_addableGridList_fpq0x_1", Se = {
  addableGridList: Pe
}, qe = ({
  data: t,
  addItemDialog: e,
  configuration: l,
  events: r
}) => /* @__PURE__ */ y("div", { className: Se.addableGridList, children: [
  /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    Oe,
    {
      data: t,
      configuration: l,
      events: r
    }
  ) }) }),
  e
] }), Me = "_colorPickerButton_142zf_1", ze = {
  colorPickerButton: Me
}, ke = () => ({
  randomHex: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}), De = (t) => N(t) || Q(t) || typeof t == "bigint" || X(t) || i(t) || Y(t);
var O = /* @__PURE__ */ ((t) => (t.SET = "set", t.UPDATE = "update", t.DRAFT = "draft", t))(O || {});
const _ = {
  set: (t, e) => e.value,
  update: (t, e) => e.updateFn(t),
  draft: (t, e) => F(t, e.draftFn)
}, _e = (t, e) => {
  switch (e.type) {
    case "set":
      return _[e.type](t, e);
    case "update":
      return _[e.type](t, e);
    case "draft":
      return _[e.type](t, e);
  }
}, je = () => (t, e) => _e(t, e), T = (t) => G(je(), De(t) ? t : Z(t)), Ue = ({
  color: t,
  onChange: e,
  configuration: l
}) => {
  const { randomHex: r } = ke(), [c, o] = T(t || new oe(r())), [h, m] = T(!1), d = i(l == null ? void 0 : l.size) ? 35 : l.size, C = i(l == null ? void 0 : l.padding) ? 5 : l.padding, a = i(l == null ? void 0 : l.borderRadius) ? 5 : l.borderRadius, s = i(l == null ? void 0 : l.allowDialog) ? !0 : l.allowDialog, p = () => {
    m({
      type: O.SET,
      value: !0
    });
  }, u = () => {
    m({
      type: O.SET,
      value: !1
    });
  };
  return /* @__PURE__ */ y(I, { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: ze.colorPickerButton,
        style: {
          width: `${d}px`,
          height: `${d}px`,
          borderRadius: `${a}px`,
          padding: `${C}px`,
          cursor: s ? "pointer" : "default"
        },
        onClick: p,
        children: /* @__PURE__ */ n("div", { style: {
          backgroundColor: c == null ? void 0 : c.toHexString(),
          borderRadius: `${a}px`
        } })
      }
    ),
    s && /* @__PURE__ */ y(te, { open: h, onClose: u, children: [
      /* @__PURE__ */ n(le, { children: /* @__PURE__ */ n(
        ce,
        {
          defaultValue: c,
          onChange: (b) => {
            o({
              type: O.SET,
              value: b
            }), E(e) && e(b);
          }
        }
      ) }),
      /* @__PURE__ */ n(re, { children: /* @__PURE__ */ n(se, { onClick: u, children: "Close" }) })
    ] })
  ] });
}, Ee = "_overlay_1bmet_1", Be = "_container_1bmet_13", He = "_center_1bmet_21", j = {
  overlay: Ee,
  container: Be,
  center: He
}, Ke = ({
  children: t,
  className: e
}) => {
  const l = [j.overlay, e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: l, children: /* @__PURE__ */ n("div", { className: j.container, children: /* @__PURE__ */ n("div", { className: j.center, children: t }) }) });
}, Je = ({
  children: t,
  direction: e = "column",
  minWidth: l = 0,
  spacing: r = 1.5,
  onDragOver: c,
  onDragEnter: o,
  onDragLeave: h,
  onDrop: m
}) => /* @__PURE__ */ n(
  k,
  {
    minWidth: l,
    sx: {
      marginTop: "6px"
    },
    spacing: r,
    direction: e,
    flexGrow: 1,
    onDragOver: c,
    onDragEnter: o,
    onDragLeave: h,
    onDrop: m,
    children: t
  }
), Qe = L({
  palette: {
    mode: "light"
  }
}), Xe = L({
  palette: {
    mode: "dark"
  }
});
export {
  O as ActionType,
  Fe as ActiveAddress,
  We as ActiveEmail,
  Ve as ActivePhone,
  qe as AddableGridList,
  Ge as ButtonSelect,
  Ue as ColorPickerButton,
  Je as FieldContainer,
  Oe as GridList,
  Ke as Overlay,
  Xe as darkTheme,
  Qe as lightTheme,
  ke as useColor,
  Ce as useDevice,
  T as useImducer
};
//# sourceMappingURL=index.js.map
