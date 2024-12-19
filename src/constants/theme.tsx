import { MD3DarkTheme, MD3Theme } from 'react-native-paper';
import { configuredFonts } from './fonts';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const COLORS = {
    black: "#0C0F14",
    white: "#FFFFFF",
    white_60: "rgba(255, 255, 255, 0.2)",
    gray: "#374151",
    pink_black: "#0C0F14",
    divider: "#B6B7B8",
    black_white: "#B6B7B8",
    black_transparent: "#0a0a0ab8",
    white_transparent: "#fdf5f51f",
    black_card: "#161A22",
    frame_sliver: "rgba(133, 133, 133, 0.57)",
    deep_purple: "#3F0D40",
    magenta_pink: "#FF2D89",
    silver_gray: "#B6B7B8",
    silver_white: "#ffffffbf",
    silver_black: "#2393E5",
    check_green: '#33CE59',
    charcoal_black: "#1B1D22",
    spring_green: "#97DE3D",
    turquoise: "#EBF2F2",
    royal_blue: "#3478F5",
    light_pink: "rgba(248, 113, 113, 0.2)"
};

export const FONTS = {
    _400Regular: {
        fontFamily: "Inter-Black",
    },
    _500Medium: {
        fontFamily: "Inter-Black",
    },
    _600Medium: {
        fontFamily: "Inter-Black",
    },
    _700Bold: {
        fontFamily: "Inter-Black",
    },
}
export const paperTheme: MD3Theme = {
    ...MD3DarkTheme,
    fonts: configuredFonts,
    colors: {
        ...MD3DarkTheme.colors,
        primary: COLORS.magenta_pink,
        background: COLORS.charcoal_black,
        surface: COLORS.charcoal_black,
        onSurface: COLORS.white,
        onPrimary: COLORS.white,
        secondary: COLORS.charcoal_black,
    },
    roundness: 10,
};
