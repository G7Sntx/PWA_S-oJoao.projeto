tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "primary": "#FFB800",       
        "secondary": "#E35205",         
        "background": "#040b1a",       
        
        "surface": "#040b1a",
        "surface-dim": "#040b1a",
        "surface-bright": "#1f2a41",
        "surface-variant": "#1c263d",
        "surface-container-lowest": "#020814",
        "surface-container-low": "#0a162b",
        "surface-container": "#0c1b36",
        "surface-container-high": "#152445",
        "surface-container-highest": "#1c263d",
        
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-background": "#fdf8ef",
        "on-surface": "#fdf8ef",
        "on-surface-variant": "#d5c4ab",
        "on-primary-container": "#ffffff",
        "on-secondary-container": "#ffffff",
        
        "primary-container": "#E35205",
        "secondary-container": "#8b0000",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6",
        
        "primary-fixed": "#ffdea8",
        "primary-fixed-dim": "#FFB800",
        "secondary-fixed": "#ffdbd1",
        "secondary-fixed-dim": "#E35205",
        "tertiary": "#e1e1e1",
        "tertiary-fixed-dim": "#b0b8c8", // ✅ cor adicionada, usada nos ícones de local/horário
        "outline": "#514532",
        "outline-variant": "#413626"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "margin": "20px",
        "xl": "64px",
        "sm": "12px",
        "md": "24px",
        "xs": "4px",
        "gutter": "16px",
        "base": "8px",
        "lg": "40px"
      },
      "fontFamily": {
        "headline-lg": ["Newsreader"],
        "headline-xl": ["Newsreader"],
        "label-bold": ["Be Vietnam Pro"],
        "body-lg": ["Be Vietnam Pro"],
        "headline-md": ["Newsreader"],
        "body-md": ["Be Vietnam Pro"],
        "label-sm": ["Be Vietnam Pro"]
      },
      "fontSize": {
        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
        "headline-xl": ["40px", { "lineHeight": "48px", "fontWeight": "700" }],
        "label-bold": ["14px", { "lineHeight": "20px", "letterSpacing": "0.5px", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
      }
    }
  }
};