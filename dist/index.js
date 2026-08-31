import { createTheme as N } from "@mui/material/styles";
import y, { useCallback as B, useMemo as O, useReducer as U, useState as K, useEffect as J } from "react";
import { produce as Q } from "immer";
import z, { forEach as X, isNil as h, sortBy as Y, uniq as Z, flatten as ee, keys as $, findIndex as te, isEmpty as le, isFunction as H, isString as G, isNumber as re, isBoolean as se, isSymbol as ne, cloneDeep as oe } from "lodash";
import { jsx as s, jsxs as b, Fragment as f } from "react/jsx-runtime";
import { ToggleButtonGroup as ce, ToggleButton as ae, Stack as w, IconButton as S, Dialog as de, DialogContent as ie, DialogActions as me, Button as I, Tabs as W, Tab as V, Box as F } from "@mui/material";
import { DataGrid as he } from "@mui/x-data-grid";
import ue, { Color as pe } from "@rc-component/color-picker";
const Xe = ({
  options: t,
  onChange: e,
  label: l,
  selectedOption: r,
  disabled: a,
  displayProp: o,
  valueProp: c
}) => {
  const d = B(
    (n) => {
      if (!z.isNil(n))
        return z.isNil(c) ? n : n[c];
    },
    [c]
  ), i = B(
    (n) => z.isNil(o) ? n : n[o],
    [o]
  ), P = O(() => d(r), [d, r]);
  return /* @__PURE__ */ s(
    ce,
    {
      color: "primary",
      value: P,
      exclusive: !0,
      onChange: (n, p) => {
        e(p);
      },
      "aria-label": l ?? "Select an option",
      children: z.chain(t).map((n) => {
        const p = d(n), u = i(n);
        return { option: n, value: p, display: u };
      }).filter((n) => !z.isNil(n.value)).value().map(({ value: n, display: p }) => /* @__PURE__ */ s(
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
var g = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, k = y.createContext && /* @__PURE__ */ y.createContext(g), be = ["attr", "size", "title"];
function ve(t, e) {
  if (t == null) return {};
  var l, r, a = we(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (r = 0; r < o.length; r++) l = o[r], e.indexOf(l) === -1 && {}.propertyIsEnumerable.call(t, l) && (a[l] = t[l]);
  }
  return a;
}
function we(t, e) {
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
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), l.push.apply(l, r);
  }
  return l;
}
function _(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? R(Object(l), !0).forEach(function(r) {
      ye(t, r, l[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : R(Object(l)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(l, r));
    });
  }
  return t;
}
function ye(t, e, l) {
  return (e = xe(e)) in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function xe(t) {
  var e = Ce(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Ce(t, e) {
  if (typeof t != "object" || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var r = l.call(t, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function q(t) {
  return t && t.map((e, l) => /* @__PURE__ */ y.createElement(e.tag, _({
    key: l
  }, e.attr), q(e.child)));
}
function T(t) {
  return (e) => /* @__PURE__ */ y.createElement(ze, M({
    attr: _({}, t.attr)
  }, e), q(t.child));
}
function ze(t) {
  var e = (l) => {
    var r = t.attr, a = t.size, o = t.title, c = ve(t, be), d = a || l.size || "1em", i;
    return l.className && (i = l.className), t.className && (i = (i ? i + " " : "") + t.className), /* @__PURE__ */ y.createElement("svg", M({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, r, c, {
      className: i,
      style: _(_({
        color: t.color || l.color
      }, l.style), t.style),
      height: d,
      width: d,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ y.createElement("title", null, o), t.children);
  };
  return k !== void 0 ? /* @__PURE__ */ y.createElement(k.Consumer, null, (l) => e(l)) : e(g);
}
function Se(t) {
  return T({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function Pe(t) {
  return T({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function Oe(t) {
  return T({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function Me(t) {
  return T({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const _e = {
  border: "1px solid",
  borderColor: "primary.main"
}, Ye = ({ address: t }) => {
  const e = (l) => {
    const r = encodeURIComponent(l), a = `comgooglemaps://?q=${r}`;
    window.location.href = a, setTimeout(() => {
      const o = `https://www.google.com/maps/search/?api=1&query=${r}`;
      window.open(o, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ b(w, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ s("span", { children: t }),
    /* @__PURE__ */ s(
      S,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: _e,
        children: /* @__PURE__ */ s(Se, {})
      }
    )
  ] });
}, De = () => {
  const t = O(() => {
    const c = [
      {
        fn: () => {
          const i = navigator.userAgentData;
          return h(i) ? !1 : i.mobile;
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
    let d = 0;
    return X(c, (i) => {
      d += i.fn() ? i.confidence : 0;
    }), d >= 100;
  }, []), e = O(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, Ze = ({ phone: t }) => {
  const { isMobile: e } = De(), l = (o) => window.open(`tel:${o}`), r = (o) => window.open(`sms:${o}`), a = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ b(w, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ s("span", { children: t }),
    e && /* @__PURE__ */ s(
      S,
      {
        title: "Call",
        size: "small",
        onClick: () => l(t),
        sx: a,
        children: /* @__PURE__ */ s(Pe, {})
      }
    ),
    e && /* @__PURE__ */ s(
      S,
      {
        title: "Message",
        size: "small",
        onClick: () => r(t),
        sx: a,
        children: /* @__PURE__ */ s(Oe, {})
      }
    )
  ] });
}, et = ({ email: t }) => {
  const e = (r) => window.open(`mailto:${r}`);
  return /* @__PURE__ */ b(w, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ s("span", { children: t }),
    /* @__PURE__ */ s(
      S,
      {
        title: "Email",
        size: "small",
        onClick: () => e(t),
        sx: {
          border: "1px solid",
          borderColor: "primary.main"
        },
        children: /* @__PURE__ */ s(Me, {})
      }
    )
  ] });
};
function Te({
  data: t,
  configuration: e,
  events: l
}) {
  var o, c, d;
  const r = O(
    () => Y([
      ...Z(ee(t.map((m) => $(m).filter((n) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(n));
      })))),
      ...$(e == null ? void 0 : e.columns.actions)
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
          let C = /* @__PURE__ */ s(f, {});
          return H(u) && G(v.value) && (C = u(v.value, v.row)), C;
        };
      }
      if (!h(e == null ? void 0 : e.columns.customCellClassNames) && !h(e.columns.customCellClassNames[m])) {
        const u = e.columns.customCellClassNames[m];
        n.cellClassName = (v) => {
          let C = "";
          return H(u) && (C = u(v)), C;
        };
      }
      return !h(e == null ? void 0 : e.columns.formats) && !h(e.columns.formats[m]) && (n.valueFormatter = e.columns.formats[m]), {
        field: m,
        ...n
      };
    }),
    [e, t]
  ), a = (i) => {
    l != null && l.onRowSelection && l.onRowSelection(i);
  };
  return /* @__PURE__ */ s(
    he,
    {
      getRowHeight: e == null ? void 0 : e.getRowHeight,
      autoPageSize: !0,
      disableColumnFilter: !0,
      checkboxSelection: (o = e == null ? void 0 : e.selection) == null ? void 0 : o.multiSelect,
      disableMultipleRowSelection: !((c = e == null ? void 0 : e.selection) != null && c.multiSelect),
      isRowSelectable: () => {
        var i;
        return !((i = e == null ? void 0 : e.selection) != null && i.disabled);
      },
      columns: r,
      rows: t,
      rowSelectionModel: (d = e == null ? void 0 : e.selection) == null ? void 0 : d.model,
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
const Ee = "_addableGridList_fpq0x_1", je = {
  addableGridList: Ee
}, tt = ({
  data: t,
  addItemDialog: e,
  configuration: l,
  events: r
}) => /* @__PURE__ */ b("div", { className: je.addableGridList, children: [
  /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
    Te,
    {
      data: t,
      configuration: l,
      events: r
    }
  ) }) }),
  e
] }), He = "_colorPickerButton_142zf_1", fe = {
  colorPickerButton: He
}, Be = () => ({
  randomHex: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}), $e = (t) => G(t) || re(t) || typeof t == "bigint" || se(t) || h(t) || ne(t);
var x = /* @__PURE__ */ ((t) => (t.SET = "set", t.UPDATE = "update", t.DRAFT = "draft", t))(x || {});
const E = {
  set: (t, e) => e.value,
  update: (t, e) => e.updateFn(t),
  draft: (t, e) => Q(t, e.draftFn)
}, ke = (t, e) => {
  switch (e.type) {
    case "set":
      return E[e.type](t, e);
    case "update":
      return E[e.type](t, e);
    case "draft":
      return E[e.type](t, e);
  }
}, Re = () => (t, e) => ke(t, e), D = (t) => U(Re(), $e(t) ? t : oe(t)), lt = ({
  color: t,
  onChange: e,
  configuration: l
}) => {
  const { randomHex: r } = Be(), [a, o] = D(t || new pe(r())), [c, d] = D(!1), i = h(l == null ? void 0 : l.size) ? 35 : l.size, P = h(l == null ? void 0 : l.padding) ? 5 : l.padding, m = h(l == null ? void 0 : l.borderRadius) ? 5 : l.borderRadius, n = h(l == null ? void 0 : l.allowDialog) ? !0 : l.allowDialog, p = () => {
    d({
      type: x.SET,
      value: !0
    });
  }, u = () => {
    d({
      type: x.SET,
      value: !1
    });
  };
  return /* @__PURE__ */ b(f, { children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: fe.colorPickerButton,
        style: {
          width: `${i}px`,
          height: `${i}px`,
          borderRadius: `${m}px`,
          padding: `${P}px`,
          cursor: n ? "pointer" : "default"
        },
        onClick: p,
        children: /* @__PURE__ */ s("div", { style: {
          backgroundColor: a == null ? void 0 : a.toHexString(),
          borderRadius: `${m}px`
        } })
      }
    ),
    n && /* @__PURE__ */ b(de, { open: c, onClose: u, children: [
      /* @__PURE__ */ s(ie, { children: /* @__PURE__ */ s(
        ue,
        {
          defaultValue: a,
          onChange: (v) => {
            o({
              type: x.SET,
              value: v
            }), H(e) && e(v);
          }
        }
      ) }),
      /* @__PURE__ */ s(me, { children: /* @__PURE__ */ s(I, { onClick: u, children: "Close" }) })
    ] })
  ] });
}, Ae = "_overlay_1bmet_1", Le = "_container_1bmet_13", Ne = "_center_1bmet_21", j = {
  overlay: Ae,
  container: Le,
  center: Ne
}, rt = ({
  children: t,
  className: e
}) => {
  const l = [j.overlay, e].filter(Boolean).join(" ");
  return /* @__PURE__ */ s("div", { className: l, children: /* @__PURE__ */ s("div", { className: j.container, children: /* @__PURE__ */ s("div", { className: j.center, children: t }) }) });
}, st = ({
  children: t,
  direction: e = "column",
  minWidth: l = 0,
  spacing: r = 1.5,
  onDragOver: a,
  onDragEnter: o,
  onDragLeave: c,
  onDrop: d
}) => /* @__PURE__ */ s(
  w,
  {
    minWidth: l,
    sx: {
      marginTop: "6px"
    },
    spacing: r,
    direction: e,
    flexGrow: 1,
    onDragOver: a,
    onDragEnter: o,
    onDragLeave: c,
    onDrop: d,
    children: t
  }
), A = {
  "mobile-button": "_mobile-button_12ue1_1",
  "desktop-button": "_desktop-button_12ue1_5"
}, nt = ({
  title: t,
  icon: e,
  onClick: l
}) => /* @__PURE__ */ b(f, { children: [
  /* @__PURE__ */ s("div", { className: A["desktop-button"], children: /* @__PURE__ */ s(
    I,
    {
      title: t,
      size: "small",
      onClick: l,
      startIcon: e,
      children: t
    }
  ) }),
  /* @__PURE__ */ s("div", { className: A["mobile-button"], children: /* @__PURE__ */ s(
    S,
    {
      title: t,
      size: "small",
      onClick: l,
      children: e
    }
  ) })
] }), Ge = (t) => ({
  id: `horizontal-tab-${t}`,
  "aria-controls": `horizontal-tabpanel-${t}`
}), ot = ({
  tabs: t,
  ariaLabel: e
}) => {
  const [l, r] = D(0);
  return /* @__PURE__ */ b(w, { direction: "column", sx: {
    minHeight: 0,
    flexGrow: 1
  }, children: [
    /* @__PURE__ */ s(
      W,
      {
        orientation: "horizontal",
        variant: "scrollable",
        value: l,
        onChange: (o, c) => {
          r({
            value: c,
            type: x.SET
          });
        },
        "aria-label": e,
        children: t.map((o, c) => /* @__PURE__ */ s(
          V,
          {
            disabled: o.disabled,
            label: o.displayName,
            ...Ge(c)
          },
          c
        ))
      }
    ),
    /* @__PURE__ */ s(
      w,
      {
        sx: {
          flexGrow: 1,
          minWidth: "150px"
        },
        height: "100%",
        paddingTop: 1,
        paddingLeft: 1,
        overflow: "auto",
        children: t.map((o, c) => /* @__PURE__ */ s(
          F,
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
}, L = () => {
  const { innerWidth: t, innerHeight: e } = window;
  return {
    width: t,
    height: e
  };
}, Ie = () => {
  const [t, e] = K(L());
  return J(() => {
    const l = () => {
      e(L());
    };
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, []), t;
}, We = (t) => ({
  id: `vertical-tab-${t}`,
  "aria-controls": `vertical-tabpanel-${t}`
}), ct = ({
  tabs: t,
  ariaLabel: e
}) => {
  const [l, r] = D(0), { width: a } = Ie(), o = (c, d) => {
    r({
      value: d,
      type: x.SET
    });
  };
  return /* @__PURE__ */ b(w, { direction: a < 600 ? "column" : "row", sx: { minHeight: 0 }, children: [
    /* @__PURE__ */ s(
      W,
      {
        orientation: a < 600 ? "horizontal" : "vertical",
        variant: "scrollable",
        value: l,
        onChange: o,
        "aria-label": e,
        children: t.map((c, d) => /* @__PURE__ */ s(V, { disabled: c.disabled, label: c.displayName, ...We(d) }, d))
      }
    ),
    /* @__PURE__ */ s(
      w,
      {
        sx: { flexGrow: 1, minWidth: "150px" },
        height: "100%",
        paddingTop: 1,
        paddingLeft: 1,
        overflow: "auto",
        children: t.map((c, d) => /* @__PURE__ */ s(
          F,
          {
            role: "tabpanel",
            hidden: l !== d,
            id: `vertical-tabpanel-${d}`,
            "aria-labelledby": `vertical-tab-${d}`,
            sx: { flexGrow: 1 },
            children: c.content
          },
          d
        ))
      }
    )
  ] });
}, at = N({
  palette: {
    mode: "light"
  }
}), dt = N({
  palette: {
    mode: "dark"
  }
});
export {
  x as ActionType,
  Ye as ActiveAddress,
  et as ActiveEmail,
  Ze as ActivePhone,
  tt as AddableGridList,
  Xe as ButtonSelect,
  lt as ColorPickerButton,
  st as FieldContainer,
  Te as GridList,
  ot as HorizontalTabDisplay,
  rt as Overlay,
  nt as ResponsiveButton,
  ct as VerticalTabDisplay,
  dt as darkTheme,
  at as lightTheme,
  Be as useColor,
  De as useDevice,
  D as useImducer,
  Ie as useWindowDimensions
};
//# sourceMappingURL=index.js.map
