/// <reference path="collectionsummary.ts" />
namespace TPP.Transforms.Pokedex {
    export class DexEntry extends TPP.Pokedex.DexEntryBase {
        constructor(pokemon: string, number: number, collectionSummary: CollectionSummary, isFakeForm = false) {
            super();
            this.Number = number;
            this.Pokemon = pokemon;
            if (pokemon) {
                if (isFakeForm) {
                    this.DisplayName = pokemon;
                    this.Pokemon = `${pokemon}-${number}`;
                }
                this.GatherPokemonFromRuns(collectionSummary);
                this.GatherHallOfFameEntries(collectionSummary);
            }    
        }
        private GatherPokemonFromRuns(collectionSummary: CollectionSummary) {
            collectionSummary.Summary.forEach(s =>
                s.OwnedDict[this.Pokemon] && this.Owners.push({ Run: s.Run, CaughtOn: <number>s.OwnedDict[this.Pokemon] })
            );
            this.Owners = this.Owners.sort((o1, o2) => o1.CaughtOn - o2.CaughtOn);
            this.FilterRevisitsIfPreviouslyOwned();
        }
        private FilterRevisitsIfPreviouslyOwned() {
            this.Owners = this.Owners.filter(o => !o.Run.Revisit || this.Owners.filter(o2 => o2.Run.RunName == o.Run.Revisit.Run).length == 0);
        }
        private GatherHallOfFameEntries(collectionsummary:CollectionSummary) {
            this.HallOfFame = collectionsummary.HallOfFame.filter(h => h.Pokemon == this.Pokemon).sort((h1, h2) => h1.Time - h2.Time);
        }
    }
}