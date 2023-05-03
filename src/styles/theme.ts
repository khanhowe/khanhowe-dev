import { ThemeChoices } from '@/types/utils';
import { createTheme } from '@mui/material/styles';

const PRIMARY_THEME_COLOR_LIGHT = '#FF8400';
const PRIMARY_THEME_COLOR_DARK = '#150050';

const SECONDARY_THEME_COLOR_LIGHT = '#FFD93D';
const SECONDARY_THEME_COLOR_DARK = '#3F0071';

const BACKGROUND_THEME_COLOR_LIGHT = '#F6F1E9';
const BACKGROUND_THEME_COLOR_DARK = '#000000';

const TEXT_PRIMARY_COLOR_LIGHT = '#000000';
const TEXT_PRIMARY_COLOR_DARK = '#FFFFFF';

const TEXT_SECONDARY_COLOR_LIGHT = '#4A4A4A';
const TEXT_SECONDARY_COLOR_DARK = '#BEBEBE';

const createMyTheme = (mode: ThemeChoices) => {
    const isLight = mode === ThemeChoices.light;
    
    const headerStyles = {
      color: isLight ? '#4F200D' : '#150050',
    };
    
    return createTheme({
        palette: {
            mode,
            primary: {
                main: isLight ? PRIMARY_THEME_COLOR_LIGHT : PRIMARY_THEME_COLOR_DARK,
            },
            secondary: {
                main: isLight ? SECONDARY_THEME_COLOR_LIGHT : SECONDARY_THEME_COLOR_DARK,
            },
            background: {
                default: isLight ? BACKGROUND_THEME_COLOR_LIGHT : BACKGROUND_THEME_COLOR_DARK,
            },
            text: {
                primary: isLight ? TEXT_PRIMARY_COLOR_LIGHT : TEXT_PRIMARY_COLOR_DARK,
                secondary: isLight ? TEXT_SECONDARY_COLOR_LIGHT : TEXT_SECONDARY_COLOR_DARK,
            },
        },
        components: {}
    });
};

export default createMyTheme;