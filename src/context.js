import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = (props)=>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const openSidebar=()=>{
        setIsSidebarOpen(true);
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false);
    }
    const openModal=()=>{
        setIsModalOpen(true);
    }
    const closeModal=()=>{
        setIsModalOpen(false);
    }
    const passValue={ isSidebarOpen,
                        isModalOpen,
                        openSidebar,
                        openModal,
                        closeSidebar,
                        closeModal
                    };
    return <AppContext.Provider value={passValue}>
       {props.children}
    </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};
