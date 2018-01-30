import React from 'react';
import { Slide, Button } from 'material-ui';
// import CloseIcon from "material-ui-icons/Close";
import Snackbar from 'material-ui/Snackbar';
import { Notification } from "./../Data";

class PositionedSnackbar extends React.Component {
    constructor() {
        super();

        this.state = {
            open: true,
            vertical: 'top',
            horizontal: 'center'
        };
        // if (localStorage.getItem("Notified") != Notification['ID']) {
        //     this.state.open = true;
        //     localStorage.setItem('Notified', Notification['ID']);
        // } else {
        //     this.state.open = false;
        // }
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    transitionDown = (props) => {
        return <Slide direction="down" {...props} />;
    };

    render() {
        const { vertical, horizontal, open } = this.state;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    transition={this.transitionDown}
                    autoHideDuration={4000}
                    action={<Button key="undo" color="accent" dense onClick={this.handleClose}>
                        <b> CLOSE</b>
                    </Button>}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{
                        Notification['Text']
                    }</span>}
                />
            </div>
        );
    }
}

export default PositionedSnackbar;