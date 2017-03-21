/// <reference path="../pokebox.tsx" />
/// <reference path="../../viewmodels/runevent.ts" />

namespace TPP.Display.Elements.RunStatus {

    interface EventDisplayProps {
        events: ViewModels.RunEvent[];
        title?: string;
    }
    interface EventDisplayProps {

    }

    export class EventDisplay extends React.Component<EventDisplayProps, EventDisplayProps> {
        private get title() {
            return this.props.title || (this.props.events[0] || { Group: "" }).Group;
        }
        private get events() {
            return <ul>
                {(this.props.events || []).map((e, i, arr) => <li key={i}>
                    <h3>{e.Name}</h3>
                    {e.ImageSource ?
                        <a href={e.ImageSource} target="_blank">
                            <img src={e.Image} />
                        </a> :
                        <img src={e.Image} />
                    }
                    <h4>{e.RunTime}</h4>
                    {e.Attempts ?
                        <h5>{`${e.Attempts} Attempt${e.Attempts > 1 ? 's' : ''}`}</h5>
                        : arr.filter(e=>!!e.Attempts).length > 0 ? <h5>&nbsp;</h5> : null
                    }
                </li>)}
            </ul>;
        }
        render() {
            if (this.props.events && this.props.events.length)
                return <PokeBox title={this.title} className="badgeList">
                    {this.props.children}
                    {this.events}
                </PokeBox>;
            return null;
        }
    }

}