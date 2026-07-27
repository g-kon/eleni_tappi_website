tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "inverse-primary": "#ffb874",
                "on-surface-variant": "#554334",
                "on-tertiary": "#ffffff",
                "primary-container": "#ff9500",
                "secondary-fixed": "#dee1ff",
                "inverse-on-surface": "#f0f1f2",
                "secondary-fixed-dim": "#b9c3ff",
                "on-secondary-container": "#223589",
                "on-secondary-fixed": "#001258",
                "secondary-container": "#92a3fd",
                "tertiary-fixed-dim": "#6cd6df",
                "on-background": "#191c1d",
                "on-secondary": "#ffffff",
                "on-tertiary-fixed": "#002022",
                "primary-fixed": "#ffdcbf",
                "on-primary": "#ffffff",
                "outline-variant": "#dbc2ad",
                "surface": "#f8f9fa",
                "surface-container-highest": "#e1e3e4",
                "on-primary-fixed-variant": "#6a3b00",
                "tertiary": "#006970",
                "primary": "#8c5000",
                "surface-container-high": "#e7e8e9",
                "on-error": "#ffffff",
                "primary-fixed-dim": "#ffb874",
                "on-primary-fixed": "#2d1600",
                "surface-dim": "#d9dadb",
                "on-tertiary-fixed-variant": "#004f54",
                "surface-container": "#edeeef",
                "surface-variant": "#e1e3e4",
                "tertiary-fixed": "#8af3fc",
                "on-error-container": "#93000a",
                "outline": "#887361",
                "surface-bright": "#f8f9fa",
                "secondary": "#4658ac",
                "tertiary-container": "#52bec7",
                "error": "#ba1a1a",
                "surface-container-lowest": "#ffffff",
                "on-tertiary-container": "#004a4f",
                "surface-container-low": "#f3f4f5",
                "inverse-surface": "#2e3132",
                "error-container": "#ffdad6",
                "on-secondary-fixed-variant": "#2d3f93",
                "on-surface": "#191c1d",
                "surface-tint": "#8c5000",
                "on-primary-container": "#643700",
                "background": "#f8f9fa"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "margin-mobile": "1rem",
                "stack-sm": "0.5rem",
                "stack-md": "1.5rem",
                "section-padding": "5rem",
                "container-max": "1200px",
                "stack-lg": "3rem",
                gutter: "1.5rem"
            },
            fontFamily: {
                "headline-lg-mobile": ["Montserrat", "Inter", "sans-serif"],
                "body-lg": ["Inter", "sans-serif"],
                "headline-md": ["Montserrat", "Inter", "sans-serif"],
                "body-md": ["Inter", "sans-serif"],
                "headline-lg": ["Montserrat", "Inter", "sans-serif"],
                "headline-xl": ["Montserrat", "Inter", "sans-serif"],
                "label-sm": ["Inter", "sans-serif"]
            },
            fontSize: {
                "headline-lg-mobile": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
                "headline-xl": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
                "label-sm": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }]
            }
        }
    }
};
