import React, { Component } from "react";
import ReactVirtualKeyboard from "./ReactVirtualKeyboard";

class Example extends Component {
  state = {
    model: {
      calculate: "",
    },
    currentInputElement: null
  };
  update = (key, value) => {
    this.setState({ model: { ...this.state.model, [key]: value } });
  };
  render() {
    const { model, currentInputElement } = this.state;
    return (
      <div className="card border-info">
        <h5 className="card-header bg-info">Your Virtual Keyboard is ready</h5>
        <div className="card-body">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="card mb-2">
              <div className="card-body">
                <form className="form-inline">
                  <label htmlFor="calculate" className="mr-2">
                    Desired Operations:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="calculate"
                    name="Desired Operations"
                    value={model.calculate}
                    onFocus={e =>
                      this.setState({ currentInputElement: e.target })
                    }
                    onChange={e => {
                      this.update("calculate", e.target.value);
                    }}
                    autoFocus
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="row h-100 justify-content-center align-items-center px-2 py-2">
            <div className={window.innerWidth > 800 ? "w-75 p-3" : "w-100"}>
              <ReactVirtualKeyboard
                updateHandler={this.update}
                input={currentInputElement}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;