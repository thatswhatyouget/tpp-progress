/// <reference path="../pokebox.tsx" />
/// <reference path="../../viewmodels/runevent.ts" />

namespace TPP.Display.Elements.RunStatus {

    interface EventDisplayProps {
        events: ViewModels.RunEvent[];
        liveEvents?: TPP.Tv.Event[];
        title?: string;
    }
    interface EventDisplayState {

    }

    export class EventDisplay extends React.Component<EventDisplayProps, EventDisplayState> {
        private get title() {
            return this.props.title || (this.props.events[0] || { Group: "" }).Group;
        }
        private get events() {
            return <ul>
                {(this.props.events || []).map((e, i, arr) => <li key={i} >
                    <h3>{e.Name}</h3>
                    {React.createElement(e.ImageSource ? 'a' : 'div',
                        {
                            href: e.ImageSource || null,
                            target: e.ImageSource ? "_blank" : null,
                            className: ['image', (e.Class || '').toLowerCase(), cleanString(e.Name)].join(' ').trim()
                        } as any,
                        <img src={e.Image || 'img/missingno.png'} />
                    )}
                    <h4>{e.RunTime}</h4>
                    {e.Attempts ?
                        <h5>{`${e.Attempts} Attempt${e.Attempts > 1 ? 's' : ''}`}</h5>
                        : arr.filter(e => !!e.Attempts).length > 0 ? <h5>&nbsp;</h5> : null
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