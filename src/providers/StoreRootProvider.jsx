import React from "react";
import { RootStore } from "../stores/RootStore";

let rootStore;

const StoreContext = React.createContext();

/**
 * Component to envolve all app 
*/
export const StoreProvider = ({ children, store }) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

/**
 * Component to envolve all app including the store in order to encapsulate the store instantiation
*/
export const StoreRootProvider = ({ children }) => {
    const root = rootStore ?? new RootStore();
    return (
        <StoreContext.Provider value={root}>{children}</StoreContext.Provider>
    );
};

/**
 * Hook to use store in any functional component
 * 
 * @returns {RootStore}
 */
export const useStore = () => React.useContext(StoreContext);

/**
 * HOC to inject store to any functional or class component
 */
export const withStore = (Component) => (props) => {
    return <Component {...props} store={useStore()} />;
};

/**
 * Function to destructure store
 */
export function useAppStore () {
    const { appStore } = useStore();
    return appStore;
}