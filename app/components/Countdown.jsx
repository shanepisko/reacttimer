var React = require('react');

var Countdown = (props) => {
  return (
    <div>
      <div>
        <div>
          countdown component
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Countdown;
