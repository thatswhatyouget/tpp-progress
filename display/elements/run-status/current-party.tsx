/// <reference path="../pokesprite.tsx" />
/// <reference path="../pokebox.tsx" />

namespace TPP.Display.Elements.RunStatus {

    export class CurrentParty extends React.Component<{ party: TPP.Tv.PartyData; trainer?: TPP.Tv.TrainerData, run: TPP.Run; }, {}> {

        render() {
            return <PokeBox title="Current Party" className="pokemon-hud">
                <ul className="party">
                    {this.props.trainer ?
                        <li key='host' className="host">
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
                    {this.props.party.map(p => p && <Pokemon key={`${p.name}:${p.personality_value}`} pokemon={p} trainer={this.props.trainer} />)}
                </ul>
            </PokeBox>;
        }
    }

    const infoModes = ["Moves", "Info", "Met", "IVs", "EVs", "Stats", "Cond", "Evo"]

    export class Pokemon extends React.Component<{ pokemon: TPP.Tv.PartyPokemon | TPP.Tv.BoxedPokemon, className?: string, baseUrl?: string, ignoreHealth?: boolean, trainer: TPP.Tv.Trainer }, { infoMode: number; showTabs?: boolean }> {
        state = { infoMode: 0, showTabs: false };

        private renderInfo(mode: string, mon: TPP.Tv.PartyPokemon | TPP.Tv.BoxedPokemon) {
            switch (mode) {
                case "Moves":
                default:
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        {mon.species && <div className="types">
                            <TypeImg type={mon.species.type1} baseUrl={this.props.baseUrl} />
                            {mon.species.type2 != mon.species.type1 ?
                                <TypeImg type={mon.species.type2} baseUrl={this.props.baseUrl} />
                                : null}
                        </div>}
                        {mon.level && <div className="level">{mon.level + (mon.level == 100 || (mon.experience || { remaining: 1 }).remaining ? 0 : 1)}</div>}
                        {mon.ability && <div className="ability informatic">{mon.ability}</div>}
                        <ul className="moves">
                            {(mon.moves || []).map(m => <Move move={m} key={m.id} baseUrl={this.props.baseUrl} />)}
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
                case "Cond":
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
                            {typeof mon.affection === "number" && <li className="informatic">❤️: {mon.affection}</li>}
                        </ul>}
                    </div>;
                case "Info":
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        {mon.experience && <ul className="stats">
                            <li className="informatic">Experience</li>
                            <li className="informatic">Current: {mon.experience.current}</li>
                            <li className="informatic">Next Level: {mon.experience.next_level}</li>
                            <li className="informatic">Remaining: {mon.experience.remaining}</li>
                        </ul>}
                        {mon.nature && <div className="nature informatic">{mon.nature} Nature</div>}
                        {mon.characteristic && <div className="characteristic informatic">{mon.characteristic}</div>}
                        {mon.friendship && <div className="friendship informatic">{mon.friendship}</div>}
                    </div>;
                case "Met":
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        <div className="informatic">Met:</div>
                        {mon.met && <ul className="stats">
                            {mon.met.area_id && <li className="informatic">{mon.met.area_name || `Area #${mon.met.area_id}`}</li>}
                            {mon.met.level && <li className="informatic">at Level {mon.met.level}</li>}
                            {mon.met.caught_in && <li className="informatic">Caught in {mon.met.caught_in}</li>}
                            {mon.met.caught && Date.parse(mon.met.caught) > 0 && <li className="informatic">Caught on {new Date(mon.met.caught).toLocaleDateString().trim()}</li>}
                            {mon.met.caught && Date.parse(mon.met.caught) > 0 && <li className="informatic">Caught at {new Date(mon.met.caught).toLocaleTimeString().trim()}</li>}
                            {mon.met.date && Date.parse(mon.met.date) > 0 && (!mon.met.caught || (new Date(mon.met.caught).toLocaleDateString() != new Date(mon.met.date).toLocaleDateString())) && <li className="informatic">{mon.met.caught ? "First c" : "C"}aught on {new Date(mon.met.date + "T00:00:00").toLocaleDateString().trim()}</li>}
                            {this.props.trainer && mon.original_trainer.id != this.props.trainer.id && <li className="informatic">by {mon.original_trainer.name} ({(mon.original_trainer.id || "").toString().padStart(5, '0')})</li>}
                            {mon.met.game && typeof mon.met.game == "string" && <li className="informatic">in {mon.met.game}</li>}
                        </ul>}
                    </div>
                case "Evo":
                    return <div className="pokemon-info">
                        <div className="name">{mon.name}</div>
                        <div className="informatic">Evolutions:</div>
                        {(mon.species && mon.species.evolutions)
                            ? mon.species.evolutions.length > 0 ? mon.species.evolutions.map((e, i) => <div className="informatic evolution" key={i}>
                                {!!e.special_condition && <span>{e.special_condition} </span>}
                                {!!e.level && <span>At Level {e.level} </span>}
                                {!!e.is_trade && <span>Trade </span>}
                                {!!e.required_item && <span>{e.is_trade ? "Holding" : e.special_condition ? "" : "With"} {e.required_item.name} </span>}
                                {!!e.required_map_name && <span>{e.required_map_name} </span>}
                                {!!e.required_happiness && <span>With {e.required_happiness} Happiness </span>}
                                {!!e.required_time_of_day && <span>
                                    {
                                        (e.required_time_of_day == "Morn" && "In the Morning") ||
                                        (e.required_time_of_day == "Day" && "During the Day") ||
                                        (e.required_time_of_day == "Night" && "At Night") ||
                                        (e.required_time_of_day == "MornDay" && "While the Sun's Out")
                                    }
                                </span>}
                            </div>)
                                : <div className="informatic">None</div>
                            : <div className="informatic">Unknown</div>
                        }
                    </div>
            }
        }

        render() {
            let mon = this.props.pokemon;
            if (!mon)
                return null;
            var hideHealth = true;
            let isShadow = !!mon.is_shadow && !!mon.purification;
            let shadowPercentage: number;
            if (isShadow)
                shadowPercentage = (Math.max(0, mon.purification.current) / mon.purification.initial) * 100;
            if (!this.props.ignoreHealth && (mon as TPP.Tv.PartyPokemon).health) {
                var hpPercent = (mon as Tv.PartyPokemon).health[0] / (mon as Tv.PartyPokemon).health[1] * 100;
                hideHealth = false;
            }
            let classes = [
                hideHealth ? null : Math.floor(hpPercent) <= 20 ? "health-low" : Math.floor(hpPercent) > 50 ? "health-high" : "health-med",
                mon.gender,
                hideHealth ? null : (mon as Tv.PartyPokemon).health[0] == 0 ? "fainted" : "",
                (mon as Tv.PartyPokemon).status,
                mon.pokerus && mon.pokerus.infected && "pkrs-infected",
                mon.pokerus && mon.pokerus.cured && "pkrs-cured",
                isShadow && "shadow-mon",
                this.state.showTabs && "show-tabs"
            ].filter(c => !!c).map(cleanString).join(' ');
            return <li className={classes} onClick={e => this.setState(s => ({ showTabs: !s.showTabs }))}>
                <ul className="info-tabs">
                    {infoModes.map((m, i) => <li
                        key={m}
                        className={(this.state && this.state.infoMode || 0) == i && "active" || undefined}
                        onClick={e => { e.stopPropagation(); return this.setState({ infoMode: i }) }}
                        style={{ '--n': `${i}s` } as React.CSSProperties}
                    >
                        {m}
                    </li>)}
                </ul>
                <div className="pokemon-image">
                    <PokeSprite pokemon={mon.is_egg ? "Egg" : mon.species && mon.species.name || "???"} gender={mon.gender} shiny={mon.shiny} baseUrl={this.props.baseUrl} />
                    <div className="species">{mon.is_egg ? "Egg" : mon.species && mon.species.name || "???"}</div>
                </div>
                {mon.is_egg ? null : this.renderInfo(infoModes[this.state && this.state.infoMode || 0], mon)}
                {isShadow && <div className="shadow-bar"><div className="bar"><div className="shadow" style={{ width: shadowPercentage + '%' }} /></div></div>}
            </li>
        }
    }

    class TypeImg extends React.PureComponent<{ type: string; baseUrl?: string; }, {}> {
        render() {
            let type = (this.props.type == "???" ? "None" : this.props.type) || '';
            if (typeof type === "number") {
                return <img src={`https://static-cdn.jtvnw.net/emoticons/v1/${type}/1.0`} />;
            }
            return <i title={type} className={`tpp tpp-type-${type.toLowerCase()}-cutout`}><img src={`${this.props.baseUrl || ""}img/type-icons/${type.toLowerCase()}.png`} alt={type} /></i>;
        }
    }

    class Move extends React.PureComponent<{ move: TPP.Tv.Move, baseUrl?: string }, { showStats: boolean }> {
        state = { showStats: false };
        render() {
            const m = this.props.move;
            const statsStyles: React.CSSProperties = {
                transformOrigin: "left center",
                transform: "scale(.8)"
            };
            return m && <li onClick={e => { e.stopPropagation(); this.setState(state => ({ showStats: !state.showStats })); }} style={{ cursor: "pointer" }}>
                <TypeImg type={m.type} baseUrl={this.props.baseUrl} />
                {this.state.showStats
                    ? <span className="move-name">
                        <i className="fa fa-power-off" style={statsStyles} />{m.base_power}&nbsp;
                        <i className="fa fa-search" style={statsStyles} />{Math.min(m.accuracy, 100)}%&nbsp;
                        <i className="fa fa-file-powerpoint-o" style={statsStyles} />{m.pp}
                    </span>
                    : <span className="move-name">{m.name}</span>
                }
            </li>;
        }
    }
}