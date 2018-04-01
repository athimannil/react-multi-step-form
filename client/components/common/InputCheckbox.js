import React from "react";

class InputCheckbox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event, optionID) {
    this.selected = this.selected || {};

    if (event.target.checked) {
      this.selected[optionID] = true;
    } else {
      delete this.selected[optionID];
    }

    this.props.onChange({
      questionID: this.props.name,
      answerValues: Object.keys(this.selected)
    });
  }

  render() {
    const { name, label, options  } = this.props;
    return (
      <div className="form-wrapper">
        <h2>{label}</h2>

        {options.map(option => {
          return (
            <div className="form-wrapper-label" key={option.id}>
              <label>
                <input
                  type="checkbox"
                  className="form-wrapper-check"
                  name={name}
                  value={option.id}
                  onChange={e => this.handleChange(e, option.id)}
                />{' '}
                {option.value}
              </label>
            </div>
          );
        })}
      </div>
    );
  };
}
export default InputCheckbox;
