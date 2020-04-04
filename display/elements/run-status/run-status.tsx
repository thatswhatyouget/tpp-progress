/// <reference path="event-display.tsx" />
/// <reference path="item-display.tsx" />
/// <reference path="../partydisplay.tsx" />
/// <reference path="current-party.tsx" />
/// <reference path="pc-display.tsx" />
/// <reference path="current-location.tsx" />
/// <reference path="game-stats.tsx" />


namespace TPP.Display.Elements.RunStatus {
    interface RunStatusProps {
        run: Run;
        autoUpdate?: number;
        buildDex?: (run: Run) => TPP.Pokedex.GlobalDexBase;
        //TODO: Game Data
    }
    interface RunStatusState {
        run?: Run;
        status?: Tv.RunStatus;
        updatingRunData?: boolean;
        updatingStatus?: boolean;
        updatingScreenshot?: boolean;
        error?: string;
        lastScreen?: string;
        lastScreenTime?: string;
        dexSeen?: boolean;
    }

    export class App extends React.Component<RunStatusProps, RunStatusState> {
        private UpdateRunData() {
            this.setState({ updatingRunData: true });
            $.get("http://thatswhatyouget.github.io/tpp-progress/bin/tpp-data.json").then((data: Collection[]) => {
                data.forEach(c => c.Runs.forEach(r => {
                    if (r.RunName == this.state.run.RunName) {
                        r.Ongoing = r.Ongoing || (r.StartTime * 1000 <= Date.now() && (Duration.parse(r.Duration, r.StartTime).TotalSeconds + r.StartTime) * 1000 > Date.now());
                        this.setState({ run: r, updatingRunData: false });
                    }
                }));
            }, e => this.setState({ updatingRunData: false }));
        }

        private UpdateRunStatus() {
            if (!this.wouldHaveRunStatus) return;
            this.setState({ updatingStatus: true });
            $.get(this.inTestMode ? "http://localhost:1337/" : "https://twitchplayspokemon.tv/api/run_status").then(
                (status: Tv.RunStatus | { [key: string]: Tv.RunStatus }) => (this.props.run.APIObjectName ? status[this.props.run.APIObjectName] : status) as Tv.RunStatus
            ).then(
                (status: Tv.RunStatus) => this.setState({ status: status, updatingStatus: false }),
                e => this.setState({ updatingStatus: false/*, error: (this.state.status ? null : (e.statusText || "Error"))*/ })
            );
        }

        private UpdateScreenshot() {
            if (!this.state.run.SidegameId) return;
            this.setState({ updatingScreenshot: true });
            $.get(`https://twitchplayspokemon.tv/api/sidegame_inputs?filter:id.game=${this.state.run.SidegameId}&sort=-id.position`).then(
                (inputs: Tv.SidegameInput[]) => this.setState({
                    updatingScreenshot: false,
                    lastScreen: inputs.length ? `https://twitchplayspokemon.tv/sidegame_image/${inputs[0].id.position}` : this.state.lastScreen,
                    lastScreenTime: inputs.length ? Duration.parse(inputs[0].timestamp, this.state.run.StartTime).toString(Scale.Days) : this.state.lastScreenTime
                }),
                e => this.setState({ updatingScreenshot: false })
            );
        }

        constructor(props: RunStatusProps) {
            super(props);
            this.state = {
                run: props.run,
                status: {} as Tv.RunStatus,
                lastScreen: props.run.LastScreenshot,
                lastScreenTime: Duration.parse(props.run.Duration, props.run.StartTime).toString(Scale.Days)
            };
        }

        private updateLoop: number;
        componentDidMount() {
            if (this.isFutureRun)
                return this.updateLoop = setInterval(() => {
                    if (this.isFutureRun)
                        return this.forceUpdate();
                    clearInterval(this.updateLoop);
                    window.location.reload();
                }, 1000);
            if (this.props.run.Ongoing && this.props.autoUpdate > 0) {
                this.updateLoop = setInterval(() => {
                    if (!this.state.run.Ongoing)
                        return clearInterval(this.updateLoop);
                    this.UpdateRunData();
                    this.UpdateRunStatus();
                    this.UpdateScreenshot();
                }, this.props.autoUpdate * 60000);
            }
            this.UpdateRunStatus();
            if (this.props.run.SidegameId && !this.props.run.LastScreenshot)
                this.UpdateScreenshot();
        }
        componentWillUnmount() {
            clearInterval(this.updateLoop);
        }

        shouldComponentUpdate(nextProps, nextState) {
            return true;
        }

        private get wouldHaveRunStatus() {
            return (this.state.run.Ongoing /*&& !this.state.run.SidegameId*/) || this.inTestMode;
        }

        private get inTestMode() {
            return window.location.hash.indexOf("m4-test") > 0;
        }

        private get loading() {
            return this.state.run && this.state.run.Ongoing && this.wouldHaveRunStatus && !this.state.status && !this.state.error;
        }

        private get updating() {
            return !this.loading && (this.state.updatingRunData || this.state.updatingStatus || this.state.updatingScreenshot);
        }

        private get Pokedex() {
            if (!this.props.buildDex)
                return null;
            var dex = this.props.buildDex(this.props.run).Clone();
            if (!dex.TotalOwned)
                return null;
            return <PokeBox title="Pokédex" className="pokedex">
                {this.PokedexOutOfDate(dex) ? <h6>Outdated</h6> : ""}
                <Pokedex.Dex dex={dex}
                    caughtList={this.state.dexSeen ? this.state.status.seen_list : this.state.status.caught_list || []}
                    run={this.props.run}
                    ownedOnly={!this.state.dexSeen}
                    label={this.state.dexSeen ? "Seen" : "Owned"}
                    onClickTotal={this.state.status && (() => this.setState(s => ({ dexSeen: !s.dexSeen })))}
                >
                    <a className="plug" href="pokedex.html">See Global Pokédex</a>
                </Pokedex.Dex>
            </PokeBox>;
        }

        private PokedexOutOfDate(dex: TPP.Pokedex.GlobalDexBase) {
            return this.state.status && dex && !Array.isArray(this.state.status.caught_list) && this.state.status.caught > dex.TotalOwned;
        }

        private bakeEvents = (events: Event[]) => events.map(e => {
            (e as ViewModels.RunEvent).RunTime = Duration.parse(e.Time, this.state.run.StartTime).toString(TPP.Scale.Days).replace(/m.*/, 'm');
            return e as ViewModels.RunEvent;
        });

        private get numBadges() {
            if (this.state.status && this.state.status.badges)
                return ((this.state.status.badges || 0).toString(2).match(/1/g) || []).length; //convert to binary, count the 1s.
            return this.badges.length;
        }

        private get badgesOutOfDate() {
            return this.numBadges > this.badges.length;
        }

        private get badges() {
            return this.bakeEvents(this.state.run.Events.filter(e => e.Group == "Badges" || e.Group == "Bosses" || e.Group == "Kingdoms"));
        }
        private get eliteFour() {
            return this.bakeEvents(this.state.run.Events.filter(e => e.Group == "Elite Four" || e.Group == "Final Bosses" || (e.Group == "Champions" && (`${e.Image} ${e.Class}`.toLowerCase()).indexOf("rematch") < 0) && e.Image.indexOf("hosts") < 0));
        }
        private get eliteFourRematch() {
            return this.bakeEvents(this.state.run.Events.filter(e => e.Group == "Elite Four Rematch" || (e.Group == "Champions" && (`${e.Image} ${e.Class}`.toLowerCase()).indexOf("rematch") > 0)));
        }
        private get pastHosts() {
            return this.bakeEvents(this.state.run.Events.filter(e => e.Group == "Past Hosts" || (e.Group == "Champions" && e.Image.indexOf("hosts") > 0)));
        }
        private get rematchBadges() {
            return this.bakeEvents(this.state.run.Events.filter(e => e.Group == "Rematch Badges"));
        }

        private get partyDisplay() {
            if (this.state.status && this.state.status.party)
                return <CurrentParty party={this.state.status.party} trainer={this.state.status} run={this.state.run} />
            //var display = new ViewModels.PartyDisplay(this.state.status, this.state.run, Scale.Days);
            else {
                var hof = this.state.run.Events.filter(e => (e as HallOfFame).Party).pop() as HallOfFame;
                if (!hof)
                    return null;
                var display = new ViewModels.PartyDisplay(hof, this.state.run, Scale.Days);
            }
            var title = display.Title;
            var className = display.Class;
            display.Title = display.Class = display.Colors = null;
            return <PokeBox title={title} className={className}>
                <PartyDisplay partyInfo={display} />
            </PokeBox>;
        }

        private get isFutureRun() {
            return this.state.run.StartTime * 1000 > Date.now();
        }

        private get timeUntilRun() {
            var duration = new Duration(0);
            duration.TotalSeconds = (this.state.run.StartTime * 1000 - Date.now()) / 1000;
            return duration.toString(Scale.Weeks);
        }

        render() {
            this.state.status.items = this.state.status.items || {};
            if (this.state.error)
                var innards = <h1 className='error'>Run Status is not currently available.</h1>;
            else if (this.loading)
                var innards = <i className='fa fa-spinner fa-pulse' />;
            else if (this.isFutureRun)
                var innards = <h2>Starts in {this.timeUntilRun}</h2>;
            else
                var innards = <div className={`${cleanString(this.state.run.RunName)} ${this.state.run.Class}`}>
                    {this.state.lastScreen ? <PokeBox className="last-screenshot" title={`${this.state.run.Ongoing ? 'Latest' : 'Last'} Screenshot`}>
                        <img src={this.state.lastScreen} />
                        {this.state.lastScreenTime ? <h4>{this.state.lastScreenTime}</h4> : null}
                    </PokeBox> : null}
                    {this.partyDisplay}
                    <PokeBox title="Duration"><h3>{Duration.parse(this.state.run.Ongoing ? new Date().toISOString() : this.state.run.Duration, this.state.run.StartTime).toString()}</h3></PokeBox>
                    <CurrentLocation mapName={this.state.status.map_name} areaName={this.state.status.area_name} />
                    <EventDisplay key="Past Hosts" events={this.pastHosts} />
                    <EventDisplay key="Elite Four Rematch" events={this.eliteFourRematch} />
                    <EventDisplay key="Rematch Badges" events={this.rematchBadges} />
                    <EventDisplay key="Elite Four" events={this.eliteFour} />
                    <EventDisplay key="Badges" events={this.badges}>
                        {this.badgesOutOfDate ? <h6>Outdated</h6> : null}
                    </EventDisplay>
                    <GameStats key="Game Stats" title="Stats" gameStats={this.state.status.game_stats} />
                    <ItemDisplay key="Items" title="Items" items={this.state.status.items.items} />
                    <ItemDisplay key="Key Items" title="Key Items" items={this.state.status.items.key} />
                    <ItemDisplay key="Key Items FR" title="Key Items (FireRed)" items={this.state.status.items["key_firered"]} />
                    <ItemDisplay key="Key Items R" title="Key Items (Red)" items={this.state.status.items["key_red"]} />
                    <ItemDisplay key="Poké Balls" title="Poké Balls" items={this.state.status.items.balls} />
                    <ItemDisplay key="TMs" title="TMs and HMs" items={this.state.status.items.tms} />
                    <ItemDisplay key="TM" title="TMs and HMs" items={this.state.status.items.tm} />
                    <ItemDisplay key="Medicine" title="Medicine" items={this.state.status.items.medicine} />
                    <ItemDisplay key="Mail" title="Mail" items={this.state.status.items.mail} />
                    <ItemDisplay key="Battle Items" title="Battle Items" items={this.state.status.items.battle} />
                    <ItemDisplay key="Berries" title="Berries" items={this.state.status.items.berries} />
                    <ItemDisplay key="Berry" title="Berries" items={this.state.status.items.berry} />
                    <ItemDisplay key="Z-Crystals" title="Z-Crystals" items={this.state.status.items.z_crystals} />
                    <ItemDisplay key="Rotom Powers" title="Rotom Powers" items={this.state.status.items.rotom_powers} />
                    <ItemDisplay key="Free Space" title="Free Space" items={this.state.status.items.free_space} />
                    <ItemDisplay key="PC Items" title={pokeRedCondenseText(`${this.state.run.HostName}'s PC`)} items={this.state.status.items.pc} />
                    <ItemDisplay key="PC Items FR" title={pokeRedCondenseText(`FireRed's PC`)} items={this.state.status.items["pc_firered"]} />
                    <ItemDisplay key="PC Items R" title={pokeRedCondenseText(`Red's PC`)} items={this.state.status.items["pc_red"]} />
                    {this.Pokedex}
                    {this.state.status && this.state.status.daycare && this.state.status.daycare.length > 0 && <PCBox boxName="Daycare" boxContents={this.state.status.daycare} />}
                    {this.state.status && <PC pc={this.state.status.pc} />}
                </div>;
            return <div className="run-status">
                <h1>
                    {this.state.run.RunName}
                    {this.updating ? <i className="fa fa-refresh fa-spin updating" /> : null}
                </h1>
                {innards}
            </div>;
        }
    }
}
