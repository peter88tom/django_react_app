/*
This code create CustomModal class and it nests the Modal component that is derived from the reactstrap library
We define also three fields in the form

The CustomModal receives activeItem, toggle and onSave as props
 	*activeItem represent the Todo item to be edited
 	*toggle is a function used to control the modal's state(i.e, open or close the modal)
	*onSave is a function that is called to save the edited values of the Todo item.
*/

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap"


export default class CustomModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: this.props.activeItem,
		};

	}


	handleChange = (e) => {
		let { name, value } = e.target;

		if (e.target.type === "checkbox") {
			value = e.target.checked;
		}

		const activeItem = { ...this.state.activeItem, [name]: value };
		this.setState({ activeItem });
	};


	render() {
		const { toggle, onSave } = this.props;


		return (
			<Modal isOpen={true} toggle={toggle}>
				<ModalHeader toggle={toggle}>Todo Item</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="todo-title">Title</Label>
							<Input 
								type="text"
								id="todo-title"
								name="title"
								value={this.state.activeItem.title}
								onChange={this.handleChange}
								placeholder="Enter Todo Title"
							/>
						</FormGroup>

						<FormGroup>
							<Label for="todo-description">Description</Label>
							<Input 
								type="text"
								id="todo-description"
								name="description"
								value={this.state.activeItem.description}
								onChange={this.handleChange}
								placeholder="Enter Todo description"
							/>
						</FormGroup>

						<FormGroup check>
							<Label check>
								<Input
								 type="checkbox"
								 name="completed"
								 checked={this.state.activeItem.completed}
								 onChange={this.handleChange}
								 />
							</Label>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button
						color="success"
						onClick={() => onSave(this.state.activeItem)}
					> Save
					</Button>
				</ModalFooter>
			</Modal>
		);
	}



}