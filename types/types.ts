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
    pageId: 'helfer',
    title: 'Helfer',
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
