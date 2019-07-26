import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      userInput: "",
      showNote: false,
      editHandleChange: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitNote = this.submitNote.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: "✍" + val });
  }

  submitNote() {
    axios
      .post("/api/notes", { note: this.state.userInput })
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log("FUCK! There was an error"));
  }

  render() {
    const { notes, showNote } = this.state;
    const viewNotes = notes.map(note => {
      return (
        <div>
          <p onClick={() => this.toggleInput()}>{note.note}</p>
          {showNote ? (
            <div>
              <input
                class="edit-input"
                onChange={event => {
                  this.editHandleChange(event.target.value);
                }}
              />
              <button
                class="edit-button"
                onClick={() => {
                  this.changeNote(note.id);
                }}
              >
                Edit
              </button>
            </div>
          ) : null}
        </div>
      );
    });
    return (
      <div>
        <h3>Notes</h3>
        <input
          onChange={event => {
            this.handleChange(event.target.value);
          }}
        />
        <button
          onClick={() => {
            this.submitNote();
          }}
        >
          Submit
        </button>
        <p class="notes">{viewNotes}</p>
      </div>
    );
  }
}
