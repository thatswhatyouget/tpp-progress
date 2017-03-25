/// <reference path="../shared.ts" />
namespace TPP.Display.Elements {
    interface PokeBoxProps {
        className?: string;
        title?: string;
    }

    interface PokeBoxState {
    }

    export class PokeBox extends React.Component<PokeBoxProps, PokeBoxState> {
        render() {
            return <div className={`pokeBorder ${this.props.className || ''}`.trim()} >
                <div className='border' />
                <div className='border' />
                <h3>{pokeRedCondenseText(this.props.title)}</h3>
                <div>
                    {this.props.children}
                </div>
            </div >;
        }
    }
}