// @flow
/* eslint flowtype/require-return-type: 0*/
/* eslint no-inline-comments: 0*/

import React from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import type {ClassesType} from '../../types/classes';

export type DialogFullScreenPropsType = {
	classes?: ClassesType,
	onClose: () => void,
};
export type DialogFullScreenStateType = {
	open: boolean,
};

const styles = {
	appBar: {
		position: 'relative',
	},
	flex: {
		flex: 1,
	},
};

function Transition(props: Object): React$Element<*> {
	return <Slide direction="up" {...props} />;
}

class DialogFullScreen extends React.Component<DialogFullScreenPropsType, DialogFullScreenStateType> {
	state = {
		open: true,
	};

	handleClickOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
		this.props.onClose();
	};

	render() {
		const {classes = {}} = this.props;
		return (
			<div>
				{/* $FlowFixMe */}
				<Dialog fullScreen open={this.state.open} onClose={this.handleClose} transition={Transition}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton color="contrast" onClick={this.handleClose} aria-label="Close">
								<CloseIcon />
							</IconButton>
							<Typography type="title" color="inherit" className={classes.flex}>
								Sound
							</Typography>
							<Button color="contrast" onClick={this.handleClose}>
								save
							</Button>
						</Toolbar>
					</AppBar>
					{/* $FlowFixMe */}
					<List>
						<ListItem button>
							<ListItemText primary="Phone ringtone" secondary="Titania" />
						</ListItem>
						<Divider />
						<ListItem button>
							<ListItemText primary="Default notification ringtone" secondary="Tethys" />
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(DialogFullScreen);
