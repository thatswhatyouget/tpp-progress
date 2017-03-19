/// <reference path="../shared.ts" />
namespace TPP.Display.Elements {
    interface PokeBoxProps {
    }

    interface PokeBoxState {
    }

    export class PokeBox extends React.Component<PokeBoxProps, PokeBoxState> {
        render() {
            return <div className="pokeBorder" >
                <div className='border' />
                <div className='border' />
                <div> {this.props.children} </div>
            </div >;
        }
    }
}