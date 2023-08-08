import {EquiObj} from "../types/Sensors";

export const API_URL = "https://smartcrechebackend.onrender.com/api";

export const equiObj: EquiObj = {
    "CO2": {high: 1500, low: 0},
    "Brightness": {high: 3000, low: 0},
    "Temperature": {high: 40, low: 0},
    "Humidity": {high: 100, low: 0}
};