/// <reference path="pokesprite.tsx" />
/// <reference path="../viewmodels/partydisplay.ts" />
namespace TPP.Display.Elements {
    interface PartyDisplayProps {
        partyInfo: ViewModels.PartyDisplay;
    }

    interface PartyDisplayState {
    }

    export class PartyDisplay extends React.Component<PartyDisplayProps, PartyDisplayState> {
        private get style() {
            var style: React.CSSProperties = {}, colors = this.props.partyInfo.Colors;
            if (colors) {
                if (colors.ColorPrimary)
                    style.backgroundColor = colors.ColorPrimary;
                if (colors.ColorSecondary)
                    style.borderColor = colors.ColorSecondary;
            }
            return style;
        }

        private get party() {
            return this.props.partyInfo.Party.map((p, i) => p ?
                <td key={i + 1}>
                    <div className={`entry ${p.Gender}`}>
                        <span className="level">{p.Level}</span>
                        <PokeSprite pokemon={p.Pokemon} gender={p.Gender} shiny={p.Shiny} form={p.Form} className={p.Class} />
                        <div className="info">
                            <div className="name">{this.preserveSpacing(p.Name)}</div>
                            {Object.keys(p.Info).map(k => <div key={k} data-entry={k}>{p.Info[k]}</div>)}
                        </div>
                    </div>
                </td>
                : <td key={i + 1}><div className="entry" /></td>);
        }

        private preserveSpacing(str: string) {
            return str.replace(/\s/g, "\u00A0");
        }

        render() {
            var partyInfo = this.props.partyInfo;
            return <div className={partyInfo.Class} style={this.style}>
                {partyInfo.Title ? <h3>{partyInfo.Title}</h3> : null}
                {partyInfo.RunTime ? <h4 className="time">{partyInfo.RunTime}</h4> : null}
                {partyInfo.Attempts ? <h5 className="attempts">{partyInfo.Attempts}</h5> : null}
                {partyInfo.Ribbon ? <img className="ribbon" src={partyInfo.Ribbon} /> : null}
                <table>
                    <tr>
                        <td key={0}>
                            <div className="entry host">
                                {partyInfo.Host.ImageSource ?
                                    <a href={partyInfo.Host.ImageSource} target="_blank">
                                        <img src={partyInfo.Host.Image} />
                                    </a>
                                    : <img src={partyInfo.Host.Image} />}
                                <div className="info">
                                    <div className="name">{this.preserveSpacing(partyInfo.Host.Name)}</div>
                                    {Object.keys(partyInfo.Host.Info).map(k => <div key={k} data-entry={k}>{partyInfo.Host.Info[k]}</div>)}
                                </div>
                            </div>
                        </td>
                        {this.party}
                    </tr>
                </table>
                {this.props.children}
            </div>;
        }
    }

}