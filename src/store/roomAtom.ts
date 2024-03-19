import { atom } from "jotai";
import { Room } from "../types";

export const roomAtom = atom<Room[]>([]);
