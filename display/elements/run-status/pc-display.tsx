/// <reference path="current-party.tsx" />
namespace TPP.Display.Elements.RunStatus {
    export class PC extends React.Component<{ pc: TPP.Tv.CombinedPCData }, {}> {
        render() {
            if (!this.props.pc)
                return null;
            return <div>
                <h2>{pokeRedCondenseText("BILL's PC")}</h2>
                {this.props.pc.boxes.filter(b => !!b && !!b.box_number).map(b => <PokeBox title={`#${b.box_number}: ${b.box_name} (${b.box_contents.length})`} key={b.box_number} className="pokemon-hud pc-box">

                    <ul className="party">
                        {b.box_contents.length > 0 ?
                            b.box_contents.map(p => <Pokemon pokemon={p} key={p.box_slot} />)
                            :
                            <li className="empty">Empty</li>
                        }
                    </ul>

                </PokeBox>)}
            </div>;
        }
    }
}