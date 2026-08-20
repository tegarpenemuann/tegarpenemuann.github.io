// ============================================================
// TERJEMAHAN UI — string antar-muka per bahasa
// ============================================================

export const defaultLocale = 'id';
export type Locale = 'id' | 'en';

export const ui = {
  id: {
    'nav.about': 'Tentang',
    'nav.experience': 'Pengalaman',
    'nav.projects': 'Proyek',
    'section.about': 'Tentang Saya',
    'section.experience': 'Pengalaman Kerja',
    'section.projects': 'Proyek Pilihan',
    'about.skills': 'Beberapa teknologi yang biasa saya gunakan:',
    'projects.source': 'Kode Sumber',
    'projects.demo': 'Demo',
    'projects.cta': 'Mari Terhubung di LinkedIn',
    'footer.credit':
      'Dirancang dan dibangun dengan Astro & Tailwind CSS oleh',
    'lang.label': 'Bahasa',
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'section.about': 'About Me',
    'section.experience': 'Work Experience',
    'section.projects': 'Featured Projects',
    'about.skills': 'Technologies I usually work with:',
    'projects.source': 'Source',
    'projects.demo': 'Demo',
    'projects.cta': "Let's Connect on LinkedIn",
    'footer.credit': 'Designed and built with Astro & Tailwind CSS by',
    'lang.label': 'Language',
  },
} as const;

export type UiKey = keyof typeof ui.id;

export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}