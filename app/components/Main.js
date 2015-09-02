import BoxSideBar from './BoxSideBar';
import BoxManaging from './BoxManaging';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <BoxSideBar />
            <BoxManaging />
          </div>
        );
    }
}
