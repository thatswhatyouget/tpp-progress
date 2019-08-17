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
                                <div className="informatic balls">{(this.props.trainer || { ball_count: 0 }).ball_count}</div>
                                <div className="informatic badges">{`Badges: ${((this.props.trainer.badges || 0).toString(2).replace(/0/g, '').length / (this.props.run.RunName == "Burning Red" ? 2 : 1))}`}</div>
                                <div className="informatic owned">{`Owned: ${this.props.trainer.caught}`}</div>
                                <div className="informatic seen">{`Seen: ${this.props.trainer.seen}`}</div>
                            </div>
                        </li>
                        : null}
                    {this.props.party.map(p => p && <Pokemon key={`${p.name}:${p.personality_value}`} pokemon={p} />)}
                </ul>
            </PokeBox>;
        }
    }

    const infoModes = ["Default", "Misc", "IVs", "EVs", "Stats", "Condition"]

    export class Pokemon extends React.Component<{ pokemon: TPP.Tv.PartyPokemon | TPP.Tv.BoxedPokemon, className?: string }, { infoMode: number; }> {

        private renderInfo(mode: string, mon: TPP.Tv.PartyPokemon | TPP.Tv.BoxedPokemon) {
            switch (mode) {
                default:
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        <div className="types">
                            <TypeImg type={mon.species.type1} />
                            {mon.species.type2 != mon.species.type1 ?
                                <TypeImg type={mon.species.type2} />
                                : null}
                        </div>
                        {mon.level && <div className="level">{mon.level + (mon.level == 100 || (mon.experience || { remaining: 1 }).remaining ? 0 : 1)}</div>}
                        {mon.ability && <div className="ability informatic">{mon.ability}</div>}
                        <ul className="moves">
                            {mon.moves.map(m => <Move move={m} key={m.id} />)}
                        </ul>
                        {mon.held_item && mon.held_item.id > 0 && <div className="held-item informatic">
                            {mon.held_item.name}
                        </div>}
                    </div>;
                case "EVs":
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        <div className="informatic">EVs</div>
                        {mon.evs && <ul className="stats">
                            <li className="informatic">HP: {mon.evs.hp}</li>
                            <li className="informatic">Atk: {mon.evs.attack}</li>
                            <li className="informatic">Def: {mon.evs.defense}</li>
                            <li className="informatic">Spd: {mon.evs.speed}</li>
                            <li className="informatic">Spatk: {mon.evs.special_attack}</li>
                            <li className="informatic">Spdef: {mon.evs.special_defense}</li>
                        </ul>}
                    </div>;
                case "IVs":
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        <div className="informatic">IVs</div>
                        {mon.ivs && <ul className="stats">
                            <li className="informatic">HP: {mon.ivs.hp}</li>
                            <li className="informatic">Atk: {mon.ivs.attack}</li>
                            <li className="informatic">Def: {mon.ivs.defense}</li>
                            <li className="informatic">Spd: {mon.ivs.speed}</li>
                            <li className="informatic">Spatk: {mon.ivs.special_attack}</li>
                            <li className="informatic">Spdef: {mon.ivs.special_defense}</li>
                        </ul>}
                    </div>;
                case "Stats":
                    let pMon = mon as TPP.Tv.PartyPokemon;
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        <div className="informatic">Stats</div>
                        {pMon.stats && <ul className="stats">
                            <li className="informatic">HP: {pMon.stats.hp}</li>
                            <li className="informatic">Atk: {pMon.stats.attack}</li>
                            <li className="informatic">Def: {pMon.stats.defense}</li>
                            <li className="informatic">Spd: {pMon.stats.speed}</li>
                            <li className="informatic">Spatk: {pMon.stats.special_attack}</li>
                            <li className="informatic">Spdef: {pMon.stats.special_defense}</li>
                        </ul>}
                    </div>;
                case "Condition":
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        <div className="informatic">Condition</div>
                        {mon.condition && <ul className="stats">
                            <li className="informatic">Coolness: {mon.condition.coolness}</li>
                            <li className="informatic">Cuteness: {mon.condition.cuteness}</li>
                            <li className="informatic">Beauty: {mon.condition.beauty}</li>
                            <li className="informatic">Smartness: {mon.condition.smartness}</li>
                            <li className="informatic">Toughness: {mon.condition.toughness}</li>
                            <li className="informatic">Feel/Sheen: {mon.condition.feel}</li>
                        </ul>}
                    </div>;
                case "Misc":
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        {mon.experience && <ul className="stats">
                            <li className="informatic">Experience</li>
                            <li className="informatic">Current: {mon.experience.current}</li>
                            <li className="informatic">Next Level: {mon.experience.next_level}</li>
                            <li className="informatic">Remaining: {mon.experience.remaining}</li>
                        </ul>}
                        {mon.nature && <div className="nature informatic">{mon.nature}</div>}
                        {mon.characteristic && <div className="characteristic informatic">{mon.characteristic}</div>}
                        {mon.friendship && <div className="friendship informatic">{mon.friendship}</div>}
                        {mon.met && mon.met.caught_in && <div className="caught-in informatic">{mon.met.caught_in}</div>}
                    </div>;

            }
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
                (mon as Tv.PartyPokemon).status
            ].filter(c => !!c).map(cleanString).join(' ');
            return <li className={classes} onClick={e => this.setState(s => ({ infoMode: ((s && s.infoMode || 0) + 1) % infoModes.length }))}>
                <div className="pokemon-image">
                    <PokeSprite pokemon={mon.is_egg ? "Egg" : mon.species.name} gender={mon.gender} shiny={mon.shiny} />
                    <div className="species">{mon.is_egg ? "Egg" : mon.species.name}</div>
                </div>
                {mon.is_egg ? null : this.renderInfo(infoModes[this.state && this.state.infoMode || 0], mon)}
            </li>
        }
    }

    class TypeImg extends React.PureComponent<{ type: string; }, {}> {
        render() {
            let type = ((this.props.type == "???" ? "Fairy" : this.props.type) || '');
            return <img src={`img/type-icons/${type.toLowerCase()}.png`} title={type} alt={type} />
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