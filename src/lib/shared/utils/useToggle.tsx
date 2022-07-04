import React from "react";

export default function useToggle(init?: boolean) {
  const [open, setOpen] = React.useState<boolean>(init ?? false);
  const toggleOpen = React.useCallback(() => {
    setOpen((p) => !p);
  }, []);
  return {
    isOpen: open,
    toggleOpen: toggleOpen,
  };
}
