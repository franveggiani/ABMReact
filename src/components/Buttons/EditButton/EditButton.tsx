interface EditButtonProps {
  onClick: () => void;
}

import { PencilFill } from "react-bootstrap-icons";

export const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <PencilFill
      color="#A3A3A3"
      size={24}
      onClick={onClick}
      onMouseEnter={() => {
        document.body.style.cursor = "pointer";
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "default";
      }}
    />
  );
};
