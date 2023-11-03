import { create } from 'zustand';

type Store = {
  specialClickCount: number;
  inc: () => void;
  tagLineNumber: number;
  incTagLineNumber: () => void;
};

const useStore = create<Store>()((set) => ({
  specialClickCount: 0,
  tagLineNumber: 0,
  inc: () =>
    set((state) => ({ specialClickCount: state.specialClickCount + 1 })),
  incTagLineNumber: () => {
    set((state) => ({ tagLineNumber: (state.tagLineNumber + 1) % 3 }));
    set(() => ({ specialClickCount: 0 }));
  },
}));

// export useStore;
export default useStore;
