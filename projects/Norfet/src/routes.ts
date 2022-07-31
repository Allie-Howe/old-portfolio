import { EventsPage } from './components/EventsPage';
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
]
