/// <reference path="../pokesprite.tsx" />
/// <reference path="../pokebox.tsx" />
namespace TPP.Display.Elements.RunStatus {

    export class CurrentParty extends React.Component<{ party: TPP.Tv.PartyData; trainer?: TPP.Tv.TrainerData, run: TPP.Run; }, {}> {

        render() {
            return <PokeBox title="Current Party" className="pokemon-hud">
                <ul className="party">
                    {this.props.trainer ?
                        <li key='host'>
                            <div className="pokemon-image">
                                {this.props.run.HostImageSource ?
                                    <a href={this.props.run.HostImageSource} target="_blank">
                                        <img src={this.props.run.HostImage} alt={this.props.run.HostName} />
                                    </a>
                                    :
                                    <img src={this.props.run.HostImage} alt={this.props.run.HostName} />
                                }
                            </div>
                            <div className="pokemon-info">
                                <div className="name">{this.props.trainer.name}</div>
                                <div className="informatic money">{(this.props.trainer.money || 0).toLocaleString()}</div>
                                <div className="informatic coins">{(this.props.trainer.coins || 0).toLocaleString()}</div>
                                <div className="informatic balls">{((this.props.trainer.items_ball || []).map(b => b.count)).reduce((a, b) => a + b, 0).toLocaleString()}</div>
                                <div className="informatic badges">{`Badges: ${this.props.run.Events.filter(e => e.Group == "Badges").length}`}</div>
                                <div className="informatic owned">{`Owned: ${this.props.trainer.caught}`}</div>
                                <div className="informatic seen">{`Seen: ${this.props.trainer.seen}`}</div>
                            </div>
                        </li>
                        : null}
                    {this.props.party.map(p => <Pokemon key={`${p.name}:${p.personality_value}`} pokemon={p} />)}
                </ul>
            </PokeBox>;
        }
    }

    export class Pokemon extends React.Component<{ pokemon: TPP.Tv.PartyPokemon | TPP.Tv.BoxedPokemon }, {}> {
        get status() {
            let status = (this.props.pokemon as TPP.Tv.PartyPokemon).status;
            if (status % 8 > 0)
                return "SLP";
            if (status & 8)
                return "PSN";
            if (status & 16)
                return "BRN";
            if (status & 32)
                return "FRZ";
            if (status & 64)
                return "PAR";
            if (status & 128)
                return "TOX";
            return null;
        }
        render() {
            let mon = this.props.pokemon;
            if (!mon)
                return null;
            var hideHealth = true;
            if ((mon as TPP.Tv.PartyPokemon).health) {
                var hpPercent = (mon as Tv.PartyPokemon).health[0] / (mon as Tv.PartyPokemon).health[1] * 100;
                hideHealth = false;
            }    
            let classes = [
                hideHealth ? null : Math.floor(hpPercent) <= 20 ? "health-low" : Math.floor(hpPercent) > 50 ? "health-high" : "health-med",
                mon.gender,
                hideHealth ? null : (mon as Tv.PartyPokemon).health[0] == 0 ? "fainted" : "",
                this.status
            ].filter(c => !!c).map(cleanString).join(' ');
            return <li className={classes}>
                <div className="pokemon-image">
                    <PokeSprite pokemon={mon.is_egg ? "Egg" : mon.species.name} gender={mon.gender} shiny={mon.shiny} />
                    <div className="species">{mon.is_egg ? "Egg" : mon.species.name}</div>
                </div>
                {mon.is_egg ? null :
                    <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        <div className="types">
                            <TypeImg type={mon.species.type1} />
                            {mon.species.type2 != mon.species.type1 ?
                                <TypeImg type={mon.species.type2} />
                                : null}
                        </div>
                        <div className="level">{mon.level + ((mon.experience || { remaining: 1 }).remaining ? 0 : 1)}</div>
                        <ul className="moves">
                            {mon.moves.map(m => <Move move={m} key={m.id} />)}
                        </ul>
                        {mon.held_item.id > 0 ? <div className="held-item informatic">
                            {mon.held_item.name}
                        </div> : null}
                    </div>}
            </li>
        }
    }

    class TypeImg extends React.PureComponent<{ type: string; }, {}> {
        render() {
            let type = ((this.props.type == "???" ? "Fairy" : this.props.type) || '').toLowerCase();
            return <img src={`img/types/${type}.png`} />
        }
    }

    class Move extends React.PureComponent<{ move: TPP.Tv.Move }, {}> {
        render() {
            let m = this.props.move;
            return <li>
                <TypeImg type={m.type} />
                <span className="move-name">{m.name}</span>
            </li>;
        }
    }
}