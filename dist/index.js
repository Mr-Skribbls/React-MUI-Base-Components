import { createTheme as s } from "@mui/material/styles";
import { jsx as a } from "react/jsx-runtime";
import { useCallback as c, useMemo as T } from "react";
import r from "lodash";
import { ToggleButtonGroup as v, ToggleButton as C } from "@mui/material";
const V = ({
  options: u,
  onChange: m,
  label: h,
  selectedOption: o,
  disabled: g,
  displayProp: n,
  valueProp: l
}) => {
  const i = c(
    (e) => {
      if (!r.isNil(e))
        return r.isNil(l) ? e : e[l];
    },
    [l]
  ), f = c(
    (e) => r.isNil(n) ? e : e[n],
    [n]
  ), d = T(() => i(o), [i, o]);
  return /* @__PURE__ */ a(
    v,
    {
      color: "primary",
      value: d,
      exclusive: !0,
      onChange: (e, t) => {
        m(t);
      },
      "aria-label": h ?? "Select an option",
      children: r.chain(u).map((e) => {
        const t = i(e), p = f(e);
        return { option: e, value: t, display: p };
      }).filter((e) => !r.isNil(e.value)).value().map(({ value: e, display: t }) => /* @__PURE__ */ a(
        C,
        {
          value: e,
          disabled: g,
          children: t
        },
        e
      ))
    }
  );
}, _ = s({
  palette: {
    mode: "light"
  }
}), j = s({
  palette: {
    mode: "dark"
  }
});
export {
  V as ButtonSelect,
  j as darkTheme,
  _ as lightTheme
};
//# sourceMappingURL=index.js.map
