import {isProd} from "./misc";


export const API = (isProd()) ? "https://api.faiyt.dev " : "http://localhost:4000"
