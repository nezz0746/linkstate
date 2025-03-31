import { MessageProvider } from "~/src/contexts/MessageContext";
import { MessageModal } from "~/src/components/MessageModal";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MessageProvider>
      <div>{children}</div>
      <MessageModal />
    </MessageProvider>
  );
};

export default UsersLayout;
