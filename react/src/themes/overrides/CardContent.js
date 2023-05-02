// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function CardContent() {
    return {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: 24,
                    '&:last-child': {
                        paddingBottom: 24
                    }
                }
            }
        }
    };
}
