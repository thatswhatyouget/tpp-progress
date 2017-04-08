/// <reference path="run.tsx" />

namespace TPP.Display.Elements.ProgressBars {

    interface CollectionProps {
        collection: TPP.Collection;
        offset?: number;
        pixelsPerDay: number;
    }
    interface CollectionState {

    }

    export class Collection extends React.Component<CollectionProps, CollectionState> {
        private get data() {
            return this.props.collection;
        }
        private get offset() {
            return this.props.offset || 0;
        }
        private get style() {
            return {

            } as React.CSSProperties;
        }
        private get scale() {
            return this.data.Scale;
        }
        private get longestRunDuration() {
            return (this.data.Runs || [])
                .map(r => Duration.parse(r.Duration, r.StartTime))
                .sort((d1, d2) => d1.TotalSeconds - d2.TotalSeconds)
                .pop();
        }
        private get ruler() {
            var steps = this.longestRunDuration.TotalTime(this.scale);
            var stops: JSX.Element[] = [];
            for (var i = 0; i <= steps + 1; i++)
                stops.push(<div className="stop" data-scale={Scale[this.scale]} />);
            return <div className="ruler">{stops}</div>
        }
        private get runs() {
            return this.data.Runs.map(r => <Run key={r.StartTime + r.RunName} run={r} scale={this.scale} pixelsPerDay={this.props.pixelsPerDay} />);
        }
        render() {
            if (!this.data.Runs || !this.data.Runs.length)
                return null;    
            return <div className="progressChart" data-label={this.data.Name} id={cleanString(this.data.Name)} style={this.style}>
                {this.ruler}
                {this.runs}    
            </div>
        }
    }

}