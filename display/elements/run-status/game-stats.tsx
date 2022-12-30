/// <reference path="../pokebox.tsx" />
/// <reference path="../../shared.ts" />

namespace TPP.Display.Elements.RunStatus {

    interface GameStatsDisplayProps {
        gameStats: { [key: string]: number };
        title: string;
    }

    export class GameStats extends React.Component<GameStatsDisplayProps, {}> {
        render() {
            var statsList = Object.keys(this.props.gameStats || {});
            if (!statsList.length)
                return null;
            return <PokeBox title={`${this.props.title}`} className="itemsList gameStats">
                <ul>
                    {statsList.map(k => <GameStat key={k} name={k} value={this.props.gameStats[k]} />)}
                </ul>
            </PokeBox>;
        }
    }

    const secondsDetectExp = /(Seconds Spent)/i;
    const timeDetectExp = /\bTime\b/i;
    const percentDetectExp = /Percentage/i;
    const moneyDetectExp = /Money/i;
    const filmGrossExp = /PokéStar.*(Box|Gross)/i

    class GameStat extends React.PureComponent<{ name: string, value: number }, {}> {
        render() {
            let name = this.props.name;
            let value = this.props.value.toLocaleString();
            if (timeDetectExp.test(name))
                value = new Duration(0)
                    .AddHours(this.props.value >> 16)
                    .AddMinutes((this.props.value >> 8) & 0xFF)
                    .AddSeconds(this.props.value & 0xFF)
                    .MultiplyBy(65835/65536) // fix GB/GBA clock drift
                    .toString();
            else if (secondsDetectExp.test(name)) {
                const dur = new Duration(0);
                dur.TotalSeconds = this.props.value;
                value = dur.toString(dur.TotalDays >= 1 ? TPP.Scale.Days : dur.TotalHours >= 1 ? TPP.Scale.Hours : TPP.Scale.Minutes);
                name = name.replace(secondsDetectExp, "Time Spent");
            }
            // else if (percentDetectExp.test(name))
            //     value = value + "%"; // % doesn't exist in Pokered font
            else if (filmGrossExp.test(name))
                value = `$${(this.props.value / 10).toLocaleString()}Bn`;
            else if (moneyDetectExp.test(name))
                value = "$" + value;
            return <li data-quantity={value}>{pokeRedCondenseText(name)}:</li>;
        }
    }
}
