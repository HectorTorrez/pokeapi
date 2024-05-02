/* eslint-disable react/react-in-jsx-scope */

interface DeleteButtonProps {
  onDelete: () => void;
  children: React.ReactNode;
  className: string;
}

function DeleteButton({ onDelete, children, className }: DeleteButtonProps) {
  return (
    <button className={className} onClick={() => onDelete()}>
      {children}
    </button>
  );
}

export default DeleteButton;
