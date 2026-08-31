import { createTheme as N } from "@mui/material/styles";
import w, { useCallback as H, useMemo as S, useReducer as W, useState as g, useEffect as q } from "react";
import { produce as U } from "immer";
import C, { forEach as K, isNil as m, sortBy as J, uniq as Q, flatten as X, keys as R, findIndex as Y, isEmpty as Z, isFunction as T, isString as G, isNumber as ee, isBoolean as te, isSymbol as le, cloneDeep as se } from "lodash";
import { jsx as n, jsxs as v, Fragment as B } from "react/jsx-runtime";
import { ToggleButtonGroup as re, ToggleButton as ne, Stack as y, IconButton as O, Dialog as oe, DialogContent as ce, DialogActions as de, Button as I, Tabs as ae, Tab as ie, Box as me } from "@mui/material";
import { DataGrid as he } from "@mui/x-data-grid";
import ue, { Color as pe } from "@rc-component/color-picker";
const Je = ({
  options: t,
  onChange: e,
  label: l,
  selectedOption: s,
  disabled: c,
  displayProp: o,
  valueProp: d
}) => {
  const h = H(
    (r) => {
      if (!C.isNil(r))
        return C.isNil(d) ? r : r[d];
    },
    [d]
  ), a = H(
    (r) => C.isNil(o) ? r : r[o],
    [o]
  ), P = S(() => h(s), [h, s]);
  return /* @__PURE__ */ n(
    re,
    {
      color: "primary",
      value: P,
      exclusive: !0,
      onChange: (r, p) => {
        e(p);
      },
      "aria-label": l ?? "Select an option",
      children: C.chain(t).map((r) => {
        const p = h(r), u = a(r);
        return { option: r, value: p, display: u };
      }).filter((r) => !C.isNil(r.value)).value().map(({ value: r, display: p }) => /* @__PURE__ */ n(
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
}, f = w.createContext && /* @__PURE__ */ w.createContext(F), be = ["attr", "size", "title"];
function ve(t, e) {
  if (t == null) return {};
  var l, s, c = we(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (s = 0; s < o.length; s++) l = o[s], e.indexOf(l) === -1 && {}.propertyIsEnumerable.call(t, l) && (c[l] = t[l]);
  }
  return c;
}
function we(t, e) {
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
function A(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(c) {
      return Object.getOwnPropertyDescriptor(t, c).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function _(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? A(Object(l), !0).forEach(function(s) {
      ye(t, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : A(Object(l)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(l, s));
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
    var s = l.call(t, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function V(t) {
  return t && t.map((e, l) => /* @__PURE__ */ w.createElement(e.tag, _({
    key: l
  }, e.attr), V(e.child)));
}
function D(t) {
  return (e) => /* @__PURE__ */ w.createElement(ze, M({
    attr: _({}, t.attr)
  }, e), V(t.child));
}
function ze(t) {
  var e = (l) => {
    var s = t.attr, c = t.size, o = t.title, d = ve(t, be), h = c || l.size || "1em", a;
    return l.className && (a = l.className), t.className && (a = (a ? a + " " : "") + t.className), /* @__PURE__ */ w.createElement("svg", M({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, s, d, {
      className: a,
      style: _(_({
        color: t.color || l.color
      }, l.style), t.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ w.createElement("title", null, o), t.children);
  };
  return f !== void 0 ? /* @__PURE__ */ w.createElement(f.Consumer, null, (l) => e(l)) : e(F);
}
function Oe(t) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function Pe(t) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function Se(t) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function Me(t) {
  return D({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const _e = {
  border: "1px solid",
  borderColor: "primary.main"
}, Qe = ({ address: t }) => {
  const e = (l) => {
    const s = encodeURIComponent(l), c = `comgooglemaps://?q=${s}`;
    window.location.href = c, setTimeout(() => {
      const o = `https://www.google.com/maps/search/?api=1&query=${s}`;
      window.open(o, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ v(y, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    /* @__PURE__ */ n(
      O,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: _e,
        children: /* @__PURE__ */ n(Oe, {})
      }
    )
  ] });
}, De = () => {
  const t = S(() => {
    const d = [
      {
        fn: () => {
          const a = navigator.userAgentData;
          return m(a) ? !1 : a.mobile;
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
    let h = 0;
    return K(d, (a) => {
      h += a.fn() ? a.confidence : 0;
    }), h >= 100;
  }, []), e = S(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, Xe = ({ phone: t }) => {
  const { isMobile: e } = De(), l = (o) => window.open(`tel:${o}`), s = (o) => window.open(`sms:${o}`), c = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ v(y, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    e && /* @__PURE__ */ n(
      O,
      {
        title: "Call",
        size: "small",
        onClick: () => l(t),
        sx: c,
        children: /* @__PURE__ */ n(Pe, {})
      }
    ),
    e && /* @__PURE__ */ n(
      O,
      {
        title: "Message",
        size: "small",
        onClick: () => s(t),
        sx: c,
        children: /* @__PURE__ */ n(Se, {})
      }
    )
  ] });
}, Ye = ({ email: t }) => {
  const e = (s) => window.open(`mailto:${s}`);
  return /* @__PURE__ */ v(y, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    /* @__PURE__ */ n(
      O,
      {
        title: "Email",
        size: "small",
        onClick: () => e(t),
        sx: {
          border: "1px solid",
          borderColor: "primary.main"
        },
        children: /* @__PURE__ */ n(Me, {})
      }
    )
  ] });
};
function ke({
  data: t,
  configuration: e,
  events: l
}) {
  var o, d, h;
  const s = S(
    () => J([
      ...Q(X(t.map((i) => R(i).filter((r) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(r));
      })))),
      ...R(e == null ? void 0 : e.columns.actions)
    ], (i) => Y(e == null ? void 0 : e.columns.order, (r) => r === i)).map((i) => {
      let r = {};
      if (!m(e == null ? void 0 : e.columns.headers) && !m(e.columns.headers[i]) && (r.headerName = e.columns.headers[i]), !m(e == null ? void 0 : e.columns.dimensions) && !m(e.columns.dimensions[i])) {
        const u = e.columns.dimensions[i];
        Z(u) || (r = {
          ...r,
          ...u
        });
      }
      if (!m(e == null ? void 0 : e.columns.types) && !m(e.columns.types[i]) && (r.type = e.columns.types[i]), !m(e == null ? void 0 : e.columns.actions) && !m(e.columns.actions[i]) && (r.type = "actions", r.getActions = e.columns.actions[i]), !m(e == null ? void 0 : e.columns.customCells) && !m(e.columns.customCells[i])) {
        const u = e.columns.customCells[i];
        r.type = "custom", r.renderCell = (b) => {
          let x = /* @__PURE__ */ n(B, {});
          return T(u) && G(b.value) && (x = u(b.value, b.row)), x;
        };
      }
      if (!m(e == null ? void 0 : e.columns.customCellClassNames) && !m(e.columns.customCellClassNames[i])) {
        const u = e.columns.customCellClassNames[i];
        r.cellClassName = (b) => {
          let x = "";
          return T(u) && (x = u(b)), x;
        };
      }
      return !m(e == null ? void 0 : e.columns.formats) && !m(e.columns.formats[i]) && (r.valueFormatter = e.columns.formats[i]), {
        field: i,
        ...r
      };
    }),
    [e, t]
  ), c = (a) => {
    l != null && l.onRowSelection && l.onRowSelection(a);
  };
  return /* @__PURE__ */ n(
    he,
    {
      getRowHeight: e == null ? void 0 : e.getRowHeight,
      autoPageSize: !0,
      disableColumnFilter: !0,
      checkboxSelection: (o = e == null ? void 0 : e.selection) == null ? void 0 : o.multiSelect,
      disableMultipleRowSelection: !((d = e == null ? void 0 : e.selection) != null && d.multiSelect),
      isRowSelectable: () => {
        var a;
        return !((a = e == null ? void 0 : e.selection) != null && a.disabled);
      },
      columns: s,
      rows: t,
      rowSelectionModel: (h = e == null ? void 0 : e.selection) == null ? void 0 : h.model,
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
const Ee = "_addableGridList_fpq0x_1", Te = {
  addableGridList: Ee
}, Ze = ({
  data: t,
  addItemDialog: e,
  configuration: l,
  events: s
}) => /* @__PURE__ */ v("div", { className: Te.addableGridList, children: [
  /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    ke,
    {
      data: t,
      configuration: l,
      events: s
    }
  ) }) }),
  e
] }), je = "_colorPickerButton_142zf_1", Be = {
  colorPickerButton: je
}, He = () => ({
  randomHex: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}), Re = (t) => G(t) || ee(t) || typeof t == "bigint" || te(t) || m(t) || le(t);
var z = /* @__PURE__ */ ((t) => (t.SET = "set", t.UPDATE = "update", t.DRAFT = "draft", t))(z || {});
const k = {
  set: (t, e) => e.value,
  update: (t, e) => e.updateFn(t),
  draft: (t, e) => U(t, e.draftFn)
}, fe = (t, e) => {
  switch (e.type) {
    case "set":
      return k[e.type](t, e);
    case "update":
      return k[e.type](t, e);
    case "draft":
      return k[e.type](t, e);
  }
}, Ae = () => (t, e) => fe(t, e), j = (t) => W(Ae(), Re(t) ? t : se(t)), et = ({
  color: t,
  onChange: e,
  configuration: l
}) => {
  const { randomHex: s } = He(), [c, o] = j(t || new pe(s())), [d, h] = j(!1), a = m(l == null ? void 0 : l.size) ? 35 : l.size, P = m(l == null ? void 0 : l.padding) ? 5 : l.padding, i = m(l == null ? void 0 : l.borderRadius) ? 5 : l.borderRadius, r = m(l == null ? void 0 : l.allowDialog) ? !0 : l.allowDialog, p = () => {
    h({
      type: z.SET,
      value: !0
    });
  }, u = () => {
    h({
      type: z.SET,
      value: !1
    });
  };
  return /* @__PURE__ */ v(B, { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: Be.colorPickerButton,
        style: {
          width: `${a}px`,
          height: `${a}px`,
          borderRadius: `${i}px`,
          padding: `${P}px`,
          cursor: r ? "pointer" : "default"
        },
        onClick: p,
        children: /* @__PURE__ */ n("div", { style: {
          backgroundColor: c == null ? void 0 : c.toHexString(),
          borderRadius: `${i}px`
        } })
      }
    ),
    r && /* @__PURE__ */ v(oe, { open: d, onClose: u, children: [
      /* @__PURE__ */ n(ce, { children: /* @__PURE__ */ n(
        ue,
        {
          defaultValue: c,
          onChange: (b) => {
            o({
              type: z.SET,
              value: b
            }), T(e) && e(b);
          }
        }
      ) }),
      /* @__PURE__ */ n(de, { children: /* @__PURE__ */ n(I, { onClick: u, children: "Close" }) })
    ] })
  ] });
}, $e = "_overlay_1bmet_1", Le = "_container_1bmet_13", Ne = "_center_1bmet_21", E = {
  overlay: $e,
  container: Le,
  center: Ne
}, tt = ({
  children: t,
  className: e
}) => {
  const l = [E.overlay, e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: l, children: /* @__PURE__ */ n("div", { className: E.container, children: /* @__PURE__ */ n("div", { className: E.center, children: t }) }) });
}, lt = ({
  children: t,
  direction: e = "column",
  minWidth: l = 0,
  spacing: s = 1.5,
  onDragOver: c,
  onDragEnter: o,
  onDragLeave: d,
  onDrop: h
}) => /* @__PURE__ */ n(
  y,
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
    onDragLeave: d,
    onDrop: h,
    children: t
  }
), $ = {
  "mobile-button": "_mobile-button_12ue1_1",
  "desktop-button": "_desktop-button_12ue1_5"
}, st = ({
  title: t,
  icon: e,
  onClick: l
}) => /* @__PURE__ */ v(B, { children: [
  /* @__PURE__ */ n("div", { className: $["desktop-button"], children: /* @__PURE__ */ n(
    I,
    {
      title: t,
      size: "small",
      onClick: l,
      startIcon: e,
      children: t
    }
  ) }),
  /* @__PURE__ */ n("div", { className: $["mobile-button"], children: /* @__PURE__ */ n(
    O,
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
}), rt = ({
  tabs: t,
  ariaLabel: e
}) => {
  const [l, s] = j(0);
  return /* @__PURE__ */ v(y, { direction: "column", sx: {
    minHeight: 0,
    flexGrow: 1
  }, children: [
    /* @__PURE__ */ n(
      ae,
      {
        orientation: "horizontal",
        variant: "scrollable",
        value: l,
        onChange: (o, d) => {
          s({
            value: d,
            type: z.SET
          });
        },
        "aria-label": e,
        children: t.map((o, d) => /* @__PURE__ */ n(
          ie,
          {
            disabled: o.disabled,
            label: o.displayName,
            ...Ge(d)
          },
          d
        ))
      }
    ),
    /* @__PURE__ */ n(
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
        children: t.map((o, d) => /* @__PURE__ */ n(
          me,
          {
            role: "tabpanel",
            hidden: l !== d,
            id: `horizontal-tabpanel-${d}`,
            "aria-labelledby": `horizontal-tab-${d}`,
            sx: {
              flexGrow: 1
            },
            children: o.content
          },
          d
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
}, nt = () => {
  const [t, e] = g(L());
  return q(() => {
    const l = () => {
      e(L());
    };
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, []), t;
}, ot = N({
  palette: {
    mode: "light"
  }
}), ct = N({
  palette: {
    mode: "dark"
  }
});
export {
  z as ActionType,
  Qe as ActiveAddress,
  Ye as ActiveEmail,
  Xe as ActivePhone,
  Ze as AddableGridList,
  Je as ButtonSelect,
  et as ColorPickerButton,
  lt as FieldContainer,
  ke as GridList,
  rt as HorizontalTabDisplay,
  tt as Overlay,
  st as ResponsiveButton,
  ct as darkTheme,
  ot as lightTheme,
  He as useColor,
  De as useDevice,
  j as useImducer,
  nt as useWindowDimensions
};
//# sourceMappingURL=index.js.map
