/* @ds-bundle: {"format":3,"namespace":"MavicoDesignSystem_269fd1","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"025fdb366a29","components/core/Avatar.jsx":"f08048b5fb69","components/core/Badge.jsx":"bc1f70e6ea33","components/core/Button.jsx":"feaca64a7fcf","components/core/Card.jsx":"e65407e4a17a","components/core/Eyebrow.jsx":"de209b7d9d3d","components/core/Logo.jsx":"94bae6479bda","components/core/Stat.jsx":"803c7bcf76af","components/forms/Checkbox.jsx":"375d0854d17b","components/forms/Input.jsx":"d4936ce71b65","components/forms/Select.jsx":"246423e6fafb","components/forms/Switch.jsx":"7d5ed73f6332","components/forms/Textarea.jsx":"747055456f45","ui_kits/website/SiteParts1.jsx":"d9891864d38b","ui_kits/website/SiteParts2.jsx":"550e2c374971","ui_kits/website/SiteParts3.jsx":"f5a53f254656"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MavicoDesignSystem_269fd1 = window.MavicoDesignSystem_269fd1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Accordion — single-open disclosure list (FAQ / capability detail).
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  onDark = false,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const line = onDark ? 'var(--border-ondark)' : 'var(--border-subtle)';
  const strong = onDark ? 'var(--white)' : 'var(--text-strong)';
  const body = onDark ? 'var(--text-inverse-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: `1px solid ${line}`,
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: `1px solid ${line}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '20px 0',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-lg)',
        fontWeight: 'var(--weight-medium)',
        color: strong
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: 'none',
        width: '24px',
        height: '24px',
        position: 'relative',
        color: 'var(--brand)',
        transition: 'transform var(--dur-base) var(--ease-out)',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '11px',
        left: '4px',
        width: '16px',
        height: '2px',
        background: 'currentColor'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '4px',
        left: '11px',
        width: '2px',
        height: '16px',
        background: 'currentColor'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 0 22px',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-md)',
        lineHeight: 'var(--leading-relaxed)',
        color: body,
        maxWidth: '60ch'
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — person/initials chip. Square-ish rounded to match the
 * brand's slight-radius corners.
 */
function Avatar({
  src = '',
  name = '',
  size = 44,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--ink-900)',
      color: 'var(--gold-400)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: size * 0.36,
      letterSpacing: 'var(--tracking-wide)',
      border: '1px solid var(--border-ondark)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact status / category label.
 * tones: neutral, brand, success, warning, error, info.
 */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  style = {},
  ...rest
}) {
  const map = {
    neutral: {
      bg: 'var(--ink-100)',
      fg: 'var(--ink-700)',
      solidBg: 'var(--ink-800)'
    },
    brand: {
      bg: 'var(--gold-100)',
      fg: 'var(--gold-800)',
      solidBg: 'var(--gold-500)',
      solidFg: 'var(--ink-950)'
    },
    success: {
      bg: 'var(--success-50)',
      fg: 'var(--success-600)',
      solidBg: 'var(--success-500)'
    },
    warning: {
      bg: 'var(--warning-50)',
      fg: 'var(--warning-600)',
      solidBg: 'var(--warning-500)'
    },
    error: {
      bg: 'var(--error-50)',
      fg: 'var(--error-600)',
      solidBg: 'var(--error-500)'
    },
    info: {
      bg: 'var(--info-50)',
      fg: 'var(--info-600)',
      solidBg: 'var(--info-500)'
    }
  };
  const c = map[tone] || map.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '22px',
      padding: '0 10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-3xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-full)',
      background: solid ? c.solidBg : c.bg,
      color: solid ? c.solidFg || 'var(--white)' : c.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mavico Button — bold, confident, slightly-tracked label.
 * Variants: primary (gold), solid (ink), outline, ghost.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  iconLeft = null,
  iconRight = null,
  block = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      h: 'var(--control-h-sm)',
      px: '16px',
      fs: 'var(--text-xs)',
      gap: '8px'
    },
    md: {
      h: 'var(--control-h-md)',
      px: '22px',
      fs: 'var(--text-sm)',
      gap: '10px'
    },
    lg: {
      h: 'var(--control-h-lg)',
      px: '30px',
      fs: 'var(--text-md)',
      gap: '12px'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.h,
    padding: `0 ${s.px}`,
    fontFamily: 'var(--font-body)',
    fontSize: s.fs,
    fontWeight: 'var(--weight-bold)',
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--brand-contrast)',
      borderColor: 'var(--brand)'
    },
    solid: onDark ? {
      background: 'var(--white)',
      color: 'var(--ink-950)',
      borderColor: 'var(--white)'
    } : {
      background: 'var(--ink-950)',
      color: 'var(--white)',
      borderColor: 'var(--ink-950)'
    },
    outline: onDark ? {
      background: 'transparent',
      color: 'var(--white)',
      borderColor: 'var(--border-ondark)'
    } : {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: onDark ? 'var(--white)' : 'var(--text-strong)',
      borderColor: 'transparent'
    }
  };
  const hoverFor = {
    primary: 'var(--brand-strong)',
    solid: onDark ? '#EDE9E0' : 'var(--ink-800)',
    outline: onDark ? 'rgba(255,255,255,0.08)' : 'var(--ink-100)',
    ghost: onDark ? 'rgba(255,255,255,0.08)' : 'var(--ink-100)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary' || variant === 'solid') e.currentTarget.style.background = hoverFor[variant];else e.currentTarget.style.background = hoverFor[variant];
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = variants[variant].background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = 'var(--ring)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — content surface. Light by default; `tone="ink"` for the
 * signature dark card. Optional gold top-bar accent.
 */
function Card({
  children,
  tone = 'light',
  accent = false,
  interactive = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const dark = tone === 'ink';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      background: dark ? 'var(--surface-ink-card)' : 'var(--surface-card)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-body)',
      border: `1px solid ${dark ? 'var(--border-ondark)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? dark ? 'var(--shadow-ondark)' : 'var(--shadow-lg)' : dark ? 'none' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      overflow: 'hidden',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '3px',
      width: '100%',
      background: 'var(--brand)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the signature Mavico overline. Wide-tracked uppercase
 * micro-label, optionally preceded by the gold bar motif.
 */
function Eyebrow({
  children,
  bar = true,
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--gold-400)' : 'var(--brand-strong)',
      ...style
    }
  }, rest), bar && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '20px',
      height: '3px',
      background: 'var(--brand)',
      display: 'inline-block',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — the Mavico wordmark, reconstructed typographically so it
 * stays crisp at any size. The gold bar replaces the "I", as in the
 * master logo. Use `tone` to flip for light/dark backgrounds.
 */
function Logo({
  tone = 'light',
  size = 28,
  style = {},
  ...rest
}) {
  // tone 'light' = light marks for dark backgrounds; 'dark' = ink marks for light backgrounds
  const mark = tone === 'light' ? 'var(--white)' : 'var(--ink-950)';
  const letter = {
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-medium)',
    fontSize: size,
    lineHeight: 1,
    letterSpacing: '0.18em',
    color: mark,
    display: 'inline-block'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-label": "Mavico",
    style: {
      ...letter,
      userSelect: 'none',
      ...style
    }
  }, rest), "MAV", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, "I"), "CO");
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — large metric block for results/credibility sections.
 */
function Stat({
  value,
  label,
  suffix = '',
  onDark = false,
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-none)',
      letterSpacing: 'var(--tracking-tight)',
      color: onDark ? 'var(--white)' : 'var(--text-strong)'
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — gold-filled when checked. Controlled or uncontrolled.
 */
function Checkbox({
  label = '',
  checked,
  defaultChecked,
  onChange,
  onDark = false,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: onDark ? 'var(--text-inverse)' : 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '20px',
      height: '20px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'pointer'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--brand)' : onDark ? 'var(--ink-900)' : 'var(--white)',
      border: `1px solid ${on ? 'var(--brand)' : onDark ? 'var(--border-ondark)' : 'var(--border-default)'}`,
      transition: 'all var(--dur-fast) var(--ease-out)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.2 2.3L9.5 3.5",
    stroke: "var(--ink-950)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, hint, and error.
 */
function Input({
  label = '',
  hint = '',
  error = '',
  onDark = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const labelColor = onDark ? 'var(--text-inverse-muted)' : 'var(--text-body)';
  const borderColor = error ? 'var(--error-500)' : focus ? 'var(--brand)' : onDark ? 'var(--border-ondark)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h-md)',
      padding: '0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: onDark ? 'var(--white)' : 'var(--text-strong)',
      background: onDark ? 'var(--ink-900)' : 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      color: error ? 'var(--error-500)' : onDark ? 'var(--text-inverse-subtle)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native select styled to match the form family.
 */
function Select({
  label = '',
  hint = '',
  onDark = false,
  options = [],
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const caret = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" fill="none" stroke="${onDark ? '%23B8B1A6' : '%236B655E'}" stroke-width="1.6"/></svg>`);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-inverse-muted)' : 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-h-md)',
      padding: '0 38px 0 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      backgroundImage: `url("data:image/svg+xml,${caret}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: onDark ? 'var(--white)' : 'var(--text-strong)',
      background: onDark ? 'var(--ink-900)' : 'var(--white)',
      border: `1px solid ${focus ? 'var(--brand)' : onDark ? 'var(--border-ondark)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring)' : 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      color: onDark ? 'var(--text-inverse-subtle)' : 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — gold-track toggle. Controlled or uncontrolled.
 */
function Switch({
  label = '',
  checked,
  defaultChecked,
  onChange,
  onDark = false,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || React.useId();
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: onDark ? 'var(--text-inverse)' : 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '42px',
      height: '24px',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    onChange: e => {
      if (!isControlled) setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'pointer'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-full)',
      background: on ? 'var(--brand)' : onDark ? 'var(--ink-700)' : 'var(--ink-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: on ? '21px' : '3px',
      width: '18px',
      height: '18px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line field, matching Input styling.
 */
function Textarea({
  label = '',
  hint = '',
  error = '',
  onDark = false,
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const borderColor = error ? 'var(--error-500)' : focus ? 'var(--brand)' : onDark ? 'var(--border-ondark)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-inverse-muted)' : 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: '11px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: onDark ? 'var(--white)' : 'var(--text-strong)',
      background: onDark ? 'var(--ink-900)' : 'var(--white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      color: error ? 'var(--error-500)' : onDark ? 'var(--text-inverse-subtle)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteParts1.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Mavico marketing site — Nav, Hero, Clients, Stats */
const {
  Button,
  Eyebrow,
  Stat,
  Badge,
  Logo
} = window.MavicoDesignSystem_269fd1;
const ArrowRight = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 16 16",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2 8h11M9 4l4 4-4 4",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
function Nav({
  onNav
}) {
  const [open, setOpen] = React.useState(false);
  const links = ['Services', 'Approach', 'Work', 'Team'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(13,13,12,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-ondark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "light",
    size: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    },
    className: "mv-desktop-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    onClick: e => {
      e.preventDefault();
      onNav(l.toLowerCase());
    },
    style: {
      color: 'var(--text-inverse-muted)',
      textDecoration: 'none',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      letterSpacing: '0.02em',
      transition: 'color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--white)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-inverse-muted)'
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, null),
    onClick: () => onNav('contact')
  }, "Book a consult")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "mv-mobile-toggle",
    style: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 8
    },
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18",
    stroke: "var(--white)",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--gutter) var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      borderTop: '1px solid var(--border-ondark)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    onClick: e => {
      e.preventDefault();
      onNav(l.toLowerCase());
      setOpen(false);
    },
    style: {
      color: 'var(--white)',
      textDecoration: 'none',
      fontSize: 'var(--text-lg)',
      fontWeight: 600
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: () => {
      onNav('contact');
      setOpen(false);
    }
  }, "Book a consult")));
}
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-10%',
      right: '-5%',
      width: 520,
      height: 520,
      background: 'radial-gradient(circle, rgba(195,143,43,0.16), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: 'clamp(4rem,10vw,8rem) var(--gutter) clamp(4rem,8vw,7rem)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Management consulting"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      margin: '24px 0 0',
      maxWidth: 16 + 'ch'
    }
  }, "Clarity in ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)'
    }
  }, "complexity.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)',
      lineHeight: 1.55,
      color: 'var(--text-inverse-muted)',
      maxWidth: '46ch',
      margin: '28px 0 0'
    }
  }, "Mavico helps leadership teams make the hard calls \u2014 and turn strategy into results that show up on the balance sheet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 18
    }),
    onClick: () => onNav('contact')
  }, "Book a consult"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onDark: true,
    onClick: () => onNav('work')
  }, "See our work"))));
}
function Clients() {
  const names = ['NORTHWIND', 'AXIOM', 'MERIDIAN', 'VANTAGE', 'CALDERA', 'BRIGHTLINE'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ink-soft)',
      borderTop: '1px solid var(--border-ondark)',
      borderBottom: '1px solid var(--border-ondark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--space-5) var(--space-9)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-inverse-subtle)'
    }
  }, "Trusted by leaders at"), names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-lg)',
      letterSpacing: '0.14em',
      color: 'var(--ink-400)'
    }
  }, n))));
}
function Stats() {
  const data = [{
    value: '240',
    suffix: '+',
    label: 'Engagements delivered'
  }, {
    value: '$1.8',
    suffix: 'B',
    label: 'Value unlocked'
  }, {
    value: '3.4',
    suffix: 'x',
    label: 'Average ROI'
  }, {
    value: '94',
    suffix: '%',
    label: 'Clients return'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: '0 var(--gutter) clamp(3.5rem,7vw,6rem)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 'var(--space-7)',
      borderTop: '1px solid var(--border-ondark)',
      paddingTop: 'clamp(3.5rem,7vw,6rem)'
    }
  }, data.map(d => /*#__PURE__*/React.createElement(Stat, _extends({
    key: d.label
  }, d, {
    onDark: true
  })))));
}
Object.assign(window, {
  Nav,
  Hero,
  Clients,
  Stats,
  ArrowRight
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteParts1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteParts2.jsx
try { (() => {
/* Mavico marketing site — Services, Approach, Case study */
const {
  Button,
  Eyebrow,
  Card,
  Badge
} = window.MavicoDesignSystem_269fd1;
const SERVICE_ICONS = {
  strategy: "M3 21V8l9-5 9 5v13M9 21v-7h6v7",
  operations: "M12 15a3 3 0 100-6 3 3 0 000 6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2",
  technology: "M4 5h16v11H4zM2 20h20M9 9l-2 2 2 2M15 9l2 2-2 2",
  change: "M21 12a9 9 0 11-3-6.7M21 4v4h-4"
};
function Icon({
  d,
  size = 22,
  color = 'var(--brand)'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: color,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Services() {
  const items = [{
    k: 'strategy',
    tag: 'Strategy',
    title: 'Growth & corporate strategy',
    body: 'Where to play and how to win — backed by evidence, not opinion.'
  }, {
    k: 'operations',
    tag: 'Operations',
    title: 'Operating model & efficiency',
    body: 'Reshape how the organisation runs, decides, and delivers value.'
  }, {
    k: 'technology',
    tag: 'Technology',
    title: 'Digital & data',
    body: 'Turn data and platforms into durable competitive advantage.'
  }, {
    k: 'change',
    tag: 'Change',
    title: 'Transformation & change',
    body: 'Land the change for good — with the people who have to live it.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem,4vw,3rem)',
      lineHeight: 1.08,
      letterSpacing: '-0.015em',
      margin: '20px 0 0',
      color: 'var(--text-strong)'
    }
  }, "Four practices, one standard of rigour.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.k,
    accent: true,
    interactive: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gold-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: SERVICE_ICONS[it.k]
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    bar: false
  }, it.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-xl)',
      lineHeight: 1.2,
      margin: '10px 0 10px',
      color: 'var(--text-strong)'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, it.body))))));
}
function Approach() {
  const steps = [{
    n: '01',
    t: 'Diagnose',
    b: 'A focused two-week sprint to frame the real problem and align stakeholders on the prize.'
  }, {
    n: '02',
    t: 'Design',
    b: 'Options on the table, tested against evidence — then a clear, costed recommendation.'
  }, {
    n: '03',
    t: 'Deliver',
    b: 'We work shoulder-to-shoulder with your team to make the change stick.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "approach",
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "How we work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem,4vw,3rem)',
      lineHeight: 1.08,
      letterSpacing: '-0.015em',
      margin: '20px 0 var(--space-8)',
      maxWidth: '20ch'
    }
  }, "No thick decks. A method that moves."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      borderTop: '3px solid var(--brand)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-2xl)',
      color: 'var(--gold-400)',
      letterSpacing: '0.04em'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-xl)',
      margin: '12px 0 10px'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-inverse-muted)',
      maxWidth: '34ch'
    }
  }, s.b))))));
}
function CaseStudy({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    padding: "clamp(2rem,4vw,3rem)",
    interactive: true
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    solid: true
  }, "Manufacturing"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(1.6rem,3vw,2.25rem)',
      lineHeight: 1.12,
      margin: '18px 0 16px'
    }
  }, "Rebuilding the operating model of a $4B industrial group"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-inverse-muted)',
      maxWidth: '46ch'
    }
  }, "A 14-month transformation that took 31 days out of the order-to-cash cycle and lifted EBITDA by 18%."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--brand)'
    }
  }, "+18%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-inverse-subtle)',
      marginTop: 4
    }
  }, "EBITDA")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--brand)'
    }
  }, "\u221231"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-inverse-subtle)',
      marginTop: 4
    }
  }, "Cycle days"))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onDark: true,
    iconRight: /*#__PURE__*/React.createElement(window.ArrowRight, null),
    onClick: () => onNav('contact')
  }, "Read the case")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, [{
    tag: 'Financial services',
    t: 'A data platform that pays for itself in nine months',
    m: '$120M saved'
  }, {
    tag: 'Healthcare',
    t: 'Turning a stalled merger into one operating company',
    m: '11 → 1 systems'
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.t,
    interactive: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, c.tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-xl)',
      lineHeight: 1.2,
      margin: '14px 0 12px',
      color: 'var(--text-strong)'
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--brand-strong)',
      fontWeight: 600
    }
  }, c.m)))))));
}
Object.assign(window, {
  Services,
  Approach,
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteParts2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteParts3.jsx
try { (() => {
/* Mavico marketing site — Team, Contact, Footer */
const {
  Button,
  Eyebrow,
  Card,
  Avatar,
  Input,
  Textarea,
  Select,
  Checkbox,
  Logo,
  Badge
} = window.MavicoDesignSystem_269fd1;
function Team() {
  const people = [{
    name: 'Lena Okafor',
    role: 'Managing Partner'
  }, {
    name: 'Marcus Reed',
    role: 'Partner, Strategy'
  }, {
    name: 'Priya Nair',
    role: 'Partner, Operations'
  }, {
    name: 'Tomas Vidal',
    role: 'Partner, Technology'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '46ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The people"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem,4vw,3rem)',
      lineHeight: 1.08,
      letterSpacing: '-0.015em',
      margin: '20px 0 0',
      color: 'var(--text-strong)'
    }
  }, "Senior people, in the room.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '34ch',
      fontSize: 'var(--text-md)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "No pyramids of juniors. The partners you meet are the partners who do the work.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, people.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "var(--space-5)",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 56
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, p.role))))))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--surface-ink)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: 'clamp(4rem,8vw,7rem) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(2rem,5vw,5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Start a conversation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(2rem,4vw,3.25rem)',
      lineHeight: 1.06,
      letterSpacing: '-0.015em',
      margin: '20px 0 20px'
    }
  }, "Tell us where it hurts."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 1.6,
      color: 'var(--text-inverse-muted)',
      maxWidth: '38ch'
    }
  }, "A partner will reply within one business day. No forms-into-the-void, no junior screening call.")), /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    accent: true,
    padding: "clamp(1.75rem,3vw,2.5rem)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-full)',
      background: 'var(--gold-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    stroke: "var(--ink-950)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-2xl)',
      margin: '0 0 8px'
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-muted)',
      margin: 0
    }
  }, "We'll be in touch within a business day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Doe",
    onDark: true,
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Acme Inc.",
    onDark: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    onDark: true,
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    onDark: true,
    options: ['Strategy', 'Operations', 'Technology & data', 'Transformation', 'Not sure yet']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "A few lines on the challenge",
    rows: 3,
    placeholder: "We're trying to\u2026",
    onDark: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the Mavico brief (monthly)",
    onDark: true,
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(window.ArrowRight, {
      size: 18
    })
  }, "Send message")))));
}
function Footer({
  onNav
}) {
  const cols = [{
    h: 'Services',
    items: ['Strategy', 'Operations', 'Technology', 'Transformation']
  }, {
    h: 'Firm',
    items: ['About', 'Team', 'Careers', 'Insights']
  }, {
    h: 'Contact',
    items: ['hello@mavico.com', '+1 (212) 555-0142', 'New York · London']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-950)',
      color: 'var(--white)',
      borderTop: '1px solid var(--border-ondark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-2xl)',
      margin: '0 auto',
      padding: 'clamp(3rem,6vw,5rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(220px, 1.4fr) repeat(3, 1fr)',
      gap: 'var(--space-7)',
      alignItems: 'start'
    },
    className: "mv-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    tone: "light",
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      maxWidth: '30ch',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'var(--text-inverse-subtle)'
    }
  }, "Clarity in complexity. A consulting firm for leaders who would rather act than admire the problem.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBottom: 'var(--space-4)'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--text-inverse-muted)',
      textDecoration: 'none',
      fontSize: 'var(--text-sm)'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--border-ondark)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-inverse-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Mavico Partners. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookies"))));
}
Object.assign(window, {
  Team,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteParts3.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
