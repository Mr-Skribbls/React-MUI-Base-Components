import { createTheme as L } from "@mui/material/styles";
import v, { useCallback as H, useMemo as S, useReducer as V } from "react";
import { produce as W } from "immer";
import x, { forEach as q, isNil as i, sortBy as U, uniq as K, flatten as J, keys as A, findIndex as Q, isEmpty as X, isFunction as B, isString as $, isNumber as Y, isBoolean as Z, isSymbol as g, cloneDeep as ee } from "lodash";
import { jsx as n, jsxs as y, Fragment as E } from "react/jsx-runtime";
import { ToggleButtonGroup as te, ToggleButton as le, Stack as _, IconButton as C, Dialog as se, DialogContent as re, DialogActions as ne, Button as f } from "@mui/material";
import { DataGrid as ce } from "@mui/x-data-grid";
import oe, { Color as de } from "@rc-component/color-picker";
const Fe = ({
  options: t,
  onChange: e,
  label: l,
  selectedOption: s,
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
  ), O = S(() => m(s), [m, s]);
  return /* @__PURE__ */ n(
    te,
    {
      color: "primary",
      value: O,
      exclusive: !0,
      onChange: (r, p) => {
        e(p);
      },
      "aria-label": l ?? "Select an option",
      children: x.chain(t).map((r) => {
        const p = m(r), h = d(r);
        return { option: r, value: p, display: h };
      }).filter((r) => !x.isNil(r.value)).value().map(({ value: r, display: p }) => /* @__PURE__ */ n(
        le,
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
var G = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, R = v.createContext && /* @__PURE__ */ v.createContext(G), ae = ["attr", "size", "title"];
function ie(t, e) {
  if (t == null) return {};
  var l, s, c = me(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++) l = o[s], e.indexOf(l) === -1 && {}.propertyIsEnumerable.call(t, l) && (c[l] = t[l]);
  }
  return c;
}
function me(t, e) {
  if (t == null) return {};
  var l = {};
  for (var s in t) if ({}.hasOwnProperty.call(t, s)) {
    if (e.indexOf(s) !== -1) continue;
    l[s] = t[s];
  }
  return l;
}
function M() {
  return M = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var l = arguments[e];
      for (var s in l) ({}).hasOwnProperty.call(l, s) && (t[s] = l[s]);
    }
    return t;
  }, M.apply(null, arguments);
}
function T(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(c) {
      return Object.getOwnPropertyDescriptor(t, c).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function z(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? T(Object(l), !0).forEach(function(s) {
      ue(t, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : T(Object(l)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return t;
}
function ue(t, e, l) {
  return (e = he(e)) in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function he(t) {
  var e = pe(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function pe(t, e) {
  if (typeof t != "object" || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(t, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function F(t) {
  return t && t.map((e, l) => /* @__PURE__ */ v.createElement(e.tag, z({
    key: l
  }, e.attr), F(e.child)));
}
function k(t) {
  return (e) => /* @__PURE__ */ v.createElement(be, M({
    attr: z({}, t.attr)
  }, e), F(t.child));
}
function be(t) {
  var e = (l) => {
    var s = t.attr, c = t.size, o = t.title, u = ie(t, ae), m = c || l.size || "1em", d;
    return l.className && (d = l.className), t.className && (d = (d ? d + " " : "") + t.className), /* @__PURE__ */ v.createElement("svg", M({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, s, u, {
      className: d,
      style: z(z({
        color: t.color || l.color
      }, l.style), t.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ v.createElement("title", null, o), t.children);
  };
  return R !== void 0 ? /* @__PURE__ */ v.createElement(R.Consumer, null, (l) => e(l)) : e(G);
}
function ve(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function ye(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function we(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function xe(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const Ce = {
  border: "1px solid",
  borderColor: "primary.main"
}, Ve = ({ address: t }) => {
  const e = (l) => {
    const s = encodeURIComponent(l), c = `comgooglemaps://?q=${s}`;
    window.location.href = c, setTimeout(() => {
      const o = `https://www.google.com/maps/search/?api=1&query=${s}`;
      window.open(o, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ y(_, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    /* @__PURE__ */ n(
      C,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: Ce,
        children: /* @__PURE__ */ n(ve, {})
      }
    )
  ] });
}, Oe = () => {
  const t = S(() => {
    const u = [
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
    return q(u, (d) => {
      m += d.fn() ? d.confidence : 0;
    }), m >= 100;
  }, []), e = S(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, We = ({ phone: t }) => {
  const { isMobile: e } = Oe(), l = (o) => window.open(`tel:${o}`), s = (o) => window.open(`sms:${o}`), c = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ y(_, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    e && /* @__PURE__ */ n(
      C,
      {
        title: "Call",
        size: "small",
        onClick: () => l(t),
        sx: c,
        children: /* @__PURE__ */ n(ye, {})
      }
    ),
    e && /* @__PURE__ */ n(
      C,
      {
        title: "Message",
        size: "small",
        onClick: () => s(t),
        sx: c,
        children: /* @__PURE__ */ n(we, {})
      }
    )
  ] });
}, qe = ({ email: t }) => {
  const e = (s) => window.open(`mailto:${s}`);
  return /* @__PURE__ */ y(_, { direction: "row", alignItems: "center", gap: 1, children: [
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
        children: /* @__PURE__ */ n(xe, {})
      }
    )
  ] });
};
function Pe({
  data: t,
  configuration: e,
  events: l
}) {
  var o, u, m;
  const s = S(
    () => U([
      ...K(J(t.map((a) => A(a).filter((r) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(r));
      })))),
      ...A(e == null ? void 0 : e.columns.actions)
    ], (a) => Q(e == null ? void 0 : e.columns.order, (r) => r === a)).map((a) => {
      let r = {};
      if (!i(e == null ? void 0 : e.columns.headers) && !i(e.columns.headers[a]) && (r.headerName = e.columns.headers[a]), !i(e == null ? void 0 : e.columns.dimensions) && !i(e.columns.dimensions[a])) {
        const h = e.columns.dimensions[a];
        X(h) || (r = {
          ...r,
          ...h
        });
      }
      if (!i(e == null ? void 0 : e.columns.types) && !i(e.columns.types[a]) && (r.type = e.columns.types[a]), !i(e == null ? void 0 : e.columns.actions) && !i(e.columns.actions[a]) && (r.type = "actions", r.getActions = e.columns.actions[a]), !i(e == null ? void 0 : e.columns.customCells) && !i(e.columns.customCells[a])) {
        const h = e.columns.customCells[a];
        r.type = "custom", r.renderCell = (b) => {
          let w = /* @__PURE__ */ n(E, {});
          return B(h) && $(b.value) && (w = h(b.value, b.row)), w;
        };
      }
      if (!i(e == null ? void 0 : e.columns.customCellClassNames) && !i(e.columns.customCellClassNames[a])) {
        const h = e.columns.customCellClassNames[a];
        r.cellClassName = (b) => {
          let w = "";
          return B(h) && (w = h(b)), w;
        };
      }
      return !i(e == null ? void 0 : e.columns.formats) && !i(e.columns.formats[a]) && (r.valueFormatter = e.columns.formats[a]), {
        field: a,
        ...r
      };
    }),
    [e, t]
  ), c = (d) => {
    l != null && l.onRowSelection && l.onRowSelection(d);
  };
  return /* @__PURE__ */ n(
    ce,
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
      columns: s,
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
const Se = "_addableGridList_fpq0x_1", Me = {
  addableGridList: Se
}, Ue = ({
  data: t,
  addItemDialog: e,
  configuration: l,
  events: s
}) => /* @__PURE__ */ y("div", { className: Me.addableGridList, children: [
  /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    Pe,
    {
      data: t,
      configuration: l,
      events: s
    }
  ) }) }),
  e
] }), ze = "_colorPickerButton_142zf_1", _e = {
  colorPickerButton: ze
}, ke = () => ({
  randomHex: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}), De = (t) => $(t) || Y(t) || typeof t == "bigint" || Z(t) || i(t) || g(t);
var P = /* @__PURE__ */ ((t) => (t.SET = "set", t.UPDATE = "update", t.DRAFT = "draft", t))(P || {});
const D = {
  set: (t, e) => e.value,
  update: (t, e) => e.updateFn(t),
  draft: (t, e) => W(t, e.draftFn)
}, je = (t, e) => {
  switch (e.type) {
    case "set":
      return D[e.type](t, e);
    case "update":
      return D[e.type](t, e);
    case "draft":
      return D[e.type](t, e);
  }
}, Be = () => (t, e) => je(t, e), N = (t) => V(Be(), De(t) ? t : ee(t)), Ke = ({
  color: t,
  onChange: e,
  configuration: l
}) => {
  const { randomHex: s } = ke(), [c, o] = N(t || new de(s())), [u, m] = N(!1), d = i(l == null ? void 0 : l.size) ? 35 : l.size, O = i(l == null ? void 0 : l.padding) ? 5 : l.padding, a = i(l == null ? void 0 : l.borderRadius) ? 5 : l.borderRadius, r = i(l == null ? void 0 : l.allowDialog) ? !0 : l.allowDialog, p = () => {
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
  return /* @__PURE__ */ y(E, { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: _e.colorPickerButton,
        style: {
          width: `${d}px`,
          height: `${d}px`,
          borderRadius: `${a}px`,
          padding: `${O}px`,
          cursor: r ? "pointer" : "default"
        },
        onClick: p,
        children: /* @__PURE__ */ n("div", { style: {
          backgroundColor: c == null ? void 0 : c.toHexString(),
          borderRadius: `${a}px`
        } })
      }
    ),
    r && /* @__PURE__ */ y(se, { open: u, onClose: h, children: [
      /* @__PURE__ */ n(re, { children: /* @__PURE__ */ n(
        oe,
        {
          defaultValue: c,
          onChange: (b) => {
            o({
              type: P.SET,
              value: b
            }), B(e) && e(b);
          }
        }
      ) }),
      /* @__PURE__ */ n(ne, { children: /* @__PURE__ */ n(f, { onClick: h, children: "Close" }) })
    ] })
  ] });
}, Ee = "_overlay_1bmet_1", He = "_container_1bmet_13", Ae = "_center_1bmet_21", j = {
  overlay: Ee,
  container: He,
  center: Ae
}, Je = ({
  children: t,
  className: e
}) => {
  const l = [j.overlay, e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: l, children: /* @__PURE__ */ n("div", { className: j.container, children: /* @__PURE__ */ n("div", { className: j.center, children: t }) }) });
}, Qe = ({
  children: t,
  direction: e = "column",
  minWidth: l = 0,
  spacing: s = 1.5,
  onDragOver: c,
  onDragEnter: o,
  onDragLeave: u,
  onDrop: m
}) => /* @__PURE__ */ n(
  _,
  {
    minWidth: l,
    sx: {
      marginTop: "6px"
    },
    spacing: s,
    direction: e,
    flexGrow: 1,
    onDragOver: c,
    onDragEnter: o,
    onDragLeave: u,
    onDrop: m,
    children: t
  }
), I = {
  "mobile-button": "_mobile-button_12ue1_1",
  "desktop-button": "_desktop-button_12ue1_5"
}, Xe = ({
  title: t,
  icon: e,
  onClick: l
}) => /* @__PURE__ */ y(E, { children: [
  /* @__PURE__ */ n("div", { className: I["desktop-button"], children: /* @__PURE__ */ n(
    f,
    {
      title: t,
      size: "small",
      onClick: l,
      startIcon: e,
      children: t
    }
  ) }),
  /* @__PURE__ */ n("div", { className: I["mobile-button"], children: /* @__PURE__ */ n(
    C,
    {
      title: t,
      size: "small",
      onClick: l,
      children: e
    }
  ) })
] }), Ye = L({
  palette: {
    mode: "light"
  }
}), Ze = L({
  palette: {
    mode: "dark"
  }
});
export {
  P as ActionType,
  Ve as ActiveAddress,
  qe as ActiveEmail,
  We as ActivePhone,
  Ue as AddableGridList,
  Fe as ButtonSelect,
  Ke as ColorPickerButton,
  Qe as FieldContainer,
  Pe as GridList,
  Je as Overlay,
  Xe as ResponsiveButton,
  Ze as darkTheme,
  Ye as lightTheme,
  ke as useColor,
  Oe as useDevice,
  N as useImducer
};
//# sourceMappingURL=index.js.map
