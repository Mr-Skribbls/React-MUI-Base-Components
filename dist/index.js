import { createTheme as L } from "@mui/material/styles";
import x, { useCallback as H, useMemo as M, useReducer as U, useState as K, useEffect as J } from "react";
import { produce as Q } from "immer";
import z, { forEach as X, isNil as h, sortBy as Y, uniq as Z, flatten as ee, keys as B, findIndex as te, isEmpty as le, isFunction as _, isString as G, isNumber as se, isBoolean as re, isSymbol as ne, cloneDeep as oe } from "lodash";
import { jsx as r, jsxs as b, Fragment as E } from "react/jsx-runtime";
import { ToggleButtonGroup as ce, ToggleButton as ae, Stack as y, IconButton as S, Dialog as ie, DialogContent as de, DialogActions as me, Button as I, Tabs as W, Tab as V, Box as g, Menu as he, MenuItem as ue } from "@mui/material";
import { DataGrid as pe } from "@mui/x-data-grid";
import be, { Color as ve } from "@rc-component/color-picker";
const et = ({
  options: t,
  onChange: e,
  label: l,
  selectedOption: s,
  disabled: a,
  displayProp: o,
  valueProp: c
}) => {
  const i = H(
    (n) => {
      if (!z.isNil(n))
        return z.isNil(c) ? n : n[c];
    },
    [c]
  ), d = H(
    (n) => z.isNil(o) ? n : n[o],
    [o]
  ), O = M(() => i(s), [i, s]);
  return /* @__PURE__ */ r(
    ce,
    {
      color: "primary",
      value: O,
      exclusive: !0,
      onChange: (n, p) => {
        e(p);
      },
      "aria-label": l ?? "Select an option",
      children: z.chain(t).map((n) => {
        const p = i(n), u = d(n);
        return { option: n, value: p, display: u };
      }).filter((n) => !z.isNil(n.value)).value().map(({ value: n, display: p }) => /* @__PURE__ */ r(
        ae,
        {
          value: n,
          disabled: a,
          children: p
        },
        n
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
}, $ = x.createContext && /* @__PURE__ */ x.createContext(F), we = ["attr", "size", "title"];
function ye(t, e) {
  if (t == null) return {};
  var l, s, a = xe(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++) l = o[s], e.indexOf(l) === -1 && {}.propertyIsEnumerable.call(t, l) && (a[l] = t[l]);
  }
  return a;
}
function xe(t, e) {
  if (t == null) return {};
  var l = {};
  for (var s in t) if ({}.hasOwnProperty.call(t, s)) {
    if (e.indexOf(s) !== -1) continue;
    l[s] = t[s];
  }
  return l;
}
function T() {
  return T = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var l = arguments[e];
      for (var s in l) ({}).hasOwnProperty.call(l, s) && (t[s] = l[s]);
    }
    return t;
  }, T.apply(null, arguments);
}
function A(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? A(Object(l), !0).forEach(function(s) {
      Ce(t, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : A(Object(l)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return t;
}
function Ce(t, e, l) {
  return (e = ze(e)) in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function ze(t) {
  var e = Se(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Se(t, e) {
  if (typeof t != "object" || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(t, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function q(t) {
  return t && t.map((e, l) => /* @__PURE__ */ x.createElement(e.tag, D({
    key: l
  }, e.attr), q(e.child)));
}
function k(t) {
  return (e) => /* @__PURE__ */ x.createElement(Pe, T({
    attr: D({}, t.attr)
  }, e), q(t.child));
}
function Pe(t) {
  var e = (l) => {
    var s = t.attr, a = t.size, o = t.title, c = ye(t, we), i = a || l.size || "1em", d;
    return l.className && (d = l.className), t.className && (d = (d ? d + " " : "") + t.className), /* @__PURE__ */ x.createElement("svg", T({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, s, c, {
      className: d,
      style: D(D({
        color: t.color || l.color
      }, l.style), t.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ x.createElement("title", null, o), t.children);
  };
  return $ !== void 0 ? /* @__PURE__ */ x.createElement($.Consumer, null, (l) => e(l)) : e(F);
}
function Oe(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function Me(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function _e(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function Te(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const De = {
  border: "1px solid",
  borderColor: "primary.main"
}, tt = ({ address: t }) => {
  const e = (l) => {
    const s = encodeURIComponent(l), a = `comgooglemaps://?q=${s}`;
    window.location.href = a, setTimeout(() => {
      const o = `https://www.google.com/maps/search/?api=1&query=${s}`;
      window.open(o, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ b(y, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ r("span", { children: t }),
    /* @__PURE__ */ r(
      S,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: De,
        children: /* @__PURE__ */ r(Oe, {})
      }
    )
  ] });
}, Ee = () => {
  const t = M(() => {
    const c = [
      {
        fn: () => {
          const d = navigator.userAgentData;
          return h(d) ? !1 : d.mobile;
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
    let i = 0;
    return X(c, (d) => {
      i += d.fn() ? d.confidence : 0;
    }), i >= 100;
  }, []), e = M(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, lt = ({ phone: t }) => {
  const { isMobile: e } = Ee(), l = (o) => window.open(`tel:${o}`), s = (o) => window.open(`sms:${o}`), a = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ b(y, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ r("span", { children: t }),
    e && /* @__PURE__ */ r(
      S,
      {
        title: "Call",
        size: "small",
        onClick: () => l(t),
        sx: a,
        children: /* @__PURE__ */ r(Me, {})
      }
    ),
    e && /* @__PURE__ */ r(
      S,
      {
        title: "Message",
        size: "small",
        onClick: () => s(t),
        sx: a,
        children: /* @__PURE__ */ r(_e, {})
      }
    )
  ] });
}, st = ({ email: t }) => {
  const e = (s) => window.open(`mailto:${s}`);
  return /* @__PURE__ */ b(y, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ r("span", { children: t }),
    /* @__PURE__ */ r(
      S,
      {
        title: "Email",
        size: "small",
        onClick: () => e(t),
        sx: {
          border: "1px solid",
          borderColor: "primary.main"
        },
        children: /* @__PURE__ */ r(Te, {})
      }
    )
  ] });
};
function ke({
  data: t,
  configuration: e,
  events: l
}) {
  var o, c, i;
  const s = M(
    () => Y([
      ...Z(ee(t.map((m) => B(m).filter((n) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(n));
      })))),
      ...B(e == null ? void 0 : e.columns.actions)
    ], (m) => te(e == null ? void 0 : e.columns.order, (n) => n === m)).map((m) => {
      let n = {};
      if (!h(e == null ? void 0 : e.columns.headers) && !h(e.columns.headers[m]) && (n.headerName = e.columns.headers[m]), !h(e == null ? void 0 : e.columns.dimensions) && !h(e.columns.dimensions[m])) {
        const u = e.columns.dimensions[m];
        le(u) || (n = {
          ...n,
          ...u
        });
      }
      if (!h(e == null ? void 0 : e.columns.types) && !h(e.columns.types[m]) && (n.type = e.columns.types[m]), !h(e == null ? void 0 : e.columns.actions) && !h(e.columns.actions[m]) && (n.type = "actions", n.getActions = e.columns.actions[m]), !h(e == null ? void 0 : e.columns.customCells) && !h(e.columns.customCells[m])) {
        const u = e.columns.customCells[m];
        n.type = "custom", n.renderCell = (v) => {
          let C = /* @__PURE__ */ r(E, {});
          return _(u) && G(v.value) && (C = u(v.value, v.row)), C;
        };
      }
      if (!h(e == null ? void 0 : e.columns.customCellClassNames) && !h(e.columns.customCellClassNames[m])) {
        const u = e.columns.customCellClassNames[m];
        n.cellClassName = (v) => {
          let C = "";
          return _(u) && (C = u(v)), C;
        };
      }
      return !h(e == null ? void 0 : e.columns.formats) && !h(e.columns.formats[m]) && (n.valueFormatter = e.columns.formats[m]), {
        field: m,
        ...n
      };
    }),
    [e, t]
  ), a = (d) => {
    l != null && l.onRowSelection && l.onRowSelection(d);
  };
  return /* @__PURE__ */ r(
    pe,
    {
      getRowHeight: e == null ? void 0 : e.getRowHeight,
      autoPageSize: !0,
      disableColumnFilter: !0,
      checkboxSelection: (o = e == null ? void 0 : e.selection) == null ? void 0 : o.multiSelect,
      disableMultipleRowSelection: !((c = e == null ? void 0 : e.selection) != null && c.multiSelect),
      isRowSelectable: () => {
        var d;
        return !((d = e == null ? void 0 : e.selection) != null && d.disabled);
      },
      columns: s,
      rows: t,
      rowSelectionModel: (i = e == null ? void 0 : e.selection) == null ? void 0 : i.model,
      onRowSelectionModelChange: a,
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
const je = "_addableGridList_fpq0x_1", fe = {
  addableGridList: je
}, rt = ({
  data: t,
  addItemDialog: e,
  configuration: l,
  events: s
}) => /* @__PURE__ */ b("div", { className: fe.addableGridList, children: [
  /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    ke,
    {
      data: t,
      configuration: l,
      events: s
    }
  ) }) }),
  e
] }), He = "_colorPickerButton_142zf_1", Be = {
  colorPickerButton: He
}, $e = () => ({
  randomHex: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}), Ae = (t) => G(t) || se(t) || typeof t == "bigint" || re(t) || h(t) || ne(t);
var w = /* @__PURE__ */ ((t) => (t.SET = "set", t.UPDATE = "update", t.DRAFT = "draft", t))(w || {});
const j = {
  set: (t, e) => e.value,
  update: (t, e) => e.updateFn(t),
  draft: (t, e) => Q(t, e.draftFn)
}, Ne = (t, e) => {
  switch (e.type) {
    case "set":
      return j[e.type](t, e);
    case "update":
      return j[e.type](t, e);
    case "draft":
      return j[e.type](t, e);
  }
}, Re = () => (t, e) => Ne(t, e), P = (t) => U(Re(), Ae(t) ? t : oe(t)), nt = ({
  color: t,
  onChange: e,
  configuration: l
}) => {
  const { randomHex: s } = $e(), [a, o] = P(t || new ve(s())), [c, i] = P(!1), d = h(l == null ? void 0 : l.size) ? 35 : l.size, O = h(l == null ? void 0 : l.padding) ? 5 : l.padding, m = h(l == null ? void 0 : l.borderRadius) ? 5 : l.borderRadius, n = h(l == null ? void 0 : l.allowDialog) ? !0 : l.allowDialog, p = () => {
    i({
      type: w.SET,
      value: !0
    });
  }, u = () => {
    i({
      type: w.SET,
      value: !1
    });
  };
  return /* @__PURE__ */ b(E, { children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: Be.colorPickerButton,
        style: {
          width: `${d}px`,
          height: `${d}px`,
          borderRadius: `${m}px`,
          padding: `${O}px`,
          cursor: n ? "pointer" : "default"
        },
        onClick: p,
        children: /* @__PURE__ */ r("div", { style: {
          backgroundColor: a == null ? void 0 : a.toHexString(),
          borderRadius: `${m}px`
        } })
      }
    ),
    n && /* @__PURE__ */ b(ie, { open: c, onClose: u, children: [
      /* @__PURE__ */ r(de, { children: /* @__PURE__ */ r(
        be,
        {
          defaultValue: a,
          onChange: (v) => {
            o({
              type: w.SET,
              value: v
            }), _(e) && e(v);
          }
        }
      ) }),
      /* @__PURE__ */ r(me, { children: /* @__PURE__ */ r(I, { onClick: u, children: "Close" }) })
    ] })
  ] });
}, Le = "_overlay_1bmet_1", Ge = "_container_1bmet_13", Ie = "_center_1bmet_21", f = {
  overlay: Le,
  container: Ge,
  center: Ie
}, ot = ({
  children: t,
  className: e
}) => {
  const l = [f.overlay, e].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("div", { className: l, children: /* @__PURE__ */ r("div", { className: f.container, children: /* @__PURE__ */ r("div", { className: f.center, children: t }) }) });
}, ct = ({
  children: t,
  direction: e = "column",
  minWidth: l = 0,
  spacing: s = 1.5,
  onDragOver: a,
  onDragEnter: o,
  onDragLeave: c,
  onDrop: i
}) => /* @__PURE__ */ r(
  y,
  {
    minWidth: l,
    sx: {
      marginTop: "6px"
    },
    spacing: s,
    direction: e,
    flexGrow: 1,
    onDragOver: a,
    onDragEnter: o,
    onDragLeave: c,
    onDrop: i,
    children: t
  }
), N = {
  "mobile-button": "_mobile-button_12ue1_1",
  "desktop-button": "_desktop-button_12ue1_5"
}, We = ({
  title: t,
  icon: e,
  onClick: l
}) => /* @__PURE__ */ b(E, { children: [
  /* @__PURE__ */ r("div", { className: N["desktop-button"], children: /* @__PURE__ */ r(
    I,
    {
      title: t,
      size: "small",
      onClick: l,
      startIcon: e,
      children: t
    }
  ) }),
  /* @__PURE__ */ r("div", { className: N["mobile-button"], children: /* @__PURE__ */ r(
    S,
    {
      title: t,
      size: "small",
      onClick: l,
      children: e
    }
  ) })
] }), Ve = (t) => ({
  id: `horizontal-tab-${t}`,
  "aria-controls": `horizontal-tabpanel-${t}`
}), at = ({
  tabs: t,
  ariaLabel: e
}) => {
  const [l, s] = P(0);
  return /* @__PURE__ */ b(y, { direction: "column", sx: {
    minHeight: 0,
    flexGrow: 1
  }, children: [
    /* @__PURE__ */ r(
      W,
      {
        orientation: "horizontal",
        variant: "scrollable",
        value: l,
        onChange: (o, c) => {
          s({
            value: c,
            type: w.SET
          });
        },
        "aria-label": e,
        children: t.map((o, c) => /* @__PURE__ */ r(
          V,
          {
            disabled: o.disabled,
            label: o.displayName,
            ...Ve(c)
          },
          c
        ))
      }
    ),
    /* @__PURE__ */ r(
      y,
      {
        sx: {
          flexGrow: 1,
          minWidth: "150px"
        },
        height: "100%",
        paddingTop: 1,
        paddingLeft: 1,
        overflow: "auto",
        children: t.map((o, c) => /* @__PURE__ */ r(
          g,
          {
            role: "tabpanel",
            hidden: l !== c,
            id: `horizontal-tabpanel-${c}`,
            "aria-labelledby": `horizontal-tab-${c}`,
            sx: {
              flexGrow: 1
            },
            children: o.content
          },
          c
        ))
      }
    )
  ] });
}, R = () => {
  const { innerWidth: t, innerHeight: e } = window;
  return {
    width: t,
    height: e
  };
}, ge = () => {
  const [t, e] = K(R());
  return J(() => {
    const l = () => {
      e(R());
    };
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, []), t;
}, Fe = (t) => ({
  id: `vertical-tab-${t}`,
  "aria-controls": `vertical-tabpanel-${t}`
}), it = ({
  tabs: t,
  ariaLabel: e
}) => {
  const [l, s] = P(0), { width: a } = ge(), o = (c, i) => {
    s({
      value: i,
      type: w.SET
    });
  };
  return /* @__PURE__ */ b(y, { direction: a < 600 ? "column" : "row", sx: { minHeight: 0 }, children: [
    /* @__PURE__ */ r(
      W,
      {
        orientation: a < 600 ? "horizontal" : "vertical",
        variant: "scrollable",
        value: l,
        onChange: o,
        "aria-label": e,
        children: t.map((c, i) => /* @__PURE__ */ r(V, { disabled: c.disabled, label: c.displayName, ...Fe(i) }, i))
      }
    ),
    /* @__PURE__ */ r(
      y,
      {
        sx: { flexGrow: 1, minWidth: "150px" },
        height: "100%",
        paddingTop: 1,
        paddingLeft: 1,
        overflow: "auto",
        children: t.map((c, i) => /* @__PURE__ */ r(
          g,
          {
            role: "tabpanel",
            hidden: l !== i,
            id: `vertical-tabpanel-${i}`,
            "aria-labelledby": `vertical-tab-${i}`,
            sx: { flexGrow: 1 },
            children: c.content
          },
          i
        ))
      }
    )
  ] });
}, dt = ({
  title: t,
  icon: e,
  menuItems: l
}) => {
  const [s, a] = P(null), o = !h(s), c = (d) => {
    a({
      type: w.SET,
      value: d.currentTarget
    });
  }, i = () => {
    a({
      type: w.SET,
      value: null
    });
  };
  return /* @__PURE__ */ b(E, { children: [
    /* @__PURE__ */ r(
      We,
      {
        title: t,
        icon: e,
        onClick: c
      }
    ),
    /* @__PURE__ */ r(
      he,
      {
        id: "basic-menu",
        anchorEl: s,
        open: o,
        onClose: i,
        slotProps: {
          list: {
            "aria-labelledby": "basic-button"
          }
        },
        children: l.map((d) => /* @__PURE__ */ r(ue, { onClick: () => {
          _(d.click) && d.click(), i();
        }, children: d.displayName }, d.displayName))
      }
    )
  ] });
}, mt = L({
  palette: {
    mode: "light"
  }
}), ht = L({
  palette: {
    mode: "dark"
  }
});
export {
  w as ActionType,
  tt as ActiveAddress,
  st as ActiveEmail,
  lt as ActivePhone,
  rt as AddableGridList,
  et as ButtonSelect,
  nt as ColorPickerButton,
  ct as FieldContainer,
  ke as GridList,
  at as HorizontalTabDisplay,
  dt as IconMenu,
  ot as Overlay,
  We as ResponsiveButton,
  it as VerticalTabDisplay,
  ht as darkTheme,
  mt as lightTheme,
  $e as useColor,
  Ee as useDevice,
  P as useImducer,
  ge as useWindowDimensions
};
//# sourceMappingURL=index.js.map
