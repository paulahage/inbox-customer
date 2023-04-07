import { SideNavbar } from "./components/sideNavbar/SideNavbar";
import { TicketList } from "./components/ticketList/TicketList";
import ChatBox from "./components/chatBox/ChatBox";

import "./App.scss";

function App() {
  return (
    <div className="home">
      <SideNavbar />
      <TicketList />
      <ChatBox/>
    </div>
  );
}

export default App;
