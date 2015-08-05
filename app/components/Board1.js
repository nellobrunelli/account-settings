import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import Dustbin from './Dustbin';
import Box from './Box';
import update from 'react/lib/update';

@DragDropContext(HTML5Backend)
export default class Board1 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      droppedBoxNames: []
    };
  }

  // componentWillReceiveProps(nextProps) {
  //    console.log('Board one is getting the property');
  //    console.log(nextProps);
  // }

  isDropped(boxName) {
      return this.state.droppedBoxNames.indexOf(boxName) > -1;
  }

  handleDrop(index, item) {
      const { name } = item;

      this.setState(update(this.state, {
        persons: {
          [index]: {
            lastDroppedItem: {
              $set: item
            }
          }
        },
        droppedBoxNames: name ? {
          $push: [name]
        } : {}
      }));
  }

  render() {
      return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {this.props.roles.map(({ accepts, lastDroppedItem, role }, index) =>
            <Dustbin accepts={accepts}
                     lastDroppedItem={lastDroppedItem}
                     onDrop={(item) => this.handleDrop(index, item)}
                     role={role}
                     key={index} />
          )}
        </div>

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {this.props.persons.map(({ name, type }, index) =>
            <Box name={name}
                 type={type}
                 isDropped={this.isDropped(name)}
                 key={index} />
          ) }
        </div>
      </div>
    );
  }
}

Board1.propTypes = {
    persons: React.PropTypes.array.isRequired,
    roles: React.PropTypes.array.isRequired,
    personsRoles: React.PropTypes.array.isRequired
};
