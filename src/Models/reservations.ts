import {Venues} from "./Venues";
import {Packs} from "./packs";

export interface Reservation {
    id: string;
    firstName: string;
    lastName: string;
    venue: Venues;
    pack: Packs;
    dateFrom: Date;
  dateTo: Date;
  status: string;
  }
