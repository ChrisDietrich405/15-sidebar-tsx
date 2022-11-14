import React, { useState, useContext, createContext, ReactNode } from "react";

interface ISidebar {
  isModalOpen: boolean;
  isSidebarOpen: boolean;
  handleCloseSidebar: () => void;
  handleOpenSidebar: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

interface Props {
  children?: ReactNode;
}

export const AppContext = createContext<ISidebar>({
  isModalOpen: false,
  isSidebarOpen: false,
  handleCloseSidebar: () => {},
  handleOpenSidebar: () => {},
  handleCloseModal: () => {},
  handleOpenModal: () => {},
});

export const AppProvider = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isModalOpen, isSidebarOpen, handleCloseSidebar, handleOpenSidebar, handleOpenModal, handleCloseModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
