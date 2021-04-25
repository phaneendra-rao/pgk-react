import { createPortal } from "react-dom";

const PortalModal = (props) => {

    const element = document.getElementById('modal');
    return createPortal(props.children, element);
};

export default PortalModal;