

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {

    };
    this.submitForm = () => e => {
      e.preventDefault();
      this.props.onSubmit();
    };
  }

  render() {
    return (
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }
}
