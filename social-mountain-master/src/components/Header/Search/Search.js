import React, { Component } from "react";
import Post from "../../Post/Post";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unFilteredArray: [JSON.stringify(Post.text)],
			userInput: "",
			filteredArray: [],
		};
	}

	handleChange(e) {
		this.setState({ userInput: e });
	}
	handleClick(input) {
		let strings = this.state.unFilteredArray;
		let filteredStrings = [];
		for (let i = 0; i < strings.length; i++) {
			if (strings[i].includes(input)) {
				filteredStrings.push(strings[i]);
			}
		}
		this.setState({ filteredArray: filteredStrings });
	}

	render() {
		return (
			<section className="Search__parent">
				<div className="Search__content">
					<input
						placeholder="Search Your Feed"
						onChange={(e) => this.handleChange(e.target.value)}
					/>

					<SearchIcon
						id="Search__icon"
						onClick={() => this.handleClick(this.state.userInput)}
					/>
				</div>
			</section>
		);
	}
}
