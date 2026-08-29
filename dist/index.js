import { createTheme as T } from "@mui/material/styles";
import v, { useCallback as B, useMemo as P, useReducer as N } from "react";
import { produce as V } from "immer";
import x, { forEach as f, isNil as i, sortBy as F, uniq as W, flatten as q, keys as H, findIndex as U, isEmpty as K, isFunction as j, isString as L, isNumber as J, isBoolean as Q, isSymbol as X, cloneDeep as Y } from "lodash";
import { jsx as n, jsxs as y, Fragment as I } from "react/jsx-runtime";
import { ToggleButtonGroup as Z, ToggleButton as g, Stack as E, IconButton as S, Dialog as ee, DialogContent as te, DialogActions as le, Button as se } from "@mui/material";
import { DataGrid as re } from "@mui/x-data-grid";
import ne, { Color as ce } from "@rc-component/color-picker";
const Ie = ({
  options: t,
  onChange: e,
  label: l,
  selectedOption: s,
  disabled: o,
  displayProp: a,
  valueProp: u
}) => {
  const m = B(
    (r) => {
      if (!x.isNil(r))
        return x.isNil(u) ? r : r[u];
    },
    [u]
  ), c = B(
    (r) => x.isNil(a) ? r : r[a],
    [a]
  ), C = P(() => m(s), [m, s]);
  return /* @__PURE__ */ n(
    Z,
    {
      color: "primary",
      value: C,
      exclusive: !0,
      onChange: (r, p) => {
        e(p);
      },
      "aria-label": l ?? "Select an option",
      children: x.chain(t).map((r) => {
        const p = m(r), h = c(r);
        return { option: r, value: p, display: h };
      }).filter((r) => !x.isNil(r.value)).value().map(({ value: r, display: p }) => /* @__PURE__ */ n(
        g,
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
var $ = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, A = v.createContext && /* @__PURE__ */ v.createContext($), de = ["attr", "size", "title"];
function oe(t, e) {
  if (t == null) return {};
  var l, s, o = ae(t, e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (s = 0; s < a.length; s++) l = a[s], e.indexOf(l) === -1 && {}.propertyIsEnumerable.call(t, l) && (o[l] = t[l]);
  }
  return o;
}
function ae(t, e) {
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
function _(t, e) {
  var l = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function z(t) {
  for (var e = 1; e < arguments.length; e++) {
    var l = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _(Object(l), !0).forEach(function(s) {
      ie(t, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : _(Object(l)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return t;
}
function ie(t, e, l) {
  return (e = me(e)) in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = l, t;
}
function me(t) {
  var e = he(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function he(t, e) {
  if (typeof t != "object" || !t) return t;
  var l = t[Symbol.toPrimitive];
  if (l !== void 0) {
    var s = l.call(t, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function G(t) {
  return t && t.map((e, l) => /* @__PURE__ */ v.createElement(e.tag, z({
    key: l
  }, e.attr), G(e.child)));
}
function k(t) {
  return (e) => /* @__PURE__ */ v.createElement(ue, M({
    attr: z({}, t.attr)
  }, e), G(t.child));
}
function ue(t) {
  var e = (l) => {
    var s = t.attr, o = t.size, a = t.title, u = oe(t, de), m = o || l.size || "1em", c;
    return l.className && (c = l.className), t.className && (c = (c ? c + " " : "") + t.className), /* @__PURE__ */ v.createElement("svg", M({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, s, u, {
      className: c,
      style: z(z({
        color: t.color || l.color
      }, l.style), t.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ v.createElement("title", null, a), t.children);
  };
  return A !== void 0 ? /* @__PURE__ */ v.createElement(A.Consumer, null, (l) => e(l)) : e($);
}
function pe(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z" }, child: [] }] })(t);
}
function be(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" }, child: [] }] })(t);
}
function ve(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" }, child: [] }] })(t);
}
function ye(t) {
  return k({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z" }, child: [] }] })(t);
}
const we = {
  border: "1px solid",
  borderColor: "primary.main"
}, $e = ({ address: t }) => {
  const e = (l) => {
    const s = encodeURIComponent(l), o = `comgooglemaps://?q=${s}`;
    window.location.href = o, setTimeout(() => {
      const a = `https://www.google.com/maps/search/?api=1&query=${s}`;
      window.open(a, "_blank");
    }, 500);
  };
  return /* @__PURE__ */ y(E, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    /* @__PURE__ */ n(
      S,
      {
        title: "Map",
        size: "small",
        onClick: () => e(t),
        sx: we,
        children: /* @__PURE__ */ n(pe, {})
      }
    )
  ] });
}, xe = () => {
  const t = P(() => {
    const u = [
      {
        fn: () => {
          const c = navigator.userAgentData;
          return i(c) ? !1 : c.mobile;
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
    return f(u, (c) => {
      m += c.fn() ? c.confidence : 0;
    }), m >= 100;
  }, []), e = P(() => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent), []);
  return {
    isMobile: t,
    isApple: e
  };
}, Ge = ({ phone: t }) => {
  const { isMobile: e } = xe(), l = (a) => window.open(`tel:${a}`), s = (a) => window.open(`sms:${a}`), o = {
    border: "1px solid",
    borderColor: "primary.main"
  };
  return /* @__PURE__ */ y(E, { direction: "row", alignItems: "center", gap: 1, children: [
    /* @__PURE__ */ n("span", { children: t }),
    e && /* @__PURE__ */ n(
      S,
      {
        title: "Call",
        size: "small",
        onClick: () => l(t),
        sx: o,
        children: /* @__PURE__ */ n(be, {})
      }
    ),
    e && /* @__PURE__ */ n(
      S,
      {
        title: "Message",
        size: "small",
        onClick: () => s(t),
        sx: o,
        children: /* @__PURE__ */ n(ve, {})
      }
    )
  ] });
}, Ne = ({ email: t }) => {
  const e = (s) => window.open(`mailto:${s}`);
  return /* @__PURE__ */ y(E, { direction: "row", alignItems: "center", gap: 1, children: [
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
        children: /* @__PURE__ */ n(ye, {})
      }
    )
  ] });
};
function Ce({
  data: t,
  configuration: e,
  events: l
}) {
  var a, u, m;
  const s = P(
    () => F([
      ...W(q(t.map((d) => H(d).filter((r) => {
        var p;
        return !((p = e == null ? void 0 : e.columns.hidden) != null && p.includes(r));
      })))),
      ...H(e == null ? void 0 : e.columns.actions)
    ], (d) => U(e == null ? void 0 : e.columns.order, (r) => r === d)).map((d) => {
      let r = {};
      if (!i(e == null ? void 0 : e.columns.headers) && !i(e.columns.headers[d]) && (r.headerName = e.columns.headers[d]), !i(e == null ? void 0 : e.columns.dimensions) && !i(e.columns.dimensions[d])) {
        const h = e.columns.dimensions[d];
        K(h) || (r = {
          ...r,
          ...h
        });
      }
      if (!i(e == null ? void 0 : e.columns.types) && !i(e.columns.types[d]) && (r.type = e.columns.types[d]), !i(e == null ? void 0 : e.columns.actions) && !i(e.columns.actions[d]) && (r.type = "actions", r.getActions = e.columns.actions[d]), !i(e == null ? void 0 : e.columns.customCells) && !i(e.columns.customCells[d])) {
        const h = e.columns.customCells[d];
        r.type = "custom", r.renderCell = (b) => {
          let w = /* @__PURE__ */ n(I, {});
          return j(h) && L(b.value) && (w = h(b.value, b.row)), w;
        };
      }
      if (!i(e == null ? void 0 : e.columns.customCellClassNames) && !i(e.columns.customCellClassNames[d])) {
        const h = e.columns.customCellClassNames[d];
        r.cellClassName = (b) => {
          let w = "";
          return j(h) && (w = h(b)), w;
        };
      }
      return !i(e == null ? void 0 : e.columns.formats) && !i(e.columns.formats[d]) && (r.valueFormatter = e.columns.formats[d]), {
        field: d,
        ...r
      };
    }),
    [e, t]
  ), o = (c) => {
    l != null && l.onRowSelection && l.onRowSelection(c);
  };
  return /* @__PURE__ */ n(
    re,
    {
      getRowHeight: e == null ? void 0 : e.getRowHeight,
      autoPageSize: !0,
      disableColumnFilter: !0,
      checkboxSelection: (a = e == null ? void 0 : e.selection) == null ? void 0 : a.multiSelect,
      disableMultipleRowSelection: !((u = e == null ? void 0 : e.selection) != null && u.multiSelect),
      isRowSelectable: () => {
        var c;
        return !((c = e == null ? void 0 : e.selection) != null && c.disabled);
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
const Oe = "_addableGridList_fpq0x_1", Pe = {
  addableGridList: Oe
}, Ve = ({
  data: t,
  addItemDialog: e,
  configuration: l,
  events: s
}) => /* @__PURE__ */ y("div", { className: Pe.addableGridList, children: [
  /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    Ce,
    {
      data: t,
      configuration: l,
      events: s
    }
  ) }) }),
  e
] }), Se = "_colorPickerButton_142zf_1", Me = {
  colorPickerButton: Se
}, ze = () => ({
  randomHex: () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}), ke = (t) => L(t) || J(t) || typeof t == "bigint" || Q(t) || i(t) || X(t);
var O = /* @__PURE__ */ ((t) => (t.SET = "set", t.UPDATE = "update", t.DRAFT = "draft", t))(O || {});
const D = {
  set: (t, e) => e.value,
  update: (t, e) => e.updateFn(t),
  draft: (t, e) => V(t, e.draftFn)
}, De = (t, e) => {
  switch (e.type) {
    case "set":
      return D[e.type](t, e);
    case "update":
      return D[e.type](t, e);
    case "draft":
      return D[e.type](t, e);
  }
}, je = () => (t, e) => De(t, e), R = (t) => N(je(), ke(t) ? t : Y(t)), fe = ({
  color: t,
  onChange: e,
  configuration: l
}) => {
  const { randomHex: s } = ze(), [o, a] = R(t || new ce(s())), [u, m] = R(!1), c = i(l == null ? void 0 : l.size) ? 35 : l.size, C = i(l == null ? void 0 : l.padding) ? 5 : l.padding, d = i(l == null ? void 0 : l.borderRadius) ? 5 : l.borderRadius, r = i(l == null ? void 0 : l.allowDialog) ? !0 : l.allowDialog, p = () => {
    m({
      type: O.SET,
      value: !0
    });
  }, h = () => {
    m({
      type: O.SET,
      value: !1
    });
  };
  return /* @__PURE__ */ y(I, { children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: Me.colorPickerButton,
        style: {
          width: `${c}px`,
          height: `${c}px`,
          borderRadius: `${d}px`,
          padding: `${C}px`,
          cursor: r ? "pointer" : "default"
        },
        onClick: p,
        children: /* @__PURE__ */ n("div", { style: {
          backgroundColor: o == null ? void 0 : o.toHexString(),
          borderRadius: `${d}px`
        } })
      }
    ),
    r && /* @__PURE__ */ y(ee, { open: u, onClose: h, children: [
      /* @__PURE__ */ n(te, { children: /* @__PURE__ */ n(
        ne,
        {
          defaultValue: o,
          onChange: (b) => {
            a({
              type: O.SET,
              value: b
            }), j(e) && e(b);
          }
        }
      ) }),
      /* @__PURE__ */ n(le, { children: /* @__PURE__ */ n(se, { onClick: h, children: "Close" }) })
    ] })
  ] });
}, Fe = T({
  palette: {
    mode: "light"
  }
}), We = T({
  palette: {
    mode: "dark"
  }
});
export {
  O as ActionType,
  $e as ActiveAddress,
  Ne as ActiveEmail,
  Ge as ActivePhone,
  Ve as AddableGridList,
  Ie as ButtonSelect,
  fe as ColorPickerButton,
  Ce as GridList,
  We as darkTheme,
  Fe as lightTheme,
  ze as useColor,
  xe as useDevice,
  R as useImducer
};
//# sourceMappingURL=index.js.map
