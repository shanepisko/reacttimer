var React = require('react');

var Timer = (props) => {
  return (
    <div>
      <div>
        <div>
          timer component
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Timer;
