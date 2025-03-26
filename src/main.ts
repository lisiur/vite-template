import { createApp } from "vue";
import "./style.css";
import App from "./App";
import { i18n } from "@/i18n";

createApp(App).use(i18n).mount("#app");
