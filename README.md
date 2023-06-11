# React Modal npm Package

React Modal is a lightweight npm package that provides a modal component for displaying congratulatory messages in React applications.

## Installation

To install React Modal, you can use npm or yarn:

npm install @djoudi21/react-modal-oc

or

yarn install @djoudi21/react-modal-oc

## Usage

Import the Modal component in your React application:

```js
import React from "react";
import Modal from "react-modal-component";

function App() {
    const [modalOpen, setModalOpen] = React.useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
            <Modal display={modalOpen} closeModal={closeModal} />
        </div>
    );
}

export default App;
```

The Modal component accepts two props:

- 'display' (boolean): Flag indicating whether the modal should be displayed or hidden.
- 'closeModal' (function): Callback function to close the modal.





