/// <reference path="dexentry.tsx" />

namespace TPP.Display.Elements.Pokedex {
    interface DexProps {
        dex: TPP.Pokedex.GlobalDexBase;
        showOwnership?: boolean;
        ownedOnly?: boolean;
        className?: string;
    }

    interface DexState {
    }

    export class Dex extends React.Component<DexProps, DexState> {
        private dex: TPP.Pokedex.GlobalDexBase;
        private showOwnership: boolean;
        private ownedOnly: boolean;

        constructor(props: DexProps) {
            super(props);
            this.dex = props.dex;
            this.showOwnership = props.showOwnership !== false;
            this.ownedOnly = props.ownedOnly;
            if (this.showOwnership)
                this.dex.FilterUnownedGlitchMon();
            else
                this.dex.FilterGlitchMon();
        }

        private get className() {
            return ("pokedex " + (this.props.className || "")).trim();
        }

        private get entries() {
            return (this.ownedOnly ? this.dex.Owned : this.dex.Entries).map(e => <DexEntry key={e.Number} entry={e} showOwnership={this.showOwnership} />);
        }

        private get ownedDisplay() {
            if (!this.showOwnership)
                return <br />;
            return <h2 className='total'>
                Owned: <span>{`${this.dex.TotalOwned}/${this.dex.TotalInDex} (${this.dex.OwnedPercentage.toFixed(2)}%)`}</span>
            </h2>
        }

        shouldComponentUpdate(nextProps, nextState) {
            return true;
        }

        render() {
            return <div className={this.className}>
                {this.ownedDisplay}
                {this.entries}
                {this.props.children}
            </div>;
        }
    }
}