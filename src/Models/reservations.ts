import {Venues} from "./Venues";
import {Packs} from "./packs";

export interface Reservation {
    id: string;
    fullName: string;
    email: string;
    venue: Venues;
    pack: Packs;
    dateFrom: Date;
  dateTo: Date;
  status: string;
  }
