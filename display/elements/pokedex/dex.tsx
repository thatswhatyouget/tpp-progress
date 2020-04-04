/// <reference path="dexentry.tsx" />

namespace TPP.Display.Elements.Pokedex {
    interface DexProps {
        dex: TPP.Pokedex.GlobalDexBase;
        caughtList?: number[];
        run?: TPP.Run;
        showOwnership?: boolean;
        ownedOnly?: boolean;
        className?: string;
        spriteClass?: string;
        label?: string;
        onClickTotal?: () => void;
    }

    interface DexState {
        filteredDex: TPP.Pokedex.GlobalDexBase;
    }

    export class Dex extends React.Component<DexProps, DexState> {

        constructor(props: DexProps) {
            super(props);
            this.state = { filteredDex: this.FilterDex() };
        }

        private get className() {
            return ("pokedex " + (this.props.className || "")).trim();
        }

        private FilterDex(props = this.props) {
            const dex = props.dex.Clone();
            if (props.caughtList) {
                //fold in run's caught list
                props.caughtList.forEach(c => dex.Entries.forEach(e => {
                    if (props.run && e.Number == c && !e.Owners.some(o => o.Run == props.run))
                        e.Owners.push({ Run: props.run, CaughtOn: Date.now() / 1000 });
                }));
                dex.FilterOwnedInDexToRuns([props.run]);
            }
            if (props.showOwnership !== false)
                dex.FilterUnownedGlitchMon();
            else
                dex.FilterGlitchMon();
            return dex;
        }

        private get entries() {
            return (this.props.ownedOnly ? this.state.filteredDex.Owned : this.state.filteredDex.Entries).map(e => <DexEntry key={e.Number} entry={e} showOwnership={this.props.showOwnership !== false} spriteClass={this.props.spriteClass} />);
        }

        private get ownedDisplay() {
            if (this.props.showOwnership === false)
                return <br />;
            return <h2 className='total' onClick={this.props.onClickTotal && (_ => this.props.onClickTotal())}>
                {this.props.label || "Owned"}: <span>{`${this.state.filteredDex.TotalOwned}/${this.state.filteredDex.TotalInDex} (${this.state.filteredDex.OwnedPercentage.toFixed(2)}%)`}</span>
            </h2>
        }

        componentWillReceiveProps(nextProps) {
            this.setState({ filteredDex: this.FilterDex(nextProps) });
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