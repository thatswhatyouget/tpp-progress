/// <reference path="../shared.ts" />
namespace TPP.Display.Elements {
    export class PokeSprite extends React.PureComponent<{ pokemon: string; gender?: string; shiny?: boolean; form?: string; className?: string; baseUrl?: string; }, {}> {
        render() {
            var classes = `pokesprite ${cleanString(this.props.pokemon)} ${this.props.className} ${this.props.gender} ${this.props.shiny ? "shiny" : ""} ${cleanString(this.props.form)}`;
            return <div className={classes} title={this.props.pokemon}>
                <img src={`${this.props.baseUrl || ""}img/missingno.png`} />
            </div>;
        }
    }
}