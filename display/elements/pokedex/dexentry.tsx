/// <reference path="../../shared.ts" />
/// <reference path="../../../models/pokedex.ts" />

namespace TPP.Display.Elements.Pokedex {
    interface DexEntryProps {
        entry: TPP.Pokedex.DexEntryBase;
        showOwnership?: boolean;
    }

    interface DexEntryState {
    }

    export class DexEntry extends React.Component<DexEntryProps, DexEntryState> {
        Number: string;
        private entry: TPP.Pokedex.DexEntryBase;
        private showOwnership: boolean;

        constructor(props) {
            super(props);
            this.entry = props.entry;
            this.showOwnership = !!props.showOwnership;
            var idx = this.entry.Number.toString();
            this.Number = ('000' + idx).substring(idx.length);
        }

        private get className() {
            return ("dexEntry " + (!this.showOwnership || this.entry.IsOwned ? "owned" : "")).trim();
        }

        private get pokeName() {
            return cleanString(this.entry.Pokemon) || "unidentified";
        }

        private get owners() {
            if (!this.entry.IsOwned)
                return "Didn't Catch";
            return 'Owned by:\n' + this.entry.Owners.map(o => o.Run.HostName + " (" + o.Run.RunName + ")").join('\n');
        }

        private get style() {
            var style: React.CSSProperties = {};
            if (this.showOwnership && this.entry.IsOwned)
                style.backgroundColor = this.entry.Owners[0].Run.ColorPrimary;
            return style;
        }

        private get hallOfFame() {
            if (!this.showOwnership)
                return null;
            var hofs = this.entry.HallOfFame;
            if (!hofs.length) return null;
            return <div className="hofRibbon">{hofs.map(mon => {
                var title = mon.HostName + "'s " + mon.Nickname + " (" + mon.RunName + ")";
                return <img key={title} src={mon.Ribbon} alt={title} title={title} />;
            })}</div>;
        }

        render() {
            return <div key={this.Number} className={this.className} style={this.style} title={this.showOwnership ? this.owners : null} >
                <h3>{this.Number}</h3>
                <h4>{this.entry.Pokemon}</h4>
                {this.props.children}
                <div className={`pokesprite ${this.pokeName}`}><img src='img/missingno.png' /></div>
                {this.hallOfFame}
            </div>;
        }
    }
}