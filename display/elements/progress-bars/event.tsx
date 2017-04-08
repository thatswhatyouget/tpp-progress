/// <reference path="../../shared.ts" />
/// <reference path="../../viewmodels/runevent.ts" />


namespace TPP.Display.Elements.ProgressBars {

    interface EventProps {
        events: ViewModels.RunEvent[];
        pixelsPerDay: number;
    }
    interface EventState {

    }

    export class Event extends React.Component<EventProps, EventState> {

    }
    
}