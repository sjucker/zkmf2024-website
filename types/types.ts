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
