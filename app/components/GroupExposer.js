const {Tabs, Tabf} = ReactBootstrap;

export default class GroupExposer extends React.Component {

    render() {
        return (
            <div>
                <Tabs defaultActiveKey={1} animation={false}>
                    <Tabf eventKey={1} title="Tab 1">Tab 1 content</Tabf>
                    <Tabf eventKey={2} title="Tab 1">Tab 2 content</Tabf>
                    <Tabf eventKey={3} title="Tab 1" disabled>Tab 3 content</Tabf>
                </Tabs>
            </div>
        );
    }
}
