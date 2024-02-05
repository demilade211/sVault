export const selectStyle = {
    control: (base) => ({
        ...base,
        width:"197px",
        height: "41px",
        borderRadius: "10px",
        border: "none",
        background: "rgba(255, 255, 255, 0.12)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        '&:hover': {
            border: "1px solid #D0D3D8",
        },
        outline: "none",
        fontFamily: "'Poppins', sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        color: "#FFF",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    placeholder: (base) => ({
        ...base,
        color: "rgba(255, 255, 255, 0.5)",
        whiteSpace: "nowrap"
    }),
    input: (base) => ({
        ...base,
        color: "#fff",
    }),
    singleValue: (base) => ({
        ...base,
        color: "#fff",
    }),
};