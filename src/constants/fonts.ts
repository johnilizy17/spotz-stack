import { Platform } from 'react-native';
import { configureFonts } from 'react-native-paper';

export const SFProDisplayRegular = Platform.select({
  ios: 'SFProDisplay-Regular',
  default: 'SFPRODISPLAYREGULAR',
});

export const SFProDisplayMedium = Platform.select({
  ios: 'SFProDisplay-Medium',
  default: 'SFPRODISPLAYMEDIUM',
});

export const SFProDisplaySemibold = Platform.select({
  ios: 'SFProDisplay-Semibold',
  default: 'SFPRODISPLAYSEMIBOLD',
});

export const SFProDisplayBold = Platform.select({
  ios: 'SFProDisplay-Bold',
  default: 'SFPRODISPLAYBOLD',
});

export const configuredFonts = configureFonts({
  config: {
    displaySmall: {
      fontFamily: SFProDisplayRegular,
      fontSize: 36,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 44,
    },
    displayMedium: {
      fontFamily: SFProDisplayRegular,
      fontSize: 45,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 52,
    },
    displayLarge: {
      fontFamily: SFProDisplayRegular,
      fontSize: 57,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 64,
    },
    headlineSmall: {
      fontFamily: SFProDisplayRegular,
      fontSize: 24,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 32,
    },
    headlineMedium: {
      fontFamily: SFProDisplayRegular,
      fontSize: 28,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 36,
    },
    headlineLarge: {
      fontFamily: SFProDisplayRegular,
      fontSize: 32,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 40,
    },
    titleSmall: {
      fontFamily: SFProDisplayMedium,
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 0.1,
      lineHeight: 20,
    },
    titleMedium: {
      fontFamily: SFProDisplayMedium,
      fontSize: 16,
      fontWeight: '500',
      letterSpacing: 0.15,
      lineHeight: 24,
    },
    titleLarge: {
      fontFamily: SFProDisplayMedium,
      fontSize: 22,
      fontWeight: '400',
      letterSpacing: 0,
      lineHeight: 28,
    },
    labelSmall: {
      fontFamily: SFProDisplayMedium,
      fontSize: 11,
      fontWeight: '500',
      letterSpacing: 0.5,
      lineHeight: 16,
    },
    labelMedium: {
      fontFamily: SFProDisplayMedium,
      fontSize: 12,
      fontWeight: '500',
      letterSpacing: 0.5,
      lineHeight: 16,
    },
    labelLarge: {
      fontFamily: SFProDisplayMedium,
      fontSize: 14,
      fontWeight: '500',
      letterSpacing: 0.1,
      lineHeight: 20,
    },
    bodySmall: {
      fontFamily: SFProDisplayRegular,
      fontSize: 12,
      fontWeight: '400',
      letterSpacing: 0.4,
      lineHeight: 16,
    },
    bodyMedium: {
      fontFamily: SFProDisplayRegular,
      fontSize: 14,
      fontWeight: '400',
      letterSpacing: 0.25,
      lineHeight: 20,
    },
    bodyLarge: {
      fontFamily: SFProDisplayRegular,
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 0.15,
      lineHeight: 24,
    },
  },
});
