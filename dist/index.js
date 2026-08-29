import { createTheme as i } from "@mui/material/styles";
import { jsx as c } from "react/jsx-runtime";
import { useCallback as u, useMemo as T } from "react";
import { isNil as r, chain as v } from "lodash";
import { ToggleButtonGroup as C, ToggleButton as k } from "@mui/material";
const y = ({
  options: m,
  onChange: s,
  label: h,
  selectedOption: a,
  disabled: g,
  displayProp: n,
  valueProp: l
}) => {
  const o = u(
    (e) => {
      if (!r(e))
        return r(l) ? e : e[l];
    },
    [l]
  ), f = u(
    (e) => r(n) ? e : e[n],
    [n]
  ), d = T(() => o(a), [o, a]);
  return /* @__PURE__ */ c(
    C,
    {
      color: "primary",
      value: d,
      exclusive: !0,
      onChange: (e, t) => {
        s(t);
      },
      "aria-label": h ?? "Select an option",
      children: v(m).map((e) => {
        const t = o(e), p = f(e);
        return { option: e, value: t, display: p };
      }).filter((e) => !r(e.value)).value().map(({ value: e, display: t }) => /* @__PURE__ */ c(
        k,
        {
          value: e,
          disabled: g,
          children: t
        },
        e
      ))
    }
  );
}, D = i({
  palette: {
    mode: "light"
  }
}), G = i({
  palette: {
    mode: "dark"
  }
});
export {
  y as ButtonSelect,
  G as darkTheme,
  D as lightTheme
};
//# sourceMappingURL=index.js.map
