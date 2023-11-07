interface DeleteButtonProps {
    onClick: () => void;
  }
  
  import { TrashFill } from "react-bootstrap-icons";
  
  export const DeleteButton = ({ onClick }: DeleteButtonProps) => {
    return (
      <TrashFill
        color="#FF2D03"
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
  