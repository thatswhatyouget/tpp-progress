/// <reference path="event.tsx" />

namespace TPP.Display.Elements.ProgressBars {

    interface RunProps {
        run: TPP.Run;
        scale: Scale;
        offset?: number;
        twitchVideos?: JQueryPromise<Twitch.Video[]>
        pixelsPerDay: number;
    }
    interface RunState {

    }

    // function drawRun(runInfo: TPP.Run, run?: HTMLDivElement, scale = TPP.Scale.Days, events = true) {
    //     run = run || document.createElement("div");
    //     run.className = "run";
    //     if (runInfo.Ongoing) run.className += " ongoing";
    //     if (runInfo.Class) run.className += " " + runInfo.Class;
    //     if (runInfo.Region) run.className += " " + cleanString(runInfo.Region);
    //     var duration = Duration.parse(runInfo.Duration, runInfo.StartTime);
    //     runInfo.Duration = duration.toString(TPP.Scale.Weeks);
    //     run.setAttribute("data-duration", runInfo.Duration);
    //     run.setAttribute("data-endtime", Duration.parse(runInfo.EndDate || runInfo.Duration, runInfo.StartTime).toString(TPP.Scale.Weeks));
    //     run.setAttribute("data-start", runInfo.StartTime.toString());
    //     run.setAttribute("data-label", runInfo.RunName + ": " + duration.toString(scale));
    //     run.setAttribute("data-startDate", new Date(runInfo.StartDate).toISOString().replace(/-/g, '/').replace(/T/, ' ').replace(/:\d+\.\d+/, '').replace(/Z/, ' UTC'));
    //     run.style.backgroundColor = runInfo.ColorPrimary;
    //     run.style.backgroundImage = runInfo.BackgroundImage;
    //     run.style.borderColor = run.style.color = runInfo.ColorSecondary;
    //     setUniqueId(run, runInfo.RunName);
    //     if (runInfo.HostImage && runInfo.HostName) run.appendChild(drawHost(runInfo, scale));
    //     if (events) {
    //         runInfo.Events.filter(e => Duration.parse(e.Time, runInfo.StartTime).TotalSeconds >= 0).sort((e1, e2) => Duration.parse(e1.Time, runInfo.StartTime).TotalSeconds - Duration.parse(e2.Time, runInfo.StartTime).TotalSeconds).forEach(event => run.appendChild(drawEvent(event, runInfo, scale)));
    //         runInfo.Events.forEach(e => delete e.New);
    //         drawVideos(runInfo, run, scale);
    //         setTimeout(() => updateRun(runInfo, run, scale), 15 * 60000);
    //         drawConcurrentRuns(runInfo, run, scale);
    //     }
    //     $(run).on('click', function (e) {
    //         if (e.shiftKey) {
    //             $(this).hide();
    //             if (!$(this).siblings(".run:visible").is("*"))
    //                 $(this).parent().hide();
    //         }
    //         else if (e.ctrlKey || e.metaKey) {
    //             console.log(JSON.stringify(runInfo));
    //         }
    //     });
    //     setTimeout(() => scaleRun(run), 0);
    //     return run;
    // }

    export class Run extends React.Component<RunProps, RunState> {
        private get data() {
            return this.props.run;
        }
        private get style() {
            return {
                backgroundColor: this.data.ColorPrimary,
                backgroundImage: this.data.BackgroundImage,
                borderColor: this.data.ColorSecondary,
                color: this.data.ColorSecondary,
                width: this.duration.TotalTime(this.props.scale) * this.props.pixelsPerDay + "px"
            } as React.CSSProperties;
        }
        private get duration() {
            return Duration.parse(this.data.Duration, this.data.StartTime)
        }
        private get label() {
            return `${this.data.RunName}: ${this.duration.toString(this.props.scale)}`;
        }
        private get className() {
            return [
                "run",
                this.data.Ongoing ? "ongoing" : null,
                this.data.Class,
                cleanString(this.data.Region),
                cleanString(this.data.RunName)
            ].filter(c => !!c).join(' ');
        }
        render() {
            return <div className={this.className} style={this.style} data-label={this.label} >

            </div>
        }
    }

}