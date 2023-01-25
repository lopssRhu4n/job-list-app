import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faCalendarDays,
  faCircleUser,
  faCode,
  faEnvelope,
  faHome,
  faPenToSquare,
  faPhone,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faHome,
  faUserTie,
  faCode,
  faUser,
  faCircleUser,
  faPhone,
  faEnvelope,
  faCalendarDays,
  faLinkedin,
  faGithub,
  faPenToSquare
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
