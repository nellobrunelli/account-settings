import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left'
};

const dustbinTarget = {
  drop(props, monitor) {
      props.onDrop(monitor.getItem());
  }
};

@DropTarget(props => props.accepts, dustbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
export default class Dustbin extends Component {

  // componentWillReceiveProps(nextProps) {
  //    console.log('Dustbin.js');
  //    console.log(nextProps);
  // }

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    accepts: PropTypes.arrayOf(PropTypes.string).isRequired,
    lastDroppedItem: PropTypes.object,
    onDrop: PropTypes.func.isRequired
  };

  // debug
  // componentDidMount() {
  //  console.log("");
  //  console.log(this.props);
  // }

  render() {
      const { isOver, canDrop, connectDropTarget, lastDroppedItem } = this.props;
      const isActive = isOver && canDrop;

      let backgroundColor = 'black';
      if (isActive) {
          backgroundColor = 'darkgreen';
      } else if (canDrop) {
          backgroundColor = 'darkkhaki';
      }

      return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>

        {isActive ?
          'Release to drop' :
          'ROLE: ' + this.props.role
        }

        {lastDroppedItem &&
          <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
        }
      </div>
    );
  }
}
