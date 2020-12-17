import React from 'react';
export var If = React.memo(function (props) { return (props.is ? React.createElement(React.Fragment, null, props.children) : props.else ? React.createElement(React.Fragment, null, props.else) : null); });
//# sourceMappingURL=If.js.map