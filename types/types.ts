export interface MenuItem {
  pageId: string
  title: string
}

export const MENU_ITEMS: MenuItem[] = [
  {
    pageId: 'info',
    title: 'Informationen',
  },
  {
    pageId: 'news',
    title: 'News',
  },
  {
    pageId: 'musikfest',
    title: 'Musikfest',
  },
  {
    pageId: 'gastgeber',
    title: 'Gastgeber',
  },
  {
    pageId: 'helfen',
    title: 'Helfen',
  },
  {
    pageId: 'sponsoring',
    title: 'Sponsoring',
  },
]

export const INFO_ITEMS: MenuItem[] = [
  {
    pageId: '/info/festprogramm',
    title: 'Festprogramm',
  },
  {
    pageId: '/info/unterhaltung',
    title: 'Unterhaltungsprogramm',
  },
  {
    pageId: '/info/vereine',
    title: 'Teilnehmende Vereine',
  },
  {
    pageId: '/info/zeitplan',
    title: 'Wettspiel Spielplan',
  },
  {
    pageId: '/info/karte',
    title: 'Festareal',
  },
  {
    pageId: '/info/gut-zu-wissen',
    title: 'Gut zu wissen',
  },
]

export const HOME_ITEMS: MenuItem[] = [
  {
    pageId: '/info/festprogramm',
    title: 'Festprogramm',
  },
  {
    pageId: '/info/unterhaltung',
    title: 'Unterhaltungsprogramm',
  },
  {
    pageId: '/info/vereine',
    title: 'Teilnehmende Vereine',
  },
  {
    pageId: '/info/zeitplan',
    title: 'Wettspiel Spielplan',
  },
]
