import {create} from "zustand";

export interface ILocationType {
    lat: number,
    lng: number
}

export interface ILocationStore {
    location: ILocationType
    setLocation: (location: ILocationType) => void
}

export const useLocationStore = create<ILocationStore>((set) => ({
    location: {
        lat: -3.745,
        lng: -38.523
    },
    setLocation: (location: ILocationType) => {
        set({location})
    }
}))