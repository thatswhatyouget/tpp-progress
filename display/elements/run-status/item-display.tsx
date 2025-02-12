/// <reference path="../pokebox.tsx" />
/// <reference path="../../shared.ts" />

namespace TPP.Display.Elements.RunStatus {

    interface ItemDisplayProps {
        items: TPP.Tv.Item[];
        title: string;
    }

    export class ItemDisplay extends React.Component<ItemDisplayProps, {}> {
        render() {
            var items = this.props.items || [];
            if (!items.length)
                return null;
            return <PokeBox title={`${this.props.title} (${items.length})`} className="itemsList">
                <ul>
                    {items.map((i, k) => <li key={k} data-id={i.id} title={`Item #${i.id}`} data-quantity={i.key_item ? null : i.count}>{pokeRedCondenseText(i.name || `Item #${i.id}`)}</li>)}
                </ul>
            </PokeBox>;
        }
    }
}
