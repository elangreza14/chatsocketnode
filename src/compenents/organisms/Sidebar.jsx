import { toString } from "lodash";
import { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import {
  Contacs,
  Conversation,
  NewContactModal,
  NewConversationModal,
} from ".";

const CONVERSATION_KEY = "conversations";
const CONTACS_KEY = "contacs";

const Sidebar = (props) => {
  let { id } = props;
  const [activeKey, setActiveKey] = useState(CONVERSATION_KEY);
  const [openModal, setOpenModal] = useState(false);
  const conversationsOpen = activeKey === CONVERSATION_KEY;

  const closeModal = () => {
    setOpenModal(false);
  };
  console.log(id);
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACS_KEY}>Contacs</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACS_KEY}>
            <Contacs />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          <h6>
            Your ID: <span className="text-muted">{id ? id.name : null}</span>
          </h6>
        </div>
        <Button className="rounded-0" onClick={() => setOpenModal(true)}>
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
        <Modal show={openModal} onHide={closeModal}>
          {conversationsOpen ? (
            <NewConversationModal closeModal={closeModal} />
          ) : (
            <NewContactModal closeModal={closeModal} />
          )}
        </Modal>
      </Tab.Container>
    </div>
  );
};

export default Sidebar;
