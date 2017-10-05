/// <reference path="../pokebox.tsx" />

namespace TPP.Display.Elements.RunStatus {

    export class CurrentLocation extends React.PureComponent<{ mapName: string, areaName: string }, {}> {
        render() {
            let map = this.props.mapName;
            let area = this.props.areaName;
            let text = map || area;
            if (!area && !map) {
                return null;
            }
            else if ((map || '').toLowerCase().indexOf((area || '').toLowerCase().split(' ').pop()) < 0) {
                text += ` (${area})`;
            }
            return <PokeBox title="Current Location"><h3>{text}</h3></PokeBox>
        }
    }
}
