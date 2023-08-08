export interface EquiObjItem {
    sensor_id?: string;
    high: number;
    low: number;
    values?: {
        value?: number;
    }
    unit?: string;
}

export interface EquiObj {
    [key: string]: EquiObjItem;
}