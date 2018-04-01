import React from "react";
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.selected = this.answerValues.reduce(
      (obj, curr) => ({ ...obj, [curr]: true }),
      {}
    );

    this.handleChange = this.handleChange.bind(this);
  }

  get answerValues() {
    const { answerValues = [] } = this.props.checked || {};
    return answerValues;
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
    const { name, label, options } = this.props;
    return (
      <div className="form-wrapper">
        <h2>{label}</h2>

        {options.map(option => {
          let tick = this.answerValues.find(answer => answer == option.id);
// console.log(answerValues);
console.log(this.props.checked);
console.log(tick);
          return (
            <div className="form-wrapper-label" key={option.id}>
              <label>
                <input
                  type="checkbox"
                  className="form-wrapper-check"
                  name={name}
                  value={option.id}
                  onChange={e => this.handleChange(e, option.id)}
                  checked={option.id == tick}
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
