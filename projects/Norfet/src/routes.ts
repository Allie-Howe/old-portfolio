import { EventsPage } from './components/EventsPage';
import { GroupsPage } from './components/GroupsPage';
import { HomePage } from './components/HomePage';

export const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/events/",
    name: "Events",
    component: EventsPage
  },
  {
    path: "/groups/",
    name: "Groups",
    component: GroupsPage
  },
]
