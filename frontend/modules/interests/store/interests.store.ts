import {create} from 'zustand'

interface InterestsStore {
    selectedInterestsIds: string[];
    toggleInterest: (id: string) => void;
    isSelected: (id: string) => boolean;
}

export const useInterestStore = create<InterestsStore>((set, get) => ({
    selectedInterestsIds: [],
    isSelected: (id) => {
        return get().selectedInterestsIds.includes(id);
    },
    toggleInterest: (id) => {
        const {selectedInterestsIds} = get();
        if (selectedInterestsIds.includes(id)) {
            set({selectedInterestsIds: selectedInterestsIds.filter((i) => i !== id)});
        } else {
            set({
                selectedInterestsIds: [...selectedInterestsIds, id
                ]
            })
        }

    }
}))
